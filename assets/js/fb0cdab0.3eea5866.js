(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[1890],{6136:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},l="The `governance` contract",s={unversionedId:"guide/core_concepts/core_contracts/governance",id:"guide/core_concepts/core_contracts/governance",isDocsHomePage:!1,title:"The `governance` contract",description:"The governance contract is one of the core contracts on each ISCP",source:"@site/docs/guide/core_concepts/core_contracts/governance.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/governance",permalink:"/docs/guide/core_concepts/core_contracts/governance",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/core_concepts/core_contracts/governance.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The `blocklog` contract",permalink:"/docs/guide/core_concepts/core_contracts/blocklog"},next:{title:"How Accounts Work",permalink:"/docs/guide/core_concepts/accounts/how-accounts-work"}},p=[{value:"Entry points",id:"entry-points",children:[]},{value:"Views",id:"views",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-governance-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"governance")," contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"governance")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/core_concepts/core_contracts/overview"},"core contracts")," on each ISCP\nchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"governance")," contract provides the following functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Defines the set of identities that constitute the state controller (entity that owns the state output via the chain Alias Address). Its possible to add/remove addresses from the stateController (thus rotating the committee of validators)."),(0,a.kt)("li",{parentName:"ul"},"Defines who is the chain owner (the L1 entity that owns the chain - initially whoever deployed it) - the chain owner can collect special fees, and customize some chain-specific parameters."),(0,a.kt)("li",{parentName:"ul"},"Defines the fees for request execution, and other chain-specific parameters.")),(0,a.kt)("h3",{id:"entry-points"},"Entry points"),(0,a.kt)("p",null,"The following are the functions / entry points of the ",(0,a.kt)("inlineCode",{parentName:"p"},"governance"),", they can only be invoked by the chain owner."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotateStateController")," - called when committee is about to be rotated to the new address. If it fails, nothing happens. If it succeeds, the next state transition will become a governance transition, thus updating the state controller in the chain's AliasOutput."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"addAllowedStateControllerAddress")," - adds an address to the list of identities that constitute the state controller, this change will only become effective once ",(0,a.kt)("inlineCode",{parentName:"li"},"rotateStateController")," is called  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"removeAllowedStateControllerAddress")," - removes an address to the list of identities that constitute the state controller, this change will only become effective once ",(0,a.kt)("inlineCode",{parentName:"li"},"rotateStateController")," is called"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"delegateChainOwnership")," - sets a new owner for the chain. This change will only be effective once ",(0,a.kt)("inlineCode",{parentName:"li"},"claimChainOwnership")," is called"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"claimChainOwnership")," - claims the ownership of the chain if the caller matches the identity set in ",(0,a.kt)("inlineCode",{parentName:"li"},"delegateChainOwnership")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"setContractFee")," - sets the fee for a particular contract"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"setChainInfo")," -  allows the following chain parameters to be set: ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxBlobSize"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxEventSize"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxEventsPerRequest"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"OwnerFee"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorFee"))),(0,a.kt)("h3",{id:"views"},"Views"),(0,a.kt)("p",null,"Can be called directly. Calling a view does not modify the state of the smart\ncontract."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getAllowedStateControllerAddresses")," - returns the list of allowed state controllers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getChainOwner")," - returns the AgentID of the chain owner"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getFeeInfo")," - returns the fees for a given contract"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getChainInfo")," - returns the following chain parameters: ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxBlobSize"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxEventSize"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxEventsPerRequest"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"OwnerFee"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorFee"))))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);