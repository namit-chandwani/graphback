/*! For license information please see b3a1756c.bb1a3574.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{1082:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,j=s["".concat(b,".").concat(d)]||s[d]||u[d]||c;return a?r.a.createElement(j,l(l({ref:t},o),{},{components:a})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1083:function(e,t,a){"use strict";e.exports=a(1084)},1084:function(e,t,a){"use strict";var n=a(1085),r="function"==typeof Symbol&&Symbol.for,c=r?Symbol.for("react.element"):60103,b=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,j=r?Symbol.for("react.memo"):60115,O=r?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}function N(){}function v(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=y.prototype;var k=v.prototype=new N;k.constructor=v,n(k,y.prototype),k.isPureReactComponent=!0;var _={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,a){var n,r={},b=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(b=""+t.key),t)C.call(t,n)&&!S.hasOwnProperty(n)&&(r[n]=t[n]);var i=arguments.length-2;if(1===i)r.children=a;else if(1<i){for(var o=Array(i),p=0;p<i;p++)o[p]=arguments[p+2];r.children=o}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===r[n]&&(r[n]=i[n]);return{$$typeof:c,type:e,key:b,ref:l,props:r,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,P=[];function T(e,t,a,n){if(P.length){var r=P.pop();return r.result=e,r.keyPrefix=t,r.func=a,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:a,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function R(e,t,a){return null==e?0:function e(t,a,n,r){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case c:case b:i=!0}}if(i)return n(r,t,""===a?"."+E(t,0):a),1;if(i=0,a=""===a?".":a+":",Array.isArray(t))for(var o=0;o<t.length;o++){var p=a+E(l=t[o],o);i+=e(l,p,n,r)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=m&&t[m]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),o=0;!(l=t.next()).done;)i+=e(l=l.value,p=a+E(l,o++),n,r);else if("object"===l)throw n=""+t,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,a)}function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,a){var n=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,n,a,(function(e){return e})):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+a)),n.push(e))}function $(e,t,a,n,r){var c="";null!=a&&(c=(""+a).replace(x,"$&/")+"/"),R(e,U,t=T(t,c,n,r)),M(t)}var F={current:null};function A(){var e=F.current;if(null===e)throw Error(f(321));return e}var I={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,a){if(null==e)return e;var n=[];return $(e,n,null,t,a),n},forEach:function(e,t,a){if(null==e)return e;R(e,L,t=T(null,null,t,a)),M(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=y,t.Fragment=l,t.Profiler=o,t.PureComponent=v,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,a){if(null==e)throw Error(f(267,e));var r=n({},e.props),b=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=_.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(p in t)C.call(t,p)&&!S.hasOwnProperty(p)&&(r[p]=void 0===t[p]&&void 0!==o?o[p]:t[p])}var p=arguments.length-2;if(1===p)r.children=a;else if(1<p){o=Array(p);for(var s=0;s<p;s++)o[s]=arguments[s+2];r.children=o}return{$$typeof:c,type:e.type,key:b,ref:l,props:r,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=D,t.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:j,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return A().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,a){return A().useReducer(e,t,a)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},1085:function(e,t,a){"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var a,l,i=b(e),o=1;o<arguments.length;o++){for(var p in a=Object(arguments[o]))r.call(a,p)&&(i[p]=a[p]);if(n){l=n(a);for(var s=0;s<l.length;s++)c.call(a,l[s])&&(i[l[s]]=a[l[s]])}}return i}},770:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(1083),a(1082)),b={id:"_util_",title:"util",sidebar_label:"util"},l={unversionedId:"api/graphback-datasync/modules/_util_",id:"api/graphback-datasync/modules/_util_",isDocsHomePage:!1,title:"util",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_util_.md",slug:"/api/graphback-datasync/modules/_util_",permalink:"/docs/next/api/graphback-datasync/modules/_util_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_util_.md",version:"current",sidebar_label:"util"},i=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Object literals",id:"object-literals",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getDataSyncAnnotationData",id:"getdatasyncannotationdata",children:[]},{value:"getModelConfigFromGlobal",id:"getmodelconfigfromglobal",children:[]},{value:"isDataSyncModel",id:"isdatasyncmodel",children:[]},{value:"isDataSyncService",id:"isdatasyncservice",children:[]},{value:"isDataSyncType",id:"isdatasynctype",children:[]}]},{value:"Object literals",id:"object-literals-1",children:[{value:"<code>Const</code> ClientSideWins",id:"const-clientsidewins",children:[]},{value:"\u25aa <strong>ClientSideWins</strong>: <em>object</em>",id:"-clientsidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete",children:[]},{value:"resolveUpdate",id:"resolveupdate",children:[]},{value:"<code>Const</code> DataSyncFieldNames",id:"const-datasyncfieldnames",children:[]},{value:"\u25aa <strong>DataSyncFieldNames</strong>: <em>object</em>",id:"-datasyncfieldnames-object",children:[]},{value:"deleted",id:"deleted",children:[]},{value:"lastUpdatedAt",id:"lastupdatedat",children:[]},{value:"ttl",id:"ttl",children:[]},{value:"version",id:"version",children:[]},{value:"<code>Const</code> ServerSideWins",id:"const-serversidewins",children:[]},{value:"\u25aa <strong>ServerSideWins</strong>: <em>object</em>",id:"-serversidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete-1",children:[]},{value:"resolveUpdate",id:"resolveupdate-1",children:[]},{value:"<code>Const</code> ThrowOnConflict",id:"const-throwonconflict",children:[]},{value:"\u25aa <strong>ThrowOnConflict</strong>: <em>object</em>",id:"-throwonconflict-object",children:[]},{value:"resolveDelete",id:"resolvedelete-2",children:[]},{value:"resolveUpdate",id:"resolveupdate-2",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_util_.conflicterror"}),"ConflictError"))),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconfigmap"}),"DataSyncModelConfigMap")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#getdatasyncannotationdata"}),"getDataSyncAnnotationData")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#getmodelconfigfromglobal"}),"getModelConfigFromGlobal")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasyncmodel"}),"isDataSyncModel")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasyncservice"}),"isDataSyncService")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasynctype"}),"isDataSyncType"))),Object(c.b)("h3",{id:"object-literals"},"Object literals"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-clientsidewins"}),"ClientSideWins")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-datasyncfieldnames"}),"DataSyncFieldNames")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-serversidewins"}),"ServerSideWins")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-throwonconflict"}),"ThrowOnConflict"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"getdatasyncannotationdata"},"getDataSyncAnnotationData"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDataSyncAnnotationData"),"(",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L14"}),"packages/graphback-datasync/src/util.ts:14"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getmodelconfigfromglobal"},"getModelConfigFromGlobal"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getModelConfigFromGlobal"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelName"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"globalConfig"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L51"}),"packages/graphback-datasync/src/util.ts:51"))),Object(c.b)("p",null,"Function to get conflict configuration of specific model from specified global configuration"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"modelName")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the model's GraphQL type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"globalConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specified global config")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isdatasyncmodel"},"isDataSyncModel"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"isDataSyncModel"),"(",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L6"}),"packages/graphback-datasync/src/util.ts:6"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isdatasyncservice"},"isDataSyncService"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"isDataSyncService"),"(",Object(c.b)("inlineCode",{parentName:"p"},"service"),": GraphbackCRUDService): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L18"}),"packages/graphback-datasync/src/util.ts:18"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"service")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCRUDService")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isdatasynctype"},"isDataSyncType"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"isDataSyncType"),"(",Object(c.b)("inlineCode",{parentName:"p"},"graphqlType"),": GraphQLObjectType): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L10"}),"packages/graphback-datasync/src/util.ts:10"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"graphqlType")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("h2",{id:"object-literals-1"},"Object literals"),Object(c.b)("h3",{id:"const-clientsidewins"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," ClientSideWins"),Object(c.b)("h3",{id:"-clientsidewins-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"ClientSideWins"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L136"}),"packages/graphback-datasync/src/util.ts:136"))),Object(c.b)("p",null,"The ClientSideWins conflict resolution strategy"),Object(c.b)("h3",{id:"resolvedelete"},"resolveDelete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L148"}),"packages/graphback-datasync/src/util.ts:148"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h3",{id:"resolveupdate"},"resolveUpdate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L137"}),"packages/graphback-datasync/src/util.ts:137"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-datasyncfieldnames"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," DataSyncFieldNames"),Object(c.b)("h3",{id:"-datasyncfieldnames-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"DataSyncFieldNames"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L80"}),"packages/graphback-datasync/src/util.ts:80"))),Object(c.b)("h3",{id:"deleted"},"deleted"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"deleted"),": ",Object(c.b)("em",{parentName:"p"},"string"),' = "_deleted"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L83"}),"packages/graphback-datasync/src/util.ts:83"))),Object(c.b)("h3",{id:"lastupdatedat"},"lastUpdatedAt"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"lastUpdatedAt"),": ",Object(c.b)("em",{parentName:"p"},"string"),' = "_lastUpdatedAt"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L82"}),"packages/graphback-datasync/src/util.ts:82"))),Object(c.b)("h3",{id:"ttl"},"ttl"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ttl"),": ",Object(c.b)("em",{parentName:"p"},"string"),' = "_ttl"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L84"}),"packages/graphback-datasync/src/util.ts:84"))),Object(c.b)("h3",{id:"version"},"version"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"version"),": ",Object(c.b)("em",{parentName:"p"},"string"),' = "_version"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L81"}),"packages/graphback-datasync/src/util.ts:81"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-serversidewins"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," ServerSideWins"),Object(c.b)("h3",{id:"-serversidewins-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"ServerSideWins"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L115"}),"packages/graphback-datasync/src/util.ts:115"))),Object(c.b)("p",null,"The ServerSideWins conflict resolution strategy"),Object(c.b)("h3",{id:"resolvedelete-1"},"resolveDelete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L127"}),"packages/graphback-datasync/src/util.ts:127"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h3",{id:"resolveupdate-1"},"resolveUpdate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L116"}),"packages/graphback-datasync/src/util.ts:116"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-throwonconflict"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," ThrowOnConflict"),Object(c.b)("h3",{id:"-throwonconflict-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"ThrowOnConflict"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L161"}),"packages/graphback-datasync/src/util.ts:161"))),Object(c.b)("h3",{id:"resolvedelete-2"},"resolveDelete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L165"}),"packages/graphback-datasync/src/util.ts:165"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h3",{id:"resolveupdate-2"},"resolveUpdate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-datasync/src/util.ts#L162"}),"packages/graphback-datasync/src/util.ts:162"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")))}p.isMDXComponent=!0}}]);