(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{0:function(e,a,t){"use strict";e.exports=t(107)},107:function(e,a,t){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=t(76),n="function"==typeof Symbol&&Symbol.for,u=n?Symbol.for("react.element"):60103,m=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,r=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,o=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var a=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<a;n++)t+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,a,t,n,s,l,r,c){if(!e){if((e=void 0)===a)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var o=[t,n,s,l,r,c],m=0;(e=Error(a.replace(/%s/g,function(){return o[m++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function b(e,a,t){this.props=e,this.context=a,this.refs=j,this.updater=t||E}function g(){}function N(e,a,t){this.props=e,this.context=a,this.refs=j,this.updater=t||E}b.prototype.isReactComponent={},b.prototype.setState=function(e,a){"object"!=typeof e&&"function"!=typeof e&&null!=e&&f("85"),this.updater.enqueueSetState(this,e,a,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var y=N.prototype=new g;y.constructor=N,i(y,b.prototype),y.isPureReactComponent=!0;var v={current:null,currentDispatcher:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,a,t){var n=void 0,s={},l=null,r=null;if(null!=a)for(n in void 0!==a.ref&&(r=a.ref),void 0!==a.key&&(l=""+a.key),a)w.call(a,n)&&!k.hasOwnProperty(n)&&(s[n]=a[n]);var c=arguments.length-2;if(1===c)s.children=t;else if(1<c){for(var o=Array(c),m=0;m<c;m++)o[m]=arguments[m+2];s.children=o}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===s[n]&&(s[n]=c[n]);return{$$typeof:u,type:e,key:l,ref:r,props:s,_owner:v.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,_=[];function O(e,a,t,n){if(_.length){var s=_.pop();return s.result=e,s.keyPrefix=a,s.func=t,s.context=n,s.count=0,s}return{result:e,keyPrefix:a,func:t,context:n,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,_.length<10&&_.push(e)}function R(e,a,t){return null==e?0:function e(a,t,n,s){var l=typeof a;"undefined"!==l&&"boolean"!==l||(a=null);var r=!1;if(null===a)r=!0;else switch(l){case"string":case"number":r=!0;break;case"object":switch(a.$$typeof){case u:case m:r=!0}}if(r)return n(s,a,""===t?"."+A(a,0):t),1;if(r=0,t=""===t?".":t+":",Array.isArray(a))for(var c=0;c<a.length;c++){var o=t+A(l=a[c],c);r+=e(l,o,n,s)}else if("function"==typeof(o=null===a||"object"!=typeof a?null:"function"==typeof(o=h&&a[h]||a["@@iterator"])?o:null))for(a=o.call(a),c=0;!(l=a.next()).done;)r+=e(l=l.value,o=t+A(l,c++),n,s);else"object"===l&&f("31","[object Object]"==(n=""+a)?"object with keys {"+Object.keys(a).join(", ")+"}":n,"");return r}(e,"",a,t)}function A(e,a){return"object"==typeof e&&null!==e&&null!=e.key?(t=e.key,n={"=":"=0",":":"=2"},"$"+(""+t).replace(/[=:]/g,function(e){return n[e]})):a.toString(36);var t,n}function I(e,a){e.func.call(e.context,a,e.count++)}function C(e,a,t){var n,s,l=e.result,r=e.keyPrefix;e=e.func.call(e.context,a,e.count++),Array.isArray(e)?$(e,l,t,function(e){return e}):null!=e&&(x(e)&&(s=r+(!(n=e).key||a&&a.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+t,e={$$typeof:u,type:n.type,key:s,ref:n.ref,props:n.props,_owner:n._owner}),l.push(e))}function $(e,a,t,n,s){var l="";null!=t&&(l=(""+t).replace(T,"$&/")+"/"),R(e,C,a=O(a,l,n,s)),P(a)}var q={Children:{map:function(e,a,t){if(null==e)return e;var n=[];return $(e,n,null,a,t),n},forEach:function(e,a,t){if(null==e)return e;R(e,I,a=O(null,null,a,t)),P(a)},count:function(e){return R(e,function(){return null},null)},toArray:function(e){var a=[];return $(e,a,null,function(e){return e}),a},only:function(e){return x(e)||f("143"),e}},createRef:function(){return{current:null}},Component:b,PureComponent:N,createContext:function(e,a){return void 0===a&&(a=null),(e={$$typeof:o,_calculateChangedBits:a,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:c,_context:e},(e.Consumer=e).unstable_read=function(e,a){var t=v.currentDispatcher;return null===t&&f("277"),t.readContext(e,a)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:d,render:e}},Fragment:s,StrictMode:l,unstable_AsyncMode:p,unstable_Profiler:r,createElement:S,cloneElement:function(e,a,t){null==e&&f("267",e);var n=void 0,s=i({},e.props),l=e.key,r=e.ref,c=e._owner;if(null!=a){void 0!==a.ref&&(r=a.ref,c=v.current),void 0!==a.key&&(l=""+a.key);var o=void 0;for(n in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),a)w.call(a,n)&&!k.hasOwnProperty(n)&&(s[n]=void 0===a[n]&&void 0!==o?o[n]:a[n])}if(1===(n=arguments.length-2))s.children=t;else if(1<n){o=Array(n);for(var m=0;m<n;m++)o[m]=arguments[m+2];s.children=o}return{$$typeof:u,type:e.type,key:l,ref:r,props:s,_owner:c}},createFactory:function(e){var a=S.bind(null,e);return a.type=e,a},isValidElement:x,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:v,assign:i}},L=q;e.exports=L.default||L},108:function(t,e){function n(e,a){return t.exports=n=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},n(e,a)}t.exports=n},109:function(e,a){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},16:function(a,e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?a.exports=n=function(e){return t(e)}:a.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},n(e)}a.exports=n},2:function(e,a){e.exports=function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}},4:function(e,a){function n(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}},454:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return f}),t.d(a,"default",function(){return E});var n=t(2),s=t.n(n),l=t(4),r=t.n(l),c=t(6),o=t.n(c),m=t(5),i=t.n(m),u=t(7),p=t.n(u),d=t(0),h=t.n(d),f={},E=function(e){function a(){return s()(this,a),o()(this,i()(a).apply(this,arguments))}return p()(a,e),r()(a,[{key:"render",value:function(){var e=this.props;return h.a.createElement("div",null,h.a.createElement("h1",{id:"create-a-transaction"},"Create a Transaction"),h.a.createElement("p",null,"Transactions are the heart and soul of functionality on the blockchain. We can create multiple different transaction types (see ",h.a.createElement(e.Link,{href:"pages/protocol/Transactions"},"Transactions")," for a complete list of transaction types) but in this example we will simply create a transaction to send 1 RISE from our wallet to another account ",h.a.createElement("code",null,"12345678901234567R"),"."),h.a.createElement("h2",{id:"requirements"},"Requirements"),h.a.createElement("p",null,"To create a transaction we will need a wallet (if you haven't already done so you can generate a wallet by following the steps in ",h.a.createElement(e.Link,{href:"pages/quick-start/CreateAnAccount"},"Create an Account"),"). In addition we will need the following libraries."),h.a.createElement("ul",null,h.a.createElement("li",null,h.a.createElement("code",null,"dpos-offline"),": to create and sign the transaction"),h.a.createElement("li",null,h.a.createElement("code",null,"risejs"),": to send the transaction to a RISE node")),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-bash"},"npm install dpos-offline risejs","\n")),h.a.createElement("p",null,"Again next steps will be all be in the node terminal although the libraries also function in the browser."),h.a.createElement("h2",{id:"creating-a-send-transaction"},"Creating a Send Transaction"),h.a.createElement("p",null,"The ",h.a.createElement("code",null,"dpos-offline")," library gives us access to an easy to use API for creating and signing different kinds of transactions. To get started, we have to include the ",h.a.createElement("code",null,"dpos-offline")," library as we have before."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-keyword"},"var")," dpos = ",h.a.createElement("span",{className:"hljs-built_in"},"require"),"(",h.a.createElement("span",{className:"hljs-string"},"'dpos-offline'"),").Rise","\n")),h.a.createElement("p",null,"All of our basic Transaction related functions are available under ",h.a.createElement("code",null,"dpos.txs"),". For creating a transaction we will use the ",h.a.createElement("code",null,"createAndSign")," function. An example of our ",h.a.createElement(e.Link,{href:"pages/protocol/Transactions!send-transaction"},"Send Transaction")," is as follows. We will be using the ",h.a.createElement("code",null,"mnemonic")," we created from ",h.a.createElement(e.Link,{href:"pages/quick-start/CreateAnAccount"},"Creating an Account")," as our secret."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-keyword"},"var")," sendTx = dpos.txs.createAndSign(","{","\n","    ","{","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"kind"),": ",h.a.createElement("span",{className:"hljs-string"},"'send'"),",","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"amount"),": ",h.a.createElement("span",{className:"hljs-number"},"100000000"),", ",h.a.createElement("span",{className:"hljs-comment"},"// Satoshi"),"\n","        ","recipient: ",h.a.createElement("span",{className:"hljs-string"},"'12345678901234567R'"),"\n","    ","}",",","\n","    ","mnemonic","\n","}",")","\n")),h.a.createElement("p",null,"If we inspect our ",h.a.createElement("code",null,"sendTx")," object, we will see a Transaction object already ready to be broadcast to the network."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},"{","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"amount"),": ",h.a.createElement("span",{className:"hljs-number"},"100000000"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"asset"),": ",h.a.createElement("span",{className:"hljs-literal"},"null"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"fee"),": ",h.a.createElement("span",{className:"hljs-number"},"10000000"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"id"),": ",h.a.createElement("span",{className:"hljs-string"},"'2530894140975084782'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"recipientId"),": ",h.a.createElement("span",{className:"hljs-string"},"'12345678901234567R'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"senderId"),": ",h.a.createElement("span",{className:"hljs-string"},"'35285700575243917R'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"senderPublicKey"),":","\n","   ",h.a.createElement("span",{className:"hljs-string"},"'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"timestamp"),": ",h.a.createElement("span",{className:"hljs-number"},"77493696"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"type"),": ",h.a.createElement("span",{className:"hljs-number"},"0"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"signature"),":","\n","   ",h.a.createElement("span",{className:"hljs-string"},"'92a6e0a29812c9553041567914e9d3acd00ca4b3abacabb6d1eb7efa3bb1185eaa34c1970891e6bb399dd018ae473417e3f81d747a347d681b20eb294ca69608'"),"\n","}","\n")),h.a.createElement("h2",{id:"different-kinds-of-transactions"},"Different kinds of Transactions"),h.a.createElement("p",null,"Of course the ",h.a.createElement("code",null,"dpos-offline")," API doesn't only allow for Send Transactions, but for all available transaction types on the RISE network through the ",h.a.createElement("code",null,"kind"),"property. Namely"),h.a.createElement("ul",null,h.a.createElement("li",null,h.a.createElement("code",null,"send"),": ",h.a.createElement(e.Link,{href:"pages/protocol/Transactions!send-transaction"},"Send")),h.a.createElement("li",null,h.a.createElement("code",null,"second-signature"),": ",h.a.createElement(e.Link,{href:"pages/protocol/Transactions!second-signature-transaction"},"Register Second Signature")),h.a.createElement("li",null,h.a.createElement("code",null,"register-delegate"),": ",h.a.createElement(e.Link,{href:"pages/protocol/Transactions!register-delegate-transaction"},"Register a Delegate")),h.a.createElement("li",null,h.a.createElement("code",null,"vote"),": ",h.a.createElement(e.Link,{href:"pages/protocol/Transactions!vote-transaction"},"Vote")),h.a.createElement("li",null,h.a.createElement("code",null,"multisignature"),": ",h.a.createElement(e.Link,{href:"pages/protocol/Transactions!multisignature-registration-transaction"},"Register a Multisignature Account"))),h.a.createElement("p",null,"You can view the interfaces to each of the above transaction types in ",h.a.createElement("a",{href:"https://github.com/vekexasia/dpos-offline/blob/master/src/codecs/interface.ts"},"the github repository"),"."),h.a.createElement("h2",{id:"customizing-transactions"},"Customizing Transactions"),h.a.createElement("p",null,"Sometimes we may want to edit the ",h.a.createElement("code",null,"fee")," or the ",h.a.createElement("code",null,"timestamp")," of a transaction. We can do this through the ",h.a.createElement("code",null,"dpos-offline")," API as well."),h.a.createElement("h3",{id:"editing-fees"},"Editing Fees"),h.a.createElement("p",null,"We can pass in a custom fee to our ",h.a.createElement("code",null,"createAndSign")," function through the ",h.a.createElement("code",null,"fee")," property"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-keyword"},"var")," sendTx = dpos.txs.createAndSign(","{","\n","    ","{","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"kind"),": ",h.a.createElement("span",{className:"hljs-string"},"'send'"),",","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"amount"),": ",h.a.createElement("span",{className:"hljs-number"},"100000000"),",","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"recipient"),": ",h.a.createElement("span",{className:"hljs-string"},"'12345678901234567R'"),",","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"fee"),": ",h.a.createElement("span",{className:"hljs-number"},"20000000")," ",h.a.createElement("span",{className:"hljs-comment"},"//custom fee"),"\n","    ","}",",","\n","    ","mnemonic","\n","}",")","\n")),h.a.createElement("p",null,"and the function will apply the fee to the end transaction object.",h.a.createElement("code",null,"dpos-offline")," uses hard-coded fees for every transaction type as listed in",h.a.createElement("code",null,"dpos.txs.baseFees"),"."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-built_in"},"console"),".log(dpos.txs.baseFees)","\n",h.a.createElement("span",{className:"hljs-comment"},"// ","{"," multisignature: 500000000,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","  ","'register-delegate': 2500000000,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","  ","'second-signature': 500000000,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","  ","send: 10000000,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","  ","vote: 100000000 ","}"),"\n")),h.a.createElement("h3",{id:"editing-a-timestamp"},"Editing a Timestamp"),h.a.createElement("p",null,"Every transaction has a timetamp represented by seconds from Epoch Time which is defined as May 24, 2016 0:00:00 UTC Time. In the ",h.a.createElement("code",null,"dpos-offline")," API, timestamps are also known as a ",h.a.createElement("code",null,"nonce"),". We can set the ",h.a.createElement("code",null,"nonce")," of our transaction through the ",h.a.createElement("code",null,"createAndSign")," function."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-keyword"},"var")," sendTx = dpos.txs.createAndSign(","{","\n","    ","{","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"kind"),": ",h.a.createElement("span",{className:"hljs-string"},"'send'"),",","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"amount"),": ",h.a.createElement("span",{className:"hljs-number"},"100000000"),",","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"recipient"),": ",h.a.createElement("span",{className:"hljs-string"},"'12345678901234567R'"),",","\n","        ",h.a.createElement("span",{className:"hljs-attr"},"nonce"),": ",h.a.createElement("span",{className:"hljs-number"},"77512518")," ",h.a.createElement("span",{className:"hljs-comment"},"// custom timestamp"),"\n","    ","}",",","\n","    ","mnemonic","\n","}",")","\n")),h.a.createElement("p",null,"We can easily get the current timestamp by using the ",h.a.createElement("code",null,"txs.createNonce")," function"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-built_in"},"console"),".log(dpos.txs.createNonce())","\n",h.a.createElement("span",{className:"hljs-comment"},"// 77512518"),"\n")),h.a.createElement("h2",{id:"second-signature"},"Second Signature"),h.a.createElement("p",null,"If your account has a second signature attached, we need to sign the transaction with a second passphrase (referred to as ",h.a.createElement("code",null,"mnemonic2")," here). We can do this with the ",h.a.createElement("code",null,"dpos-offline")," library using the ",h.a.createElement("code",null,"txs.calcSignature"),"function."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},"sendTx.signSignature = dpos.txs.calcSignature(sendTx, mnemonic2)","\n")),h.a.createElement("p",null,"Our resulting object will look something like the following"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},"{","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"amount"),": ",h.a.createElement("span",{className:"hljs-number"},"100000000"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"asset"),": ",h.a.createElement("span",{className:"hljs-literal"},"null"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"fee"),": ",h.a.createElement("span",{className:"hljs-number"},"10000000"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"id"),": ",h.a.createElement("span",{className:"hljs-string"},"'2530894140975084782'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"recipientId"),": ",h.a.createElement("span",{className:"hljs-string"},"'12345678901234567R'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"senderId"),": ",h.a.createElement("span",{className:"hljs-string"},"'35285700575243917R'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"senderPublicKey"),":","\n","   ",h.a.createElement("span",{className:"hljs-string"},"'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"timestamp"),": ",h.a.createElement("span",{className:"hljs-number"},"77493696"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"type"),": ",h.a.createElement("span",{className:"hljs-number"},"0"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"signature"),":","\n","   ",h.a.createElement("span",{className:"hljs-string"},"'92a6e0a29812c9553041567914e9d3acd00ca4b3abacabb6d1eb7efa3bb1185eaa34c1970891e6bb399dd018ae473417e3f81d747a347d681b20eb294ca69608'"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"signSignature"),":","\n","   ",h.a.createElement("span",{className:"xml"},h.a.createElement("span",{className:"hljs-tag"},"<",h.a.createElement("span",{className:"hljs-name"},"Buffer")," ",h.a.createElement("span",{className:"hljs-attr"},"cc")," ",h.a.createElement("span",{className:"hljs-attr"},"17")," ",h.a.createElement("span",{className:"hljs-attr"},"d0")," ",h.a.createElement("span",{className:"hljs-attr"},"29")," ",h.a.createElement("span",{className:"hljs-attr"},"71")," ",h.a.createElement("span",{className:"hljs-attr"},"ec")," ",h.a.createElement("span",{className:"hljs-attr"},"12")," ",h.a.createElement("span",{className:"hljs-attr"},"33")," ",h.a.createElement("span",{className:"hljs-attr"},"4f")," ",h.a.createElement("span",{className:"hljs-attr"},"3d")," ",h.a.createElement("span",{className:"hljs-attr"},"e7")," ",h.a.createElement("span",{className:"hljs-attr"},"9b")," ",h.a.createElement("span",{className:"hljs-attr"},"21")," ",h.a.createElement("span",{className:"hljs-attr"},"3a")," ",h.a.createElement("span",{className:"hljs-attr"},"30")," ",h.a.createElement("span",{className:"hljs-attr"},"4e")," ",h.a.createElement("span",{className:"hljs-attr"},"25")," ",h.a.createElement("span",{className:"hljs-attr"},"11")," ",h.a.createElement("span",{className:"hljs-attr"},"a1")," ",h.a.createElement("span",{className:"hljs-attr"},"d3")," ",h.a.createElement("span",{className:"hljs-attr"},"aa")," ",h.a.createElement("span",{className:"hljs-attr"},"e5")," ",h.a.createElement("span",{className:"hljs-attr"},"a4")," ",h.a.createElement("span",{className:"hljs-attr"},"9d")," ",h.a.createElement("span",{className:"hljs-attr"},"7e")," ",h.a.createElement("span",{className:"hljs-attr"},"2e")," ",h.a.createElement("span",{className:"hljs-attr"},"73")," ",h.a.createElement("span",{className:"hljs-attr"},"03")," ",h.a.createElement("span",{className:"hljs-attr"},"72")," ",h.a.createElement("span",{className:"hljs-attr"},"20")," ",h.a.createElement("span",{className:"hljs-attr"},"e6")," ",h.a.createElement("span",{className:"hljs-attr"},"82")," ",h.a.createElement("span",{className:"hljs-attr"},"95")," ",h.a.createElement("span",{className:"hljs-attr"},"d8")," ",h.a.createElement("span",{className:"hljs-attr"},"bd")," ",h.a.createElement("span",{className:"hljs-attr"},"5a")," ",h.a.createElement("span",{className:"hljs-attr"},"28")," ",h.a.createElement("span",{className:"hljs-attr"},"b9")," ",h.a.createElement("span",{className:"hljs-attr"},"83")," ",h.a.createElement("span",{className:"hljs-attr"},"b0")," ",h.a.createElement("span",{className:"hljs-attr"},"cc")," ",h.a.createElement("span",{className:"hljs-attr"},"66")," ",h.a.createElement("span",{className:"hljs-attr"},"33")," ",h.a.createElement("span",{className:"hljs-attr"},"e6")," ",h.a.createElement("span",{className:"hljs-attr"},"ee")," ",h.a.createElement("span",{className:"hljs-attr"},"92")," ",h.a.createElement("span",{className:"hljs-attr"},"19")," ",h.a.createElement("span",{className:"hljs-attr"},"c0")," ",h.a.createElement("span",{className:"hljs-attr"},"e1")," ",h.a.createElement("span",{className:"hljs-attr"},"9c")," ",h.a.createElement("span",{className:"hljs-attr"},"...")," >"),"\n","}","\n"))),h.a.createElement("p",null,"Signature generated, but there are two things we need to be concerned about here. The first is that a ",h.a.createElement("code",null,"Buffer")," object can not be easily transmitted to the RISE network in a JSON and should be represented as a hex string like the first signature here is. The second is that because the Transaction ID depends on the second signature as well as the first one, it needs to be recalculated. Luckily, ",h.a.createElement("code",null,"dpos-offline")," can handle both of these cases through the",h.a.createElement("code",null,"txs.toPostable")," method. This method takes in a transaction object and formats its values as well as recalculates the transaction ID."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-keyword"},"var")," postableTx = dpos.txs.toPostable(sendTx)","\n")),h.a.createElement("p",null,"The resulting object should be something we can now send to the network"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-built_in"},"console"),".log(postableTx)","\n",h.a.createElement("span",{className:"hljs-comment"},"// ","{"," amount: 100000000,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","asset: null,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","fee: 10000000,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","id: '5798413998819376085',"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","recipientId: '12345678901234567R',"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","senderId: '9747589144333222872R',"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","senderPublicKey:"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","    ","'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000',"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","timestamp: 77493696,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","type: 0,"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","signature:"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","    ","'92a6e0a29812c9553041567914e9d3acd00ca4b3abacabb6d1eb7efa3bb1185eaa34c1970891e6bb399dd018ae473417e3f81d747a347d681b20eb294ca69608',"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","   ","signSignature:"),"\n",h.a.createElement("span",{className:"hljs-comment"},"//","    ","'cc17d02971ec12334f3de79b213a304e2511a1d3aae5a49d7e2e73037220e68295d8bd5a28b983b0cc6633e6ee9219c0e19c3a5d0731031f9a02fd1df7c4300b' ","}"),"\n")),h.a.createElement("h2",{id:"broadcasting-a-transaction"},"Broadcasting a Transaction"),h.a.createElement("p",null,"To broadcast the transaction we just created, all we need to do is send it to a node, using its REST API. The ",h.a.createElement("code",null,"risejs")," client library provides us with an easy to use interface to do just that. First we start by including the library"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},h.a.createElement("span",{className:"hljs-keyword"},"var")," rise = ",h.a.createElement("span",{className:"hljs-built_in"},"require"),"(",h.a.createElement("span",{className:"hljs-string"},"'risejs'"),").rise","\n")),h.a.createElement("p",null,"This will create an API Wrapper for a node on the Mainnet. If we wanted to broadcast our transaction to a different node or network we would have to set our node address"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},"rise.nodeAddress = ",h.a.createElement("span",{className:"hljs-string"},"'http://localhost:5566'"),"\n")),h.a.createElement("p",null,"To send our transaction we simply use the Transactions API's ",h.a.createElement("code",null,"put")," method."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},"rise.transactions.put(sendTx)","\n","    ",".then(",h.a.createElement("span",{className:"hljs-function"},h.a.createElement("span",{className:"hljs-keyword"},"function"),"(",h.a.createElement("span",{className:"hljs-params"},"res"),") "),"{"," ",h.a.createElement("span",{className:"hljs-built_in"},"console"),".log(res); ","}",")","\n","    ",".catch(",h.a.createElement("span",{className:"hljs-function"},h.a.createElement("span",{className:"hljs-keyword"},"function"),"(",h.a.createElement("span",{className:"hljs-params"},"err"),") "),"{"," ",h.a.createElement("span",{className:"hljs-built_in"},"console"),".error(err); ","}",")","\n")),h.a.createElement("p",null,"The RISE API Wrapper returns a promise that we handle with ",h.a.createElement("code",null,"then")," on successfully transmitting to the node or ",h.a.createElement("code",null,"catch")," on a network failure. Our transaction will most likely fail, because the sender has never received a transaction before, and you will receive a response like"),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-javascript"},"{","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"success"),": ",h.a.createElement("span",{className:"hljs-literal"},"false"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},"error"),": ",h.a.createElement("span",{className:"hljs-string"},"'Account 35285700575243917R not found in db.'"),"\n","}","\n")),h.a.createElement("p",null,"However if the sender had enough RISE in his or her wallet, you should receive a successful response like."),h.a.createElement("pre",null,h.a.createElement("code",{className:"hljs language-json"},"{","\n","  ",h.a.createElement("span",{className:"hljs-attr"},'"success"'),": ",h.a.createElement("span",{className:"hljs-literal"},"true"),",","\n","  ",h.a.createElement("span",{className:"hljs-attr"},'"accepted"'),": [","\n","    ",h.a.createElement("span",{className:"hljs-string"},'"2159141135868240002"'),"\n","  ","],","\n","  ",h.a.createElement("span",{className:"hljs-attr"},'"invalid"'),": []","\n","}","\n")),h.a.createElement("p",null,"And in moments RISE would be transferred from the Sender to the Recipient!"))}}]),a}(h.a.PureComponent)},5:function(a,e){function t(e){return a.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}a.exports=t},6:function(e,a,t){var n=t(16),s=t(109);e.exports=function(e,a){return!a||"object"!==n(a)&&"function"!=typeof a?s(e):a}},7:function(e,a,t){var n=t(108);e.exports=function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&n(e,a)}},76:function(e,a,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var a={},t=0;t<10;t++)a["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(a).map(function(e){return a[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var t,n,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var r in t=Object(arguments[l]))m.call(t,r)&&(s[r]=t[r]);if(o){n=o(t);for(var c=0;c<n.length;c++)i.call(t,n[c])&&(s[n[c]]=t[n[c]])}}return s}}}]);