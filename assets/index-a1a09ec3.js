function VP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fE={exports:{}},dh={},pE={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),jP=Symbol.for("react.portal"),UP=Symbol.for("react.fragment"),zP=Symbol.for("react.strict_mode"),BP=Symbol.for("react.profiler"),$P=Symbol.for("react.provider"),HP=Symbol.for("react.context"),WP=Symbol.for("react.forward_ref"),qP=Symbol.for("react.suspense"),GP=Symbol.for("react.memo"),KP=Symbol.for("react.lazy"),T_=Symbol.iterator;function QP(t){return t===null||typeof t!="object"?null:(t=T_&&t[T_]||t["@@iterator"],typeof t=="function"?t:null)}var mE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gE=Object.assign,yE={};function uo(t,e,n){this.props=t,this.context=e,this.refs=yE,this.updater=n||mE}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vE(){}vE.prototype=uo.prototype;function qm(t,e,n){this.props=t,this.context=e,this.refs=yE,this.updater=n||mE}var Gm=qm.prototype=new vE;Gm.constructor=qm;gE(Gm,uo.prototype);Gm.isPureReactComponent=!0;var C_=Array.isArray,_E=Object.prototype.hasOwnProperty,Km={current:null},wE={key:!0,ref:!0,__self:!0,__source:!0};function EE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_E.call(e,r)&&!wE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vl,type:t,key:s,ref:o,props:i,_owner:Km.current}}function YP(t,e){return{$$typeof:vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qm(t){return typeof t=="object"&&t!==null&&t.$$typeof===vl}function XP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var S_=/\/+/g;function Vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XP(""+t.key):e.toString(36)}function Vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vl:case jP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vd(o,0):r,C_(i)?(n="",t!=null&&(n=t.replace(S_,"$&/")+"/"),Vu(i,e,n,"",function(c){return c})):i!=null&&(Qm(i)&&(i=YP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(S_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",C_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Vd(s,a);o+=Vu(s,e,n,u,i)}else if(u=QP(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Vd(s,a++),o+=Vu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function iu(t,e,n){if(t==null)return t;var r=[],i=0;return Vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},ju={transition:null},ZP={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:ju,ReactCurrentOwner:Km};oe.Children={map:iu,forEach:function(t,e,n){iu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return iu(t,function(){e++}),e},toArray:function(t){return iu(t,function(e){return e})||[]},only:function(t){if(!Qm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=uo;oe.Fragment=UP;oe.Profiler=BP;oe.PureComponent=qm;oe.StrictMode=zP;oe.Suspense=qP;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZP;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Km.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)_E.call(e,u)&&!wE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vl,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:HP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$P,_context:t},t.Consumer=t};oe.createElement=EE;oe.createFactory=function(t){var e=EE.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:WP,render:t}};oe.isValidElement=Qm;oe.lazy=function(t){return{$$typeof:KP,_payload:{_status:-1,_result:t},_init:JP}};oe.memo=function(t,e){return{$$typeof:GP,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=ju.transition;ju.transition={};try{t()}finally{ju.transition=e}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(t,e){return Mt.current.useCallback(t,e)};oe.useContext=function(t){return Mt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Mt.current.useEffect(t,e)};oe.useId=function(){return Mt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Mt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};oe.useRef=function(t){return Mt.current.useRef(t)};oe.useState=function(t){return Mt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Mt.current.useTransition()};oe.version="18.2.0";pE.exports=oe;var M=pE.exports;const nn=hh(M),ek=VP({__proto__:null,default:nn},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tk=M,nk=Symbol.for("react.element"),rk=Symbol.for("react.fragment"),ik=Object.prototype.hasOwnProperty,sk=tk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ok={key:!0,ref:!0,__self:!0,__source:!0};function TE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ik.call(e,r)&&!ok.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nk,type:t,key:s,ref:o,props:i,_owner:sk.current}}dh.Fragment=rk;dh.jsx=TE;dh.jsxs=TE;fE.exports=dh;var E=fE.exports,Bf={},CE={exports:{}},Xt={},SE={exports:{}},IE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var be=Z-1>>>1,ve=$[be];if(0<i(ve,Q))$[be]=Q,$[Z]=ve,Z=be;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var be=0,ve=$.length,Be=ve>>>1;be<Be;){var Hn=2*(be+1)-1,Wn=$[Hn],qn=Hn+1,xn=$[qn];if(0>i(Wn,Z))qn<ve&&0>i(xn,Wn)?($[be]=xn,$[qn]=Z,be=qn):($[be]=Wn,$[Hn]=Z,be=Hn);else if(qn<ve&&0>i(xn,Z))$[be]=xn,$[qn]=Z,be=qn;else break e}}return Q}function i($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,y=!1,v=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O($){if(C=!1,x($),!v)if(n(u)!==null)v=!0,fn(V);else{var Q=n(c);Q!==null&&rt(O,Q.startTime-$)}}function V($,Q){v=!1,C&&(C=!1,T(_),_=-1),y=!0;var Z=m;try{for(x(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||$&&!k());){var be=f.callback;if(typeof be=="function"){f.callback=null,m=f.priorityLevel;var ve=be(f.expirationTime<=Q);Q=t.unstable_now(),typeof ve=="function"?f.callback=ve:f===n(u)&&r(u),x(Q)}else r(u);f=n(u)}if(f!==null)var Be=!0;else{var Hn=n(c);Hn!==null&&rt(O,Hn.startTime-Q),Be=!1}return Be}finally{f=null,m=Z,y=!1}}var F=!1,S=null,_=-1,I=5,A=-1;function k(){return!(t.unstable_now()-A<I)}function N(){if(S!==null){var $=t.unstable_now();A=$;var Q=!0;try{Q=S(!0,$)}finally{Q?P():(F=!1,S=null)}}else F=!1}var P;if(typeof w=="function")P=function(){w(N)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,lt=Re.port2;Re.port1.onmessage=N,P=function(){lt.postMessage(null)}}else P=function(){R(N,0)};function fn($){S=$,F||(F=!0,P())}function rt($,Q){_=R(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,fn(V))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Z=m;m=Q;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Q()}finally{m=Z}},t.unstable_scheduleCallback=function($,Q,Z){var be=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?be+Z:be):Z=be,$){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,$={id:h++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:ve,sortIndex:-1},Z>be?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(C?(T(_),_=-1):C=!0,rt(O,Z-be))):($.sortIndex=ve,e(u,$),v||y||(v=!0,fn(V))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var Q=m;return function(){var Z=m;m=Q;try{return $.apply(this,arguments)}finally{m=Z}}}})(IE);SE.exports=IE;var ak=SE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE=M,Yt=ak;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var AE=new Set,Da={};function Yi(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Da[t]=e,t=0;t<e.length;t++)AE.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,lk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I_={},x_={};function uk(t){return $f.call(x_,t)?!0:$f.call(I_,t)?!1:lk.test(t)?x_[t]=!0:(I_[t]=!0,!1)}function ck(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hk(t,e,n,r){if(e===null||typeof e>"u"||ck(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ym=/[\-:]([a-z])/g;function Xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ym,Xm);mt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ym,Xm);mt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ym,Xm);mt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jm(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hk(e,n,i,r)&&(n=null),r||i===null?uk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=xE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,su=Symbol.for("react.element"),ds=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Zm=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),PE=Symbol.for("react.provider"),kE=Symbol.for("react.context"),eg=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),qf=Symbol.for("react.suspense_list"),tg=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),RE=Symbol.for("react.offscreen"),A_=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=A_&&t[A_]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,jd;function ta(t){if(jd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jd=e&&e[1]||""}return`
`+jd+t}var Ud=!1;function zd(t,e){if(!t||Ud)return"";Ud=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ud=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function dk(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=zd(t.type,!1),t;case 11:return t=zd(t.type.render,!1),t;case 1:return t=zd(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case ds:return"Portal";case Hf:return"Profiler";case Zm:return"StrictMode";case Wf:return"Suspense";case qf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kE:return(t.displayName||"Context")+".Consumer";case PE:return(t._context.displayName||"Context")+".Provider";case eg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tg:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function fk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Zm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pk(t){var e=bE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ou(t){t._valueTracker||(t._valueTracker=pk(t))}function NE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kf(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function P_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function OE(t,e){e=e.checked,e!=null&&Jm(t,"checked",e,!1)}function Qf(t,e){OE(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yf(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function k_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yf(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(na(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function DE(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function b_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ME(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ME(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var au,LE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(au=au||document.createElement("div"),au.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=au.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mk=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){mk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function FE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function VE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=FE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gk=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(t,e){if(e){if(gk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function ep(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=null;function ng(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var np=null,ks=null,Rs=null;function N_(t){if(t=El(t)){if(typeof np!="function")throw Error(U(280));var e=t.stateNode;e&&(e=yh(e),np(t.stateNode,t.type,e))}}function jE(t){ks?Rs?Rs.push(t):Rs=[t]:ks=t}function UE(){if(ks){var t=ks,e=Rs;if(Rs=ks=null,N_(t),e)for(t=0;t<e.length;t++)N_(e[t])}}function zE(t,e){return t(e)}function BE(){}var Bd=!1;function $E(t,e,n){if(Bd)return t(e,n);Bd=!0;try{return zE(t,e,n)}finally{Bd=!1,(ks!==null||Rs!==null)&&(BE(),UE())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var r=yh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var rp=!1;if(ir)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){rp=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{rp=!1}function yk(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var pa=!1,ac=null,lc=!1,ip=null,vk={onError:function(t){pa=!0,ac=t}};function _k(t,e,n,r,i,s,o,a,u){pa=!1,ac=null,yk.apply(vk,arguments)}function wk(t,e,n,r,i,s,o,a,u){if(_k.apply(this,arguments),pa){if(pa){var c=ac;pa=!1,ac=null}else throw Error(U(198));lc||(lc=!0,ip=c)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function HE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O_(t){if(Xi(t)!==t)throw Error(U(188))}function Ek(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return O_(i),t;if(s===r)return O_(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function WE(t){return t=Ek(t),t!==null?qE(t):null}function qE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qE(t);if(e!==null)return e;t=t.sibling}return null}var GE=Yt.unstable_scheduleCallback,D_=Yt.unstable_cancelCallback,Tk=Yt.unstable_shouldYield,Ck=Yt.unstable_requestPaint,$e=Yt.unstable_now,Sk=Yt.unstable_getCurrentPriorityLevel,rg=Yt.unstable_ImmediatePriority,KE=Yt.unstable_UserBlockingPriority,uc=Yt.unstable_NormalPriority,Ik=Yt.unstable_LowPriority,QE=Yt.unstable_IdlePriority,fh=null,Dn=null;function xk(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(fh,t,void 0,(t.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:kk,Ak=Math.log,Pk=Math.LN2;function kk(t){return t>>>=0,t===0?32:31-(Ak(t)/Pk|0)|0}var lu=64,uu=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ra(a):(s&=o,s!==0&&(r=ra(s)))}else o=n&~i,o!==0?r=ra(o):s!==0&&(r=ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tn(e),i=1<<n,r|=t[n],e&=~i;return r}function Rk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Rk(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function sp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function YE(){var t=lu;return lu<<=1,!(lu&4194240)&&(lu=64),t}function $d(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tn(e),t[e]=n}function Nk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ig(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function XE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var JE,sg,ZE,eT,tT,op=!1,cu=[],Fr=null,Vr=null,jr=null,Fa=new Map,Va=new Map,Pr=[],Ok="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function M_(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function Bo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&sg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Dk(t,e,n,r,i){switch(e){case"focusin":return Fr=Bo(Fr,t,e,n,r,i),!0;case"dragenter":return Vr=Bo(Vr,t,e,n,r,i),!0;case"mouseover":return jr=Bo(jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,Bo(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Va.set(s,Bo(Va.get(s)||null,t,e,n,r,i)),!0}return!1}function nT(t){var e=wi(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=HE(n),e!==null){t.blockedOn=e,tT(t.priority,function(){ZE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ap(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tp=r,n.target.dispatchEvent(r),tp=null}else return e=El(n),e!==null&&sg(e),t.blockedOn=n,!1;e.shift()}return!0}function L_(t,e,n){Uu(t)&&n.delete(e)}function Mk(){op=!1,Fr!==null&&Uu(Fr)&&(Fr=null),Vr!==null&&Uu(Vr)&&(Vr=null),jr!==null&&Uu(jr)&&(jr=null),Fa.forEach(L_),Va.forEach(L_)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,op||(op=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,Mk)))}function ja(t){function e(i){return $o(i,t)}if(0<cu.length){$o(cu[0],t);for(var n=1;n<cu.length;n++){var r=cu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&$o(Fr,t),Vr!==null&&$o(Vr,t),jr!==null&&$o(jr,t),Fa.forEach(e),Va.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)nT(n),n.blockedOn===null&&Pr.shift()}var bs=pr.ReactCurrentBatchConfig,hc=!0;function Lk(t,e,n,r){var i=ge,s=bs.transition;bs.transition=null;try{ge=1,og(t,e,n,r)}finally{ge=i,bs.transition=s}}function Fk(t,e,n,r){var i=ge,s=bs.transition;bs.transition=null;try{ge=4,og(t,e,n,r)}finally{ge=i,bs.transition=s}}function og(t,e,n,r){if(hc){var i=ap(t,e,n,r);if(i===null)Zd(t,e,r,dc,n),M_(t,r);else if(Dk(i,t,e,n,r))r.stopPropagation();else if(M_(t,r),e&4&&-1<Ok.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&JE(s),s=ap(t,e,n,r),s===null&&Zd(t,e,r,dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zd(t,e,r,null,n)}}var dc=null;function ap(t,e,n,r){if(dc=null,t=ng(r),t=wi(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=HE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function rT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sk()){case rg:return 1;case KE:return 4;case uc:case Ik:return 16;case QE:return 536870912;default:return 16}default:return 16}}var Rr=null,ag=null,zu=null;function iT(){if(zu)return zu;var t,e=ag,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zu=i.slice(t,1<r?1-r:void 0)}function Bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hu(){return!0}function F_(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hu:F_,this.isPropagationStopped=F_,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hu)},persist:function(){},isPersistent:hu}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lg=Jt(co),wl=Me({},co,{view:0,detail:0}),Vk=Jt(wl),Hd,Wd,Ho,ph=Me({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ug,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(Hd=t.screenX-Ho.screenX,Wd=t.screenY-Ho.screenY):Wd=Hd=0,Ho=t),Hd)},movementY:function(t){return"movementY"in t?t.movementY:Wd}}),V_=Jt(ph),jk=Me({},ph,{dataTransfer:0}),Uk=Jt(jk),zk=Me({},wl,{relatedTarget:0}),qd=Jt(zk),Bk=Me({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),$k=Jt(Bk),Hk=Me({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wk=Jt(Hk),qk=Me({},co,{data:0}),j_=Jt(qk),Gk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qk[t])?!!e[t]:!1}function ug(){return Yk}var Xk=Me({},wl,{key:function(t){if(t.key){var e=Gk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ug,charCode:function(t){return t.type==="keypress"?Bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jk=Jt(Xk),Zk=Me({},ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U_=Jt(Zk),eR=Me({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ug}),tR=Jt(eR),nR=Me({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),rR=Jt(nR),iR=Me({},ph,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sR=Jt(iR),oR=[9,13,27,32],cg=ir&&"CompositionEvent"in window,ma=null;ir&&"documentMode"in document&&(ma=document.documentMode);var aR=ir&&"TextEvent"in window&&!ma,sT=ir&&(!cg||ma&&8<ma&&11>=ma),z_=String.fromCharCode(32),B_=!1;function oT(t,e){switch(t){case"keyup":return oR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function lR(t,e){switch(t){case"compositionend":return aT(e);case"keypress":return e.which!==32?null:(B_=!0,z_);case"textInput":return t=e.data,t===z_&&B_?null:t;default:return null}}function uR(t,e){if(ps)return t==="compositionend"||!cg&&oT(t,e)?(t=iT(),zu=ag=Rr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sT&&e.locale!=="ko"?null:e.data;default:return null}}var cR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cR[t.type]:e==="textarea"}function lT(t,e,n,r){jE(r),e=fc(e,"onChange"),0<e.length&&(n=new lg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ga=null,Ua=null;function hR(t){_T(t,0)}function mh(t){var e=ys(t);if(NE(e))return t}function dR(t,e){if(t==="change")return e}var uT=!1;if(ir){var Gd;if(ir){var Kd="oninput"in document;if(!Kd){var H_=document.createElement("div");H_.setAttribute("oninput","return;"),Kd=typeof H_.oninput=="function"}Gd=Kd}else Gd=!1;uT=Gd&&(!document.documentMode||9<document.documentMode)}function W_(){ga&&(ga.detachEvent("onpropertychange",cT),Ua=ga=null)}function cT(t){if(t.propertyName==="value"&&mh(Ua)){var e=[];lT(e,Ua,t,ng(t)),$E(hR,e)}}function fR(t,e,n){t==="focusin"?(W_(),ga=e,Ua=n,ga.attachEvent("onpropertychange",cT)):t==="focusout"&&W_()}function pR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mh(Ua)}function mR(t,e){if(t==="click")return mh(e)}function gR(t,e){if(t==="input"||t==="change")return mh(e)}function yR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:yR;function za(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$f.call(e,i)||!In(t[i],e[i]))return!1}return!0}function q_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function G_(t,e){var n=q_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=q_(n)}}function hT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dT(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vR(t){var e=dT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hT(n.ownerDocument.documentElement,n)){if(r!==null&&hg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=G_(n,s);var o=G_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _R=ir&&"documentMode"in document&&11>=document.documentMode,ms=null,lp=null,ya=null,up=!1;function K_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;up||ms==null||ms!==oc(r)||(r=ms,"selectionStart"in r&&hg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ya&&za(ya,r)||(ya=r,r=fc(lp,"onSelect"),0<r.length&&(e=new lg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ms)))}function du(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},Qd={},fT={};ir&&(fT=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function gh(t){if(Qd[t])return Qd[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fT)return Qd[t]=e[n];return t}var pT=gh("animationend"),mT=gh("animationiteration"),gT=gh("animationstart"),yT=gh("transitionend"),vT=new Map,Q_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(t,e){vT.set(t,e),Yi(e,[t])}for(var Yd=0;Yd<Q_.length;Yd++){var Xd=Q_[Yd],wR=Xd.toLowerCase(),ER=Xd[0].toUpperCase()+Xd.slice(1);ai(wR,"on"+ER)}ai(pT,"onAnimationEnd");ai(mT,"onAnimationIteration");ai(gT,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(yT,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TR=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Y_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wk(r,e,void 0,t),t.currentTarget=null}function _T(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Y_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Y_(i,a,c),s=u}}}if(lc)throw t=ip,lc=!1,ip=null,t}function Se(t,e){var n=e[pp];n===void 0&&(n=e[pp]=new Set);var r=t+"__bubble";n.has(r)||(wT(e,t,2,!1),n.add(r))}function Jd(t,e,n){var r=0;e&&(r|=4),wT(n,t,r,e)}var fu="_reactListening"+Math.random().toString(36).slice(2);function Ba(t){if(!t[fu]){t[fu]=!0,AE.forEach(function(n){n!=="selectionchange"&&(TR.has(n)||Jd(n,!1,t),Jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fu]||(e[fu]=!0,Jd("selectionchange",!1,e))}}function wT(t,e,n,r){switch(rT(e)){case 1:var i=Lk;break;case 4:i=Fk;break;default:i=og}n=i.bind(null,e,n,t),i=void 0,!rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$E(function(){var c=s,h=ng(n),f=[];e:{var m=vT.get(t);if(m!==void 0){var y=lg,v=t;switch(t){case"keypress":if(Bu(n)===0)break e;case"keydown":case"keyup":y=Jk;break;case"focusin":v="focus",y=qd;break;case"focusout":v="blur",y=qd;break;case"beforeblur":case"afterblur":y=qd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=V_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Uk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=tR;break;case pT:case mT:case gT:y=$k;break;case yT:y=rR;break;case"scroll":y=Vk;break;case"wheel":y=sR;break;case"copy":case"cut":case"paste":y=Wk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=U_}var C=(e&4)!==0,R=!C&&t==="scroll",T=C?m!==null?m+"Capture":null:m;C=[];for(var w=c,x;w!==null;){x=w;var O=x.stateNode;if(x.tag===5&&O!==null&&(x=O,T!==null&&(O=La(w,T),O!=null&&C.push($a(w,O,x)))),R)break;w=w.return}0<C.length&&(m=new y(m,v,null,n,h),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==tp&&(v=n.relatedTarget||n.fromElement)&&(wi(v)||v[sr]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?wi(v):null,v!==null&&(R=Xi(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(C=V_,O="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(C=U_,O="onPointerLeave",T="onPointerEnter",w="pointer"),R=y==null?m:ys(y),x=v==null?m:ys(v),m=new C(O,w+"leave",y,n,h),m.target=R,m.relatedTarget=x,O=null,wi(h)===c&&(C=new C(T,w+"enter",v,n,h),C.target=x,C.relatedTarget=R,O=C),R=O,y&&v)t:{for(C=y,T=v,w=0,x=C;x;x=os(x))w++;for(x=0,O=T;O;O=os(O))x++;for(;0<w-x;)C=os(C),w--;for(;0<x-w;)T=os(T),x--;for(;w--;){if(C===T||T!==null&&C===T.alternate)break t;C=os(C),T=os(T)}C=null}else C=null;y!==null&&X_(f,m,y,C,!1),v!==null&&R!==null&&X_(f,R,v,C,!0)}}e:{if(m=c?ys(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var V=dR;else if($_(m))if(uT)V=gR;else{V=pR;var F=fR}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=mR);if(V&&(V=V(t,c))){lT(f,V,n,h);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Yf(m,"number",m.value)}switch(F=c?ys(c):window,t){case"focusin":($_(F)||F.contentEditable==="true")&&(ms=F,lp=c,ya=null);break;case"focusout":ya=lp=ms=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,K_(f,n,h);break;case"selectionchange":if(_R)break;case"keydown":case"keyup":K_(f,n,h)}var S;if(cg)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ps?oT(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(sT&&n.locale!=="ko"&&(ps||_!=="onCompositionStart"?_==="onCompositionEnd"&&ps&&(S=iT()):(Rr=h,ag="value"in Rr?Rr.value:Rr.textContent,ps=!0)),F=fc(c,_),0<F.length&&(_=new j_(_,t,null,n,h),f.push({event:_,listeners:F}),S?_.data=S:(S=aT(n),S!==null&&(_.data=S)))),(S=aR?lR(t,n):uR(t,n))&&(c=fc(c,"onBeforeInput"),0<c.length&&(h=new j_("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}_T(f,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=La(t,n),s!=null&&r.unshift($a(t,s,i)),s=La(t,e),s!=null&&r.push($a(t,s,i))),t=t.return}return r}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function X_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=La(n,s),u!=null&&o.unshift($a(n,u,a))):i||(u=La(n,s),u!=null&&o.push($a(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CR=/\r\n?/g,SR=/\u0000|\uFFFD/g;function J_(t){return(typeof t=="string"?t:""+t).replace(CR,`
`).replace(SR,"")}function pu(t,e,n){if(e=J_(e),J_(t)!==e&&n)throw Error(U(425))}function pc(){}var cp=null,hp=null;function dp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fp=typeof setTimeout=="function"?setTimeout:void 0,IR=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,xR=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(t){return Z_.resolve(null).then(t).catch(AR)}:fp;function AR(t){setTimeout(function(){throw t})}function ef(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ja(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function e0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),kn="__reactFiber$"+ho,Ha="__reactProps$"+ho,sr="__reactContainer$"+ho,pp="__reactEvents$"+ho,PR="__reactListeners$"+ho,kR="__reactHandles$"+ho;function wi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=e0(t);t!==null;){if(n=t[kn])return n;t=e0(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[kn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function yh(t){return t[Ha]||null}var mp=[],vs=-1;function li(t){return{current:t}}function xe(t){0>vs||(t.current=mp[vs],mp[vs]=null,vs--)}function Te(t,e){vs++,mp[vs]=t.current,t.current=e}var Xr={},xt=li(Xr),jt=li(!1),Di=Xr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function mc(){xe(jt),xe(xt)}function t0(t,e,n){if(xt.current!==Xr)throw Error(U(168));Te(xt,e),Te(jt,n)}function ET(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,fk(t)||"Unknown",i));return Me({},n,r)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,Di=xt.current,Te(xt,t),Te(jt,jt.current),!0}function n0(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=ET(t,e,Di),r.__reactInternalMemoizedMergedChildContext=t,xe(jt),xe(xt),Te(xt,t)):xe(jt),Te(jt,n)}var Xn=null,vh=!1,tf=!1;function TT(t){Xn===null?Xn=[t]:Xn.push(t)}function RR(t){vh=!0,TT(t)}function ui(){if(!tf&&Xn!==null){tf=!0;var t=0,e=ge;try{var n=Xn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,vh=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),GE(rg,ui),i}finally{ge=e,tf=!1}}return null}var _s=[],ws=0,yc=null,vc=0,en=[],tn=0,Mi=null,Jn=1,Zn="";function mi(t,e){_s[ws++]=vc,_s[ws++]=yc,yc=t,vc=e}function CT(t,e,n){en[tn++]=Jn,en[tn++]=Zn,en[tn++]=Mi,Mi=t;var r=Jn;t=Zn;var i=32-Tn(r)-1;r&=~(1<<i),n+=1;var s=32-Tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jn=1<<32-Tn(e)+i|n<<i|r,Zn=s+t}else Jn=1<<s|n<<i|r,Zn=t}function dg(t){t.return!==null&&(mi(t,1),CT(t,1,0))}function fg(t){for(;t===yc;)yc=_s[--ws],_s[ws]=null,vc=_s[--ws],_s[ws]=null;for(;t===Mi;)Mi=en[--tn],en[tn]=null,Zn=en[--tn],en[tn]=null,Jn=en[--tn],en[tn]=null}var Kt=null,Gt=null,Pe=!1,vn=null;function ST(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function r0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Gt=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mi!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Gt=null,!0):!1;default:return!1}}function gp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yp(t){if(Pe){var e=Gt;if(e){var n=e;if(!r0(t,e)){if(gp(t))throw Error(U(418));e=Ur(n.nextSibling);var r=Kt;e&&r0(t,e)?ST(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Kt=t)}}else{if(gp(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,Kt=t}}}function i0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function mu(t){if(t!==Kt)return!1;if(!Pe)return i0(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dp(t.type,t.memoizedProps)),e&&(e=Gt)){if(gp(t))throw IT(),Error(U(418));for(;e;)ST(t,e),e=Ur(e.nextSibling)}if(i0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gt=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gt=null}}else Gt=Kt?Ur(t.stateNode.nextSibling):null;return!0}function IT(){for(var t=Gt;t;)t=Ur(t.nextSibling)}function $s(){Gt=Kt=null,Pe=!1}function pg(t){vn===null?vn=[t]:vn.push(t)}var bR=pr.ReactCurrentBatchConfig;function gn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _c=li(null),wc=null,Es=null,mg=null;function gg(){mg=Es=wc=null}function yg(t){var e=_c.current;xe(_c),t._currentValue=e}function vp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){wc=t,mg=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(mg!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(wc===null)throw Error(U(308));Es=t,wc.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Ei=null;function vg(t){Ei===null?Ei=[t]:Ei.push(t)}function xT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vg(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function _g(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function AT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,vg(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function $u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ig(t,n)}}function s0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;Ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,C=a;switch(m=e,y=n,C.tag){case 1:if(v=C.payload,typeof v=="function"){f=v.call(y,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=C.payload,m=typeof v=="function"?v.call(y,f,m):v,m==null)break e;f=Me({},f,m);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fi|=o,t.lanes=o,t.memoizedState=f}}function o0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var PT=new xE.Component().refs;function _p(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _h={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=$r(t),s=tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(Cn(e,t,i,r),$u(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=$r(t),s=tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(Cn(e,t,i,r),$u(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=$r(t),i=tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=zr(t,i,r),e!==null&&(Cn(e,t,r,n),$u(e,t,r))}};function a0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(i,s):!0}function kT(t,e,n){var r=!1,i=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=Ut(e)?Di:xt.current,r=e.contextTypes,s=(r=r!=null)?Bs(t,i):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_h,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function l0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_h.enqueueReplaceState(e,e.state,null)}function wp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=PT,_g(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=Ut(e)?Di:xt.current,i.context=Bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_p(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_h.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===PT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function gu(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function u0(t){var e=t._init;return e(t._payload)}function RT(t){function e(T,w){if(t){var x=T.deletions;x===null?(T.deletions=[w],T.flags|=16):x.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=Hr(T,w),T.index=0,T.sibling=null,T}function s(T,w,x){return T.index=x,t?(x=T.alternate,x!==null?(x=x.index,x<w?(T.flags|=2,w):x):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,x,O){return w===null||w.tag!==6?(w=uf(x,T.mode,O),w.return=T,w):(w=i(w,x),w.return=T,w)}function u(T,w,x,O){var V=x.type;return V===fs?h(T,w,x.props.children,O,x.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&u0(V)===w.type)?(O=i(w,x.props),O.ref=Wo(T,w,x),O.return=T,O):(O=Qu(x.type,x.key,x.props,null,T.mode,O),O.ref=Wo(T,w,x),O.return=T,O)}function c(T,w,x,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=cf(x,T.mode,O),w.return=T,w):(w=i(w,x.children||[]),w.return=T,w)}function h(T,w,x,O,V){return w===null||w.tag!==7?(w=ki(x,T.mode,O,V),w.return=T,w):(w=i(w,x),w.return=T,w)}function f(T,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=uf(""+w,T.mode,x),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case su:return x=Qu(w.type,w.key,w.props,null,T.mode,x),x.ref=Wo(T,null,w),x.return=T,x;case ds:return w=cf(w,T.mode,x),w.return=T,w;case Sr:var O=w._init;return f(T,O(w._payload),x)}if(na(w)||Uo(w))return w=ki(w,T.mode,x,null),w.return=T,w;gu(T,w)}return null}function m(T,w,x,O){var V=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return V!==null?null:a(T,w,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case su:return x.key===V?u(T,w,x,O):null;case ds:return x.key===V?c(T,w,x,O):null;case Sr:return V=x._init,m(T,w,V(x._payload),O)}if(na(x)||Uo(x))return V!==null?null:h(T,w,x,O,null);gu(T,x)}return null}function y(T,w,x,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(x)||null,a(w,T,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case su:return T=T.get(O.key===null?x:O.key)||null,u(w,T,O,V);case ds:return T=T.get(O.key===null?x:O.key)||null,c(w,T,O,V);case Sr:var F=O._init;return y(T,w,x,F(O._payload),V)}if(na(O)||Uo(O))return T=T.get(x)||null,h(w,T,O,V,null);gu(w,O)}return null}function v(T,w,x,O){for(var V=null,F=null,S=w,_=w=0,I=null;S!==null&&_<x.length;_++){S.index>_?(I=S,S=null):I=S.sibling;var A=m(T,S,x[_],O);if(A===null){S===null&&(S=I);break}t&&S&&A.alternate===null&&e(T,S),w=s(A,w,_),F===null?V=A:F.sibling=A,F=A,S=I}if(_===x.length)return n(T,S),Pe&&mi(T,_),V;if(S===null){for(;_<x.length;_++)S=f(T,x[_],O),S!==null&&(w=s(S,w,_),F===null?V=S:F.sibling=S,F=S);return Pe&&mi(T,_),V}for(S=r(T,S);_<x.length;_++)I=y(S,T,_,x[_],O),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?_:I.key),w=s(I,w,_),F===null?V=I:F.sibling=I,F=I);return t&&S.forEach(function(k){return e(T,k)}),Pe&&mi(T,_),V}function C(T,w,x,O){var V=Uo(x);if(typeof V!="function")throw Error(U(150));if(x=V.call(x),x==null)throw Error(U(151));for(var F=V=null,S=w,_=w=0,I=null,A=x.next();S!==null&&!A.done;_++,A=x.next()){S.index>_?(I=S,S=null):I=S.sibling;var k=m(T,S,A.value,O);if(k===null){S===null&&(S=I);break}t&&S&&k.alternate===null&&e(T,S),w=s(k,w,_),F===null?V=k:F.sibling=k,F=k,S=I}if(A.done)return n(T,S),Pe&&mi(T,_),V;if(S===null){for(;!A.done;_++,A=x.next())A=f(T,A.value,O),A!==null&&(w=s(A,w,_),F===null?V=A:F.sibling=A,F=A);return Pe&&mi(T,_),V}for(S=r(T,S);!A.done;_++,A=x.next())A=y(S,T,_,A.value,O),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?_:A.key),w=s(A,w,_),F===null?V=A:F.sibling=A,F=A);return t&&S.forEach(function(N){return e(T,N)}),Pe&&mi(T,_),V}function R(T,w,x,O){if(typeof x=="object"&&x!==null&&x.type===fs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case su:e:{for(var V=x.key,F=w;F!==null;){if(F.key===V){if(V=x.type,V===fs){if(F.tag===7){n(T,F.sibling),w=i(F,x.props.children),w.return=T,T=w;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&u0(V)===F.type){n(T,F.sibling),w=i(F,x.props),w.ref=Wo(T,F,x),w.return=T,T=w;break e}n(T,F);break}else e(T,F);F=F.sibling}x.type===fs?(w=ki(x.props.children,T.mode,O,x.key),w.return=T,T=w):(O=Qu(x.type,x.key,x.props,null,T.mode,O),O.ref=Wo(T,w,x),O.return=T,T=O)}return o(T);case ds:e:{for(F=x.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(T,w.sibling),w=i(w,x.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=cf(x,T.mode,O),w.return=T,T=w}return o(T);case Sr:return F=x._init,R(T,w,F(x._payload),O)}if(na(x))return v(T,w,x,O);if(Uo(x))return C(T,w,x,O);gu(T,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,x),w.return=T,T=w):(n(T,w),w=uf(x,T.mode,O),w.return=T,T=w),o(T)):n(T,w)}return R}var Hs=RT(!0),bT=RT(!1),Tl={},Mn=li(Tl),Wa=li(Tl),qa=li(Tl);function Ti(t){if(t===Tl)throw Error(U(174));return t}function wg(t,e){switch(Te(qa,e),Te(Wa,t),Te(Mn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jf(e,t)}xe(Mn),Te(Mn,e)}function Ws(){xe(Mn),xe(Wa),xe(qa)}function NT(t){Ti(qa.current);var e=Ti(Mn.current),n=Jf(e,t.type);e!==n&&(Te(Wa,t),Te(Mn,n))}function Eg(t){Wa.current===t&&(xe(Mn),xe(Wa))}var Ne=li(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nf=[];function Tg(){for(var t=0;t<nf.length;t++)nf[t]._workInProgressVersionPrimary=null;nf.length=0}var Hu=pr.ReactCurrentDispatcher,rf=pr.ReactCurrentBatchConfig,Li=0,De=null,Xe=null,ot=null,Cc=!1,va=!1,Ga=0,NR=0;function wt(){throw Error(U(321))}function Cg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Sg(t,e,n,r,i,s){if(Li=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=t===null||t.memoizedState===null?LR:FR,t=n(r,i),va){s=0;do{if(va=!1,Ga=0,25<=s)throw Error(U(301));s+=1,ot=Xe=null,e.updateQueue=null,Hu.current=VR,t=n(r,i)}while(va)}if(Hu.current=Sc,e=Xe!==null&&Xe.next!==null,Li=0,ot=Xe=De=null,Cc=!1,e)throw Error(U(300));return t}function Ig(){var t=Ga!==0;return Ga=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?De.memoizedState=ot=t:ot=ot.next=t,ot}function cn(){if(Xe===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=ot===null?De.memoizedState:ot.next;if(e!==null)ot=e,Xe=t;else{if(t===null)throw Error(U(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},ot===null?De.memoizedState=ot=t:ot=ot.next=t}return ot}function Ka(t,e){return typeof e=="function"?e(t):e}function sf(t){var e=cn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Li&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,De.lanes|=h,Fi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,In(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function of(t){var e=cn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function OT(){}function DT(t,e){var n=De,r=cn(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,xg(FT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,Qa(9,LT.bind(null,n,r,i,e),void 0,null),at===null)throw Error(U(349));Li&30||MT(n,e,i)}return i}function MT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LT(t,e,n,r){e.value=n,e.getSnapshot=r,VT(e)&&jT(t)}function FT(t,e,n){return n(function(){VT(e)&&jT(t)})}function VT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function jT(t){var e=or(t,1);e!==null&&Cn(e,t,1,-1)}function c0(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},e.queue=t,t=t.dispatch=MR.bind(null,De,t),[e.memoizedState,t]}function Qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UT(){return cn().memoizedState}function Wu(t,e,n,r){var i=Pn();De.flags|=t,i.memoizedState=Qa(1|e,n,void 0,r===void 0?null:r)}function wh(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&Cg(r,o.deps)){i.memoizedState=Qa(e,n,s,r);return}}De.flags|=t,i.memoizedState=Qa(1|e,n,s,r)}function h0(t,e){return Wu(8390656,8,t,e)}function xg(t,e){return wh(2048,8,t,e)}function zT(t,e){return wh(4,2,t,e)}function BT(t,e){return wh(4,4,t,e)}function $T(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function HT(t,e,n){return n=n!=null?n.concat([t]):null,wh(4,4,$T.bind(null,e,t),n)}function Ag(){}function WT(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qT(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GT(t,e,n){return Li&21?(In(n,e)||(n=YE(),De.lanes|=n,Fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function OR(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=rf.transition;rf.transition={};try{t(!1),e()}finally{ge=n,rf.transition=r}}function KT(){return cn().memoizedState}function DR(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},QT(t))YT(e,n);else if(n=xT(t,e,n,r),n!==null){var i=Ot();Cn(n,t,r,i),XT(n,e,r)}}function MR(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(QT(t))YT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,o)){var u=e.interleaved;u===null?(i.next=i,vg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=xT(t,e,i,r),n!==null&&(i=Ot(),Cn(n,t,r,i),XT(n,e,r))}}function QT(t){var e=t.alternate;return t===De||e!==null&&e===De}function YT(t,e){va=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function XT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ig(t,n)}}var Sc={readContext:un,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},LR={readContext:un,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:h0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,$T.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DR.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:c0,useDebugValue:Ag,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=c0(!1),e=t[0];return t=OR.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Pn();if(Pe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),at===null)throw Error(U(349));Li&30||MT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,h0(FT.bind(null,r,s,t),[t]),r.flags|=2048,Qa(9,LT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pn(),e=at.identifierPrefix;if(Pe){var n=Zn,r=Jn;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FR={readContext:un,useCallback:WT,useContext:un,useEffect:xg,useImperativeHandle:HT,useInsertionEffect:zT,useLayoutEffect:BT,useMemo:qT,useReducer:sf,useRef:UT,useState:function(){return sf(Ka)},useDebugValue:Ag,useDeferredValue:function(t){var e=cn();return GT(e,Xe.memoizedState,t)},useTransition:function(){var t=sf(Ka)[0],e=cn().memoizedState;return[t,e]},useMutableSource:OT,useSyncExternalStore:DT,useId:KT,unstable_isNewReconciler:!1},VR={readContext:un,useCallback:WT,useContext:un,useEffect:xg,useImperativeHandle:HT,useInsertionEffect:zT,useLayoutEffect:BT,useMemo:qT,useReducer:of,useRef:UT,useState:function(){return of(Ka)},useDebugValue:Ag,useDeferredValue:function(t){var e=cn();return Xe===null?e.memoizedState=t:GT(e,Xe.memoizedState,t)},useTransition:function(){var t=of(Ka)[0],e=cn().memoizedState;return[t,e]},useMutableSource:OT,useSyncExternalStore:DT,useId:KT,unstable_isNewReconciler:!1};function qs(t,e){try{var n="",r=e;do n+=dk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function af(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jR=typeof WeakMap=="function"?WeakMap:Map;function JT(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xc||(xc=!0,bp=r),Ep(t,e)},n}function ZT(t,e,n){n=tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ep(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ep(t,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function d0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZR.bind(null,t,e,n),e.then(t,t))}function f0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function p0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var UR=pr.ReactCurrentOwner,Vt=!1;function Rt(t,e,n,r){e.child=t===null?bT(e,null,n,r):Hs(e,t.child,n,r)}function m0(t,e,n,r,i){n=n.render;var s=e.ref;return Ns(e,i),r=Sg(t,e,n,r,s,i),n=Ig(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Pe&&n&&dg(e),e.flags|=1,Rt(t,e,r,i),e.child)}function g0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,eC(t,e,s,r,i)):(t=Qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=Hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function eC(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(za(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,ar(t,e,i)}return Tp(t,e,n,r,i)}function tC(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Cs,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Cs,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Cs,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Cs,Wt),Wt|=r;return Rt(t,e,i,n),e.child}function nC(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tp(t,e,n,r,i){var s=Ut(n)?Di:xt.current;return s=Bs(e,s),Ns(e,i),n=Sg(t,e,n,r,s,i),r=Ig(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Pe&&r&&dg(e),e.flags|=1,Rt(t,e,n,i),e.child)}function y0(t,e,n,r,i){if(Ut(n)){var s=!0;gc(e)}else s=!1;if(Ns(e,i),e.stateNode===null)qu(t,e),kT(e,n,r),wp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=Ut(n)?Di:xt.current,c=Bs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&l0(e,o,r,c),Ir=!1;var m=e.memoizedState;o.state=m,Ec(e,r,o,i),u=e.memoizedState,a!==r||m!==u||jt.current||Ir?(typeof h=="function"&&(_p(e,n,h,r),u=e.memoizedState),(a=Ir||a0(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,AT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:gn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=un(u):(u=Ut(n)?Di:xt.current,u=Bs(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&l0(e,o,r,u),Ir=!1,m=e.memoizedState,o.state=m,Ec(e,r,o,i);var v=e.memoizedState;a!==f||m!==v||jt.current||Ir?(typeof y=="function"&&(_p(e,n,y,r),v=e.memoizedState),(c=Ir||a0(e,n,c,r,m,v,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Cp(t,e,n,r,s,i)}function Cp(t,e,n,r,i,s){nC(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&n0(e,n,!1),ar(t,e,s);r=e.stateNode,UR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&n0(e,n,!0),e.child}function rC(t){var e=t.stateNode;e.pendingContext?t0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&t0(t,e.context,!1),wg(t,e.containerInfo)}function v0(t,e,n,r,i){return $s(),pg(i),e.flags|=256,Rt(t,e,n,r),e.child}var Sp={dehydrated:null,treeContext:null,retryLane:0};function Ip(t){return{baseLanes:t,cachePool:null,transitions:null}}function iC(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Ne,i&1),t===null)return yp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ch(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ip(n),e.memoizedState=Sp,t):Pg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Hr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Hr(a,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ip(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sp,r}return s=t.child,t=s.sibling,r=Hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pg(t,e){return e=Ch({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yu(t,e,n,r){return r!==null&&pg(r),Hs(e,t.child,null,n),t=Pg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=af(Error(U(422))),yu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ch({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Ip(o),e.memoizedState=Sp,s);if(!(e.mode&1))return yu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=af(s,r,void 0),yu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),Cn(r,t,i,-1))}return Dg(),r=af(Error(U(421))),yu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=e2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Gt=Ur(i.nextSibling),Kt=e,Pe=!0,vn=null,t!==null&&(en[tn++]=Jn,en[tn++]=Zn,en[tn++]=Mi,Jn=t.id,Zn=t.overflow,Mi=e),e=Pg(e,r.children),e.flags|=4096,e)}function _0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vp(t.return,e,n)}function lf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_0(t,n,e);else if(t.tag===19)_0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lf(e,!0,n,null,s);break;case"together":lf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BR(t,e,n){switch(e.tag){case 3:rC(e),$s();break;case 5:NT(e);break;case 1:Ut(e.type)&&gc(e);break;case 4:wg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(_c,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?iC(t,e,n):(Te(Ne,Ne.current&1),t=ar(t,e,n),t!==null?t.sibling:null);Te(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,tC(t,e,n)}return ar(t,e,n)}var oC,xp,aC,lC;oC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xp=function(){};aC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ti(Mn.current);var s=null;switch(n){case"input":i=Kf(t,i),r=Kf(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Xf(t,i),r=Xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pc)}Zf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Da.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lC=function(t,e,n,r){n!==r&&(e.flags|=4)};function qo(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $R(t,e,n){var r=e.pendingProps;switch(fg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Ut(e.type)&&mc(),Et(e),null;case 3:return r=e.stateNode,Ws(),xe(jt),xe(xt),Tg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Dp(vn),vn=null))),xp(t,e),Et(e),null;case 5:Eg(e);var i=Ti(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)aC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Et(e),null}if(t=Ti(Mn.current),mu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[Ha]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<ia.length;i++)Se(ia[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":P_(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":R_(r,s),Se("invalid",r)}Zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pu(r.textContent,a,t),i=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":ou(r),k_(r,s,!0);break;case"textarea":ou(r),b_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ME(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[Ha]=r,oC(t,e,!1,!1),e.stateNode=t;e:{switch(o=ep(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<ia.length;i++)Se(ia[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":P_(t,r),i=Kf(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Se("invalid",t);break;case"textarea":R_(t,r),i=Xf(t,r),Se("invalid",t);break;default:i=r}Zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?VE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&LE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ma(t,u):typeof u=="number"&&Ma(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Jm(t,s,u,o))}switch(n){case"input":ou(t),k_(t,r,!1);break;case"textarea":ou(t),b_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)lC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ti(qa.current),Ti(Mn.current),mu(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return Et(e),null;case 13:if(xe(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Gt!==null&&e.mode&1&&!(e.flags&128))IT(),$s(),e.flags|=98560,s=!1;else if(s=mu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[kn]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else vn!==null&&(Dp(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?tt===0&&(tt=3):Dg())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return Ws(),xp(t,e),t===null&&Ba(e.stateNode.containerInfo),Et(e),null;case 10:return yg(e.type._context),Et(e),null;case 17:return Ut(e.type)&&mc(),Et(e),null;case 19:if(xe(Ne),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qo(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>Gs&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return Et(e),null}else 2*$e()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,r=!0,qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Ne.current,Te(Ne,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Og(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function HR(t,e){switch(fg(e),e.tag){case 1:return Ut(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),xe(jt),xe(xt),Tg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eg(e),null;case 13:if(xe(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ne),null;case 4:return Ws(),null;case 10:return yg(e.type._context),null;case 22:case 23:return Og(),null;case 24:return null;default:return null}}var vu=!1,St=!1,WR=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function Ap(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var w0=!1;function qR(t,e){if(cp=hc,t=dT(),hg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hp={focusedElem:t,selectionRange:n},hc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var C=v.memoizedProps,R=v.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?C:gn(e.type,C),R);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Fe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return v=w0,w0=!1,v}function _a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ap(e,n,s)}i=i.next}while(i!==r)}}function Eh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uC(t){var e=t.alternate;e!==null&&(t.alternate=null,uC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[Ha],delete e[pp],delete e[PR],delete e[kR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cC(t){return t.tag===5||t.tag===3||t.tag===4}function E0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(r!==4&&(t=t.child,t!==null))for(kp(t,e,n),t=t.sibling;t!==null;)kp(t,e,n),t=t.sibling}function Rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rp(t,e,n),t=t.sibling;t!==null;)Rp(t,e,n),t=t.sibling}var ct=null,yn=!1;function Er(t,e,n){for(n=n.child;n!==null;)hC(t,e,n),n=n.sibling}function hC(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(fh,n)}catch{}switch(n.tag){case 5:St||Ts(n,e);case 6:var r=ct,i=yn;ct=null,Er(t,e,n),ct=r,yn=i,ct!==null&&(yn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(yn?(t=ct,n=n.stateNode,t.nodeType===8?ef(t.parentNode,n):t.nodeType===1&&ef(t,n),ja(t)):ef(ct,n.stateNode));break;case 4:r=ct,i=yn,ct=n.stateNode.containerInfo,yn=!0,Er(t,e,n),ct=r,yn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ap(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!St&&(Ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Er(t,e,n),St=r):Er(t,e,n);break;default:Er(t,e,n)}}function T0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WR),e.forEach(function(r){var i=t2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,yn=!1;break e;case 3:ct=a.stateNode.containerInfo,yn=!0;break e;case 4:ct=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(ct===null)throw Error(U(160));hC(s,o,i),ct=null,yn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Fe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dC(e,t),e=e.sibling}function dC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mn(e,t),An(t),r&4){try{_a(3,t,t.return),Eh(3,t)}catch(C){Fe(t,t.return,C)}try{_a(5,t,t.return)}catch(C){Fe(t,t.return,C)}}break;case 1:mn(e,t),An(t),r&512&&n!==null&&Ts(n,n.return);break;case 5:if(mn(e,t),An(t),r&512&&n!==null&&Ts(n,n.return),t.flags&32){var i=t.stateNode;try{Ma(i,"")}catch(C){Fe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&OE(i,s),ep(a,o);var c=ep(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?VE(i,f):h==="dangerouslySetInnerHTML"?LE(i,f):h==="children"?Ma(i,f):Jm(i,h,f,c)}switch(a){case"input":Qf(i,s);break;case"textarea":DE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ps(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ps(i,!!s.multiple,s.defaultValue,!0):Ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ha]=s}catch(C){Fe(t,t.return,C)}}break;case 6:if(mn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Fe(t,t.return,C)}}break;case 3:if(mn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(C){Fe(t,t.return,C)}break;case 4:mn(e,t),An(t);break;case 13:mn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bg=$e())),r&4&&T0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(St=(c=St)||h,mn(e,t),St=c):mn(e,t),An(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(m=q,y=m.child,m.tag){case 0:case 11:case 14:case 15:_a(4,m,m.return);break;case 1:Ts(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(C){Fe(r,n,C)}}break;case 5:Ts(m,m.return);break;case 22:if(m.memoizedState!==null){S0(f);continue}}y!==null?(y.return=m,q=y):S0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=FE("display",o))}catch(C){Fe(t,t.return,C)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){Fe(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mn(e,t),An(t),r&4&&T0(t);break;case 21:break;default:mn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cC(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ma(i,""),r.flags&=-33);var s=E0(t);Rp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=E0(t);kp(t,a,o);break;default:throw Error(U(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GR(t,e,n){q=t,fC(t)}function fC(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=vu;var c=St;if(vu=o,(St=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?I0(i):u!==null?(u.return=o,q=u):I0(i);for(;s!==null;)q=s,fC(s),s=s.sibling;q=i,vu=a,St=c}C0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):C0(t)}}function C0(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Eh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&o0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}o0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}St||e.flags&512&&Pp(e)}catch(m){Fe(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function S0(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function I0(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eh(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Fe(e,i,u)}}var s=e.return;try{Pp(e)}catch(u){Fe(e,s,u)}break;case 5:var o=e.return;try{Pp(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var KR=Math.ceil,Ic=pr.ReactCurrentDispatcher,kg=pr.ReactCurrentOwner,on=pr.ReactCurrentBatchConfig,he=0,at=null,Ge=null,ft=0,Wt=0,Cs=li(0),tt=0,Ya=null,Fi=0,Th=0,Rg=0,wa=null,Ft=null,bg=0,Gs=1/0,Yn=null,xc=!1,bp=null,Br=null,_u=!1,br=null,Ac=0,Ea=0,Np=null,Gu=-1,Ku=0;function Ot(){return he&6?$e():Gu!==-1?Gu:Gu=$e()}function $r(t){return t.mode&1?he&2&&ft!==0?ft&-ft:bR.transition!==null?(Ku===0&&(Ku=YE()),Ku):(t=ge,t!==0||(t=window.event,t=t===void 0?16:rT(t.type)),t):1}function Cn(t,e,n,r){if(50<Ea)throw Ea=0,Np=null,Error(U(185));_l(t,n,r),(!(he&2)||t!==at)&&(t===at&&(!(he&2)&&(Th|=n),tt===4&&kr(t,ft)),zt(t,r),n===1&&he===0&&!(e.mode&1)&&(Gs=$e()+500,vh&&ui()))}function zt(t,e){var n=t.callbackNode;bk(t,e);var r=cc(t,t===at?ft:0);if(r===0)n!==null&&D_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&D_(n),e===1)t.tag===0?RR(x0.bind(null,t)):TT(x0.bind(null,t)),xR(function(){!(he&6)&&ui()}),n=null;else{switch(XE(r)){case 1:n=rg;break;case 4:n=KE;break;case 16:n=uc;break;case 536870912:n=QE;break;default:n=uc}n=EC(n,pC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pC(t,e){if(Gu=-1,Ku=0,he&6)throw Error(U(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=cc(t,t===at?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Pc(t,r);else{e=r;var i=he;he|=2;var s=gC();(at!==t||ft!==e)&&(Yn=null,Gs=$e()+500,Pi(t,e));do try{XR();break}catch(a){mC(t,a)}while(1);gg(),Ic.current=s,he=i,Ge!==null?e=0:(at=null,ft=0,e=tt)}if(e!==0){if(e===2&&(i=sp(t),i!==0&&(r=i,e=Op(t,i))),e===1)throw n=Ya,Pi(t,0),kr(t,r),zt(t,$e()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!QR(i)&&(e=Pc(t,r),e===2&&(s=sp(t),s!==0&&(r=s,e=Op(t,s))),e===1))throw n=Ya,Pi(t,0),kr(t,r),zt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:gi(t,Ft,Yn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=bg+500-$e(),10<e)){if(cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fp(gi.bind(null,t,Ft,Yn),e);break}gi(t,Ft,Yn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KR(r/1960))-r,10<r){t.timeoutHandle=fp(gi.bind(null,t,Ft,Yn),r);break}gi(t,Ft,Yn);break;case 5:gi(t,Ft,Yn);break;default:throw Error(U(329))}}}return zt(t,$e()),t.callbackNode===n?pC.bind(null,t):null}function Op(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=Pc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Dp(e)),t}function Dp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function QR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~Rg,e&=~Th,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tn(e),r=1<<n;t[n]=-1,e&=~r}}function x0(t){if(he&6)throw Error(U(327));Os();var e=cc(t,0);if(!(e&1))return zt(t,$e()),null;var n=Pc(t,e);if(t.tag!==0&&n===2){var r=sp(t);r!==0&&(e=r,n=Op(t,r))}if(n===1)throw n=Ya,Pi(t,0),kr(t,e),zt(t,$e()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gi(t,Ft,Yn),zt(t,$e()),null}function Ng(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Gs=$e()+500,vh&&ui())}}function Vi(t){br!==null&&br.tag===0&&!(he&6)&&Os();var e=he;he|=1;var n=on.transition,r=ge;try{if(on.transition=null,ge=1,t)return t()}finally{ge=r,on.transition=n,he=e,!(he&6)&&ui()}}function Og(){Wt=Cs.current,xe(Cs)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IR(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(fg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mc();break;case 3:Ws(),xe(jt),xe(xt),Tg();break;case 5:Eg(r);break;case 4:Ws();break;case 13:xe(Ne);break;case 19:xe(Ne);break;case 10:yg(r.type._context);break;case 22:case 23:Og()}n=n.return}if(at=t,Ge=t=Hr(t.current,null),ft=Wt=e,tt=0,Ya=null,Rg=Th=Fi=0,Ft=wa=null,Ei!==null){for(e=0;e<Ei.length;e++)if(n=Ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ei=null}return t}function mC(t,e){do{var n=Ge;try{if(gg(),Hu.current=Sc,Cc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Li=0,ot=Xe=De=null,va=!1,Ga=0,kg.current=null,n===null||n.return===null){tt=1,Ya=e,Ge=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=ft,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=f0(o);if(y!==null){y.flags&=-257,p0(y,o,a,s,e),y.mode&1&&d0(s,c,e),e=y,u=c;var v=e.updateQueue;if(v===null){var C=new Set;C.add(u),e.updateQueue=C}else v.add(u);break e}else{if(!(e&1)){d0(s,c,e),Dg();break e}u=Error(U(426))}}else if(Pe&&a.mode&1){var R=f0(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),p0(R,o,a,s,e),pg(qs(u,a));break e}}s=u=qs(u,a),tt!==4&&(tt=2),wa===null?wa=[s]:wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=JT(s,u,e);s0(s,T);break e;case 1:a=u;var w=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Br===null||!Br.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=ZT(s,a,e);s0(s,O);break e}}s=s.return}while(s!==null)}vC(n)}catch(V){e=V,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function gC(){var t=Ic.current;return Ic.current=Sc,t===null?Sc:t}function Dg(){(tt===0||tt===3||tt===2)&&(tt=4),at===null||!(Fi&268435455)&&!(Th&268435455)||kr(at,ft)}function Pc(t,e){var n=he;he|=2;var r=gC();(at!==t||ft!==e)&&(Yn=null,Pi(t,e));do try{YR();break}catch(i){mC(t,i)}while(1);if(gg(),he=n,Ic.current=r,Ge!==null)throw Error(U(261));return at=null,ft=0,tt}function YR(){for(;Ge!==null;)yC(Ge)}function XR(){for(;Ge!==null&&!Tk();)yC(Ge)}function yC(t){var e=wC(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?vC(t):Ge=e,kg.current=null}function vC(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HR(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ge=null;return}}else if(n=$R(n,e,Wt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);tt===0&&(tt=5)}function gi(t,e,n){var r=ge,i=on.transition;try{on.transition=null,ge=1,JR(t,e,n,r)}finally{on.transition=i,ge=r}return null}function JR(t,e,n,r){do Os();while(br!==null);if(he&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nk(t,s),t===at&&(Ge=at=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_u||(_u=!0,EC(uc,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=ge;ge=1;var a=he;he|=4,kg.current=null,qR(t,n),dC(n,t),vR(hp),hc=!!cp,hp=cp=null,t.current=n,GR(n),Ck(),he=a,ge=o,on.transition=s}else t.current=n;if(_u&&(_u=!1,br=t,Ac=i),s=t.pendingLanes,s===0&&(Br=null),xk(n.stateNode),zt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xc)throw xc=!1,t=bp,bp=null,t;return Ac&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Np?Ea++:(Ea=0,Np=t):Ea=0,ui(),null}function Os(){if(br!==null){var t=XE(Ac),e=on.transition,n=ge;try{if(on.transition=null,ge=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,Ac=0,he&6)throw Error(U(331));var i=he;for(he|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:_a(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var m=h.sibling,y=h.return;if(uC(h),h===c){q=null;break}if(m!==null){m.return=y,q=m;break}q=y}}}var v=s.alternate;if(v!==null){var C=v.child;if(C!==null){v.child=null;do{var R=C.sibling;C.sibling=null,C=R}while(C!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,q=T;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,q=x;else e:for(o=w;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eh(9,a)}}catch(V){Fe(a,a.return,V)}if(a===o){q=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,q=O;break e}q=a.return}}if(he=i,ui(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(fh,t)}catch{}r=!0}return r}finally{ge=n,on.transition=e}}return!1}function A0(t,e,n){e=qs(n,e),e=JT(t,e,1),t=zr(t,e,1),e=Ot(),t!==null&&(_l(t,1,e),zt(t,e))}function Fe(t,e,n){if(t.tag===3)A0(t,t,n);else for(;e!==null;){if(e.tag===3){A0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){t=qs(n,t),t=ZT(e,t,1),e=zr(e,t,1),t=Ot(),e!==null&&(_l(e,1,t),zt(e,t));break}}e=e.return}}function ZR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(ft&n)===n&&(tt===4||tt===3&&(ft&130023424)===ft&&500>$e()-bg?Pi(t,0):Rg|=n),zt(t,e)}function _C(t,e){e===0&&(t.mode&1?(e=uu,uu<<=1,!(uu&130023424)&&(uu=4194304)):e=1);var n=Ot();t=or(t,e),t!==null&&(_l(t,e,n),zt(t,n))}function e2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_C(t,n)}function t2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),_C(t,n)}var wC;wC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,BR(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Pe&&e.flags&1048576&&CT(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qu(t,e),t=e.pendingProps;var i=Bs(e,xt.current);Ns(e,n),i=Sg(null,e,r,t,i,n);var s=Ig();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,gc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_g(e),i.updater=_h,e.stateNode=i,i._reactInternals=e,wp(e,r,t,n),e=Cp(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&dg(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=r2(r),t=gn(r,t),i){case 0:e=Tp(null,e,r,t,n);break e;case 1:e=y0(null,e,r,t,n);break e;case 11:e=m0(null,e,r,t,n);break e;case 14:e=g0(null,e,r,gn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),Tp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),y0(t,e,r,i,n);case 3:e:{if(rC(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,AT(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qs(Error(U(423)),e),e=v0(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(U(424)),e),e=v0(t,e,r,n,i);break e}else for(Gt=Ur(e.stateNode.containerInfo.firstChild),Kt=e,Pe=!0,vn=null,n=bT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===i){e=ar(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return NT(e),t===null&&yp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dp(r,i)?o=null:s!==null&&dp(r,s)&&(e.flags|=32),nC(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&yp(e),null;case 13:return iC(t,e,n);case 4:return wg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hs(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),m0(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(_c,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!jt.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=tr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),vp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ns(e,n),i=un(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=gn(r,e.pendingProps),i=gn(r.type,i),g0(t,e,r,i,n);case 15:return eC(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),qu(t,e),e.tag=1,Ut(r)?(t=!0,gc(e)):t=!1,Ns(e,n),kT(e,r,i),wp(e,r,i,n),Cp(null,e,r,!0,t,n);case 19:return sC(t,e,n);case 22:return tC(t,e,n)}throw Error(U(156,e.tag))};function EC(t,e){return GE(t,e)}function n2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new n2(t,e,n,r)}function Mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function r2(t){if(typeof t=="function")return Mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eg)return 11;if(t===tg)return 14}return 2}function Hr(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return ki(n.children,i,s,e);case Zm:o=8,i|=8;break;case Hf:return t=rn(12,n,e,i|2),t.elementType=Hf,t.lanes=s,t;case Wf:return t=rn(13,n,e,i),t.elementType=Wf,t.lanes=s,t;case qf:return t=rn(19,n,e,i),t.elementType=qf,t.lanes=s,t;case RE:return Ch(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case PE:o=10;break e;case kE:o=9;break e;case eg:o=11;break e;case tg:o=14;break e;case Sr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Ch(t,e,n,r){return t=rn(22,t,r,e),t.elementType=RE,t.lanes=n,t.stateNode={isHidden:!1},t}function uf(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function cf(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function i2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$d(0),this.expirationTimes=$d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$d(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lg(t,e,n,r,i,s,o,a,u){return t=new i2(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_g(s),t}function s2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function TC(t){if(!t)return Xr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ut(n))return ET(t,n,e)}return e}function CC(t,e,n,r,i,s,o,a,u){return t=Lg(n,r,!0,t,i,s,o,a,u),t.context=TC(null),n=t.current,r=Ot(),i=$r(n),s=tr(r,i),s.callback=e??null,zr(n,s,i),t.current.lanes=i,_l(t,i,r),zt(t,r),t}function Sh(t,e,n,r){var i=e.current,s=Ot(),o=$r(i);return n=TC(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(i,e,o),t!==null&&(Cn(t,i,o,s),$u(t,i,o)),o}function kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function P0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fg(t,e){P0(t,e),(t=t.alternate)&&P0(t,e)}function o2(){return null}var SC=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vg(t){this._internalRoot=t}Ih.prototype.render=Vg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Sh(t,e,null,null)};Ih.prototype.unmount=Vg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Sh(null,t,null,null)}),e[sr]=null}};function Ih(t){this._internalRoot=t}Ih.prototype.unstable_scheduleHydration=function(t){if(t){var e=eT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&nT(t)}};function jg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function k0(){}function a2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=kc(o);s.call(c)}}var o=CC(e,r,t,0,null,!1,!1,"",k0);return t._reactRootContainer=o,t[sr]=o.current,Ba(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=kc(u);a.call(c)}}var u=Lg(t,0,!1,null,null,!1,!1,"",k0);return t._reactRootContainer=u,t[sr]=u.current,Ba(t.nodeType===8?t.parentNode:t),Vi(function(){Sh(e,u,n,r)}),u}function Ah(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=kc(o);a.call(u)}}Sh(e,o,t,i)}else o=a2(n,e,t,i,r);return kc(o)}JE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(ig(e,n|1),zt(e,$e()),!(he&6)&&(Gs=$e()+500,ui()))}break;case 13:Vi(function(){var r=or(t,1);if(r!==null){var i=Ot();Cn(r,t,1,i)}}),Fg(t,1)}};sg=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=Ot();Cn(e,t,134217728,n)}Fg(t,134217728)}};ZE=function(t){if(t.tag===13){var e=$r(t),n=or(t,e);if(n!==null){var r=Ot();Cn(n,t,e,r)}Fg(t,e)}};eT=function(){return ge};tT=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};np=function(t,e,n){switch(e){case"input":if(Qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yh(r);if(!i)throw Error(U(90));NE(r),Qf(r,i)}}}break;case"textarea":DE(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};zE=Ng;BE=Vi;var l2={usingClientEntryPoint:!1,Events:[El,ys,yh,jE,UE,Ng]},Go={findFiberByHostInstance:wi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},u2={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=WE(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||o2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{fh=wu.inject(u2),Dn=wu}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l2;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jg(e))throw Error(U(200));return s2(t,e,null,n)};Xt.createRoot=function(t,e){if(!jg(t))throw Error(U(299));var n=!1,r="",i=SC;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lg(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,Ba(t.nodeType===8?t.parentNode:t),new Vg(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=WE(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Vi(t)};Xt.hydrate=function(t,e,n){if(!xh(e))throw Error(U(200));return Ah(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!jg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=SC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=CC(e,null,t,1,n??null,i,!1,s,o),t[sr]=e.current,Ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ih(e)};Xt.render=function(t,e,n){if(!xh(e))throw Error(U(200));return Ah(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!xh(t))throw Error(U(40));return t._reactRootContainer?(Vi(function(){Ah(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Xt.unstable_batchedUpdates=Ng;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Ah(t,e,n,!1,r)};Xt.version="18.2.0-next-9e3b772b8-20220608";function IC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IC)}catch(t){console.error(t)}}IC(),CE.exports=Xt;var xC=CE.exports;const sa=hh(xC);var R0=xC;Bf.createRoot=R0.createRoot,Bf.hydrateRoot=R0.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xa.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const b0="popstate";function c2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Mp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Rc(i)}return d2(e,n,null,t)}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ug(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h2(){return Math.random().toString(36).substr(2,8)}function N0(t,e){return{usr:t.state,key:t.key,idx:e}}function Mp(t,e,n,r){return n===void 0&&(n=null),Xa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fo(e):e,{state:n,key:e&&e.key||r||h2()})}function Rc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function d2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Nr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Xa({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Nr.Pop;let R=h(),T=R==null?null:R-c;c=R,u&&u({action:a,location:C.location,delta:T})}function m(R,T){a=Nr.Push;let w=Mp(C.location,R,T);n&&n(w,R),c=h()+1;let x=N0(w,c),O=C.createHref(w);try{o.pushState(x,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(O)}s&&u&&u({action:a,location:C.location,delta:1})}function y(R,T){a=Nr.Replace;let w=Mp(C.location,R,T);n&&n(w,R),c=h();let x=N0(w,c),O=C.createHref(w);o.replaceState(x,"",O),s&&u&&u({action:a,location:C.location,delta:0})}function v(R){let T=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof R=="string"?R:Rc(R);return Ke(T,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,T)}let C={get action(){return a},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(b0,f),u=R,()=>{i.removeEventListener(b0,f),u=null}},createHref(R){return e(i,R)},createURL:v,encodeLocation(R){let T=v(R);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:y,go(R){return o.go(R)}};return C}var O0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(O0||(O0={}));function f2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fo(e):e,i=zg(r.pathname||"/",n);if(i==null)return null;let s=AC(t);p2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=C2(s[a],x2(i));return o}function AC(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Wr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),AC(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:E2(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of PC(s.path))i(s,o,u)}),e}function PC(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=PC(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function p2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:T2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m2=/^:\w+$/,g2=3,y2=2,v2=1,_2=10,w2=-2,D0=t=>t==="*";function E2(t,e){let n=t.split("/"),r=n.length;return n.some(D0)&&(r+=w2),e&&(r+=y2),n.filter(i=>!D0(i)).reduce((i,s)=>i+(m2.test(s)?g2:s===""?v2:_2),r)}function T2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function C2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=S2({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;s.push({params:r,pathname:Wr([i,h.pathname]),pathnameBase:R2(Wr([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=Wr([i,h.pathnameBase]))}return s}function S2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=I2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{if(h==="*"){let m=a[f]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=A2(a[f]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:t}}function I2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ug(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function x2(t){try{return decodeURI(t)}catch(e){return Ug(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function A2(t,e){try{return decodeURIComponent(t)}catch(n){return Ug(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function P2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fo(t):t;return{pathname:n?n.startsWith("/")?n:k2(n,e):e,search:b2(r),hash:N2(i)}}function k2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function RC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fo(t):(i=Xa({},t),Ke(!i.pathname||!i.pathname.includes("?"),hf("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),hf("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),hf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=P2(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Wr=t=>t.join("/").replace(/\/\/+/g,"/"),R2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),b2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,N2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function O2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bC=["post","put","patch","delete"];new Set(bC);const D2=["get",...bC];new Set(D2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bc.apply(this,arguments)}const Bg=M.createContext(null),M2=M.createContext(null),po=M.createContext(null),Ph=M.createContext(null),Ji=M.createContext({outlet:null,matches:[],isDataRoute:!1}),NC=M.createContext(null);function L2(t,e){let{relative:n}=e===void 0?{}:e;Cl()||Ke(!1);let{basename:r,navigator:i}=M.useContext(po),{hash:s,pathname:o,search:a}=DC(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Wr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Cl(){return M.useContext(Ph)!=null}function kh(){return Cl()||Ke(!1),M.useContext(Ph).location}function OC(t){M.useContext(po).static||M.useLayoutEffect(t)}function F2(){let{isDataRoute:t}=M.useContext(Ji);return t?Y2():V2()}function V2(){Cl()||Ke(!1);let t=M.useContext(Bg),{basename:e,navigator:n}=M.useContext(po),{matches:r}=M.useContext(Ji),{pathname:i}=kh(),s=JSON.stringify(kC(r).map(u=>u.pathnameBase)),o=M.useRef(!1);return OC(()=>{o.current=!0}),M.useCallback(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){n.go(u);return}let h=RC(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Wr([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,s,i,t])}function DC(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=M.useContext(Ji),{pathname:i}=kh(),s=JSON.stringify(kC(r).map(o=>o.pathnameBase));return M.useMemo(()=>RC(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function j2(t,e){return U2(t,e)}function U2(t,e,n){Cl()||Ke(!1);let{navigator:r}=M.useContext(po),{matches:i}=M.useContext(Ji),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=kh(),c;if(e){var h;let C=typeof e=="string"?fo(e):e;a==="/"||(h=C.pathname)!=null&&h.startsWith(a)||Ke(!1),c=C}else c=u;let f=c.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",y=f2(t,{pathname:m}),v=W2(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},o,C.params),pathname:Wr([a,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Wr([a,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n);return e&&v?M.createElement(Ph.Provider,{value:{location:bc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Nr.Pop}},v):v}function z2(){let t=Q2(),e=O2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,s)}const B2=M.createElement(z2,null);class $2 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?M.createElement(Ji.Provider,{value:this.props.routeContext},M.createElement(NC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H2(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Bg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Ji.Provider,{value:e},r)}function W2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||Ke(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,c)=>{let h=u.route.id?o==null?void 0:o[u.route.id]:null,f=null;n&&(f=u.route.errorElement||B2);let m=e.concat(s.slice(0,c+1)),y=()=>{let v;return h?v=f:u.route.Component?v=M.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=a,M.createElement(H2,{match:u,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?M.createElement($2,{location:n.location,revalidation:n.revalidation,component:f,error:h,children:y(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):y()},null)}var MC=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(MC||{}),Nc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Nc||{});function q2(t){let e=M.useContext(Bg);return e||Ke(!1),e}function G2(t){let e=M.useContext(M2);return e||Ke(!1),e}function K2(t){let e=M.useContext(Ji);return e||Ke(!1),e}function LC(t){let e=K2(),n=e.matches[e.matches.length-1];return n.route.id||Ke(!1),n.route.id}function Q2(){var t;let e=M.useContext(NC),n=G2(Nc.UseRouteError),r=LC(Nc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Y2(){let{router:t}=q2(MC.UseNavigateStable),e=LC(Nc.UseNavigateStable),n=M.useRef(!1);return OC(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,bc({fromRouteId:e},s)))},[t,e])}function oa(t){Ke(!1)}function X2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nr.Pop,navigator:s,static:o=!1}=t;Cl()&&Ke(!1);let a=e.replace(/^\/*/,"/"),u=M.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=fo(r));let{pathname:c="/",search:h="",hash:f="",state:m=null,key:y="default"}=r,v=M.useMemo(()=>{let C=zg(c,a);return C==null?null:{location:{pathname:C,search:h,hash:f,state:m,key:y},navigationType:i}},[a,c,h,f,m,y,i]);return v==null?null:M.createElement(po.Provider,{value:u},M.createElement(Ph.Provider,{children:n,value:v}))}function J2(t){let{children:e,location:n}=t;return j2(Lp(e),n)}new Promise(()=>{});function Lp(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Lp(r.props.children,s));return}r.type!==oa&&Ke(!1),!r.props.index||!r.props.children||Ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fp(){return Fp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fp.apply(this,arguments)}function Z2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tb(t,e){return t.button===0&&(!e||e==="_self")&&!eb(t)}const nb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],rb="startTransition",M0=ek[rb];function ib(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=c2({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=M.useCallback(f=>{c&&M0?M0(()=>u(f)):u(f)},[u,c]);return M.useLayoutEffect(()=>o.listen(h),[o,h]),M.createElement(X2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const sb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ob=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ta=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h}=e,f=Z2(e,nb),{basename:m}=M.useContext(po),y,v=!1;if(typeof c=="string"&&ob.test(c)&&(y=c,sb))try{let w=new URL(window.location.href),x=c.startsWith("//")?new URL(w.protocol+c):new URL(c),O=zg(x.pathname,m);x.origin===w.origin&&O!=null?c=O+x.search+x.hash:v=!0}catch{}let C=L2(c,{relative:i}),R=ab(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i});function T(w){r&&r(w),w.defaultPrevented||R(w)}return M.createElement("a",Fp({},f,{href:y||C,onClick:v||s?r:T,ref:n,target:u}))});var L0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(L0||(L0={}));var F0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(F0||(F0={}));function ab(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=F2(),u=kh(),c=DC(t,{relative:o});return M.useCallback(h=>{if(tb(h,n)){h.preventDefault();let f=r!==void 0?r:Rc(u)===Rc(c);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[u,a,c,r,i,n,t,s,o])}class Vp{constructor(e,n,r,i=0){this.id=e,this.idPersonalizado=i,this.productos=n,this.productosPersonalizados=r}obtenerIdPersonalizado(){return this.idPersonalizado+=1,this.idPersonalizado}}class lb{constructor(e,n,r,i,s=!1,o="-1"){this.id=e,this.nombre=n,this.pedido=r,this.idMesa=i,this.confirmado=s,this.idPedido=o}}function ub(t){localStorage.setItem("Usuario",JSON.stringify(t))}function cb(t){const e=JSON.parse(localStorage.getItem("Usuario"))||{};e.nombre=t,localStorage.setItem("Usuario",JSON.stringify(e))}function FC(t){let e={};const n=t.pedido;return n!=null&&Object.keys(n).length!==0?e=new Vp(0,n.productos,n.productosPersonalizados):e=new Vp(0,[],[]),new lb(t.id,t.nombre,e,t.idMesa)}function hb(){const t=JSON.parse(localStorage.getItem("Usuario"));return t?t.idUsuario:null}function db(){const t=JSON.parse(localStorage.getItem("Usuario"));return t?t.nombre:null}function fb(t){localStorage.getItem("idPedido")!==t&&localStorage.setItem("idPedido",t)}function pb(){return localStorage.getItem("idPedido")||"-1"}function VC(){return JSON.parse(localStorage.getItem("Usuario"))}function mb(t){const e=JSON.parse(localStorage.getItem("Usuario"))||{};e.idMesa=t,localStorage.setItem("Usuario",JSON.stringify(e))}function gb(){const t=JSON.parse(localStorage.getItem("Usuario"));return t?t.idMesa:null}function yb(t){let e=VC();e.pedido=t,localStorage.setItem("Usuario",JSON.stringify(e))}function vb(){let t=null;const e=localStorage.getItem("Usuario");return e&&(t=FC(JSON.parse(e)),t!=null&&t!=="undefined")?t.pedido:null}const Oe={obtenerNombre:db,obtenerId:hb,setUsuario:ub,setNombre:cb,obtenerUsuario:VC,setIdMesa:mb,obtenerIdMesa:gb,setPedido:yb,obtenerPedido:vb,convertirJSONAUsuario:FC,setIdPedido:fb,obtenerIdPedido:pb},Zi=M.createContext();function V0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?V0(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Oc(t){"@babel/helpers - typeof";return Oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oc(t)}function _b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wb(t,e,n){return e&&j0(t.prototype,e),n&&j0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $g(t,e){return Tb(t)||Sb(t,e)||jC(t,e)||xb()}function Sl(t){return Eb(t)||Cb(t)||jC(t)||Ib()}function Eb(t){if(Array.isArray(t))return jp(t)}function Tb(t){if(Array.isArray(t))return t}function Cb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Sb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,a=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function jC(t,e){if(t){if(typeof t=="string")return jp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jp(t,e)}}function jp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ib(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U0=function(){},Hg={},UC={},zC=null,BC={mark:U0,measure:U0};try{typeof window<"u"&&(Hg=window),typeof document<"u"&&(UC=document),typeof MutationObserver<"u"&&(zC=MutationObserver),typeof performance<"u"&&(BC=performance)}catch{}var Ab=Hg.navigator||{},z0=Ab.userAgent,B0=z0===void 0?"":z0,Jr=Hg,Ae=UC,$0=zC,Eu=BC;Jr.document;var mr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",$C=~B0.indexOf("MSIE")||~B0.indexOf("Trident/"),Tu,Cu,Su,Iu,xu,lr="___FONT_AWESOME___",Up=16,HC="fa",WC="svg-inline--fa",ji="data-fa-i2svg",zp="data-fa-pseudo-element",Pb="data-fa-pseudo-element-pending",Wg="data-prefix",qg="data-icon",H0="fontawesome-i2svg",kb="async",Rb=["HTML","HEAD","STYLE","SCRIPT"],qC=function(){try{return!0}catch{return!1}}(),Ie="classic",Ve="sharp",Gg=[Ie,Ve];function Il(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ie]}})}var Ja=Il((Tu={},nt(Tu,Ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),nt(Tu,Ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Tu)),Za=Il((Cu={},nt(Cu,Ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(Cu,Ve,{solid:"fass",regular:"fasr",light:"fasl"}),Cu)),el=Il((Su={},nt(Su,Ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(Su,Ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Su)),bb=Il((Iu={},nt(Iu,Ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(Iu,Ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Iu)),Nb=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,GC="fa-layers-text",Ob=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Db=Il((xu={},nt(xu,Ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(xu,Ve,{900:"fass",400:"fasr",300:"fasl"}),xu)),KC=[1,2,3,4,5,6,7,8,9,10],Mb=KC.concat([11,12,13,14,15,16,17,18,19,20]),Lb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ci={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tl=new Set;Object.keys(Za[Ie]).map(tl.add.bind(tl));Object.keys(Za[Ve]).map(tl.add.bind(tl));var Fb=[].concat(Gg,Sl(tl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ci.GROUP,Ci.SWAP_OPACITY,Ci.PRIMARY,Ci.SECONDARY]).concat(KC.map(function(t){return"".concat(t,"x")})).concat(Mb.map(function(t){return"w-".concat(t)})),Ca=Jr.FontAwesomeConfig||{};function Vb(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var Ub=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ub.forEach(function(t){var e=$g(t,2),n=e[0],r=e[1],i=jb(Vb(n));i!=null&&(Ca[r]=i)})}var QC={styleDefault:"solid",familyDefault:"classic",cssPrefix:HC,replacementClass:WC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ca.familyPrefix&&(Ca.cssPrefix=Ca.familyPrefix);var Ks=W(W({},QC),Ca);Ks.autoReplaceSvg||(Ks.observeMutations=!1);var K={};Object.keys(QC).forEach(function(t){Object.defineProperty(K,t,{enumerable:!0,set:function(n){Ks[t]=n,Sa.forEach(function(r){return r(K)})},get:function(){return Ks[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){Ks.cssPrefix=e,Sa.forEach(function(n){return n(K)})},get:function(){return Ks.cssPrefix}});Jr.FontAwesomeConfig=K;var Sa=[];function zb(t){return Sa.push(t),function(){Sa.splice(Sa.indexOf(t),1)}}var Tr=Up,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bb(t){if(!(!t||!mr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var $b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nl(){for(var t=12,e="";t-- >0;)e+=$b[Math.random()*62|0];return e}function mo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kg(t){return t.classList?mo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function YC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(YC(t[n]),'" ')},"").trim()}function Rh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Qg(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function Wb(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function qb(t){var e=t.transform,n=t.width,r=n===void 0?Up:n,i=t.height,s=i===void 0?Up:i,o=t.startCentered,a=o===void 0?!1:o,u="";return a&&$C?u+="translate(".concat(e.x/Tr-r/2,"em, ").concat(e.y/Tr-s/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/Tr,"em), calc(-50% + ").concat(e.y/Tr,"em)) "):u+="translate(".concat(e.x/Tr,"em, ").concat(e.y/Tr,"em) "),u+="scale(".concat(e.size/Tr*(e.flipX?-1:1),", ").concat(e.size/Tr*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var Gb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function XC(){var t=HC,e=WC,n=K.cssPrefix,r=K.replacementClass,i=Gb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var W0=!1;function df(){K.autoAddCss&&!W0&&(Bb(XC()),W0=!0)}var Kb={mixout:function(){return{dom:{css:XC,insertCss:df}}},hooks:function(){return{beforeDOMElementCreation:function(){df()},beforeI2svg:function(){df()}}}},ur=Jr||{};ur[lr]||(ur[lr]={});ur[lr].styles||(ur[lr].styles={});ur[lr].hooks||(ur[lr].hooks={});ur[lr].shims||(ur[lr].shims=[]);var wn=ur[lr],JC=[],Qb=function t(){Ae.removeEventListener("DOMContentLoaded",t),Dc=1,JC.map(function(e){return e()})},Dc=!1;mr&&(Dc=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),Dc||Ae.addEventListener("DOMContentLoaded",Qb));function Yb(t){mr&&(Dc?setTimeout(t,0):JC.push(t))}function xl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?YC(t):"<".concat(e," ").concat(Hb(r),">").concat(s.map(xl).join(""),"</").concat(e,">")}function q0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xb=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ff=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Xb(n,i):n,u,c,h;for(r===void 0?(u=1,h=e[s[0]]):(u=0,h=r);u<o;u++)c=s[u],h=a(h,e[c],c,e);return h};function Jb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Bp(t){var e=Jb(t);return e.length===1?e[0].toString(16):null}function Zb(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function G0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function $p(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=G0(e);typeof wn.hooks.addPack=="function"&&!i?wn.hooks.addPack(t,G0(e)):wn.styles[t]=W(W({},wn.styles[t]||{}),s),t==="fas"&&$p("fa",e)}var Au,Pu,ku,Ss=wn.styles,eN=wn.shims,tN=(Au={},nt(Au,Ie,Object.values(el[Ie])),nt(Au,Ve,Object.values(el[Ve])),Au),Yg=null,ZC={},eS={},tS={},nS={},rS={},nN=(Pu={},nt(Pu,Ie,Object.keys(Ja[Ie])),nt(Pu,Ve,Object.keys(Ja[Ve])),Pu);function rN(t){return~Fb.indexOf(t)}function iN(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!rN(i)?i:null}var iS=function(){var e=function(s){return ff(Ss,function(o,a,u){return o[u]=ff(a,s,{}),o},{})};ZC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=o})}return i}),eS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=o})}return i}),rS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(u){i[u]=o}),i});var n="far"in Ss||K.autoFetchSvg,r=ff(eN,function(i,s){var o=s[0],a=s[1],u=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});tS=r.names,nS=r.unicodes,Yg=bh(K.styleDefault,{family:K.familyDefault})};zb(function(t){Yg=bh(t.styleDefault,{family:K.familyDefault})});iS();function Xg(t,e){return(ZC[t]||{})[e]}function sN(t,e){return(eS[t]||{})[e]}function Si(t,e){return(rS[t]||{})[e]}function sS(t){return tS[t]||{prefix:null,iconName:null}}function oN(t){var e=nS[t],n=Xg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zr(){return Yg}var Jg=function(){return{prefix:null,iconName:null,rest:[]}};function bh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ie:n,i=Ja[r][t],s=Za[r][t]||Za[r][i],o=t in wn.styles?t:null;return s||o||null}var K0=(ku={},nt(ku,Ie,Object.keys(el[Ie])),nt(ku,Ve,Object.keys(el[Ve])),ku);function Nh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},nt(e,Ie,"".concat(K.cssPrefix,"-").concat(Ie)),nt(e,Ve,"".concat(K.cssPrefix,"-").concat(Ve)),e),o=null,a=Ie;(t.includes(s[Ie])||t.some(function(c){return K0[Ie].includes(c)}))&&(a=Ie),(t.includes(s[Ve])||t.some(function(c){return K0[Ve].includes(c)}))&&(a=Ve);var u=t.reduce(function(c,h){var f=iN(K.cssPrefix,h);if(Ss[h]?(h=tN[a].includes(h)?bb[a][h]:h,o=h,c.prefix=h):nN[a].indexOf(h)>-1?(o=h,c.prefix=bh(h,{family:a})):f?c.iconName=f:h!==K.replacementClass&&h!==s[Ie]&&h!==s[Ve]&&c.rest.push(h),!i&&c.prefix&&c.iconName){var m=o==="fa"?sS(c.iconName):{},y=Si(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||y||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!Ss.far&&Ss.fas&&!K.autoFetchSvg&&(c.prefix="fas")}return c},Jg());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&a===Ve&&(Ss.fass||K.autoFetchSvg)&&(u.prefix="fass",u.iconName=Si(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Zr()||"fas"),u}var aN=function(){function t(){_b(this,t),this.definitions={}}return wb(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=W(W({},n.definitions[a]||{}),o[a]),$p(a,o[a]);var u=el[Ie][a];u&&$p(u,o[a]),iS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,c=o.icon,h=c[2];n[a]||(n[a]={}),h.length>0&&h.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][u]=c}),n}}]),t}(),Q0=[],Is={},Ds={},lN=Object.keys(Ds);function uN(t,e){var n=e.mixoutsTo;return Q0=t,Is={},Object.keys(Ds).forEach(function(r){lN.indexOf(r)===-1&&delete Ds[r]}),Q0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Oc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Is[o]||(Is[o]=[]),Is[o].push(s[o])})}r.provides&&r.provides(Ds)}),n}function Hp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Is[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ui(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Is[t]||[];i.forEach(function(s){s.apply(null,n)})}function cr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ds[t]?Ds[t].apply(null,e):void 0}function Wp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Zr();if(e)return e=Si(n,e)||e,q0(oS.definitions,n,e)||q0(wn.styles,n,e)}var oS=new aN,cN=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,Ui("noAuto")},hN={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(Ui("beforeI2svg",e),cr("pseudoElements2svg",e),cr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,Yb(function(){fN({autoReplaceSvgRoot:n}),Ui("watch",e)})}},dN={icon:function(e){if(e===null)return null;if(Oc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Si(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=bh(e[0]);return{prefix:r,iconName:Si(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(Nb))){var i=Nh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Zr(),iconName:Si(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Zr();return{prefix:s,iconName:Si(s,e)||e}}}},Zt={noAuto:cN,config:K,dom:hN,parse:dN,library:oS,findIconDefinition:Wp,toHtml:xl},fN=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(wn.styles).length>0||K.autoFetchSvg)&&mr&&K.autoReplaceSvg&&Zt.dom.i2svg({node:r})};function Oh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return xl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(mr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function pN(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Qg(o)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=Rh(W(W({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function mN(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},i),{},{id:o}),children:r}]}]}function Zg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.title,c=t.maskId,h=t.titleId,f=t.extra,m=t.watchable,y=m===void 0?!1:m,v=r.found?r:n,C=v.width,R=v.height,T=i==="fak",w=[K.replacementClass,s?"".concat(K.cssPrefix,"-").concat(s):""].filter(function(I){return f.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(f.classes).join(" "),x={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(R)})},O=T&&!~f.classes.indexOf("fa-fw")?{width:"".concat(C/R*16*.0625,"em")}:{};y&&(x.attributes[ji]=""),u&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(h||nl())},children:[u]}),delete x.attributes.title);var V=W(W({},x),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:W(W({},O),f.styles)}),F=r.found&&n.found?cr("generateAbstractMask",V)||{children:[],attributes:{}}:cr("generateAbstractIcon",V)||{children:[],attributes:{}},S=F.children,_=F.attributes;return V.children=S,V.attributes=_,a?mN(V):pN(V)}function Y0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,u=a===void 0?!1:a,c=W(W(W({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[ji]="");var h=W({},o.styles);Qg(i)&&(h.transform=qb({transform:i,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h.transform);var f=Rh(h);f.length>0&&(c.style=f);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function gN(t){var e=t.content,n=t.title,r=t.extra,i=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Rh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pf=wn.styles;function qp(t){var e=t[0],n=t[1],r=t.slice(4),i=$g(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(Ci.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Ci.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Ci.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var yN={found:!1,width:512,height:512};function vN(t,e){!qC&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gp(t,e){var n=e;return e==="fa"&&K.styleDefault!==null&&(e=Zr()),new Promise(function(r,i){if(cr("missingIconAbstract"),n==="fa"){var s=sS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&pf[e]&&pf[e][t]){var o=pf[e][t];return r(qp(o))}vN(t,e),r(W(W({},yN),{},{icon:K.showMissingIcons&&t?cr("missingIconAbstract")||{}:{}}))})}var X0=function(){},Kp=K.measurePerformance&&Eu&&Eu.mark&&Eu.measure?Eu:{mark:X0,measure:X0},aa='FA "6.4.2"',_N=function(e){return Kp.mark("".concat(aa," ").concat(e," begins")),function(){return aS(e)}},aS=function(e){Kp.mark("".concat(aa," ").concat(e," ends")),Kp.measure("".concat(aa," ").concat(e),"".concat(aa," ").concat(e," begins"),"".concat(aa," ").concat(e," ends"))},ey={begin:_N,end:aS},Yu=function(){};function J0(t){var e=t.getAttribute?t.getAttribute(ji):null;return typeof e=="string"}function wN(t){var e=t.getAttribute?t.getAttribute(Wg):null,n=t.getAttribute?t.getAttribute(qg):null;return e&&n}function EN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function TN(){if(K.autoReplaceSvg===!0)return Xu.replace;var t=Xu[K.autoReplaceSvg];return t||Xu.replace}function CN(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function SN(t){return Ae.createElement(t)}function lS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?CN:SN:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(lS(o,{ceFn:r}))}),i}function IN(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Xu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(lS(i),n)}),n.getAttribute(ji)===null&&K.keepOriginalSource){var r=Ae.createComment(IN(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Kg(n).indexOf(K.replacementClass))return Xu.replace(e);var i=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,u){return u===K.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return xl(a)}).join(`
`);n.setAttribute(ji,""),n.innerHTML=o}};function Z0(t){t()}function uS(t,e){var n=typeof e=="function"?e:Yu;if(t.length===0)n();else{var r=Z0;K.mutateApproach===kb&&(r=Jr.requestAnimationFrame||Z0),r(function(){var i=TN(),s=ey.begin("mutate");t.map(i),s(),n()})}}var ty=!1;function cS(){ty=!0}function Qp(){ty=!1}var Mc=null;function e1(t){if($0&&K.observeMutations){var e=t.treeCallback,n=e===void 0?Yu:e,r=t.nodeCallback,i=r===void 0?Yu:r,s=t.pseudoElementsCallback,o=s===void 0?Yu:s,a=t.observeMutationsRoot,u=a===void 0?Ae:a;Mc=new $0(function(c){if(!ty){var h=Zr();mo(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!J0(f.addedNodes[0])&&(K.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&K.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&J0(f.target)&&~Lb.indexOf(f.attributeName))if(f.attributeName==="class"&&wN(f.target)){var m=Nh(Kg(f.target)),y=m.prefix,v=m.iconName;f.target.setAttribute(Wg,y||h),v&&f.target.setAttribute(qg,v)}else EN(f.target)&&i(f.target)})}}),mr&&Mc.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xN(){Mc&&Mc.disconnect()}function AN(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function PN(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Nh(Kg(t));return i.prefix||(i.prefix=Zr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=sN(i.prefix,t.innerText)||Xg(i.prefix,Bp(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function kN(t){var e=mo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||nl()):(e["aria-hidden"]="true",e.focusable="false")),e}function RN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function t1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=PN(t),r=n.iconName,i=n.prefix,s=n.rest,o=kN(t),a=Hp("parseNodeAttributes",{},t),u=e.styleParser?AN(t):[];return W({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},a)}var bN=wn.styles;function hS(t){var e=K.autoReplaceSvg==="nest"?t1(t,{styleParser:!1}):t1(t);return~e.extra.classes.indexOf(GC)?cr("generateLayersText",t,e):cr("generateSvgReplacementMutation",t,e)}var ei=new Set;Gg.map(function(t){ei.add("fa-".concat(t))});Object.keys(Ja[Ie]).map(ei.add.bind(ei));Object.keys(Ja[Ve]).map(ei.add.bind(ei));ei=Sl(ei);function n1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(f){return n.add("".concat(H0,"-").concat(f))},i=function(f){return n.remove("".concat(H0,"-").concat(f))},s=K.autoFetchSvg?ei:Gg.map(function(h){return"fa-".concat(h)}).concat(Object.keys(bN));s.includes("fa")||s.push("fa");var o=[".".concat(GC,":not([").concat(ji,"])")].concat(s.map(function(h){return".".concat(h,":not([").concat(ji,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=mo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=ey.begin("onTree"),c=a.reduce(function(h,f){try{var m=hS(f);m&&h.push(m)}catch(y){qC||y.name==="MissingIcon"&&console.error(y)}return h},[]);return new Promise(function(h,f){Promise.all(c).then(function(m){uS(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(function(m){u(),f(m)})})}function NN(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hS(t).then(function(n){n&&uS([n],e)})}function ON(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Wp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Wp(i||{})),t(r,W(W({},n),{},{mask:i}))}}var DN=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,u=a===void 0?null:a,c=n.maskId,h=c===void 0?null:c,f=n.title,m=f===void 0?null:f,y=n.titleId,v=y===void 0?null:y,C=n.classes,R=C===void 0?[]:C,T=n.attributes,w=T===void 0?{}:T,x=n.styles,O=x===void 0?{}:x;if(e){var V=e.prefix,F=e.iconName,S=e.icon;return Oh(W({type:"icon"},e),function(){return Ui("beforeDOMElementCreation",{iconDefinition:e,params:n}),K.autoA11y&&(m?w["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(v||nl()):(w["aria-hidden"]="true",w.focusable="false")),Zg({icons:{main:qp(S),mask:u?qp(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:F,transform:W(W({},bn),i),symbol:o,title:m,maskId:h,titleId:v,extra:{attributes:w,styles:O,classes:R}})})}},MN={mixout:function(){return{icon:ON(DN)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=n1,n.nodeCallback=NN,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return n1(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,u=r.transform,c=r.symbol,h=r.mask,f=r.maskId,m=r.extra;return new Promise(function(y,v){Promise.all([Gp(i,a),h.iconName?Gp(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var R=$g(C,2),T=R[0],w=R[1];y([n,Zg({icons:{main:T,mask:w},prefix:a,iconName:i,transform:u,symbol:c,maskId:f,title:s,titleId:o,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,u=Rh(a);u.length>0&&(i.style=u);var c;return Qg(o)&&(c=cr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},LN={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Oh({type:"layer"},function(){Ui("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(u){o=o.concat(u.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Sl(s)).join(" ")},children:o}]})}}}},FN={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,h=r.styles,f=h===void 0?{}:h;return Oh({type:"counter",content:n},function(){return Ui("beforeDOMElementCreation",{content:n,params:r}),gN({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Sl(a))}})})}}}},VN={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?bn:i,o=r.title,a=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,h=r.attributes,f=h===void 0?{}:h,m=r.styles,y=m===void 0?{}:m;return Oh({type:"text",content:n},function(){return Ui("beforeDOMElementCreation",{content:n,params:r}),Y0({content:n,transform:W(W({},bn),s),title:a,extra:{attributes:f,styles:y,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Sl(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,u=null;if($C){var c=parseInt(getComputedStyle(n).fontSize,10),h=n.getBoundingClientRect();a=h.width/c,u=h.height/c}return K.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Y0({content:n.innerHTML,width:a,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},jN=new RegExp('"',"ug"),r1=[1105920,1112319];function UN(t){var e=t.replace(jN,""),n=Zb(e,0),r=n>=r1[0]&&n<=r1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Bp(i?e[0]:e),isSecondary:r||i}}function i1(t,e){var n="".concat(Pb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=mo(t.children),o=s.filter(function(S){return S.getAttribute(zp)===e})[0],a=Jr.getComputedStyle(t,e),u=a.getPropertyValue("font-family").match(Ob),c=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&h!=="none"&&h!==""){var f=a.getPropertyValue("content"),m=~["Sharp"].indexOf(u[2])?Ve:Ie,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Za[m][u[2].toLowerCase()]:Db[m][c],v=UN(f),C=v.value,R=v.isSecondary,T=u[0].startsWith("FontAwesome"),w=Xg(y,C),x=w;if(T){var O=oN(C);O.iconName&&O.prefix&&(w=O.iconName,y=O.prefix)}if(w&&!R&&(!o||o.getAttribute(Wg)!==y||o.getAttribute(qg)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var V=RN(),F=V.extra;F.attributes[zp]=e,Gp(w,y).then(function(S){var _=Zg(W(W({},V),{},{icons:{main:S,mask:Jg()},prefix:y,iconName:x,extra:F,watchable:!0})),I=Ae.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=_.map(function(A){return xl(A)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function zN(t){return Promise.all([i1(t,"::before"),i1(t,"::after")])}function BN(t){return t.parentNode!==document.head&&!~Rb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function s1(t){if(mr)return new Promise(function(e,n){var r=mo(t.querySelectorAll("*")).filter(BN).map(zN),i=ey.begin("searchPseudoElements");cS(),Promise.all(r).then(function(){i(),Qp(),e()}).catch(function(){i(),Qp(),n()})})}var $N={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=s1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;K.searchPseudoElements&&s1(i)}}},o1=!1,HN={mixout:function(){return{dom:{unwatch:function(){cS(),o1=!0}}}},hooks:function(){return{bootstrap:function(){e1(Hp("mutationObserverCallbacks",{}))},noAuto:function(){xN()},watch:function(n){var r=n.observeMutationsRoot;o1?Qp():e1(Hp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},a1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},WN={mixout:function(){return{parse:{transform:function(n){return a1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=a1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),h="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(u," ").concat(c," ").concat(h)},m={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:f,path:m};return{tag:"g",attributes:W({},y.outer),children:[{tag:"g",attributes:W({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),y.path)}]}]}}}},mf={x:0,y:0,width:"100%",height:"100%"};function l1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qN(t){return t.tag==="g"?t.children:[t]}var GN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Nh(i.split(" ").map(function(o){return o.trim()})):Jg();return s.prefix||(s.prefix=Zr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,u=n.transform,c=s.width,h=s.icon,f=o.width,m=o.icon,y=Wb({transform:u,containerWidth:f,iconWidth:c}),v={tag:"rect",attributes:W(W({},mf),{},{fill:"white"})},C=h.children?{children:h.children.map(l1)}:{},R={tag:"g",attributes:W({},y.inner),children:[l1(W({tag:h.tag,attributes:W(W({},h.attributes),y.path)},C))]},T={tag:"g",attributes:W({},y.outer),children:[R]},w="mask-".concat(a||nl()),x="clip-".concat(a||nl()),O={tag:"mask",attributes:W(W({},mf),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,T]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:qN(m)},O]};return r.push(V,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(w,")")},mf)}),{children:r,attributes:i}}}},KN={provides:function(e){var n=!1;Jr.matchMedia&&(n=Jr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:W(W({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:W(W({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},QN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},YN=[Kb,MN,LN,FN,VN,$N,HN,WN,GN,KN,QN];uN(YN,{mixoutsTo:Zt});Zt.noAuto;Zt.config;Zt.library;Zt.dom;var Yp=Zt.parse;Zt.findIconDefinition;Zt.toHtml;var XN=Zt.icon;Zt.layer;Zt.text;Zt.counter;var dS={exports:{}},JN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ZN=JN,eO=ZN;function fS(){}function pS(){}pS.resetWarningCache=fS;var tO=function(){function t(r,i,s,o,a,u){if(u!==eO){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:pS,resetWarningCache:fS};return n.PropTypes=n,n};dS.exports=tO();var nO=dS.exports;const ie=hh(nO);function u1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Or(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u1(Object(n),!0).forEach(function(r){xs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Lc(t){"@babel/helpers - typeof";return Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lc(t)}function xs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iO(t,e){if(t==null)return{};var n=rO(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Xp(t){return sO(t)||oO(t)||aO(t)||lO()}function sO(t){if(Array.isArray(t))return Jp(t)}function oO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function aO(t,e){if(t){if(typeof t=="string")return Jp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jp(t,e)}}function Jp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function lO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uO(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,f=t.pulse,m=t.fixedWidth,y=t.inverse,v=t.border,C=t.listItem,R=t.flip,T=t.size,w=t.rotation,x=t.pull,O=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":m,"fa-inverse":y,"fa-border":v,"fa-li":C,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},xs(e,"fa-".concat(T),typeof T<"u"&&T!==null),xs(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),xs(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),xs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(O).map(function(V){return O[V]?V:null}).filter(function(V){return V})}function cO(t){return t=t-0,t===t}function mS(t){return cO(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var hO=["style"];function dO(t){return t.charAt(0).toUpperCase()+t.slice(1)}function fO(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=mS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[dO(i)]=s:e[i]=s,e},{})}function gS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return gS(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=fO(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[mS(c)]=h}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=iO(n,hO);return i.attrs.style=Or(Or({},i.attrs.style),o),t.apply(void 0,[e.tag,Or(Or({},i.attrs),a)].concat(Xp(r)))}var yS=!1;try{yS=!0}catch{}function pO(){if(!yS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function c1(t){if(t&&Lc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Yp.icon)return Yp.icon(t);if(t===null)return null;if(t&&Lc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function gf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xs({},t,e):{}}var ke=nn.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,u=t.maskId,c=c1(n),h=gf("classes",[].concat(Xp(uO(t)),Xp(s.split(" ")))),f=gf("transform",typeof t.transform=="string"?Yp.transform(t.transform):t.transform),m=gf("mask",c1(r)),y=XN(c,Or(Or(Or(Or({},h),f),m),{},{symbol:i,title:o,titleId:a,maskId:u}));if(!y)return pO("Could not find icon",c),null;var v=y.abstract,C={ref:e};return Object.keys(t).forEach(function(R){ke.defaultProps.hasOwnProperty(R)||(C[R]=t[R])}),mO(v[0],C)});ke.displayName="FontAwesomeIcon";ke.propTypes={beat:ie.bool,border:ie.bool,beatFade:ie.bool,bounce:ie.bool,className:ie.string,fade:ie.bool,flash:ie.bool,mask:ie.oneOfType([ie.object,ie.array,ie.string]),maskId:ie.string,fixedWidth:ie.bool,inverse:ie.bool,flip:ie.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ie.oneOfType([ie.object,ie.array,ie.string]),listItem:ie.bool,pull:ie.oneOf(["right","left"]),pulse:ie.bool,rotation:ie.oneOf([0,90,180,270]),shake:ie.bool,size:ie.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ie.bool,spinPulse:ie.bool,spinReverse:ie.bool,symbol:ie.oneOfType([ie.bool,ie.string]),title:ie.string,titleId:ie.string,transform:ie.oneOfType([ie.string,ie.object]),swapOpacity:ie.bool};ke.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var mO=gS.bind(null,nn.createElement),gO={prefix:"fas",iconName:"cart-plus",icon:[576,512,[],"f217","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"]},yO={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},vO={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Zp={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},_O={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},ny={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},wO={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},EO={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},TO=EO,CO={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},SO={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},IO={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},xO={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},ry=xO,AO={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},h1={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function d1({item:t}){if(console.log(t),t)return E.jsxs("div",{className:"producto-carrito mb-2",children:[E.jsxs("div",{className:"titulo-producto-carrito",children:[E.jsxs("div",{className:"informacion-producto-carrito",children:[E.jsx("div",{className:"me-2",children:t.descripcion}),E.jsx("div",{className:"descripcion-producto-carrito"})]}),E.jsxs("div",{className:"precio-producto-carrito",children:["$",t.precio]})]}),E.jsx("div",{className:"body-producto-carrito",children:t.ingredientes})]})}function vS(t,e){return function(){return t.apply(e,arguments)}}const{toString:PO}=Object.prototype,{getPrototypeOf:iy}=Object,Dh=(t=>e=>{const n=PO.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Un=t=>(t=t.toLowerCase(),e=>Dh(e)===t),Mh=t=>e=>typeof e===t,{isArray:go}=Array,rl=Mh("undefined");function kO(t){return t!==null&&!rl(t)&&t.constructor!==null&&!rl(t.constructor)&&an(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const _S=Un("ArrayBuffer");function RO(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&_S(t.buffer),e}const bO=Mh("string"),an=Mh("function"),wS=Mh("number"),Lh=t=>t!==null&&typeof t=="object",NO=t=>t===!0||t===!1,Ju=t=>{if(Dh(t)!=="object")return!1;const e=iy(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},OO=Un("Date"),DO=Un("File"),MO=Un("Blob"),LO=Un("FileList"),FO=t=>Lh(t)&&an(t.pipe),VO=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||an(t.append)&&((e=Dh(t))==="formdata"||e==="object"&&an(t.toString)&&t.toString()==="[object FormData]"))},jO=Un("URLSearchParams"),UO=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Al(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),go(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function ES(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const TS=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),CS=t=>!rl(t)&&t!==TS;function em(){const{caseless:t}=CS(this)&&this||{},e={},n=(r,i)=>{const s=t&&ES(e,i)||i;Ju(e[s])&&Ju(r)?e[s]=em(e[s],r):Ju(r)?e[s]=em({},r):go(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Al(arguments[r],n);return e}const zO=(t,e,n,{allOwnKeys:r}={})=>(Al(e,(i,s)=>{n&&an(i)?t[s]=vS(i,n):t[s]=i},{allOwnKeys:r}),t),BO=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),$O=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},HO=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&iy(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},WO=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},qO=t=>{if(!t)return null;if(go(t))return t;let e=t.length;if(!wS(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},GO=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&iy(Uint8Array)),KO=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},QO=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},YO=Un("HTMLFormElement"),XO=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),f1=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),JO=Un("RegExp"),SS=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Al(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},ZO=t=>{SS(t,(e,n)=>{if(an(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(an(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},eD=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return go(t)?r(t):r(String(t).split(e)),n},tD=()=>{},nD=(t,e)=>(t=+t,Number.isFinite(t)?t:e),yf="abcdefghijklmnopqrstuvwxyz",p1="0123456789",IS={DIGIT:p1,ALPHA:yf,ALPHA_DIGIT:yf+yf.toUpperCase()+p1},rD=(t=16,e=IS.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function iD(t){return!!(t&&an(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const sD=t=>{const e=new Array(10),n=(r,i)=>{if(Lh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=go(r)?[]:{};return Al(r,(o,a)=>{const u=n(o,i+1);!rl(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},oD=Un("AsyncFunction"),aD=t=>t&&(Lh(t)||an(t))&&an(t.then)&&an(t.catch),L={isArray:go,isArrayBuffer:_S,isBuffer:kO,isFormData:VO,isArrayBufferView:RO,isString:bO,isNumber:wS,isBoolean:NO,isObject:Lh,isPlainObject:Ju,isUndefined:rl,isDate:OO,isFile:DO,isBlob:MO,isRegExp:JO,isFunction:an,isStream:FO,isURLSearchParams:jO,isTypedArray:GO,isFileList:LO,forEach:Al,merge:em,extend:zO,trim:UO,stripBOM:BO,inherits:$O,toFlatObject:HO,kindOf:Dh,kindOfTest:Un,endsWith:WO,toArray:qO,forEachEntry:KO,matchAll:QO,isHTMLForm:YO,hasOwnProperty:f1,hasOwnProp:f1,reduceDescriptors:SS,freezeMethods:ZO,toObjectSet:eD,toCamelCase:XO,noop:tD,toFiniteNumber:nD,findKey:ES,global:TS,isContextDefined:CS,ALPHABET:IS,generateString:rD,isSpecCompliantForm:iD,toJSONObject:sD,isAsyncFn:oD,isThenable:aD};function ue(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}L.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xS=ue.prototype,AS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{AS[t]={value:t}});Object.defineProperties(ue,AS);Object.defineProperty(xS,"isAxiosError",{value:!0});ue.from=(t,e,n,r,i,s)=>{const o=Object.create(xS);return L.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),ue.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const lD=null;function tm(t){return L.isPlainObject(t)||L.isArray(t)}function PS(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function m1(t,e,n){return t?t.concat(e).map(function(i,s){return i=PS(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function uD(t){return L.isArray(t)&&!t.some(tm)}const cD=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function Fh(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,R){return!L.isUndefined(R[C])});const r=n.metaTokens,i=n.visitor||h,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(L.isDate(v))return v.toISOString();if(!u&&L.isBlob(v))throw new ue("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(v)||L.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function h(v,C,R){let T=v;if(v&&!R&&typeof v=="object"){if(L.endsWith(C,"{}"))C=r?C:C.slice(0,-2),v=JSON.stringify(v);else if(L.isArray(v)&&uD(v)||(L.isFileList(v)||L.endsWith(C,"[]"))&&(T=L.toArray(v)))return C=PS(C),T.forEach(function(x,O){!(L.isUndefined(x)||x===null)&&e.append(o===!0?m1([C],O,s):o===null?C:C+"[]",c(x))}),!1}return tm(v)?!0:(e.append(m1(R,C,s),c(v)),!1)}const f=[],m=Object.assign(cD,{defaultVisitor:h,convertValue:c,isVisitable:tm});function y(v,C){if(!L.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+C.join("."));f.push(v),L.forEach(v,function(T,w){(!(L.isUndefined(T)||T===null)&&i.call(e,T,L.isString(w)?w.trim():w,C,m))===!0&&y(T,C?C.concat(w):[w])}),f.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return y(t),e}function g1(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function sy(t,e){this._pairs=[],t&&Fh(t,this,e)}const kS=sy.prototype;kS.append=function(e,n){this._pairs.push([e,n])};kS.toString=function(e){const n=e?function(r){return e.call(this,r,g1)}:g1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function hD(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function RS(t,e,n){if(!e)return t;const r=n&&n.encode||hD,i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new sy(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class dD{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const y1=dD,bS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fD=typeof URLSearchParams<"u"?URLSearchParams:sy,pD=typeof FormData<"u"?FormData:null,mD=typeof Blob<"u"?Blob:null,gD={isBrowser:!0,classes:{URLSearchParams:fD,FormData:pD,Blob:mD},protocols:["http","https","file","blob","url","data"]},NS=typeof window<"u"&&typeof document<"u",yD=(t=>NS&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),vD=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),_D=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:NS,hasStandardBrowserEnv:yD,hasStandardBrowserWebWorkerEnv:vD},Symbol.toStringTag,{value:"Module"})),Nn={..._D,...gD};function wD(t,e){return Fh(t,new Nn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Nn.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function ED(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function TD(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function OS(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,u?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=TD(i[o])),!a)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(ED(r),i,n,0)}),n}return null}function CD(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const oy={transitional:bS,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i&&i?JSON.stringify(OS(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wD(e,this.formSerializer).toString();if((a=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Fh(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),CD(e)):e}],transformResponse:[function(e){const n=this.transitional||oy.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ue.from(a,ue.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nn.classes.FormData,Blob:Nn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{oy.headers[t]={}});const ay=oy,SD=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ID=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&SD[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},v1=Symbol("internals");function Ko(t){return t&&String(t).trim().toLowerCase()}function Zu(t){return t===!1||t==null?t:L.isArray(t)?t.map(Zu):String(t)}function xD(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const AD=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function vf(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function PD(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function kD(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Vh{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,c){const h=Ko(u);if(!h)throw new Error("header name must be a non-empty string");const f=L.findKey(i,h);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||u]=Zu(a))}const o=(a,u)=>L.forEach(a,(c,h)=>s(c,h,u));return L.isPlainObject(e)||e instanceof this.constructor?o(e,n):L.isString(e)&&(e=e.trim())&&!AD(e)?o(ID(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Ko(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return xD(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ko(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||vf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Ko(o),o){const a=L.findKey(r,o);a&&(!n||vf(r,r[a],a,n))&&(delete r[a],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||vf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=Zu(i),delete n[s];return}const a=e?PD(s):String(s).trim();a!==s&&delete n[s],n[a]=Zu(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[v1]=this[v1]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Ko(o);r[a]||(kD(i,o),r[a]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}Vh.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(Vh.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(Vh);const nr=Vh;function _f(t,e){const n=this||ay,r=e||n,i=nr.from(r.headers);let s=r.data;return L.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function DS(t){return!!(t&&t.__CANCEL__)}function Pl(t,e,n){ue.call(this,t??"canceled",ue.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Pl,ue,{__CANCEL__:!0});function RD(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const bD=Nn.hasStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const u=[];u.push(n+"="+encodeURIComponent(r)),L.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),L.isString(s)&&u.push("path="+s),L.isString(o)&&u.push("domain="+o),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ND(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function OD(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function MS(t,e){return t&&!ND(e)?OD(t,e):e}const DD=Nn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=L.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function MD(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function LD(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),h=r[s];o||(o=c),n[i]=u,r[i]=c;let f=s,m=0;for(;f!==i;)m+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const y=h&&c-h;return y?Math.round(m*1e3/y):void 0}}function _1(t,e){let n=0;const r=LD(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a),c=s<=o;n=s;const h={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&c?(o-s)/u:void 0,event:i};h[e?"download":"upload"]=!0,t(h)}}const FD=typeof XMLHttpRequest<"u",VD=FD&&function(t){return new Promise(function(n,r){let i=t.data;const s=nr.from(t.headers).normalize(),o=t.responseType;let a;function u(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let c;if(L.isFormData(i)){if(Nn.hasStandardBrowserEnv||Nn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[v,...C]=c?c.split(";").map(R=>R.trim()).filter(Boolean):[];s.setContentType([v||"multipart/form-data",...C].join("; "))}}let h=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",C=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(v+":"+C))}const f=MS(t.baseURL,t.url);h.open(t.method.toUpperCase(),RS(f,t.params,t.paramsSerializer),!0),h.timeout=t.timeout;function m(){if(!h)return;const v=nr.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),R={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:v,config:t,request:h};RD(function(w){n(w),u()},function(w){r(w),u()},R),h=null}if("onloadend"in h?h.onloadend=m:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(m)},h.onabort=function(){h&&(r(new ue("Request aborted",ue.ECONNABORTED,t,h)),h=null)},h.onerror=function(){r(new ue("Network Error",ue.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let C=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const R=t.transitional||bS;t.timeoutErrorMessage&&(C=t.timeoutErrorMessage),r(new ue(C,R.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,t,h)),h=null},Nn.hasStandardBrowserEnv){const v=DD(f)&&t.xsrfCookieName&&bD.read(t.xsrfCookieName);v&&s.set(t.xsrfHeaderName,v)}i===void 0&&s.setContentType(null),"setRequestHeader"in h&&L.forEach(s.toJSON(),function(C,R){h.setRequestHeader(R,C)}),L.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),o&&o!=="json"&&(h.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&h.addEventListener("progress",_1(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",_1(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=v=>{h&&(r(!v||v.type?new Pl(null,t,h):v),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const y=MD(f);if(y&&Nn.protocols.indexOf(y)===-1){r(new ue("Unsupported protocol "+y+":",ue.ERR_BAD_REQUEST,t));return}h.send(i||null)})},nm={http:lD,xhr:VD};L.forEach(nm,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const w1=t=>`- ${t}`,jD=t=>L.isFunction(t)||t===null||t===!1,LS={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!jD(n)&&(r=nm[(o=String(n)).toLowerCase()],r===void 0))throw new ue(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(w1).join(`
`):" "+w1(s[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:nm};function wf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pl(null,t)}function E1(t){return wf(t),t.headers=nr.from(t.headers),t.data=_f.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),LS.getAdapter(t.adapter||ay.adapter)(t).then(function(r){return wf(t),r.data=_f.call(t,t.transformResponse,r),r.headers=nr.from(r.headers),r},function(r){return DS(r)||(wf(t),r&&r.response&&(r.response.data=_f.call(t,t.transformResponse,r.response),r.response.headers=nr.from(r.response.headers))),Promise.reject(r)})}const T1=t=>t instanceof nr?t.toJSON():t;function Qs(t,e){e=e||{};const n={};function r(c,h,f){return L.isPlainObject(c)&&L.isPlainObject(h)?L.merge.call({caseless:f},c,h):L.isPlainObject(h)?L.merge({},h):L.isArray(h)?h.slice():h}function i(c,h,f){if(L.isUndefined(h)){if(!L.isUndefined(c))return r(void 0,c,f)}else return r(c,h,f)}function s(c,h){if(!L.isUndefined(h))return r(void 0,h)}function o(c,h){if(L.isUndefined(h)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,h)}function a(c,h,f){if(f in e)return r(c,h);if(f in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,h)=>i(T1(c),T1(h),!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=u[h]||i,m=f(t[h],e[h],h);L.isUndefined(m)&&f!==a||(n[h]=m)}),n}const FS="1.6.1",ly={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ly[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const C1={};ly.transitional=function(e,n,r){function i(s,o){return"[Axios v"+FS+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ue(i(o," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!C1[o]&&(C1[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function UD(t,e,n){if(typeof t!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new ue("option "+s+" must be "+u,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+s,ue.ERR_BAD_OPTION)}}const rm={assertOptions:UD,validators:ly},Cr=rm.validators;class Fc{constructor(e){this.defaults=e,this.interceptors={request:new y1,response:new y1}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Qs(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&rm.assertOptions(r,{silentJSONParsing:Cr.transitional(Cr.boolean),forcedJSONParsing:Cr.transitional(Cr.boolean),clarifyTimeoutError:Cr.transitional(Cr.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:rm.assertOptions(i,{encode:Cr.function,serialize:Cr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],v=>{delete s[v]}),n.headers=nr.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(n)===!1||(u=u&&C.synchronous,a.unshift(C.fulfilled,C.rejected))});const c=[];this.interceptors.response.forEach(function(C){c.push(C.fulfilled,C.rejected)});let h,f=0,m;if(!u){const v=[E1.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,c),m=v.length,h=Promise.resolve(n);f<m;)h=h.then(v[f++],v[f++]);return h}m=a.length;let y=n;for(f=0;f<m;){const v=a[f++],C=a[f++];try{y=v(y)}catch(R){C.call(this,R);break}}try{h=E1.call(this,y)}catch(v){return Promise.reject(v)}for(f=0,m=c.length;f<m;)h=h.then(c[f++],c[f++]);return h}getUri(e){e=Qs(this.defaults,e);const n=MS(e.baseURL,e.url);return RS(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){Fc.prototype[e]=function(n,r){return this.request(Qs(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Qs(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Fc.prototype[e]=n(),Fc.prototype[e+"Form"]=n(!0)});const ec=Fc;class uy{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Pl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new uy(function(i){e=i}),cancel:e}}}const zD=uy;function BD(t){return function(n){return t.apply(null,n)}}function $D(t){return L.isObject(t)&&t.isAxiosError===!0}const im={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(im).forEach(([t,e])=>{im[e]=t});const HD=im;function VS(t){const e=new ec(t),n=vS(ec.prototype.request,e);return L.extend(n,ec.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return VS(Qs(t,i))},n}const Ye=VS(ay);Ye.Axios=ec;Ye.CanceledError=Pl;Ye.CancelToken=zD;Ye.isCancel=DS;Ye.VERSION=FS;Ye.toFormData=Fh;Ye.AxiosError=ue;Ye.Cancel=Ye.CanceledError;Ye.all=function(e){return Promise.all(e)};Ye.spread=BD;Ye.isAxiosError=$D;Ye.mergeConfig=Qs;Ye.AxiosHeaders=nr;Ye.formToJSON=t=>OS(L.isHTMLForm(t)?new FormData(t):t);Ye.getAdapter=LS.getAdapter;Ye.HttpStatusCode=HD;Ye.default=Ye;const jh=Ye;var jS="/api/Pedido/";const WD=async t=>{const e=jS;return console.log(t),jh.post(e,t).then(n=>(console.log("Solicitud POST exitosa:",n.data),n.data)).catch(n=>{console.error("Error en la solicitud POST:",n)})};async function qD(t){let e=jS+t+"/2";return await jh.get(e).then(r=>r.data).catch(r=>console.error(r))}const US={AltaPedido:WD,obtenerPedidosEntregados:qD};function GD(){const t=Oe.obtenerIdMesa(),e=Oe.obtenerPedido(),[n,r]=M.useState([]),[i,s]=M.useState(!1),o=e.productosPersonalizados.concat(e.productos);return M.useEffect(()=>{US.obtenerPedidosEntregados(t).then(a=>{a!=""&&(console.log(a),r(a))}).catch(a=>{console.error(a.message)})},[]),E.jsxs("div",{className:"container-carrito",children:[E.jsxs("div",{className:"header-carrito",children:[E.jsx("div",{className:"cerrar-carrito",children:E.jsx(Ta,{to:"/",style:{color:"white"},children:E.jsx(ke,{icon:ny})})}),E.jsx("div",{className:"titulo-carrito",children:E.jsx("h2",{children:"Tu orden"})})]}),E.jsxs("ul",{className:"nav-solapas",id:"myTab",role:"tablist",children:[E.jsx("li",{onClick:()=>s(!1),className:`carrito-solapas ${i?"":"active"}`,role:"presentation",children:E.jsx("button",{children:"Pedido"})}),E.jsx("li",{onClick:()=>s(!0),className:`carrito-solapas ${i?"active":""}`,role:"presentation",children:E.jsx("button",{children:"Entregados"})})]}),i?E.jsxs("div",{className:"carrito-scroll",children:[E.jsx("h5",{children:"ENTREGADO"}),n!=null?n.map((a,u)=>E.jsx("div",{children:E.jsx(d1,{item:a})},u)):E.jsx("div",{className:"carrito-vacio",children:E.jsx("h5",{children:"No selecciono ningun producto"})})]}):E.jsxs("div",{className:"carrito-scroll",children:[E.jsx("h5",{children:"EN CURSO"}),o!=null?o.map((a,u)=>E.jsx("div",{children:E.jsx(d1,{item:a})},u)):E.jsx("div",{className:"carrito-vacio",children:E.jsx("h5",{children:"No selecciono ningun producto"})})]})]})}function KD(){const{dataCategorias:t,dataProductos:e,Pedido:n}=M.useContext(Zi);return E.jsx(GD,{dataCategorias:t,dataProductos:e,Pedido:n})}function QD(t){var h;const{dataCategoria:e,pedido:n,armarPedido:r,restarProducto:i,dataProducto:s,setMostrarDetalleProducto:o,setProductoSeleccionado:a}=t;let u=((h=e[0])==null?void 0:h.descripcion)??"";return{dataCategoria:e,pedido:n,armarPedido:r,restarProducto:i,dataProducto:s,setMostrarDetalleProducto:o,setProductoSeleccionado:a,titulo:u,mostrarProducto:f=>{a(f),o(!0)}}}function S1({titulo:t,dataProducto:e,armarPedido:n,mostrarProducto:r,restarProducto:i}){const s=Oe.obtenerPedido();return E.jsx(E.Fragment,{children:e.map((o,a)=>{let u=0;return!o.personalizado&&Object.keys(s).length!==0&&s.productos.length!==0&&(u=s.productos.filter(c=>c.id===o.id).length),E.jsx("div",{className:`container-producto ${o.personalizado&&"personalizados"}`,children:E.jsxs("div",{className:"card-producto",children:[E.jsxs("div",{className:"card-col-button",children:[E.jsx("h5",{children:o.personalizado?"x1":"x"+u}),u>0&&E.jsx("button",{className:"btn-producto",id:o.id,"data-value":t,onClick:()=>i(o),children:E.jsx(ke,{icon:wO})})]}),E.jsxs("div",{onClick:()=>!o.personalizado&&r(o),className:"card-col-body",children:[E.jsx("h5",{children:o.descripcion}),o.ingredientes?E.jsx("span",{children:o.ingredientes}):E.jsx("span",{children:"Alguna descripcion del producto, como por ejemplo sus ingredientes"})]}),E.jsxs("div",{className:"card-col-button",children:[E.jsxs("span",{className:"mb-1",children:["$",o.precio]}),o.personalizado?E.jsx("button",{className:"btn-producto trash",id:o.id,"data-value":t,onClick:()=>i(o),children:E.jsx(ke,{icon:_O})}):E.jsx("button",{className:"btn-producto",id:o.id,"data-value":t,onClick:()=>n(o),children:E.jsx(ke,{icon:IO})})]})]})},a)})})}function YD(t){const{pedido:e,armarPedido:n,restarProducto:r,dataProducto:i,titulo:s,mostrarProducto:o}=QD(t);return E.jsxs(E.Fragment,{children:[e&&e.productosPersonalizados.length>0&&E.jsxs("div",{className:"div-productos",children:[E.jsx("h1",{className:"lblTitulo",children:"Personalizados"}),E.jsx(S1,{titulo:s,restarProducto:r,dataProducto:e.productosPersonalizados,mostrarProducto:o,armarPedido:n})]}),E.jsxs("div",{className:"div-productos",children:[E.jsx("h1",{className:"lblTitulo",children:s}),E.jsx(S1,{titulo:s,restarProducto:r,dataProducto:i,mostrarProducto:o,armarPedido:n})]})]})}function XD(t){const{setCategoriaVisible:e,indicesFixed:n}=t,{dataCategorias:r}=M.useContext(Zi),[i,s]=M.useState("Entradas");return{dataCategorias:r,buttonActive:i,indiceClick:(a,u)=>{s(a),e(u)},indicesFixed:n}}function JD(t){const{dataCategorias:e,buttonActive:n,indiceClick:r,indicesFixed:i}=XD(t);return E.jsx(E.Fragment,{children:E.jsx("div",{id:"fixedDiv",className:`container-indices ${i?"fixed-active":""}`,children:E.jsx("div",{className:"menu-carta",children:e.map(s=>E.jsx("div",{className:".container-card me-2",children:E.jsx("div",{className:"",children:E.jsx("div",{onClick:()=>r(s.descripcion,s.id),className:`menu-items ${n==s.descripcion?"indice-active":""}`,children:E.jsx("a",{children:s.descripcion})},s.id)})},s.id))})})})}function ZD(t){const[e,n]=M.useState(!1),[r,i]=M.useState(!1);return useEffect(()=>{const s=()=>{const a=document.getElementById("cartaScroll");a.scrollTop>200&&!e?(i(!0),n(!0)):e&&a.scrollTop<=200&&(i(!1),n(!1))},o=document.getElementById("cartaScroll");return o&&o.addEventListener("scroll",s),()=>{o&&o.removeEventListener("scroll",s)}},[e]),{indicesFixed:r}}function e4({dataCategorias:t,setCategoriaVisible:e}){const{indicesFixed:n}=ZD;return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"container-portada",style:{backgroundImage:"url(/assets/img-top-carta.jpeg)"},children:[E.jsx("div",{className:"container-img-portada",children:E.jsx("img",{className:"img-top-carta",src:"/assets/SommieResto.jpeg",alt:""})}),E.jsx("div",{className:"overlay"})]}),E.jsx(JD,{setCategoriaVisible:e,indicesFixed:n,dataCategorias:t})]})}function t4(){return E.jsxs("div",{className:"container-editar-producto",children:[E.jsx("div",{className:"titulo-editar-producto",children:E.jsx("h2",{children:"Hamburguesa"})}),E.jsxs("div",{className:"opciones-editar-producto",children:[E.jsx("h5",{children:"Completo"}),E.jsx("input",{type:"checkbox",checked:!0})]}),E.jsxs("div",{className:"opciones-editar-producto",children:[E.jsx("h5",{children:"Lechuga"}),E.jsx("input",{type:"checkbox",checked:!0})]}),E.jsxs("div",{className:"opciones-editar-producto",children:[E.jsx("h5",{children:"Tomate"}),E.jsx("input",{type:"checkbox",checked:"checked"})]}),E.jsxs("div",{className:"opciones-editar-producto",children:[E.jsx("h5",{children:"Queso"}),E.jsx("input",{type:"checkbox",checked:"checked"})]}),E.jsxs("div",{className:"opciones-editar-producto",children:[E.jsx("h5",{children:"Huevo"}),E.jsx("input",{type:"checkbox",checked:"checked"})]})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw yo(e)},yo=function(t){return new Error("Firebase Database ("+zS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n4=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(BS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n4(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new r4;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $S=function(t){const e=BS(t);return cy.encodeByteArray(e,!0)},Vc=function(t){return $S(t).replace(/\./g,"")},sm=function(t){try{return cy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(t){return HS(void 0,t)}function HS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!s4(n)||(t[n]=HS(t[n],e[n]));return t}function s4(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=()=>o4().__FIREBASE_DEFAULTS__,l4=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},u4=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sm(t[1]);return e&&JSON.parse(e)},hy=()=>{try{return a4()||l4()||u4()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c4=t=>{var e,n;return(n=(e=hy())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WS=t=>{const e=c4(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qS=()=>{var t;return(t=hy())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vc(JSON.stringify(n)),Vc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(KS())}function h4(){var t;const e=(t=hy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function d4(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YS(){return zS.NODE_ADMIN===!0}function p4(){return!h4()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XS(){try{return typeof indexedDB=="object"}catch{return!1}}function JS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function m4(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4="FirebaseError";class ci extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=g4,Object.setPrototypeOf(this,ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uh.prototype.create)}}class Uh{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?y4(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ci(i,a,r)}}function y4(t,e){return t.replace(v4,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v4=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=il(sm(s[0])||""),n=il(sm(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_4=function(t){const e=ZS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},w4=function(t){const e=ZS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ys(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function I1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Uc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(x1(s)&&x1(o)){if(!Uc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function zh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4=1e3,I4=2,x4=4*60*60*1e3,A4=.5;function A1(t,e=S4,n=I4){const r=e*Math.pow(n,t),i=Math.round(A4*r*(Math.random()-.5)*2);return Math.min(x4,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R4(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k4(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k4(t){return t===yi?void 0:t}function R4(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const N4={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},O4=le.INFO,D4={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},M4=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=D4[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $h{constructor(e){this.name=e,this._logLevel=O4,this._logHandler=M4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const L4=(t,e)=>e.some(n=>t instanceof n);let P1,k1;function F4(){return P1||(P1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V4(){return k1||(k1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eI=new WeakMap,om=new WeakMap,tI=new WeakMap,Ef=new WeakMap,dy=new WeakMap;function j4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eI.set(n,t)}).catch(()=>{}),dy.set(e,t),e}function U4(t){if(om.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});om.set(t,e)}let am={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return om.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function z4(t){am=t(am)}function B4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tf(this),e,...n);return tI.set(r,e.sort?e.sort():[e]),qr(r)}:V4().includes(t)?function(...e){return t.apply(Tf(this),e),qr(eI.get(this))}:function(...e){return qr(t.apply(Tf(this),e))}}function $4(t){return typeof t=="function"?B4(t):(t instanceof IDBTransaction&&U4(t),L4(t,F4())?new Proxy(t,am):t)}function qr(t){if(t instanceof IDBRequest)return j4(t);if(Ef.has(t))return Ef.get(t);const e=$4(t);return e!==t&&(Ef.set(t,e),dy.set(e,t)),e}const Tf=t=>dy.get(t);function nI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qr(o.result),u.oldVersion,u.newVersion,qr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const H4=["get","getKey","getAll","getAllKeys","count"],W4=["put","add","delete","clear"],Cf=new Map;function R1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cf.get(e))return Cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=W4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||H4.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Cf.set(e,s),s}z4(t=>({...t,get:(e,n,r)=>R1(e,n)||t.get(e,n,r),has:(e,n)=>!!R1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lm="@firebase/app",b1="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new $h("@firebase/app"),K4="@firebase/app-compat",Q4="@firebase/analytics-compat",Y4="@firebase/analytics",X4="@firebase/app-check-compat",J4="@firebase/app-check",Z4="@firebase/auth",eM="@firebase/auth-compat",tM="@firebase/database",nM="@firebase/database-compat",rM="@firebase/functions",iM="@firebase/functions-compat",sM="@firebase/installations",oM="@firebase/installations-compat",aM="@firebase/messaging",lM="@firebase/messaging-compat",uM="@firebase/performance",cM="@firebase/performance-compat",hM="@firebase/remote-config",dM="@firebase/remote-config-compat",fM="@firebase/storage",pM="@firebase/storage-compat",mM="@firebase/firestore",gM="@firebase/vertexai-preview",yM="@firebase/firestore-compat",vM="firebase",_M="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="[DEFAULT]",wM={[lm]:"fire-core",[K4]:"fire-core-compat",[Y4]:"fire-analytics",[Q4]:"fire-analytics-compat",[J4]:"fire-app-check",[X4]:"fire-app-check-compat",[Z4]:"fire-auth",[eM]:"fire-auth-compat",[tM]:"fire-rtdb",[nM]:"fire-rtdb-compat",[rM]:"fire-fn",[iM]:"fire-fn-compat",[sM]:"fire-iid",[oM]:"fire-iid-compat",[aM]:"fire-fcm",[lM]:"fire-fcm-compat",[uM]:"fire-perf",[cM]:"fire-perf-compat",[hM]:"fire-rc",[dM]:"fire-rc-compat",[fM]:"fire-gcs",[pM]:"fire-gcs-compat",[mM]:"fire-fst",[yM]:"fire-fst-compat",[gM]:"fire-vertex","fire-js":"fire-js",[vM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map,EM=new Map,cm=new Map;function N1(t,e){try{t.container.addComponent(e)}catch(n){zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(cm.has(e))return zi.debug(`There were multiple attempts to register component ${e}.`),!1;cm.set(e,t);for(const n of zc.values())N1(n,t);for(const n of EM.values())N1(n,t);return!0}function vo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Uh("app","Firebase",TM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=_M;function iI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:um,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=qS()),!n)throw Gr.create("no-options");const s=zc.get(i);if(s){if(Uc(n,s.options)&&Uc(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new b4(i);for(const u of cm.values())o.addComponent(u);const a=new CM(n,r,o);return zc.set(i,a),a}function fy(t=um){const e=zc.get(t);if(!e&&t===um&&qS())return iI();if(!e)throw Gr.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let i=(r=wM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zi.warn(a.join(" "));return}hr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM="firebase-heartbeat-database",IM=1,sl="firebase-heartbeat-store";let Sf=null;function sI(){return Sf||(Sf=nI(SM,IM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Sf}async function xM(t){try{const n=(await sI()).transaction(sl),r=await n.objectStore(sl).get(oI(t));return await n.done,r}catch(e){if(e instanceof ci)zi.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zi.warn(n.message)}}}async function O1(t,e){try{const r=(await sI()).transaction(sl,"readwrite");await r.objectStore(sl).put(e,oI(t)),await r.done}catch(n){if(n instanceof ci)zi.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zi.warn(r.message)}}}function oI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=1024,PM=30*24*60*60*1e3;class kM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=D1();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=PM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=D1(),{heartbeatsToSend:r,unsentEntries:i}=RM(this._heartbeatsCache.heartbeats),s=Vc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function D1(){return new Date().toISOString().substring(0,10)}function RM(t,e=AM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),M1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XS()?JS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function M1(t){return Vc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){hr(new Fn("platform-logger",e=>new q4(e),"PRIVATE")),hr(new Fn("heartbeat",e=>new kM(e),"PRIVATE")),ln(lm,b1,t),ln(lm,b1,"esm2017"),ln("fire-js","")}NM("");var OM="firebase",DM="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(OM,DM,"app");const aI="@firebase/installations",py="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=1e4,uI=`w:${py}`,cI="FIS_v2",MM="https://firebaseinstallations.googleapis.com/v1",LM=60*60*1e3,FM="installations",VM="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bi=new Uh(FM,VM,jM);function hI(t){return t instanceof ci&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI({projectId:t}){return`${MM}/projects/${t}/installations`}function fI(t){return{token:t.token,requestStatus:2,expiresIn:zM(t.expiresIn),creationTime:Date.now()}}async function pI(t,e){const r=(await e.json()).error;return Bi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function UM(t,{refreshToken:e}){const n=mI(t);return n.append("Authorization",BM(e)),n}async function gI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function zM(t){return Number(t.replace("s","000"))}function BM(t){return`${cI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $M({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dI(t),i=mI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:cI,appId:t.appId,sdkVersion:uI},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await gI(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:fI(c.authToken)}}else throw await pI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=/^[cdef][\w-]{21}$/,hm="";function qM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=GM(t);return WM.test(n)?n:hm}catch{return hm}}function GM(t){return HM(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Map;function _I(t,e){const n=Hh(t);wI(n,e),KM(n,e)}function wI(t,e){const n=vI.get(t);if(n)for(const r of n)r(e)}function KM(t,e){const n=QM();n&&n.postMessage({key:t,fid:e}),YM()}let Ii=null;function QM(){return!Ii&&"BroadcastChannel"in self&&(Ii=new BroadcastChannel("[Firebase] FID Change"),Ii.onmessage=t=>{wI(t.data.key,t.data.fid)}),Ii}function YM(){vI.size===0&&Ii&&(Ii.close(),Ii=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM="firebase-installations-database",JM=1,$i="firebase-installations-store";let If=null;function my(){return If||(If=nI(XM,JM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}})),If}async function Bc(t,e){const n=Hh(t),i=(await my()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&_I(t,e.fid),e}async function EI(t){const e=Hh(t),r=(await my()).transaction($i,"readwrite");await r.objectStore($i).delete(e),await r.done}async function Wh(t,e){const n=Hh(t),i=(await my()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&_I(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t){let e;const n=await Wh(t.appConfig,r=>{const i=ZM(r),s=eL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===hm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ZM(t){const e=t||{fid:qM(),registrationStatus:0};return TI(e)}function eL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Bi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nL(t)}:{installationEntry:e}}async function tL(t,e){try{const n=await $M(t,e);return Bc(t.appConfig,n)}catch(n){throw hI(n)&&n.customData.serverCode===409?await EI(t.appConfig):await Bc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nL(t){let e=await L1(t.appConfig);for(;e.registrationStatus===1;)await yI(100),e=await L1(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gy(t);return r||n}return e}function L1(t){return Wh(t,e=>{if(!e)throw Bi.create("installation-not-found");return TI(e)})}function TI(t){return rL(t)?{fid:t.fid,registrationStatus:0}:t}function rL(t){return t.registrationStatus===1&&t.registrationTime+lI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iL({appConfig:t,heartbeatServiceProvider:e},n){const r=sL(t,n),i=UM(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:uI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await gI(()=>fetch(r,a));if(u.ok){const c=await u.json();return fI(c)}else throw await pI("Generate Auth Token",u)}function sL(t,{fid:e}){return`${dI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(t,e=!1){let n;const r=await Wh(t.appConfig,s=>{if(!CI(s))throw Bi.create("not-registered");const o=s.authToken;if(!e&&lL(o))return s;if(o.requestStatus===1)return n=oL(t,e),s;{if(!navigator.onLine)throw Bi.create("app-offline");const a=cL(s);return n=aL(t,a),a}});return n?await n:r.authToken}async function oL(t,e){let n=await F1(t.appConfig);for(;n.authToken.requestStatus===1;)await yI(100),n=await F1(t.appConfig);const r=n.authToken;return r.requestStatus===0?yy(t,e):r}function F1(t){return Wh(t,e=>{if(!CI(e))throw Bi.create("not-registered");const n=e.authToken;return hL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aL(t,e){try{const n=await iL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bc(t.appConfig,r),n}catch(n){if(hI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await EI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bc(t.appConfig,r)}throw n}}function CI(t){return t!==void 0&&t.registrationStatus===2}function lL(t){return t.requestStatus===2&&!uL(t)}function uL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+LM}function cL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hL(t){return t.requestStatus===1&&t.requestTime+lI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(t){const e=t,{installationEntry:n,registrationPromise:r}=await gy(e);return r?r.catch(console.error):yy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(t,e=!1){const n=t;return await pL(n),(await yy(n,e)).token}async function pL(t){const{registrationPromise:e}=await gy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t){if(!t||!t.options)throw xf("App Configuration");if(!t.name)throw xf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xf(t){return Bi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="installations",gL="installations-internal",yL=t=>{const e=t.getProvider("app").getImmediate(),n=mL(e),r=vo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vL=t=>{const e=t.getProvider("app").getImmediate(),n=vo(e,SI).getImmediate();return{getId:()=>dL(n),getToken:i=>fL(n,i)}};function _L(){hr(new Fn(SI,yL,"PUBLIC")),hr(new Fn(gL,vL,"PRIVATE"))}_L();ln(aI,py);ln(aI,py,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="analytics",wL="firebase_id",EL="origin",TL=60*1e3,CL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new $h("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new Uh("analytics","Analytics",SL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){if(!t.startsWith(vy)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return Bt.warn(e.message),""}return t}function II(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function AL(t,e){const n=xL("firebase-js-sdk-policy",{createScriptURL:IL}),r=document.createElement("script"),i=`${vy}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function PL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function kL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await II(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){Bt.error(a)}t("config",i,s)}async function RL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await II(n);for(const u of o){const c=a.find(f=>f.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Bt.error(s)}}function bL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await RL(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await kL(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Bt.error(a)}}return i}function NL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=bL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function OL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vy)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=30,ML=1e3;class LL{constructor(e={},n=ML){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xI=new LL;function FL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function VL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:FL(r)},s=CL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function jL(t,e=xI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Qt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new BL;return setTimeout(async()=>{a.abort()},n!==void 0?n:TL),AI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function AI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=xI){var s;const{appId:o,measurementId:a}=t;try{await UL(r,e)}catch(u){if(a)return Bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await VL(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!zL(c)){if(i.deleteThrottleMetadata(o),a)return Bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?A1(n,i.intervalMillis,DL):A1(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),Bt.debug(`Calling attemptFetch again in ${h} millis`),AI(t,f,r,i)}}function UL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zL(t){if(!(t instanceof ci)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class BL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $L(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HL(){if(XS())try{await JS()}catch(t){return Bt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Bt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WL(t,e,n,r,i,s,o){var a;const u=jL(t);u.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Bt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Bt.error(y)),e.push(u);const c=HL().then(y=>{if(y)return r.getId()}),[h,f]=await Promise.all([u,c]);OL(s)||AL(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[EL]="firebase",m.update=!0,f!=null&&(m[wL]=f),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.app=e}_delete(){return delete Ia[this.app.options.appId],Promise.resolve()}}let Ia={},V1=[];const j1={};let Af="dataLayer",GL="gtag",U1,PI,z1=!1;function KL(){const t=[];if(d4()&&t.push("This is a browser extension environment."),m4()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});Bt.warn(n.message)}}function QL(t,e,n){KL();const r=t.options.appId;if(!r)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Ia[r]!=null)throw Qt.create("already-exists",{id:r});if(!z1){PL(Af);const{wrappedGtag:s,gtagCore:o}=NL(Ia,V1,j1,Af,GL);PI=s,U1=o,z1=!0}return Ia[r]=WL(t,V1,j1,e,U1,Af,n),new qL(t)}function YL(t=fy()){t=gr(t);const e=vo(t,$c);return e.isInitialized()?e.getImmediate():XL(t)}function XL(t,e={}){const n=vo(t,$c);if(n.isInitialized()){const i=n.getImmediate();if(Uc(e,n.getOptions()))return i;throw Qt.create("already-initialized")}return n.initialize({options:e})}function JL(t,e,n,r){t=gr(t),$L(PI,Ia[t.app.options.appId],e,n,r).catch(i=>Bt.error(i))}const B1="@firebase/analytics",$1="0.10.4";function ZL(){hr(new Fn($c,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return QL(r,i,n)},"PUBLIC")),hr(new Fn("analytics-internal",t,"PRIVATE")),ln(B1,$1),ln(B1,$1,"esm2017");function t(e){try{const n=e.getProvider($c).getImmediate();return{logEvent:(r,i,s)=>JL(n,r,i,s)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}ZL();const H1="@firebase/database",W1="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kI="";function eF(t){kI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:il(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tF(e)}}catch{}return new nF},xi=RI("localStorage"),dm=RI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new $h("@firebase/database"),rF=function(){let t=1;return function(){return t++}}(),bI=function(t){const e=C4(t),n=new T4;n.update(e);const r=n.digest();return cy.encodeByteArray(r)},Rl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rl.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let Ri=null,q1=!0;const iF=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ms.logLevel=le.VERBOSE,Ri=Ms.log.bind(Ms),e&&dm.set("logging_enabled",!0)):typeof t=="function"?Ri=t:(Ri=null,dm.remove("logging_enabled"))},dt=function(...t){if(q1===!0&&(q1=!1,Ri===null&&dm.get("logging_enabled")===!0&&iF(!0)),Ri){const e=Rl.apply(null,t);Ri(e)}},bl=function(t){return function(...e){dt(t,...e)}},fm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rl(...t);Ms.error(e)},dr=function(...t){const e=`FIREBASE FATAL ERROR: ${Rl(...t)}`;throw Ms.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+Rl(...t);Ms.warn(e)},sF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_y=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},oF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xs="[MIN_NAME]",Hi="[MAX_NAME]",es=function(t,e){if(t===e)return 0;if(t===Xs||e===Hi)return-1;if(e===Xs||t===Hi)return 1;{const n=G1(t),r=G1(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},aF=function(t,e){return t===e?0:t<e?-1:1},Qo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},wy=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=wy(t[e[r]]);return n+="}",n},NI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const OI=function(t){z(!_y(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(h.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},lF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const hF=new RegExp("^-?(0*)\\d{1,10}$"),dF=-2147483648,fF=2147483647,G1=function(t){if(hF.test(t)){const e=Number(t);if(e>=dF&&e<=fF)return e}return null},_o=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},pF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class Ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="5",DI="v",MI="s",LI="r",FI="f",VI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jI="ls",UI="p",pm="ac",zI="websocket",BI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function HI(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===zI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===BI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yF(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(){this.counters_={}}incrementCounter(e,n=1){zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return i4(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={},kf={};function Ty(t){const e=t.toString();return Pf[e]||(Pf[e]=new vF),Pf[e]}function _F(t,e){const n=t.toString();return kf[n]||(kf[n]=e()),kf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&_o(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="start",EF="close",TF="pLPCommand",CF="pRTLPCB",WI="id",qI="pw",GI="ser",SF="cb",IF="seg",xF="ts",AF="d",PF="dframe",KI=1870,QI=30,kF=KI-QI,RF=25e3,bF=3e4;class As{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bl(e),this.stats_=Ty(n),this.urlFn=u=>(this.appCheckToken&&(u[pm]=this.appCheckToken),HI(n,BI,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bF)),oF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cy((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===K1)this.id=a,this.password=u;else if(o===EF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[K1]="t",r[GI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[SF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[DI]=Ey,this.transportSessionId&&(r[MI]=this.transportSessionId),this.lastSessionId&&(r[jI]=this.lastSessionId),this.applicationId&&(r[UI]=this.applicationId),this.appCheckToken&&(r[pm]=this.appCheckToken),typeof location<"u"&&location.hostname&&VI.test(location.hostname)&&(r[LI]=FI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){As.forceAllow_=!0}static forceDisallow(){As.forceDisallow_=!0}static isAvailable(){return As.forceAllow_?!0:!As.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lF()&&!uF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$S(n),i=NI(r,kF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[PF]="t",r[WI]=e,r[qI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rF(),window[TF+this.uniqueCallbackIdentifier]=e,window[CF+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[WI]=this.myID,e[qI]=this.myPW,e[GI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+QI+r.length<=KI;){const o=this.pendingSegs.shift();r=r+"&"+IF+i+"="+o.seg+"&"+xF+i+"="+o.ts+"&"+AF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(RF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF=16384,OF=45e3;let Hc=null;typeof MozWebSocket<"u"?Hc=MozWebSocket:typeof WebSocket<"u"&&(Hc=WebSocket);class _n{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bl(this.connId),this.stats_=Ty(n),this.connURL=_n.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[DI]=Ey,typeof location<"u"&&location.hostname&&VI.test(location.hostname)&&(o[LI]=FI),n&&(o[MI]=n),r&&(o[jI]=r),i&&(o[pm]=i),s&&(o[UI]=s),HI(e,zI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xi.set("previous_websocket_failure",!0);try{let r;YS(),this.mySock=new Hc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Hc!==null&&!_n.forceDisallow_}static previouslyFailed(){return xi.isInMemoryStorage||xi.get("previous_websocket_failure")===!0}markConnectionHealthy(){xi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=il(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=NI(n,NF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_n.responsesRequiredToBeHealthy=2;_n.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[As,_n]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_n&&_n.isAvailable();let r=n&&!_n.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_n];else{const i=this.transports_=[];for(const s of ol.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ol.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ol.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF=6e4,MF=5e3,LF=10*1024,FF=100*1024,Rf="t",Q1="d",VF="s",Y1="r",jF="e",X1="o",J1="a",Z1="n",ew="p",UF="h";class zF{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bl("c:"+this.id+":"),this.transportManager_=new ol(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rf in e){const n=e[Rf];n===J1?this.upgradeIfSecondaryHealthy_():n===Y1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===X1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qo("t",e),r=Qo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ew,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:J1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Z1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qo("t",e),r=Qo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qo(Rf,e);if(Q1 in e){const r=e[Q1];if(n===UF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Z1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VF?this.onConnectionShutdown_(r):n===Y1?this.onReset_(r):n===jF?fm("Server Error: "+r):n===X1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ey!==r&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),xa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ew,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends XI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!QS()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wc}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=32,nw=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ye("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ti(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function Sy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function BF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function al(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function JI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ye(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Nt(t,e){const n=ne(t),r=ne(e);if(n===null)return e;if(n===r)return Nt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $F(t,e){const n=al(t,0),r=al(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=es(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Iy(t,e){if(ti(t)!==ti(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function sn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ti(t)>ti(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class HF{constructor(e,n){this.errorPrefix_=n,this.parts_=al(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Bh(this.parts_[r]);ZI(this)}}function WF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bh(e),ZI(t)}function qF(t){const e=t.parts_.pop();t.byteLength_-=Bh(e),t.parts_.length>0&&(t.byteLength_-=1)}function ZI(t){if(t.byteLength_>nw)throw new Error(t.errorPrefix_+"has a key path longer than "+nw+" bytes ("+t.byteLength_+").");if(t.parts_.length>tw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tw+") or object contains a cycle "+vi(t))}function vi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy extends XI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xy}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=1e3,GF=60*5*1e3,rw=30*1e3,KF=1.3,QF=3e4,YF="server_kill",iw=3;class rr extends YI{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=rr.nextPersistentConnectionId_++,this.log_=bl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yo,this.maxReconnectDelay_=GF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!YS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ze(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new kl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;rr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zn(e,"w")){const r=Ys(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||w4(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_4(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fm("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QF&&(this.reconnectDelay_=Yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new zF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Dt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(YF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Dt(f),u())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],I1(this.interruptReasons_)&&(this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>wy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=iw&&(this.reconnectDelay_=rw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=iw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kI.replace(/\./g,"-")]=1,QS()?e["framework.cordova"]=1:f4()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wc.getInstance().currentlyOnline();return I1(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(Xs,e),i=new re(Xs,n);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;class ex extends qh{static get __EMPTY_NODE(){return Ru}static set __EMPTY_NODE(e){Ru=e}compare(e,n){return es(e.name,n.name)}isDefinedOn(e){throw yo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Hi,Ru)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Ru)}toString(){return".key"}}const Fs=new ex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},qt=class la{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??la.RED,this.left=i??On.EMPTY_NODE,this.right=s??On.EMPTY_NODE}copy(e,n,r,i,s){return new la(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return On.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return On.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,la.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,la.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};qt.RED=!0;qt.BLACK=!1;class XF{copy(e,n,r,i,s){return this}insert(e,n,r){return new qt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let On=class tc{constructor(e,n=tc.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tc(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(e){return new tc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bu(this.root_,null,this.comparator_,!0,e)}};On.EMPTY_NODE=new XF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JF(t,e){return es(t.name,e.name)}function Ay(t,e){return es(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mm;function ZF(t){mm=t}const tx=function(t){return typeof t=="number"?"number:"+OI(t):"string:"+t},nx=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zn(e,".sv"),"Priority must be a string or number.")}else z(t===mm||t.isEmpty(),"priority of unexpected type.");z(t===mm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sw;class it{constructor(e,n=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nx(this.priorityNode_)}static set __childrenNodeConstructor(e){sw=e}static get __childrenNodeConstructor(){return sw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ne(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ne(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||ti(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=OI(this.value_):e+=this.value_,this.lazyHash_=bI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=it.VALUE_TYPE_ORDER.indexOf(n),s=it.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rx,ix;function e3(t){rx=t}function t3(t){ix=t}class n3 extends qh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?es(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Hi,new it("[PRIORITY-POST]",ix))}makePost(e,n){const r=rx(e);return new re(n,new it("[PRIORITY-POST]",r))}toString(){return".priority"}}const ze=new n3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3=Math.log(2);class i3{constructor(e){const n=s=>parseInt(Math.log(s)/r3,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qc=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,m;if(h===0)return null;if(h===1)return f=t[u],m=n?n(f):f,new qt(m,f.node,qt.BLACK,null,null);{const y=parseInt(h/2,10)+u,v=i(u,y),C=i(y+1,c);return f=t[y],m=n?n(f):f,new qt(m,f.node,qt.BLACK,v,C)}},s=function(u){let c=null,h=null,f=t.length;const m=function(v,C){const R=f-v,T=f;f-=v;const w=i(R+1,T),x=t[R],O=n?n(x):x;y(new qt(O,x.node,C,null,w))},y=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<u.count;++v){const C=u.nextBitIsOne(),R=Math.pow(2,u.count-(v+1));C?m(R,qt.BLACK):(m(R,qt.BLACK),m(R,qt.RED))}return h},o=new i3(t.length),a=s(o);return new On(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;const as={};class er{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(as&&ze,"ChildrenNode.ts has not been loaded"),bf=bf||new er({".priority":as},{".priority":ze}),bf}get(e){const n=Ys(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof On?n:null}hasIndex(e){return zn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==Fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qc(r,e.getCompare()):a=as;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new er(h,c)}addToIndexes(e,n){const r=jc(this.indexes_,(i,s)=>{const o=Ys(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===as)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(re.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),qc(a,o.getCompare())}else return as;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new re(e.name,a))),u.insert(e,e.node)}});return new er(r,this.indexSet_)}removeFromIndexes(e,n){const r=jc(this.indexes_,i=>{if(i===as)return i;{const s=n.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new er(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nx(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xo||(Xo=new X(new On(Ay),null,er.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xo}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xo:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Xo:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ne(e);if(r===null)return n;{z(ne(e)!==".priority"||ti(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ze,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tx(this.getPriority().val())+":"),this.forEachChild(ze,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nl?-1:0}withIndex(e){if(e===Fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ze),i=n.getIterator(ze);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fs?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class s3 extends X{constructor(){super(new On(Ay),X.EMPTY_NODE,er.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Nl=new s3;Object.defineProperties(re,{MIN:{value:new re(Xs,X.EMPTY_NODE)},MAX:{value:new re(Hi,Nl)}});ex.__EMPTY_NODE=X.EMPTY_NODE;it.__childrenNodeConstructor=X;ZF(Nl);t3(Nl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3=!0;function Je(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new it(n,Je(e))}if(!(t instanceof Array)&&o3){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Je(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new re(o,u)))}}),n.length===0)return X.EMPTY_NODE;const s=qc(n,JF,o=>o.name,Ay);if(r){const o=qc(n,ze.getCompare());return new X(s,Je(e),new er({".priority":o},{".priority":ze}))}else return new X(s,Je(e),er.Default)}else{let n=X.EMPTY_NODE;return gt(t,(r,i)=>{if(zn(t,r)&&r.substring(0,1)!=="."){const s=Je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Je(e))}}e3(Je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3 extends qh{constructor(e){super(),this.indexPath_=e,z(!se(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?es(e.name,n.name):s}makePost(e,n){const r=Je(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Nl);return new re(Hi,e)}toString(){return al(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3 extends qh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?es(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=Je(e);return new re(n,r)}toString(){return".value"}}const u3=new l3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){return{type:"value",snapshotNode:t}}function Js(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ll(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ul(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function c3(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ll(n,a)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Js(n,r)):o.trackChildChange(ul(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,s)=>{n.hasChild(i)||r.trackChildChange(ll(i,s))}),n.isLeafNode()||n.forEachChild(ze,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ul(i,s,o))}else r.trackChildChange(Js(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.indexedFilter_=new Py(e.getIndex()),this.index_=e.getIndex(),this.startPost_=cl.getStartPost_(e),this.endPost_=cl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new re(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(ze,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new cl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new re(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;z(a.numChildren()===this.limit_,"");const u=new re(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,u);if(h&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ul(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ll(n,f));const C=a.updateImmediateChild(n,X.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Js(m.name,m.node)),C.updateImmediateChild(m.name,m.node)):C}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(ll(c.name,c.node)),s.trackChildChange(Js(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xs}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new ky;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function d3(t){return t.loadsAllData()?new Py(t.getIndex()):t.hasLimit()?new h3(t):new cl(t)}function ow(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ze?n="$priority":t.index_===u3?n="$value":t.index_===Fs?n="$key":(z(t.index_ instanceof a3,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function aw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ze&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends YI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Gc.getListenId_(e,r),a={};this.listens_[o]=a;const u=ow(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Ys(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Gc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ow(e._queryParams),r=e._path.toString(),i=new kl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+E4(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=il(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return{value:null,children:new Map}}function ox(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ne(e);t.children.has(r)||t.children.set(r,Kc());const i=t.children.get(r);e=Ee(e),ox(i,e,n)}}function gm(t,e,n){t.value!==null?n(e,t.value):p3(t,(r,i)=>{const s=new ye(e.toString()+"/"+r);gm(i,s,n)})}function p3(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=10*1e3,g3=30*1e3,y3=5*60*1e3;class v3{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new m3(e);const r=lw+(g3-lw)*Math.random();xa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&zn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),xa(this.reportStats_.bind(this),Math.floor(Math.random()*2*y3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function Ry(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function by(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ny(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=En.ACK_USER_WRITE,this.source=Ry()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Qc(pe(),n,this.revert)}}else return z(ne(this.path)===e,"operationForChild called for unrelated child."),new Qc(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.source=e,this.path=n,this.type=En.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new hl(this.source,pe()):new hl(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=En.OVERWRITE}operationForChild(e){return se(this.path)?new Wi(this.source,pe(),this.snap.getImmediateChild(e)):new Wi(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=En.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new Wi(this.source,pe(),n.value):new Zs(this.source,pe(),n)}else return z(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zs(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function w3(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(c3(o.childName,o.snapshotNode))}),Jo(t,i,"child_removed",e,r,n),Jo(t,i,"child_added",e,r,n),Jo(t,i,"child_moved",s,r,n),Jo(t,i,"child_changed",e,r,n),Jo(t,i,"value",e,r,n),i}function Jo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>T3(t,a,u)),o.forEach(a=>{const u=E3(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function E3(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function T3(t,e,n){if(e.childName==null||n.childName==null)throw yo("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){return{eventCache:t,serverCache:e}}function Aa(t,e,n,r){return Gh(new ni(e,n,r),t.serverCache)}function ax(t,e,n,r){return Gh(t.eventCache,new ni(e,n,r))}function Yc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nf;const C3=()=>(Nf||(Nf=new On(aF)),Nf);class we{constructor(e,n=C3()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return gt(e,(r,i)=>{n=n.set(new ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(se(e))return null;{const r=ne(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ee(e),n);return s!=null?{path:Ue(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ne(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new we(null)}}set(e,n){if(se(e))return new we(n,this.children);{const r=ne(e),s=(this.children.get(r)||new we(null)).set(Ee(e),n),o=this.children.insert(r,s);return new we(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ne(e),r=this.children.get(n);if(r){const i=r.remove(Ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new we(null):new we(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=ne(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(se(e))return n;{const r=ne(e),s=(this.children.get(r)||new we(null)).setTree(Ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new we(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=ne(e),o=this.children.get(s);return o?o.findOnPath_(Ee(e),Ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=ne(e),s=this.children.get(i);return s?s.foreachOnPath_(Ee(e),Ue(n,i),r):new we(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.writeTree_=e}static empty(){return new Sn(new we(null))}}function Pa(t,e,n){if(se(e))return new Sn(new we(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Nt(i,e);return s=s.updateChild(o,n),new Sn(t.writeTree_.set(i,s))}else{const i=new we(n),s=t.writeTree_.setTree(e,i);return new Sn(s)}}}function ym(t,e,n){let r=t;return gt(n,(i,s)=>{r=Pa(r,Ue(e,i),s)}),r}function uw(t,e){if(se(e))return Sn.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Sn(n)}}function vm(t,e){return ts(t,e)!=null}function ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Nt(n.path,e)):null}function cw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(r,i)=>{e.push(new re(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function Kr(t,e){if(se(e))return t;{const n=ts(t,e);return n!=null?new Sn(new we(n)):new Sn(t.writeTree_.subtree(e))}}function _m(t){return t.writeTree_.isEmpty()}function eo(t,e){return lx(pe(),t.writeTree_,e)}function lx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=lx(Ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e){return dx(e,t)}function S3(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Pa(t.visibleWrites,e,n)),t.lastWriteId=r}function I3(t,e,n,r){z(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ym(t.visibleWrites,e,n),t.lastWriteId=r}function x3(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function A3(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&P3(a,r.path)?i=!1:sn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return k3(t),!0;if(r.snap)t.visibleWrites=uw(t.visibleWrites,r.path);else{const a=r.children;gt(a,u=>{t.visibleWrites=uw(t.visibleWrites,Ue(r.path,u))})}return!0}else return!1}function P3(t,e){if(t.snap)return sn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&sn(Ue(t.path,n),e))return!0;return!1}function k3(t){t.visibleWrites=ux(t.allWrites,R3,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function R3(t){return t.visible}function ux(t,e,n){let r=Sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)sn(n,o)?(a=Nt(n,o),r=Pa(r,a,s.snap)):sn(o,n)&&(a=Nt(o,n),r=Pa(r,pe(),s.snap.getChild(a)));else if(s.children){if(sn(n,o))a=Nt(n,o),r=ym(r,a,s.children);else if(sn(o,n))if(a=Nt(o,n),se(a))r=ym(r,pe(),s.children);else{const u=Ys(s.children,ne(a));if(u){const c=u.getChild(Ee(a));r=Pa(r,pe(),c)}}}else throw yo("WriteRecord should have .snap or .children")}}return r}function cx(t,e,n,r,i){if(!r&&!i){const s=ts(t.visibleWrites,e);if(s!=null)return s;{const o=Kr(t.visibleWrites,e);if(_m(o))return n;if(n==null&&!vm(o,pe()))return null;{const a=n||X.EMPTY_NODE;return eo(o,a)}}}else{const s=Kr(t.visibleWrites,e);if(!i&&_m(s))return n;if(!i&&n==null&&!vm(s,pe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(sn(c.path,e)||sn(e,c.path))},a=ux(t.allWrites,o,e),u=n||X.EMPTY_NODE;return eo(a,u)}}}function b3(t,e,n){let r=X.EMPTY_NODE;const i=ts(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Kr(t.visibleWrites,e);return n.forEachChild(ze,(o,a)=>{const u=eo(Kr(s,new ye(o)),a);r=r.updateImmediateChild(o,u)}),cw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Kr(t.visibleWrites,e);return cw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function N3(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ue(e,n);if(vm(t.visibleWrites,s))return null;{const o=Kr(t.visibleWrites,s);return _m(o)?i.getChild(n):eo(o,i.getChild(n))}}function O3(t,e,n,r){const i=Ue(e,n),s=ts(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Kr(t.visibleWrites,i);return eo(o,r.getNode().getImmediateChild(n))}else return null}function D3(t,e){return ts(t.visibleWrites,e)}function M3(t,e,n,r,i,s,o){let a;const u=Kr(t.visibleWrites,e),c=ts(u,pe());if(c!=null)a=c;else if(n!=null)a=eo(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&h.length<i;)f(y,r)!==0&&h.push(y),y=m.getNext();return h}else return[]}function L3(){return{visibleWrites:Sn.empty(),allWrites:[],lastWriteId:-1}}function Xc(t,e,n,r){return cx(t.writeTree,t.treePath,e,n,r)}function Oy(t,e){return b3(t.writeTree,t.treePath,e)}function hw(t,e,n,r){return N3(t.writeTree,t.treePath,e,n,r)}function Jc(t,e){return D3(t.writeTree,Ue(t.treePath,e))}function F3(t,e,n,r,i,s){return M3(t.writeTree,t.treePath,e,n,r,i,s)}function Dy(t,e,n){return O3(t.writeTree,t.treePath,e,n)}function hx(t,e){return dx(Ue(t.treePath,e),t.writeTree)}function dx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ul(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ll(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Js(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ul(r,e.snapshotNode,i.oldSnap));else throw yo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fx=new j3;class My{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ni(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qi(this.viewCache_),s=F3(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(t){return{filter:t}}function z3(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function B3(t,e,n,r,i){const s=new V3;let o,a;if(n.type===En.OVERWRITE){const c=n;c.source.fromUser?o=wm(t,e,c.path,c.snap,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=Zc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===En.MERGE){const c=n;c.source.fromUser?o=H3(t,e,c.path,c.children,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Em(t,e,c.path,c.children,r,i,a,s))}else if(n.type===En.ACK_USER_WRITE){const c=n;c.revert?o=G3(t,e,c.path,r,i,s):o=W3(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===En.LISTEN_COMPLETE)o=q3(t,e,n.path,r,s);else throw yo("Unknown operation type: "+n.type);const u=s.getChanges();return $3(e,o,u),{viewCache:o,changes:u}}function $3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sx(Yc(e)))}}function px(t,e,n,r,i,s){const o=e.eventCache;if(Jc(r,n)!=null)return e;{let a,u;if(se(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qi(e),h=c instanceof X?c:X.EMPTY_NODE,f=Oy(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Xc(r,qi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ne(n);if(c===".priority"){z(ti(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=hw(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ee(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=hw(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=Dy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Aa(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Zc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),y,null)}else{const y=ne(n);if(!u.isCompleteForPath(n)&&ti(n)>1)return e;const v=Ee(n),R=u.getNode().getImmediateChild(y).updateChild(v,r);y===".priority"?c=h.updatePriority(u.getNode(),R):c=h.updateChild(u.getNode(),y,R,v,fx,null)}const f=ax(e,c,u.isFullyInitialized()||se(n),h.filtersNodes()),m=new My(i,f,s);return px(t,f,n,i,m,a)}function wm(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new My(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Aa(e,c,!0,t.filter.filtersNodes());else{const f=ne(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Aa(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ee(n),y=a.getNode().getImmediateChild(f);let v;if(se(m))v=r;else{const C=h.getCompleteChild(f);C!=null?Sy(m)===".priority"&&C.getChild(JI(m)).isEmpty()?v=C:v=C.updateChild(m,r):v=X.EMPTY_NODE}if(y.equals(v))u=e;else{const C=t.filter.updateChild(a.getNode(),f,v,m,h,o);u=Aa(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function dw(t,e){return t.eventCache.isCompleteForChild(e)}function H3(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Ue(n,u);dw(e,ne(h))&&(a=wm(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Ue(n,u);dw(e,ne(h))||(a=wm(t,a,h,c,i,s,o))}),a}function fw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Em(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;se(n)?c=r:c=new we(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),v=fw(t,y,m);u=Zc(t,u,new ye(f),v,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!y){const v=e.serverCache.getNode().getImmediateChild(f),C=fw(t,v,m);u=Zc(t,u,new ye(f),C,i,s,o,a)}}),u}function W3(t,e,n,r,i,s,o){if(Jc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Zc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new we(null);return u.getNode().forEachChild(Fs,(h,f)=>{c=c.set(new ye(h),f)}),Em(t,e,n,c,i,s,a,o)}else return e}else{let c=new we(null);return r.foreach((h,f)=>{const m=Ue(n,h);u.isCompleteForPath(m)&&(c=c.set(h,u.getNode().getChild(m)))}),Em(t,e,n,c,i,s,a,o)}}function q3(t,e,n,r,i){const s=e.serverCache,o=ax(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return px(t,o,n,r,fx,i)}function G3(t,e,n,r,i,s){let o;if(Jc(r,n)!=null)return e;{const a=new My(r,e,i),u=e.eventCache.getNode();let c;if(se(n)||ne(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Xc(r,qi(e));else{const f=e.serverCache.getNode();z(f instanceof X,"serverChildren would be complete if leaf node"),h=Oy(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=ne(n);let f=Dy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ee(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,X.EMPTY_NODE,Ee(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xc(r,qi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Jc(r,pe())!=null,Aa(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Py(r.getIndex()),s=d3(r);this.processor_=U3(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new ni(u,o.isFullyInitialized(),i.filtersNodes()),f=new ni(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Gh(f,h),this.eventGenerator_=new _3(this.query_)}get query(){return this.query_}}function Q3(t){return t.viewCache_.serverCache.getNode()}function Y3(t){return Yc(t.viewCache_)}function X3(t,e){const n=qi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function pw(t){return t.eventRegistrations_.length===0}function J3(t,e){t.eventRegistrations_.push(e)}function mw(t,e,n){const r=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function gw(t,e,n,r){e.type===En.MERGE&&e.source.queryId!==null&&(z(qi(t.viewCache_),"We should always have a full cache before handling merges"),z(Yc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=B3(t.processor_,i,e,n,r);return z3(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,mx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Z3(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(s,o)=>{r.push(Js(s,o))}),n.isFullyInitialized()&&r.push(sx(n.getNode())),mx(t,r,n.getNode(),e)}function mx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return w3(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;class gx{constructor(){this.views=new Map}}function eV(t){z(!eh,"__referenceConstructor has already been defined"),eh=t}function tV(){return z(eh,"Reference.ts has not been loaded"),eh}function nV(t){return t.views.size===0}function Ly(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),gw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(gw(o,e,n,r));return s}}function yx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Xc(n,i?r:null),u=!1;a?u=!0:r instanceof X?(a=Oy(n,r),u=!1):(a=X.EMPTY_NODE,u=!1);const c=Gh(new ni(a,u,!1),new ni(r,i,!1));return new K3(e,c)}return o}function rV(t,e,n,r,i,s){const o=yx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),J3(o,n),Z3(o,n)}function iV(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ri(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(mw(c,n,r)),pw(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(mw(u,n,r)),pw(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!ri(t)&&s.push(new(tV())(e._repo,e._path)),{removed:s,events:o}}function vx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qr(t,e){let n=null;for(const r of t.views.values())n=n||X3(r,e);return n}function _x(t,e){if(e._queryParams.loadsAllData())return Qh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function wx(t,e){return _x(t,e)!=null}function ri(t){return Qh(t)!=null}function Qh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th;function sV(t){z(!th,"__referenceConstructor has already been defined"),th=t}function oV(){return z(th,"Reference.ts has not been loaded"),th}let aV=1;class yw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=L3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ex(t,e,n,r,i){return S3(t.pendingWriteTree_,e,n,r,i),i?wo(t,new Wi(Ry(),e,n)):[]}function lV(t,e,n,r){I3(t.pendingWriteTree_,e,n,r);const i=we.fromObject(n);return wo(t,new Zs(Ry(),e,i))}function Dr(t,e,n=!1){const r=x3(t.pendingWriteTree_,e);if(A3(t.pendingWriteTree_,e)){let s=new we(null);return r.snap!=null?s=s.set(pe(),!0):gt(r.children,o=>{s=s.set(new ye(o),!0)}),wo(t,new Qc(r.path,s,n))}else return[]}function Ol(t,e,n){return wo(t,new Wi(by(),e,n))}function uV(t,e,n){const r=we.fromObject(n);return wo(t,new Zs(by(),e,r))}function cV(t,e){return wo(t,new hl(by(),e))}function hV(t,e,n){const r=Vy(t,n);if(r){const i=jy(r),s=i.path,o=i.queryId,a=Nt(s,e),u=new hl(Ny(o),a);return Uy(t,s,u)}else return[]}function nh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||wx(o,e))){const u=iV(o,e,n,r);nV(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,y)=>ri(y));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const y=pV(m);for(let v=0;v<y.length;++v){const C=y[v],R=C.query,T=Ix(t,C);t.listenProvider_.startListening(ka(R),dl(t,R),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(ka(e),null):c.forEach(m=>{const y=t.queryToTagMap.get(Yh(m));t.listenProvider_.stopListening(ka(m),y)}))}mV(t,c)}return a}function Tx(t,e,n,r){const i=Vy(t,r);if(i!=null){const s=jy(i),o=s.path,a=s.queryId,u=Nt(o,e),c=new Wi(Ny(a),u,n);return Uy(t,o,c)}else return[]}function dV(t,e,n,r){const i=Vy(t,r);if(i){const s=jy(i),o=s.path,a=s.queryId,u=Nt(o,e),c=we.fromObject(n),h=new Zs(Ny(a),u,c);return Uy(t,o,h)}else return[]}function Tm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,y)=>{const v=Nt(m,i);s=s||Qr(y,v),o=o||ri(y)});let a=t.syncPointTree_.get(i);a?(o=o||ri(a),s=s||Qr(a,pe())):(a=new gx,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,v)=>{const C=Qr(v,pe());C&&(s=s.updateImmediateChild(y,C))}));const c=wx(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=Yh(e);z(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=gV();t.queryToTagMap.set(m,y),t.tagToQueryMap.set(y,m)}const h=Kh(t.pendingWriteTree_,i);let f=rV(a,e,n,h,s,u);if(!c&&!o&&!r){const m=_x(a,e);f=f.concat(yV(t,e,m))}return f}function Fy(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Nt(o,e),c=Qr(a,u);if(c)return c});return cx(i,e,s,n,!0)}function fV(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Nt(c,n);r=r||Qr(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Qr(i,pe()):(i=new gx,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new ni(r,!0,!1):null,a=Kh(t.pendingWriteTree_,e._path),u=yx(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return Y3(u)}function wo(t,e){return Cx(e,t.syncPointTree_,null,Kh(t.pendingWriteTree_,pe()))}function Cx(t,e,n,r){if(se(t.path))return Sx(t,e,n,r);{const i=e.get(pe());n==null&&i!=null&&(n=Qr(i,pe()));let s=[];const o=ne(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=hx(r,o);s=s.concat(Cx(a,u,c,h))}return i&&(s=s.concat(Ly(i,t,r,n))),s}}function Sx(t,e,n,r){const i=e.get(pe());n==null&&i!=null&&(n=Qr(i,pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=hx(r,o),h=t.operationForChild(o);h&&(s=s.concat(Sx(h,a,u,c)))}),i&&(s=s.concat(Ly(i,t,r,n))),s}function Ix(t,e){const n=e.query,r=dl(t,n);return{hashFn:()=>(Q3(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?hV(t,n._path,r):cV(t,n._path);{const s=cF(i,n);return nh(t,n,null,s)}}}}function dl(t,e){const n=Yh(e);return t.queryToTagMap.get(n)}function Yh(t){return t._path.toString()+"$"+t._queryIdentifier}function Vy(t,e){return t.tagToQueryMap.get(e)}function jy(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function Uy(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=Kh(t.pendingWriteTree_,e);return Ly(r,n,i,null)}function pV(t){return t.fold((e,n,r)=>{if(n&&ri(n))return[Qh(n)];{let i=[];return n&&(i=vx(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function ka(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(oV())(t._repo,t._path):t}function mV(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Yh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function gV(){return aV++}function yV(t,e,n){const r=e._path,i=dl(t,e),s=Ix(t,n),o=t.listenProvider_.startListening(ka(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)z(!ri(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!se(c)&&h&&ri(h))return[Qh(h).query];{let m=[];return h&&(m=m.concat(vx(h).map(y=>y.query))),gt(f,(y,v)=>{m=m.concat(v)}),m}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(ka(h),dl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zy(n)}node(){return this.node_}}class By{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new By(this.syncTree_,n)}node(){return Fy(this.syncTree_,this.path_)}}const vV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vw=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _V(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wV(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_V=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},wV=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xx=function(t,e,n,r){return $y(e,new By(n,t),r)},Ax=function(t,e,n){return $y(t,new zy(e),n)};function $y(t,e,n){const r=t.getPriority().val(),i=vw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=vw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new it(a,Je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new it(i))),o.forEachChild(ze,(a,u)=>{const c=$y(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Wy(t,e){let n=e instanceof ye?e:new ye(e),r=t,i=ne(n);for(;i!==null;){const s=Ys(r.node.children,i)||{children:{},childCount:0};r=new Hy(i,r,s),n=Ee(n),i=ne(n)}return r}function Eo(t){return t.node.value}function Px(t,e){t.node.value=e,Cm(t)}function kx(t){return t.node.childCount>0}function EV(t){return Eo(t)===void 0&&!kx(t)}function Xh(t,e){gt(t.node.children,(n,r)=>{e(new Hy(n,t,r))})}function Rx(t,e,n,r){n&&!r&&e(t),Xh(t,i=>{Rx(i,e,!0,r)}),n&&r&&e(t)}function TV(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Dl(t){return new ye(t.parent===null?t.name:Dl(t.parent)+"/"+t.name)}function Cm(t){t.parent!==null&&CV(t.parent,t.name,t)}function CV(t,e,n){const r=EV(n),i=zn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV=/[\[\].#$\/\u0000-\u001F\u007F]/,IV=/[\[\].#$\u0000-\u001F\u007F]/,Of=10*1024*1024,qy=function(t){return typeof t=="string"&&t.length!==0&&!SV.test(t)},bx=function(t){return typeof t=="string"&&t.length!==0&&!IV.test(t)},xV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bx(t)},AV=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!_y(t)||t&&typeof t=="object"&&zn(t,".sv")},PV=function(t,e,n,r){r&&e===void 0||Jh(zh(t,"value"),e,n)},Jh=function(t,e,n){const r=n instanceof ye?new HF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vi(r));if(typeof e=="function")throw new Error(t+"contains a function "+vi(r)+" with contents = "+e.toString());if(_y(e))throw new Error(t+"contains "+e.toString()+" "+vi(r));if(typeof e=="string"&&e.length>Of/3&&Bh(e)>Of)throw new Error(t+"contains a string greater than "+Of+" utf8 bytes "+vi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!qy(o)))throw new Error(t+" contains an invalid key ("+o+") "+vi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WF(r,o),Jh(t,a,r),qF(r)}),i&&s)throw new Error(t+' contains ".value" child '+vi(r)+" in addition to actual children.")}},kV=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=al(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!qy(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($F);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&sn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},RV=function(t,e,n,r){if(r&&e===void 0)return;const i=zh(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];gt(e,(o,a)=>{const u=new ye(o);if(Jh(i,a,Ue(n,u)),Sy(u)===".priority"&&!AV(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),kV(i,s)},Nx=function(t,e,n,r){if(!(r&&n===void 0)&&!bx(n))throw new Error(zh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nx(t,e,n,r)},Ox=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},NV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xV(n))throw new Error(zh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Iy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dx(t,e,n){Zh(t,n),Mx(t,r=>Iy(r,e))}function hn(t,e,n){Zh(t,n),Mx(t,r=>sn(r,e)||sn(e,r))}function Mx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(DV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ri&&dt("event: "+n.toString()),_o(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV="repo_interrupt",LV=25;class FV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kc(),this.transactionQueueTree_=new Hy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VV(t,e,n){if(t.stats_=Ty(t.repoInfo_),t.forceRestClient_||pF())t.server_=new Gc(t.repoInfo_,(r,i,s,o)=>{_w(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ww(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,i,s,o)=>{_w(t,r,i,s,o)},r=>{ww(t,r)},r=>{UV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_F(t.repoInfo_,()=>new v3(t.stats_,t.server_)),t.infoData_=new f3,t.infoSyncTree_=new yw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Ol(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gy(t,"connected",!1),t.serverSyncTree_=new yw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);hn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function jV(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ed(t){return vV({timestamp:jV(t)})}function _w(t,e,n,r,i){t.dataUpdateCount++;const s=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=jc(n,c=>Je(c));o=dV(t.serverSyncTree_,s,u,i)}else{const u=Je(n);o=Tx(t.serverSyncTree_,s,u,i)}else if(r){const u=jc(n,c=>Je(c));o=uV(t.serverSyncTree_,s,u)}else{const u=Je(n);o=Ol(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=to(t,s)),hn(t.eventQueue_,a,o)}function ww(t,e){Gy(t,"connected",e),e===!1&&HV(t)}function UV(t,e){gt(e,(n,r)=>{Gy(t,n,r)})}function Gy(t,e,n){const r=new ye("/.info/"+e),i=Je(n);t.infoData_.updateSnapshot(r,i);const s=Ol(t.infoSyncTree_,r,i);hn(t.eventQueue_,r,s)}function Ky(t){return t.nextWriteId_++}function zV(t,e,n){const r=fV(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Je(i).withIndex(e._queryParams.getIndex());Tm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ol(t.serverSyncTree_,e._path,s);else{const a=dl(t.serverSyncTree_,e);o=Tx(t.serverSyncTree_,e._path,s,a)}return hn(t.eventQueue_,e._path,o),nh(t.serverSyncTree_,e,n,null,!0),s},i=>(Ml(t,"get for query "+Ze(e)+" failed: "+i),Promise.reject(new Error(i))))}function BV(t,e,n,r,i){Ml(t,"set",{path:e.toString(),value:n,priority:r});const s=ed(t),o=Je(n,r),a=Fy(t.serverSyncTree_,e),u=Ax(o,a,s),c=Ky(t),h=Ex(t.serverSyncTree_,e,u,c,!0);Zh(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,y)=>{const v=m==="ok";v||Dt("set at "+e+" failed: "+m);const C=Dr(t.serverSyncTree_,c,!v);hn(t.eventQueue_,e,C),Im(t,i,m,y)});const f=Yy(t,e);to(t,f),hn(t.eventQueue_,f,[])}function $V(t,e,n,r){Ml(t,"update",{path:e.toString(),value:n});let i=!0;const s=ed(t),o={};if(gt(n,(a,u)=>{i=!1,o[a]=xx(Ue(e,a),Je(u),t.serverSyncTree_,s)}),i)dt("update() called with empty data.  Don't do anything."),Im(t,r,"ok",void 0);else{const a=Ky(t),u=lV(t.serverSyncTree_,e,o,a);Zh(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Dt("update at "+e+" failed: "+c);const m=Dr(t.serverSyncTree_,a,!f),y=m.length>0?to(t,e):e;hn(t.eventQueue_,y,m),Im(t,r,c,h)}),gt(n,c=>{const h=Yy(t,Ue(e,c));to(t,h)}),hn(t.eventQueue_,e,[])}}function HV(t){Ml(t,"onDisconnectEvents");const e=ed(t),n=Kc();gm(t.onDisconnect_,pe(),(i,s)=>{const o=xx(i,s,t.serverSyncTree_,e);ox(n,i,o)});let r=[];gm(n,pe(),(i,s)=>{r=r.concat(Ol(t.serverSyncTree_,i,s));const o=Yy(t,i);to(t,o)}),t.onDisconnect_=Kc(),hn(t.eventQueue_,pe(),r)}function WV(t,e,n){let r;ne(e._path)===".info"?r=Tm(t.infoSyncTree_,e,n):r=Tm(t.serverSyncTree_,e,n),Dx(t.eventQueue_,e._path,r)}function Sm(t,e,n){let r;ne(e._path)===".info"?r=nh(t.infoSyncTree_,e,n):r=nh(t.serverSyncTree_,e,n),Dx(t.eventQueue_,e._path,r)}function qV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(MV)}function Ml(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),dt(n,...e)}function Im(t,e,n,r){e&&_o(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Lx(t,e,n){return Fy(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function Qy(t,e=t.transactionQueueTree_){if(e||td(t,e),Eo(e)){const n=Vx(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&GV(t,Dl(e),n)}else kx(e)&&Xh(e,n=>{Qy(t,n)})}function GV(t,e,n){const r=n.map(c=>c.currentWriteId),i=Lx(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Nt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Ml(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Dr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();td(t,Wy(t.transactionQueueTree_,e)),Qy(t,t.transactionQueueTree_),hn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)_o(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Dt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}to(t,e)}},o)}function to(t,e){const n=Fx(t,e),r=Dl(n),i=Vx(t,n);return KV(t,i,r),r}function KV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Nt(n,u.path);let h=!1,f;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(Dr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=LV)h=!0,f="maxretry",i=i.concat(Dr(t.serverSyncTree_,u.currentWriteId,!0));else{const m=Lx(t,u.path,o);u.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){Jh("transaction failed: Data returned ",y,u.path);let v=Je(y);typeof y=="object"&&y!=null&&zn(y,".priority")||(v=v.updatePriority(m.getPriority()));const R=u.currentWriteId,T=ed(t),w=Ax(v,m,T);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=w,u.currentWriteId=Ky(t),o.splice(o.indexOf(R),1),i=i.concat(Ex(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(Dr(t.serverSyncTree_,R,!0))}else h=!0,f="nodata",i=i.concat(Dr(t.serverSyncTree_,u.currentWriteId,!0))}hn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}td(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)_o(r[a]);Qy(t,t.transactionQueueTree_)}function Fx(t,e){let n,r=t.transactionQueueTree_;for(n=ne(e);n!==null&&Eo(r)===void 0;)r=Wy(r,n),e=Ee(e),n=ne(e);return r}function Vx(t,e){const n=[];return jx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jx(t,e,n){const r=Eo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xh(e,i=>{jx(t,i,n)})}function td(t,e){const n=Eo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Px(e,n.length>0?n:void 0)}Xh(e,r=>{td(t,r)})}function Yy(t,e){const n=Dl(Fx(t,e)),r=Wy(t.transactionQueueTree_,e);return TV(r,i=>{Df(t,i)}),Df(t,r),Rx(r,i=>{Df(t,i)}),n}function Df(t,e){const n=Eo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Px(e,void 0):n.length=s+1,hn(t.eventQueue_,Dl(e),i);for(let o=0;o<r.length;o++)_o(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function YV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ew=function(t,e){const n=XV(t),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $I(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ye(n.pathString)}},XV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=QV(t.substring(h,f)));const m=YV(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class zx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:Sy(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=aw(this._queryParams),n=wy(e);return n==="{}"?"default":n}get _queryObject(){return aw(this._queryParams)}isEqual(e){if(e=gr(e),!(e instanceof Jy))return!1;const n=this._repo===e._repo,r=Iy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+BF(this._path)}}class Bn extends Jy{constructor(e,n){super(e,n,new ky,!1)}get parent(){const e=JI(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class no{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=rh(this.ref,e);return new no(this._node.getChild(n),r,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new no(i,rh(this.ref,r),ze)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qn(t,e){return t=gr(t),t._checkNotDeleted("ref"),e!==void 0?rh(t._root,e):t._root}function rh(t,e){return t=gr(t),ne(t._path)===null?bV("child","path",e,!1):Nx("child","path",e,!1),new Bn(t._repo,Ue(t._path,e))}function JV(t){return Ox("remove",t._path),xm(t,null)}function xm(t,e){t=gr(t),Ox("set",t._path),PV("set",e,t._path,!1);const n=new kl;return BV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Tw(t,e){RV("update",e,t._path,!1);const n=new kl;return $V(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Cw(t){t=gr(t);const e=new Xy(()=>{}),n=new Ll(e);return zV(t._repo,t,n).then(r=>new no(r,new Bn(t._repo,t._path),t._queryParams.getIndex()))}class Ll{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Ux("value",this,new no(e.snapshotNode,new Bn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zx(this,e,n):null}matches(e){return e instanceof Ll?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class nd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zx(this,e,n):null}createEvent(e,n){z(e.childName!=null,"Child events should have a childName.");const r=rh(new Bn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ux(e.type,this,new no(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ZV(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const u=n,c=(h,f)=>{Sm(t._repo,t,a),u(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Xy(n,s||void 0),a=e==="value"?new Ll(o):new nd(e,o);return WV(t._repo,t,a),()=>Sm(t._repo,t,a)}function e5(t,e,n,r){return ZV(t,"value",e,n,r)}function t5(t,e,n){let r=null;const i=n?new Xy(n):null;e==="value"?r=new Ll(i):e&&(r=new nd(e,i)),Sm(t._repo,t,r)}eV(Bn);sV(Bn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5="FIREBASE_DATABASE_EMULATOR_HOST",Am={};let r5=!1;function i5(t,e,n,r){t.repoInfo_=new $I(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function s5(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ew(s,i),a=o.repoInfo,u,c;typeof process<"u"&&process.env&&(c=process.env[n5]),c?(u=!0,s=`http://${c}?ns=${a.namespace}`,o=Ew(s,i),a=o.repoInfo):u=!o.repoInfo.secure;const h=i&&u?new Ls(Ls.OWNER):new gF(t.name,t.options,e);NV("Invalid Firebase Database URL",o),se(o.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=a5(a,t,h,new mF(t.name,n));return new l5(f,t)}function o5(t,e){const n=Am[e];(!n||n[t.key]!==t)&&dr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qV(t),delete n[t.key]}function a5(t,e,n,r){let i=Am[e.name];i||(i={},Am[e.name]=i);let s=i[t.toURLString()];return s&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new FV(t,r5,n,r),i[t.toURLString()]=s,s}class l5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(o5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dr("Cannot call "+e+" on a deleted database.")}}function u5(t=fy(),e){const n=vo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=WS("database");r&&c5(n,...r)}return n}function c5(t,e,n,r={}){t=gr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&dr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ls(Ls.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:GS(r.mockUserToken,t.app.options.projectId);s=new Ls(o)}i5(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h5(t){eF(rI),hr(new Fn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return s5(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ln(H1,W1,t),ln(H1,W1,"esm2017")}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};h5();var Sw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi,Bx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function I(){}I.prototype=_.prototype,S.D=_.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(A,k,N){for(var P=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)P[Re-2]=arguments[Re];return _.prototype[k].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,I){I||(I=0);var A=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)A[k]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(k=0;16>k;++k)A[k]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=S.g[0],I=S.g[1],k=S.g[2];var N=S.g[3],P=_+(N^I&(k^N))+A[0]+3614090360&4294967295;_=I+(P<<7&4294967295|P>>>25),P=N+(k^_&(I^k))+A[1]+3905402710&4294967295,N=_+(P<<12&4294967295|P>>>20),P=k+(I^N&(_^I))+A[2]+606105819&4294967295,k=N+(P<<17&4294967295|P>>>15),P=I+(_^k&(N^_))+A[3]+3250441966&4294967295,I=k+(P<<22&4294967295|P>>>10),P=_+(N^I&(k^N))+A[4]+4118548399&4294967295,_=I+(P<<7&4294967295|P>>>25),P=N+(k^_&(I^k))+A[5]+1200080426&4294967295,N=_+(P<<12&4294967295|P>>>20),P=k+(I^N&(_^I))+A[6]+2821735955&4294967295,k=N+(P<<17&4294967295|P>>>15),P=I+(_^k&(N^_))+A[7]+4249261313&4294967295,I=k+(P<<22&4294967295|P>>>10),P=_+(N^I&(k^N))+A[8]+1770035416&4294967295,_=I+(P<<7&4294967295|P>>>25),P=N+(k^_&(I^k))+A[9]+2336552879&4294967295,N=_+(P<<12&4294967295|P>>>20),P=k+(I^N&(_^I))+A[10]+4294925233&4294967295,k=N+(P<<17&4294967295|P>>>15),P=I+(_^k&(N^_))+A[11]+2304563134&4294967295,I=k+(P<<22&4294967295|P>>>10),P=_+(N^I&(k^N))+A[12]+1804603682&4294967295,_=I+(P<<7&4294967295|P>>>25),P=N+(k^_&(I^k))+A[13]+4254626195&4294967295,N=_+(P<<12&4294967295|P>>>20),P=k+(I^N&(_^I))+A[14]+2792965006&4294967295,k=N+(P<<17&4294967295|P>>>15),P=I+(_^k&(N^_))+A[15]+1236535329&4294967295,I=k+(P<<22&4294967295|P>>>10),P=_+(k^N&(I^k))+A[1]+4129170786&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^k&(_^I))+A[6]+3225465664&4294967295,N=_+(P<<9&4294967295|P>>>23),P=k+(_^I&(N^_))+A[11]+643717713&4294967295,k=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(k^N))+A[0]+3921069994&4294967295,I=k+(P<<20&4294967295|P>>>12),P=_+(k^N&(I^k))+A[5]+3593408605&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^k&(_^I))+A[10]+38016083&4294967295,N=_+(P<<9&4294967295|P>>>23),P=k+(_^I&(N^_))+A[15]+3634488961&4294967295,k=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(k^N))+A[4]+3889429448&4294967295,I=k+(P<<20&4294967295|P>>>12),P=_+(k^N&(I^k))+A[9]+568446438&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^k&(_^I))+A[14]+3275163606&4294967295,N=_+(P<<9&4294967295|P>>>23),P=k+(_^I&(N^_))+A[3]+4107603335&4294967295,k=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(k^N))+A[8]+1163531501&4294967295,I=k+(P<<20&4294967295|P>>>12),P=_+(k^N&(I^k))+A[13]+2850285829&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^k&(_^I))+A[2]+4243563512&4294967295,N=_+(P<<9&4294967295|P>>>23),P=k+(_^I&(N^_))+A[7]+1735328473&4294967295,k=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(k^N))+A[12]+2368359562&4294967295,I=k+(P<<20&4294967295|P>>>12),P=_+(I^k^N)+A[5]+4294588738&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^k)+A[8]+2272392833&4294967295,N=_+(P<<11&4294967295|P>>>21),P=k+(N^_^I)+A[11]+1839030562&4294967295,k=N+(P<<16&4294967295|P>>>16),P=I+(k^N^_)+A[14]+4259657740&4294967295,I=k+(P<<23&4294967295|P>>>9),P=_+(I^k^N)+A[1]+2763975236&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^k)+A[4]+1272893353&4294967295,N=_+(P<<11&4294967295|P>>>21),P=k+(N^_^I)+A[7]+4139469664&4294967295,k=N+(P<<16&4294967295|P>>>16),P=I+(k^N^_)+A[10]+3200236656&4294967295,I=k+(P<<23&4294967295|P>>>9),P=_+(I^k^N)+A[13]+681279174&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^k)+A[0]+3936430074&4294967295,N=_+(P<<11&4294967295|P>>>21),P=k+(N^_^I)+A[3]+3572445317&4294967295,k=N+(P<<16&4294967295|P>>>16),P=I+(k^N^_)+A[6]+76029189&4294967295,I=k+(P<<23&4294967295|P>>>9),P=_+(I^k^N)+A[9]+3654602809&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^k)+A[12]+3873151461&4294967295,N=_+(P<<11&4294967295|P>>>21),P=k+(N^_^I)+A[15]+530742520&4294967295,k=N+(P<<16&4294967295|P>>>16),P=I+(k^N^_)+A[2]+3299628645&4294967295,I=k+(P<<23&4294967295|P>>>9),P=_+(k^(I|~N))+A[0]+4096336452&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~k))+A[7]+1126891415&4294967295,N=_+(P<<10&4294967295|P>>>22),P=k+(_^(N|~I))+A[14]+2878612391&4294967295,k=N+(P<<15&4294967295|P>>>17),P=I+(N^(k|~_))+A[5]+4237533241&4294967295,I=k+(P<<21&4294967295|P>>>11),P=_+(k^(I|~N))+A[12]+1700485571&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~k))+A[3]+2399980690&4294967295,N=_+(P<<10&4294967295|P>>>22),P=k+(_^(N|~I))+A[10]+4293915773&4294967295,k=N+(P<<15&4294967295|P>>>17),P=I+(N^(k|~_))+A[1]+2240044497&4294967295,I=k+(P<<21&4294967295|P>>>11),P=_+(k^(I|~N))+A[8]+1873313359&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~k))+A[15]+4264355552&4294967295,N=_+(P<<10&4294967295|P>>>22),P=k+(_^(N|~I))+A[6]+2734768916&4294967295,k=N+(P<<15&4294967295|P>>>17),P=I+(N^(k|~_))+A[13]+1309151649&4294967295,I=k+(P<<21&4294967295|P>>>11),P=_+(k^(I|~N))+A[4]+4149444226&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~k))+A[11]+3174756917&4294967295,N=_+(P<<10&4294967295|P>>>22),P=k+(_^(N|~I))+A[2]+718787259&4294967295,k=N+(P<<15&4294967295|P>>>17),P=I+(N^(k|~_))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+N&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var I=_-this.blockSize,A=this.B,k=this.h,N=0;N<_;){if(k==0)for(;N<=I;)i(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<_;)if(A[k++]=S.charCodeAt(N++),k==this.blockSize){i(this,A),k=0;break}}else for(;N<_;)if(A[k++]=S[N++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var I=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=I&255,I/=256;for(this.u(S),S=Array(16),_=I=0;4>_;++_)for(var A=0;32>A;A+=8)S[I++]=this.g[_]>>>A&255;return S};function s(S,_){var I=a;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=_(S)}function o(S,_){this.h=_;for(var I=[],A=!0,k=S.length-1;0<=k;k--){var N=S[k]|0;A&&N==_||(I[k]=N,A=!1)}this.g=I}var a={};function u(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return R(c(-S));for(var _=[],I=1,A=0;S>=I;A++)_[A]=S/I|0,I*=4294967296;return new o(_,0)}function h(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return R(h(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),A=f,k=0;k<S.length;k+=8){var N=Math.min(8,S.length-k),P=parseInt(S.substring(k,k+N),_);8>N?(N=c(Math.pow(_,N)),A=A.j(N).add(c(P))):(A=A.j(I),A=A.add(c(P)))}return A}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-R(this).m();for(var S=0,_=1,I=0;I<this.g.length;I++){var A=this.i(I);S+=(0<=A?A:4294967296+A)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(v(this))return"0";if(C(this))return"-"+R(this).toString(S);for(var _=c(Math.pow(S,6)),I=this,A="";;){var k=O(I,_).g;I=T(I,k.j(_));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=k,v(I))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function v(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function C(S){return S.h==-1}t.l=function(S){return S=T(this,S),C(S)?-1:v(S)?0:1};function R(S){for(var _=S.g.length,I=[],A=0;A<_;A++)I[A]=~S.g[A];return new o(I,~S.h).add(m)}t.abs=function(){return C(this)?R(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],A=0,k=0;k<=_;k++){var N=A+(this.i(k)&65535)+(S.i(k)&65535),P=(N>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);A=P>>>16,N&=65535,P&=65535,I[k]=P<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(S,_){return S.add(R(_))}t.j=function(S){if(v(this)||v(S))return f;if(C(this))return C(S)?R(this).j(R(S)):R(R(this).j(S));if(C(S))return R(this.j(R(S)));if(0>this.l(y)&&0>S.l(y))return c(this.m()*S.m());for(var _=this.g.length+S.g.length,I=[],A=0;A<2*_;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<S.g.length;k++){var N=this.i(A)>>>16,P=this.i(A)&65535,Re=S.i(k)>>>16,lt=S.i(k)&65535;I[2*A+2*k]+=P*lt,w(I,2*A+2*k),I[2*A+2*k+1]+=N*lt,w(I,2*A+2*k+1),I[2*A+2*k+1]+=P*Re,w(I,2*A+2*k+1),I[2*A+2*k+2]+=N*Re,w(I,2*A+2*k+2)}for(A=0;A<_;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=_;A<2*_;A++)I[A]=0;return new o(I,0)};function w(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function x(S,_){this.g=S,this.h=_}function O(S,_){if(v(_))throw Error("division by zero");if(v(S))return new x(f,f);if(C(S))return _=O(R(S),_),new x(R(_.g),R(_.h));if(C(_))return _=O(S,R(_)),new x(R(_.g),_.h);if(30<S.g.length){if(C(S)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=_;0>=A.l(S);)I=V(I),A=V(A);var k=F(I,1),N=F(A,1);for(A=F(A,2),I=F(I,2);!v(A);){var P=N.add(A);0>=P.l(S)&&(k=k.add(I),N=P),A=F(A,1),I=F(I,1)}return _=T(S,k.j(_)),new x(k,_)}for(k=f;0<=S.l(_);){for(I=Math.max(1,Math.floor(S.m()/_.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(I),P=N.j(_);C(P)||0<P.l(S);)I-=A,N=c(I),P=N.j(_);v(N)&&(N=m),k=k.add(N),S=T(S,P)}return new x(k,S)}t.A=function(S){return O(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)&S.i(A);return new o(I,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)|S.i(A);return new o(I,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)^S.i(A);return new o(I,this.h^S.h)};function V(S){for(var _=S.g.length+1,I=[],A=0;A<_;A++)I[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(I,S.h)}function F(S,_){var I=_>>5;_%=32;for(var A=S.g.length-I,k=[],N=0;N<A;N++)k[N]=0<_?S.i(N+I)>>>_|S.i(N+I+1)<<32-_:S.i(N+I);return new o(k,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,bi=o}).apply(typeof Sw<"u"?Sw:typeof self<"u"?self:typeof window<"u"?window:{});var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $x,Hx,ua,Wx,nc,Pm,qx,Gx,Kx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nu=="object"&&Nu];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var b=l[g];if(!(b in p))break e;p=p[b]}l=l[l.length-1],g=p[l],d=d(g),d!=g&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,g=!1,b={next:function(){if(!g&&p<l.length){var D=p++;return{value:d(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function y(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function v(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,b,D){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return d.prototype[b].apply(g,B)}}function C(l){const d=l.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=l[g];return p}return[]}function R(l,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const b=l.length||0,D=g.length||0;l.length=b+D;for(let B=0;B<D;B++)l[b+B]=g[B]}else l.push(g)}}class T{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var V=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function F(l,d,p){for(const g in l)d.call(p,l[g],g,l)}function S(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function _(l){const d={};for(const p in l)d[p]=l[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(p in g)l[p]=g[p];for(let D=0;D<I.length;D++)p=I[D],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function k(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=Q;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Re{constructor(){this.h=this.g=null}add(d,p){const g=lt.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var lt=new T(()=>new fn,l=>l.reset());class fn{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let rt,$=!1,Q=new Re,Z=()=>{const l=a.Promise.resolve(void 0);rt=()=>{l.then(be)}};var be=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(p){N(p)}var d=lt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}$=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Wn(l,d){if(Be.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){e:{try{O(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:qn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Wn.aa.h.call(this)}}v(Wn,Be);var qn={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),lP=0;function uP(l,d,p,g,b){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=b,this.key=++lP,this.da=this.fa=!1}function zl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Bl(l){this.src=l,this.g={},this.h=0}Bl.prototype.add=function(l,d,p,g,b){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var B=md(l,d,g,b);return-1<B?(d=l[B],p||(d.fa=!1)):(d=new uP(d,this.src,D,!!g,b),d.fa=p,l.push(d)),d};function pd(l,d){var p=d.type;if(p in l.g){var g=l.g[p],b=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(zl(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function md(l,d,p,g){for(var b=0;b<l.length;++b){var D=l[b];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==g)return b}return-1}var gd="closure_lm_"+(1e6*Math.random()|0),yd={};function Tv(l,d,p,g,b){if(g&&g.once)return Sv(l,d,p,g,b);if(Array.isArray(d)){for(var D=0;D<d.length;D++)Tv(l,d[D],p,g,b);return null}return p=Ed(p),l&&l[xn]?l.K(d,p,c(g)?!!g.capture:!!g,b):Cv(l,d,p,!1,g,b)}function Cv(l,d,p,g,b,D){if(!d)throw Error("Invalid event type");var B=c(b)?!!b.capture:!!b,_e=_d(l);if(_e||(l[gd]=_e=new Bl(l)),p=_e.add(d,p,g,B,D),p.proxy)return p;if(g=cP(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)Hn||(b=B),b===void 0&&(b=!1),l.addEventListener(d.toString(),g,b);else if(l.attachEvent)l.attachEvent(xv(d.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function cP(){function l(p){return d.call(l.src,l.listener,p)}const d=hP;return l}function Sv(l,d,p,g,b){if(Array.isArray(d)){for(var D=0;D<d.length;D++)Sv(l,d[D],p,g,b);return null}return p=Ed(p),l&&l[xn]?l.L(d,p,c(g)?!!g.capture:!!g,b):Cv(l,d,p,!0,g,b)}function Iv(l,d,p,g,b){if(Array.isArray(d))for(var D=0;D<d.length;D++)Iv(l,d[D],p,g,b);else g=c(g)?!!g.capture:!!g,p=Ed(p),l&&l[xn]?(l=l.i,d=String(d).toString(),d in l.g&&(D=l.g[d],p=md(D,p,g,b),-1<p&&(zl(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[d],l.h--)))):l&&(l=_d(l))&&(d=l.g[d.toString()],l=-1,d&&(l=md(d,p,g,b)),(p=-1<l?d[l]:null)&&vd(p))}function vd(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[xn])pd(d.i,l);else{var p=l.type,g=l.proxy;d.removeEventListener?d.removeEventListener(p,g,l.capture):d.detachEvent?d.detachEvent(xv(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=_d(d))?(pd(p,l),p.h==0&&(p.src=null,d[gd]=null)):zl(l)}}}function xv(l){return l in yd?yd[l]:yd[l]="on"+l}function hP(l,d){if(l.da)l=!0;else{d=new Wn(d,this);var p=l.listener,g=l.ha||l.src;l.fa&&vd(l),l=p.call(g,d)}return l}function _d(l){return l=l[gd],l instanceof Bl?l:null}var wd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ed(l){return typeof l=="function"?l:(l[wd]||(l[wd]=function(d){return l.handleEvent(d)}),l[wd])}function yt(){ve.call(this),this.i=new Bl(this),this.M=this,this.F=null}v(yt,ve),yt.prototype[xn]=!0,yt.prototype.removeEventListener=function(l,d,p,g){Iv(this,l,d,p,g)};function Pt(l,d){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=d.type||d,typeof d=="string")d=new Be(d,l);else if(d instanceof Be)d.target=d.target||l;else{var b=d;d=new Be(g,l),A(d,b)}if(b=!0,p)for(var D=p.length-1;0<=D;D--){var B=d.g=p[D];b=$l(B,g,!0,d)&&b}if(B=d.g=l,b=$l(B,g,!0,d)&&b,b=$l(B,g,!1,d)&&b,p)for(D=0;D<p.length;D++)B=d.g=p[D],b=$l(B,g,!1,d)&&b}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],g=0;g<p.length;g++)zl(p[g]);delete l.g[d],l.h--}}this.F=null},yt.prototype.K=function(l,d,p,g){return this.i.add(String(l),d,!1,p,g)},yt.prototype.L=function(l,d,p,g){return this.i.add(String(l),d,!0,p,g)};function $l(l,d,p,g){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,D=0;D<d.length;++D){var B=d[D];if(B&&!B.da&&B.capture==p){var _e=B.listener,ut=B.ha||B.src;B.fa&&pd(l.i,B),b=_e.call(ut,g)!==!1&&b}}return b&&!g.defaultPrevented}function Av(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Pv(l){l.g=Av(()=>{l.g=null,l.i&&(l.i=!1,Pv(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class dP extends ve{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Pv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xo(l){ve.call(this),this.h=l,this.g={}}v(xo,ve);var kv=[];function Rv(l){F(l.g,function(d,p){this.g.hasOwnProperty(p)&&vd(d)},l),l.g={}}xo.prototype.N=function(){xo.aa.N.call(this),Rv(this)},xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Td=a.JSON.stringify,fP=a.JSON.parse,pP=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Cd(){}Cd.prototype.h=null;function bv(l){return l.h||(l.h=l.i())}function Nv(){}var Ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sd(){Be.call(this,"d")}v(Sd,Be);function Id(){Be.call(this,"c")}v(Id,Be);var hi={},Ov=null;function Hl(){return Ov=Ov||new yt}hi.La="serverreachability";function Dv(l){Be.call(this,hi.La,l)}v(Dv,Be);function Po(l){const d=Hl();Pt(d,new Dv(d))}hi.STAT_EVENT="statevent";function Mv(l,d){Be.call(this,hi.STAT_EVENT,l),this.stat=d}v(Mv,Be);function kt(l){const d=Hl();Pt(d,new Mv(d,l))}hi.Ma="timingevent";function Lv(l,d){Be.call(this,hi.Ma,l),this.size=d}v(Lv,Be);function ko(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ro(){this.g=!0}Ro.prototype.xa=function(){this.g=!1};function mP(l,d,p,g,b,D){l.info(function(){if(l.g)if(D)for(var B="",_e=D.split("&"),ut=0;ut<_e.length;ut++){var fe=_e[ut].split("=");if(1<fe.length){var vt=fe[0];fe=fe[1];var _t=vt.split("_");B=2<=_t.length&&_t[1]=="type"?B+(vt+"="+fe+"&"):B+(vt+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+d+`
`+p+`
`+B})}function gP(l,d,p,g,b,D,B){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+d+`
`+p+`
`+D+" "+B})}function ns(l,d,p,g){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+vP(l,p)+(g?" "+g:"")})}function yP(l,d){l.info(function(){return"TIMEOUT: "+d})}Ro.prototype.info=function(){};function vP(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<b.length;B++)b[B]=""}}}}return Td(p)}catch{return d}}var Wl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xd;function ql(){}v(ql,Cd),ql.prototype.g=function(){return new XMLHttpRequest},ql.prototype.i=function(){return{}},xd=new ql;function vr(l,d,p,g){this.j=l,this.i=d,this.l=p,this.R=g||1,this.U=new xo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vv}function Vv(){this.i=null,this.g="",this.h=!1}var jv={},Ad={};function Pd(l,d,p){l.L=1,l.v=Yl(Gn(d)),l.m=p,l.P=!0,Uv(l,null)}function Uv(l,d){l.F=Date.now(),Gl(l),l.A=Gn(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),e_(p.i,"t",g),l.C=0,p=l.j.J,l.h=new Vv,l.g=v_(l.j,p?d:null,!l.m),0<l.O&&(l.M=new dP(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,g=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(kv[0]=b.toString()),b=kv);for(var D=0;D<b.length;D++){var B=Tv(p,b[D],g||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Po(),mP(l.i,l.u,l.A,l.l,l.R,l.m)}vr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Kn(l)==3?d.j():this.Y(l)},vr.prototype.Y=function(l){try{if(l==this.g)e:{const _t=Kn(this.g);var d=this.g.Ba();const ss=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||a_(this.g)))){this.J||_t!=4||d==7||(d==8||0>=ss?Po(3):Po(2)),kd(this);var p=this.g.Z();this.X=p;t:if(zv(this)){var g=a_(this.g);l="";var b=g.length,D=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){di(this),bo(this);var B="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(g[d],{stream:!(D&&d==b-1)});g.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,gP(this.i,this.u,this.A,this.l,this.R,_t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,ut=this.g;if((_e=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_e)){var fe=_e;break t}}fe=null}if(p=fe)ns(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rd(this,p);else{this.o=!1,this.s=3,kt(12),di(this),bo(this);break e}}if(this.P){p=!0;let pn;for(;!this.J&&this.C<B.length;)if(pn=_P(this,B),pn==Ad){_t==4&&(this.s=4,kt(14),p=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==jv){this.s=4,kt(15),ns(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else ns(this.i,this.l,pn,null),Rd(this,pn);if(zv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||B.length!=0||this.h.h||(this.s=1,kt(16),p=!1),this.o=this.o&&p,!p)ns(this.i,this.l,B,"[Invalid Chunked Response]"),di(this),bo(this);else if(0<B.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ld(vt),vt.M=!0,kt(11))}}else ns(this.i,this.l,B,null),Rd(this,B);_t==4&&di(this),this.o&&!this.J&&(_t==4?p_(this.j,this):(this.o=!1,Gl(this)))}else LP(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),di(this),bo(this)}}}catch{}finally{}};function zv(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function _P(l,d){var p=l.C,g=d.indexOf(`
`,p);return g==-1?Ad:(p=Number(d.substring(p,g)),isNaN(p)?jv:(g+=1,g+p>d.length?Ad:(d=d.slice(g,g+p),l.C=g+p,d)))}vr.prototype.cancel=function(){this.J=!0,di(this)};function Gl(l){l.S=Date.now()+l.I,Bv(l,l.I)}function Bv(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ko(m(l.ba,l),d)}function kd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}vr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(yP(this.i,this.A),this.L!=2&&(Po(),kt(17)),di(this),this.s=2,bo(this)):Bv(this,this.S-l)};function bo(l){l.j.G==0||l.J||p_(l.j,l)}function di(l){kd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Rv(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Rd(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||bd(p.h,l))){if(!l.K&&bd(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)tu(p),Zl(p);else break e;Md(p),kt(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=ko(m(p.Za,p),6e3));if(1>=Wv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else pi(p,11)}else if((l.K||p.g==l)&&tu(p),!w(d))for(b=p.Da.g.parse(d),d=0;d<b.length;d++){let fe=b[d];if(p.T=fe[0],fe=fe[1],p.G==2)if(fe[0]=="c"){p.K=fe[1],p.ia=fe[2];const vt=fe[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const _t=fe[4];_t!=null&&(p.Aa=_t,p.j.info("SVER="+p.Aa));const ss=fe[5];ss!=null&&typeof ss=="number"&&0<ss&&(g=1.5*ss,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const pn=l.g;if(pn){const ru=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ru){var D=g.h;D.g||ru.indexOf("spdy")==-1&&ru.indexOf("quic")==-1&&ru.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Nd(D,D.h),D.h=null))}if(g.D){const Fd=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fd&&(g.ya=Fd,Ce(g.I,g.D,Fd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var B=l;if(g.qa=y_(g,g.J?g.ia:null,g.W),B.K){qv(g.h,B);var _e=B,ut=g.L;ut&&(_e.I=ut),_e.B&&(kd(_e),Gl(_e)),g.g=B}else d_(g);0<p.i.length&&eu(p)}else fe[0]!="stop"&&fe[0]!="close"||pi(p,7);else p.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?pi(p,7):Dd(p):fe[0]!="noop"&&p.l&&p.l.ta(fe),p.v=0)}}Po(4)}catch{}}var wP=class{constructor(l,d){this.g=l,this.map=d}};function $v(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Wv(l){return l.h?1:l.g?l.g.size:0}function bd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Nd(l,d){l.g?l.g.add(d):l.h=d}function qv(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}$v.prototype.cancel=function(){if(this.i=Gv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return C(l.i)}function EP(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,g=0;g<p;g++)d.push(l[g]);return d}d=[],p=0;for(g in l)d[p++]=l[g];return d}function TP(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const g in l)d[p++]=g;return d}}}function Kv(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=TP(l),g=EP(l),b=g.length,D=0;D<b;D++)d.call(void 0,g[D],p&&p[D],l)}var Qv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CP(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),b=null;if(0<=g){var D=l[p].substring(0,g);b=l[p].substring(g+1)}else D=l[p];d(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function fi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fi){this.h=l.h,Kl(this,l.j),this.o=l.o,this.g=l.g,Ql(this,l.s),this.l=l.l;var d=l.i,p=new Do;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Yv(this,p),this.m=l.m}else l&&(d=String(l).match(Qv))?(this.h=!1,Kl(this,d[1]||"",!0),this.o=No(d[2]||""),this.g=No(d[3]||"",!0),Ql(this,d[4]),this.l=No(d[5]||"",!0),Yv(this,d[6]||"",!0),this.m=No(d[7]||"")):(this.h=!1,this.i=new Do(null,this.h))}fi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Oo(d,Xv,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Oo(d,Xv,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Oo(p,p.charAt(0)=="/"?xP:IP,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Oo(p,PP)),l.join("")};function Gn(l){return new fi(l)}function Kl(l,d,p){l.j=p?No(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Ql(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Yv(l,d,p){d instanceof Do?(l.i=d,kP(l.i,l.h)):(p||(d=Oo(d,AP)),l.i=new Do(d,l.h))}function Ce(l,d,p){l.i.set(d,p)}function Yl(l){return Ce(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function No(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Oo(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,SP),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function SP(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Xv=/[#\/\?@]/g,IP=/[#\?:]/g,xP=/[#\?]/g,AP=/[#\?@]/g,PP=/#/g;function Do(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&CP(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Do.prototype,t.add=function(l,d){_r(this),this.i=null,l=rs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Jv(l,d){_r(l),d=rs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Zv(l,d){return _r(l),d=rs(l,d),l.g.has(d)}t.forEach=function(l,d){_r(this),this.g.forEach(function(p,g){p.forEach(function(b){l.call(d,b,g,this)},this)},this)},t.na=function(){_r(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const b=l[g];for(let D=0;D<b.length;D++)p.push(d[g])}return p},t.V=function(l){_r(this);let d=[];if(typeof l=="string")Zv(this,l)&&(d=d.concat(this.g.get(rs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return _r(this),this.i=null,l=rs(this,l),Zv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function e_(l,d,p){Jv(l,d),0<p.length&&(l.i=null,l.g.set(rs(l,d),C(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const D=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var b=D;B[g]!==""&&(b+="="+encodeURIComponent(String(B[g]))),l.push(b)}}return this.i=l.join("&")};function rs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function kP(l,d){d&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(p,g){var b=g.toLowerCase();g!=b&&(Jv(this,g),e_(this,b,p))},l)),l.j=d}function RP(l,d){const p=new Ro;if(a.Image){const g=new Image;g.onload=y(wr,p,"TestLoadImage: loaded",!0,d,g),g.onerror=y(wr,p,"TestLoadImage: error",!1,d,g),g.onabort=y(wr,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=y(wr,p,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else d(!1)}function bP(l,d){const p=new Ro,g=new AbortController,b=setTimeout(()=>{g.abort(),wr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?wr(p,"TestPingServer: ok",!0,d):wr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),wr(p,"TestPingServer: error",!1,d)})}function wr(l,d,p,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(p)}catch{}}function NP(){this.g=new pP}function OP(l,d,p){const g=p||"";try{Kv(l,function(b,D){let B=b;c(b)&&(B=Td(b)),d.push(g+D+"="+encodeURIComponent(B))})}catch(b){throw d.push(g+"type="+encodeURIComponent("_badmap")),b}}function Mo(l){this.l=l.Ub||null,this.j=l.eb||!1}v(Mo,Cd),Mo.prototype.g=function(){return new Xl(this.l,this.j)},Mo.prototype.i=function(l){return function(){return l}}({});function Xl(l,d){yt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Xl,yt),t=Xl.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Fo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fo(this)),this.g&&(this.readyState=3,Fo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;t_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function t_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Lo(this):Fo(this),this.readyState==3&&t_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Lo(this))},t.Qa=function(l){this.g&&(this.response=l,Lo(this))},t.ga=function(){this.g&&Lo(this)};function Lo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Fo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Fo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function n_(l){let d="";return F(l,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function Od(l,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=n_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ce(l,d,p))}function Le(l){yt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(Le,yt);var DP=/^https?$/i,MP=["POST","PUT"];t=Le.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xd.g(),this.v=this.o?bv(this.o):bv(xd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(D){r_(this,D);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)p.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(MP,d,void 0))||g||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of p)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{o_(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){r_(this,D)}};function r_(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,i_(l),Jl(l)}function i_(l){l.A||(l.A=!0,Pt(l,"complete"),Pt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Pt(this,"complete"),Pt(this,"abort"),Jl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jl(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?s_(this):this.bb())},t.bb=function(){s_(this)};function s_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)Av(l.Ea,0,l);else if(Pt(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=B===0){var b=String(l.D).match(Qv)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),g=!DP.test(b?b.toLowerCase():"")}p=g}if(p)Pt(l,"complete"),Pt(l,"success");else{l.m=6;try{var D=2<Kn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",i_(l)}}finally{Jl(l)}}}}function Jl(l,d){if(l.g){o_(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Pt(l,"ready");try{p.onreadystatechange=g}catch{}}}function o_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),fP(d)}};function a_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function LP(l){const d={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(w(l[g]))continue;var p=k(l[g]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[b]||[];d[b]=D,D.push(p)}S(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function l_(l){this.Aa=0,this.i=[],this.j=new Ro,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vo("baseRetryDelayMs",5e3,l),this.cb=Vo("retryDelaySeedMs",1e4,l),this.Wa=Vo("forwardChannelMaxRetries",2,l),this.wa=Vo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new $v(l&&l.concurrentRequestLimit),this.Da=new NP,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=l_.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,g){kt(0),this.W=l,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=y_(this,null,this.W),eu(this)};function Dd(l){if(u_(l),l.G==3){var d=l.U++,p=Gn(l.I);if(Ce(p,"SID",l.K),Ce(p,"RID",d),Ce(p,"TYPE","terminate"),jo(l,p),d=new vr(l,l.j,d),d.L=2,d.v=Yl(Gn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=v_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Gl(d)}g_(l)}function Zl(l){l.g&&(Ld(l),l.g.cancel(),l.g=null)}function u_(l){Zl(l),l.u&&(a.clearTimeout(l.u),l.u=null),tu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function eu(l){if(!Hv(l.h)&&!l.s){l.s=!0;var d=l.Ga;rt||Z(),$||(rt(),$=!0),Q.add(d,l),l.B=0}}function FP(l,d){return Wv(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ko(m(l.Ga,l,d),m_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new vr(this,this.j,l);let D=this.o;if(this.S&&(D?(D=_(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=h_(this,b,d),p=Gn(this.I),Ce(p,"RID",l),Ce(p,"CVER",22),this.D&&Ce(p,"X-HTTP-Session-Id",this.D),jo(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(n_(D)))+"&"+d:this.m&&Od(p,this.m,D)),Nd(this.h,b),this.Ua&&Ce(p,"TYPE","init"),this.P?(Ce(p,"$req",d),Ce(p,"SID","null"),b.T=!0,Pd(b,p,null)):Pd(b,p,d),this.G=2}}else this.G==3&&(l?c_(this,l):this.i.length==0||Hv(this.h)||c_(this))};function c_(l,d){var p;d?p=d.l:p=l.U++;const g=Gn(l.I);Ce(g,"SID",l.K),Ce(g,"RID",p),Ce(g,"AID",l.T),jo(l,g),l.m&&l.o&&Od(g,l.m,l.o),p=new vr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=h_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Nd(l.h,p),Pd(p,g,d)}function jo(l,d){l.H&&F(l.H,function(p,g){Ce(d,g,p)}),l.l&&Kv({},function(p,g){Ce(d,g,p)})}function h_(l,d,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let D=-1;for(;;){const B=["count="+p];D==-1?0<p?(D=b[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let _e=!0;for(let ut=0;ut<p;ut++){let fe=b[ut].g;const vt=b[ut].map;if(fe-=D,0>fe)D=Math.max(0,b[ut].g-100),_e=!1;else try{OP(vt,B,"req"+fe+"_")}catch{g&&g(vt)}}if(_e){g=B.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,g}function d_(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;rt||Z(),$||(rt(),$=!0),Q.add(d,l),l.v=0}}function Md(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ko(m(l.Fa,l),m_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,f_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ko(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Zl(this),f_(this))};function Ld(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function f_(l){l.g=new vr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Gn(l.qa);Ce(d,"RID","rpc"),Ce(d,"SID",l.K),Ce(d,"AID",l.T),Ce(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ce(d,"TO",l.ja),Ce(d,"TYPE","xmlhttp"),jo(l,d),l.m&&l.o&&Od(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Yl(Gn(d)),p.m=null,p.P=!0,Uv(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Zl(this),Md(this),kt(19))};function tu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function p_(l,d){var p=null;if(l.g==d){tu(l),Ld(l),l.g=null;var g=2}else if(bd(l.h,d))p=d.D,qv(l.h,d),g=1;else return;if(l.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;g=Hl(),Pt(g,new Lv(g,p)),eu(l)}else d_(l);else if(b=d.s,b==3||b==0&&0<d.X||!(g==1&&FP(l,d)||g==2&&Md(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),b){case 1:pi(l,5);break;case 4:pi(l,10);break;case 3:pi(l,6);break;default:pi(l,2)}}}function m_(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function pi(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),g=l.Xa;const b=!g;g=new fi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Kl(g,"https"),Yl(g),b?RP(g.toString(),p):bP(g.toString(),p)}else kt(2);l.G=0,l.l&&l.l.sa(d),g_(l),u_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function g_(l){if(l.G=0,l.ka=[],l.l){const d=Gv(l.h);(d.length!=0||l.i.length!=0)&&(R(l.ka,d),R(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function y_(l,d,p){var g=p instanceof fi?Gn(p):new fi(p);if(g.g!="")d&&(g.g=d+"."+g.g),Ql(g,g.s);else{var b=a.location;g=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var D=new fi(null);g&&Kl(D,g),d&&(D.g=d),b&&Ql(D,b),p&&(D.l=p),g=D}return p=l.D,d=l.ya,p&&d&&Ce(g,p,d),Ce(g,"VER",l.la),jo(l,g),g}function v_(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Le(new Mo({eb:p})):new Le(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function __(){}t=__.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function nu(){}nu.prototype.g=function(l,d){return new Ht(l,d)};function Ht(l,d){yt.call(this),this.g=new l_(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new is(this)}v(Ht,yt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Dd(this.g)},Ht.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Td(l),l=p);d.i.push(new wP(d.Ya++,l)),d.G==3&&eu(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Dd(this.g),delete this.g,Ht.aa.N.call(this)};function w_(l){Sd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}v(w_,Sd);function E_(){Id.call(this),this.status=1}v(E_,Id);function is(l){this.g=l}v(is,__),is.prototype.ua=function(){Pt(this.g,"a")},is.prototype.ta=function(l){Pt(this.g,new w_(l))},is.prototype.sa=function(l){Pt(this.g,new E_)},is.prototype.ra=function(){Pt(this.g,"b")},nu.prototype.createWebChannel=nu.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Kx=function(){return new nu},Gx=function(){return Hl()},qx=hi,Pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wl.NO_ERROR=0,Wl.TIMEOUT=8,Wl.HTTP_ERROR=6,nc=Wl,Fv.COMPLETE="complete",Wx=Fv,Nv.EventType=Ao,Ao.OPEN="a",Ao.CLOSE="b",Ao.ERROR="c",Ao.MESSAGE="d",yt.prototype.listen=yt.prototype.K,ua=Nv,Hx=Mo,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,$x=Le}).apply(typeof Nu<"u"?Nu:typeof self<"u"?self:typeof window<"u"?window:{});const Iw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new $h("@firebase/firestore");function Zo(){return Gi.logLevel}function G(t,...e){if(Gi.logLevel<=le.DEBUG){const n=e.map(Zy);Gi.debug(`Firestore (${To}): ${t}`,...n)}}function fr(t,...e){if(Gi.logLevel<=le.ERROR){const n=e.map(Zy);Gi.error(`Firestore (${To}): ${t}`,...n)}}function ro(t,...e){if(Gi.logLevel<=le.WARN){const n=e.map(Zy);Gi.warn(`Firestore (${To}): ${t}`,...n)}}function Zy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Qe(t,e){t||te()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends ci{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class f5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class p5{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ni,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ni)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string"),new Qx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new Ct(e)}}class m5{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class g5{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new m5(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y5{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v5{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.R=n.token,new y5(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_5(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function io(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $t.fromMillis(Date.now())}static fromDate(e){return $t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new $t(0,0))}static max(){return new ee(new $t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends fl{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new je(n)}static emptyPath(){return new je([])}}const E5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends fl{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return E5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(je.fromString(e))}static fromName(e){return new J(je.fromString(e).popFirst(5))}static empty(){return new J(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new je(e.slice()))}}function T5(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new $t(n+1,0):new $t(n,r));return new ii(i,J.empty(),e)}function C5(t){return new ii(t.readTime,t.key,-1)}class ii{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ii(ee.min(),J.empty(),-1)}static max(){return new ii(ee.max(),J.empty(),-1)}}function S5(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class x5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==I5)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function A5(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tv.oe=-1;function rd(t){return t==null}function km(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function id(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P5(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ou(this.root,e,this.comparator,!0)}}class Ou{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Aw(this.data.getIterator())}getIteratorFrom(e){return new Aw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Aw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Mr([])}unionWith(e){let n=new pt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Yx("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const k5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=k5.exec(t);if(Qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ki(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rv(t){const e=t.mapValue.fields.__previous_value__;return nv(e)?rv(e):e}function pl(t){const e=si(t.mapValue.fields.__local_write_time__.timestampValue);return new $t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ml{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ml("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ml&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nv(t)?4:b5(t)?9007199254740991:10:te()}function Vn(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pl(t).isEqual(pl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=si(i.timestampValue),a=si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ki(i.bytesValue).isEqual(Ki(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?km(o)===km(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return io(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(xw(o)!==xw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Vn(o[u],a[u])))return!1;return!0}(t,e);default:return te()}}function gl(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function so(t,e){if(t===e)return 0;const n=Qi(t),r=Qi(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),u=qe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Pw(t.timestampValue,e.timestampValue);case 4:return Pw(pl(t),pl(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ki(s),u=Ki(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=me(a[c],u[c]);if(h!==0)return h}return me(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=me(qe(s.latitude),qe(o.latitude));return a!==0?a:me(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=so(a[c],u[c]);if(h)return h}return me(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Du.mapValue&&o===Du.mapValue)return 0;if(s===Du.mapValue)return 1;if(o===Du.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=me(u[f],h[f]);if(m!==0)return m;const y=so(a[u[f]],c[h[f]]);if(y!==0)return y}return me(u.length,h.length)}(t.mapValue,e.mapValue);default:throw te()}}function Pw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=si(t),r=si(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function oo(t){return Rm(t)}function Rm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rm(n.fields[o])}`;return i+"}"}(t.mapValue):te()}function bm(t){return!!t&&"integerValue"in t}function iv(t){return!!t&&"arrayValue"in t}function kw(t){return!!t&&"nullValue"in t}function Rw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mf(t){return!!t&&"mapValue"in t}function Ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return id(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function b5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ra(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Mf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){id(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rn(Ra(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new It(e,0,ee.min(),ee.min(),ee.min(),Rn.empty(),0)}static newFoundDocument(e,n,r,i){return new It(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new It(e,2,n,ee.min(),ee.min(),Rn.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,ee.min(),ee.min(),Rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.position=e,this.inclusive=n}}function bw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=so(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n="asc"){this.field=e,this.dir=n}}function N5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{}class et extends Xx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new D5(e,n,r):n==="array-contains"?new F5(e,r):n==="in"?new V5(e,r):n==="not-in"?new j5(e,r):n==="array-contains-any"?new U5(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new M5(e,r):new L5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(so(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends Xx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jn(e,n)}matches(e){return Jx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Jx(t){return t.op==="and"}function Zx(t){return O5(t)&&Jx(t)}function O5(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Nm(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+oo(t.value);if(Zx(t))return t.filters.map(e=>Nm(e)).join(",");{const e=t.filters.map(n=>Nm(n)).join(",");return`${t.op}(${e})`}}function eA(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eA(o,i.filters[a]),!0):!1}(t,e):void te()}function tA(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(tA).join(" ,")+"}"}(t):"Filter"}class D5 extends et{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class M5 extends et{constructor(e,n){super(e,"in",n),this.keys=nA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class L5 extends et{constructor(e,n){super(e,"not-in",n),this.keys=nA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class F5 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return iv(n)&&gl(n.arrayValue,this.value)}}class V5 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gl(this.value.arrayValue,n)}}class j5 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gl(this.value.arrayValue,n)}}class U5 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!iv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z5{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ow(t,e=null,n=[],r=[],i=null,s=null,o=null){return new z5(t,e,n,r,i,s,o)}function sv(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oo(r)).join(",")),e.ue=n}return e.ue}function ov(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!N5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nw(t.startAt,e.startAt)&&Nw(t.endAt,e.endAt)}function Om(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function B5(t,e,n,r,i,s,o,a){return new sd(t,e,n,r,i,s,o,a)}function rA(t){return new sd(t)}function Dw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $5(t){return t.collectionGroup!==null}function ba(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pt(bt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new sh(s,r))}),n.has(bt.keyField().canonicalString())||e.ce.push(new sh(bt.keyField(),r))}return e.ce}function Ln(t){const e=de(t);return e.le||(e.le=H5(e,ba(t))),e.le}function H5(t,e){if(t.limitType==="F")return Ow(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sh(i.field,s)});const n=t.endAt?new ih(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ih(t.startAt.position,t.startAt.inclusive):null;return Ow(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dm(t,e,n){return new sd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function od(t,e){return ov(Ln(t),Ln(e))&&t.limitType===e.limitType}function iA(t){return`${sv(Ln(t))}|lt:${t.limitType}`}function us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tA(i)).join(", ")}]`),rd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oo(i)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function ad(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=bw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ba(r),i)||r.endAt&&!function(o,a,u){const c=bw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ba(r),i))}(t,e)}function W5(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sA(t){return(e,n)=>{let r=!1;for(const i of ba(t)){const s=q5(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function q5(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?so(u,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){id(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return P5(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G5=new He(J.comparator);function oi(){return G5}const oA=new He(J.comparator);function ca(...t){let e=oA;for(const n of t)e=e.insert(n.key,n);return e}function K5(t){let e=oA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return Na()}function aA(){return Na()}function Na(){return new Co(t=>t.toString(),(t,e)=>t.isEqual(e))}const Q5=new pt(J.comparator);function ce(...t){let e=Q5;for(const n of t)e=e.add(n);return e}const Y5=new pt(me);function X5(){return Y5}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J5(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:km(e)?"-0":e}}function Z5(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this._=void 0}}function ej(t,e,n){return t instanceof Mm?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nv(s)&&(s=rv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof oh?lA(t,e):t instanceof ah?uA(t,e):function(i,s){const o=nj(i,s),a=Mw(o)+Mw(i.Pe);return bm(o)&&bm(i.Pe)?Z5(a):J5(i.serializer,a)}(t,e)}function tj(t,e,n){return t instanceof oh?lA(t,e):t instanceof ah?uA(t,e):n}function nj(t,e){return t instanceof Lm?function(r){return bm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mm extends ld{}class oh extends ld{constructor(e){super(),this.elements=e}}function lA(t,e){const n=cA(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ah extends ld{constructor(e){super(),this.elements=e}}function uA(t,e){let n=cA(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class Lm extends ld{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Mw(t){return qe(t.integerValue||t.doubleValue)}function cA(t){return iv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oh&&i instanceof oh||r instanceof ah&&i instanceof ah?io(r.elements,i.elements,Vn):r instanceof Lm&&i instanceof Lm?Vn(r.Pe,i.Pe):r instanceof Mm&&i instanceof Mm}(t.transform,e.transform)}class Oi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Oi}static exists(e){return new Oi(void 0,e)}static updateTime(e){return new Oi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class av{}function hA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sj(t.key,Oi.none()):new lv(t.key,t.data,Oi.none());{const n=t.data,r=Rn.empty();let i=new pt(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ud(t.key,r,new Mr(i.toArray()),Oi.none())}}function ij(t,e,n){t instanceof lv?function(i,s,o){const a=i.value.clone(),u=Fw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ud?function(i,s,o){if(!rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dA(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oa(t,e,n,r){return t instanceof lv?function(s,o,a,u){if(!rc(s.precondition,o))return a;const c=s.value.clone(),h=Vw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ud?function(s,o,a,u){if(!rc(s.precondition,o))return a;const c=Vw(s.fieldTransforms,u,o),h=o.data;return h.setAll(dA(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Lw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&io(r,i,(s,o)=>rj(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lv extends av{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ud extends av{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fw(t,e,n){const r=new Map;Qe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tj(o,a,n[i]))}return r}function Vw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ej(s,o,e))}return r}class sj extends av{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ij(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=hA(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(n,r)=>Lw(n,r))&&io(this.baseMutations,e.baseMutations,(n,r)=>Lw(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ae;function fA(t){if(t===void 0)return fr("GRPC error has no .code"),H.UNKNOWN;switch(t){case We.OK:return H.OK;case We.CANCELLED:return H.CANCELLED;case We.UNKNOWN:return H.UNKNOWN;case We.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case We.INTERNAL:return H.INTERNAL;case We.UNAVAILABLE:return H.UNAVAILABLE;case We.UNAUTHENTICATED:return H.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case We.NOT_FOUND:return H.NOT_FOUND;case We.ALREADY_EXISTS:return H.ALREADY_EXISTS;case We.PERMISSION_DENIED:return H.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case We.ABORTED:return H.ABORTED;case We.OUT_OF_RANGE:return H.OUT_OF_RANGE;case We.UNIMPLEMENTED:return H.UNIMPLEMENTED;case We.DATA_LOSS:return H.DATA_LOSS;default:return te()}}(ae=We||(We={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uj(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cj=new bi([4294967295,4294967295],0);function jw(t){const e=uj().encode(t),n=new Bx;return n.update(e),new Uint8Array(n.digest())}function Uw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bi([n,r],0),new bi([i,s],0)]}class uv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ha(`Invalid padding: ${n}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ha(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(bi.fromNumber(r)));return i.compare(cj)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=jw(e),[r,i]=Uw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=jw(e),[r,i]=Uw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Vl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cd(ee.min(),i,new He(me),oi(),ce())}}class Vl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vl(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class pA{constructor(e,n){this.targetId=e,this.me=n}}class mA{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zw{constructor(){this.fe=0,this.ge=$w(),this.pe=At.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new Vl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=$w()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hj{constructor(e){this.Le=e,this.Be=new Map,this.ke=oi(),this.qe=Bw(),this.Qe=new He(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Om(s))if(r===0){const o=new J(s.path);this.Ue(n,o,It.newNoDocument(o,ee.min()))}else Qe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ki(r).toUint8Array()}catch(u){if(u instanceof Yx)return ro("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new uv(o,i,s)}catch(u){return ro(u instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Om(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,It.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new cd(e,n,this.Qe,this.ke,r);return this.ke=oi(),this.qe=Bw(),this.Qe=new He(me),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new zw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Bw(){return new He(J.comparator)}function $w(){return new He(J.comparator)}const dj=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pj=(()=>({and:"AND",or:"OR"}))();class mj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fm(t,e){return t.useProto3Json||rd(e)?e:{value:e}}function gj(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yj(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Vs(t){return Qe(!!t),ee.fromTimestamp(function(n){const r=si(n);return new $t(r.seconds,r.nanos)}(t))}function vj(t,e){return Vm(t,e).canonicalString()}function Vm(t,e){const n=function(i){return new je(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function gA(t){const e=je.fromString(t);return Qe(EA(e)),e}function Lf(t,e){const n=gA(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(vA(n))}function yA(t,e){return vj(t.databaseId,e)}function _j(t){const e=gA(t);return e.length===4?je.emptyPath():vA(e)}function Hw(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vA(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Qe(h===void 0||typeof h=="string"),At.fromBase64String(h||"")):(Qe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),At.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?H.UNKNOWN:fA(c.code);return new Y(h,c.message||"")}(o);n=new mA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lf(t,r.document.name),s=Vs(r.document.updateTime),o=r.document.createTime?Vs(r.document.createTime):ee.min(),a=new Rn({mapValue:{fields:r.document.fields}}),u=It.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new ic(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lf(t,r.document),s=r.readTime?Vs(r.readTime):ee.min(),o=It.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lf(t,r.document),s=r.removedTargetIds||[];n=new ic([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lj(i,s),a=r.targetId;n=new pA(a,o)}}return n}function Ej(t,e){return{documents:[yA(t,e.path)]}}function Tj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=yA(t,i);const s=function(c){if(c.length!==0)return wA(jn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:cs(m.field),direction:Ij(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Fm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Cj(t){let e=_j(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qe(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=_A(f);return m instanceof jn&&Zx(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(v){return new sh(hs(v.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,rd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new ih(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new ih(y,m)}(n.endAt)),B5(e,i,o,s,a,"F",u,c)}function Sj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _A(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hs(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hs(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return et.create(hs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>_A(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function Ij(t){return dj[t]}function xj(t){return fj[t]}function Aj(t){return pj[t]}function cs(t){return{fieldPath:t.canonicalString()}}function hs(t){return bt.fromServerFormat(t.fieldPath)}function wA(t){return t instanceof et?function(n){if(n.op==="=="){if(Rw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(kw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(kw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:xj(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>wA(i));return r.length===1?r[0]:{compositeFilter:{op:Aj(n.op),filters:r}}}(t):te()}function EA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=At.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e){this.ct=e}}function kj(t){const e=Cj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(){this._n=new bj}addToCollectionParentIndex(e,n){return this._n.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(ii.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(ii.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class bj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ao(0)}static Ln(){return new ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(){this.changes=new Co(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Oa(r.mutation,i,Mr.empty(),$t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ca();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=oi();const o=Na(),a=function(){return Na()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ud)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Oa(h.mutation,c,h.mutation.getFieldMask(),$t.now())):o.set(c.key,Mr.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new Oj(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Na();let i=new He((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Mr.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ce()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=aA();h.forEach(m=>{if(!s.has(m)){const y=hA(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$5(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Ai());let a=-1,u=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ce())).next(h=>({batchId:a,changes:K5(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=ca();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ca();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,m){return new sd(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,It.newInvalidDocument(h)))});let a=ca();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Oa(h.mutation,c,Mr.empty(),$t.now()),ad(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mj{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return j.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Vs(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:kj(i.bundledQuery),readTime:Vs(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(){this.overlays=new He(J.comparator),this.hr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ai(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aj(n,r));let s=this.hr.get(n);s===void 0&&(s=ce(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.Pr=new pt(st.Ir),this.Tr=new pt(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new st(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new J(new je([])),r=new st(n,e),i=new st(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new J(new je([])),r=new st(n,e),i=new st(n,e+1);let s=ce();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return J.comparator(e.key,n.key)||me(e.pr,n.pr)}static Er(e,n){return me(e.pr,n.pr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new pt(st.Ir)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oj(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(me);return n.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),j.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new st(new J(s),0);let a=new pt(me);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),j.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Qe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return j.forEach(n.mutations,i=>{const s=new st(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new st(n,0),i=this.wr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e){this.vr=e,this.docs=function(){return new He(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=oi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():It.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=oi();const o=n.path,a=new J(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||S5(C5(h),r)<=0||(i.has(h.key)||ad(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Fr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jj(this)}getSize(e){return j.resolve(this.size)}}class jj extends Nj{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(e){this.persistence=e,this.Mr=new Co(n=>sv(n),ov),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cv,this.targetCount=0,this.Lr=ao.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),j.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ao(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.qn(n),j.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e,n){this.Br={},this.overlays={},this.kr=new tv(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Uj(this),this.indexManager=new Rj,this.remoteDocumentCache=function(i){return new Vj(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Pj(n),this.$r=new Mj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Lj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Fj(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new Bj(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return j.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Bj extends x5{constructor(e){super(),this.currentSequenceNumber=e}}class hv{constructor(e){this.persistence=e,this.zr=new cv,this.jr=null}static Hr(e){return new hv(e)}get Jr(){if(this.jr)return this.jr;throw te()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),j.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Jr,r=>{const i=J.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return j.or([()=>j.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $j{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return p4()?8:A5(KS())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $j;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Zo()<=le.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),j.resolve()):(Zo()<=le.DEBUG&&G("QueryEngine","Query:",us(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Zo()<=le.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):j.resolve())}ji(e,n){if(Dw(n))return j.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dm(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Dm(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Dw(n)||i.isEqual(ee.min())?j.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?j.resolve(null):(Zo()<=le.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),us(n)),this.es(e,o,n,T5(i,-1)).next(a=>a))})}Zi(e,n){let r=new pt(sA(e));return n.forEach((i,s)=>{ad(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Zo()<=le.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",us(n)),this.zi.getDocumentsMatchingQuery(e,n,ii.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wj{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new He(me),this.rs=new Co(s=>sv(s),ov),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dj(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function qj(t,e,n,r){return new Wj(t,e,n,r)}async function TA(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ce();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function CA(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Gj(t,e){const n=de(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(At.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(C,R,T){return C.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,y,h)&&a.push(n.Qr.updateTargetData(s,y))});let u=oi(),c=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Kj(s,o,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(ee.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function Kj(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=oi();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Qj(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function jm(t,e,n){const r=de(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Ww(t,e,n){const r=de(t);let i=ee.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=de(u),m=f.rs.get(h);return m!==void 0?j.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,Ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ce())).next(a=>(Yj(r,W5(e),a),{documents:a,hs:s})))}function Yj(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class qw{constructor(){this.activeTargetIds=X5()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xj{constructor(){this.no=new qw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new qw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu=null;function Ff(){return Mu===null?Mu=function(){return 268435456+Math.round(2147483648*Math.random())}():Mu++,"0x"+Mu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class t6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Ff(),u=this.vo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(h=>(G("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ro("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=Zj[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Ff();return new Promise((o,a)=>{const u=new $x;u.setWithCredentials(!0),u.listenOnce(Wx.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case nc.NO_ERROR:const h=u.getResponseJson();G(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case nc.TIMEOUT:G(Tt,`RPC '${e}' ${s} timed out`),a(new Y(H.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const f=u.getStatus();if(G(Tt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const v=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(T)>=0?T:H.UNKNOWN}(y.status);a(new Y(v,y.message))}else a(new Y(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Y(H.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{G(Tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Ff(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kx(),a=Gx(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Hx({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");G(Tt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,y=!1;const v=new e6({lo:R=>{y?G(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(G(Tt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),G(Tt,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},ho:()=>f.close()}),C=(R,T,w)=>{R.listen(T,x=>{try{w(x)}catch(O){setTimeout(()=>{throw O},0)}})};return C(f,ua.EventType.OPEN,()=>{y||(G(Tt,`RPC '${e}' stream ${i} transport opened.`),v.mo())}),C(f,ua.EventType.CLOSE,()=>{y||(y=!0,G(Tt,`RPC '${e}' stream ${i} transport closed`),v.po())}),C(f,ua.EventType.ERROR,R=>{y||(y=!0,ro(Tt,`RPC '${e}' stream ${i} transport errored:`,R),v.po(new Y(H.UNAVAILABLE,"The operation could not be completed")))}),C(f,ua.EventType.MESSAGE,R=>{var T;if(!y){const w=R.data[0];Qe(!!w);const x=w,O=x.error||((T=x[0])===null||T===void 0?void 0:T.error);if(O){G(Tt,`RPC '${e}' stream ${i} received error:`,O);const V=O.status;let F=function(I){const A=We[I];if(A!==void 0)return fA(A)}(V),S=O.message;F===void 0&&(F=H.INTERNAL,S="Unknown error status: "+V+" with message "+O.message),y=!0,v.po(new Y(F,S)),f.close()}else G(Tt,`RPC '${e}' stream ${i} received:`,w),v.yo(w)}}),C(a,qx.STAT_EVENT,R=>{R.stat===Pm.PROXY?G(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Pm.NOPROXY&&G(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function Vf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){return new mj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new IA(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Y(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r6 extends n6{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=wj(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Vs(o.readTime):ee.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Hw(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Om(u)?{documents:Ej(s,u)}:{query:Tj(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yj(s,o.resumeToken);const c=Fm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=gj(s,o.snapshotVersion.toTimestamp());const c=Fm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Sj(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Hw(this.serializer),n.removeTarget=e,this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Y(H.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Vm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(H.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Vm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(H.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class s6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(fr(n),this.y_=!1):G("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ul(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=de(u);c.M_.add(4),await jl(c),c.N_.set("Unknown"),c.M_.delete(4),await hd(c)}(this))})}),this.N_=new s6(r,i)}}async function hd(t){if(Ul(t))for(const e of t.x_)await e(!0)}async function jl(t){for(const e of t.x_)await e(!1)}function xA(t,e){const n=de(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),gv(n)?mv(n):So(n).Xo()&&pv(n,e))}function fv(t,e){const n=de(t),r=So(n);n.F_.delete(e),r.Xo()&&AA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ul(n)&&n.N_.set("Unknown"))}function pv(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(t).P_(e)}function AA(t,e){t.L_.xe(e),So(t).I_(e)}function mv(t){t.L_=new hj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),So(t).start(),t.N_.w_()}function gv(t){return Ul(t)&&!So(t).Zo()&&t.F_.size>0}function Ul(t){return de(t).M_.size===0}function PA(t){t.L_=void 0}async function a6(t){t.N_.set("Online")}async function l6(t){t.F_.forEach((e,n)=>{pv(t,e)})}async function u6(t,e){PA(t),gv(t)?(t.N_.D_(e),mv(t)):t.N_.set("Unknown")}async function c6(t,e,n){if(t.N_.set("Online"),e instanceof mA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kw(t,r)}else if(e instanceof ic?t.L_.Ke(e):e instanceof pA?t.L_.He(e):t.L_.We(e),!n.isEqual(ee.min()))try{const r=await CA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.F_.get(u);if(!h)return;s.F_.set(u,h.withResumeToken(At.EMPTY_BYTE_STRING,h.snapshotVersion)),AA(s,u);const f=new Lr(h.target,u,c,h.sequenceNumber);pv(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Kw(t,r)}}async function Kw(t,e,n){if(!Fl(e))throw e;t.M_.add(1),await jl(t),t.N_.set("Offline"),n||(n=()=>CA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await hd(t)})}async function Qw(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Ul(n);n.M_.add(3),await jl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await hd(n)}async function h6(t,e){const n=de(t);e?(n.M_.delete(2),await hd(n)):e||(n.M_.add(2),await jl(n),n.N_.set("Unknown"))}function So(t){return t.B_||(t.B_=function(n,r,i){const s=de(n);return s.f_(),new r6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:a6.bind(null,t),To:l6.bind(null,t),Ao:u6.bind(null,t),h_:c6.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),gv(t)?mv(t):t.N_.set("Unknown")):(await t.B_.stop(),PA(t))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new yv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kA(t,e){if(fr("AsyncQueue",`${e}: ${t}`),Fl(t))return new Y(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ca(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.q_=new He(J.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):te():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class lo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lo(e,n,js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class f6{constructor(){this.queries=new Co(e=>iA(e),od),this.onlineState="Unknown",this.z_=new Set}}async function p6(t,e){const n=de(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new d6,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=kA(o,`Initialization of query '${us(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&vv(n)}async function m6(t,e){const n=de(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function g6(t,e){const n=de(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&vv(n)}function y6(t,e,n){const r=de(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function vv(t){t.z_.forEach(e=>{e.next()})}var Um,Xw;(Xw=Um||(Um={})).J_="default",Xw.Cache="cache";class v6{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Um.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.key=e}}class bA{constructor(e){this.key=e}}class _6{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ce(),this.mutatedKeys=ce(),this.Ia=sA(e),this.Ta=new js(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Yw,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),y=ad(this.query,f)?f:null,v=!!m&&this.mutatedKeys.has(m.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let R=!1;m&&y?m.data.isEqual(y.data)?v!==C&&(r.track({type:3,doc:y}),R=!0):this.Ra(m,y)||(r.track({type:2,doc:y}),R=!0,(u&&this.Ia(y,u)>0||c&&this.Ia(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),R=!0):m&&!y&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(a=!0)),R&&(y?(o=o.add(y),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(y,v){const C=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return C(y)-C(v)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new lo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Yw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ce(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new bA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new RA(r))}),n}pa(e){this.la=e.hs,this.Pa=ce();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return lo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class w6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class E6{constructor(e){this.key=e,this.wa=!1}}class T6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Co(a=>iA(a),od),this.Da=new Map,this.Ca=new Set,this.va=new He(J.comparator),this.Fa=new Map,this.Ma=new cv,this.xa={},this.Oa=new Map,this.Na=ao.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function C6(t,e,n=!0){const r=LA(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await NA(r,e,n,!0),i}async function S6(t,e){const n=LA(t);await NA(n,e,!0,!1)}async function NA(t,e,n,r){const i=await Qj(t.localStore,Ln(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await I6(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&xA(t.remoteStore,i),a}async function I6(t,e,n,r,i){t.Ba=(f,m,y)=>async function(C,R,T,w){let x=R.view.da(T);x.Xi&&(x=await Ww(C.localStore,R.query,!1).then(({documents:S})=>R.view.da(S,x)));const O=w&&w.targetChanges.get(R.targetId),V=w&&w.targetMismatches.get(R.targetId)!=null,F=R.view.applyChanges(x,C.isPrimaryClient,O,V);return Zw(C,R.targetId,F.fa),F.snapshot}(t,f,m,y);const s=await Ww(t.localStore,e,!0),o=new _6(e,s.hs),a=o.da(s.documents),u=Vl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Zw(t,n,c.fa);const h=new w6(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function x6(t,e,n){const r=de(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!od(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await jm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&fv(r.remoteStore,i.targetId),zm(r,i.targetId)}).catch(ev)):(zm(r,i.targetId),await jm(r.localStore,i.targetId,!0))}async function A6(t,e){const n=de(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fv(n.remoteStore,r.targetId))}async function OA(t,e){const n=de(t);try{const r=await Gj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Qe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Qe(o.wa):i.removedDocuments.size>0&&(Qe(o.wa),o.wa=!1))}),await MA(n,r,e)}catch(r){await ev(r)}}function Jw(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=de(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&vv(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function P6(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new He(J.comparator);o=o.insert(s,It.newNoDocument(s,ee.min()));const a=ce().add(s),u=new cd(ee.min(),new Map,new He(me),o,a);await OA(r,u),r.va=r.va.remove(s),r.Fa.delete(e),_v(r)}else await jm(r.localStore,e,!1).then(()=>zm(r,e,n)).catch(ev)}function zm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||DA(t,r)})}function DA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(fv(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),_v(t))}function Zw(t,e,n){for(const r of n)r instanceof RA?(t.Ma.addReference(r.key,e),k6(t,r)):r instanceof bA?(G("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||DA(t,r.key)):te()}function k6(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(G("SyncEngine","New document in limbo: "+n),t.Ca.add(r),_v(t))}function _v(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new J(je.fromString(e)),r=t.Na.next();t.Fa.set(r,new E6(n)),t.va=t.va.insert(n,r),xA(t.remoteStore,new Lr(Ln(rA(n.path)),r,"TargetPurposeLimboResolution",tv.oe))}}async function MA(t,e,n){const r=de(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=dv.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const h=de(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.qi,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>j.forEach(m.Qi,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!Fl(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=h.ns.get(m),v=y.snapshotVersion,C=y.withLastLimboFreeSnapshotVersion(v);h.ns=h.ns.insert(m,C)}}}(r.localStore,s))}async function R6(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await TA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new Y(H.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await MA(n,r.us)}}function b6(t,e){const n=de(t),r=n.Fa.get(e);if(r&&r.wa)return ce().add(r.key);{let i=ce();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function LA(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=P6.bind(null,e),e.Sa.h_=g6.bind(null,e.eventManager),e.Sa.ka=y6.bind(null,e.eventManager),e}class eE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=SA(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qj(this.persistence,new Hj,e.initialUser,this.serializer)}createPersistence(e){return new zj(hv.Hr,this.serializer)}createSharedClientState(e){return new Xj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class N6{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R6.bind(null,this.syncEngine),await h6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new f6}()}createDatastore(e){const n=SA(e.databaseInfo.databaseId),r=function(s){return new t6(s)}(e.databaseInfo);return function(s,o,a,u){return new i6(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new o6(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Jw(this.syncEngine,n,0),function(){return Gw.D()?new Gw:new Jj}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new T6(i,s,o,a,u,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=de(r);G("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await jl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=w5.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kA(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jf(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L6(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qw(e.remoteStore,i)),t._onlineComponents=e}function M6(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function L6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await jf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!M6(n))throw n;ro("Error using user provided cache. Falling back to memory cache: "+n),await jf(t,new eE)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await jf(t,new eE);return t._offlineComponents}async function F6(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await tE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await tE(t,new N6))),t._onlineComponents}async function V6(t){const e=await F6(t),n=e.eventManager;return n.onListen=C6.bind(null,e.syncEngine),n.onUnlisten=x6.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=S6.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=A6.bind(null,e.syncEngine),n}function j6(t,e,n={}){const r=new Ni;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new O6({next:m=>{o.enqueueAndForget(()=>m6(s,f)),m.fromCache&&u.source==="server"?c.reject(new Y(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new v6(a,h,{includeMetadataChanges:!0,ra:!0});return p6(s,f)}(await V6(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U6(t,e,n){if(!n)throw new Y(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function z6(t,e,n,r){if(e===!0&&r===!0)throw new Y(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rE(t){if(J.isDocumentKey(t))throw new Y(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function B6(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Bm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=B6(t);throw new Y(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d5;switch(r.type){case"firstParty":return new g5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nE.get(n);r&&(G("ComponentProvider","Removing Datastore"),nE.delete(n),r.terminate())}(this),Promise.resolve()}}function $6(t,e,n,r={}){var i;const s=(t=Bm(t,wv))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ct.MOCK_USER;else{a=GS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ct(c)}t._authCredentials=new f5(new Qx(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dd(this.firestore,e,this._query)}}class Io{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Io(this.firestore,e,this._key)}}class Us extends dd{constructor(e,n,r){super(e,n,rA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Io(this.firestore,null,new J(e))}withConverter(e){return new Us(this.firestore,e,this._path)}}function sE(t,e,...n){if(t=gr(t),U6("collection","path",e),t instanceof wv){const r=je.fromString(e,...n);return rE(r),new Us(t,null,r)}{if(!(t instanceof Io||t instanceof Us))throw new Y(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return rE(r),new Us(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new IA(this,"async_queue_retry"),this.hu=()=>{const n=Vf();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Vf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Vf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ni;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Fl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=yv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&te()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class VA extends wv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new H6}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jA(this),this._firestoreClient.terminate()}}function W6(t,e){const n=typeof t=="object"?t:fy(),r=typeof t=="string"?t:e||"(default)",i=vo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=WS("firestore");s&&$6(i,...s)}return i}function q6(t){return t._firestoreClient||jA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new R5(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,FA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new D6(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lh(At.fromBase64String(e))}catch(n){throw new Y(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lh(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}const K6=new RegExp("[~\\*/\\[\\]]");function Q6(t,e,n){if(e.search(K6)>=0)throw oE(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new UA(...e.split("."))._internalPath}catch{throw oE(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oE(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Y(H.INVALID_ARGUMENT,a+t+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Io(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(BA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Y6 extends zA{data(){return super.data()}}function BA(t,e){return typeof e=="string"?Q6(t,e):e instanceof UA?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X6(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class J6{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return id(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new G6(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pl(e));default:return null}}convertTimestamp(e){const n=si(e);return new $t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Qe(EA(r));const i=new ml(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Z6 extends zA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(BA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sc extends Z6{data(e={}){return super.data(e)}}class e9{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Lu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sc(this._firestore,this._userDataWriter,r.key,r,new Lu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new sc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Lu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new sc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Lu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:t9(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function t9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class n9 extends J6{constructor(e){super(),this.firestore=e}convertBytes(e){return new lh(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Io(this.firestore,null,n)}}function aE(t){t=Bm(t,dd);const e=Bm(t.firestore,VA),n=q6(e),r=new n9(e);return X6(t._query),j6(n,t._query).then(i=>new e9(e,r,t,i))}(function(e,n=!0){(function(i){To=i})(rI),hr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new VA(new p5(r.getProvider("auth-internal")),new v5(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ml(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ln(Iw,"4.6.3",e),ln(Iw,"4.6.3","esm2017")})();class Ev{constructor(){this.firebaseConfig={apiKey:"AIzaSyCPeKJgJRp_ujgF8Bdxkxpp-EH0b4bGhQo",authDomain:"sommieringrtc.firebaseapp.com",databaseURL:"https://sommieringrtc-default-rtdb.firebaseio.com",projectId:"sommieringrtc",storageBucket:"sommieringrtc.appspot.com",messagingSenderId:"1048197500371",appId:"1:1048197500371:web:776f300966dd2ad1daf326",measurementId:"G-2T14TL6Z9S"},this.app=iI(this.firebaseConfig),this.analytics=YL(this.app),this.db=u5(),this.firestore=W6(this.app)}async getUltimoId(e){const n=Qn(this.db,`Mesa-${e}/lastId`),r=await Cw(n);return r.exists()?r.val():0}async incrementarId(e){const r=await this.getUltimoId(e)+1,i=Qn(this.db,`Mesa-${e}/lastId`);return await xm(i,r),r}limpiarDataBase(e){const n=Qn(this.db,`/Mesa-${e}`);JV(n).then(()=>{console.log("Base de datos limpia correctamente.")}).catch(r=>{console.error("Error al limpiar la base de datos:",r)})}async login(e,n){const r=await this.incrementarId(n),i=Qn(this.db,`Mesa-${n}/Usuarios/usuario-${r}`);await xm(i,{idUsuario:r,usuario:e}),console.log("Datos guardados exitosamente!");const o={nombre:e,idMesa:n,idUsuario:r};Oe.setUsuario(o)}async actualizarPedido(e,n,r,i){const s=Qn(this.db,`Mesa-${i}/Usuarios/usuario-${n}`),o={Pedido:e,confirmado:r};try{await Tw(s,o),console.log("Datos guardados exitosamente!")}catch(a){console.error("Error guardando datos:",a)}}async obtenerUsuarios(e){const n=Qn(this.db,`Mesa-${e}/Usuarios`),r=await Cw(n);return r.exists()?r.val():0}listenMesaChanges(e,n){const r=Qn(this.db,`/Mesa-${e}`);e5(r,i=>{const s=i.val();n(s)})}stopListeningMesaChanges(e){const n=Qn(this.db,`/Mesa-${e}`);t5(n)}async asignarIdPedido(e,n){const r=Qn(this.db,`Mesa-${e}`),i={idPedido:n};try{await Tw(r,i),console.log("Datos guardados exitosamente!")}catch(s){console.error("Error guardando datos:",s)}}async obtenerProductos(){try{return(await aE(sE(this.firestore,"Productos"))).docs.map(r=>({id:r.id,...r.data()}))}catch(e){throw console.error("Error obteniendo productos: ",e),e}}async obtenerCategorias(){try{return(await aE(sE(this.firestore,"Categorias"))).docs.map(r=>({id:r.id,...r.data()}))}catch(e){throw console.error("Error obteniendo categorias: ",e),e}}}const fd=new Ev;async function r9(t,e){console.log(e),await fd.login(t,e)}async function i9(t){try{const e=await fd.obtenerUsuarios(t),n=Object.values(e);return console.log("Usuarios obtenidos:",e),n}catch(e){return console.error("Error obteniendo usuarios:",e),[]}}function s9(t,e){fd.actualizarPedido(Oe.obtenerPedido(),Oe.obtenerId(),t,e)}async function o9(t,e){await fd.asignarIdPedido(t,e)}const yl={ActualizarEstadoPedido:s9,AutenticarUsuario:r9,ObtenerUsuarios:i9,AsignarIdPedido:o9};function a9(t){const{restarProducto:e,armarPedido:n,setMostrarDetalleProducto:r,setProductoSeleccionado:i,pedido:s}=t,[o,a]=M.useState(!1),[u,c]=M.useState(!1),{dataProductos:h,dataCategorias:f}=M.useContext(Zi),[m,y]=M.useState(1),v=()=>{const C=Oe.obtenerUsuario();C.confirmado=!0,Oe.setUsuario(C),yl.ActualizarEstadoPedido(C.confirmado,Oe.obtenerIdMesa())};return M.useEffect(()=>{const C=Oe.obtenerUsuario();C.confirmado&&(C.confirmado=!1,Oe.setUsuario(C),yl.ActualizarEstadoPedido(C.confirmado,Oe.obtenerIdMesa()))},[]),{restarProducto:e,armarPedido:n,setMostrarDetalleProducto:r,setProductoSeleccionado:i,pedido:s,MostrarEditarProducto:o,mostrarOpciones:u,dataProductos:h,categoriaVisible:m,confirmarPedido:v,setMostrarOpciones:c,dataCategorias:f,setCategoriaVisible:y}}function l9(t){const{restarProducto:e,armarPedido:n,setMostrarDetalleProducto:r,setProductoSeleccionado:i,pedido:s,MostrarEditarProducto:o,mostrarOpciones:a,dataProductos:u,categoriaVisible:c,confirmarPedido:h,setMostrarOpciones:f,dataCategorias:m,setCategoriaVisible:y}=a9(t);return m.length>0&&u.length>0&&E.jsxs("div",{className:"container-carta",children:[E.jsx(e4,{dataCategorias:m,setCategoriaVisible:y}),E.jsx(YD,{dataCategoria:m.filter(v=>v.Id==c),pedido:s,setProductoSeleccionado:i,armarPedido:n,setMostrarDetalleProducto:r,restarProducto:e,dataProducto:u.filter(v=>v.idCategoria==c)}),o&&E.jsx(t4,{}),E.jsxs("div",{className:"container-btn-opciones",children:[E.jsx("div",{className:"suspensives-fixed",children:E.jsx("button",{onClick:()=>{f(!a)},children:E.jsx("div",{className:"btn-opciones",children:E.jsx(ke,{icon:CO})})})}),E.jsxs("div",{className:`div-btn-desplegables ${a?"active":""} `,children:[E.jsx(Ta,{onClick:()=>{f(!a)},to:"/Carrito",children:E.jsx("button",{className:"btn-carrito",children:E.jsx(ke,{icon:TO})})}),E.jsx(Ta,{to:"/Mesa",children:E.jsx("button",{className:"btn-mesa",children:E.jsx(ke,{icon:yO})})})]})]}),s&&([...s.productos].length>0||[...s.productosPersonalizados].length>0)&&E.jsx("div",{className:"container-btn-confirmar-Pedido",children:E.jsx(Ta,{to:"/Mesa",children:E.jsxs("button",{onClick:()=>{h()},className:"btn-confirmar-pedido",children:["Confirmar pedido",E.jsx(ke,{className:"chevron",icon:AO})]})})})]})}function u9(t){const{InicioSesion:e}=t,[n,r]=M.useState();return{handleButtonClick:async()=>{try{const s=window.location.href,a=new URL(s).searchParams.get("idMesa");await yl.AutenticarUsuario(n,a),e(a)}catch(s){console.error("Error de autenticación:",s)}},nombreUsuario:n,setNombreUsuario:r}}function c9(t){const{handleButtonClick:e,setNombreUsuario:n}=u9(t);return E.jsxs("div",{className:"container-inicio",children:[E.jsx("div",{className:"container-circulo",children:E.jsx("div",{className:"circulo-img",children:E.jsx(ke,{className:"icon-user",icon:Zp})})}),E.jsxs("div",{className:"container-inputs",children:[E.jsx("span",{children:"Hacenos saber tu nombre"}),E.jsxs("div",{className:"div-input",children:[E.jsx("div",{className:"div-logo-user",children:E.jsx(ke,{icon:Zp})}),E.jsx("div",{className:"div-input",children:E.jsx("input",{placeholder:"Nombre",type:"text",onChange:r=>n(r.target.value),name:"descripcion"})})]}),E.jsx("button",{onClick:e,type:"button",children:"Aceptar"})]}),E.jsx("div",{className:"header-inicio",children:E.jsx("div",{className:"div-img",children:E.jsx("img",{className:"img-logo",src:"/assets/LogoSommieResto-sinFondo.png",alt:"Logo"})})})]})}const h9=()=>E.jsx("div",{className:"cerrar-carrito",children:E.jsx(Ta,{to:"/",children:E.jsx(ke,{icon:ny})})});function d9(t){const{item:e,setIngredientesQuitados:n}=t,[r,i]=M.useState(!0);return{ManejoChecked:o=>{n(r?a=>a.length===0?[o]:[...a,o]:a=>a.filter(c=>c!==o)),i(!r)},checked:r,item:e}}function f9(t){const{ManejoChecked:e,checked:n,item:r}=d9(t);return E.jsxs("div",{className:"agregado",children:[E.jsx("div",{className:"div-nombre-agregado",children:E.jsx("span",{children:r})}),E.jsx("div",{className:"div-checkbox",children:E.jsx("input",{checked:n,onChange:()=>{e(r)},type:"checkbox"})})]})}function p9(t){const{productoSeleccionado:e,setMostrarDetalleProducto:n,armarPedido:r}=t,i="Queso,Tomate,Lechuga,Huevo,Pan",[s,o]=M.useState([]),[a,u]=M.useState("");let c=i.split(",");return console.log(e),M.useEffect(()=>{let f=a;f="",s.forEach(m=>{f+=`sin ${m},`}),u(f.slice(0,-1))},[s]),{ProductoPersonalizado:()=>{let f={id:e.id,descripcion:e.descripcion,precio:e.precio,imgURL:e.imgURL,categoria:e.categoria,idCategoria:e.idCategoria,personalizado:!0,ingredientes:a};n(!1),r(f)},ingredientesQuitados:s,arrayIngredientes:c,setIngredientesQuitados:o,setMostrarDetalleProducto:n,productoSeleccionado:e}}function m9(t){const{ProductoPersonalizado:e,ingredientesQuitados:n,arrayIngredientes:r,setIngredientesQuitados:i,setMostrarDetalleProducto:s,productoSeleccionado:o}=p9(t);return E.jsxs("div",{className:"container-detalle-producto",children:[E.jsx("div",{className:"cerrar-detalle",children:E.jsx("a",{onClick:()=>s(!1),children:E.jsx(ke,{icon:ny})})}),E.jsxs("div",{className:"portada-producto",children:[E.jsx("img",{src:`/assets/uploads/${o.imgURL}`,alt:""}),E.jsx("div",{className:"overlay"}),E.jsx("div",{className:"titulo-producto",children:E.jsx("h1",{children:o.descripcion})})]}),E.jsxs("div",{className:"div-detalle-producto-body",children:[E.jsx("div",{className:"div-personalizado",children:r&&r.map((a,u)=>E.jsx("div",{children:E.jsx(f9,{item:a,ingredientesQuitados:n,setIngredientesQuitados:i,arrayIngredientes:r})},u))}),E.jsx("div",{className:"footer-detalle-producto",children:E.jsxs("button",{onClick:e,children:[E.jsx("span",{children:"Agregar"}),E.jsx(ke,{icon:gO})]})})]})]})}class lE{constructor(e,n,r,i,s,o,a=!1,u="completo"){this.id=e,this.idCategoria=n,this.descripcion=r,this.imgURL=i,this.precio=s,this.categoria=o,this.personalizado=a,this.ingredientes=u}}function g9(t){const[e,n]=M.useState(!1),[r,i]=M.useState(),[s,o]=M.useState(Oe.obtenerPedido()),[a,u]=M.useState(!1),{AgregarProducto:c}=M.useContext(Zi);M.useEffect(()=>{a?c(s):u(!0)},[s]);let h={};const f=v=>{o(Oe.obtenerPedido())};function m(v){if(s!=null){let C;h=new Vp(s.id,s.productos,s.productosPersonalizados,s.idPersonalizado);const{categoria:R,descripcion:T,id:w,idCategoria:x,imgURL:O,precio:V,personalizado:F,ingredientes:S}=v;if(!F)C=new lE(w,x,T,O,V,R,F,S),h.productos.push(C);else{console.log(s),console.log(h);let _=h.obtenerIdPersonalizado();C=new lE(w,x,T,O,V,R,F,S),C.idPersonalizados=_,h.productosPersonalizados.push(C)}o(h)}}function y(v){const C={...s};console.log(C);const{id:R,idPersonalizados:T,personalizado:w}=v;if(w){const x=C.productosPersonalizados.find(O=>O.idPersonalizados===T);if(x){const O=C.productosPersonalizados.indexOf(x);C.productosPersonalizados.splice(O,1),o(C)}}else{const x=C.productos.find(O=>O.id===R);if(x){const O=C.productos.indexOf(x);C.productos.splice(O,1),o(C)}}}return{InicioSesion:f,armarPedido:m,restarProducto:y,mostrarDetalleProducto:e,setMostrarDetalleProducto:n,productoSeleccionado:r,setProductoSeleccionado:i,pedido:s}}function y9(){const{InicioSesion:t,armarPedido:e,restarProducto:n,mostrarDetalleProducto:r,setMostrarDetalleProducto:i,productoSeleccionado:s,setProductoSeleccionado:o,pedido:a}=g9();return E.jsx("div",{className:"container-fluid p-0",style:{minHeight:"100vh"},children:Oe.obtenerNombre()!=null?r?E.jsx(m9,{armarPedido:e,restarProducto:n,pedido:a,productoSeleccionado:s,setMostrarDetalleProducto:i}):E.jsx(l9,{armarPedido:e,restarProducto:n,pedido:a,setProductoSeleccionado:o,setMostrarDetalleProducto:i}):E.jsx(c9,{InicioSesion:t})})}function v9(t){const{setPedidoPersona:e,item:n,setPersonaClickeada:r}=t;function i(s){var c,h;const o=((c=n.Pedido)==null?void 0:c.productos)||[],a=((h=n.Pedido)==null?void 0:h.productosPersonalizados)||[],u=o.concat(a);e(u),r(s)}return{setPedidoPersona:e,item:n,setPersonaClickeada:r,obtenerPedido:i}}function _9(t){const{item:e,obtenerPedido:n}=v9(t);return E.jsx("button",{onClick:()=>n(e.nombre),className:`circle ${e.confirmado?"active":""}`,children:E.jsx(ke,{className:"icon-user",icon:Zp})})}function w9(t){const{nombrePersona:e,setPedidoPersona:n,pedidoPersona:r}=t,{dataProductos:i}=M.useContext(Zi),[s,o]=M.useState(0);return M.useEffect(()=>{let a=0;r.map(u=>{a+=u.precio}),o(a)},[i,r]),{gastoTotalPersona:s,nombrePersona:e,setPedidoPersona:n,pedidoPersona:r}}function E9(t){const{gastoTotalPersona:e,nombrePersona:n,setPedidoPersona:r,pedidoPersona:i}=w9(t),s=new Set(i.map(o=>`${o.descripcion}-${o.ingredientes}`));return E.jsx("div",{className:"container-pedido-persona",children:E.jsxs("div",{className:"div-pedido-persona",children:[E.jsxs("div",{className:"header",children:["Menu de ",n," Total $ ",e,E.jsx("div",{className:"row-cerrar",onClick:()=>r(),children:E.jsx(ke,{icon:ry})})]}),[...s].map((o,a)=>{const[u,c]=o.split("-"),h=i.filter(f=>f.descripcion===u&&f.ingredientes===c);return E.jsxs("div",{className:"card-producto",children:[E.jsxs("div",{className:"div-descripcion",children:[E.jsxs("div",{className:"titulo-producto",children:[u,h.length>1?E.jsxs("strong",{className:"ms-3",children:["x",h.length]}):null]}),E.jsx("span",{className:"ingredientes",children:c})]}),E.jsx("div",{className:"div-precio",children:E.jsxs("span",{children:["$",h[0].precio*h.length]})})]},a)})]})})}function T9({setMostrarAlerta:t,CancelarPedido:e,AltaPedido:n,titulo:r,mensaje:i,subMensaje:s,textConfirmButton:o,textCancelButton:a,cancelButton:u=!1}){return E.jsx("div",{className:"container-popup",children:E.jsx("div",{className:"container-card",children:E.jsxs("div",{className:"card-popup",children:[E.jsxs("div",{className:"header",children:[" ",E.jsx("h2",{children:r})]}),E.jsxs("div",{className:"body",children:[E.jsx("span",{children:i}),E.jsx("span",{children:s})]}),E.jsxs("div",{className:"footer",children:[E.jsxs("button",{onClick:()=>{t(2)},className:"btn btn-confirm",children:[" ",o]}),u&&E.jsx("button",{onClick:()=>{e()},className:"btn btn-cancelar",children:a})]})]})})})}var $A={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var u in s)e.call(s,u)&&s[u]&&r.push(u)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})($A);var C9=$A.exports;const dn=hh(C9);function S9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $m(t,e){return $m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},$m(t,e)}function I9(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,$m(t,e)}const x9=["xxl","xl","lg","md","sm","xs"],A9="xs",P9=M.createContext({prefixes:{},breakpoints:x9,minBreakpoint:A9});function $n(t,e){const{prefixes:n}=M.useContext(P9);return t||n[e]||e}function k9(t){return t&&t.ownerDocument||document}function R9(t){var e=k9(t);return e&&e.defaultView||window}function b9(t,e){return R9(t).getComputedStyle(t,e)}var N9=/([A-Z])/g;function O9(t){return t.replace(N9,"-$1").toLowerCase()}var D9=/^ms-/;function Fu(t){return O9(t).replace(D9,"-ms-")}var M9=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function L9(t){return!!(t&&M9.test(t))}function uh(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Fu(e))||b9(t).getPropertyValue(Fu(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Fu(i)):L9(i)?r+=i+"("+s+") ":n+=Fu(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}const uE={disabled:!1},HA=nn.createContext(null);var F9=function(e){return e.scrollTop},da="unmounted",xr="exited",Ar="entering",_i="entered",ch="exiting",yr=function(t){I9(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,u;return s.appearStatus=null,r.in?a?(u=xr,s.appearStatus=Ar):u=_i:r.unmountOnExit||r.mountOnEnter?u=da:u=xr,s.state={status:u},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===da?{status:xr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Ar&&o!==_i&&(s=Ar):(o===Ar||o===_i)&&(s=ch)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Ar){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:sa.findDOMNode(this);o&&F9(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===xr&&this.setState({status:da})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,u=this.props.nodeRef?[a]:[sa.findDOMNode(this),a],c=u[0],h=u[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!i&&!o||uE.disabled){this.safeSetState({status:_i},function(){s.props.onEntered(c)});return}this.props.onEnter(c,h),this.safeSetState({status:Ar},function(){s.props.onEntering(c,h),s.onTransitionEnd(m,function(){s.safeSetState({status:_i},function(){s.props.onEntered(c,h)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:sa.findDOMNode(this);if(!s||uE.disabled){this.safeSetState({status:xr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:ch},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:xr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:sa.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=u[0],h=u[1];this.props.addEndListener(c,h)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===da)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=S9(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return nn.createElement(HA.Provider,{value:null},typeof o=="function"?o(i,a):nn.cloneElement(nn.Children.only(o),a))},e}(nn.Component);yr.contextType=HA;yr.propTypes={};function ls(){}yr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ls,onEntering:ls,onEntered:ls,onExit:ls,onExiting:ls,onExited:ls};yr.UNMOUNTED=da;yr.EXITED=xr;yr.ENTERING=Ar;yr.ENTERED=_i;yr.EXITING=ch;const V9=yr,j9=!!(typeof window<"u"&&window.document&&window.document.createElement);var Hm=!1,Wm=!1;try{var Uf={get passive(){return Hm=!0},get once(){return Wm=Hm=!0}};j9&&(window.addEventListener("test",Uf,Uf),window.removeEventListener("test",Uf,!0))}catch{}function U9(t,e,n,r){if(r&&typeof r!="boolean"&&!Wm){var i=r.once,s=r.capture,o=n;!Wm&&i&&(o=n.__once||function a(u){this.removeEventListener(e,a,s),n.call(this,u)},n.__once=o),t.addEventListener(e,o,Hm?r:s)}t.addEventListener(e,n,r)}function z9(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function WA(t,e,n,r){return U9(t,e,n,r),function(){z9(t,e,n,r)}}function B9(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function $9(t){var e=uh(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function H9(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||B9(t,"transitionend",!0)},e+n),s=WA(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function W9(t,e,n,r){n==null&&(n=$9(t)||0);var i=H9(t,n,r),s=WA(t,"transitionend",e);return function(){i(),s()}}function cE(t,e){const n=uh(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function q9(t,e){const n=cE(t,"transitionDuration"),r=cE(t,"transitionDelay"),i=W9(t,s=>{s.target===t&&(i(),e(s))},n+r)}function ea(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function G9(t){t.offsetHeight}const hE=t=>!t||typeof t=="function"?t:e=>{t.current=e};function K9(t,e){const n=hE(t),r=hE(e);return i=>{n&&n(i),r&&r(i)}}function Q9(t,e){return M.useMemo(()=>K9(t,e),[t,e])}function Y9(t){return t&&"setState"in t?sa.findDOMNode(t):t??null}const X9=nn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:u,...c},h)=>{const f=M.useRef(null),m=Q9(f,u),y=F=>{m(Y9(F))},v=F=>S=>{F&&f.current&&F(f.current,S)},C=M.useCallback(v(t),[t]),R=M.useCallback(v(e),[e]),T=M.useCallback(v(n),[n]),w=M.useCallback(v(r),[r]),x=M.useCallback(v(i),[i]),O=M.useCallback(v(s),[s]),V=M.useCallback(v(o),[o]);return E.jsx(V9,{ref:h,...c,onEnter:C,onEntered:T,onEntering:R,onExit:w,onExited:O,onExiting:x,addEndListener:V,nodeRef:f,children:typeof a=="function"?(F,S)=>a(F,{...S,ref:y}):nn.cloneElement(a,{ref:y})})}),J9=X9,Z9={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function eU(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=Z9[t];return r+parseInt(uh(e,i[0]),10)+parseInt(uh(e,i[1]),10)}const tU={[xr]:"collapse",[ch]:"collapsing",[Ar]:"collapsing",[_i]:"collapse show"},nU=nn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:u=!1,timeout:c=300,mountOnEnter:h=!1,unmountOnExit:f=!1,appear:m=!1,getDimensionValue:y=eU,...v},C)=>{const R=typeof a=="function"?a():a,T=M.useMemo(()=>ea(F=>{F.style[R]="0"},t),[R,t]),w=M.useMemo(()=>ea(F=>{const S=`scroll${R[0].toUpperCase()}${R.slice(1)}`;F.style[R]=`${F[S]}px`},e),[R,e]),x=M.useMemo(()=>ea(F=>{F.style[R]=null},n),[R,n]),O=M.useMemo(()=>ea(F=>{F.style[R]=`${y(R,F)}px`,G9(F)},r),[r,y,R]),V=M.useMemo(()=>ea(F=>{F.style[R]=null},i),[R,i]);return E.jsx(J9,{ref:C,addEndListener:q9,...v,"aria-expanded":v.role?u:null,onEnter:T,onEntering:w,onEntered:x,onExit:O,onExiting:V,childRef:o.ref,in:u,timeout:c,mountOnEnter:h,unmountOnExit:f,appear:m,children:(F,S)=>nn.cloneElement(o,{...S,className:dn(s,o.props.className,tU[F],R==="width"&&"collapse-horizontal")})})}),rU=nU,qA=t=>M.forwardRef((e,n)=>E.jsx("div",{...e,ref:n,className:dn(e.className,t)})),GA=M.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=$n(e,"card-body"),E.jsx(n,{ref:i,className:dn(t,e),...r})));GA.displayName="CardBody";const KA=GA,QA=M.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=$n(e,"card-footer"),E.jsx(n,{ref:i,className:dn(t,e),...r})));QA.displayName="CardFooter";const iU=QA,YA=M.createContext(null);YA.displayName="CardHeaderContext";const sU=YA,XA=M.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=$n(t,"card-header"),o=M.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return E.jsx(sU.Provider,{value:o,children:E.jsx(n,{ref:i,...r,className:dn(e,s)})})});XA.displayName="CardHeader";const oU=XA,JA=M.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=$n(t,"card-img");return E.jsx(r,{ref:s,className:dn(n?`${o}-${n}`:o,e),...i})});JA.displayName="CardImg";const aU=JA,ZA=M.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=$n(e,"card-img-overlay"),E.jsx(n,{ref:i,className:dn(t,e),...r})));ZA.displayName="CardImgOverlay";const lU=ZA,eP=M.forwardRef(({className:t,bsPrefix:e,as:n="a",...r},i)=>(e=$n(e,"card-link"),E.jsx(n,{ref:i,className:dn(t,e),...r})));eP.displayName="CardLink";const uU=eP,cU=qA("h6"),tP=M.forwardRef(({className:t,bsPrefix:e,as:n=cU,...r},i)=>(e=$n(e,"card-subtitle"),E.jsx(n,{ref:i,className:dn(t,e),...r})));tP.displayName="CardSubtitle";const hU=tP,nP=M.forwardRef(({className:t,bsPrefix:e,as:n="p",...r},i)=>(e=$n(e,"card-text"),E.jsx(n,{ref:i,className:dn(t,e),...r})));nP.displayName="CardText";const dU=nP,fU=qA("h5"),rP=M.forwardRef(({className:t,bsPrefix:e,as:n=fU,...r},i)=>(e=$n(e,"card-title"),E.jsx(n,{ref:i,className:dn(t,e),...r})));rP.displayName="CardTitle";const pU=rP,iP=M.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:o,as:a="div",...u},c)=>{const h=$n(t,"card");return E.jsx(a,{ref:c,...u,className:dn(e,h,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?E.jsx(KA,{children:o}):o})});iP.displayName="Card";const zf=Object.assign(iP,{Img:aU,Title:pU,Subtitle:hU,Body:KA,Link:uU,Text:dU,Header:oU,Footer:iU,ImgOverlay:lU});function sP({item:t}){const[e,n]=M.useState(!1),r=new Set(t.productos.map(i=>`${i.descripcion}-${i.ingredientes}`));return E.jsx("div",{className:"container-collapse",children:E.jsxs(zf,{children:[E.jsx(zf.Header,{onClick:()=>n(!e),children:E.jsxs("div",{className:"card-header-gastos",children:[E.jsx("div",{className:"div-chevron",children:E.jsx(ke,{icon:e?vO:SO})}),E.jsx("div",{className:"div-descripcion",children:t.nombre}),E.jsxs("div",{className:"div-precio",children:["$",t.precioTotal]})]})}),E.jsx(rU,{in:e,children:E.jsx("div",{id:"Collapse",children:E.jsx(zf.Body,{children:[...r].map((i,s)=>{const[o,a]=i.split("-"),u=t.productos.filter(c=>c.descripcion===o&&c.ingredientes===a);return E.jsxs("div",{className:"producto-collapse",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"titulo-producto",children:[o,u.length>1?E.jsxs("strong",{className:"ms-3",children:["x",u.length]}):null]}),E.jsx("div",{className:"ingredientes",children:a})]}),E.jsx("div",{children:u[0].precio*u.length})]},s)})})})})]})})}function mU({setMostrarModalGastos:t,pedidosRealizados:e}){return E.jsx("div",{className:"container-gastos",children:E.jsxs("div",{className:"div-pedido-persona",children:[E.jsxs("div",{className:"header",children:[E.jsx("h4",{children:"Gastos"}),E.jsx("div",{className:"row-cerrar",onClick:()=>t(!1),children:E.jsx(ke,{icon:ry})})]}),e.map((n,r)=>E.jsx("div",{children:E.jsx(sP,{item:n})},r))]})})}function gU({usuariosActivos:t,CancelarPedido:e,AltaPedido:n}){console.log(t);const[r,i]=M.useState([]);return M.useEffect(()=>{const o=t.filter(a=>a.confirmado).map(a=>{const u=a.Pedido.productos||[],c=a.Pedido.productosPersonalizados||[],h=u.concat(c),f=h.reduce((m,y)=>m+y.precio,0);return{id:a.id,nombre:a.usuario,precioTotal:f,productos:h}});i(a=>[...a,...o])},[t]),E.jsxs("div",{className:"container-confirmacionPedido",children:[E.jsxs("div",{className:"header-confirmacion",children:[E.jsx("h5",{children:"Estas a punto de realizar el siguiente pedido:"}),E.jsx("div",{className:"row-cerrar",onClick:()=>e(),children:E.jsx(ke,{icon:ry})})]}),E.jsx("div",{className:"body-confirmacion",children:r.map((s,o)=>E.jsx("div",{children:E.jsx(sP,{item:s})},o))}),E.jsx("div",{className:"bottom-confirmacion",children:E.jsx("div",{className:"btn-confirmacion",children:E.jsx("button",{onClick:()=>{n({idMesa:Oe.obtenerIdMesa(),idEstado:2})},className:"btn btn-confirm",children:" Confirmar"})})})]})}var oP="/api/ProductoPedido/";const yU=t=>{console.log("LLEGO"),console.log(t);const e=oP;return new Promise((n,r)=>{jh.post(e,t).then(i=>{console.log("Solicitud POST exitosa:",i.data),n(i.data)}).catch(i=>{console.error("Error en la solicitud POST:",i),r(i)})})};async function vU(t){let e=oP+"pedido/"+t;return await jh.get(e).then(r=>r.data).catch(r=>console.error(r))}const aP={AltaProductoPedido:yU,obtenerPedidosEntregados:vU},_U=async(t,e,n)=>{let r=n;if(console.log(r),r=="-1")try{r=(await US.AltaPedido(t)).id,await yl.AsignarIdPedido(t.idMesa,r)}catch(i){throw console.error(i),i}await Promise.all(e.map(async i=>{if(i.confirmado){const s=[...i.Pedido.productos||[],...i.Pedido.productosPersonalizados||[]];if(s.length>0){const o=s.map(a=>aP.AltaProductoPedido({IdPedido:r,idProducto:a.id,idUsuario:i.id,Descripcion:a.ingredientes}));return Promise.all(o)}else return Promise.resolve([])}}))},wU={AltaPedido:_U};function EU(t){const e=new Ev,{Pedido:n,pedidoConfirmado:r,setPedido:i}=M.useContext(Zi),[s,o]=M.useState([]),[a,u]=M.useState(!1),[c,h]=M.useState([]),[f,m]=M.useState([]),[y,v]=M.useState(!1),[C,R]=M.useState(!1),[T,w]=M.useState(),[x,O]=M.useState(),[V,F]=M.useState(!1);e.listenMesaChanges(Oe.obtenerIdMesa(),Re=>{if(Re){const lt=Object.values(Re.Usuarios);JSON.stringify(lt)!==JSON.stringify(s)&&o(lt)}}),M.useEffect(()=>{Oe.setIdPedido(T)},[T]);const S=Re=>(R(!0),new Promise((lt,fn)=>{wU.AltaPedido(Re,s,T).then(()=>{v(!1),lt()}).catch(rt=>{console.error("Error al realizar el pedido:",rt),fn(rt)}).finally(()=>{R(!1)})})),_=()=>{F(!0),aP.obtenerPedidosEntregados(T).then(Re=>{const lt=Re.reduce((rt,$)=>{const Q=$.idUsuario,Z=$.producto.precio;return $.producto.ingredientes=$.descripcion,rt[Q]?(rt[Q].precioTotal+=Z,rt[Q].productos.push($.producto)):rt[Q]={id:Q,nombre:I(Q),precioTotal:Z,productos:[$.producto]},rt},{}),fn=Object.values(lt);O(fn)})};function I(Re){const lt=s.find(fn=>fn.id===Re);return lt?lt.usuario:"Desconocido"}const A=()=>{v(!1)};M.useEffect(()=>{a||(yl.ObtenerUsuarios(Oe.obtenerIdMesa()).then(Re=>{o(Re)}),u(!0))},[]);let k=0;return{Pedido:n,pedidoConfirmado:r,setPedido:i,usuariosActivos:s,banderaPrimerRender:a,pedidoPersona:c,personaClickeada:f,mostrarAlerta:y,cargando:C,idPedido:T,pedidosRealizados:x,mostrarModalGastos:V,setPersonaClickeada:m,setPedidoPersona:h,setMostrarAlerta:v,AltaPedido:S,mostrarGastos:_,obtenerNombreUsuario:I,CancelarPedido:A,sumarCantidadActivos:()=>{k++},mostrarMensaje:()=>{s.length==k?v(2):v(1)}}}function TU(){const{pedidoConfirmado:t,usuariosActivos:e,pedidoPersona:n,personaClickeada:r,mostrarAlerta:i,cargando:s,pedidosRealizados:o,mostrarModalGastos:a,setPersonaClickeada:u,setPedidoPersona:c,setMostrarAlerta:h,AltaPedido:f,mostrarGastos:m,CancelarPedido:y,sumarCantidadActivos:v,mostrarMensaje:C}=EU(),R=()=>E.jsxs("div",{className:"container-mesa",children:[E.jsxs("div",{className:"numero-mesa",children:[E.jsx(h9,{}),E.jsxs("h4",{children:["Mesa ",Oe.obtenerIdMesa()]})]}),E.jsx("div",{className:"mosaico-personas",children:e&&e.map((T,w)=>E.jsxs("div",{className:"item",children:[T.confirmado&&v(),E.jsx(_9,{pedidoConfirmado:t,setPersonaClickeada:u,setPedidoPersona:c,item:T}),E.jsx("div",{children:T.usuario})]},w))}),E.jsxs("div",{className:"div-btn-hacer-pedido",children:[E.jsx("a",{className:"btn-pedir-cuenta",children:"Pedir cuenta"}),E.jsx("a",{onClick:()=>C(),className:"btn-hacer-pedido",children:"Hacer Pedido"}),E.jsx("a",{onClick:()=>m(),className:"btn-pedir-cuenta",children:"Ver gastos"})]})]});return E.jsxs("main",{className:"main-mesa",children:[n&&n.length>0&&E.jsx(E.Fragment,{children:E.jsx(E9,{nombrePersona:r,setPedidoPersona:c,pedidoPersona:n})}),!(n!=null&&n.length)>0&&i!==2&&R(),i===1?E.jsx(T9,{setMostrarAlerta:h,CancelarPedido:y,AltaPedido:f,titulo:"Atención",mensaje:"No están todos listos, deseas realizar el pedido igualmente?",textConfirmButton:"Aceptar",cancelButton:!0,textCancelButton:"Cancelar"}):i===2?E.jsx(gU,{AltaPedido:f,usuariosActivos:e,CancelarPedido:y}):null,s&&E.jsx("div",{className:"spin-carga",style:{textAlign:"center",marginTop:"10px"},children:E.jsx(ke,{icon:h1,spin:!0,size:"3x",color:"#FFA500"})}),a&&(o?E.jsx(mU,{setMostrarModalGastos,pedidosRealizados:o}):E.jsx(E.Fragment,{children:E.jsx("div",{className:"spin-carga",style:{textAlign:"center",marginTop:"10px"},children:E.jsx(ke,{icon:h1,spin:!0,size:"3x",color:"#FFA500"})})}))]})}function CU(){return E.jsx(TU,{})}const dE=new Ev;function SU(){const[t,e]=M.useState(Oe.obtenerPedido()),[n,r]=M.useState({}),[i,s]=M.useState({}),o=a=>{Oe.setPedido(a),e(Oe.obtenerPedido())};return M.useEffect(()=>{const a=async()=>{try{const c=await dE.obtenerProductos();r(c)}catch(c){console.error("Error fetching Productos: ",c)}},u=async()=>{try{const h=(await dE.obtenerCategorias()).sort((f,m)=>f.id.localeCompare(m.id));s(h)}catch(c){console.error("Error fetching categorias: ",c)}};a(),u()},[]),E.jsx(E.Fragment,{children:E.jsx(Zi.Provider,{value:{dataProductos:n,dataCategorias:i,Pedido:t,AgregarProducto:o},children:E.jsx(ib,{children:E.jsxs(J2,{children:[E.jsx(oa,{path:"/",element:E.jsx(y9,{})}),E.jsx(oa,{path:"/Carrito",element:E.jsx(KD,{})}),E.jsx(oa,{path:"/Mesa",element:E.jsx(CU,{})}),E.jsx(oa,{path:"*",element:E.jsx("h1",{children:"No se encontró página"})})]})})})})}Bf.createRoot(document.getElementById("root")).render(E.jsx(SU,{}));
