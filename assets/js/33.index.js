(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{0:function(e,t,n){"use strict";e.exports=n(108)},107:function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},108:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(76),r="function"==typeof Symbol&&Symbol.for,f=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,i=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.placeholder");var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,a,o,l,c){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[n,r,a,o,l,c],u=0;(e=Error(t.replace(/%s/g,function(){return i[u++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function E(){}function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=g.prototype;var k=v.prototype=new E;k.constructor=v,s(k,g.prototype),k.isPureReactComponent=!0;var w={current:null,currentDispatcher:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r=void 0,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var i=Array(c),u=0;u<c;u++)i[u]=arguments[u+2];a.children=i}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:f,type:e,key:o,ref:l,props:a,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===f}var _=/\/+/g,x=[];function I(e,t,n,r){if(x.length){var a=x.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,x.length<10&&x.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,a){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var l=!1;if(null===t)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case f:case u:l=!0}}if(l)return r(a,t,""===n?"."+D(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var i=n+D(o=t[c],c);l+=e(o,i,r,a)}else if("function"==typeof(i=null===t||"object"!=typeof t?null:"function"==typeof(i=p&&t[p]||t["@@iterator"])?i:null))for(t=i.call(t),c=0;!(o=t.next()).done;)l+=e(o=o.value,i=n+D(o,c++),r,a);else"object"===o&&h("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function B(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r,a,o=e.result,l=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,o,n,function(e){return e}):null!=e&&(j(e)&&(a=l+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n,e={$$typeof:f,type:r.type,key:a,ref:r.ref,props:r.props,_owner:r._owner}),o.push(e))}function $(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),T(e,R,t=I(t,o,r,a)),A(t)}var C={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,B,t=I(null,null,t,n)),A(t)},count:function(e){return T(e,function(){return null},null)},toArray:function(e){var t=[];return $(e,t,null,function(e){return e}),t},only:function(e){return j(e)||h("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:v,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:c,_context:e},(e.Consumer=e).unstable_read=function(e,t){var n=w.currentDispatcher;return null===n&&h("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:m,render:e}},Fragment:a,StrictMode:o,unstable_AsyncMode:d,unstable_Profiler:l,createElement:O,cloneElement:function(e,t,n){null==e&&h("267",e);var r=void 0,a=s({},e.props),o=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=w.current),void 0!==t.key&&(o=""+t.key);var i=void 0;for(r in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=void 0===t[r]&&void 0!==i?i[r]:t[r])}if(1===(r=arguments.length-2))a.children=n;else if(1<r){i=Array(r);for(var u=0;u<r;u++)i[u]=arguments[u+2];a.children=i}return{$$typeof:f,type:e.type,key:o,ref:l,props:a,_owner:c}},createFactory:function(e){var t=O.bind(null,e);return t.type=e,t},isValidElement:j,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:s}},H=C;e.exports=H.default||H},109:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},16:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},4:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},442:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return h}),n.d(t,"default",function(){return y});var r=n(2),a=n.n(r),o=n(4),l=n.n(o),c=n(6),i=n.n(c),u=n(5),s=n.n(u),f=n(7),d=n.n(f),m=n(0),p=n.n(m),h={},y=function(e){function t(){return a()(this,t),i()(this,s()(t).apply(this,arguments))}return d()(t,e),l()(t,[{key:"render",value:function(){var e=this.props;return p.a.createElement("div",null,p.a.createElement("h1",{id:"blocks"},"Blocks"),p.a.createElement("p",null,"A block is a group of transactions, and some header data linking the blocks together as well as providing meta information about the block itself. Active delegates produce blocks in their timeslot (see ",p.a.createElement(e.Link,{href:"pages/protocol/Consensus!forging--rounds"},"Forging")," for more information), gathering up to 25 unconfirmed transactions on the network and providing the necessary header information. Blocks are linked together with their block IDs and signed by the delegate."),p.a.createElement("h2",{id:"block-header"},"Block Header"),p.a.createElement("p",null,"A block is composed of a block header as well as a list of transactions. The header describes the block in detail. It is used to get an overview of the block as well as contains information which helps to verify and validate the block between nodes. A block header consists of the following fields."),p.a.createElement("div",{className:"table-wrapper"},p.a.createElement("table",null,p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Name"),p.a.createElement("th",null,"Size (bits)"),p.a.createElement("th",null,"Type"),p.a.createElement("th",null,"Description"))),p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",null,"Version"),p.a.createElement("td",null,"32"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Block Version")),p.a.createElement("tr",null,p.a.createElement("td",null,"Timestamp"),p.a.createElement("td",null,"32"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Time in Seconds since Epoch")),p.a.createElement("tr",null,p.a.createElement("td",null,"Previous Block"),p.a.createElement("td",null,"64"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Previous Block ID")),p.a.createElement("tr",null,p.a.createElement("td",null,"Number of Transactions"),p.a.createElement("td",null,"32"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Number of Transactions in Block")),p.a.createElement("tr",null,p.a.createElement("td",null,"RISE Amount"),p.a.createElement("td",null,"64"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Total amount of RISE transferred in Block")),p.a.createElement("tr",null,p.a.createElement("td",null,"Fee Amount"),p.a.createElement("td",null,"64"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Total amount of Fees associated with Block")),p.a.createElement("tr",null,p.a.createElement("td",null,"Delegate Reward"),p.a.createElement("td",null,"64"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"RISE Reward for Delegate")),p.a.createElement("tr",null,p.a.createElement("td",null,"Payload Length"),p.a.createElement("td",null,"32"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Length of Payload in bytes")),p.a.createElement("tr",null,p.a.createElement("td",null,"Payload Hash"),p.a.createElement("td",null,"256"),p.a.createElement("td",null,"Hash"),p.a.createElement("td",null,"SHA-256 Hash of Payload")),p.a.createElement("tr",null,p.a.createElement("td",null,"Delegate Public Key"),p.a.createElement("td",null,"256"),p.a.createElement("td",null,"Public Key"),p.a.createElement("td",null,"Public Key of generating Delegate")),p.a.createElement("tr",null,p.a.createElement("td",null,"Signature"),p.a.createElement("td",null,"512"),p.a.createElement("td",null,"Signature"),p.a.createElement("td",null,"Signature of generating Delegate")),p.a.createElement("tr",null,p.a.createElement("td",null,"Block ID"),p.a.createElement("td",null,"64"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"ID of Block")),p.a.createElement("tr",null,p.a.createElement("td",null,"Block Height"),p.a.createElement("td",null,"64"),p.a.createElement("td",null,"Integer"),p.a.createElement("td",null,"Block Height (e.g. Block Number)"))))),p.a.createElement("p",null,"A JSON representation of a block is as follows:"),p.a.createElement("pre",null,p.a.createElement("code",{className:"hljs language-json"},"{","\n","    ","id: Block ID,","\n","    ","version: ",p.a.createElement("span",{className:"hljs-number"},"0"),",","\n","    ","timestamp: Timestamp,","\n","    ","height: Block Height,","\n","    ","previousBlock: Previous Block ID,","\n","    ","numberOfTransactions: Number of Transactions,","\n","    ","totalAmount: RISE Amount,","\n","    ","totalFee: Fee Amount,","\n","    ","reward: Delegate Reward,","\n","    ","payloadLength: Payload Length,","\n","    ","payloadHash: Payload Hash,","\n","    ","generatorPublicKey: Delegate Public Key,","\n","    ","blockSignature: Delegate Signature,","\n","    ","transactions: [","\n","        ","Array of Transaction Objects","\n","    ","]","\n","}","\n")),p.a.createElement("h2",{id:"block-payload"},"Block Payload"),p.a.createElement("p",null,"A block payload is composed of a maximum of 25 unconfirmed transactions collected from the network by the active delegate. Although the maximum length for the transactions list is 25, maximum payload size varies by the type of transactions included. See ",p.a.createElement(e.Link,{href:"pages/protocol/Transactions"},"the Transactions Page")," for more information on the structure of each transaction. Once all of the transactions are gathered into an array, Number of Transactions, RISE Amount, Fee Amount, Payload Length, and Payload Hash can be calculated. To calculate the payload hash, the active delegate simply takes the SHA-256 hash of the transaction array."),p.a.createElement("h2",{id:"signature"},"Signature"),p.a.createElement("p",null,"The Forging Delegate must sign the block header to verify that he or she is the one who produced the block. The signature process is very similar to the way transactions are signed. First a data block with all of the fields in the header except for Signature, Block ID and Block Height are filled in with their values in the order in the table above. The data block is then hashed with a SHA-256 hashing algorithm which gets passed into an ed25519 signature algorithm along with the delegates private key."),p.a.createElement("h2",{id:"block-id"},"Block ID"),p.a.createElement("p",null,"After the necessary block header fields are filled in, verified and a signature is generated and added to the end of the block header data block, a block ID can be generated. This process is again similar to transaction ID generation. First the data block is hashed with a SHA-256 hashing algorithm. The first 8 bytes are taken, reversed and the numerical representation thereof is used as the block ID"))}}]),t}(p.a.PureComponent)},5:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},6:function(e,t,n){var r=n(16),a=n(109);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},7:function(e,t,n){var r=n(107);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},76:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var l in n=Object(arguments[o]))u.call(n,l)&&(a[l]=n[l]);if(i){r=i(n);for(var c=0;c<r.length;c++)s.call(n,r[c])&&(a[r[c]]=n[r[c]])}}return a}}}]);