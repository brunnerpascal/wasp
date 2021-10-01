(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[3644],{7049:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={},s="The `blocklog` contract",l={unversionedId:"guide/core_concepts/core_contracts/blocklog",id:"guide/core_concepts/core_contracts/blocklog",isDocsHomePage:!1,title:"The `blocklog` contract",description:"The blocklog contract is one of the core contracts on each ISCP",source:"@site/docs/guide/core_concepts/core_contracts/blocklog.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/blocklog",permalink:"/docs/guide/core_concepts/core_contracts/blocklog",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/core_concepts/core_contracts/blocklog.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The `blob` contract",permalink:"/docs/guide/core_concepts/core_contracts/blob"},next:{title:"The `governance` contract",permalink:"/docs/guide/core_concepts/core_contracts/governance"}},p=[{value:"Entry Points",id:"entry-points",children:[]},{value:"Views",id:"views",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"the-blocklog-contract"},"The ",(0,c.kt)("inlineCode",{parentName:"h1"},"blocklog")," contract"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"blocklog")," contract is one of the ",(0,c.kt)("a",{parentName:"p",href:"/docs/guide/core_concepts/core_contracts/overview"},"core contracts")," on each ISCP\nchain."),(0,c.kt)("p",null,"The function of the ",(0,c.kt)("inlineCode",{parentName:"p"},"blocklog")," contract is to keep track of the blocks of\nrequests that were processed by the chain."),(0,c.kt)("p",null,"It provides views to get request status or receipts, block information, or events (per request / block / smart contract)."),(0,c.kt)("h3",{id:"entry-points"},"Entry Points"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"blocklog")," core contract does not contain any entry points which modify its\nstate."),(0,c.kt)("p",null,"The only way to modify the ",(0,c.kt)("inlineCode",{parentName:"p"},"blocklog")," state is by submitting requests for\nprocessing to the chain."),(0,c.kt)("h3",{id:"views"},"Views"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetBlockInfo")," - Returns the data of the block in the chain with\nspecified index.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetLatestBlockInfo")," - Returns the index and data of the latest block in\nthe chain.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetRequestLogRecord")," - Returns the data, block index, and request index\nof the specified request.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetRequestLogRecordsForBlock")," - Returns the data, block index, and\nrequest index of all requests in the block with the specified block index.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetRequestIDsForBlock")," - Returns the IDs of all requests in the block\nwith the specified block index.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewIsRequestProcessed")," - Returns whether a request with specified ID has\nbeen processed.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetEventsForRequest")," - returns a list of events for a given request.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetEventsForBlock")," - returns a list of events for a given block.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"viewGetEventsForContract")," - returns a list of events for a given smart contract."))))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),k=o,f=d["".concat(s,".").concat(k)]||d[k]||u[k]||c;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);