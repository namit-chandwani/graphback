/*! For license information please see adf83c08.0797ef91.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1328:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return d}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),p=function(e){var r=c.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=p(e.components);return c.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(t),b=n,d=f["".concat(a,".").concat(b)]||f[b]||s[b]||o;return t?c.a.createElement(d,i(i({ref:r},l),{},{components:t})):c.a.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1329:function(e,r,t){"use strict";e.exports=t(1330)},1330:function(e,r,t){"use strict";var n=t(1331),c="function"==typeof Symbol&&Symbol.for,o=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.portal"):60106,i=c?Symbol.for("react.fragment"):60107,u=c?Symbol.for("react.strict_mode"):60108,l=c?Symbol.for("react.profiler"):60114,p=c?Symbol.for("react.provider"):60109,f=c?Symbol.for("react.context"):60110,s=c?Symbol.for("react.forward_ref"):60112,b=c?Symbol.for("react.suspense"):60113,d=c?Symbol.for("react.memo"):60115,m=c?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}function g(){}function _(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var k=_.prototype=new g;k.constructor=_,n(k,j.prototype),k.isPureReactComponent=!0;var S={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,c={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)w.call(r,n)&&!C.hasOwnProperty(n)&&(c[n]=r[n]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];c.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g,N=[];function E(e,r,t,n){if(N.length){var c=N.pop();return c.result=e,c.keyPrefix=r,c.func=t,c.context=n,c.count=0,c}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function $(e,r,t,n){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return t(n,e,""===r?"."+I(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+I(c=e[u],u);i+=$(c,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)i+=$(c=c.value,l=r+I(c,u++),t,n);else if("object"===c)throw t=""+e,Error(v(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function U(e,r,t){return null==e?0:$(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function T(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,c=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?F(e,n,t,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function F(e,r,t,n,c){var o="";null!=t&&(o=(""+t).replace(R,"$&/")+"/"),U(e,A,r=E(r,o,n,c)),D(r)}var M={current:null};function q(){var e=M.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return F(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;U(e,T,r=E(null,null,r,t)),D(r)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var r=[];return F(e,r,null,(function(e){return e})),r},only:function(e){if(!P(e))throw Error(v(143));return e}},r.Component=j,r.Fragment=i,r.Profiler=l,r.PureComponent=_,r.StrictMode=u,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(v(267,e));var c=n({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=S.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in r)w.call(r,p)&&!C.hasOwnProperty(p)&&(c[p]=void 0===r[p]&&void 0!==l?l[p]:r[p])}var p=arguments.length-2;if(1===p)c.children=t;else if(1<p){l=Array(p);for(var f=0;f<p;f++)l[f]=arguments[f+2];c.children=l}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.14.0"},1331:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,r){for(var t,i,u=a(e),l=1;l<arguments.length;l++){for(var p in t=Object(arguments[l]))c.call(t,p)&&(u[p]=t[p]);if(n){i=n(t);for(var f=0;f<i.length;f++)o.call(t,i[f])&&(u[i[f]]=t[i[f]])}}return u}},930:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),c=t(7),o=(t(1329),t(1328)),a={id:"_runtime_createcrudservice_",title:"runtime/createCRUDService",sidebar_label:"runtime/createCRUDService"},i={unversionedId:"api/graphback-core/modules/_runtime_createcrudservice_",id:"api/graphback-core/modules/_runtime_createcrudservice_",isDocsHomePage:!1,title:"runtime/createCRUDService",description:"Index",source:"@site/../docs/api/graphback-core/modules/_runtime_createcrudservice_.md",slug:"/api/graphback-core/modules/_runtime_createcrudservice_",permalink:"/docs/next/api/graphback-core/modules/_runtime_createcrudservice_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_runtime_createcrudservice_.md",version:"current",sidebar_label:"runtime/createCRUDService",sidebar:"docs",previous:{title:"GraphbackProxyService",permalink:"/docs/next/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice"},next:{title:"GraphbackCRUDService",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"}},u=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createCRUDService",id:"createcrudservice",children:[]}]}],l={rightToc:u};function p(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_createcrudservice_.createcrudserviceoptions"}),"CreateCRUDServiceOptions"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_runtime_createcrudservice_#createcrudservice"}),"createCRUDService"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"createcrudservice"},"createCRUDService"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"createCRUDService"),"(",Object(o.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_createcrudservice_.createcrudserviceoptions"}),"CreateCRUDServiceOptions"),"): ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#servicecreator"}),"ServiceCreator"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/68e0e3f/packages/graphback-core/src/runtime/createCRUDService.ts#L13"}),"packages/graphback-core/src/runtime/createCRUDService.ts:13"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"config?")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_createcrudservice_.createcrudserviceoptions"}),"CreateCRUDServiceOptions"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#servicecreator"}),"ServiceCreator"))))}p.isMDXComponent=!0}}]);