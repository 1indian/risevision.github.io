(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{0:function(e,t,n){"use strict";e.exports=n(108)},107:function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},108:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(76),r="function"==typeof Symbol&&Symbol.for,f=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.placeholder");var y="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,c){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,c],u=0;(e=Error(t.replace(/%s/g,function(){return s[u++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function v(){}function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&d("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var S=E.prototype=new v;S.constructor=E,l(S,g.prototype),S.isPureReactComponent=!0;var w={current:null,currentDispatcher:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r=void 0,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:f,type:e,key:a,ref:i,props:o,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===f}var O=/\/+/g,A=[];function x(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,A.length<10&&A.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var i=!1;if(null===t)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case f:case u:i=!0}}if(i)return r(o,t,""===n?"."+R(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=n+R(a=t[c],c);i+=e(a,s,r,o)}else if("function"==typeof(s=null===t||"object"!=typeof t?null:"function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null))for(t=s.call(t),c=0;!(a=t.next()).done;)i+=e(a=a.value,s=n+R(a,c++),r,o);else"object"===a&&d("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return i}(e,"",t,n)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function K(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r,o,a=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?C(e,a,n,function(e){return e}):null!=e&&(_(e)&&(o=i+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n,e={$$typeof:f,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}),a.push(e))}function C(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(O,"$&/")+"/"),I(e,$,t=x(t,a,r,o)),T(t)}var N={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return C(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,K,t=x(null,null,t,n)),T(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return C(e,t,null,function(e){return e}),t},only:function(e){return _(e)||d("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:c,_context:e},(e.Consumer=e).unstable_read=function(e,t){var n=w.currentDispatcher;return null===n&&d("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:h,render:e}},Fragment:o,StrictMode:a,unstable_AsyncMode:p,unstable_Profiler:i,createElement:j,cloneElement:function(e,t,n){null==e&&d("267",e);var r=void 0,o=l({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,c=w.current),void 0!==t.key&&(a=""+t.key);var s=void 0;for(r in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)k.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==s?s[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){s=Array(r);for(var u=0;u<r;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:f,type:e.type,key:a,ref:i,props:o,_owner:c}},createFactory:function(e){var t=j.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:l}},D=N;e.exports=D.default||D},109:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},16:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},4:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},444:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return d}),n.d(t,"default",function(){return m});var r=n(2),o=n.n(r),a=n(4),i=n.n(a),c=n(6),s=n.n(c),u=n(5),l=n.n(u),f=n(7),p=n.n(f),h=n(0),y=n.n(h),d={},m=function(e){function t(){return o()(this,t),s()(this,l()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"render",value:function(){var e=this.props;return y.a.createElement("div",null,y.a.createElement("h1",{id:"identity--security"},"Identity & Security"),y.a.createElement("p",null,"RISE uses crytographic hash functions and ellyptical curve cryptography to secure the network and validate the authenticity of transactions and blocks. Specifically, the RISE protocol uses ",y.a.createElement("a",{href:"https://tools.ietf.org/html/rfc8032"},"EdDSA")," for key-pairs and signatures, as well as ",y.a.createElement("a",{href:"https://tools.ietf.org/html/rfc4634"},"SHA-256")," as a secure hashing function."),y.a.createElement("h2",{id:"key-pairs"},"Key Pairs"),y.a.createElement("p",null,"A key pair is made up of a Public and a Private key in conjunction. A key pair allows for asymmetric cryptography. Specifically, this means, a key pair can perform two important functions:"),y.a.createElement("ul",null,y.a.createElement("li",null,"A message can be encrypted using a Public Key and then decrypted using a Private Key"),y.a.createElement("li",null,"A message can be signed using a Private Key and then verified using a Public Key")),y.a.createElement("p",null,"To generate the key pair, the following procedure is taken. First a passphrase is generated using a ",y.a.createElement("a",{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"BIP39")," mnemonic passphrase generation algorithm. The goal of the mnemonic is to memorable and easy to store without error and so consists of a series of short words which the user can store securely. After the passphrase is generated and stored by the user, a seed can be generated by taking a SHA-256 hash of the passphrase. This seed is used as an input to an ",y.a.createElement("a",{href:"https://ed25519.cr.yp.to/"},"Ed25519")," cryptographic function to generate a Public / Private key pair."),y.a.createElement("p",null,"Private keys can then be used to sign transactions and broadcast to the network. Because the corresponding public key is also included in the transaction, the verifier can be certain that the creator of the transaction owns the associated private key, thereby verifying its authenticity. More information about how this is done can be found in ",y.a.createElement(e.Link,{href:"pages/protocol/Transactions"},"Transactions ")),y.a.createElement("h2",{id:"accounts"},"Accounts"),y.a.createElement("p",null,"Accounts are key-pair holders. Once a key-pair has been generated, the key-pair holder can receive RISE tokens sent to his or her account using his or her AccountID derived for the Public Key as described below. Using the Private Key, new transactions from the account can then be authored to send RISE tokens to other accounts or perform special functions like voting as described in ",y.a.createElement(e.Link,{href:"pages/protocol/Transactions"},"Transactions"),". A JSON representation of an account is as follows."),y.a.createElement("pre",null,y.a.createElement("code",{className:"hljs language-json"},"{","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"address"'),": RISE AccountID,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"unconfirmedBalance"'),": Balance after Transactions unconfirmed by the network,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"balance"'),": Balance after Transactions confirmed by the network,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"publicKey"'),": Public Key,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"unconfirmedSignature"'),": Has unconfirmed Second Signature,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"secondSignature"'),": Has Second Signature,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"secondPublicKey"'),": Second Public Key associated to Second Signature,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"multisignatures"'),": Multisignatures,","\n","    ",y.a.createElement("span",{className:"hljs-attr"},'"u_multisignatures"'),": unconfirmed Multisignatures","\n","}","\n")),y.a.createElement("h3",{id:"accountids"},"AccountIDs"),y.a.createElement("p",null,"A RISE AccountID (also sometimes referred to as Wallet Address), is a short identifier used as a reference to an account when sending transactions. To generate the AccountID, first a hash of the Public Key is generating using a SHA-256 hashing algorithm. The first 8 bytes of the hash are then taken and reversed. The resulting numerical representation with an ",y.a.createElement("code",null,"R")," appended is used as an AccountID. An example AccountID looks like the following",y.a.createElement("code",null,"8093718274007724701R"),"."),y.a.createElement("h3",{id:"second-key-pair"},"Second Key Pair"),y.a.createElement("p",null,"Accounts have the option to generate a Second Key Pair using the same ",y.a.createElement("a",{href:"#key-pair"},"Key Pair Generation Algorithm")," described above. This allows the user to have an added layer of security by requiring two signatures for every authored transaction which can prevent forgery in the case that one Private Key or Passphrase is stolen. After the account registers the Second Public Key using a Second Signature Transaction, every subsequent Transaction must use both Private Keys to sign the Transaction."),y.a.createElement("h3",{id:"multisignature-accounts"},"Multisignature Accounts"),y.a.createElement("p",null,"Accounts can also register as multisignature accounts for increased security, using a Multisignature Registration Transaction. This allows the account to provide a list of possible ",y.a.createElement("code",null,"n")," identities (as a list of Public Keys) to sign a transaction and a minimum number ",y.a.createElement("code",null,"m")," of signatures required. In a given amount of time after the timestamp of the transaction (the lifespan of the multisignature account), at least ",y.a.createElement("code",null,"m")," of the ",y.a.createElement("code",null,"n")," Private Keys associated to the Public Keys must sign the transaction for it to be verified."))}}]),t}(y.a.PureComponent)},5:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},6:function(e,t,n){var r=n(16),o=n(109);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},7:function(e,t,n){var r=n(107);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},76:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))u.call(n,i)&&(o[i]=n[i]);if(s){r=s(n);for(var c=0;c<r.length;c++)l.call(n,r[c])&&(o[r[c]]=n[r[c]])}}return o}}}]);