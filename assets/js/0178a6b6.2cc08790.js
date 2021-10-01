(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[518],{202:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),c=["components"],i={keywords:["ISCP","Smart Contracts","on-chain account","Ownership","Accounts Contract"],description:"ISCP chains keeps a ledger of on-chain account balances.  ON-chain accounts are identified by an AgentID.",image:"/img/logo/WASP_logo_dark.png"},s="How Accounts Work",l={unversionedId:"guide/core_concepts/accounts/how-accounts-work",id:"guide/core_concepts/accounts/how-accounts-work",isDocsHomePage:!1,title:"How Accounts Work",description:"ISCP chains keeps a ledger of on-chain account balances.  ON-chain accounts are identified by an AgentID.",source:"@site/docs/guide/core_concepts/accounts/how-accounts-work.md",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-accounts-work",permalink:"/docs/guide/core_concepts/accounts/how-accounts-work",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/core_concepts/accounts/how-accounts-work.md",version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","on-chain account","Ownership","Accounts Contract"],description:"ISCP chains keeps a ledger of on-chain account balances.  ON-chain accounts are identified by an AgentID.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"The `governance` contract",permalink:"/docs/guide/core_concepts/core_contracts/governance"},next:{title:"How to Deposit to a Chain",permalink:"/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain"}},h=[{value:"Account Ownership",id:"account-ownership",children:[{value:"Smart contract ID",id:"smart-contract-id",children:[]},{value:"Agent ID",id:"agent-id",children:[]},{value:"Different Types of Account",id:"different-types-of-account",children:[]}]},{value:"The Accounts Contract",id:"the-accounts-contract",children:[]},{value:"Interoperability between chains",id:"interoperability-between-chains",children:[]}],p={toc:h};function d(e){var t=e.components,i=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-accounts-work"},"How Accounts Work"),(0,r.kt)("p",null,"ISCP provides secure, trustless transfers of digitized assets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"between smart contracts on the same or on different chains"),(0,r.kt)("li",{parentName:"ul"},"between smart contracts and L1 addresses on the UTXO Ledger.")),(0,r.kt)("p",null,"On the UTXO Ledger, just like with any DLT, we have ",(0,r.kt)("strong",{parentName:"p"},"trustless")," and ",(0,r.kt)("strong",{parentName:"p"},"atomic"),"\ntransfers of assets between addresses on the ledger. The tokens contained in the\naddress can be moved to another address by providing a valid signature by the\nprivate key which controls the source address."),(0,r.kt)("p",null,"In ISCP, the smart contracts which reside on chains are also owners of their\ntokens. Each smart contract can receive tokens that are transferred to it and\ncan send tokens it controls to any other owner, be it another smart\ncontract, or an ordinary L1 address on the UTXO Ledger."),(0,r.kt)("p",null,"So, there are 2 types of entities which can control tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L1 addresses on the UTXO Ledger"),(0,r.kt)("li",{parentName:"ul"},"Smart contracts on ISCP chains")),(0,r.kt)("p",null,"There are 3 different types of trustless token transfers possible between those\nentities. Each type involves a different mechanism of transfer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Between L1 address and smart contract"),(0,r.kt)("li",{parentName:"ul"},"Between smart contracts on the same chain"),(0,r.kt)("li",{parentName:"ul"},"Between smart contracts on different chains")),(0,r.kt)("p",null,"To make the system homogenous, we introduce the following two concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Agent ID")," which represents an owner of tokens independently of the type of\nowning entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"On-chain account")," which represents the unit of ownership on the chain.")),(0,r.kt)("p",null,"Each ISCP chain keeps a ledger of on-chain account balances."),(0,r.kt)("h2",{id:"account-ownership"},"Account Ownership"),(0,r.kt)("h3",{id:"smart-contract-id"},"Smart contract ID"),(0,r.kt)("p",null,"Unlike with blockchain systems like Ethereum, we cannot simply represent the\nsmart contract by a blockchain address: ISCP can have many blockchains, not just\na single one. Each chain in ISCP is identified by its ",(0,r.kt)("em",{parentName:"p"},"chain ID"),". A chain can\ncontain many smart contracts on it. So, in ISCP each contract is identified by\nan identifier that consists of the chain ID, and the ",(0,r.kt)("em",{parentName:"p"},"hname")," of the smart\ncontract. In human-readable form, the smart ",(0,r.kt)("em",{parentName:"p"},"contract ID")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::cebf5908\n")),(0,r.kt)("p",null,"The part before ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," is the ",(0,r.kt)("em",{parentName:"p"},"chain ID"),", the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," is the ",(0,r.kt)("em",{parentName:"p"},"hname")," of\nthe smart contract."),(0,r.kt)("h3",{id:"agent-id"},"Agent ID"),(0,r.kt)("p",null,"The agent ID is an identifier which generalizes and represents one of the two\nagent types in one identifier: either an L1 address on the UTXO Ledger, or a\nsmart contract ID."),(0,r.kt)("p",null,"It is easy to determine which one is represented by the particular agent ID: an\nL1 address always has the ",(0,r.kt)("em",{parentName:"p"},"hname")," part all zero."),(0,r.kt)("h3",{id:"different-types-of-account"},"Different Types of Account"),(0,r.kt)("p",null,"Given that an on-chain account is identified by an AgentID:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The AgentID for accounts owned by L1 entities (regular IOTA wallets) looks like the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'Hname: 0\nAddress: "some address"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The AgentID for accounts owned by L2 entities (Smart Contracts) :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'Hname: "Hname of the entity"\nAddress: "Address of the chain where the entity exists"\n')),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"example"),": the smart contract with hname ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," that exists on the chain with address ",(0,r.kt)("inlineCode",{parentName:"p"},"000"),", can be identified on ",(0,r.kt)("strong",{parentName:"p"},"any")," chain by the following AgentID:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Hname: 123\nAddress: 000\n")))),(0,r.kt)("h2",{id:"the-accounts-contract"},"The Accounts Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Accounts")," contract manages what funds are owned by which accounts."),(0,r.kt)("p",null,"Internally there is a mapping of ",(0,r.kt)("inlineCode",{parentName:"p"},"Account (AgentID)")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"balances"),", which can include normal IOTAs and/or any colored tokens."),(0,r.kt)("p",null,"By calling this contract its possible to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/accounts/view-account-balances"},"View current account balances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},"Deposit funds to the chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},"Withdraw funds from the chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/accounts/the-common-account"},"Harvest")," - can only be called by the chain owner, to move funds from the chain common account to his own account.")),(0,r.kt)("h2",{id:"interoperability-between-chains"},"Interoperability between chains"),(0,r.kt)("p",null,"Each chain contains any number of accounts. Each account owns colored\ntokens: a collection of ",(0,r.kt)("inlineCode",{parentName:"p"},"color: balance")," pairs."),(0,r.kt)("p",null,"Each account on the chain is controlled by some ",(0,r.kt)("inlineCode",{parentName:"p"},"agent ID"),". It means that tokens\ncontained in the account can only be moved by the entity behind that agent ID:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("em",{parentName:"li"},"agent ID")," represents an address on the UTXO Ledger, the tokens can\nonly be moved by a request signed by the private key of that address."),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("em",{parentName:"li"},"agent ID")," represents a smart contract, the tokens can only be moved by\nthat smart contract. Note that the smart contract may reside on the same chain\nor on another chain.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example situation. There are two chains deployed, with three smart contracts and one address.",src:n(8884).Z})),(0,r.kt)("p",null,"The picture illustrates an example situation. There are two chains deployed,\nwith respective IDs ",(0,r.kt)("inlineCode",{parentName:"p"},"Pmc7iH8b..")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Klm314noP8.."),". The pink chain ",(0,r.kt)("inlineCode",{parentName:"p"},"Pmc7iH8b.."),"\nhas two smart contracts on it (",(0,r.kt)("inlineCode",{parentName:"p"},"3037")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"2225"),") and the blue chain\n",(0,r.kt)("inlineCode",{parentName:"p"},"Klm314noP8..")," has one smart contract (",(0,r.kt)("inlineCode",{parentName:"p"},"7003"),")."),(0,r.kt)("p",null,"The UTXO Ledger has 1 address ",(0,r.kt)("inlineCode",{parentName:"p"},"P6ZxYXA2.."),". The address ",(0,r.kt)("inlineCode",{parentName:"p"},"P6ZxYXA2..")," controls\n1337 iotas and 42 red tokens on the UTXO Ledger. The same address also controls\n42 iotas on the pink chain and 8 green tokens on the blue chain. So, the owner\nof the private key behind the address controls 3 different accounts: 1 on the L1\nUTXO Ledger and 2 accounts on 2 different chains on L2."),(0,r.kt)("p",null,"At the same time, smart contract ",(0,r.kt)("inlineCode",{parentName:"p"},"7003")," on the blue chain has 5 iotas on its\nnative chain and controls 11 iotas on the pink chain."),(0,r.kt)("p",null,"Note that \u201ccontrol over account\u201d means the entity which has the private key can\nmove funds from it. For an ordinary address it means the private key of the\naddress. For a smart contract it means the private keys of the committee which\nruns the chain (the smart contract program can only be executed with those\nprivate keys)."))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(m,c(c({ref:t},h),{},{components:n})):a.createElement(m,c({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8884:function(e,t,n){"use strict";t.Z=n.p+"assets/images/accounts-8cd3b45af8331f061b4583acb528d2d4.png"}}]);