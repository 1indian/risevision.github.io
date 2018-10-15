(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(e,t,n){"use strict";e.exports=n(90)},12:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},13:function(e,t,n){var r=n(35),l=n(91);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}},14:function(e,t,n){var r=n(89);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},35:function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},392:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return h}),n.d(t,"default",function(){return y});var r=n(8),l=n.n(r),o=n(9),a=n.n(o),c=n(13),u=n.n(c),i=n(12),s=n.n(i),f=n(14),p=n.n(f),m=n(0),d=n.n(m),h={},y=function(e){function t(){return l()(this,t),u()(this,s()(t).apply(this,arguments))}return p()(t,e),a()(t,[{key:"render",value:function(){var e=this.props;return d.a.createElement("div",null,d.a.createElement("h1",{id:"an-h1-header"},"An h1 header"),d.a.createElement("p",null,"Paragraphs are separated by a blank line."),d.a.createElement("p",null,"2nd paragraph. ",d.a.createElement("em",null,"Italic"),", ",d.a.createElement("strong",null,"bold"),", and ",d.a.createElement("code",null,"monospace"),". Itemized lists look like:"),d.a.createElement("ul",null,d.a.createElement("li",null,"this one"),d.a.createElement("li",null,"that one"),d.a.createElement("li",null,"the other one")),d.a.createElement("p",null,"Note that --- not considering the asterisk --- the actual text content starts at 4-columns in."),d.a.createElement("blockquote",null,d.a.createElement("p",null,"Block quotes are written like so."),d.a.createElement("p",null,"They can span multiple paragraphs, if you like.")),d.a.createElement("p",null,'Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it\'s all in chapters 12--14"). Three dots ... will be converted to an ellipsis. Unicode is supported. ☺'),d.a.createElement("h2",{id:"an-h2-header"},"An h2 header"),d.a.createElement("p",null,"Here's a numbered list:"),d.a.createElement("ol",null,d.a.createElement("li",null,"first item"),d.a.createElement("li",null,"second item"),d.a.createElement("li",null,"third item")),d.a.createElement("p",null,"Note again how the actual text starts at 4 columns in (4 characters from the left side). Here's a code sample:"),d.a.createElement("h1",{id:"let-me-re-iterate-"},"Let me re-iterate ..."),d.a.createElement("p",null,"    for i in 1 .. 10 ","{"," do-something(i) ","}"),d.a.createElement("p",null,"As you probably guessed, indented 4 spaces. By the way, instead of indenting the block, you can use delimited blocks, if you like:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-puppet"},d.a.createElement("span",{className:"hljs-keyword"},"define")," ",d.a.createElement("span",{className:"hljs-section"},"foobar"),"() ","{","\n","    ","print ",d.a.createElement("span",{className:"hljs-string"},'"Welcome to flavor country!"'),";","\n","}","\n")),d.a.createElement("p",null,"(which makes copying & pasting easier). You can optionally mark the delimited block for Pandoc to syntax highlight it:"),d.a.createElement("pre",null,d.a.createElement("code",{className:"hljs language-python"},d.a.createElement("span",{className:"hljs-keyword"},"import")," time","\n",d.a.createElement("span",{className:"hljs-comment"},"# Quick, count to ten!"),"\n",d.a.createElement("span",{className:"hljs-keyword"},"for")," i ",d.a.createElement("span",{className:"hljs-keyword"},"in")," range(",d.a.createElement("span",{className:"hljs-number"},"10"),"):","\n","    ",d.a.createElement("span",{className:"hljs-comment"},"# (but not *too* quick)"),"\n","    ","time.sleep(",d.a.createElement("span",{className:"hljs-number"},"0.5"),")","\n","    ",d.a.createElement("span",{className:"hljs-keyword"},"print")," i","\n")),d.a.createElement("h3",{id:"an-h3-header"},"An h3 header"),d.a.createElement("p",null,"Now a nested list:"),d.a.createElement("ol",null,d.a.createElement("li",null,d.a.createElement("p",null,"First, get these ingredients:"),d.a.createElement("ul",null,d.a.createElement("li",null,"carrots"),d.a.createElement("li",null,"celery"),d.a.createElement("li",null,"lentils"))),d.a.createElement("li",null,d.a.createElement("p",null,"Boil some water.")),d.a.createElement("li",null,d.a.createElement("p",null,"Dump everything in the pot and follow this algorithm:"),d.a.createElement("p",null,"    find wooden spoon uncover pot stir cover pot balance wooden spoon precariously on pot handle wait 10 minutes goto first step (or shut off burner when done)"),d.a.createElement("p",null,"Do not bump wooden spoon or it will fall."))),d.a.createElement("p",null,"Notice again how text always lines up on 4-space indents (including that last line which continues item 3 above)."),d.a.createElement("p",null,"Here's a link to ",d.a.createElement("a",{href:"http://foo.bar"},"a website"),", to a ",d.a.createElement("a",{href:"local-doc.html"},"local doc"),", and to a ",d.a.createElement("a",{href:"#an-h2-header"},"section heading in the current doc"),". Here's a footnote [^1]."),d.a.createElement("p",null,"Test Link ",d.a.createElement(e.Link,{href:"pages/Installation"},"Hello")),d.a.createElement("p",null,"[^1]: Footnote text goes here."),d.a.createElement("p",null,"Tables can look like this:"),d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"size"),d.a.createElement("th",null,"material"),d.a.createElement("th",null,"color"))),d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("td",null,"9"),d.a.createElement("td",null,"leather"),d.a.createElement("td",null,"brown")),d.a.createElement("tr",null,d.a.createElement("td",null,"10"),d.a.createElement("td",null,"hemp canvas"),d.a.createElement("td",null,"natural")),d.a.createElement("tr",null,d.a.createElement("td",null,"11"),d.a.createElement("td",null,"glass"),d.a.createElement("td",null,"transparent")))))}}]),t}(d.a.PureComponent)},64:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var a in n=Object(arguments[o]))i.call(n,a)&&(l[a]=n[a]);if(u){r=u(n);for(var c=0;c<r.length;c++)s.call(n,r[c])&&(l[r[c]]=n[r[c]])}}return l}},8:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},89:function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},9:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},90:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(64),r="function"==typeof Symbol&&Symbol.for,f=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.placeholder");var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,l,o,a,c){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,l,o,a,c],i=0;(e=Error(t.replace(/%s/g,function(){return u[i++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=E.prototype;var w=g.prototype=new v;w.constructor=g,s(w,E.prototype),w.isPureReactComponent=!0;var k={current:null,currentDispatcher:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r=void 0,l={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(1===c)l.children=n;else if(1<c){for(var u=Array(c),i=0;i<c;i++)u[i]=arguments[i+2];l.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===l[r]&&(l[r]=c[r]);return{$$typeof:f,type:e,key:o,ref:a,props:l,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===f}var O=/\/+/g,P=[];function N(e,t,n,r){if(P.length){var l=P.pop();return l.result=e,l.keyPrefix=t,l.func=n,l.context=r,l.count=0,l}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,P.length<10&&P.push(e)}function C(e,t,n){return null==e?0:function e(t,n,r,l){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var a=!1;if(null===t)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case f:case i:a=!0}}if(a)return r(l,t,""===n?"."+A(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var u=n+A(o=t[c],c);a+=e(o,u,r,l)}else if("function"==typeof(u=null===t||"object"!=typeof t?null:"function"==typeof(u=d&&t[d]||t["@@iterator"])?u:null))for(t=u.call(t),c=0;!(o=t.next()).done;)a+=e(o=o.value,u=n+A(o,c++),r,l);else"object"===o&&h("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return a}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function R(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r,l,o=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,o,n,function(e){return e}):null!=e&&(x(e)&&(l=a+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n,e={$$typeof:f,type:r.type,key:l,ref:r.ref,props:r.props,_owner:r._owner}),o.push(e))}function q(e,t,n,r,l){var o="";null!=n&&(o=(""+n).replace(O,"$&/")+"/"),C(e,T,t=N(t,o,r,l)),$(t)}var U={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;C(e,R,t=N(null,null,t,n)),$(t)},count:function(e){return C(e,function(){return null},null)},toArray:function(e){var t=[];return q(e,t,null,function(e){return e}),t},only:function(e){return x(e)||h("143"),e}},createRef:function(){return{current:null}},Component:E,PureComponent:g,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:c,_context:e},(e.Consumer=e).unstable_read=function(e,t){var n=k.currentDispatcher;return null===n&&h("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:m,render:e}},Fragment:l,StrictMode:o,unstable_AsyncMode:p,unstable_Profiler:a,createElement:_,cloneElement:function(e,t,n){null==e&&h("267",e);var r=void 0,l=s({},e.props),o=e.key,a=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,c=k.current),void 0!==t.key&&(o=""+t.key);var u=void 0;for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(l[r]=void 0===t[r]&&void 0!==u?u[r]:t[r])}if(1===(r=arguments.length-2))l.children=n;else if(1<r){u=Array(r);for(var i=0;i<r;i++)u[i]=arguments[i+2];l.children=u}return{$$typeof:f,type:e.type,key:o,ref:a,props:l,_owner:c}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:s}},I=U;e.exports=I.default||I},91:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}}}]);