(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{0:function(e,t,n){"use strict";e.exports=n(107)},107:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(76),a="function"==typeof Symbol&&Symbol.for,p=a?Symbol.for("react.element"):60103,u=a?Symbol.for("react.portal"):60106,r=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,o=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,c=a?Symbol.for("react.context"):60110,m=a?Symbol.for("react.async_mode"):60111,f=a?Symbol.for("react.forward_ref"):60112;a&&Symbol.for("react.placeholder");var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=0;a<t;a++)n+="&args[]="+encodeURIComponent(arguments[a+1]);!function(e,t,n,a,r,l,o,s){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,r,l,o,s],u=0;(e=Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=E.prototype;var j=v.prototype=new g;j.constructor=v,i(j,E.prototype),j.isPureReactComponent=!0;var w={current:null,currentDispatcher:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var a=void 0,r={},l=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,a)&&!S.hasOwnProperty(a)&&(r[a]=t[a]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];r.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:p,type:e,key:l,ref:o,props:r,_owner:w.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===p}var O=/\/+/g,_=[];function P(e,t,n,a){if(_.length){var r=_.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,_.length<10&&_.push(e)}function C(e,t,n){return null==e?0:function e(t,n,a,r){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var o=!1;if(null===t)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case p:case u:o=!0}}if(o)return a(r,t,""===n?"."+I(t,0):n),1;if(o=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var c=n+I(l=t[s],s);o+=e(l,c,a,r)}else if("function"==typeof(c=null===t||"object"!=typeof t?null:"function"==typeof(c=d&&t[d]||t["@@iterator"])?c:null))for(t=c.call(t),s=0;!(l=t.next()).done;)o+=e(l=l.value,c=n+I(l,s++),a,r);else"object"===l&&h("31","[object Object]"==(a=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":a,"");return o}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,a={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return a[e]})):t.toString(36);var n,a}function R(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var a,r,l=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,l,n,function(e){return e}):null!=e&&(N(e)&&(r=o+(!(a=e).key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n,e={$$typeof:p,type:a.type,key:r,ref:a.ref,props:a.props,_owner:a._owner}),l.push(e))}function B(e,t,n,a,r){var l="";null!=n&&(l=(""+n).replace(O,"$&/")+"/"),C(e,T,t=P(t,l,a,r)),$(t)}var A={Children:{map:function(e,t,n){if(null==e)return e;var a=[];return B(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;C(e,R,t=P(null,null,t,n)),$(t)},count:function(e){return C(e,function(){return null},null)},toArray:function(e){var t=[];return B(e,t,null,function(e){return e}),t},only:function(e){return N(e)||h("143"),e}},createRef:function(){return{current:null}},Component:E,PureComponent:v,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:s,_context:e},(e.Consumer=e).unstable_read=function(e,t){var n=w.currentDispatcher;return null===n&&h("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:f,render:e}},Fragment:r,StrictMode:l,unstable_AsyncMode:m,unstable_Profiler:o,createElement:x,cloneElement:function(e,t,n){null==e&&h("267",e);var a=void 0,r=i({},e.props),l=e.key,o=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(o=t.ref,s=w.current),void 0!==t.key&&(l=""+t.key);var c=void 0;for(a in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)k.call(t,a)&&!S.hasOwnProperty(a)&&(r[a]=void 0===t[a]&&void 0!==c?c[a]:t[a])}if(1===(a=arguments.length-2))r.children=n;else if(1<a){c=Array(a);for(var u=0;u<a;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:p,type:e.type,key:l,ref:o,props:r,_owner:s}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:i}},D=A;e.exports=D.default||D},108:function(n,e){function a(e,t){return n.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}n.exports=a},109:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},16:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=a=function(e){return n(e)}:t.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},a(e)}t.exports=a},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},4:function(e,t){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},443:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return h}),n.d(t,"default",function(){return y});var a=n(2),r=n.n(a),l=n(4),o=n.n(l),s=n(6),c=n.n(s),u=n(5),i=n.n(u),p=n(7),m=n.n(p),f=n(0),d=n.n(f),h={},y=function(e){function t(){return r()(this,t),c()(this,i()(t).apply(this,arguments))}return m()(t,e),o()(t,[{key:"render",value:function(){this.props;return d.a.createElement("div",null,d.a.createElement("h1",{id:"managersh"},"Manager.sh"),d.a.createElement("p",null,"Managing your node is an important task. The new TypeScript core comes with some utilities that will help you perform normal operations such as starting, stopping, backing up and more."),d.a.createElement("p",null,"To access manager.sh script you just need to enter the installation folder (default: ",d.a.createElement("code",null,"~/rise"),")."),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-elixir"},"rise",d.a.createElement("span",{className:"hljs-variable"},"@risenode"),d.a.createElement("span",{className:"hljs-symbol"},":~"),d.a.createElement("span",{className:"hljs-variable"},"$ "),"cd rise","\n")),d.a.createElement("p",null,"When calling the manager without parameters an help screen will be shown."),d.a.createElement("h2",{id:"checking-status"},"Checking status"),d.a.createElement("p",null,"This command will help you understand the current node situation. It will spit out basic informations such as PID (Process ID), current block height and status of the dependencies (DB and Redis). A normal status message will look like this:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-inform7"},"rise@risenode:~/rise$ ./manager.sh status","\n","\n","√ DB ",d.a.createElement("span",{className:"hljs-keyword"},"is")," running ",d.a.createElement("span",{className:"hljs-comment"},"[4285]"),"\n","√ Redis ",d.a.createElement("span",{className:"hljs-keyword"},"is")," running ",d.a.createElement("span",{className:"hljs-comment"},"[4294]"),"\n","√ NODE ",d.a.createElement("span",{className:"hljs-keyword"},"is")," running ",d.a.createElement("span",{className:"hljs-comment"},"[4337]")," - ",d.a.createElement("span",{className:"hljs-comment"},"[H=11999]"),"\n")),d.a.createElement("h2",{id:"stopping-node-or-dependency"},"Stopping node or dependency"),d.a.createElement("p",null,"Some times you'd like to stop the node or a dependency. The manager can help you with that and will automatically stop the desired entity. Valid entities are ",d.a.createElement("code",null,"node"),", ",d.a.createElement("code",null,"db"),", or ",d.a.createElement("code",null,"redis")),d.a.createElement("p",null,"Example:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-crmsh"},"./manager.sh ",d.a.createElement("span",{className:"hljs-literal"},"stop")," ",d.a.createElement("span",{className:"hljs-keyword"},"node"),"\n",d.a.createElement("span",{className:"hljs-title"}))),d.a.createElement("p",null,"In this example the manager will stop the node (if not running)."),d.a.createElement("p",null,"If you need to stop everything just pass ",d.a.createElement("code",null,"all")," instead of ",d.a.createElement("code",null,"node")),d.a.createElement("h2",{id:"starting"},"Starting"),d.a.createElement("p",null,"The start command is following the same syntax of the stop command described above. "),d.a.createElement("p",null,"Example:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-crmsh"},"./manager.sh ",d.a.createElement("span",{className:"hljs-literal"},"start")," ",d.a.createElement("span",{className:"hljs-keyword"},"node"),"\n",d.a.createElement("span",{className:"hljs-title"}))),d.a.createElement("h2",{id:"reload"},"Reload"),d.a.createElement("p",null,"Sometimes you'll need to reload an entity. This command is basically a wrapper for ",d.a.createElement("code",null,"stop")," + ",d.a.createElement("code",null,"start")," and it follows the same syntax of those commands."),d.a.createElement("p",null,"Example:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-crmsh"},"./manager.sh reload ",d.a.createElement("span",{className:"hljs-keyword"},"node"),"\n",d.a.createElement("span",{className:"hljs-title"}))),d.a.createElement("h2",{id:"backup"},"Backup"),d.a.createElement("p",null,"This command will perform a DataBase backup handling all the operations involved to safely produce a backup."),d.a.createElement("p",null,"Example:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-stylus"},"./manager",d.a.createElement("span",{className:"hljs-selector-class"},".sh")," backup","\n")),d.a.createElement("p",null,"It accepts no arguments. By default, the backups will be saved in ",d.a.createElement("code",null,"/home/rise/rise/data/backups/"),", assuming your non-root user's home dir is ",d.a.createElement("code",null,"/home/rise/"),". A symlink ",d.a.createElement("code",null,"data/backups/latest")," will be created pointing to the latest available backup."),d.a.createElement("h2",{id:"restore-backup"},"Restore Backup"),d.a.createElement("p",null,"When you need to restore a backup (or a verified snapshot) you can use this command by providing the file containing the backup."),d.a.createElement("p",null,"Example:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-stylus"},"./manager",d.a.createElement("span",{className:"hljs-selector-class"},".sh")," restoreBackup ./backup",d.a.createElement("span",{className:"hljs-selector-class"},".tgz"),"\n")),d.a.createElement("p",null,d.a.createElement("strong",null,"Important")," If the backup is not within the ",d.a.createElement("code",null,"rise")," folder please provide ",d.a.createElement("strong",null,"full absolute path")),d.a.createElement("p",null,"If you already have a backup performed with the backup command, ",d.a.createElement("code",null,"restoreBackup")," will use the latest backup in case you don't provide any file argument."),d.a.createElement("h3",{id:"restore-verified-snapshot"},"Restore verified snapshot"),d.a.createElement("p",null,"When you install the node it will try to sync from start. If you want to get up to speed faster you could consider using a verified snapshot."),d.a.createElement("p",null,"In case of mainnet:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-stylus"},"wget https:",d.a.createElement("span",{className:"hljs-comment"},"//downloads.rise.vision/snapshots/mainnet/latest -O latestsnap.gz"),"\n","./manager",d.a.createElement("span",{className:"hljs-selector-class"},".sh")," restoreBackup latestsnap",d.a.createElement("span",{className:"hljs-selector-class"},".gz"),"\n")),d.a.createElement("p",null,"In case of testnet:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-stylus"},"wget https:",d.a.createElement("span",{className:"hljs-comment"},"//downloads.rise.vision/snapshots/testnet/latest -O latestsnap.gz"),"\n","./manager",d.a.createElement("span",{className:"hljs-selector-class"},".sh")," restoreBackup latestsnap",d.a.createElement("span",{className:"hljs-selector-class"},".gz"),"\n")))}}]),t}(d.a.PureComponent)},5:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},6:function(e,t,n){var a=n(16),r=n(109);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},7:function(e,t,n){var a=n(108);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},76:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,r=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var o in n=Object(arguments[l]))u.call(n,o)&&(r[o]=n[o]);if(c){a=c(n);for(var s=0;s<a.length;s++)i.call(n,a[s])&&(r[a[s]]=n[a[s]])}}return r}}}]);