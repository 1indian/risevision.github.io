(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{0:function(e,t,n){"use strict";e.exports=n(107)},107:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=n(76),r="function"==typeof Symbol&&Symbol.for,f=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.placeholder");var h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,s,i){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,s,i],c=0;(e=Error(t.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var E=w.prototype=new g;E.constructor=w,u(E,v.prototype),E.isPureReactComponent=!0;var k={current:null,currentDispatcher:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:f,type:e,key:a,ref:s,props:o,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===f}var _=/\/+/g,N=[];function x(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,N.length<10&&N.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var s=!1;if(null===t)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case f:case c:s=!0}}if(s)return r(o,t,""===n?"."+C(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var i=0;i<t.length;i++){var l=n+C(a=t[i],i);s+=e(a,l,r,o)}else if("function"==typeof(l=null===t||"object"!=typeof t?null:"function"==typeof(l=h&&t[h]||t["@@iterator"])?l:null))for(t=l.call(t),i=0;!(a=t.next()).done;)s+=e(a=a.value,l=n+C(a,i++),r,o);else"object"===a&&m("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return s}(e,"",t,n)}function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function R(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r,o,a=e.result,s=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,a,n,function(e){return e}):null!=e&&(O(e)&&(o=s+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n,e={$$typeof:f,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}),a.push(e))}function $(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(_,"$&/")+"/"),A(e,q,t=x(t,a,r,o)),T(t)}var I={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,R,t=x(null,null,t,n)),T(t)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var t=[];return $(e,t,null,function(e){return e}),t},only:function(e){return O(e)||m("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:i,_context:e},(e.Consumer=e).unstable_read=function(e,t){var n=k.currentDispatcher;return null===n&&m("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:d,render:e}},Fragment:o,StrictMode:a,unstable_AsyncMode:p,unstable_Profiler:s,createElement:P,cloneElement:function(e,t,n){null==e&&m("267",e);var r=void 0,o=u({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,i=k.current),void 0!==t.key&&(a=""+t.key);var l=void 0;for(r in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==l?l[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){l=Array(r);for(var c=0;c<r;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:f,type:e.type,key:a,ref:s,props:o,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:O,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:u}},B=I;e.exports=B.default||B},108:function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},109:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},16:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},4:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},450:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return m}),n.d(t,"default",function(){return y});var r=n(2),o=n.n(r),a=n(4),s=n.n(a),i=n(6),l=n.n(i),c=n(5),u=n.n(c),f=n(7),p=n.n(f),d=n(0),h=n.n(d),m={},y=function(e){function t(){return o()(this,t),l()(this,u()(t).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props;return h.a.createElement("div",null,h.a.createElement("h1",{id:"peer-to-peer-communication"},"Peer-to-Peer Communication"),h.a.createElement("p",null,"The RISE network is of course a network of nodes or peers which communicate with each other to sync the blockchain and reach consensus. Every node is both a server and a client, requesting from and responding to other nodes on the network using a REST API over HTTP."),h.a.createElement("h2",{id:"architecture"},"Architecture"),h.a.createElement("p",null,"Requests between nodes on the network are done through a REST API over HTTP. To pass data, JSON is used as an encoding mechanism. Newer node versions also have the option to encode requests and responses using ",h.a.createElement("a",{href:"https://developers.google.com/protocol-buffers/"},"Protocol Buffers")," for increased performance. Read more information about the new ProtoBuf API and all of the performance improvements in ",h.a.createElement("a",{href:"https://medium.com/rise-vision/rise-1-2-0-protocol-buffers-8240a0456170"},"our Blog Post"),". Every request between peers also includes system headers which other peers use to validate the peer and its data and add it to their peer list. System headers also include a Nethash which identifies the network which a peer is currently connected to. An example of a Peer's system headers are as follows"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-json"},"{","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"broadhash"'),": Broadhash,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"firewalled"'),": Node is behind Firewall,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"height"'),": Block Height,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"nethash"'),": Nethash,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"nonce"'),": Unique Nonce,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"os"'),": OS Platform and Version Information,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"port"'),": Node Port,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"version"'),": Node Version","\n","}","\n")),h.a.createElement("h2",{id:"peer"},"Peer"),h.a.createElement("p",null,"A peer is another node on the network. When a node goes online and connects to another node on the network, it then becomes its peer. The new node can begin a peer discovery process by requesting the now connected node for its peer list. This process can be repeated indefinitely to eventually discover the whole network of connected peers. JSON representation of a peer is as follows."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-json"},"{","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"ip"'),": Node IP Address,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"port"'),": Node Port,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"state"'),": Connection State,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"os"'),": OS Platform and Version,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"version"'),": Node Version,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"broadhash"'),": Broadhash,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"height"'),": Block Height,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"updated"'),": Last Updated Unix Timestamp,","\n","    ",h.a.createElement("span",{className:"hljs-attr"},'"nonce"'),": Nonce","\n","}","\n")),h.a.createElement("p",null,"Connection State can be one of the following"),h.a.createElement("ul",null,h.a.createElement("li",null,h.a.createElement("code",null,"0"),": Banned"),h.a.createElement("li",null,h.a.createElement("code",null,"1"),": Disconnected"),h.a.createElement("li",null,h.a.createElement("code",null,"2"),": Connected")),h.a.createElement("h2",{id:"syncing"},"Syncing"),h.a.createElement("p",null,"Syncing is the process a peer takes to load the current state of the blockchain. It can do this by requesting blocks from other nodes on the network with the Transport API. However, due to the request / response nature of a REST response API, the RISE Team also offers a fast sync from a verified Snapshot. See ",h.a.createElement(e.Link,{href:"pages/node/Management!restore-verified-snapshot"},"Restore verified Snapshot")," for more information"),h.a.createElement("h2",{id:"block-propagation"},"Block Propagation"),h.a.createElement("p",null,"When Forging Delegates generate new Blocks, they have to be propagated to the rest of the Network, so that other nodes can update their version of the blockchain. To do this the generating node selects 20 random peers form its peer list and broadcasts the new block to them. After the peer receives the block, once it has checked that the block is new and verified the information in the block, the peer than relays the block to its peers. To prevent flooding the network with unnecessary information, blocks are only allowed to be relayed up to two times."),h.a.createElement("h2",{id:"transaction-propagation"},"Transaction Propagation"),h.a.createElement("p",null,"When unconfirmed transactions are sent to a node, they also must be propagated across the network so that forging delegates may include them in newly generated blocks. To do this every node holds a queue of up to 25 unconfirmed transactions. At a regular interval (currently every 5 seconds), nodes bundle their transaction queue and broadcast them to up to 20 peers in a similar fashion as Block Propagation. When a node receives the transaction bundle, they can add the transactions to their transaction pool and relay the bundle to other nodes. A transaction bundle can also only be relayed up to two times to prevent unnecessary network requests."),h.a.createElement("h3",{id:"transaction-pool"},"Transaction Pool"),h.a.createElement("p",null,"In addition to queued unconfirmed transactions for propagation purposes. Every node contains a list of up to 1000 unconfirmed transactions awaiting signatures (e.g. multisignature transactions) and up to 1000 other unconfirmed transactions ready to be added to a new block. This allows for a buffer in case not all new transactions may be included in the next block, as well as providing a place for transactions pending signatures to be stored and later signed. All transactions in the transaction pool have a time to live. This time to live is 18 minutes for single signature transactions and up to 72 hours for multiple signature transactions."))}}]),t}(h.a.PureComponent)},5:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},6:function(e,t,n){var r=n(16),o=n(109);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},7:function(e,t,n){var r=n(108);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},76:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var s in n=Object(arguments[a]))c.call(n,s)&&(o[s]=n[s]);if(l){r=l(n);for(var i=0;i<r.length;i++)u.call(n,r[i])&&(o[r[i]]=n[r[i]])}}return o}}}]);