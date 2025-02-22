// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

// @formatter:off

#![allow(dead_code)]
#![allow(unused_imports)]

use donatewithfeedback::*;
use wasmlib::*;
use wasmlib::host::*;

use crate::consts::*;
use crate::keys::*;
use crate::params::*;
use crate::results::*;
use crate::state::*;

mod consts;
mod contract;
mod keys;
mod params;
mod results;
mod state;
mod structs;
mod donatewithfeedback;

#[no_mangle]
fn on_load() {
    let exports = ScExports::new();
    exports.add_func(FUNC_DONATE, func_donate_thunk);
    exports.add_func(FUNC_WITHDRAW, func_withdraw_thunk);
    exports.add_view(VIEW_DONATION, view_donation_thunk);
    exports.add_view(VIEW_DONATION_INFO, view_donation_info_thunk);

    unsafe {
        for i in 0..KEY_MAP_LEN {
            IDX_MAP[i] = get_key_id_from_string(KEY_MAP[i]);
        }
    }
}

pub struct DonateContext {
    params: ImmutableDonateParams,
    state:  MutableDonateWithFeedbackState,
}

fn func_donate_thunk(ctx: &ScFuncContext) {
    ctx.log("donatewithfeedback.funcDonate");
    let f = DonateContext {
        params: ImmutableDonateParams {
            id: OBJ_ID_PARAMS,
        },
        state: MutableDonateWithFeedbackState {
            id: OBJ_ID_STATE,
        },
    };
    func_donate(ctx, &f);
    ctx.log("donatewithfeedback.funcDonate ok");
}

pub struct WithdrawContext {
    params: ImmutableWithdrawParams,
    state:  MutableDonateWithFeedbackState,
}

fn func_withdraw_thunk(ctx: &ScFuncContext) {
    ctx.log("donatewithfeedback.funcWithdraw");
    // only SC creator can withdraw donated funds
    ctx.require(ctx.caller() == ctx.contract_creator(), "no permission");

    let f = WithdrawContext {
        params: ImmutableWithdrawParams {
            id: OBJ_ID_PARAMS,
        },
        state: MutableDonateWithFeedbackState {
            id: OBJ_ID_STATE,
        },
    };
    func_withdraw(ctx, &f);
    ctx.log("donatewithfeedback.funcWithdraw ok");
}

pub struct DonationContext {
    params:  ImmutableDonationParams,
    results: MutableDonationResults,
    state:   ImmutableDonateWithFeedbackState,
}

fn view_donation_thunk(ctx: &ScViewContext) {
    ctx.log("donatewithfeedback.viewDonation");
    let f = DonationContext {
        params: ImmutableDonationParams {
            id: OBJ_ID_PARAMS,
        },
        results: MutableDonationResults {
            id: OBJ_ID_RESULTS,
        },
        state: ImmutableDonateWithFeedbackState {
            id: OBJ_ID_STATE,
        },
    };
    ctx.require(f.params.nr().exists(), "missing mandatory nr");
    view_donation(ctx, &f);
    ctx.log("donatewithfeedback.viewDonation ok");
}

pub struct DonationInfoContext {
    results: MutableDonationInfoResults,
    state:   ImmutableDonateWithFeedbackState,
}

fn view_donation_info_thunk(ctx: &ScViewContext) {
    ctx.log("donatewithfeedback.viewDonationInfo");
    let f = DonationInfoContext {
        results: MutableDonationInfoResults {
            id: OBJ_ID_RESULTS,
        },
        state: ImmutableDonateWithFeedbackState {
            id: OBJ_ID_STATE,
        },
    };
    view_donation_info(ctx, &f);
    ctx.log("donatewithfeedback.viewDonationInfo ok");
}

// @formatter:on
