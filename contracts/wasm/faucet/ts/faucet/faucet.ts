// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import * as wasmlib from "wasmlib";
import * as sc from "./index";
import { AgentState } from "./structs";

const MAX_REQUESTS_PER_ADDRESS: i16 = 4;
const MAX_TOKEN_AMOUNT_PER_REQUEST: i64 = 1 * 1024 * 1024;

export function funcInit(ctx: wasmlib.ScFuncContext, f: sc.InitContext): void {
  if (f.params.owner().exists()) {
    f.state.owner().setValue(f.params.owner().value());
    return;
  }
  f.state.owner().setValue(ctx.contractCreator());
}

export function funcSetOwner(
  ctx: wasmlib.ScFuncContext,
  f: sc.SetOwnerContext
): void {
  f.state.owner().setValue(f.params.owner().value());
}

export function funcDeposit(
  ctx: wasmlib.ScFuncContext,
  f: sc.DepositContext
): void {
  let bidAmount = ctx.incoming().balance(wasmlib.ScColor.IOTA);

  ctx.log(`Deposited: ${bidAmount}`);

  ctx.require(bidAmount > 0, "Missing deposit amount");
}

export function funcRequestToken(
  ctx: wasmlib.ScFuncContext,
  f: sc.RequestTokenContext
): void {
  const agentState = f.state.tokenRequests().getAgentState(ctx.caller());
  const requestedToken = f.params.amount().value();

  let agent: AgentState = <AgentState>{
    requestedToken: 0,
    requests: 0,
  };

  if (agentState.exists()) {
    agent = agentState.value();

    if (agent.requests > MAX_REQUESTS_PER_ADDRESS) {
      ctx.panic(
        `Too many requests for Agent: ${ctx.caller()} Address: ${ctx
          .caller()
          .address()}`
      );
    }

    if (agent.requestedToken > MAX_TOKEN_AMOUNT_PER_REQUEST) {
      ctx.panic(
        `Too many token requested for Agent: ${ctx.caller()} Address: ${ctx
          .caller()
          .address()}`
      );
    }
  }

  if (f.params.amount().value() > MAX_TOKEN_AMOUNT_PER_REQUEST) {
    ctx.panic(
      `Too many token requested for Agent: ${ctx.caller()} Address: ${ctx
        .caller()
        .address()}`
    );
  }

  const transfer = wasmlib.ScTransfers.transfer(
    wasmlib.ScColor.IOTA,
    requestedToken
  );

  agentState.setValue(<AgentState>{
    requestedToken: (agent.requestedToken += requestedToken),
    requests: agent.requests++,
  });

  ctx.transferToAddress(ctx.caller().address(), transfer);
}

export function viewGetMaxTokenAmount(
  ctx: wasmlib.ScViewContext,
  f: sc.GetMaxTokenAmountContext
): void {
  f.results.maxTokenAmount().setValue(MAX_TOKEN_AMOUNT_PER_REQUEST);
}

export function viewGetMaxTokenRequests(
  ctx: wasmlib.ScViewContext,
  f: sc.GetMaxTokenRequestsContext
): void {
  f.results.maxTokenRequests().setValue(MAX_REQUESTS_PER_ADDRESS);
}
