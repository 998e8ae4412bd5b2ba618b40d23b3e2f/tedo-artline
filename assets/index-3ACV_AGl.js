function Eg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bp={exports:{}},$o={},Vp={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=Symbol.for("react.element"),Tg=Symbol.for("react.portal"),Pg=Symbol.for("react.fragment"),$g=Symbol.for("react.strict_mode"),Lg=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),Fg=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),Ig=Symbol.for("react.suspense"),Ng=Symbol.for("react.memo"),Mg=Symbol.for("react.lazy"),zc=Symbol.iterator;function Rg(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var Up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wp=Object.assign,Hp={};function zr(e,t,n){this.props=e,this.context=t,this.refs=Hp,this.updater=n||Up}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gp(){}Gp.prototype=zr.prototype;function Cu(e,t,n){this.props=e,this.context=t,this.refs=Hp,this.updater=n||Up}var ju=Cu.prototype=new Gp;ju.constructor=Cu;Wp(ju,zr.prototype);ju.isPureReactComponent=!0;var Fc=Array.isArray,Kp=Object.prototype.hasOwnProperty,ku={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function Qp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Kp.call(t,r)&&!Yp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ri,type:e,key:s,ref:o,props:i,_owner:ku.current}}function _g(e,t){return{$$typeof:Ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ri}function Ag(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oc=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ag(""+e.key):t.toString(36)}function Ss(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ri:case Tg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ta(o,0):r,Fc(i)?(n="",e!=null&&(n=e.replace(Oc,"$&/")+"/"),Ss(i,t,n,"",function(c){return c})):i!=null&&(Eu(i)&&(i=_g(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Oc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Fc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ta(s,a);o+=Ss(s,t,n,l,i)}else if(l=Rg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ta(s,a++),o+=Ss(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yi(e,t,n){if(e==null)return e;var r=[],i=0;return Ss(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Dg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},bs={transition:null},Bg={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:bs,ReactCurrentOwner:ku};function Xp(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Yi,forEach:function(e,t,n){Yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yi(e,function(){t++}),t},toArray:function(e){return Yi(e,function(t){return t})||[]},only:function(e){if(!Eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=zr;V.Fragment=Pg;V.Profiler=Lg;V.PureComponent=Cu;V.StrictMode=$g;V.Suspense=Ig;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg;V.act=Xp;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ku.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Kp.call(t,l)&&!Yp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ri,type:e.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(e){return e={$$typeof:Fg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zg,_context:e},e.Consumer=e};V.createElement=Qp;V.createFactory=function(e){var t=Qp.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Og,render:e}};V.isValidElement=Eu;V.lazy=function(e){return{$$typeof:Mg,_payload:{_status:-1,_result:e},_init:Dg}};V.memo=function(e,t){return{$$typeof:Ng,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};V.unstable_act=Xp;V.useCallback=function(e,t){return Pe.current.useCallback(e,t)};V.useContext=function(e){return Pe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Pe.current.useEffect(e,t)};V.useId=function(){return Pe.current.useId()};V.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Pe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};V.useRef=function(e){return Pe.current.useRef(e)};V.useState=function(e){return Pe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Pe.current.useTransition()};V.version="18.3.1";Vp.exports=V;var k=Vp.exports;const Q=bu(k),Vg=Eg({__proto__:null,default:Q},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=k,Wg=Symbol.for("react.element"),Hg=Symbol.for("react.fragment"),Gg=Object.prototype.hasOwnProperty,Kg=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yg={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Gg.call(t,r)&&!Yg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Wg,type:e,key:s,ref:o,props:i,_owner:Kg.current}}$o.Fragment=Hg;$o.jsx=qp;$o.jsxs=qp;Bp.exports=$o;var u=Bp.exports,ll={},Jp={exports:{}},Ge={},Zp={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,N){var R=z.length;z.push(N);e:for(;0<R;){var H=R-1>>>1,K=z[H];if(0<i(K,N))z[H]=N,z[R]=K,R=H;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var N=z[0],R=z.pop();if(R!==N){z[0]=R;e:for(var H=0,K=z.length,mn=K>>>1;H<mn;){var nt=2*(H+1)-1,_t=z[nt],Re=nt+1,bt=z[Re];if(0>i(_t,R))Re<K&&0>i(bt,_t)?(z[H]=bt,z[Re]=R,H=Re):(z[H]=_t,z[nt]=R,H=nt);else if(Re<K&&0>i(bt,R))z[H]=bt,z[Re]=R,H=Re;else break e}}return N}function i(z,N){var R=z.sortIndex-N.sortIndex;return R!==0?R:z.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,m=3,x=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=z)r(c),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(c)}}function y(z){if(w=!1,g(z),!v)if(n(l)!==null)v=!0,se(C);else{var N=n(c);N!==null&&Le(y,N.startTime-z)}}function C(z,N){v=!1,w&&(w=!1,p(P),P=-1),x=!0;var R=m;try{for(g(N),f=n(l);f!==null&&(!(f.expirationTime>N)||z&&!O());){var H=f.callback;if(typeof H=="function"){f.callback=null,m=f.priorityLevel;var K=H(f.expirationTime<=N);N=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(l)&&r(l),g(N)}else r(l);f=n(l)}if(f!==null)var mn=!0;else{var nt=n(c);nt!==null&&Le(y,nt.startTime-N),mn=!1}return mn}finally{f=null,m=R,x=!1}}var j=!1,E=null,P=-1,$=5,T=-1;function O(){return!(e.unstable_now()-T<$)}function I(){if(E!==null){var z=e.unstable_now();T=z;var N=!0;try{N=E(!0,z)}finally{N?F():(j=!1,E=null)}}else j=!1}var F;if(typeof h=="function")F=function(){h(I)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,A=_.port2;_.port1.onmessage=I,F=function(){A.postMessage(null)}}else F=function(){b(I,0)};function se(z){E=z,j||(j=!0,F())}function Le(z,N){P=b(function(){z(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,se(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var R=m;m=N;try{return z()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,N){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=m;m=z;try{return N()}finally{m=R}},e.unstable_scheduleCallback=function(z,N,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,z){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=R+K,z={id:d++,callback:N,priorityLevel:z,startTime:R,expirationTime:K,sortIndex:-1},R>H?(z.sortIndex=R,t(c,z),n(l)===null&&z===n(c)&&(w?(p(P),P=-1):w=!0,Le(y,R-H))):(z.sortIndex=K,t(l,z),v||x||(v=!0,se(C))),z},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(z){var N=m;return function(){var R=m;m=N;try{return z.apply(this,arguments)}finally{m=R}}}})(ef);Zp.exports=ef;var Qg=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg=k,He=Qg;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tf=new Set,mi={};function Nn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(mi[e]=t,e=0;e<t.length;e++)tf.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,qg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ic={},Nc={};function Jg(e){return ul.call(Nc,e)?!0:ul.call(Ic,e)?!1:qg.test(e)?Nc[e]=!0:(Ic[e]=!0,!1)}function Zg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function e0(e,t,n,r){if(t===null||typeof t>"u"||Zg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,Pu);we[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,Pu);we[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,Pu);we[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function $u(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(e0(t,n,i,r)&&(n=null),r||i===null?Jg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Lu=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),nf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),zu=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),Fu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),sf=Symbol.for("react.offscreen"),Mc=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,na;function Jr(e){if(na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ra=!1;function ia(e,t){if(!e||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function t0(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Jn:return"Portal";case cl:return"Profiler";case Lu:return"StrictMode";case dl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rf:return(e.displayName||"Context")+".Consumer";case nf:return(e._context.displayName||"Context")+".Provider";case zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fu:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function n0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===Lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function r0(e){var t=of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=r0(e))}function af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=of(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lf(e,t){t=t.checked,t!=null&&$u(e,"checked",t,!1)}function ml(e,t){lf(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&gl(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _c(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gl(e,t,n){(t!=="number"||Us(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Zr(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function uf(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,df=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i0=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(e){i0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ri[t]=ri[e]})});function pf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ri.hasOwnProperty(e)&&ri[e]?(""+t).trim():t+"px"}function ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var s0=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(s0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function Ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,fr=null,hr=null;function Bc(e){if(e=Di(e)){if(typeof bl!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Io(t),bl(e.stateNode,e.type,t))}}function hf(e){fr?hr?hr.push(e):hr=[e]:fr=e}function mf(){if(fr){var e=fr,t=hr;if(hr=fr=null,Bc(e),t)for(e=0;e<t.length;e++)Bc(t[e])}}function gf(e,t){return e(t)}function vf(){}var sa=!1;function xf(e,t,n){if(sa)return e(t,n);sa=!0;try{return gf(e,t,n)}finally{sa=!1,(fr!==null||hr!==null)&&(vf(),mf())}}function vi(e,t){var n=e.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Cl=!1;if(zt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Cl=!1}function o0(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ii=!1,Ws=null,Hs=!1,jl=null,a0={onError:function(e){ii=!0,Ws=e}};function l0(e,t,n,r,i,s,o,a,l){ii=!1,Ws=null,o0.apply(a0,arguments)}function u0(e,t,n,r,i,s,o,a,l){if(l0.apply(this,arguments),ii){if(ii){var c=Ws;ii=!1,Ws=null}else throw Error(L(198));Hs||(Hs=!0,jl=c)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(Mn(e)!==e)throw Error(L(188))}function c0(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vc(i),e;if(s===r)return Vc(i),t;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function yf(e){return e=c0(e),e!==null?Sf(e):null}function Sf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sf(e);if(t!==null)return t;e=e.sibling}return null}var bf=He.unstable_scheduleCallback,Uc=He.unstable_cancelCallback,d0=He.unstable_shouldYield,p0=He.unstable_requestPaint,oe=He.unstable_now,f0=He.unstable_getCurrentPriorityLevel,Iu=He.unstable_ImmediatePriority,Cf=He.unstable_UserBlockingPriority,Gs=He.unstable_NormalPriority,h0=He.unstable_LowPriority,jf=He.unstable_IdlePriority,Lo=null,yt=null;function m0(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Lo,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:x0,g0=Math.log,v0=Math.LN2;function x0(e){return e>>>=0,e===0?32:31-(g0(e)/v0|0)|0}var Ji=64,Zi=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ei(a):(s&=o,s!==0&&(r=ei(s)))}else o=n&~i,o!==0?r=ei(o):s!==0&&(r=ei(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),i=1<<n,r|=e[n],t&=~i;return r}function w0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-at(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=w0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kf(){var e=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function S0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function Ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tf,Mu,Pf,$f,Lf,El=!1,es=[],qt=null,Jt=null,Zt=null,xi=new Map,wi=new Map,Wt=[],b0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wc(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Dr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Di(t),t!==null&&Mu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function C0(e,t,n,r,i){switch(t){case"focusin":return qt=Dr(qt,e,t,n,r,i),!0;case"dragenter":return Jt=Dr(Jt,e,t,n,r,i),!0;case"mouseover":return Zt=Dr(Zt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return xi.set(s,Dr(xi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wi.set(s,Dr(wi.get(s)||null,e,t,n,r,i)),!0}return!1}function zf(e){var t=Sn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=wf(n),t!==null){e.blockedOn=t,Lf(e.priority,function(){Pf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sl=r,n.target.dispatchEvent(r),Sl=null}else return t=Di(n),t!==null&&Mu(t),e.blockedOn=n,!1;t.shift()}return!0}function Hc(e,t,n){Cs(e)&&n.delete(t)}function j0(){El=!1,qt!==null&&Cs(qt)&&(qt=null),Jt!==null&&Cs(Jt)&&(Jt=null),Zt!==null&&Cs(Zt)&&(Zt=null),xi.forEach(Hc),wi.forEach(Hc)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,j0)))}function yi(e){function t(i){return Br(i,e)}if(0<es.length){Br(es[0],e);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Br(qt,e),Jt!==null&&Br(Jt,e),Zt!==null&&Br(Zt,e),xi.forEach(t),wi.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)zf(n),n.blockedOn===null&&Wt.shift()}var mr=Mt.ReactCurrentBatchConfig,Ys=!0;function k0(e,t,n,r){var i=Y,s=mr.transition;mr.transition=null;try{Y=1,Ru(e,t,n,r)}finally{Y=i,mr.transition=s}}function E0(e,t,n,r){var i=Y,s=mr.transition;mr.transition=null;try{Y=4,Ru(e,t,n,r)}finally{Y=i,mr.transition=s}}function Ru(e,t,n,r){if(Ys){var i=Tl(e,t,n,r);if(i===null)ga(e,t,r,Qs,n),Wc(e,r);else if(C0(i,e,t,n,r))r.stopPropagation();else if(Wc(e,r),t&4&&-1<b0.indexOf(e)){for(;i!==null;){var s=Di(i);if(s!==null&&Tf(s),s=Tl(e,t,n,r),s===null&&ga(e,t,r,Qs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ga(e,t,r,null,n)}}var Qs=null;function Tl(e,t,n,r){if(Qs=null,e=Ou(r),e=Sn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qs=e,null}function Ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f0()){case Iu:return 1;case Cf:return 4;case Gs:case h0:return 16;case jf:return 536870912;default:return 16}default:return 16}}var Kt=null,_u=null,js=null;function Of(){if(js)return js;var e,t=_u,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return js=i.slice(e,1<r?1-r:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function Gc(){return!1}function Ke(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ts:Gc,this.isPropagationStopped=Gc,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Ke(Fr),Ai=re({},Fr,{view:0,detail:0}),T0=Ke(Ai),aa,la,Vr,zo=re({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(aa=e.screenX-Vr.screenX,la=e.screenY-Vr.screenY):la=aa=0,Vr=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Kc=Ke(zo),P0=re({},zo,{dataTransfer:0}),$0=Ke(P0),L0=re({},Ai,{relatedTarget:0}),ua=Ke(L0),z0=re({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=Ke(z0),O0=re({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=Ke(O0),N0=re({},Fr,{data:0}),Yc=Ke(N0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function Du(){return A0}var D0=re({},Ai,{key:function(e){if(e.key){var t=M0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B0=Ke(D0),V0=re({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=Ke(V0),U0=re({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),W0=Ke(U0),H0=re({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=Ke(H0),K0=re({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=Ke(K0),Q0=[9,13,27,32],Bu=zt&&"CompositionEvent"in window,si=null;zt&&"documentMode"in document&&(si=document.documentMode);var X0=zt&&"TextEvent"in window&&!si,If=zt&&(!Bu||si&&8<si&&11>=si),Xc=" ",qc=!1;function Nf(e,t){switch(e){case"keyup":return Q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function q0(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(qc=!0,Xc);case"textInput":return e=t.data,e===Xc&&qc?null:e;default:return null}}function J0(e,t){if(er)return e==="compositionend"||!Bu&&Nf(e,t)?(e=Of(),js=_u=Kt=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return If&&t.locale!=="ko"?null:t.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z0[e.type]:t==="textarea"}function Rf(e,t,n,r){hf(r),t=Xs(t,"onChange"),0<t.length&&(n=new Au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oi=null,Si=null;function e1(e){Yf(e,0)}function Fo(e){var t=rr(e);if(af(t))return e}function t1(e,t){if(e==="change")return t}var _f=!1;if(zt){var ca;if(zt){var da="oninput"in document;if(!da){var Zc=document.createElement("div");Zc.setAttribute("oninput","return;"),da=typeof Zc.oninput=="function"}ca=da}else ca=!1;_f=ca&&(!document.documentMode||9<document.documentMode)}function ed(){oi&&(oi.detachEvent("onpropertychange",Af),Si=oi=null)}function Af(e){if(e.propertyName==="value"&&Fo(Si)){var t=[];Rf(t,Si,e,Ou(e)),xf(e1,t)}}function n1(e,t,n){e==="focusin"?(ed(),oi=t,Si=n,oi.attachEvent("onpropertychange",Af)):e==="focusout"&&ed()}function r1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Si)}function i1(e,t){if(e==="click")return Fo(t)}function s1(e,t){if(e==="input"||e==="change")return Fo(t)}function o1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:o1;function bi(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ul.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nd(e,t){var n=td(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=td(n)}}function Df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(){for(var e=window,t=Us();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Us(e.document)}return t}function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function a1(e){var t=Bf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Df(n.ownerDocument.documentElement,n)){if(r!==null&&Vu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=nd(n,s);var o=nd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l1=zt&&"documentMode"in document&&11>=document.documentMode,tr=null,Pl=null,ai=null,$l=!1;function rd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$l||tr==null||tr!==Us(r)||(r=tr,"selectionStart"in r&&Vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&bi(ai,r)||(ai=r,r=Xs(Pl,"onSelect"),0<r.length&&(t=new Au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},pa={},Vf={};zt&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Oo(e){if(pa[e])return pa[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vf)return pa[e]=t[n];return e}var Uf=Oo("animationend"),Wf=Oo("animationiteration"),Hf=Oo("animationstart"),Gf=Oo("transitionend"),Kf=new Map,id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Kf.set(e,t),Nn(t,[e])}for(var fa=0;fa<id.length;fa++){var ha=id[fa],u1=ha.toLowerCase(),c1=ha[0].toUpperCase()+ha.slice(1);un(u1,"on"+c1)}un(Uf,"onAnimationEnd");un(Wf,"onAnimationIteration");un(Hf,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Gf,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function sd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,u0(r,t,void 0,e),e.currentTarget=null}function Yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sd(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sd(i,a,c),s=l}}}if(Hs)throw e=jl,Hs=!1,jl=null,e}function q(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Qf(t,e,2,!1),n.add(r))}function ma(e,t,n){var r=0;t&&(r|=4),Qf(n,e,r,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function Ci(e){if(!e[rs]){e[rs]=!0,tf.forEach(function(n){n!=="selectionchange"&&(d1.has(n)||ma(n,!1,e),ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,ma("selectionchange",!1,t))}}function Qf(e,t,n,r){switch(Ff(t)){case 1:var i=k0;break;case 4:i=E0;break;default:i=Ru}n=i.bind(null,t,n,e),i=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ga(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xf(function(){var c=s,d=Ou(n),f=[];e:{var m=Kf.get(e);if(m!==void 0){var x=Au,v=e;switch(e){case"keypress":if(ks(n)===0)break e;case"keydown":case"keyup":x=B0;break;case"focusin":v="focus",x=ua;break;case"focusout":v="blur",x=ua;break;case"beforeblur":case"afterblur":x=ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=W0;break;case Uf:case Wf:case Hf:x=F0;break;case Gf:x=G0;break;case"scroll":x=T0;break;case"wheel":x=Y0;break;case"copy":case"cut":case"paste":x=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Qc}var w=(t&4)!==0,b=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var h=c,g;h!==null;){g=h;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,p!==null&&(y=vi(h,p),y!=null&&w.push(ji(h,y,g)))),b)break;h=h.return}0<w.length&&(m=new x(m,v,null,n,d),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Sl&&(v=n.relatedTarget||n.fromElement)&&(Sn(v)||v[Ft]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=c,v=v?Sn(v):null,v!==null&&(b=Mn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=c),x!==v)){if(w=Kc,y="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Qc,y="onPointerLeave",p="onPointerEnter",h="pointer"),b=x==null?m:rr(x),g=v==null?m:rr(v),m=new w(y,h+"leave",x,n,d),m.target=b,m.relatedTarget=g,y=null,Sn(d)===c&&(w=new w(p,h+"enter",v,n,d),w.target=g,w.relatedTarget=b,y=w),b=y,x&&v)t:{for(w=x,p=v,h=0,g=w;g;g=Dn(g))h++;for(g=0,y=p;y;y=Dn(y))g++;for(;0<h-g;)w=Dn(w),h--;for(;0<g-h;)p=Dn(p),g--;for(;h--;){if(w===p||p!==null&&w===p.alternate)break t;w=Dn(w),p=Dn(p)}w=null}else w=null;x!==null&&od(f,m,x,w,!1),v!==null&&b!==null&&od(f,b,v,w,!0)}}e:{if(m=c?rr(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var C=t1;else if(Jc(m))if(_f)C=s1;else{C=r1;var j=n1}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=i1);if(C&&(C=C(e,c))){Rf(f,C,n,d);break e}j&&j(e,m,c),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&gl(m,"number",m.value)}switch(j=c?rr(c):window,e){case"focusin":(Jc(j)||j.contentEditable==="true")&&(tr=j,Pl=c,ai=null);break;case"focusout":ai=Pl=tr=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,rd(f,n,d);break;case"selectionchange":if(l1)break;case"keydown":case"keyup":rd(f,n,d)}var E;if(Bu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else er?Nf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(If&&n.locale!=="ko"&&(er||P!=="onCompositionStart"?P==="onCompositionEnd"&&er&&(E=Of()):(Kt=d,_u="value"in Kt?Kt.value:Kt.textContent,er=!0)),j=Xs(c,P),0<j.length&&(P=new Yc(P,e,null,n,d),f.push({event:P,listeners:j}),E?P.data=E:(E=Mf(n),E!==null&&(P.data=E)))),(E=X0?q0(e,n):J0(e,n))&&(c=Xs(c,"onBeforeInput"),0<c.length&&(d=new Yc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}Yf(f,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vi(e,n),s!=null&&r.unshift(ji(e,s,i)),s=vi(e,t),s!=null&&r.push(ji(e,s,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=vi(n,s),l!=null&&o.unshift(ji(n,l,a))):i||(l=vi(n,s),l!=null&&o.push(ji(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var p1=/\r\n?/g,f1=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(p1,`
`).replace(f1,"")}function is(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(L(425))}function qs(){}var Ll=null,zl=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,m1=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(g1)}:Ol;function g1(e){setTimeout(function(){throw e})}function va(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),vt="__reactFiber$"+Or,ki="__reactProps$"+Or,Ft="__reactContainer$"+Or,Il="__reactEvents$"+Or,v1="__reactListeners$"+Or,x1="__reactHandles$"+Or;function Sn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ud(e);e!==null;){if(n=e[vt])return n;e=ud(e)}return t}e=n,n=e.parentNode}return null}function Di(e){return e=e[vt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Io(e){return e[ki]||null}var Nl=[],ir=-1;function cn(e){return{current:e}}function Z(e){0>ir||(e.current=Nl[ir],Nl[ir]=null,ir--)}function X(e,t){ir++,Nl[ir]=e.current,e.current=t}var ln={},ke=cn(ln),Ie=cn(!1),$n=ln;function yr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function Js(){Z(Ie),Z(ke)}function cd(e,t,n){if(ke.current!==ln)throw Error(L(168));X(ke,t),X(Ie,n)}function Xf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,n0(e)||"Unknown",i));return re({},n,r)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,$n=ke.current,X(ke,e),X(Ie,Ie.current),!0}function dd(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Xf(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,Z(Ie),Z(ke),X(ke,e)):Z(Ie),X(Ie,n)}var Tt=null,No=!1,xa=!1;function qf(e){Tt===null?Tt=[e]:Tt.push(e)}function w1(e){No=!0,qf(e)}function dn(){if(!xa&&Tt!==null){xa=!0;var e=0,t=Y;try{var n=Tt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,No=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),bf(Iu,dn),i}finally{Y=t,xa=!1}}return null}var sr=[],or=0,eo=null,to=0,Qe=[],Xe=0,Ln=null,Pt=1,$t="";function vn(e,t){sr[or++]=to,sr[or++]=eo,eo=e,to=t}function Jf(e,t,n){Qe[Xe++]=Pt,Qe[Xe++]=$t,Qe[Xe++]=Ln,Ln=e;var r=Pt;e=$t;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pt=1<<32-at(t)+i|n<<i|r,$t=s+e}else Pt=1<<s|n<<i|r,$t=e}function Uu(e){e.return!==null&&(vn(e,1),Jf(e,1,0))}function Wu(e){for(;e===eo;)eo=sr[--or],sr[or]=null,to=sr[--or],sr[or]=null;for(;e===Ln;)Ln=Qe[--Xe],Qe[Xe]=null,$t=Qe[--Xe],Qe[Xe]=null,Pt=Qe[--Xe],Qe[Xe]=null}var We=null,Ve=null,ee=!1,ot=null;function Zf(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ve=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Pt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ve=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(ee){var t=Ve;if(t){var n=t;if(!pd(e,t)){if(Ml(e))throw Error(L(418));t=en(n.nextSibling);var r=We;t&&pd(e,t)?Zf(r,n):(e.flags=e.flags&-4097|2,ee=!1,We=e)}}else{if(Ml(e))throw Error(L(418));e.flags=e.flags&-4097|2,ee=!1,We=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function ss(e){if(e!==We)return!1;if(!ee)return fd(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ml(e))throw eh(),Error(L(418));for(;t;)Zf(e,t),t=en(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=We?en(e.stateNode.nextSibling):null;return!0}function eh(){for(var e=Ve;e;)e=en(e.nextSibling)}function Sr(){Ve=We=null,ee=!1}function Hu(e){ot===null?ot=[e]:ot.push(e)}var y1=Mt.ReactCurrentBatchConfig;function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function os(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hd(e){var t=e._init;return t(e._payload)}function th(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=sn(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,y){return h===null||h.tag!==6?(h=ka(g,p.mode,y),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,y){var C=g.type;return C===Zn?d(p,h,g.props.children,y,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&hd(C)===h.type)?(y=i(h,g.props),y.ref=Ur(p,h,g),y.return=p,y):(y=Fs(g.type,g.key,g.props,null,p.mode,y),y.ref=Ur(p,h,g),y.return=p,y)}function c(p,h,g,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Ea(g,p.mode,y),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function d(p,h,g,y,C){return h===null||h.tag!==7?(h=En(g,p.mode,y,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function f(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ka(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qi:return g=Fs(h.type,h.key,h.props,null,p.mode,g),g.ref=Ur(p,null,h),g.return=p,g;case Jn:return h=Ea(h,p.mode,g),h.return=p,h;case Vt:var y=h._init;return f(p,y(h._payload),g)}if(Zr(h)||_r(h))return h=En(h,p.mode,g,null),h.return=p,h;os(p,h)}return null}function m(p,h,g,y){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(p,h,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qi:return g.key===C?l(p,h,g,y):null;case Jn:return g.key===C?c(p,h,g,y):null;case Vt:return C=g._init,m(p,h,C(g._payload),y)}if(Zr(g)||_r(g))return C!==null?null:d(p,h,g,y,null);os(p,g)}return null}function x(p,h,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(g)||null,a(h,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qi:return p=p.get(y.key===null?g:y.key)||null,l(h,p,y,C);case Jn:return p=p.get(y.key===null?g:y.key)||null,c(h,p,y,C);case Vt:var j=y._init;return x(p,h,g,j(y._payload),C)}if(Zr(y)||_r(y))return p=p.get(g)||null,d(h,p,y,C,null);os(h,y)}return null}function v(p,h,g,y){for(var C=null,j=null,E=h,P=h=0,$=null;E!==null&&P<g.length;P++){E.index>P?($=E,E=null):$=E.sibling;var T=m(p,E,g[P],y);if(T===null){E===null&&(E=$);break}e&&E&&T.alternate===null&&t(p,E),h=s(T,h,P),j===null?C=T:j.sibling=T,j=T,E=$}if(P===g.length)return n(p,E),ee&&vn(p,P),C;if(E===null){for(;P<g.length;P++)E=f(p,g[P],y),E!==null&&(h=s(E,h,P),j===null?C=E:j.sibling=E,j=E);return ee&&vn(p,P),C}for(E=r(p,E);P<g.length;P++)$=x(E,p,P,g[P],y),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?P:$.key),h=s($,h,P),j===null?C=$:j.sibling=$,j=$);return e&&E.forEach(function(O){return t(p,O)}),ee&&vn(p,P),C}function w(p,h,g,y){var C=_r(g);if(typeof C!="function")throw Error(L(150));if(g=C.call(g),g==null)throw Error(L(151));for(var j=C=null,E=h,P=h=0,$=null,T=g.next();E!==null&&!T.done;P++,T=g.next()){E.index>P?($=E,E=null):$=E.sibling;var O=m(p,E,T.value,y);if(O===null){E===null&&(E=$);break}e&&E&&O.alternate===null&&t(p,E),h=s(O,h,P),j===null?C=O:j.sibling=O,j=O,E=$}if(T.done)return n(p,E),ee&&vn(p,P),C;if(E===null){for(;!T.done;P++,T=g.next())T=f(p,T.value,y),T!==null&&(h=s(T,h,P),j===null?C=T:j.sibling=T,j=T);return ee&&vn(p,P),C}for(E=r(p,E);!T.done;P++,T=g.next())T=x(E,p,P,T.value,y),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?P:T.key),h=s(T,h,P),j===null?C=T:j.sibling=T,j=T);return e&&E.forEach(function(I){return t(p,I)}),ee&&vn(p,P),C}function b(p,h,g,y){if(typeof g=="object"&&g!==null&&g.type===Zn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qi:e:{for(var C=g.key,j=h;j!==null;){if(j.key===C){if(C=g.type,C===Zn){if(j.tag===7){n(p,j.sibling),h=i(j,g.props.children),h.return=p,p=h;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&hd(C)===j.type){n(p,j.sibling),h=i(j,g.props),h.ref=Ur(p,j,g),h.return=p,p=h;break e}n(p,j);break}else t(p,j);j=j.sibling}g.type===Zn?(h=En(g.props.children,p.mode,y,g.key),h.return=p,p=h):(y=Fs(g.type,g.key,g.props,null,p.mode,y),y.ref=Ur(p,h,g),y.return=p,p=y)}return o(p);case Jn:e:{for(j=g.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Ea(g,p.mode,y),h.return=p,p=h}return o(p);case Vt:return j=g._init,b(p,h,j(g._payload),y)}if(Zr(g))return v(p,h,g,y);if(_r(g))return w(p,h,g,y);os(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=ka(g,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return b}var br=th(!0),nh=th(!1),no=cn(null),ro=null,ar=null,Gu=null;function Ku(){Gu=ar=ro=null}function Yu(e){var t=no.current;Z(no),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){ro=e,Gu=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(Gu!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(ro===null)throw Error(L(308));ar=e,ro.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var bn=null;function Qu(e){bn===null?bn=[e]:bn.push(e)}function rh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Qu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Qu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function Es(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}function md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;Ut=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var m=a.lane,x=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(m=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(x,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(x,f,m):v,m==null)break e;f=re({},f,m);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,l=f):d=d.next=x,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Fn|=o,e.lanes=o,e.memoizedState=f}}function gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Bi={},St=cn(Bi),Ei=cn(Bi),Ti=cn(Bi);function Cn(e){if(e===Bi)throw Error(L(174));return e}function qu(e,t){switch(X(Ti,t),X(Ei,e),X(St,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}Z(St),X(St,t)}function Cr(){Z(St),Z(Ei),Z(Ti)}function sh(e){Cn(Ti.current);var t=Cn(St.current),n=xl(t,e.type);t!==n&&(X(Ei,e),X(St,n))}function Ju(e){Ei.current===e&&(Z(St),Z(Ei))}var te=cn(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function Zu(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var Ts=Mt.ReactCurrentDispatcher,ya=Mt.ReactCurrentBatchConfig,zn=0,ne=null,ce=null,fe=null,oo=!1,li=!1,Pi=0,S1=0;function Se(){throw Error(L(321))}function ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function tc(e,t,n,r,i,s){if(zn=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ts.current=e===null||e.memoizedState===null?k1:E1,e=n(r,i),li){s=0;do{if(li=!1,Pi=0,25<=s)throw Error(L(301));s+=1,fe=ce=null,t.updateQueue=null,Ts.current=T1,e=n(r,i)}while(li)}if(Ts.current=ao,t=ce!==null&&ce.next!==null,zn=0,fe=ce=ne=null,oo=!1,t)throw Error(L(300));return e}function nc(){var e=Pi!==0;return Pi=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function et(){if(ce===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,ce=e;else{if(e===null)throw Error(L(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function $i(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=et(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((zn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ne.lanes|=d,Fn|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,ct(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ne.lanes|=s,Fn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=et(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ct(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function oh(){}function ah(e,t){var n=ne,r=et(),i=t(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,rc(ch.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Li(9,uh.bind(null,n,r,i,t),void 0,null),me===null)throw Error(L(349));zn&30||lh(n,t,i)}return i}function lh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,r){t.value=n,t.getSnapshot=r,dh(t)&&ph(e)}function ch(e,t,n){return n(function(){dh(t)&&ph(e)})}function dh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function ph(e){var t=Ot(e,1);t!==null&&lt(t,e,1,-1)}function vd(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=j1.bind(null,ne,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fh(){return et().memoizedState}function Ps(e,t,n,r){var i=ft();ne.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&ec(r,o.deps)){i.memoizedState=Li(t,n,s,r);return}}ne.flags|=e,i.memoizedState=Li(1|t,n,s,r)}function xd(e,t){return Ps(8390656,8,e,t)}function rc(e,t){return Mo(2048,8,e,t)}function hh(e,t){return Mo(4,2,e,t)}function mh(e,t){return Mo(4,4,e,t)}function gh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,gh.bind(null,t,e),n)}function ic(){}function xh(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wh(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yh(e,t,n){return zn&21?(ct(n,t)||(n=kf(),ne.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function b1(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=ya.transition;ya.transition={};try{e(!1),t()}finally{Y=n,ya.transition=r}}function Sh(){return et().memoizedState}function C1(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bh(e))Ch(t,n);else if(n=rh(e,t,n,r),n!==null){var i=Te();lt(n,e,r,i),jh(n,t,r)}}function j1(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bh(e))Ch(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ct(a,o)){var l=t.interleaved;l===null?(i.next=i,Qu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rh(e,t,i,r),n!==null&&(i=Te(),lt(n,e,r,i),jh(n,t,r))}}function bh(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Ch(e,t){li=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}var ao={readContext:Ze,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},k1={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:xd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4194308,4,gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ps(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=C1.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:ic,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=b1.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=ft();if(ee){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),me===null)throw Error(L(349));zn&30||lh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,xd(ch.bind(null,r,s,e),[e]),r.flags|=2048,Li(9,uh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ft(),t=me.identifierPrefix;if(ee){var n=$t,r=Pt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=S1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},E1={readContext:Ze,useCallback:xh,useContext:Ze,useEffect:rc,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:wh,useReducer:Sa,useRef:fh,useState:function(){return Sa($i)},useDebugValue:ic,useDeferredValue:function(e){var t=et();return yh(t,ce.memoizedState,e)},useTransition:function(){var e=Sa($i)[0],t=et().memoizedState;return[e,t]},useMutableSource:oh,useSyncExternalStore:ah,useId:Sh,unstable_isNewReconciler:!1},T1={readContext:Ze,useCallback:xh,useContext:Ze,useEffect:rc,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:wh,useReducer:ba,useRef:fh,useState:function(){return ba($i)},useDebugValue:ic,useDeferredValue:function(e){var t=et();return ce===null?t.memoizedState=e:yh(t,ce.memoizedState,e)},useTransition:function(){var e=ba($i)[0],t=et().memoizedState;return[e,t]},useMutableSource:oh,useSyncExternalStore:ah,useId:Sh,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=rn(e),s=Lt(r,i);s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,i),t!==null&&(lt(t,e,i,r),Es(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=rn(e),s=Lt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,i),t!==null&&(lt(t,e,i,r),Es(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=rn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(lt(t,e,r,n),Es(t,e,r))}};function wd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!bi(n,r)||!bi(i,s):!0}function kh(e,t,n){var r=!1,i=ln,s=t.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Ne(t)?$n:ke.current,r=t.contextTypes,s=(r=r!=null)?yr(e,i):ln),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Ne(t)?$n:ke.current,i.context=yr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Al(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ro.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var n="",r=t;do n+=t0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var P1=typeof WeakMap=="function"?WeakMap:Map;function Eh(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uo||(uo=!0,ql=r),Bl(e,t)},n}function Th(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new P1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=V1.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var $1=Mt.ReactCurrentOwner,Fe=!1;function Ee(e,t,n,r){t.child=e===null?nh(t,null,n,r):br(t,e.child,n,r)}function jd(e,t,n,r,i){n=n.render;var s=t.ref;return gr(t,i),r=tc(e,t,n,r,s,i),n=nc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(ee&&n&&Uu(t),t.flags|=1,Ee(e,t,r,i),t.child)}function kd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!pc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ph(e,t,s,r,i)):(e=Fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(o,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=sn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ph(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(bi(s,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,It(e,t,i)}return Vl(e,t,n,r,i)}function $h(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(ur,De),De|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(ur,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(ur,De),De|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,X(ur,De),De|=r;return Ee(e,t,i,n),t.child}function Lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,i){var s=Ne(n)?$n:ke.current;return s=yr(t,s),gr(t,i),n=tc(e,t,n,r,s,i),r=nc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(ee&&r&&Uu(t),t.flags|=1,Ee(e,t,n,i),t.child)}function Ed(e,t,n,r,i){if(Ne(n)){var s=!0;Zs(t)}else s=!1;if(gr(t,i),t.stateNode===null)$s(e,t),kh(t,n,r),Dl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ze(c):(c=Ne(n)?$n:ke.current,c=yr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&yd(t,o,r,c),Ut=!1;var m=t.memoizedState;o.state=m,io(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Ie.current||Ut?(typeof d=="function"&&(Al(t,n,d,r),l=t.memoizedState),(a=Ut||wd(t,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ih(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:it(t.type,a),o.props=c,f=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ze(l):(l=Ne(n)?$n:ke.current,l=yr(t,l));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&yd(t,o,r,l),Ut=!1,m=t.memoizedState,o.state=m,io(t,r,o,i);var v=t.memoizedState;a!==f||m!==v||Ie.current||Ut?(typeof x=="function"&&(Al(t,n,x,r),v=t.memoizedState),(c=Ut||wd(t,n,c,r,m,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,s,i)}function Ul(e,t,n,r,i,s){Lh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dd(t,n,!1),It(e,t,s);r=t.stateNode,$1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=br(t,e.child,null,s),t.child=br(t,null,a,s)):Ee(e,t,a,s),t.memoizedState=r.state,i&&dd(t,n,!0),t.child}function zh(e){var t=e.stateNode;t.pendingContext?cd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cd(e,t.context,!1),qu(e,t.containerInfo)}function Td(e,t,n,r,i){return Sr(),Hu(i),t.flags|=256,Ee(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fh(e,t,n){var r=t.pendingProps,i=te.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(te,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Do(o,r,0,null),e=En(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Hl(n),t.memoizedState=Wl,e):sc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return L1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sn(a,s):(s=En(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Hl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return s=e.child,e=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sc(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,r){return r!==null&&Hu(r),br(t,e.child,null,n),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ca(Error(L(422))),as(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Do({mode:"visible",children:r.children},i,0,null),s=En(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&br(t,e.child,null,o),t.child.memoizedState=Hl(o),t.memoizedState=Wl,s);if(!(t.mode&1))return as(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=Ca(s,r,void 0),as(e,t,o,r)}if(a=(o&e.childLanes)!==0,Fe||a){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(e,i),lt(r,e,i,-1))}return dc(),r=Ca(Error(L(421))),as(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=U1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ve=en(i.nextSibling),We=t,ee=!0,ot=null,e!==null&&(Qe[Xe++]=Pt,Qe[Xe++]=$t,Qe[Xe++]=Ln,Pt=e.id,$t=e.overflow,Ln=t),t=sc(t,r.children),t.flags|=4096,t)}function Pd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function ja(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Oh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ee(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,s);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function z1(e,t,n){switch(t.tag){case 3:zh(t),Sr();break;case 5:sh(t);break;case 1:Ne(t.type)&&Zs(t);break;case 4:qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(no,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Fh(e,t,n):(X(te,te.current&1),e=It(e,t,n),e!==null?e.sibling:null);X(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Oh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,$h(e,t,n)}return It(e,t,n)}var Ih,Gl,Nh,Mh;Ih=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};Nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cn(St.current);var s=null;switch(n){case"input":i=hl(e,i),r=hl(e,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=vl(e,i),r=vl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qs)}wl(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&q("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Mh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F1(e,t,n){var r=t.pendingProps;switch(Wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ne(t.type)&&Js(),be(t),null;case 3:return r=t.stateNode,Cr(),Z(Ie),Z(ke),Zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(eu(ot),ot=null))),Gl(e,t),be(t),null;case 5:Ju(t);var i=Cn(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return be(t),null}if(e=Cn(St.current),ss(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[vt]=t,r[ki]=s,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<ti.length;i++)q(ti[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Rc(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Ac(r,s),q("invalid",r)}wl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&is(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&is(r.textContent,a,e),i=["children",""+a]):mi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Xi(r),_c(r,s,!0);break;case"textarea":Xi(r),Dc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[vt]=t,e[ki]=r,Ih(e,t,!1,!1),t.stateNode=e;e:{switch(o=yl(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<ti.length;i++)q(ti[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":Rc(e,r),i=hl(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),q("invalid",e);break;case"textarea":Ac(e,r),i=vl(e,r),q("invalid",e);break;default:i=r}wl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ff(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&df(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gi(e,l):typeof l=="number"&&gi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&q("scroll",e):l!=null&&$u(e,s,l,o))}switch(n){case"input":Xi(e),_c(e,r,!1);break;case"textarea":Xi(e),Dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?pr(e,!!r.multiple,s,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Mh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Cn(Ti.current),Cn(St.current),ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(s=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&is(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return be(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ve!==null&&t.mode&1&&!(t.flags&128))eh(),Sr(),t.flags|=98560,s=!1;else if(s=ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(L(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[vt]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else ot!==null&&(eu(ot),ot=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):dc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Cr(),Gl(e,t),e===null&&Ci(t.stateNode.containerInfo),be(t),null;case 10:return Yu(t.type._context),be(t),null;case 17:return Ne(t.type)&&Js(),be(t),null;case 19:if(Z(te),s=t.memoizedState,s===null)return be(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Wr(s,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Wr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(te,te.current&1|2),t.child}e=e.sibling}s.tail!==null&&oe()>kr&&(t.flags|=128,r=!0,Wr(s,!1),t.lanes=4194304)}else{if(!r)if(e=so(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return be(t),null}else 2*oe()-s.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Wr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=oe(),t.sibling=null,n=te.current,X(te,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return cc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function O1(e,t){switch(Wu(t),t.tag){case 1:return Ne(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),Z(Ie),Z(ke),Zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ju(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return Cr(),null;case 10:return Yu(t.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var ls=!1,Ce=!1,I1=typeof WeakSet=="function"?WeakSet:Set,M=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){ie(e,t,r)}}var $d=!1;function N1(e,t){if(Ll=Ys,e=Bf(),Vu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(l=o),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Ys=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:it(t.type,w),b);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(y){ie(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=$d,$d=!1,v}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kl(t,n,s)}i=i.next}while(i!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rh(e){var t=e.alternate;t!==null&&(e.alternate=null,Rh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[ki],delete t[Il],delete t[v1],delete t[x1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _h(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qs));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var ve=null,st=!1;function Dt(e,t,n){for(n=n.child;n!==null;)Ah(e,t,n),n=n.sibling}function Ah(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Lo,n)}catch{}switch(n.tag){case 5:Ce||lr(n,t);case 6:var r=ve,i=st;ve=null,Dt(e,t,n),ve=r,st=i,ve!==null&&(st?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(st?(e=ve,n=n.stateNode,e.nodeType===8?va(e.parentNode,n):e.nodeType===1&&va(e,n),yi(e)):va(ve,n.stateNode));break;case 4:r=ve,i=st,ve=n.stateNode.containerInfo,st=!0,Dt(e,t,n),ve=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kl(n,t,o),i=i.next}while(i!==r)}Dt(e,t,n);break;case 1:if(!Ce&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Dt(e,t,n),Ce=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I1),t.forEach(function(r){var i=W1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,st=!1;break e;case 3:ve=a.stateNode.containerInfo,st=!0;break e;case 4:ve=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(ve===null)throw Error(L(160));Ah(s,o,i),ve=null,st=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ie(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dh(t,e),t=t.sibling}function Dh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),pt(e),r&4){try{ui(3,e,e.return),_o(3,e)}catch(w){ie(e,e.return,w)}try{ui(5,e,e.return)}catch(w){ie(e,e.return,w)}}break;case 1:rt(t,e),pt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(rt(t,e),pt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{gi(i,"")}catch(w){ie(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lf(i,s),yl(a,o);var c=yl(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ff(i,f):d==="dangerouslySetInnerHTML"?df(i,f):d==="children"?gi(i,f):$u(i,d,f,c)}switch(a){case"input":ml(i,s);break;case"textarea":uf(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?pr(i,!!s.multiple,x,!1):m!==!!s.multiple&&(s.defaultValue!=null?pr(i,!!s.multiple,s.defaultValue,!0):pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ki]=s}catch(w){ie(e,e.return,w)}}break;case 6:if(rt(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){ie(e,e.return,w)}}break;case 3:if(rt(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(w){ie(e,e.return,w)}break;case 4:rt(t,e),pt(e);break;case 13:rt(t,e),pt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lc=oe())),r&4&&zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||d,rt(t,e),Ce=c):rt(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(m=M,x=m.child,m.tag){case 0:case 11:case 14:case 15:ui(4,m,m.return);break;case 1:lr(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ie(r,n,w)}}break;case 5:lr(m,m.return);break;case 22:if(m.memoizedState!==null){Od(f);continue}}x!==null?(x.return=m,M=x):Od(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pf("display",o))}catch(w){ie(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){ie(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rt(t,e),pt(e),r&4&&zd(e);break;case 21:break;default:rt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_h(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var s=Ld(e);Xl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ld(e);Ql(e,a,o);break;default:throw Error(L(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M1(e,t,n){M=e,Bh(e)}function Bh(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ls;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=ls;var c=Ce;if(ls=o,(Ce=l)&&!c)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Id(i):l!==null?(l.return=o,M=l):Id(i);for(;s!==null;)M=s,Bh(s),s=s.sibling;M=i,ls=a,Ce=c}Fd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Fd(e)}}function Fd(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&gd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ce||t.flags&512&&Yl(t)}catch(m){ie(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Od(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Id(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ie(t,i,l)}}var s=t.return;try{Yl(t)}catch(l){ie(t,s,l)}break;case 5:var o=t.return;try{Yl(t)}catch(l){ie(t,o,l)}}}catch(l){ie(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var R1=Math.ceil,lo=Mt.ReactCurrentDispatcher,oc=Mt.ReactCurrentOwner,Je=Mt.ReactCurrentBatchConfig,W=0,me=null,le=null,xe=0,De=0,ur=cn(0),de=0,zi=null,Fn=0,Ao=0,ac=0,ci=null,ze=null,lc=0,kr=1/0,kt=null,uo=!1,ql=null,nn=null,us=!1,Yt=null,co=0,di=0,Jl=null,Ls=-1,zs=0;function Te(){return W&6?oe():Ls!==-1?Ls:Ls=oe()}function rn(e){return e.mode&1?W&2&&xe!==0?xe&-xe:y1.transition!==null?(zs===0&&(zs=kf()),zs):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Ff(e.type)),e):1}function lt(e,t,n,r){if(50<di)throw di=0,Jl=null,Error(L(185));_i(e,n,r),(!(W&2)||e!==me)&&(e===me&&(!(W&2)&&(Ao|=n),de===4&&Ht(e,xe)),Me(e,r),n===1&&W===0&&!(t.mode&1)&&(kr=oe()+500,No&&dn()))}function Me(e,t){var n=e.callbackNode;y0(e,t);var r=Ks(e,e===me?xe:0);if(r===0)n!==null&&Uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uc(n),t===1)e.tag===0?w1(Nd.bind(null,e)):qf(Nd.bind(null,e)),m1(function(){!(W&6)&&dn()}),n=null;else{switch(Ef(r)){case 1:n=Iu;break;case 4:n=Cf;break;case 16:n=Gs;break;case 536870912:n=jf;break;default:n=Gs}n=Qh(n,Vh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vh(e,t){if(Ls=-1,zs=0,W&6)throw Error(L(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Ks(e,e===me?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=po(e,r);else{t=r;var i=W;W|=2;var s=Wh();(me!==e||xe!==t)&&(kt=null,kr=oe()+500,kn(e,t));do try{D1();break}catch(a){Uh(e,a)}while(!0);Ku(),lo.current=s,W=i,le!==null?t=0:(me=null,xe=0,t=de)}if(t!==0){if(t===2&&(i=kl(e),i!==0&&(r=i,t=Zl(e,i))),t===1)throw n=zi,kn(e,0),Ht(e,r),Me(e,oe()),n;if(t===6)Ht(e,r);else{if(i=e.current.alternate,!(r&30)&&!_1(i)&&(t=po(e,r),t===2&&(s=kl(e),s!==0&&(r=s,t=Zl(e,s))),t===1))throw n=zi,kn(e,0),Ht(e,r),Me(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:xn(e,ze,kt);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=lc+500-oe(),10<t)){if(Ks(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(xn.bind(null,e,ze,kt),t);break}xn(e,ze,kt);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R1(r/1960))-r,10<r){e.timeoutHandle=Ol(xn.bind(null,e,ze,kt),r);break}xn(e,ze,kt);break;case 5:xn(e,ze,kt);break;default:throw Error(L(329))}}}return Me(e,oe()),e.callbackNode===n?Vh.bind(null,e):null}function Zl(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=po(e,t),e!==2&&(t=ze,ze=n,t!==null&&eu(t)),e}function eu(e){ze===null?ze=e:ze.push.apply(ze,e)}function _1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~ac,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(W&6)throw Error(L(327));vr();var t=Ks(e,0);if(!(t&1))return Me(e,oe()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=zi,kn(e,0),Ht(e,t),Me(e,oe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,ze,kt),Me(e,oe()),null}function uc(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(kr=oe()+500,No&&dn())}}function On(e){Yt!==null&&Yt.tag===0&&!(W&6)&&vr();var t=W;W|=1;var n=Je.transition,r=Y;try{if(Je.transition=null,Y=1,e)return e()}finally{Y=r,Je.transition=n,W=t,!(W&6)&&dn()}}function cc(){De=ur.current,Z(ur)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,h1(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Js();break;case 3:Cr(),Z(Ie),Z(ke),Zu();break;case 5:Ju(r);break;case 4:Cr();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Yu(r.type._context);break;case 22:case 23:cc()}n=n.return}if(me=e,le=e=sn(e.current,null),xe=De=t,de=0,zi=null,ac=Ao=Fn=0,ze=ci=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bn=null}return e}function Uh(e,t){do{var n=le;try{if(Ku(),Ts.current=ao,oo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(zn=0,fe=ce=ne=null,li=!1,Pi=0,oc.current=null,n===null||n.return===null){de=1,zi=t,le=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=bd(o);if(x!==null){x.flags&=-257,Cd(x,o,a,s,t),x.mode&1&&Sd(s,c,t),t=x,l=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Sd(s,c,t),dc();break e}l=Error(L(426))}}else if(ee&&a.mode&1){var b=bd(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Cd(b,o,a,s,t),Hu(jr(l,a));break e}}s=l=jr(l,a),de!==4&&(de=2),ci===null?ci=[s]:ci.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Eh(s,l,t);md(s,p);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Th(s,a,t);md(s,y);break e}}s=s.return}while(s!==null)}Gh(n)}catch(C){t=C,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Wh(){var e=lo.current;return lo.current=ao,e===null?ao:e}function dc(){(de===0||de===3||de===2)&&(de=4),me===null||!(Fn&268435455)&&!(Ao&268435455)||Ht(me,xe)}function po(e,t){var n=W;W|=2;var r=Wh();(me!==e||xe!==t)&&(kt=null,kn(e,t));do try{A1();break}catch(i){Uh(e,i)}while(!0);if(Ku(),W=n,lo.current=r,le!==null)throw Error(L(261));return me=null,xe=0,de}function A1(){for(;le!==null;)Hh(le)}function D1(){for(;le!==null&&!d0();)Hh(le)}function Hh(e){var t=Yh(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Gh(e):le=t,oc.current=null}function Gh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=O1(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(n=F1(n,t,De),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);de===0&&(de=5)}function xn(e,t,n){var r=Y,i=Je.transition;try{Je.transition=null,Y=1,B1(e,t,n,r)}finally{Je.transition=i,Y=r}return null}function B1(e,t,n,r){do vr();while(Yt!==null);if(W&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(S0(e,s),e===me&&(le=me=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||us||(us=!0,Qh(Gs,function(){return vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var o=Y;Y=1;var a=W;W|=4,oc.current=null,N1(e,n),Dh(n,e),a1(zl),Ys=!!Ll,zl=Ll=null,e.current=n,M1(n),p0(),W=a,Y=o,Je.transition=s}else e.current=n;if(us&&(us=!1,Yt=e,co=i),s=e.pendingLanes,s===0&&(nn=null),m0(n.stateNode),Me(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uo)throw uo=!1,e=ql,ql=null,e;return co&1&&e.tag!==0&&vr(),s=e.pendingLanes,s&1?e===Jl?di++:(di=0,Jl=e):di=0,dn(),null}function vr(){if(Yt!==null){var e=Ef(co),t=Je.transition,n=Y;try{if(Je.transition=null,Y=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,co=0,W&6)throw Error(L(331));var i=W;for(W|=4,M=e.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(M=c;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:ui(8,d,s)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var m=d.sibling,x=d.return;if(Rh(d),d===c){M=null;break}if(m!==null){m.return=x,M=m;break}M=x}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ui(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var h=e.current;for(M=h;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=h;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_o(9,a)}}catch(C){ie(a,a.return,C)}if(a===o){M=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,M=y;break e}M=a.return}}if(W=i,dn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Lo,e)}catch{}r=!0}return r}finally{Y=n,Je.transition=t}}return!1}function Md(e,t,n){t=jr(n,t),t=Eh(e,t,1),e=tn(e,t,1),t=Te(),e!==null&&(_i(e,1,t),Me(e,t))}function ie(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=jr(n,e),e=Th(t,e,1),t=tn(t,e,1),e=Te(),t!==null&&(_i(t,1,e),Me(t,e));break}}t=t.return}}function V1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(xe&n)===n&&(de===4||de===3&&(xe&130023424)===xe&&500>oe()-lc?kn(e,0):ac|=n),Me(e,t)}function Kh(e,t){t===0&&(e.mode&1?(t=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):t=1);var n=Te();e=Ot(e,t),e!==null&&(_i(e,t,n),Me(e,n))}function U1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kh(e,n)}function W1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),Kh(e,n)}var Yh;Yh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,z1(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ee&&t.flags&1048576&&Jf(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=yr(t,ke.current);gr(t,n),i=tc(null,t,r,e,i,n);var s=nc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,Zs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(t),i.updater=Ro,t.stateNode=i,i._reactInternals=t,Dl(t,r,e,n),t=Ul(null,t,r,!0,s,n)):(t.tag=0,ee&&s&&Uu(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=G1(r),e=it(r,e),i){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=Ed(null,t,r,e,n);break e;case 11:t=jd(null,t,r,e,n);break e;case 14:t=kd(null,t,r,it(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Vl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Ed(e,t,r,i,n);case 3:e:{if(zh(t),e===null)throw Error(L(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ih(e,t),io(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=jr(Error(L(423)),t),t=Td(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(L(424)),t),t=Td(e,t,r,n,i);break e}else for(Ve=en(t.stateNode.containerInfo.firstChild),We=t,ee=!0,ot=null,n=nh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){t=It(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return sh(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Fl(r,i)?o=null:s!==null&&Fl(r,s)&&(t.flags|=32),Lh(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return Fh(e,t,n);case 4:return qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),jd(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,X(no,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!Ie.current){t=It(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Lt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_l(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_l(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=Ze(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),kd(e,t,r,i,n);case 15:return Ph(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),$s(e,t),t.tag=1,Ne(r)?(e=!0,Zs(t)):e=!1,gr(t,n),kh(t,r,i),Dl(t,r,i,n),Ul(null,t,r,!0,e,n);case 19:return Oh(e,t,n);case 22:return $h(e,t,n)}throw Error(L(156,t.tag))};function Qh(e,t){return bf(e,t)}function H1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new H1(e,t,n,r)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G1(e){if(typeof e=="function")return pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zu)return 11;if(e===Fu)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")pc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zn:return En(n.children,i,s,t);case Lu:o=8,i|=8;break;case cl:return e=qe(12,n,t,i|2),e.elementType=cl,e.lanes=s,e;case dl:return e=qe(13,n,t,i),e.elementType=dl,e.lanes=s,e;case pl:return e=qe(19,n,t,i),e.elementType=pl,e.lanes=s,e;case sf:return Do(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nf:o=10;break e;case rf:o=9;break e;case zu:o=11;break e;case Fu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function En(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=qe(22,e,r,t),e.elementType=sf,e.lanes=n,e.stateNode={isHidden:!1},e}function ka(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function K1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fc(e,t,n,r,i,s,o,a,l){return e=new K1(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(s),e}function Y1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xh(e){if(!e)return ln;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Xf(e,n,t)}return t}function qh(e,t,n,r,i,s,o,a,l){return e=fc(n,r,!0,e,i,s,o,a,l),e.context=Xh(null),n=e.current,r=Te(),i=rn(n),s=Lt(r,i),s.callback=t??null,tn(n,s,i),e.current.lanes=i,_i(e,i,r),Me(e,r),e}function Bo(e,t,n,r){var i=t.current,s=Te(),o=rn(i);return n=Xh(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,o),e!==null&&(lt(e,i,o,s),Es(e,i,o)),o}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function Q1(){return null}var Jh=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}Vo.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Bo(e,t,null,null)};Vo.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Bo(null,e,null,null)}),t[Ft]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=$f();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&zf(e)}};function gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function X1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=fo(o);s.call(c)}}var o=qh(t,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=o,e[Ft]=o.current,Ci(e.nodeType===8?e.parentNode:e),On(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fo(l);a.call(c)}}var l=fc(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=l,e[Ft]=l.current,Ci(e.nodeType===8?e.parentNode:e),On(function(){Bo(t,l,n,r)}),l}function Wo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=fo(o);a.call(l)}}Bo(t,o,e,i)}else o=X1(n,t,e,i,r);return fo(o)}Tf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ei(t.pendingLanes);n!==0&&(Nu(t,n|1),Me(t,oe()),!(W&6)&&(kr=oe()+500,dn()))}break;case 13:On(function(){var r=Ot(e,1);if(r!==null){var i=Te();lt(r,e,1,i)}}),hc(e,1)}};Mu=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Te();lt(t,e,134217728,n)}hc(e,134217728)}};Pf=function(e){if(e.tag===13){var t=rn(e),n=Ot(e,t);if(n!==null){var r=Te();lt(n,e,t,r)}hc(e,t)}};$f=function(){return Y};Lf=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};bl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Io(r);if(!i)throw Error(L(90));af(r),ml(r,i)}}}break;case"textarea":uf(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};gf=uc;vf=On;var q1={usingClientEntryPoint:!1,Events:[Di,rr,Io,hf,mf,uc]},Hr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J1={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yf(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{Lo=cs.inject(J1),yt=cs}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(t))throw Error(L(200));return Y1(e,t,null,n)};Ge.createRoot=function(e,t){if(!gc(e))throw Error(L(299));var n=!1,r="",i=Jh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fc(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,Ci(e.nodeType===8?e.parentNode:e),new mc(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=yf(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return On(e)};Ge.hydrate=function(e,t,n){if(!Uo(t))throw Error(L(200));return Wo(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!gc(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qh(t,null,e,1,n??null,i,!1,s,o),e[Ft]=t.current,Ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vo(t)};Ge.render=function(e,t,n){if(!Uo(t))throw Error(L(200));return Wo(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(L(40));return e._reactRootContainer?(On(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};Ge.unstable_batchedUpdates=uc;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Wo(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zh)}catch(e){console.error(e)}}Zh(),Jp.exports=Ge;var Z1=Jp.exports,Ad=Z1;ll.createRoot=Ad.createRoot,ll.hydrateRoot=Ad.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const Dd="popstate";function ev(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return tu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ho(i)}return nv(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function em(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tv(){return Math.random().toString(36).substr(2,8)}function Bd(e,t){return{usr:e.state,key:e.key,idx:t}}function tu(e,t,n,r){return n===void 0&&(n=null),Fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ir(t):t,{state:n,key:t&&t.key||r||tv()})}function ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function nv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qt.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Fi({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Qt.Pop;let b=d(),p=b==null?null:b-c;c=b,l&&l({action:a,location:w.location,delta:p})}function m(b,p){a=Qt.Push;let h=tu(w.location,b,p);c=d()+1;let g=Bd(h,c),y=w.createHref(h);try{o.pushState(g,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(y)}s&&l&&l({action:a,location:w.location,delta:1})}function x(b,p){a=Qt.Replace;let h=tu(w.location,b,p);c=d();let g=Bd(h,c),y=w.createHref(h);o.replaceState(g,"",y),s&&l&&l({action:a,location:w.location,delta:0})}function v(b){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:ho(b);return h=h.replace(/ $/,"%20"),ue(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let w={get action(){return a},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Dd,f),l=b,()=>{i.removeEventListener(Dd,f),l=null}},createHref(b){return t(i,b)},createURL:v,encodeLocation(b){let p=v(b);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(b){return o.go(b)}};return w}var Vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vd||(Vd={}));function rv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ir(t):t,i=vc(r.pathname||"/",n);if(i==null)return null;let s=tm(e);iv(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=gv(i);o=fv(s[a],l)}return o}function tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=on([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tm(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:dv(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of nm(s.path))i(s,o,l)}),t}function nm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nm(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function iv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sv=/^:[\w-]+$/,ov=3,av=2,lv=1,uv=10,cv=-2,Ud=e=>e==="*";function dv(e,t){let n=e.split("/"),r=n.length;return n.some(Ud)&&(r+=cv),t&&(r+=av),n.filter(i=>!Ud(i)).reduce((i,s)=>i+(sv.test(s)?ov:s===""?lv:uv),r)}function pv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function fv(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=hv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:on([i,d.pathname]),pathnameBase:yv(on([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=on([i,d.pathnameBase]))}return s}function hv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let w=a[f]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[f];return x&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function mv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),em(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function gv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return em(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ir(e):e;return{pathname:n?n.startsWith("/")?n:xv(n,t):t,search:Sv(r),hash:bv(i)}}function xv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ta(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rm(e,t){let n=wv(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function im(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ir(e):(i=Fi({},e),ue(!i.pathname||!i.pathname.includes("?"),Ta("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Ta("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Ta("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?t[f]:"/"}let l=vv(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const on=e=>e.join("/").replace(/\/\/+/g,"/"),yv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sm=["post","put","patch","delete"];new Set(sm);const jv=["get",...sm];new Set(jv);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}const xc=k.createContext(null),kv=k.createContext(null),Rn=k.createContext(null),Ho=k.createContext(null),Rt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),om=k.createContext(null);function Ev(e,t){let{relative:n}=t===void 0?{}:t;Vi()||ue(!1);let{basename:r,navigator:i}=k.useContext(Rn),{hash:s,pathname:o,search:a}=lm(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:on([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Vi(){return k.useContext(Ho)!=null}function pn(){return Vi()||ue(!1),k.useContext(Ho).location}function am(e){k.useContext(Rn).static||k.useLayoutEffect(e)}function _n(){let{isDataRoute:e}=k.useContext(Rt);return e?Vv():Tv()}function Tv(){Vi()||ue(!1);let e=k.useContext(xc),{basename:t,future:n,navigator:r}=k.useContext(Rn),{matches:i}=k.useContext(Rt),{pathname:s}=pn(),o=JSON.stringify(rm(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return am(()=>{a.current=!0}),k.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=im(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:on([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}const Pv=k.createContext(null);function $v(e){let t=k.useContext(Rt).outlet;return t&&k.createElement(Pv.Provider,{value:e},t)}function Lv(){let{matches:e}=k.useContext(Rt),t=e[e.length-1];return t?t.params:{}}function lm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Rn),{matches:i}=k.useContext(Rt),{pathname:s}=pn(),o=JSON.stringify(rm(i,r.v7_relativeSplatPath));return k.useMemo(()=>im(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function zv(e,t){return Fv(e,t)}function Fv(e,t,n,r){Vi()||ue(!1);let{navigator:i}=k.useContext(Rn),{matches:s}=k.useContext(Rt),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=pn(),d;if(t){var f;let b=typeof t=="string"?Ir(t):t;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||ue(!1),d=b}else d=c;let m=d.pathname||"/",x=m;if(l!=="/"){let b=l.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=rv(e,{pathname:x}),w=Rv(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:on([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:on([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return t&&w?k.createElement(Ho.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qt.Pop}},w):w}function Ov(){let e=Bv(),t=Cv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const Iv=k.createElement(Ov,null);class Nv extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Rt.Provider,{value:this.props.routeContext},k.createElement(om.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mv(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Rt.Provider,{value:t},r)}function Rv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ue(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:x}=n,v=f.route.loader&&m[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let x,v=!1,w=null,b=null;n&&(x=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||Iv,l&&(c<0&&m===0?(v=!0,b=null):c===m&&(v=!0,b=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,m+1)),h=()=>{let g;return x?g=w:v?g=b:f.route.Component?g=k.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,k.createElement(Mv,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?k.createElement(Nv,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var um=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(um||{}),mo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mo||{});function _v(e){let t=k.useContext(xc);return t||ue(!1),t}function Av(e){let t=k.useContext(kv);return t||ue(!1),t}function Dv(e){let t=k.useContext(Rt);return t||ue(!1),t}function cm(e){let t=Dv(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function Bv(){var e;let t=k.useContext(om),n=Av(mo.UseRouteError),r=cm(mo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Vv(){let{router:e}=_v(um.UseNavigateStable),t=cm(mo.UseNavigateStable),n=k.useRef(!1);return am(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Oi({fromRouteId:t},s)))},[e,t])}function dm(e){return $v(e.context)}function _e(e){ue(!1)}function Uv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:s,static:o=!1,future:a}=e;Vi()&&ue(!1);let l=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:s,static:o,future:Oi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ir(r));let{pathname:d="/",search:f="",hash:m="",state:x=null,key:v="default"}=r,w=k.useMemo(()=>{let b=vc(d,l);return b==null?null:{location:{pathname:b,search:f,hash:m,state:x,key:v},navigationType:i}},[l,d,f,m,x,v,i]);return w==null?null:k.createElement(Rn.Provider,{value:c},k.createElement(Ho.Provider,{children:n,value:w}))}function Wv(e){let{children:t,location:n}=e;return zv(nu(t),n)}new Promise(()=>{});function nu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,nu(r.props.children,s));return}r.type!==_e&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ru.apply(this,arguments)}function Hv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Gv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kv(e,t){return e.button===0&&(!t||t==="_self")&&!Gv(e)}const Yv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Qv="6";try{window.__reactRouterVersion=Qv}catch{}const Xv="startTransition",Wd=Vg[Xv];function qv(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=ev({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=k.useCallback(f=>{c&&Wd?Wd(()=>l(f)):l(f)},[l,c]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.createElement(Uv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ui=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:f}=t,m=Hv(t,Yv),{basename:x}=k.useContext(Rn),v,w=!1;if(typeof c=="string"&&Zv.test(c)&&(v=c,Jv))try{let g=new URL(window.location.href),y=c.startsWith("//")?new URL(g.protocol+c):new URL(c),C=vc(y.pathname,x);y.origin===g.origin&&C!=null?c=C+y.search+y.hash:w=!0}catch{}let b=Ev(c,{relative:i}),p=ex(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function h(g){r&&r(g),g.defaultPrevented||p(g)}return k.createElement("a",ru({},m,{href:v||b,onClick:w||s?r:h,ref:n,target:l}))});var Hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hd||(Hd={}));var Gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function ex(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=_n(),c=pn(),d=lm(e,{relative:o});return k.useCallback(f=>{if(Kv(f,n)){f.preventDefault();let m=r!==void 0?r:ho(c)===ho(d);l(e,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,d,r,i,n,e,s,o,a])}var Oe=function(){return Oe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Oe.apply(this,arguments)};function Ii(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var J="-ms-",pi="-moz-",G="-webkit-",pm="comm",Go="rule",wc="decl",tx="@import",fm="@keyframes",nx="@layer",hm=Math.abs,yc=String.fromCharCode,iu=Object.assign;function rx(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function mm(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Os(e,t,n){return e.indexOf(t,n)}function he(e,t){return e.charCodeAt(t)|0}function Er(e,t,n){return e.slice(t,n)}function ht(e){return e.length}function gm(e){return e.length}function ni(e,t){return t.push(e),e}function ix(e,t){return e.map(t).join("")}function Kd(e,t){return e.filter(function(n){return!Et(n,t)})}var Ko=1,Tr=1,vm=0,tt=0,ae=0,Nr="";function Yo(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ko,column:Tr,length:o,return:"",siblings:a}}function Bt(e,t){return iu(Yo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bn(e){for(;e.root;)e=Bt(e.root,{children:[e]});ni(e,e.siblings)}function sx(){return ae}function ox(){return ae=tt>0?he(Nr,--tt):0,Tr--,ae===10&&(Tr=1,Ko--),ae}function ut(){return ae=tt<vm?he(Nr,tt++):0,Tr++,ae===10&&(Tr=1,Ko++),ae}function Tn(){return he(Nr,tt)}function Is(){return tt}function Qo(e,t){return Er(Nr,e,t)}function su(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ax(e){return Ko=Tr=1,vm=ht(Nr=e),tt=0,[]}function lx(e){return Nr="",e}function Pa(e){return mm(Qo(tt-1,ou(e===91?e+2:e===40?e+1:e)))}function ux(e){for(;(ae=Tn())&&ae<33;)ut();return su(e)>2||su(ae)>3?"":" "}function cx(e,t){for(;--t&&ut()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Qo(e,Is()+(t<6&&Tn()==32&&ut()==32))}function ou(e){for(;ut();)switch(ae){case e:return tt;case 34:case 39:e!==34&&e!==39&&ou(ae);break;case 40:e===41&&ou(e);break;case 92:ut();break}return tt}function dx(e,t){for(;ut()&&e+ae!==57;)if(e+ae===84&&Tn()===47)break;return"/*"+Qo(t,tt-1)+"*"+yc(e===47?e:ut())}function px(e){for(;!su(Tn());)ut();return Qo(e,tt)}function fx(e){return lx(Ns("",null,null,null,[""],e=ax(e),0,[0],e))}function Ns(e,t,n,r,i,s,o,a,l){for(var c=0,d=0,f=o,m=0,x=0,v=0,w=1,b=1,p=1,h=0,g="",y=i,C=s,j=r,E=g;b;)switch(v=h,h=ut()){case 40:if(v!=108&&he(E,f-1)==58){Os(E+=D(Pa(h),"&","&\f"),"&\f",hm(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Pa(h);break;case 9:case 10:case 13:case 32:E+=ux(v);break;case 92:E+=cx(Is()-1,7);continue;case 47:switch(Tn()){case 42:case 47:ni(hx(dx(ut(),Is()),t,n,l),l);break;default:E+="/"}break;case 123*w:a[c++]=ht(E)*p;case 125*w:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:p==-1&&(E=D(E,/\f/g,"")),x>0&&ht(E)-f&&ni(x>32?Qd(E+";",r,n,f-1,l):Qd(D(E," ","")+";",r,n,f-2,l),l);break;case 59:E+=";";default:if(ni(j=Yd(E,t,n,c,d,i,a,g,y=[],C=[],f,s),s),h===123)if(d===0)Ns(E,t,j,j,y,s,f,a,C);else switch(m===99&&he(E,3)===110?100:m){case 100:case 108:case 109:case 115:Ns(e,j,j,r&&ni(Yd(e,j,j,0,0,i,a,g,i,y=[],f,C),C),i,C,f,a,r?y:C);break;default:Ns(E,j,j,j,[""],C,0,a,C)}}c=d=x=0,w=p=1,g=E="",f=o;break;case 58:f=1+ht(E),x=v;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&ox()==125)continue}switch(E+=yc(h),h*w){case 38:p=d>0?1:(E+="\f",-1);break;case 44:a[c++]=(ht(E)-1)*p,p=1;break;case 64:Tn()===45&&(E+=Pa(ut())),m=Tn(),d=f=ht(g=E+=px(Is())),h++;break;case 45:v===45&&ht(E)==2&&(w=0)}}return s}function Yd(e,t,n,r,i,s,o,a,l,c,d,f){for(var m=i-1,x=i===0?s:[""],v=gm(x),w=0,b=0,p=0;w<r;++w)for(var h=0,g=Er(e,m+1,m=hm(b=o[w])),y=e;h<v;++h)(y=mm(b>0?x[h]+" "+g:D(g,/&\f/g,x[h])))&&(l[p++]=y);return Yo(e,t,n,i===0?Go:a,l,c,d,f)}function hx(e,t,n,r){return Yo(e,t,n,pm,yc(sx()),Er(e,2,-2),0,r)}function Qd(e,t,n,r,i){return Yo(e,t,n,wc,Er(e,0,r),Er(e,r+1,-1),r,i)}function xm(e,t,n){switch(rx(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 4789:return pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+pi+e+J+e+e;case 5936:switch(he(e,t+11)){case 114:return G+e+J+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+J+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+J+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+J+e+e;case 6165:return G+e+J+"flex-"+e+e;case 5187:return G+e+D(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return G+e+J+"flex-item-"+D(e,/flex-|-self/g,"")+(Et(e,/flex-|baseline/)?"":J+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return G+e+J+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+J+D(e,"shrink","negative")+e;case 5292:return G+e+J+D(e,"basis","preferred-size")+e;case 6060:return G+"box-"+D(e,"-grow","")+G+e+J+D(e,"grow","positive")+e;case 4554:return G+D(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4200:if(!Et(e,/flex-|baseline/))return J+"grid-column-align"+Er(e,t)+e;break;case 2592:case 3360:return J+D(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Et(r.props,/grid-\w+-end/)})?~Os(e+(n=n[t].value),"span",0)?e:J+D(e,"-start","")+e+J+"grid-row-span:"+(~Os(n,"span",0)?Et(n,/\d+/):+Et(n,/\d+/)-+Et(e,/\d+/))+";":J+D(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Et(r.props,/grid-\w+-start/)})?e:J+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+pi+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Os(e,"stretch",0)?xm(D(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return J+i+":"+s+c+(o?J+i+"-span:"+(a?l:+l-+s)+c:"")+e});case 4949:if(he(e,t+6)===121)return D(e,":",":"+G)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(he(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+J+"$2box$3")+e;case 100:return D(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function go(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function mx(e,t,n,r){switch(e.type){case nx:if(e.children.length)break;case tx:case wc:return e.return=e.return||e.value;case pm:return"";case fm:return e.return=e.value+"{"+go(e.children,r)+"}";case Go:if(!ht(e.value=e.props.join(",")))return""}return ht(n=go(e.children,r))?e.return=e.value+"{"+n+"}":""}function gx(e){var t=gm(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function vx(e){return function(t){t.root||(t=t.return)&&e(t)}}function xx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wc:e.return=xm(e.value,e.length,n);return;case fm:return go([Bt(e,{value:D(e.value,"@","@"+G)})],r);case Go:if(e.length)return ix(n=e.props,function(i){switch(Et(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bn(Bt(e,{props:[D(i,/:(read-\w+)/,":"+pi+"$1")]})),Bn(Bt(e,{props:[i]})),iu(e,{props:Kd(n,r)});break;case"::placeholder":Bn(Bt(e,{props:[D(i,/:(plac\w+)/,":"+G+"input-$1")]})),Bn(Bt(e,{props:[D(i,/:(plac\w+)/,":"+pi+"$1")]})),Bn(Bt(e,{props:[D(i,/:(plac\w+)/,J+"input-$1")]})),Bn(Bt(e,{props:[i]})),iu(e,{props:Kd(n,r)});break}return""})}}var wx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ae={},Pr=typeof process<"u"&&Ae!==void 0&&(Ae.REACT_APP_SC_ATTR||Ae.SC_ATTR)||"data-styled",wm="active",ym="data-styled-version",Xo="6.1.11",Sc=`/*!sc*/
`,bc=typeof window<"u"&&"HTMLElement"in window,yx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==""?Ae.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ae.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.SC_DISABLE_SPEEDY!==void 0&&Ae.SC_DISABLE_SPEEDY!==""&&Ae.SC_DISABLE_SPEEDY!=="false"&&Ae.SC_DISABLE_SPEEDY),qo=Object.freeze([]),$r=Object.freeze({});function Sx(e,t,n){return n===void 0&&(n=$r),e.theme!==n.theme&&e.theme||t||n.theme}var Sm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cx=/(^-|-$)/g;function Xd(e){return e.replace(bx,"-").replace(Cx,"")}var jx=/(a)(d)/gi,ds=52,qd=function(e){return String.fromCharCode(e+(e>25?39:97))};function au(e){var t,n="";for(t=Math.abs(e);t>ds;t=t/ds|0)n=qd(t%ds)+n;return(qd(t%ds)+n).replace(jx,"$1-$2")}var $a,bm=5381,cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Cm=function(e){return cr(bm,e)};function jm(e){return au(Cm(e)>>>0)}function kx(e){return e.displayName||e.name||"Component"}function La(e){return typeof e=="string"&&!0}var km=typeof Symbol=="function"&&Symbol.for,Em=km?Symbol.for("react.memo"):60115,Ex=km?Symbol.for("react.forward_ref"):60112,Tx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Px={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$x=(($a={})[Ex]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$a[Em]=Tm,$a);function Jd(e){return("type"in(t=e)&&t.type.$$typeof)===Em?Tm:"$$typeof"in e?$x[e.$$typeof]:Tx;var t}var Lx=Object.defineProperty,zx=Object.getOwnPropertyNames,Zd=Object.getOwnPropertySymbols,Fx=Object.getOwnPropertyDescriptor,Ox=Object.getPrototypeOf,ep=Object.prototype;function Pm(e,t,n){if(typeof t!="string"){if(ep){var r=Ox(t);r&&r!==ep&&Pm(e,r,n)}var i=zx(t);Zd&&(i=i.concat(Zd(t)));for(var s=Jd(e),o=Jd(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Px||n&&n[l]||o&&l in o||s&&l in s)){var c=Fx(t,l);try{Lx(e,l,c)}catch{}}}}return e}function Lr(e){return typeof e=="function"}function Cc(e){return typeof e=="object"&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ni(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function uu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ni(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=uu(e[r],t[r]);else if(Ni(t))for(var r in t)e[r]=uu(e[r],t[r]);return e}function jc(e,t){Object.defineProperty(e,"toString",{value:t})}function Wi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ix=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Wi(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Sc);return n},e}(),Ms=new Map,vo=new Map,Rs=1,ps=function(e){if(Ms.has(e))return Ms.get(e);for(;vo.has(Rs);)Rs++;var t=Rs++;return Ms.set(e,t),vo.set(t,e),t},Nx=function(e,t){Rs=t+1,Ms.set(e,t),vo.set(t,e)},Mx="style[".concat(Pr,"][").concat(ym,'="').concat(Xo,'"]'),Rx=new RegExp("^".concat(Pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_x=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Ax=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Sc),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(Rx);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(Nx(d,c),_x(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function Dx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $m=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Pr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Pr,wm),r.setAttribute(ym,Xo);var o=Dx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Bx=function(){function e(t){this.element=$m(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Wi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Vx=function(){function e(t){this.element=$m(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ux=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),tp=bc,Wx={isServer:!bc,useCSSOMInjection:!yx},Lm=function(){function e(t,n,r){t===void 0&&(t=$r),n===void 0&&(n={});var i=this;this.options=Oe(Oe({},Wx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&bc&&tp&&(tp=!1,function(s){for(var o=document.querySelectorAll(Mx),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(Pr)!==wm&&(Ax(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),jc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var m=function(p){return vo.get(p)}(f);if(m===void 0)return"continue";var x=s.names.get(m),v=o.getGroup(f);if(x===void 0||v.length===0)return"continue";var w="".concat(Pr,".g").concat(f,'[id="').concat(m,'"]'),b="";x!==void 0&&x.forEach(function(p){p.length>0&&(b+="".concat(p,","))}),l+="".concat(v).concat(w,'{content:"').concat(b,'"}').concat(Sc)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return ps(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Oe(Oe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ux(i):r?new Bx(i):new Vx(i)}(this.options),new Ix(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ps(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ps(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ps(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Hx=/&/g,Gx=/^\s*\/\/.*$/gm;function zm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zm(n.children,t)),n})}function Kx(e){var t,n,r,i=$r,s=i.options,o=s===void 0?$r:s,a=i.plugins,l=a===void 0?qo:a,c=function(m,x,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):m},d=l.slice();d.push(function(m){m.type===Go&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Hx,n).replace(r,c))}),o.prefix&&d.push(xx),d.push(mx);var f=function(m,x,v,w){x===void 0&&(x=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(Gx,""),p=fx(v||x?"".concat(v," ").concat(x," { ").concat(b," }"):b);o.namespace&&(p=zm(p,o.namespace));var h=[];return go(p,gx(d.concat(vx(function(g){return h.push(g)})))),h};return f.hash=l.length?l.reduce(function(m,x){return x.name||Wi(15),cr(m,x.name)},bm).toString():"",f}var Yx=new Lm,cu=Kx(),Fm=Q.createContext({shouldForwardProp:void 0,styleSheet:Yx,stylis:cu});Fm.Consumer;Q.createContext(void 0);function np(){return k.useContext(Fm)}var Om=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=cu);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,jc(this,function(){throw Wi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cu),this.name+t.hash},e}(),Qx=function(e){return e>="A"&&e<="Z"};function rp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Qx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Im=function(e){return e==null||e===!1||e===""},Nm=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Im(s)&&(Array.isArray(s)&&s.isCss||Lr(s)?r.push("".concat(rp(i),":"),s,";"):Ni(s)?r.push.apply(r,Ii(Ii(["".concat(i," {")],Nm(s),!1),["}"],!1)):r.push("".concat(rp(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in wx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Pn(e,t,n,r){if(Im(e))return[];if(Cc(e))return[".".concat(e.styledComponentId)];if(Lr(e)){if(!Lr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Pn(i,t,n,r)}var s;return e instanceof Om?n?(e.inject(n,r),[e.getName(r)]):[e]:Ni(e)?Nm(e):Array.isArray(e)?Array.prototype.concat.apply(qo,e.map(function(o){return Pn(o,t,n,r)})):[e.toString()]}function Xx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Lr(n)&&!Cc(n))return!1}return!0}var qx=Cm(Xo),Jx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Xx(t),this.componentId=n,this.baseHash=cr(qx,n),this.baseStyle=r,Lm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=jn(i,this.staticRulesId);else{var s=lu(Pn(this.rules,t,n,r)),o=au(cr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=jn(i,o),this.staticRulesId=o}else{for(var l=cr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=lu(Pn(f,t,n,r));l=cr(l,m+d),c+=m}}if(c){var x=au(l>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=jn(i,x)}}return i},e}(),Mm=Q.createContext(void 0);Mm.Consumer;var za={};function Zx(e,t,n){var r=Cc(e),i=e,s=!La(e),o=t.attrs,a=o===void 0?qo:o,l=t.componentId,c=l===void 0?function(y,C){var j=typeof y!="string"?"sc":Xd(y);za[j]=(za[j]||0)+1;var E="".concat(j,"-").concat(jm(Xo+j+za[j]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(y){return La(y)?"styled.".concat(y):"Styled(".concat(kx(y),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Xd(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;v=function(y,C){return w(y,C)&&b(y,C)}}else v=w}var p=new Jx(n,m,r?i.componentStyle:void 0);function h(y,C){return function(j,E,P){var $=j.attrs,T=j.componentStyle,O=j.defaultProps,I=j.foldedComponentIds,F=j.styledComponentId,_=j.target,A=Q.useContext(Mm),se=np(),Le=j.shouldForwardProp||se.shouldForwardProp,z=Sx(E,A,O)||$r,N=function(_t,Re,bt){for(var Rr,gn=Oe(Oe({},Re),{className:void 0,theme:bt}),ea=0;ea<_t.length;ea+=1){var Ki=Lr(Rr=_t[ea])?Rr(gn):Rr;for(var At in Ki)gn[At]=At==="className"?jn(gn[At],Ki[At]):At==="style"?Oe(Oe({},gn[At]),Ki[At]):Ki[At]}return Re.className&&(gn.className=jn(gn.className,Re.className)),gn}($,E,z),R=N.as||_,H={};for(var K in N)N[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&N.theme===z||(K==="forwardedAs"?H.as=N.forwardedAs:Le&&!Le(K,R)||(H[K]=N[K]));var mn=function(_t,Re){var bt=np(),Rr=_t.generateAndInjectStyles(Re,bt.styleSheet,bt.stylis);return Rr}(T,N),nt=jn(I,F);return mn&&(nt+=" "+mn),N.className&&(nt+=" "+N.className),H[La(R)&&!Sm.has(R)?"class":"className"]=nt,H.ref=P,k.createElement(R,H)}(g,y,C)}h.displayName=f;var g=Q.forwardRef(h);return g.attrs=x,g.componentStyle=p,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?jn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=m,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(C){for(var j=[],E=1;E<arguments.length;E++)j[E-1]=arguments[E];for(var P=0,$=j;P<$.length;P++)uu(C,$[P],!0);return C}({},i.defaultProps,y):y}}),jc(g,function(){return".".concat(g.styledComponentId)}),s&&Pm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function ip(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var sp=function(e){return Object.assign(e,{isCss:!0})};function U(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Lr(e)||Ni(e))return sp(Pn(ip(qo,Ii([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Pn(r):sp(Pn(ip(r,t)))}function du(e,t,n){if(n===void 0&&(n=$r),!t)throw Wi(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,U.apply(void 0,Ii([i],s,!1)))};return r.attrs=function(i){return du(e,t,Oe(Oe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return du(e,t,Oe(Oe({},n),i))},r}var Rm=function(e){return du(Zx,e)},S=Rm;Sm.forEach(function(e){S[e]=Rm(e)});function dt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=lu(U.apply(void 0,Ii([e],t,!1))),i=jm(r);return new Om(i,r)}const ew=S.div`
  width: auto;
  height: 53px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0.5rem;
  cursor: pointer;

  & > p {
    font-family: "Fixel SemiBold", serif;
    font-size: clamp(1.5rem, 0.6875rem + 1.6927vw, 2.71875rem);
  }

  & > img {
    width: 49px;
  }

  @media (max-width: 850px) {
    width:190px;

    & > img {
      width: 30px;
    }
  }
  
  @media(max-width: 768px){
    width: 50px;
    
    & > p {
      display: none;
    }
    
    & > img {
      width: 50px;
    }
    
  }
`,tw=()=>{const e=_n();return u.jsxs(ew,{onClick:()=>e("/digital/home"),children:[u.jsx("img",{src:"/digital/ui/logo.svg",alt:"logo-icon"}),u.jsx("p",{children:"Tedo Artline"})]})};var _m={exports:{}},nw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rw=nw,iw=rw;function Am(){}function Dm(){}Dm.resetWarningCache=Am;var sw=function(){function e(r,i,s,o,a,l){if(l!==iw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dm,resetWarningCache:Am};return n.PropTypes=n,n};_m.exports=sw();var ow=_m.exports;const je=bu(ow),aw=S(Ui)`
  text-decoration: none;
  font-size: clamp(0.875rem, 0.2917rem + 1.2153vw, 1.75rem);
  padding: 6px 10px 1px;
  color: #1344F0;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: 0.4s;


  &:last-child {
    width: 365px;
    height: auto;
    background: #4DDEC4;
    display: flex;
    font-size: clamp(1.5rem, 0rem + 3.125vw, 3.75rem);
    color: #F2F6FF;
    font-family: "Fixel SemiBold Italic", serif;
    border-radius: 0;

    & > img {
      width: clamp(1rem, 0.3654rem + 2.8205vw, 3.75rem);
      height: clamp(1rem, 0.3654rem + 2.8205vw, 3.75rem);
    }

    &:hover {
      border-radius: 12px;
    }

    @media (max-width: 1700px) {
      width: auto;
    }
  }

  &:hover {
    color: #f2f6ff;
    background: #1344F0;
  }

  ${e=>e.active==="active"&&U`
            color: #f2f6ff;
            background: #1344F0 !important;
          `};

`;function qn({to:e,children:t,path:n}){const r=pn(),i=s=>r.pathname.includes(s)?"active":null;return u.jsx(aw,{active:i(n||e),to:e,children:t})}qn.propTypes={to:je.string.isRequired,children:je.node.isRequired,path:je.string};var lw={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const uw=bu(lw);var cw=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function op(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(uw[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}for(var i=new RegExp(cw),s=null;(s=i.exec(e))!==null;)if(s[0].trim())if(s[1]){var o=s[1].trim(),a=[o,""];o.indexOf("=")>-1&&(a=o.split("=")),t.attrs[a[0]]=a[1],i.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var dw=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,pw=/^\s*$/,fw=Object.create(null);function Bm(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var r=[];for(var i in n)r.push(i+'="'+n[i]+'"');return r.length?" "+r.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(Bm,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var hw={parse:function(e,t){t||(t={}),t.components||(t.components=fw);var n,r=[],i=[],s=-1,o=!1;if(e.indexOf("<")!==0){var a=e.indexOf("<");r.push({type:"text",content:a===-1?e:e.substring(0,a)})}return e.replace(dw,function(l,c){if(o){if(l!=="</"+n.name+">")return;o=!1}var d,f=l.charAt(1)!=="/",m=l.startsWith("<!--"),x=c+l.length,v=e.charAt(x);if(m){var w=op(l);return s<0?(r.push(w),r):((d=i[s]).children.push(w),r)}if(f&&(s++,(n=op(l)).type==="tag"&&t.components[n.name]&&(n.type="component",o=!0),n.voidElement||o||!v||v==="<"||n.children.push({type:"text",content:e.slice(x,e.indexOf("<",x))}),s===0&&r.push(n),(d=i[s-1])&&d.children.push(n),i[s]=n),(!f||n.voidElement)&&(s>-1&&(n.voidElement||n.name===l.slice(2,-1))&&(s--,n=s===-1?r:i[s]),!o&&v!=="<"&&v)){d=s===-1?r:i[s].children;var b=e.indexOf("<",x),p=e.slice(x,b===-1?void 0:b);pw.test(p)&&(p=" "),(b>-1&&s+d.length>=0||p!==" ")&&d.push({type:"text",content:p})}}),r},stringify:function(e){return e.reduce(function(t,n){return t+Bm("",n)},"")}};function _s(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const ap={};function xo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&ap[t[0]]||(typeof t[0]=="string"&&(ap[t[0]]=new Date),_s(...t))}const Vm=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function lp(e,t,n){e.loadNamespaces(t,Vm(e,n))}function up(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Vm(e,r))}function mw(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,s=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=t.services.backendConnector.state[`${a}|${l}`];return c===-1||c===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||o(r,e)&&(!i||o(s,e)))}function gw(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(xo("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,e))return!1}}):mw(e,t,n)}const vw=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,xw={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ww=e=>xw[e],yw=e=>e.replace(vw,ww);let pu={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:yw};function Sw(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pu={...pu,...e}}function Um(){return pu}let Wm;function bw(e){Wm=e}function kc(){return Wm}function Fa(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function Oa(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?dr(t):t}function Cw(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>k.isValidElement(t))}function dr(e){return Array.isArray(e)?e:[e]}function jw(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function Hm(e,t){if(!e)return"";let n="";const r=dr(e),i=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach((s,o)=>{if(typeof s=="string")n+=`${s}`;else if(k.isValidElement(s)){const a=Object.keys(s.props).length,l=i.indexOf(s.type)>-1,c=s.props.children;if(!c&&l&&a===0)n+=`<${s.type}/>`;else if(!c&&(!l||a!==0))n+=`<${o}></${o}>`;else if(s.props.i18nIsDynamicList)n+=`<${o}></${o}>`;else if(l&&a===1&&typeof c=="string")n+=`<${s.type}>${c}</${s.type}>`;else{const d=Hm(c,t);n+=`<${o}>${d}</${o}>`}}else if(s===null)_s("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:a,...l}=s,c=Object.keys(l);if(c.length===1){const d=a?`${c[0]}, ${a}`:c[0];n+=`{{${d}}}`}else _s("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else _s("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function kw(e,t,n,r,i,s){if(t==="")return[];const o=r.transKeepBasicHtmlNodesFor||[],a=t&&new RegExp(o.map(b=>`<${b}`).join("|")).test(t);if(!e&&!a&&!s)return[t];const l={};function c(b){dr(b).forEach(h=>{typeof h!="string"&&(Fa(h)?c(Oa(h)):typeof h=="object"&&!k.isValidElement(h)&&Object.assign(l,h))})}c(e);const d=hw.parse(`<0>${t}</0>`),f={...l,...i};function m(b,p,h){const g=Oa(b),y=v(g,p.children,h);return Cw(g)&&y.length===0||b.props&&b.props.i18nIsDynamicList?g:y}function x(b,p,h,g,y){b.dummy?(b.children=p,h.push(k.cloneElement(b,{key:g},y?void 0:p))):h.push(...k.Children.map([b],C=>{const j={...C.props};return delete j.i18nIsDynamicList,k.createElement(C.type,{...j,key:g,ref:C.ref},y?null:p)}))}function v(b,p,h){const g=dr(b);return dr(p).reduce((C,j,E)=>{const P=j.children&&j.children[0]&&j.children[0].content&&n.services.interpolator.interpolate(j.children[0].content,f,n.language);if(j.type==="tag"){let $=g[parseInt(j.name,10)];h.length===1&&!$&&($=h[0][j.name]),$||($={});const T=Object.keys(j.attrs).length!==0?jw({props:j.attrs},$):$,O=k.isValidElement(T),I=O&&Fa(j,!0)&&!j.voidElement,F=a&&typeof T=="object"&&T.dummy&&!O,_=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,j.name);if(typeof T=="string"){const A=n.services.interpolator.interpolate(T,f,n.language);C.push(A)}else if(Fa(T)||I){const A=m(T,j,h);x(T,A,C,E)}else if(F){const A=v(g,j.children,h);x(T,A,C,E)}else if(Number.isNaN(parseFloat(j.name)))if(_){const A=m(T,j,h);x(T,A,C,E,j.voidElement)}else if(r.transSupportBasicHtmlNodes&&o.indexOf(j.name)>-1)if(j.voidElement)C.push(k.createElement(j.name,{key:`${j.name}-${E}`}));else{const A=v(g,j.children,h);C.push(k.createElement(j.name,{key:`${j.name}-${E}`},A))}else if(j.voidElement)C.push(`<${j.name} />`);else{const A=v(g,j.children,h);C.push(`<${j.name}>${A}</${j.name}>`)}else if(typeof T=="object"&&!O){const A=j.children[0]?P:null;A&&C.push(A)}else x(T,P,C,E,j.children.length!==1||!P)}else if(j.type==="text"){const $=r.transWrapTextNodes,T=s?r.unescape(n.services.interpolator.interpolate(j.content,f,n.language)):n.services.interpolator.interpolate(j.content,f,n.language);$?C.push(k.createElement($,{key:`${j.name}-${E}`},T)):C.push(T)}return C},[])}const w=v([{dummy:!0,children:e||[]}],d,dr(e||[]));return Oa(w[0])}function Ew(e){let{children:t,count:n,parent:r,i18nKey:i,context:s,tOptions:o={},values:a,defaults:l,components:c,ns:d,i18n:f,t:m,shouldUnescape:x,...v}=e;const w=f||kc();if(!w)return xo("You will need to pass in an i18next instance by using i18nextReactModule"),t;const b=m||w.t.bind(w)||(I=>I),p={...Um(),...w.options&&w.options.react};let h=d||b.ns||w.options&&w.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"];const g=Hm(t,p),y=l||g||p.transEmptyNodeValue||i,{hashTransKey:C}=p,j=i||(C?C(g||y):g||y);w.options&&w.options.interpolation&&w.options.interpolation.defaultVariables&&(a=a&&Object.keys(a).length>0?{...a,...w.options.interpolation.defaultVariables}:{...w.options.interpolation.defaultVariables});const E=a||n!==void 0||!t?o.interpolation:{interpolation:{...o.interpolation,prefix:"#$?",suffix:"?$#"}},P={...o,context:s||o.context,count:n,...a,...E,defaultValue:y,ns:h},$=j?b(j,P):y;c&&Object.keys(c).forEach(I=>{const F=c[I];if(typeof F.type=="function"||!F.props||!F.props.children||$.indexOf(`${I}/>`)<0&&$.indexOf(`${I} />`)<0)return;function _(){return k.createElement(k.Fragment,null,F)}c[I]=k.createElement(_)});const T=kw(c||t,$,w,p,P,x),O=r!==void 0?r:p.defaultTransParent;return O?k.createElement(O,v,T):T}const Tw={type:"3rdParty",init(e){Sw(e.options.react),bw(e)}},Ec=k.createContext();class Pw{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function B(e){let{children:t,count:n,parent:r,i18nKey:i,context:s,tOptions:o={},values:a,defaults:l,components:c,ns:d,i18n:f,t:m,shouldUnescape:x,...v}=e;const{i18n:w,defaultNS:b}=k.useContext(Ec)||{},p=f||w||kc(),h=m||p&&p.t.bind(p);return Ew({children:t,count:n,parent:r,i18nKey:i,context:s,tOptions:o,values:a,defaults:l,components:c,ns:d||h&&h.ns||b||p&&p.options&&p.options.defaultNS,i18n:p,t:m,shouldUnescape:x,...v})}const $w=(e,t)=>{const n=k.useRef();return k.useEffect(()=>{n.current=e},[e,t]),n.current};function Gm(e,t,n,r){return e.getFixedT(t,n,r)}function Lw(e,t,n,r){return k.useCallback(Gm(e,t,n,r),[e,t,n,r])}function ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=k.useContext(Ec)||{},s=n||r||kc();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Pw),!s){xo("You will need to pass in an i18next instance by using initReactI18next");const y=(j,E)=>typeof E=="string"?E:E&&typeof E=="object"&&typeof E.defaultValue=="string"?E.defaultValue:Array.isArray(j)?j[j.length-1]:j,C=[y,{},!1];return C.t=y,C.i18n={},C.ready=!1,C}s.options.react&&s.options.react.wait!==void 0&&xo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...Um(),...s.options.react,...t},{useSuspense:a,keyPrefix:l}=o;let c=i||s.options&&s.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(c);const d=(s.isInitialized||s.initializedStoreOnce)&&c.every(y=>gw(y,s,o)),f=Lw(s,t.lng||null,o.nsMode==="fallback"?c:c[0],l),m=()=>f,x=()=>Gm(s,t.lng||null,o.nsMode==="fallback"?c:c[0],l),[v,w]=k.useState(m);let b=c.join();t.lng&&(b=`${t.lng}${b}`);const p=$w(b),h=k.useRef(!0);k.useEffect(()=>{const{bindI18n:y,bindI18nStore:C}=o;h.current=!0,!d&&!a&&(t.lng?up(s,t.lng,c,()=>{h.current&&w(x)}):lp(s,c,()=>{h.current&&w(x)})),d&&p&&p!==b&&h.current&&w(x);function j(){h.current&&w(x)}return y&&s&&s.on(y,j),C&&s&&s.store.on(C,j),()=>{h.current=!1,y&&s&&y.split(" ").forEach(E=>s.off(E,j)),C&&s&&C.split(" ").forEach(E=>s.store.off(E,j))}},[s,b]),k.useEffect(()=>{h.current&&d&&w(m)},[s,l,d]);const g=[v,s,d];if(g.t=v,g.i18n=s,g.ready=d,d||!d&&!a)return g;throw new Promise(y=>{t.lng?up(s,t.lng,c,()=>y()):lp(s,c,()=>y())})}function zw(e){let{i18n:t,defaultNS:n,children:r}=e;const i=k.useMemo(()=>({i18n:t,defaultNS:n}),[t,n]);return k.createElement(Ec.Provider,{value:i},r)}const Fw=S.nav`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1120px) {
    justify-content: flex-start;
    width: 70%;
  }
`,Ow=S.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Iw=()=>{const{t:e}=ge();return u.jsxs(Fw,{children:[u.jsx(tw,{}),u.jsxs(Ow,{children:[u.jsx(qn,{to:"digital/home",children:e("header.home")}),u.jsx(qn,{to:"digital/services/ui-ux",path:"service",children:e("header.services")}),u.jsx(qn,{to:"digital/about",children:e("header.about")}),u.jsx(qn,{to:"digital/partners",children:e("header.partners")}),u.jsxs(qn,{to:"digital/contact",children:[e("header.talk")," ",u.jsx("img",{src:"/digital/ui/arrow-up-right.svg",alt:"arrow"})]})]})]})},Nw=dt`
  0% {
    height: 50px;
  }
  60% {
    height: 100px;
  }
  90% {
    height: 85px;
  }
  100% {
    height: 100px;
  }
`,Mw=dt`

`,Rw=S.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  display: grid;
  transition: 0.8s;

  @media (max-width: 768px) {
    height: 29px;
    width: 90px;
  }

  ${e=>e.issecondlanguage==="true"&&U`
    height: 100px;
    animation: ${Nw} 0.5s ease-in;

    & > div:last-child {
      border-radius: 0 0 12px 12px;
      background: #1344F0;
    }

    & > div:first-child {
      border-radius: 12px 12px 0 0;
    }

    @media (max-width: 768px) {
      animation: ${Mw} 0.5s ease-in;
      height: 58px;

    }
  `}
`,cp=S.div`
  width: 100%;
  height: 50px;
  background: #4DDEC4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  cursor: pointer;

  & > p {
    font-size: clamp(0.8125rem, 0.7025rem + 0.3521vw, 1.125rem);
    font-family: "Fixel SemiBold", serif;
    color: #F2F6FF;
    margin-bottom: -5px;
  }

  @media(max-width: 768px){
    height: 29px;

    & > p {
      font-size: 10px;
    }
    
    & > img{
      width: 17px;
    }
  }
`,dp=S.div`
  width: 100%;
  height: 50px;
  background: #4DDEC4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  cursor: pointer;

  & > p {
    font-size: clamp(0.8125rem, 0.7025rem + 0.3521vw, 1.125rem);
    font-family: "Fixel SemiBold", serif;
    color: #F2F6FF;
    margin-bottom: -5px;
  }

  @media(max-width: 768px){
    height: 29px;

    & > p {
      font-size: 10px;
    }

    & > img{
      width: 17px;
    }
  }
`,_w=()=>{const[e,t]=k.useState("en"),[n,r]=k.useState(!1),{i18n:i}=ge(),s=()=>{if(e==="en")return null;t("en"),i.changeLanguage("en")},o=()=>{if(e==="ua")return null;t("ua"),i.changeLanguage("ua")};return u.jsx(Rw,{onMouseOver:()=>r(!0),onMouseOut:()=>r(!1),issecondlanguage:n?"true":"false",children:e==="en"?u.jsxs(u.Fragment,{children:[u.jsxs(cp,{onClick:s,children:[u.jsx("img",{src:"/digital/ui/language.svg",alt:"icon"}),u.jsx("p",{children:"English"})]}),u.jsxs(dp,{onClick:o,children:[u.jsx("img",{src:"/digital/ui/language.svg",alt:"icon"}),u.jsx("p",{children:"Українська"})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs(dp,{onClick:o,children:[u.jsx("img",{src:"/digital/ui/language.svg",alt:"icon"}),u.jsx("p",{children:"Українська"})]}),u.jsxs(cp,{onClick:s,children:[u.jsx("img",{src:"/digital/ui/language.svg",alt:"icon"}),u.jsx("p",{children:"English"})]})]})})},Km=k.createContext();function Ym({children:e}){const[t,n]=k.useState(!1),[r,i]=k.useState("false");function s(){n(o=>!o),i("true")}return u.jsx(Km.Provider,{value:{isOpenBurger:t,toggleBurger:s,isInitialMount:r},children:e})}function Tc(){const e=k.useContext(Km);if(e===void 0)throw new Error("BurgerContext was used outside of BurgerProvider");return e}Ym.propTypes={children:je.node.isRequired};const Aw=dt`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
  }
`,Dw=S.div`
  width: 43px;
  height: 43px;
  padding: 0 11.5px;
  border-radius: 12px;
  background: #1344F0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({isactive:e})=>e==="true"&&U`
    background: #F2F6FF;

  `}
`,Bw=S.div`
  width: 19px;
  height: 2.5px;;
  border-radius: 1rem;
  background: #F2F6FF;
  position: relative;
  transition: background-color 0.3s ease;

  &::before,
  &::after {
    content: "";
    width: 19px;
    height: 2.5px;
    border-radius: 1rem;
    background: #F2F6FF;
    position: absolute;
  }

  &::before {
    top: -8px;
    transition: top 0.3s ease, transform 0.3s ease;
  }

  &::after {
    bottom: -8px;
    transition: bottom 0.3s ease, transform 0.3s ease;
  }

  ${({isactive:e})=>e==="true"&&U`
    
    &::before {
      top: 0;
      transform: rotate(90deg);
      background-color: #1344F0;

    }

    &::after {
      bottom: 0;
      transform: rotate(-180deg);
      background-color: #1344F0;

    }

    animation: ${Aw} 0.3s forwards;
  `}
`;function Qm(){const{toggleBurger:e,isOpenBurger:t}=Tc();return u.jsx(Dw,{isactive:t?"true":"false",onClick:e,children:u.jsx(Bw,{isactive:t?"true":"false"})})}const Vw=S.div`
  width: auto;
  height: 115px;

  display: grid;
  grid-template-columns: 50px 50px 168px;
  grid-template-rows: auto 50px;
  align-items: center;
  gap: 12px;


  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    height: 42.5px;
  }
`,Uw=S.div`
  width: 50px;
  height: 50px;
  background: url("/digital/ui/linkedin.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/linkedin-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 29px;
    height: 29px;
    border-radius: 6px;
  }
`,Ww=S.div`
  width: 50px;
  height: 50px;
  background: url("/digital/ui/mail.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/mail-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 29px;
    height: 29px;
    border-radius: 6px;
  }
`,Hw=S(Ui)`
  text-decoration: none;
  border-radius: 11px;
  grid-column: span 3;
  background-image: linear-gradient(to right, rgba(185, 163, 121, 0.41), #b9a379),
  linear-gradient(to bottom, #E0E0DE, rgba(185, 163, 121, 0.59));
  background-position: left top, left top;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: clamp(0.8125rem, 0.7025rem + 0.3521vw, 1.125rem);
  font-family: "Fixel SemiBold", serif;
  color: #F2F6FF;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Gw=()=>{const{t:e}=ge(),t=n=>{window.location.href=n};return u.jsxs(Vw,{children:[u.jsx(Uw,{onClick:()=>t("https://www.linkedin.com")}),u.jsx(Ww,{onClick:()=>t("https://www.gmail.com")}),u.jsx(_w,{}),u.jsx(Hw,{to:"/architecture/home",children:e("header.solutions")}),window.innerWidth<=768?u.jsx(Qm,{}):null]})},Kw=S.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: #1344F0;
  z-index: 99999999;

  display: grid;
  grid-template-rows: auto 1fr auto;
`,Yw=S.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;

  & > h2 {
    font-family: "Fixel SemiBold Italic", serif;
    font-size: 28px;
    color: #F2F6FF;
  }
`,Qw=S.nav`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`,fs=S(Ui)`
  width: 200px;
  text-align: center;
  text-decoration: none;
  font-size: 28px;
  color: #F2F6FF;
  border-radius: 12px;
  transition: 0.4s;
  padding: 10px 0;

  &:hover {
    color: #1344F0;
    background: #F2F6FF;
  }

  ${e=>e.active==="active"&&U`
            color: #1344F0;
            background: #F2F6FF;
          `};

`,Xw=S(Ui)`
  text-decoration: none;
  text-align: center;
  width: 100%;
  height: 65px;
  background: #4DDEC4;
  font-size: clamp(3.125rem, -0.625rem + 18.75vw, 4.0625rem);
  color: #F2F6FF;
  font-family: "Fixel SemiBold Italic", serif;
  border-radius: 0;
`,qw=()=>{const{t:e}=ge(),{toggleBurger:t}=Tc(),n=r=>location.pathname.includes(r)?"active":"";return u.jsxs(Kw,{children:[u.jsxs(Yw,{children:[u.jsx("h2",{children:e("header.menu")}),window.innerWidth<=768?u.jsx(Qm,{}):null]}),u.jsxs(Qw,{children:[u.jsx(fs,{onClick:t,active:n("/digital/home"),to:"digital/home",children:e("header.home")}),u.jsx(fs,{onClick:t,active:n("/digital/services"),to:"digital/services/ui-ux",children:e("header.services")}),u.jsx(fs,{onClick:t,active:n("/digital/about"),to:"digital/about",children:e("header.about")}),u.jsx(fs,{onClick:t,active:n("/digital/partners"),to:"digital/partners",children:e("header.partners")})]}),u.jsxs(Xw,{active:n("/digital/contact"),to:"digital/contact",children:[e("header.talk")," ",u.jsx("img",{src:"/digital/ui/arrow-up-right.svg",alt:"arrow"})]})]})},Jw=dt`
  0% {
    height: 0;
  }
  100% {
    height: 100vh;
  }
`,Zw=dt`
  0% {
    height: 100vw;
  }
  100% {
    height: 0;
  }
`,ey=S.header`
  width: 100vw;
  height: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed #1344F0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #F2F6FF;


  @media (max-width: 1120px) {
    height: 160px;
  }

  @media (max-width: 768px) {
    height: 73px;
  }

`,ty=S.header`
  width: 89.5%;
  height: 150px;
  display: flex;
  justify-content: space-between;


  @media (max-width: 1120px) {
    width: 95%;
    height: 120px;
  }

  @media (max-width: 768px) {
    height: 73px;
    width: 100%;
    padding: 16px 24px ;

  }
`,ny=S.div`
  width: 100vw;
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  background: #355abb;
  transition: top 4s;
  overflow: hidden;

  ${e=>e.isopenburger==="false"&&e.isinitialmount==="true"&&U`
    animation: ${Zw} 0.4s;
  `}

  ${e=>e.isopenburger==="true"&&U`
    animation: ${Jw} 0.4s;
    height: 100vh;
  `}
`,ry=()=>{const{isOpenBurger:e,isInitialMount:t}=Tc();return u.jsxs(u.Fragment,{children:[u.jsx(ny,{isinitialmount:t,isopenburger:e?"true":"false",children:u.jsx(qw,{})}),u.jsx(ey,{children:u.jsxs(ty,{children:[u.jsx(Iw,{}),u.jsx(Gw,{})]})})]})},iy=S.footer`
  margin-top: 280px;
  background: #18194F;
  z-index: 5;
`,sy=S.div`
  background: url("/digital/ui/footer-bg.svg");
  height: 742px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`,oy=S.h2`
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translate(-50%, -50%);
  width: 75vw;
  text-align: end;
  font-family: "Fixel Bold", serif;
  font-size: clamp(1.875rem, 1.45rem + 2.125vw, 4rem);
  color: #F2F6FF;
  line-height: 100px;

  & > span {
    background: #4DDEC4;
    color: #F2F6FF;
    font-family: "Fixel Bold", serif;
    padding: 7px 7px 0;
  }

  @media(max-width: 768px){
    width: 90vw;
    text-align: start;
    line-height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > span {
      line-height: 120px;
    }
  }
`,ay=S.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media(max-width: 768px){
    flex-direction: row;
    top: 69%;
    left: 35vw;
    transform: translate(-50%, -50%);
  }
`,ly=S.div`
  width: 40px;
  height: 40px;
  background: url("/digital/ui/mail.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/mail-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`,uy=S.div`
  width: 40px;
  height: 40px;
  background: url("/digital/ui/linkedin.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/linkedin-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`,cy=S.div`
  height: 115px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F2F6FF;
  font-family: "Fixel ExtraLight", serif;
  font-size: clamp(0.875rem, 0.7083rem + 0.3472vw, 1.125rem);
`,dy=()=>{const{t:e}=ge(),t=n=>{window.location.href=n};return u.jsxs(iy,{children:[u.jsxs(sy,{children:[u.jsx(oy,{children:u.jsx(B,{i18nKey:"footer.heading",components:{1:u.jsx("br",{}),2:u.jsx("span",{})}})}),u.jsxs(ay,{children:[u.jsx(ly,{onClick:()=>t("https://www.gmail.com")}),u.jsx(uy,{onClick:()=>t("https://www.linkedin.com")})]})]}),u.jsx(cy,{children:e("footer.copyright")})]})},py=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`,fy=S.main`
  //for header ps:header is fixed
  margin-top: 154px;
  
`,hy=()=>u.jsxs(py,{children:[u.jsx(ry,{}),u.jsx(fy,{children:u.jsx(dm,{})}),u.jsx(dy,{})]}),my=S.div`
  margin-top: 140px;
  width: 45vw;
  text-align: center;
  position: relative;
  padding-bottom: 100px;

  & > h1 {
    font-family: "Fixel Bold", serif;
    font-size: clamp(3.125rem, 2.9231rem + 0.8974vw, 4rem);
    color: #1344F0;
    text-shadow: -5px 2px #4DDEC4;
  }

  & > p {
    margin-top: 36px;
    font-family: "Fixel Text", serif;
    font-size: clamp(1.25rem, 1.1346rem + 0.5128vw, 1.75rem);
  }
  
  

  @media(max-width: 768px){
    margin-top: 50px;
    width: 92vw;

    & > h1 {
      font-size: 25px;
      font-family: "Fixel SemiBold Italic",serif;
    }

    & > p {
      margin-top: 18px;
      font-size: 16px;
      font-family: "Fixel ExtraLight",serif;
    }
  }
`,gy=S.img`
  position: absolute;
  bottom: 0;
  left: 12%;

  @media(max-width: 768px){
   display: none;

  }
`,vy=S.img`
  position: absolute;
  bottom: 13%;
  left: 6%;

  @media (max-width: 768px) {
    display: none;

  }
`,xy=()=>{const{t:e}=ge();return u.jsxs(my,{children:[u.jsx("h1",{children:e("main.home.heading.1")}),u.jsx("p",{children:e("main.home.heading.2")}),u.jsx(vy,{src:"/digital/home/small-bubble.svg",alt:"bubble-icon"}),u.jsx(gy,{src:"/digital/home/big-bubble.svg",alt:"bubble-icon"})]})},Xm=dt`
  0% {
    stroke-dashoffset: 10;
    stroke: #19d8ff;
  }

  50% {
    stroke: #19d8ff;
  }

  100% {
    stroke-dashoffset: 9800;
    stroke: #19d8ff;
  }
`,Pc=dt`
  0% {
    stroke-dashoffset: 10;
    stroke: #1344F0;
  }

  50% {
    stroke: #1344F0;
  }

  100% {
    stroke-dashoffset: 9800;
    stroke: #1344F0;
  }
`,wy=dt`
  0% {
    stroke-dashoffset: 10;
    stroke: #4DDEC4;
  }

  50% {
    stroke: #4DDEC4;
  }

  100% {
    stroke-dashoffset: 9800;
    stroke: #4DDEC4;
  }
`,yy=S.div`
  margin-top: 170px;
  position: relative;
  width: 100vw;
  height: 427px;
  overflow: hidden;
  
  @media(max-width: 1140px){
    margin-top: 100px;
  }

  @media(max-width: 768px){
    margin-top: 70px;
  }
`,Sy=S.section`
  width: 100%;
  height: 100%;
`,by=S.svg`
  width: 100%;
  height: 100%;
`,Cy=S.path`
  stroke-dasharray: 300;
  animation: ${Pc} 25s linear infinite;
  animation-delay: 0s;
`,jy=S.path`
  stroke-dasharray: 400;
  animation: ${Xm} 25s linear infinite;
  transform: translateY(60px);
  animation-delay: 0.2s;
`,ky=S.path`
  stroke-dasharray: 160;
  animation: ${Pc} 25s linear infinite;
  transform: translateY(120px);
  animation-delay: 0.1s;
`,Ey=S.path`
  stroke-dasharray: 240;
  animation: ${wy} 25s linear infinite;
  transform: translateY(200px);
  animation-delay: 0.15s;
`,Ty=S.path`
  stroke-dasharray: 600;
  animation: ${Xm} 25s linear infinite;
  transform: translateY(260px);
  animation-delay: 0.22s;
`,Py=S.path`
  stroke-dasharray: 400;
  animation: ${Pc} 25s linear infinite;
  transform: translateY(340px);
  animation-delay: 0.3s;
`,$y=()=>{let e=427;window.innerWidth<=968&&(e=827),window.innerWidth<=500&&(e=1227);const t={x:0,y:0,width:1420,height:e};return u.jsx(yy,{children:u.jsx(Sy,{children:u.jsx(by,{preserveAspectRatio:"none",viewBox:`${t.x} ${t.y} ${t.width} ${t.height}`,xmlns:"http://www.w3.org/2000/svg",children:u.jsxs("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",children:[u.jsx(Cy,{d:"M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16",strokeWidth:"15"}),u.jsx(jy,{d:"M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16",strokeWidth:"15"}),u.jsx(ky,{d:"M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16",strokeWidth:"15"}),u.jsx(Ey,{d:"M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16",strokeWidth:"15"}),u.jsx(Ty,{d:"M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16",strokeWidth:"15"}),u.jsx(Py,{d:"M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16",strokeWidth:"15"})]})})})})},Ly=S.div`
  width: 60vw;
  margin: 305px auto 0;

  @media (max-width: 1400px) {
    width: 70vw;
  }
  @media (max-width: 1000px) {
    width: 80vw;
  }

  @media (max-width: 968px) {
    margin: 0 auto ;
  }

  @media (max-width: 500px) {
    margin: -100px auto 0;
  }

`,pp=S.p`
  width: 46vw;
  font-family: "Fixel Text", serif;
  font-size: clamp(1rem, 0.8269rem + 0.7692vw, 1.75rem);
  text-indent: 50px;
  color: #18194F;

  @media (max-width: 1400px) {
    width: 70vw;
  }

  @media (max-width: 968px) {
    text-indent: 20px;

  }
  

  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 80vw;

  }
`,zy=S.span`
  font-family: "Fixel SemiBold", serif;
  font-size: clamp(1.5rem, 1.2115rem + 1.2821vw, 2.75rem);
`,Fy=S.span`
  font-family: "Fixel SemiBold", serif;
  font-size: clamp(1.25rem, 1.1058rem + 0.641vw, 1.875rem);
`,Oy=S.h2`
  margin-top: 120px;
  font-size: clamp(2.1875rem, 1.6106rem + 2.5641vw, 4.6875rem);
  font-family: "Fixel SemiBold", serif;
  color: #18194F;

  & > span {
    font-size: clamp(2.5rem, 1.851rem + 2.8846vw, 5.3125rem);
    font-family: "Fixel Bold", serif;
    color: #1344F0;
  }

  @media (max-width: 768px) {
    margin-top: 0;

  }
`,Iy=()=>u.jsxs(Ly,{children:[u.jsx(pp,{children:u.jsx(B,{i18nKey:"main.home.mission.1",components:{1:u.jsx(zy,{})}})}),u.jsx(pp,{children:u.jsx(B,{i18nKey:"main.home.mission.2",components:{2:u.jsx(Fy,{})}})}),u.jsxs(Oy,{children:["Your success ",u.jsx("span",{children:"is"})," our mission"]})]});function fp(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function $c(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:fp(t[n])&&fp(e[n])&&Object.keys(t[n]).length>0&&$c(e[n],t[n])})}const qm={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Mr(){const e=typeof document<"u"?document:{};return $c(e,qm),e}const Ny={document:qm,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ye(){const e=typeof window<"u"?window:{};return $c(e,Ny),e}function My(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Ry(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function fu(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function wo(){return Date.now()}function _y(e){const t=Ye();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Ay(e,t){t===void 0&&(t="x");const n=Ye();let r,i,s;const o=_y(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function hs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Dy(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Be(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Dy(r)){const i=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const a=i[s],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(hs(e[a])&&hs(r[a])?r[a].__swiper__?e[a]=r[a]:Be(e[a],r[a]):!hs(e[a])&&hs(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:Be(e[a],r[a])):e[a]=r[a])}}}return e}function ms(e,t,n){e.style.setProperty(t,n)}function Jm(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Ye(),s=-t.translate;let o=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>s?"next":"prev",d=(m,x)=>c==="next"&&m>=x||c==="prev"&&m<=x,f=()=>{a=new Date().getTime(),o===null&&(o=a);const m=Math.max(Math.min((a-o)/l,1),0),x=.5-Math.cos(m*Math.PI)/2;let v=s+x*(n-s);if(d(v,n)&&(v=n),t.wrapperEl.scrollTo({[r]:v}),d(v,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:v})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function xt(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function yo(e){try{console.warn(e);return}catch{}}function So(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:My(t)),n}function By(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Vy(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Xt(e,t){return Ye().getComputedStyle(e,null).getPropertyValue(t)}function bo(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Zm(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function hu(e,t,n){const r=Ye();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function pe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}let Ia;function Uy(){const e=Ye(),t=Mr();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function eg(){return Ia||(Ia=Uy()),Ia}let Na;function Wy(e){let{userAgent:t}=e===void 0?{}:e;const n=eg(),r=Ye(),i=r.navigator.platform,s=t||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let d=s.match(/(iPad).*OS\s([\d_]+)/);const f=s.match(/(iPod)(.*OS\s([\d_]+))?/),m=!d&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),x=i==="Win32";let v=i==="MacIntel";const w=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&v&&n.touch&&w.indexOf(`${a}x${l}`)>=0&&(d=s.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),v=!1),c&&!x&&(o.os="android",o.android=!0),(d||m||f)&&(o.os="ios",o.ios=!0),o}function tg(e){return e===void 0&&(e={}),Na||(Na=Wy(e)),Na}let Ma;function Hy(){const e=Ye(),t=tg();let n=!1;function r(){const a=e.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(e.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),s=r(),o=s||i&&t.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function Gy(){return Ma||(Ma=Hy()),Ma}function Ky(e){let{swiper:t,on:n,emit:r}=e;const i=Ye();let s=null,o=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(f=>{o=i.requestAnimationFrame(()=>{const{width:m,height:x}=t;let v=m,w=x;f.forEach(b=>{let{contentBoxSize:p,contentRect:h,target:g}=b;g&&g!==t.el||(v=h?h.width:(p[0]||p).inlineSize,w=h?h.height:(p[0]||p).blockSize)}),(v!==m||w!==x)&&a()})}),s.observe(t.el))},c=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",d)}),n("destroy",()=>{c(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",d)})}function Yy(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=[],o=Ye(),a=function(d,f){f===void 0&&(f={});const m=o.MutationObserver||o.WebkitMutationObserver,x=new m(v=>{if(t.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const w=function(){i("observerUpdate",v[0])};o.requestAnimationFrame?o.requestAnimationFrame(w):o.setTimeout(w,0)});x.observe(d,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:typeof f.childList>"u"?!0:f.childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),s.push(x)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=Zm(t.hostEl);for(let f=0;f<d.length;f+=1)a(d[f])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(d=>{d.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var Qy={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),r=e):(t=s[0].events,n=s[0].data,r=s[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),e}};function Xy(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Xt(r,"padding-left")||0,10)-parseInt(Xt(r,"padding-right")||0,10),n=n-parseInt(Xt(r,"padding-top")||0,10)-parseInt(Xt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function qy(){const e=this;function t(T,O){return parseFloat(T.getPropertyValue(e.getDirectionLabel(O))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=xt(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:d.length;let m=[];const x=[],v=[];let w=n.slidesOffsetBefore;typeof w=="function"&&(w=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const p=e.snapGrid.length,h=e.slidesGrid.length;let g=n.spaceBetween,y=-w,C=0,j=0;if(typeof s>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*s:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g,d.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ms(r,"--swiper-centered-offset-before",""),ms(r,"--swiper-centered-offset-after",""));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let P;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(T=>typeof n.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<f;T+=1){P=0;let O;if(d[T]&&(O=d[T]),E&&e.grid.updateSlide(T,O,d),!(d[T]&&Xt(O,"display")==="none")){if(n.slidesPerView==="auto"){$&&(d[T].style[e.getDirectionLabel("width")]="");const I=getComputedStyle(O),F=O.style.transform,_=O.style.webkitTransform;if(F&&(O.style.transform="none"),_&&(O.style.webkitTransform="none"),n.roundLengths)P=e.isHorizontal()?hu(O,"width"):hu(O,"height");else{const A=t(I,"width"),se=t(I,"padding-left"),Le=t(I,"padding-right"),z=t(I,"margin-left"),N=t(I,"margin-right"),R=I.getPropertyValue("box-sizing");if(R&&R==="border-box")P=A+z+N;else{const{clientWidth:H,offsetWidth:K}=O;P=A+se+Le+z+N+(K-H)}}F&&(O.style.transform=F),_&&(O.style.webkitTransform=_),n.roundLengths&&(P=Math.floor(P))}else P=(s-(n.slidesPerView-1)*g)/n.slidesPerView,n.roundLengths&&(P=Math.floor(P)),d[T]&&(d[T].style[e.getDirectionLabel("width")]=`${P}px`);d[T]&&(d[T].swiperSlideSize=P),v.push(P),n.centeredSlides?(y=y+P/2+C/2+g,C===0&&T!==0&&(y=y-s/2-g),T===0&&(y=y-s/2-g),Math.abs(y)<1/1e3&&(y=0),n.roundLengths&&(y=Math.floor(y)),j%n.slidesPerGroup===0&&m.push(y),x.push(y)):(n.roundLengths&&(y=Math.floor(y)),(j-Math.min(e.params.slidesPerGroupSkip,j))%e.params.slidesPerGroup===0&&m.push(y),x.push(y),y=y+P+g),e.virtualSize+=P+g,C=P,j+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+b,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+g}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),E&&e.grid.updateWrapperSize(P,m),!n.centeredSlides){const T=[];for(let O=0;O<m.length;O+=1){let I=m[O];n.roundLengths&&(I=Math.floor(I)),m[O]<=e.virtualSize-s&&T.push(I)}m=T,Math.floor(e.virtualSize-s)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-s)}if(l&&n.loop){const T=v[0]+g;if(n.slidesPerGroup>1){const O=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),I=T*n.slidesPerGroup;for(let F=0;F<O;F+=1)m.push(m[m.length-1]+I)}for(let O=0;O<e.virtual.slidesBefore+e.virtual.slidesAfter;O+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+T),x.push(x[x.length-1]+T),e.virtualSize+=T}if(m.length===0&&(m=[0]),g!==0){const T=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");d.filter((O,I)=>!n.cssMode||n.loop?!0:I!==d.length-1).forEach(O=>{O.style[T]=`${g}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let T=0;v.forEach(I=>{T+=I+(g||0)}),T-=g;const O=T-s;m=m.map(I=>I<=0?-w:I>O?O+b:I)}if(n.centerInsufficientSlides){let T=0;v.forEach(I=>{T+=I+(g||0)}),T-=g;const O=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(T+O<s){const I=(s-T-O)/2;m.forEach((F,_)=>{m[_]=F-I}),x.forEach((F,_)=>{x[_]=F+I})}}if(Object.assign(e,{slides:d,snapGrid:m,slidesGrid:x,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ms(r,"--swiper-centered-offset-before",`${-m[0]}px`),ms(r,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const T=-e.snapGrid[0],O=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(I=>I+T),e.slidesGrid=e.slidesGrid.map(I=>I+O)}if(f!==c&&e.emit("slidesLengthChange"),m.length!==p&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),x.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const T=`${n.containerModifierClass}backface-hidden`,O=e.el.classList.contains(T);f<=n.maxBackfaceHiddenSlides?O||e.el.classList.add(T):O&&e.el.classList.remove(T)}}function Jy(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const a=t.activeIndex+s;if(a>t.slides.length&&!r)break;n.push(o(a))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const a=n[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Zy(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const hp=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function eS(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const c=r[l];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const f=(o+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+a),m=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+a),x=-(o-d),v=x+t.slidesSizesGrid[l],w=x>=0&&x<=t.size-t.slidesSizesGrid[l],b=x>=0&&x<t.size-1||v>1&&v<=t.size||x<=0&&v>=t.size;b&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),hp(c,b,n.slideVisibleClass),hp(c,w,n.slideFullyVisibleClass),c.progress=i?-f:f,c.originalProgress=i?-m:m}}function tS(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(r===0)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;s=d||i<=0,o=f||i>=1,d&&(i=0),f&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[d],x=t.slidesGrid[f],v=t.slidesGrid[t.slidesGrid.length-1],w=Math.abs(e);w>=m?a=(w-m)/v:a=(w+v-x)/v,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const Ra=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function nS(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,a=f=>xt(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let l,c,d;if(s)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${f}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(f=>f.column===i)[0],d=t.filter(f=>f.column===i+1)[0],c=t.filter(f=>f.column===i-1)[0]):l=t[i];l&&(o||(d=Vy(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=By(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{Ra(f,f===l,n.slideActiveClass),Ra(f,f===d,n.slideNextClass),Ra(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const As=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},_a=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},mu=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,a=[o-t];a.push(...Array.from({length:t}).map((l,c)=>o+r+c)),e.slides.forEach((l,c)=>{a.includes(l.column)&&_a(e,c)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=s+t;o+=1){const a=(o%n+n)%n;(a<i||a>s)&&_a(e,a)}else for(let o=Math.max(i-t,0);o<=Math.min(s+t,n-1);o+=1)o!==i&&(o>s||o<i)&&_a(e,o)};function rS(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function iS(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l=e,c;const d=x=>{let v=x-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof l>"u"&&(l=rS(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const x=Math.min(i.slidesPerGroupSkip,l);c=x+Math.floor((l-x)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===s&&!t.params.loop){c!==a&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const f=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled&&i.loop)m=d(l);else if(f){const x=t.slides.filter(w=>w.column===l)[0];let v=parseInt(x.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(x),0)),m=Math.floor(v/i.grid.rows)}else if(t.slides[l]){const x=t.slides[l].getAttribute("data-swiper-slide-index");x?m=parseInt(x,10):m=l}else m=l;Object.assign(t,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:m,previousIndex:s,activeIndex:l}),t.initialized&&mu(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function sS(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let s=!1,o;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){s=!0,o=a;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var oS={updateSize:Xy,updateSlides:qy,updateAutoHeight:Jy,updateSlidesOffset:Zy,updateSlidesProgress:eS,updateProgress:tS,updateSlidesClasses:nS,updateActiveIndex:iS,updateClickedSlide:sS};function aS(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Ay(s,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function lS(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function uS(){return-this.snapGrid[0]}function cS(){return-this.snapGrid[this.snapGrid.length-1]}function dS(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let d;if(r&&e>l?d=l:r&&e<c?d=c:d=e,s.updateProgress(d),o.cssMode){const f=s.isHorizontal();if(t===0)a[f?"scrollLeft":"scrollTop"]=-d;else{if(!s.support.smoothScroll)return Jm({swiper:s,targetPosition:-d,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(m){!s||s.destroyed||m.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var pS={getTranslate:aS,setTranslate:lS,minTranslate:uS,maxTranslate:cS,translateTo:dS};function fS(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function ng(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:s,previousIndex:o}=t;let a=r;if(a||(s>o?a="next":s<o?a="prev":a="reset"),t.emit(`transition${i}`),n&&s!==o){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function hS(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),ng({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function mS(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),ng({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var gS={setTransition:fS,transitionStart:hS,transitionEnd:mS};function vS(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:m,wrapperEl:x,enabled:v}=s;if(!v&&!r&&!i||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=s.params.speed);const w=Math.min(s.params.slidesPerGroupSkip,o);let b=w+Math.floor((o-w)/s.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const p=-l[b];if(a.normalizeSlideIndex)for(let g=0;g<c.length;g+=1){const y=-Math.floor(p*100),C=Math.floor(c[g]*100),j=Math.floor(c[g+1]*100);typeof c[g+1]<"u"?y>=C&&y<j-(j-C)/2?o=g:y>=C&&y<j&&(o=g+1):y>=C&&(o=g)}if(s.initialized&&o!==f&&(!s.allowSlideNext&&(m?p>s.translate&&p>s.minTranslate():p<s.translate&&p<s.minTranslate())||!s.allowSlidePrev&&p>s.translate&&p>s.maxTranslate()&&(f||0)!==o))return!1;o!==(d||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(p);let h;if(o>f?h="next":o<f?h="prev":h="reset",m&&-p===s.translate||!m&&p===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(p),h!=="reset"&&(s.transitionStart(n,h),s.transitionEnd(n,h)),!1;if(a.cssMode){const g=s.isHorizontal(),y=m?p:-p;if(t===0){const C=s.virtual&&s.params.virtual.enabled;C&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),C&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{x[g?"scrollLeft":"scrollTop"]=y})):x[g?"scrollLeft":"scrollTop"]=y,C&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Jm({swiper:s,targetPosition:y,side:g?"left":"top"}),!0;x.scrollTo({[g?"left":"top"]:y,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(p),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,h),t===0?s.transitionEnd(n,h):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(y){!s||s.destroyed||y.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,h))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function xS(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let a;if(s){const m=o*i.params.grid.rows;a=i.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===m)[0].column}else a=i.getSlideIndexByData(o);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let f=l-a<d;if(c&&(f=f||a<Math.ceil(d/2)),r&&c&&i.params.slidesPerView!=="auto"&&!s&&(f=!1),f){const m=c?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-l+1,slideRealIndex:m==="next"?i.realIndex:void 0})}if(s){const m=o*i.params.grid.rows;o=i.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===m)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function wS(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,c=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function yS(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=a?r.translate:-r.translate;function m(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const x=m(f),v=s.map(p=>m(p));let w=s[v.indexOf(x)-1];if(typeof w>"u"&&i.cssMode){let p;s.forEach((h,g)=>{x>=h&&(p=g)}),typeof p<"u"&&(w=s[p>0?p-1:p])}let b=0;if(typeof w<"u"&&(b=o.indexOf(w),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const p=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(p,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function SS(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function bS(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],d=i.snapGrid[a+1];l-c>(d-c)*r&&(s+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],d=i.snapGrid[a];l-c<=(d-c)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function CS(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(xt(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),fu(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(xt(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),fu(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var jS={slideTo:vS,slideToLoop:xS,slideNext:wS,slidePrev:yS,slideReset:SS,slideToClosest:bS,slideToClickedSlide:CS};function kS(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{xt(r,`.${n.slideClass}, swiper-slide`).forEach((f,m)=>{f.setAttribute("data-swiper-slide-index",m)})},s=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),a=t.slides.length%o!==0,l=s&&t.slides.length%n.grid.rows!==0,c=d=>{for(let f=0;f<d;f+=1){const m=t.isElement?So("swiper-slide",[n.slideBlankClass]):So("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(m)}};if(a){if(n.loopAddBlankSlides){const d=o-t.slides.length%o;c(d),t.recalcSlides(),t.updateSlides()}else yo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;c(d),t.recalcSlides(),t.updateSlides()}else yo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function ES(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:a}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:m,params:x}=l,{centeredSlides:v}=x;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&x.virtual.enabled){n&&(!x.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):x.centeredSlides&&l.snapIndex<x.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=f,l.emit("loopFix");return}let w=x.slidesPerView;w==="auto"?w=l.slidesPerViewDynamic():(w=Math.ceil(parseFloat(x.slidesPerView,10)),v&&w%2===0&&(w=w+1));const b=x.slidesPerGroupAuto?w:x.slidesPerGroup;let p=b;p%b!==0&&(p+=b-p%b),p+=x.loopAdditionalSlides,l.loopedSlides=p;const h=l.grid&&x.grid&&x.grid.rows>1;c.length<w+p?yo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&x.grid.fill==="row"&&yo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const g=[],y=[];let C=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter(F=>F.classList.contains(x.slideActiveClass))[0]):C=s;const j=r==="next"||!r,E=r==="prev"||!r;let P=0,$=0;const T=h?Math.ceil(c.length/x.grid.rows):c.length,I=(h?c[s].column:s)+(v&&typeof i>"u"?-w/2+.5:0);if(I<p){P=Math.max(p-I,b);for(let F=0;F<p-I;F+=1){const _=F-Math.floor(F/T)*T;if(h){const A=T-_-1;for(let se=c.length-1;se>=0;se-=1)c[se].column===A&&g.push(se)}else g.push(T-_-1)}}else if(I+w>T-p){$=Math.max(I-(T-p*2),b);for(let F=0;F<$;F+=1){const _=F-Math.floor(F/T)*T;h?c.forEach((A,se)=>{A.column===_&&y.push(se)}):y.push(_)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),E&&g.forEach(F=>{c[F].swiperLoopMoveDOM=!0,m.prepend(c[F]),c[F].swiperLoopMoveDOM=!1}),j&&y.forEach(F=>{c[F].swiperLoopMoveDOM=!0,m.append(c[F]),c[F].swiperLoopMoveDOM=!1}),l.recalcSlides(),x.slidesPerView==="auto"?l.updateSlides():h&&(g.length>0&&E||y.length>0&&j)&&l.slides.forEach((F,_)=>{l.grid.updateSlide(_,F,l.slides)}),x.watchSlidesProgress&&l.updateSlidesOffset(),n){if(g.length>0&&E){if(typeof t>"u"){const F=l.slidesGrid[C],A=l.slidesGrid[C+P]-F;a?l.setTranslate(l.translate-A):(l.slideTo(C+Math.ceil(P),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-A,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-A))}else if(i){const F=h?g.length/x.grid.rows:g.length;l.slideTo(l.activeIndex+F,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(y.length>0&&j)if(typeof t>"u"){const F=l.slidesGrid[C],A=l.slidesGrid[C-$]-F;a?l.setTranslate(l.translate-A):(l.slideTo(C-$,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-A,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-A))}else{const F=h?y.length/x.grid.rows:y.length;l.slideTo(l.activeIndex-F,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){const F={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(_=>{!_.destroyed&&_.params.loop&&_.loopFix({...F,slideTo:_.params.slidesPerView===x.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...F,slideTo:l.controller.control.params.slidesPerView===x.slidesPerView?n:!1})}l.emit("loopFix")}function TS(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var PS={loopCreate:kS,loopFix:ES,loopDestroy:TS};function $S(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function LS(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var zS={setGrabCursor:$S,unsetGrabCursor:LS};function FS(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Mr()||r===Ye())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function mp(e,t,n){const r=Ye(),{params:i}=e,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(n<=o||n>=r.innerWidth-o)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function OS(e){const t=this,n=Mr();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){mp(t,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=t;if(!a||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=r.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(l=d[0]);const f=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(m?FS(f,l):l.closest(f))){t.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const x=o.currentX,v=o.currentY;if(!mp(t,r,x))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=x,o.startY=v,i.touchStartTime=wo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let w=!0;l.matches(i.focusableElements)&&(w=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const b=w&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function IS(e){const t=Mr(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(j=>j.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){s.startX=d,s.startY=f;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f}),r.touchStartTime=wo());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<s.startY&&n.translate<=n.maxTranslate()||f>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=f;const m=s.currentX-s.startX,x=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(m**2+x**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let j;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:m*m+x*x>=25&&(j=Math.atan2(Math.abs(x),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?j>i.touchAngle:90-j>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let v=n.isHorizontal()?m:x,w=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),w=Math.abs(w)*(o?1:-1)),s.diff=v,v*=i.touchRatio,o&&(v=-v,w=-w);const b=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=w>0?"prev":"next";const p=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const j=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(j)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let g;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&p&&h&&Math.abs(v)>=1){Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let y=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),v>0?(p&&h&&!g&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**C))):v<0&&(p&&h&&!g&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**C))),y&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function NS(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(C=>C.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=wo(),m=f-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),m<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=wo(),fu(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let x;if(o.followFinger?x=l?t.translate:-t.translate:x=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:x});return}const v=x>=-t.maxTranslate()&&!t.params.loop;let w=0,b=t.slidesSizesGrid[0];for(let C=0;C<c.length;C+=C<o.slidesPerGroupSkip?1:o.slidesPerGroup){const j=C<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[C+j]<"u"?(v||x>=c[C]&&x<c[C+j])&&(w=C,b=c[C+j]-c[C]):(v||x>=c[C])&&(w=C,b=c[c.length-1]-c[c.length-2])}let p=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const g=(x-c[w])/b,y=w<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(m>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(g>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?p:w+y):t.slideTo(w)),t.swipeDirection==="prev"&&(g>1-o.longSwipesRatio?t.slideTo(w+y):h!==null&&g<0&&Math.abs(g)>o.longSwipesRatio?t.slideTo(h):t.slideTo(w))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(w+y):t.slideTo(w):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:w+y),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:w))}}function gp(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function MS(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function RS(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function _S(e){const t=this;As(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function AS(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const rg=(e,t)=>{const n=Mr(),{params:r,el:i,wrapperEl:s,device:o}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&s[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",gp,!0):e[c]("observerUpdate",gp,!0),i[l]("load",e.onLoad,{capture:!0})};function DS(){const e=this,{params:t}=e;e.onTouchStart=OS.bind(e),e.onTouchMove=IS.bind(e),e.onTouchEnd=NS.bind(e),e.onDocumentTouchStart=AS.bind(e),t.cssMode&&(e.onScroll=RS.bind(e)),e.onClick=MS.bind(e),e.onLoad=_S.bind(e),rg(e,"on")}function BS(){rg(this,"off")}var VS={attachEvents:DS,detachEvents:BS};const vp=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function US(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||e.originalParams,c=vp(e,r),d=vp(e,l),f=e.params.grabCursor,m=l.grabCursor,x=r.enabled;c&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),f&&!m?e.unsetGrabCursor():!f&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(g=>{if(typeof l[g]>"u")return;const y=r[g]&&r[g].enabled,C=l[g]&&l[g].enabled;y&&!C&&e[g].disable(),!y&&C&&e[g].enable()});const v=l.direction&&l.direction!==r.direction,w=r.loop&&(l.slidesPerView!==r.slidesPerView||v),b=r.loop;v&&n&&e.changeDirection(),Be(e.params,l);const p=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),x&&!p?e.disable():!x&&p&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(w?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function WS(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Ye(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var HS={setBreakpoint:US,getBreakpoint:WS};function GS(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function KS(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=GS(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function YS(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var QS={addClasses:KS,removeClasses:YS};function XS(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var qS={checkOverflow:XS},gu={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function JS(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Be(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){Be(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Be(t,r)}}const Aa={eventsEmitter:Qy,update:oS,translate:pS,transition:gS,slide:jS,loop:PS,grabCursor:zS,events:VS,breakpoints:HS,checkOverflow:qS,classes:QS},Da={};let Lc=class jt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Be({},n),t&&!n.el&&(n.el=t);const o=Mr();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const d=[];return o.querySelectorAll(n.el).forEach(f=>{const m=Be({},n,{el:f});d.push(new jt(m))}),d}const a=this;a.__swiper__=!0,a.support=eg(),a.device=tg({userAgent:n.userAgent}),a.browser=Gy(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(d=>{d({params:n,swiper:a,extendParams:JS(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=Be({},gu,l);return a.params=Be({},c,Da,n),a.originalParams=Be({},a.params),a.passedParams=Be({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(d=>{a.on(d,a.params.on[d])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=xt(n,`.${r.slideClass}, swiper-slide`),s=bo(i[0]);return bo(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=xt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=s[c]?Math.ceil(s[c].swiperSlideSize):0,m;for(let x=c+1;x<s.length;x+=1)s[x]&&!m&&(f+=Math.ceil(s[x].swiperSlideSize),d+=1,f>l&&(m=!0));for(let x=c-1;x>=0;x-=1)s[x]&&!m&&(f+=s[x].swiperSlideSize,d+=1,f>l&&(m=!0))}else if(t==="current")for(let f=c+1;f<s.length;f+=1)(n?o[f]+a[f]-o[c]<l:o[f]-o[c]<l)&&(d+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&As(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(o.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):xt(r,i())[0];return!o&&n.params.createElements&&(o=So("div",n.params.wrapperClass),r.append(o),xt(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Xt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Xt(r,"direction")==="rtl"),wrongRTL:Xt(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?As(n,s):s.addEventListener("load",o=>{As(n,o.target)})}),mu(n),n.initialized=!0,mu(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el.swiper=null,Ry(r)),r.destroyed=!0),null}static extendDefaults(t){Be(Da,t)}static get extendedDefaults(){return Da}static get defaults(){return gu}static installModule(t){jt.prototype.__modules__||(jt.prototype.__modules__=[]);const n=jt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>jt.installModule(n)),jt):(jt.installModule(t),jt)}};Object.keys(Aa).forEach(e=>{Object.keys(Aa[e]).forEach(t=>{Lc.prototype[t]=Aa[e][t]})});Lc.use([Ky,Yy]);const ig=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function In(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function xr(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:In(t[r])&&In(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:xr(e[r],t[r]):e[r]=t[r]})}function sg(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function og(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function ag(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function lg(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function ZS(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function e2(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:l}=e;const c=i.filter($=>$!=="children"&&$!=="direction"&&$!=="wrapperClass"),{params:d,pagination:f,navigation:m,scrollbar:x,virtual:v,thumbs:w}=t;let b,p,h,g,y,C,j,E;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(p=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(d.pagination||d.pagination===!1)&&f&&!f.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(d.scrollbar||d.scrollbar===!1)&&x&&!x.el&&(g=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(d.navigation||d.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(y=!0);const P=$=>{t[$]&&(t[$].destroy(),$==="navigation"?(t.isElement&&(t[$].prevEl.remove(),t[$].nextEl.remove()),d[$].prevEl=void 0,d[$].nextEl=void 0,t[$].prevEl=void 0,t[$].nextEl=void 0):(t.isElement&&t[$].el.remove(),d[$].el=void 0,t[$].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?C=!0:!d.loop&&r.loop?j=!0:E=!0),c.forEach($=>{if(In(d[$])&&In(r[$]))Object.assign(d[$],r[$]),($==="navigation"||$==="pagination"||$==="scrollbar")&&"enabled"in r[$]&&!r[$].enabled&&P($);else{const T=r[$];(T===!0||T===!1)&&($==="navigation"||$==="pagination"||$==="scrollbar")?T===!1&&P($):d[$]=r[$]}}),c.includes("controller")&&!p&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&v&&d.virtual.enabled?(v.slides=n,v.update(!0)):i.includes("virtual")&&v&&d.virtual.enabled&&(n&&(v.slides=n),v.update(!0)),i.includes("children")&&n&&d.loop&&(E=!0),b&&w.init()&&w.update(!0),p&&(t.controller.control=d.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(d.pagination.el=l),f.init(),f.render(),f.update()),g&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),t.el.appendChild(a)),a&&(d.scrollbar.el=a),x.init(),x.updateSize(),x.setTranslate()),y&&(t.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=t.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),t.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),s&&(d.navigation.nextEl=s),o&&(d.navigation.prevEl=o),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(C||E)&&t.loopDestroy(),(j||E)&&t.loopCreate(),t.update()}function t2(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};xr(n,gu),n._emitClasses=!0,n.init=!1;const s={},o=ig.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?In(e[l])?(n[l]={},i[l]={},xr(n[l],e[l]),xr(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:s[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function n2(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:a}=e;sg(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),og(t)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),ag(t)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function r2(e,t,n,r,i){const s=[];if(!t)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),c=n.map(i);l.join("")!==c.join("")&&o("children"),r.length!==n.length&&o("children")}return ig.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(In(e[l])&&In(t[l])){const c=Object.keys(e[l]),d=Object.keys(t[l]);c.length!==d.length?o(l):(c.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}),d.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}))}else e[l]!==t[l]&&o(l)}),s}const i2=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Co(){return Co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Co.apply(this,arguments)}function ug(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function cg(e){const t=[];return Q.Children.toArray(e).forEach(n=>{ug(n)?t.push(n):n.props&&n.props.children&&cg(n.props.children).forEach(r=>t.push(r))}),t}function s2(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(ug(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=cg(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function o2(e,t,n){if(!n)return null;const r=d=>{let f=d;return d<0?f=t.length+d:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,c=[];for(let d=a;d<l;d+=1)d>=s&&d<=o&&c.push(t[r(d)]);return c.map((d,f)=>Q.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${f}`}))}function fi(e,t){return typeof window>"u"?k.useEffect(e,t):k.useLayoutEffect(e,t)}const xp=k.createContext(null),a2=k.createContext(null),Hi=k.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...a}=e===void 0?{}:e,l=!1;const[c,d]=k.useState("swiper"),[f,m]=k.useState(null),[x,v]=k.useState(!1),w=k.useRef(!1),b=k.useRef(null),p=k.useRef(null),h=k.useRef(null),g=k.useRef(null),y=k.useRef(null),C=k.useRef(null),j=k.useRef(null),E=k.useRef(null),{params:P,passedParams:$,rest:T,events:O}=t2(a),{slides:I,slots:F}=s2(s),_=()=>{v(!x)};Object.assign(P.on,{_containerClasses(N,R){d(R)}});const A=()=>{Object.assign(P.on,O),l=!0;const N={...P};if(delete N.wrapperClass,p.current=new Lc(N),p.current.virtual&&p.current.params.virtual.enabled){p.current.virtual.slides=I;const R={cache:!1,slides:I,renderExternal:m,renderExternalUpdate:!1};xr(p.current.params.virtual,R),xr(p.current.originalParams.virtual,R)}};b.current||A(),p.current&&p.current.on("_beforeBreakpoint",_);const se=()=>{l||!O||!p.current||Object.keys(O).forEach(N=>{p.current.on(N,O[N])})},Le=()=>{!O||!p.current||Object.keys(O).forEach(N=>{p.current.off(N,O[N])})};k.useEffect(()=>()=>{p.current&&p.current.off("_beforeBreakpoint",_)}),k.useEffect(()=>{!w.current&&p.current&&(p.current.emitSlidesClasses(),w.current=!0)}),fi(()=>{if(t&&(t.current=b.current),!!b.current)return p.current.destroyed&&A(),n2({el:b.current,nextEl:y.current,prevEl:C.current,paginationEl:j.current,scrollbarEl:E.current,swiper:p.current},P),o&&!p.current.destroyed&&o(p.current),()=>{p.current&&!p.current.destroyed&&p.current.destroy(!0,!1)}},[]),fi(()=>{se();const N=r2($,h.current,I,g.current,R=>R.key);return h.current=$,g.current=I,N.length&&p.current&&!p.current.destroyed&&e2({swiper:p.current,slides:I,passedParams:$,changedParams:N,nextEl:y.current,prevEl:C.current,scrollbarEl:E.current,paginationEl:j.current}),()=>{Le()}}),fi(()=>{i2(p.current)},[f]);function z(){return P.virtual?o2(p.current,I,f):I.map((N,R)=>Q.cloneElement(N,{swiper:p.current,swiperSlideIndex:R}))}return Q.createElement(r,Co({ref:b,className:lg(`${c}${n?` ${n}`:""}`)},T),Q.createElement(a2.Provider,{value:p.current},F["container-start"],Q.createElement(i,{className:ZS(P.wrapperClass)},F["wrapper-start"],z(),F["wrapper-end"]),sg(P)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:C,className:"swiper-button-prev"}),Q.createElement("div",{ref:y,className:"swiper-button-next"})),ag(P)&&Q.createElement("div",{ref:E,className:"swiper-scrollbar"}),og(P)&&Q.createElement("div",{ref:j,className:"swiper-pagination"}),F["container-end"]))});Hi.displayName="Swiper";const mt=k.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:c,...d}=e===void 0?{}:e;const f=k.useRef(null),[m,x]=k.useState("swiper-slide"),[v,w]=k.useState(!1);function b(y,C,j){C===f.current&&x(j)}fi(()=>{if(typeof c<"u"&&(f.current.swiperSlideIndex=c),t&&(t.current=f.current),!(!f.current||!s)){if(s.destroyed){m!=="swiper-slide"&&x("swiper-slide");return}return s.on("_slideClass",b),()=>{s&&s.off("_slideClass",b)}}}),fi(()=>{s&&f.current&&!s.destroyed&&x(s.getSlideClasses(f.current))},[s]);const p={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(p):r,g=()=>{w(!0)};return Q.createElement(n,Co({ref:f,className:lg(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:g},d),o&&Q.createElement(xp.Provider,{value:p},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),a&&!v&&Q.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&Q.createElement(xp.Provider,{value:p},h(),a&&!v&&Q.createElement("div",{className:"swiper-lazy-preloader"})))});mt.displayName="SwiperSlide";function dg(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=xt(e.el,`.${r[i]}`)[0];s||(s=So("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function l2(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function s(v){let w;return v&&typeof v=="string"&&t.isElement&&(w=t.el.querySelector(v),w)?w:(v&&(typeof v=="string"&&(w=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&w&&w.length>1&&t.el.querySelectorAll(v).length===1?w=t.el.querySelector(v):w&&w.length===1&&(w=w[0])),v&&!w?v:w)}function o(v,w){const b=t.params.navigation;v=pe(v),v.forEach(p=>{p&&(p.classList[w?"add":"remove"](...b.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=w),t.params.watchOverflow&&t.enabled&&p.classList[t.isLocked?"add":"remove"](b.lockClass))})}function a(){const{nextEl:v,prevEl:w}=t.navigation;if(t.params.loop){o(w,!1),o(v,!1);return}o(w,t.isBeginning&&!t.params.rewind),o(v,t.isEnd&&!t.params.rewind)}function l(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const v=t.params.navigation;if(t.params.navigation=dg(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let w=s(v.nextEl),b=s(v.prevEl);Object.assign(t.navigation,{nextEl:w,prevEl:b}),w=pe(w),b=pe(b);const p=(h,g)=>{h&&h.addEventListener("click",g==="next"?c:l),!t.enabled&&h&&h.classList.add(...v.lockClass.split(" "))};w.forEach(h=>p(h,"next")),b.forEach(h=>p(h,"prev"))}function f(){let{nextEl:v,prevEl:w}=t.navigation;v=pe(v),w=pe(w);const b=(p,h)=>{p.removeEventListener("click",h==="next"?c:l),p.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(p=>b(p,"next")),w.forEach(p=>b(p,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?x():(d(),a())}),r("toEdge fromEdge lock unlock",()=>{a()}),r("destroy",()=>{f()}),r("enable disable",()=>{let{nextEl:v,prevEl:w}=t.navigation;if(v=pe(v),w=pe(w),t.enabled){a();return}[...v,...w].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(v,w)=>{let{nextEl:b,prevEl:p}=t.navigation;b=pe(b),p=pe(p);const h=w.target;if(t.params.navigation.hideOnClick&&!p.includes(h)&&!b.includes(h)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let g;b.length?g=b[0].classList.contains(t.params.navigation.hiddenClass):p.length&&(g=p[0].classList.contains(t.params.navigation.hiddenClass)),i(g===!0?"navigationShow":"navigationHide"),[...b,...p].filter(y=>!!y).forEach(y=>y.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),a()},x=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(t.navigation,{enable:m,disable:x,update:a,init:d,destroy:f})}function Gr(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function u2(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let o,a=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(p,h){const{bulletActiveClass:g}=t.params.pagination;p&&(p=p[`${h==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${g}-${h}`),p=p[`${h==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${g}-${h}-${h}`)))}function d(p){const h=p.target.closest(Gr(t.params.pagination.bulletClass));if(!h)return;p.preventDefault();const g=bo(h)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===g)return;t.slideToLoop(g)}else t.slideTo(g)}function f(){const p=t.rtl,h=t.params.pagination;if(l())return;let g=t.pagination.el;g=pe(g);let y,C;const j=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,E=t.params.loop?Math.ceil(j/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,y=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(y=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,y=t.activeIndex||0),h.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const P=t.pagination.bullets;let $,T,O;if(h.dynamicBullets&&(o=hu(P[0],t.isHorizontal()?"width":"height"),g.forEach(I=>{I.style[t.isHorizontal()?"width":"height"]=`${o*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&C!==void 0&&(a+=y-(C||0),a>h.dynamicMainBullets-1?a=h.dynamicMainBullets-1:a<0&&(a=0)),$=Math.max(y-a,0),T=$+(Math.min(P.length,h.dynamicMainBullets)-1),O=(T+$)/2),P.forEach(I=>{const F=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(_=>`${h.bulletActiveClass}${_}`)].map(_=>typeof _=="string"&&_.includes(" ")?_.split(" "):_).flat();I.classList.remove(...F)}),g.length>1)P.forEach(I=>{const F=bo(I);F===y?I.classList.add(...h.bulletActiveClass.split(" ")):t.isElement&&I.setAttribute("part","bullet"),h.dynamicBullets&&(F>=$&&F<=T&&I.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),F===$&&c(I,"prev"),F===T&&c(I,"next"))});else{const I=P[y];if(I&&I.classList.add(...h.bulletActiveClass.split(" ")),t.isElement&&P.forEach((F,_)=>{F.setAttribute("part",_===y?"bullet-active":"bullet")}),h.dynamicBullets){const F=P[$],_=P[T];for(let A=$;A<=T;A+=1)P[A]&&P[A].classList.add(...`${h.bulletActiveClass}-main`.split(" "));c(F,"prev"),c(_,"next")}}if(h.dynamicBullets){const I=Math.min(P.length,h.dynamicMainBullets+4),F=(o*I-o)/2-O*o,_=p?"right":"left";P.forEach(A=>{A.style[t.isHorizontal()?_:"top"]=`${F}px`})}}g.forEach((P,$)=>{if(h.type==="fraction"&&(P.querySelectorAll(Gr(h.currentClass)).forEach(T=>{T.textContent=h.formatFractionCurrent(y+1)}),P.querySelectorAll(Gr(h.totalClass)).forEach(T=>{T.textContent=h.formatFractionTotal(E)})),h.type==="progressbar"){let T;h.progressbarOpposite?T=t.isHorizontal()?"vertical":"horizontal":T=t.isHorizontal()?"horizontal":"vertical";const O=(y+1)/E;let I=1,F=1;T==="horizontal"?I=O:F=O,P.querySelectorAll(Gr(h.progressbarFillClass)).forEach(_=>{_.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${F})`,_.style.transitionDuration=`${t.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(P.innerHTML=h.renderCustom(t,y+1,E),$===0&&i("paginationRender",P)):($===0&&i("paginationRender",P),i("paginationUpdate",P)),t.params.watchOverflow&&t.enabled&&P.classList[t.isLocked?"add":"remove"](h.lockClass)})}function m(){const p=t.params.pagination;if(l())return;const h=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let g=t.pagination.el;g=pe(g);let y="";if(p.type==="bullets"){let C=t.params.loop?Math.ceil(h/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>h&&(C=h);for(let j=0;j<C;j+=1)p.renderBullet?y+=p.renderBullet.call(t,j,p.bulletClass):y+=`<${p.bulletElement} ${t.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?y=p.renderFraction.call(t,p.currentClass,p.totalClass):y=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?y=p.renderProgressbar.call(t,p.progressbarFillClass):y=`<span class="${p.progressbarFillClass}"></span>`),t.pagination.bullets=[],g.forEach(C=>{p.type!=="custom"&&(C.innerHTML=y||""),p.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(Gr(p.bulletClass)))}),p.type!=="custom"&&i("paginationRender",g[0])}function x(){t.params.pagination=dg(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const p=t.params.pagination;if(!p.el)return;let h;typeof p.el=="string"&&t.isElement&&(h=t.el.querySelector(p.el)),!h&&typeof p.el=="string"&&(h=[...document.querySelectorAll(p.el)]),h||(h=p.el),!(!h||h.length===0)&&(t.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...t.el.querySelectorAll(p.el)],h.length>1&&(h=h.filter(g=>Zm(g,".swiper")[0]===t.el)[0])),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(t.pagination,{el:h}),h=pe(h),h.forEach(g=>{p.type==="bullets"&&p.clickable&&g.classList.add(...(p.clickableClass||"").split(" ")),g.classList.add(p.modifierClass+p.type),g.classList.add(t.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(g.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&g.classList.add(p.progressbarOppositeClass),p.clickable&&g.addEventListener("click",d),t.enabled||g.classList.add(p.lockClass)}))}function v(){const p=t.params.pagination;if(l())return;let h=t.pagination.el;h&&(h=pe(h),h.forEach(g=>{g.classList.remove(p.hiddenClass),g.classList.remove(p.modifierClass+p.type),g.classList.remove(t.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(g.classList.remove(...(p.clickableClass||"").split(" ")),g.removeEventListener("click",d))})),t.pagination.bullets&&t.pagination.bullets.forEach(g=>g.classList.remove(...p.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const p=t.params.pagination;let{el:h}=t.pagination;h=pe(h),h.forEach(g=>{g.classList.remove(p.horizontalClass,p.verticalClass),g.classList.add(t.isHorizontal()?p.horizontalClass:p.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?b():(x(),m(),f())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&f()}),r("snapIndexChange",()=>{f()}),r("snapGridLengthChange",()=>{m(),f()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:p}=t.pagination;p&&(p=pe(p),p.forEach(h=>h.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{f()}),r("click",(p,h)=>{const g=h.target,y=pe(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&y&&y.length>0&&!g.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&g===t.navigation.nextEl||t.navigation.prevEl&&g===t.navigation.prevEl))return;const C=y[0].classList.contains(t.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),y.forEach(j=>j.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:p}=t.pagination;p&&(p=pe(p),p.forEach(h=>h.classList.remove(t.params.pagination.paginationDisabledClass))),x(),m(),f()},b=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:p}=t.pagination;p&&(p=pe(p),p.forEach(h=>h.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:w,disable:b,render:m,update:f,init:x,destroy:v})}const c2=S.div`
  overflow: hidden;
  width: 85vw;
  height: auto;


  @media (max-width: 768px) {
    display: none;
  }
`,d2=S.div`
  margin: 62px 0;
  padding-bottom: 130px;
  width: 2000px;
  height: auto;
  position: relative;

  @media(max-width: 1400px){
    width: 1600px;
  }
  

`,Vn=S.div`
  position: relative;
  width: 620px;
  height: auto;
  margin-bottom: 1rem;

  @media (max-width: 1400px) {
    width: 500px;
  }

`,Un=S.img`
  width: 100%;
`,Wn=S.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  text-align: center;

  & > h2 {
    font-size: clamp(1.6875rem, 1.0273rem + 2.1127vw, 3.5625rem);

    & > span {
      font-family: "Fixel Bold", serif;
      font-size: clamp(1.6875rem, 1.0273rem + 2.1127vw, 3.5625rem);
    }
  }

  & > p {
    margin-top: 30px;
    font-size: clamp(0.875rem, 0.5669rem + 0.9859vw, 1.75rem);

    & > span {
      color: #1344F0;
    }
  }
`,Hn=S.img`
  position: absolute;
  bottom: 0;
  right: -25px;
  transition: 0.3s;

  &:hover{
    transform: scale(1.2);
  }
`,p2=S.div`
  position: absolute;
  bottom: 20px;
  left: 120px;
  cursor: pointer;
  width: 100px;
  height: 100px;
  transition: 0.3s;
  background: url("/digital/home/arrow-left-navigation-between-slides.svg") no-repeat;

  &:hover {
    background: url("/digital/home/arrow-left-navigation-between-slides-active.svg") no-repeat;
  }
`,f2=S.div`
  position: absolute;
  bottom: 30px;
  left: 10px;
  transform: rotate(180deg);
  cursor: pointer;
  width: 100px;
  height: 100px;
  transition: 0.3s;
  background: url("/digital/home/arrow-left-navigation-between-slides.svg") no-repeat;

  &:hover {
    background: url("/digital/home/arrow-left-navigation-between-slides-active.svg") no-repeat;
  }
`,h2=()=>u.jsx(c2,{children:u.jsxs(d2,{children:[u.jsxs(Hi,{modules:[l2],spaceBetween:50,slidesPerView:3,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},children:[u.jsx(mt,{children:u.jsxs(Vn,{children:[u.jsx(Un,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Wn,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Hn,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]})}),u.jsx(mt,{children:u.jsxs(Vn,{children:[u.jsx(Un,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Wn,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Hn,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]})}),u.jsx(mt,{children:u.jsxs(Vn,{children:[u.jsx(Un,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Wn,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Hn,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]})}),u.jsx(mt,{children:u.jsxs(Vn,{children:[u.jsx(Un,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Wn,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Hn,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]})}),u.jsx(mt,{children:u.jsxs(Vn,{children:[u.jsx(Un,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Wn,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Hn,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]})}),u.jsx(mt,{children:u.jsxs(Vn,{children:[u.jsx(Un,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Wn,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Hn,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]})})]}),u.jsx(f2,{onClick:()=>console.log("dsadf"),className:"swiper-button-prev"}),u.jsx(p2,{className:"swiper-button-next"})]})}),m2=S.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100vw;
  height: 850px;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    height: 0;
  }
`,g2=S.div`
  width: 90%;
  height: auto;
  
`,Ba=S.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;

`,Va=S.img`
  width: 100%;
`,Ua=S.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  text-align: center;

  & > h2 {
    font-size: clamp(1.6875rem, 1.0273rem + 2.1127vw, 3.5625rem);

    & > span {
      font-family: "Fixel Bold", serif;
      font-size: clamp(1.6875rem, 1.0273rem + 2.1127vw, 3.5625rem);
    }
  }

  & > p {
    margin-top: 30px;
    font-size: clamp(0.875rem, -0.7575rem + 5.2239vw, 1.75rem);

    & > span {
      color: #1344F0;
    }
  }
`,Wa=S.img`
  position: absolute;
  bottom: 0;
  right: 0;
  transition: 0.3s;
  width: 50px;
    
  &:hover{
    transform: scale(1.2);
  }
`,v2=()=>u.jsx(m2,{children:u.jsxs(g2,{children:[u.jsxs(Ba,{children:[u.jsx(Va,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Ua,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.1.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Wa,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]}),u.jsxs(Ba,{children:[u.jsx(Va,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Ua,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.2.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Wa,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]}),u.jsxs(Ba,{children:[u.jsx(Va,{src:"/digital/home/border-slider.svg",alt:"bg-image"}),u.jsxs(Ua,{children:[u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.h2",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.p1",components:{1:u.jsx("span",{})}})}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.home.servicesSlider.3.p2",components:{1:u.jsx("span",{})}})})]}),u.jsx(Wa,{src:"/digital/home/arrow-navigation-to-page.svg",alt:"arrow-icon"})]})]})}),x2=S.div`
  margin-top: 480px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px){
    margin-top: 200px;
  }
`,w2=S.div`
  width: 100vw;
  position: relative;
  height: 250px;
  margin: 0 auto 80px;

  & > h2 {
    text-align: center;
    font-size: clamp(2.625rem, 0.7984rem + 5.8451vw, 7.8125rem);
    font-family: "Fixel Bold", serif;
    color: #1344F0;

    & > span {
      color: #4DDEC4;
      font-size: clamp(2.625rem, 0.7984rem + 5.8451vw, 7.8125rem);
      font-family: "Fixel Bold", serif;
    }
  }
  
  @media(max-width: 768px){
    margin: 0 auto 40px;
    height: 220px;
    display: flex;
    justify-content: center;

    & > h2 {
      width: 50vw;
      
    }
  }

  @media(max-width: 500px) {
    & > h2 {
      width: 80vw;
    }
  }

`,y2=S.img`
  position: absolute;
  bottom: 0;
  left: 10vw;

  @media(max-width: 768px) {
  width: 40px;
  }
`,S2=S.img`
  position: absolute;
  bottom: 0;
  right: 10vw;

  @media (max-width: 768px) {
    width: 40px;
  }
`,b2=()=>u.jsxs(x2,{children:[u.jsxs(w2,{children:[u.jsx(y2,{src:"/digital/home/arrow-down.svg",alt:"arrow-icon"}),u.jsx("h2",{children:u.jsx(B,{i18nKey:"main.home.services",components:{1:u.jsx("span",{})}})}),u.jsx(S2,{src:"/digital/home/arrow-down.svg",alt:"arrow-icon"})]}),window.innerWidth<=768?u.jsx(v2,{}):u.jsx(h2,{})]}),pg=dt`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`,C2=S.div`
  width: 100vw;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`,j2=S.div`
  display: inline-block;
  animation: ${pg} 20s linear infinite;
  font-size: clamp(1.375rem, 0.9789rem + 1.2676vw, 2.5rem);
  font-family: "Fixel Bold", serif;
  color: #1344F0;
`,k2=S.div`
  display: inline-block;
  animation: ${pg} 20s linear infinite;
  animation-delay: 1s;
  font-size: clamp(1.375rem, 0.9789rem + 1.2676vw, 2.5rem);
  font-family: "Fixel Bold", serif;
  color: #1344F0;
`,E2=()=>{const{t:e}=ge();return u.jsxs(C2,{id:"scroll-container",children:[u.jsx(j2,{children:e("main.home.scrollingText")}),u.jsx(k2,{children:e("main.home.scrollingText")})]})},T2=S.div`
  margin-top: 450px;

  @media(max-width: 768px) {
    margin-top: 150px;
    margin-bottom: 180px;
  }
`,P2=S.div`
  position: relative;
  text-align: center;

  & > p {
    font-family: "Fixel Bold", serif;
    font-size: 42px;
    color: #1344F0;
  }
  
`,$2=S.h2`
  color: #1344F0;
  font-size: clamp(2.5rem, 0.0852rem + 6.4394vw, 7.8125rem);
  font-family: "Fixel Bold", serif;

  & > span {
    color: #4DDEC4;
    font-size: clamp(2.5rem, 0.0852rem + 6.4394vw, 7.8125rem);
    font-family: "Fixel Bold", serif;
  }
`,L2=S.img`
  position: absolute;
  left: 46%;
  top: -380px;
  width: 100px;
  
  @media(max-width: 768px){
    width: 75px;
    top: 180px;
    
  }
`,z2=()=>u.jsxs(T2,{children:[u.jsxs(P2,{children:[u.jsx(L2,{src:"/digital/home/line.svg",alt:"line-icon"}),u.jsx($2,{children:u.jsx(B,{i18nKey:"main.home.slogan",components:{1:u.jsx("span",{})}})})]}),u.jsx(E2,{})]}),F2=S.div`
  margin: 350px auto 0;
  width: 90vw;
  height: auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`,O2=S.h2`
  color: #1344F0;
  font-size: clamp(4.0625rem, 3.1971rem + 3.8462vw, 7.8125rem);
  font-family: "Fixel Bold", serif;

  & > span {
    color: #4DDEC4;
    font-size: 125px;
    font-family: "Fixel Bold", serif;
  }
`,I2=S.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 45vw 45vw;

  & img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`,N2=S.img`
  grid-row: span 2;

  @media (max-width: 768px) {
    order: 3;
  }
`,fg=S.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    order: 1;
  }
`,hg=S.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    order: 2;
  }
`,wp=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(19, 68, 240, 0.82);
  opacity: 0;
  z-index: 10;
  transition: opacity 0.6s;


  ${fg}:hover &,
  ${hg}:hover & {
    opacity: 1;
  }

  & > button {
    border-radius: 50%;
    border: none;
    width: 200px;
    height: 200px;
    background: #18194F;
    font-family: "Fixel SemiBold", serif;
    font-size: 28px;
    color: #F2F6FF;
    cursor: pointer;


  }
`,M2=()=>{const{t:e}=ge(),t=_n();return u.jsxs(u.Fragment,{children:[u.jsxs(F2,{children:[u.jsx(O2,{children:e("main.home.partners.title")}),u.jsxs(I2,{children:[u.jsx(N2,{src:"/digital/home/partners-big-image.svg",alt:"poster"}),u.jsxs(fg,{children:[u.jsx(wp,{children:u.jsx("button",{onClick:()=>t("/digital/partners"),children:e("main.home.partners.button")})}),u.jsx("img",{src:"/digital/home/tedo-group.svg",alt:"tedo-group image"})]}),u.jsxs(hg,{children:[u.jsx(wp,{children:u.jsx("button",{onClick:()=>t("/digital/partners"),children:e("main.home.partners.button")})}),u.jsx("img",{src:"/digital/home/tedo-generation.svg",alt:"tedo-generation image"})]})]})]}),u.jsx(z2,{})]})},R2=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`,_2=()=>u.jsxs(R2,{children:[u.jsx(xy,{}),u.jsx($y,{}),u.jsx(Iy,{}),u.jsx(b2,{}),u.jsx(M2,{})]}),A2=S.div`
  margin: 130px auto 0;
  display: flex;
  gap: 1rem;
  width: 90vw;
  height: auto;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (max-width: 768px) {
    width: 90vw;
    margin-top: -20px;
  }

 
`,Ha=S.div`
  border: 2px solid #1344F0;
  border-radius: 28px;

  font-size: clamp(1.25rem, 0.9038rem + 1.5385vw, 2.75rem);
  font-family: "Fixel SemiBold", serif;
  color: #F2F6FF;
  background-color: #F2F6FF;
  text-shadow: -1px -1px 0 #1344F0, 1px -1px 0 #1344F0, -1px 1px 0 #1344F0, 1px 1px 0 #1344F0;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 62vw;
  height: 90px;
  
  transition: 0.3s;

  & span {
    font-family: "Fixel Bold", serif;
    padding-right: 20px;
    font-size: clamp(1.625rem, 1.2212rem + 1.7949vw, 3.375rem);
    text-shadow: -1px -1px 0 #1344F0, 1px -1px 0 #1344F0, -1px 1px 0 #1344F0, 1px 1px 0 #1344F0;
    color: #F2F6FF;
  }


  @media (max-width: 1300px) {
    & span {
      padding-right: 10px;
    }
  }

  @media (max-width: 768px) {
    height: 68px;
    min-width: 40vw;
    border-radius: 12px;
  }

  @media (max-width: 500px) {
    height: 68px;
    min-width: 58vw;
  }
  

  ${e=>e.active==="true"&&U`
    text-shadow: none;
    color: #F2F6FF;
    background: #1344F0;
  `}
`,D2=()=>{const{id:e}=Lv(),t=_n();return u.jsxs(A2,{children:[u.jsx(Ha,{onClick:()=>t("/digital/services/ui-ux"),active:e==="ui-ux"?"true":null,children:u.jsx(B,{i18nKey:"main.service.specialization.ui-ux",components:{1:u.jsx("span",{})}})}),u.jsx(Ha,{onClick:()=>t("/digital/services/graphic"),active:e==="graphic"?"true":null,children:u.jsx(B,{i18nKey:"main.service.specialization.graphic",components:{1:u.jsx("span",{})}})}),u.jsx(Ha,{onClick:()=>t("/digital/services/2d"),active:e==="2d"?"true":null,children:u.jsx(B,{i18nKey:"main.service.specialization.2d",components:{1:u.jsx("span",{})}})})]})},B2=S.div`
  margin: 200px auto 0;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 450px;
    margin: 80px auto 0;
    gap: 50px;

  }

  @media (max-width: 500px) {
    width: 85vw;
  }
`,Ga=S.div`
  width: 100%;
  display: flex;

  & > p {
    font-size: clamp(1rem, 0.726rem + 1.2179vw, 2.1875rem);
  }

  & span {
    font-family: "Fixel Bold", serif;
    color: #18194F;
    font-size: clamp(1.375rem, 1.0433rem + 1.4744vw, 2.8125rem);
  }
`,Ka=S.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
  margin-top: 10px;
`,V2=()=>u.jsxs(B2,{children:[u.jsxs(Ga,{children:[u.jsx(Ka,{src:"/digital/services/list.svg",alt:"icon"}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.service.text.1",components:{1:u.jsx("span",{})}})})]}),u.jsxs(Ga,{children:[u.jsx(Ka,{src:"/digital/services/list.svg",alt:"icon"}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.service.text.2",components:{1:u.jsx("span",{})}})})]}),u.jsxs(Ga,{children:[u.jsx(Ka,{src:"/digital/services/list.svg",alt:"icon"}),u.jsx("p",{children:u.jsx(B,{i18nKey:"main.service.text.3",components:{1:u.jsx("span",{})}})})]})]}),U2=S.div`
  margin: 250px auto 0;
  width: 95vw;

`,W2=S.div`
  font-family: "Fixel Bold", serif;
  font-size: clamp(2.625rem, 1.4279rem + 5.3205vw, 7.8125rem);
  text-align: center;
  color: #1344F0;

  @media (max-width: 768px) {
    margin-top: -150px;
  }
`,H2=S.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 38vw;


  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 280vw;
  }
`,G2=S.div`
  width: 40%;
  height: auto;
  background: url("/digital/services/professional.png") no-repeat;
  background-size: contain;
  transition: 0.6s;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;

  }

  &:hover {
    background: url("/digital/services/professional-active.png") no-repeat;
    background-size: contain;
  }
`,K2=S.div`
  width: 25%;
  background: url("/digital/services/advanced.png") no-repeat;
  background-size: contain;
  transition: 0.6s;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;

  }

  &:hover {
    background: url("/digital/services/advanced-active.png") no-repeat;
    background-size: contain;
  }
`,Y2=S.div`
  width: 25%;
  background: url("/digital/services/basic.png") no-repeat;
  background-size: contain;
  transition: 0.6s;


  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  &:hover {
    background: url("/digital/services/basic-active.png") no-repeat;
    background-size: contain;
  }
`,Q2=()=>{const{t:e}=ge();return u.jsxs(U2,{children:[u.jsx(W2,{children:e("main.service.budget")}),u.jsxs(H2,{children:[u.jsx(G2,{}),u.jsx(K2,{}),u.jsx(Y2,{})]})]})},X2=S.div`
  margin-top: 150px;
  width: 100vw;
  overflow: hidden;
  position: relative;

  & > img {
    width: 120vw;
    margin-left: -40px;
  }

  & > h2 {
    position: absolute;
    top: 55%;
    right: 0;
    transform: translate(0, -50%);
    font-size: clamp(1.875rem, -0.2857rem + 3.5714vw, 4rem);
    color: #F2F6FF;
    font-family: "Fixel Bold", serif;
    width: 55vw;

  }

  @media (max-width: 1400px) {
    & > h2 {
      width: 65vw;
    }
  }

  @media (max-width: 768px) {
    margin: 100px auto 0;

    & > img {
      width: 120vw;
    }

    & > h2 {
      width: 85vw;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      line-height: 1.6;
      letter-spacing: 1px;
    }
  }
`,q2=()=>{const{t:e}=ge();return u.jsxs(X2,{children:[u.jsx("img",{src:window.innerWidth<=768?"/digital/services/bg.svg":"/digital/services/projector.svg",alt:"projector-img"}),u.jsx("h2",{children:e("main.service.projector")})]})},J2=S.div`
  overflow: hidden;
  margin: 200px auto 0;
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 95vw;
  }

`,Z2=S.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 200vw;
    height: 100%;
  }
`,gs=S(mt)`
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    transition: opacity 0.6s;
  }

  &:before {
    background-image: url("/digital/services/designer.svg");
    opacity: 1;
  }

  &:after {
    background-image: url("/digital/services/designer-active.svg");
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 450px;
  }
`,eb=S.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .swiper-pagination-bullet {
    background-color: #1344F0;
    width: 28px;
    height: 28px;
    margin: 0 10px;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    background-color: #18194F;
  }
`,tb=()=>u.jsx(J2,{children:u.jsxs(Z2,{children:[u.jsxs(Hi,{modules:[u2],spaceBetween:30,slidesPerView:3,loop:!0,pagination:{el:".custom-pagination",clickable:!0,renderBullet:(e,t)=>`<span class="${t}"></span>`},breakpoints:{769:{spaceBetween:50,pagination:!1}},children:[u.jsx(gs,{}),u.jsx(gs,{}),u.jsx(gs,{}),u.jsx(gs,{})]}),u.jsx(eb,{className:"custom-pagination"})]})}),nb=S.div`
  display: flex;
  flex-direction: column;

`,rb=()=>u.jsxs(nb,{children:[u.jsx(D2,{}),u.jsx(V2,{}),u.jsx(Q2,{}),u.jsx(q2,{}),u.jsx(tb,{})]}),ib=S.div`
  width: 100%;
  position: relative;
  height: 1500px;


  @media (max-width: 768px) {
    height: 1000px;
    overflow: hidden;
    margin-top: -130px;
  }


`,sb=S.img`
  position: absolute;
  z-index: 2;
  width: 60%;
  top: -5%;

  @media (max-width: 768px) {
    top: -25%;
    width: 80%;
  }

  @media (max-width: 768px) {
    top: -200px;
    left: -100px;
    width: 500px;
  }
`,ob=S.img`
  position: absolute;
  z-index: -1;
  width: 120%;
  top: 2%;

  @media (max-width: 768px) {
    top: -50px;
    width: 800px;
  }


`,ab=S.img`
  position: absolute;
  z-index: 1;
  top: 32vw;
  width: 80%;

  @media (max-width: 768px) {
    top: 20%;
    left: -100px;
  }


`,lb=S.h2`
  font-size: clamp(5rem, 0.5rem + 9.375vw, 11.75rem);
  color: #F2F6FF;
  font-family: "Fixel Bold", serif;
  text-align: center;
  position: absolute;
  z-index: 15;
  top: 15vw;
  width: 70%;


  @media (max-width: 768px) {
    font-size: clamp(5.75rem, 4.2059rem + 6.8627vw, 7.5rem);
    width: 50%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

  }

  @media (max-width: 430px) {
    left: 50%;
    width: 80%;
  }
`,ub=S.img`
  position: absolute;
  top: 40vw;
  width: 100%;
  z-index: 4;


  @media (max-width: 768px) {
    display: none;
  }
`,cb=()=>{const{t:e}=ge();return u.jsxs(ib,{children:[u.jsx(sb,{src:"/digital/contact/green.svg",alt:"green-img"}),u.jsx(ob,{src:"/digital/contact/blue.svg",alt:"blue-img"}),u.jsx(ab,{src:"/digital/contact/blue.svg",alt:"blue-img"}),u.jsx(lb,{children:e("main.contact.hand")}),u.jsx(ub,{src:"/digital/contact/hand.svg",alt:"hand-img"})]})},db=S.div`
  margin-top: 10px;
  display: flex;
  gap: 1rem;
  width: 98%;
  height: auto;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (max-width: 1500px) {
    &::-webkit-scrollbar {
      height: 9px;
    }

    &::-webkit-scrollbar-track {
      background: #cdcdcd;
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #1344F0;
      border-radius: 1rem;
    }
  }

  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      height: 0;
    }
  }

`,Ya=S.div`
  background: transparent;
  border: 2px solid #1344F0;
  border-radius: 38px;
  color: #1344F0;
  font-size: clamp(1rem, 0.7981rem + 0.8974vw, 1.875rem);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 73px;
  min-width: 250px;
  margin-bottom: 10px;

  transition: 0.3s;
  padding-top: 5px;


  @media (max-width: 768px) {
    min-width: 200px;
    height: 43px;
    padding-top: 0;
  }

  ${e=>e.active==="true"&&U`
    color: #F2F6FF;
    background: #1344F0;
    font-family: "Fixel SemiBold", serif;
  `}
`,mg=({option:e,setOption:t})=>{const{t:n}=ge();return u.jsxs(db,{children:[u.jsxs(Ya,{active:e==="ui-ux"?"true":"false",onClick:()=>t("ui-ux"),children:["UI/UX ",n("main.contact.form.design")]}),u.jsxs(Ya,{active:e==="graphic"?"true":"false",onClick:()=>t("graphic"),children:["Graphic ",n("main.contact.form.design")]}),u.jsxs(Ya,{active:e==="2d"?"true":"false",onClick:()=>t("2d"),children:["2D ",n("main.contact.form.design")]})]})};mg.propTypes={option:je.string.isRequired,setOption:je.func.isRequired};const pb=S.div`
  margin-top: 10px;
  display: flex;
  gap: 1rem;
  width: 98%;
  height: auto;
  overflow-x: scroll;
  
  &::-webkit-scrollbar {
    height: 0;
  }
  

  @media(max-width: 1500px){
    &::-webkit-scrollbar {
      height: 9px;
    }

    &::-webkit-scrollbar-track {
      background: #cdcdcd;
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #1344F0;
      border-radius: 1rem;
    }
  }

  @media(max-width: 768px){
    &::-webkit-scrollbar {
      height: 0;
    }
  }

`,Qa=S.div`
  position: relative;
  background: transparent;
  border: 2px solid #1344F0;
  border-radius: 20px;
  font-size: clamp(1rem, 0.7981rem + 0.8974vw, 1.875rem);
  cursor: pointer;
  color: #1344F0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  min-width: 250px;
  margin-bottom: 10px;
  transition: background 0.5s;

  @media (max-width: 768px) {
    min-width: 130px;
    height: 47px;
    border-radius: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: ${({active:e})=>e?1:0}; /* Set opacity based on active prop */
    transition: opacity 0.7s;
    z-index: -1;

    ${e=>e.active==="basic"&&U`
              background: rgb(19, 68, 240);
              background: linear-gradient(
                      135deg,
                      rgba(19, 68, 240, 1) 0%,
                      rgba(151, 71, 255, 1) 100%
              );
              font-family: "Fixel SemiBold", serif;
            `}

    ${e=>e.active==="advanced"&&U`
              background: linear-gradient(
                      108deg,
                      rgba(117, 20, 104, 1) 0%,
                      rgba(237, 84, 138, 1) 100%
              );
              font-family: "Fixel SemiBold", serif;
            `}

    ${e=>e.active==="professional"&&U`
        background: rgb(191, 75, 50);
        background: linear-gradient(
          135deg,
          rgba(191, 75, 50, 1) 0%,
          rgba(252, 229, 152, 1) 100%
        );
        font-family: "Fixel SemiBold", serif;
      `}
  }

  /* Apply styles based on the active prop */
  ${e=>e.active==="basic"&&U`
      color: #f2f6ff;
      border: transparent;
    `}

  ${e=>e.active==="advanced"&&U`
      color: #f2f6ff;
      border: transparent;
    `}

  ${e=>e.active==="professional"&&U`
      color: #f2f6ff;
      border: transparent;
    `}
`,gg=({option:e,setOption:t})=>{const{t:n}=ge();return u.jsxs(pb,{children:[u.jsx(Qa,{active:e==="basic"?"basic":null,onClick:()=>t("basic"),children:n("main.contact.form.basic")}),u.jsx(Qa,{active:e==="advanced"?"advanced":null,onClick:()=>t("advanced"),children:n("main.contact.form.advanced")}),u.jsx(Qa,{active:e==="professional"?"professional":null,onClick:()=>t("professional"),children:n("main.contact.form.professional")})]})};gg.propTypes={option:je.string.isRequired,setOption:je.func.isRequired};const fb=S.input`
  font-family: "Fixel Light Italic", serif;
  font-size: clamp(0.875rem, 0.6442rem + 1.0256vw, 1.875rem);
  width: 80%;
  padding: 20px 25px;
  border-radius: 24px;
  border: 2.5px solid #4B54E8;
  color: #4B54E8;
  outline: none;
  transition: 0.2s;

  &::placeholder {
    color: #4B54E8;
  }

  &:focus {
    background: rgb(78, 81, 232);
    background: linear-gradient(112deg, rgba(78, 81, 232, 1) 0%, rgba(41, 116, 227, 1) 40%, rgba(19, 68, 240, 1) 100%);
    color: #F2F6FF;
    border-radius: 0;

    &::placeholder {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    width: 90%;
  }
`,vu=({placeholder:e,type:t,value:n,onChange:r})=>u.jsx(fb,{onChange:r,value:n,type:t,placeholder:e});vu.propTypes={placeholder:je.string.isRequired,type:je.string.isRequired,value:je.string,onChange:je.func};const hb=S.textarea`
  font-family: "Fixel Light Italic", serif;
  font-size: clamp(0.875rem, 0.6442rem + 1.0256vw, 1.875rem);
  width: 80%;
  padding: 20px 25px;
  border-radius: 24px;
  border: 2.5px solid #4B54E8;
  color: #4B54E8;
  min-height: 330px;
  outline: none;
  transition: 0.2s;

  &::placeholder {
    color: #4B54E8;
  }
  
  &:focus {
    background: rgb(78,81,232);
    background: linear-gradient(112deg, rgba(78,81,232,1) 0%, rgba(41,116,227,1) 40%, rgba(19,68,240,1) 100%);
    color: #F2F6FF;
    border-radius: 0;

    &::placeholder {
      display: none;
    }
  }

  @media (max-width: 968px) {
    width: 90%;
  }
`,vg=({placeholder:e,value:t,onChange:n})=>u.jsx(hb,{value:t,onChange:n,placeholder:e});vg.propTypes={placeholder:je.string.isRequired,value:je.string,onChange:je.func};let mb={data:""},gb=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||mb,vb=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,xb=/\/\*[^]*?\*\/|  +/g,yp=/\n+/g,Gt=(e,t)=>{let n="",r="",i="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Gt(o,s):s+"{"+Gt(o,s[1]=="k"?"":t)+"}":typeof o=="object"?r+=Gt(o,t?t.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Gt.p?Gt.p(s,o):s+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Ct={},xg=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+xg(e[n]);return t}return e},wb=(e,t,n,r,i)=>{let s=xg(e),o=Ct[s]||(Ct[s]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(s));if(!Ct[o]){let l=s!==e?e:(c=>{let d,f,m=[{}];for(;d=vb.exec(c.replace(xb,""));)d[4]?m.shift():d[3]?(f=d[3].replace(yp," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(yp," ").trim();return m[0]})(e);Ct[o]=Gt(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Ct.g?Ct.g:null;return n&&(Ct.g=Ct[o]),((l,c,d,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})(Ct[o],t,r,a),o},yb=(e,t,n)=>e.reduce((r,i,s)=>{let o=t[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Gt(a,""):a===!1?"":a}return r+i+(o??"")},"");function Jo(e){let t=this||{},n=e.call?e(t.p):e;return wb(n.unshift?n.raw?yb(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,gb(t.target),t.g,t.o,t.k)}let wg,xu,wu;Jo.bind({g:1});let Nt=Jo.bind({k:1});function Sb(e,t,n,r){Gt.p=t,wg=e,xu=n,wu=r}function fn(e,t){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:xu&&xu()},a),n.o=/ *go\d+/.test(l),a.className=Jo.apply(n,r)+(l?" "+l:"");let c=e;return e[0]&&(c=a.as||e,delete a.as),wu&&c[0]&&wu(a),wg(c,a)}return i}}var bb=e=>typeof e=="function",jo=(e,t)=>bb(e)?e(t):e,Cb=(()=>{let e=0;return()=>(++e).toString()})(),yg=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),jb=20,Ds=new Map,kb=1e3,Sp=e=>{if(Ds.has(e))return;let t=setTimeout(()=>{Ds.delete(e),An({type:4,toastId:e})},kb);Ds.set(e,t)},Eb=e=>{let t=Ds.get(e);t&&clearTimeout(t)},yu=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,jb)};case 1:return t.toast.id&&Eb(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:n}=t;return e.toasts.find(s=>s.id===n.id)?yu(e,{type:1,toast:n}):yu(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?Sp(r):e.toasts.forEach(s=>{Sp(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Bs=[],Vs={toasts:[],pausedAt:void 0},An=e=>{Vs=yu(Vs,e),Bs.forEach(t=>{t(Vs)})},Tb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Pb=(e={})=>{let[t,n]=k.useState(Vs);k.useEffect(()=>(Bs.push(n),()=>{let i=Bs.indexOf(n);i>-1&&Bs.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var s,o;return{...e,...e[i.type],...i,duration:i.duration||((s=e[i.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||Tb[i.type],style:{...e.style,...(o=e[i.type])==null?void 0:o.style,...i.style}}});return{...t,toasts:r}},$b=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Cb()}),Gi=e=>(t,n)=>{let r=$b(t,e,n);return An({type:2,toast:r}),r.id},Ue=(e,t)=>Gi("blank")(e,t);Ue.error=Gi("error");Ue.success=Gi("success");Ue.loading=Gi("loading");Ue.custom=Gi("custom");Ue.dismiss=e=>{An({type:3,toastId:e})};Ue.remove=e=>An({type:4,toastId:e});Ue.promise=(e,t,n)=>{let r=Ue.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(Ue.success(jo(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ue.error(jo(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var Lb=(e,t)=>{An({type:1,toast:{id:e,height:t}})},zb=()=>{An({type:5,time:Date.now()})},Fb=e=>{let{toasts:t,pausedAt:n}=Pb(e);k.useEffect(()=>{if(n)return;let s=Date.now(),o=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Ue.dismiss(a.id);return}return setTimeout(()=>Ue.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=k.useCallback(()=>{n&&An({type:6,time:Date.now()})},[n]),i=k.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:c}=o||{},d=t.filter(x=>(x.position||c)===(s.position||c)&&x.height),f=d.findIndex(x=>x.id===s.id),m=d.filter((x,v)=>v<f&&x.visible).length;return d.filter(x=>x.visible).slice(...a?[m+1]:[0,m]).reduce((x,v)=>x+(v.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Lb,startPause:zb,endPause:r,calculateOffset:i}}},Ob=Nt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ib=Nt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Nb=Nt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Mb=fn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ob} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ib} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Nb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Rb=Nt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_b=fn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Rb} 1s linear infinite;
`,Ab=Nt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Db=Nt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Bb=fn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ab} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Db} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Vb=fn("div")`
  position: absolute;
`,Ub=fn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Wb=Nt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Hb=fn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Wb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Gb=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?k.createElement(Hb,null,t):t:n==="blank"?null:k.createElement(Ub,null,k.createElement(_b,{...r}),n!=="loading"&&k.createElement(Vb,null,n==="error"?k.createElement(Mb,{...r}):k.createElement(Bb,{...r})))},Kb=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Yb=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Qb="0%{opacity:0;} 100%{opacity:1;}",Xb="0%{opacity:1;} 100%{opacity:0;}",qb=fn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Jb=fn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Zb=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=yg()?[Qb,Xb]:[Kb(n),Yb(n)];return{animation:t?`${Nt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Nt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eC=k.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?Zb(e.position||t||"top-center",e.visible):{opacity:0},s=k.createElement(Gb,{toast:e}),o=k.createElement(Jb,{...e.ariaProps},jo(e.message,e));return k.createElement(qb,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:s,message:o}):k.createElement(k.Fragment,null,s,o))});Sb(k.createElement);var tC=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let s=k.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return k.createElement("div",{ref:s,className:t,style:n},i)},nC=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:yg()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},rC=Jo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,vs=16,iC=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=Fb(n);return k.createElement("div",{style:{position:"fixed",zIndex:9999,top:vs,left:vs,right:vs,bottom:vs,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(c=>{let d=c.position||t,f=l.calculateOffset(c,{reverseOrder:e,gutter:r,defaultPosition:t}),m=nC(d,f);return k.createElement(tC,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?rC:"",style:m},c.type==="custom"?jo(c.message,c):i?i(c):k.createElement(eC,{toast:c,position:d}))}))},gt=Ue,sC={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const oC=S.div`
  margin-top: 100px;
  width: 100%;

  @media (max-width: 1100px) {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    padding-left: 10px;
    margin-top: -100px;
  }
`,Kr=S.p`
  font-family: "Fixel Medium", serif;
  font-size: clamp(1.5rem, 1.226rem + 1.2179vw, 2.6875rem);
  color: #1344F0;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding-left: 10px;
    margin-top: 20px;
  }
`,aC=S.button`
  position: relative;
  margin-top: 20px;
  background: #1344F0;
  border: none;

  padding: 25px 60px;

  cursor: pointer;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  transition: color 0.3s ease;
  width: 80%;

  & > span {
    font-size: clamp(2.125rem, 1.7788rem + 1.5385vw, 3.625rem);
    color: #F2F6FF;
    font-family: "Fixel Bold", serif;
  }


  @media (max-width: 1200px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    color: #F2F6FF;
  }

  &:hover::before {
    opacity: 1;
  }

  &:disabled {
    background: linear-gradient(112deg, rgba(19, 68, 240, 1) 0%, rgba(86, 255, 71, 1) 100%);
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(112deg, rgba(19, 68, 240, 1) 0%, rgba(86, 255, 71, 1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,lC=()=>{const{t:e}=ge(),[t,n]=k.useState("ui-ux"),[r,i]=k.useState("advanced"),[s,o]=k.useState(""),[a,l]=k.useState(""),[c,d]=k.useState(""),[f,m]=k.useState(!1),x=async v=>{v.preventDefault();const w=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(s===""){gt.error(e("main.contact.form-toast.name"));return}if(a===""){gt.error(e("main.contact.form-toast.email"));return}if(!w.test(a)){gt.error(e("main.contact.form-toast.valid-email"));return}const b={name:s,email:a,comment:c},p=sC.VITE_CONTACT_URL;try{(await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)})).ok?(gt.success(e("main.contact.form-toast.success")),m(!0)):console.error("Failed to send data to the server")}catch(h){console.error("Error submitting data:",h)}finally{console.log(b),o(""),l(""),d(""),n("ui-ux"),i("basic")}};return u.jsxs(oC,{children:[u.jsx(Kr,{children:e("main.contact.form.1")}),u.jsx(mg,{option:t,setOption:n}),u.jsx(Kr,{children:e("main.contact.form.2")}),u.jsx(gg,{setOption:i,option:r}),u.jsx(Kr,{children:e("main.contact.form.3")}),u.jsx(vu,{onChange:v=>o(v.target.value),value:s,type:"text",placeholder:"Name"}),u.jsx(Kr,{children:e("main.contact.form.4")}),u.jsx(vu,{onChange:v=>l(v.target.value),value:a,type:"email",placeholder:"mail@example.com"}),u.jsx(Kr,{children:e("main.contact.form.5")}),u.jsx(vg,{value:c,onChange:v=>d(v.target.value),placeholder:"Your Message"}),u.jsx(aC,{type:"submit",onClick:v=>x(v),disabled:f,children:u.jsxs("span",{children:[e(f?"main.contact.form.active-button":"main.contact.form.button"),u.jsx("img",{src:"/digital/ui/arrow-up-right.svg",alt:"arrow-icon"})]})})]})},uC=S.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 40vw 53vw;
  gap: 7vw;
  
  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
`,cC=()=>u.jsxs(uC,{children:[u.jsx(cb,{}),u.jsx(lC,{})]}),dC=S.div`
  margin-top: 140px;
  width: 90vw;

  @media (max-width: 768px) {
    margin-top: -30px;

  }
`,pC=S.div`
  & > h1 {
    font-size: clamp(2.625rem, 2.0398rem + 2.6752vw, 5.25rem);
    font-family: "Fixel Bold", serif;
    color: #1344F0;
  }

  & > p {
    font-size: clamp(1.3125rem, 1.0199rem + 1.3376vw, 2.625rem);
    color: #4DDEC4;
    font-family: "Fixel Bold", serif;
  }
`,fC=S.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  gap: 40px;

  & p {
    font-size: clamp(1rem, 0.7771rem + 1.0191vw, 2rem);
    color: #18194F;
    margin-bottom: 30px;

  }

  & > div {
    position: relative;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    flex-direction: column;
  }
`,hC=S.div`
  width: 90%;
  margin: 150px auto 0;
  display: flex;
  align-items: center;
  gap: 40px;

  & p {
    font-size: clamp(1rem, 0.7771rem + 1.0191vw, 2rem);
    color: #18194F;
    margin-bottom: 30px;

  }

  & > div {
    position: relative;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    flex-direction: column;
    gap: 0;
  }
`,bp=S.div`
  @media (max-width: 768px) {
    order: 2;
  }
`,Cp=S.img`
  width: 300px;
  height: auto;

`,jp=S.img`
  width: 50px;
  padding-right: 10px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 10px;
    width: 20px;
  }
`,kp=S.img`
  width: 20px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`,mC=S.h2`
  margin-top: 200px;
  font-size: clamp(2.625rem, 2.207rem + 1.9108vw, 4.5rem);
  font-family: "Fixel Bold", serif;
  color: #1344F0;

  @media (max-width: 768px) {
    margin-top: 150px;
    margin-bottom: -100px;
  }
`,gC=()=>{const{t:e}=ge();return u.jsxs(dC,{children:[u.jsxs(pC,{children:[u.jsx("h1",{children:e("main.partners.heading.h1")}),u.jsx("p",{children:e("main.partners.heading.p")})]}),u.jsxs(fC,{children:[u.jsx("div",{children:u.jsx(Cp,{src:"/digital/partners/tedo-group.svg",alt:"tedo-group-image"})}),u.jsxs(bp,{children:[u.jsxs("p",{children:[u.jsx(jp,{src:"/digital/partners/blue-quote.svg",alt:"quote-icon"}),e("main.partners.text1.p1")]}),u.jsx("p",{children:e("main.partners.text1.p2")}),u.jsx(kp,{src:"/digital/partners/blue-quote.svg",alt:"quote-icon"})]})]}),u.jsxs(hC,{children:[u.jsxs(bp,{children:[u.jsxs("p",{children:[u.jsx(jp,{src:"/digital/partners/green-quote.svg",alt:"quote-icon"}),e("main.partners.text2.p1")]}),u.jsx("p",{children:e("main.partners.text2.p2")}),u.jsx("p",{children:e("main.partners.text2.p3")}),u.jsx(kp,{src:"/digital/partners/green-quote.svg",alt:"quote-icon"})]}),u.jsx("div",{children:u.jsx(Cp,{src:"/digital/partners/tedo-generation.svg",alt:"tedo-generation-image"})})]}),u.jsx(mC,{children:e("main.partners.slogan")})]})},vC=S.div`
  width: 82vw;
  margin-top: 180px;

  & > p {
    width: 70vw;
    max-width: 830px;
    font-size: clamp(1rem, 0.726rem + 1.2179vw, 2.1875rem);
    font-family: "Fixel Regular Italic", serif;
    color: #1344F0;

  }

  & > img {
    margin-top: 20px;
    width: 66vw;
    max-width: 1280px;
  }

  & > h1 {
    margin-top: 20px;
    font-size: clamp(2.625rem, 1.4279rem + 5.3205vw, 7.8125rem);
    color: #1344F0;
    font-family: "Fixel Bold", serif;

    & > span {
      color: #4DDEC4;
      font-size: clamp(2.625rem, 1.4279rem + 5.3205vw, 7.8125rem);
      font-family: "Fixel Bold", serif;
    }
  }

  @media (max-width: 768px) {
    margin-top: -30px;
  }
`,xC=()=>{const{t:e}=ge();return u.jsxs(vC,{children:[u.jsx("p",{children:e("main.about.welcome.p")}),u.jsx("h1",{children:u.jsx(B,{i18nKey:"main.about.welcome.h1",components:{1:u.jsx("span",{})}})}),u.jsx("img",{src:window.innerWidth<=768?"/digital/about/dots-mobile.svg":"/digital/about/dots-desktop.svg",alt:"dots-image"})]})},wC=S.div`
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;
  text-align: center;

  & > h1 {
    font-size: clamp(2.625rem, 2.0769rem + 2.4359vw, 5rem);
    color: #1344F0;
    font-family: "Fixel Bold", serif;

  }

  & > h2 {
    color: #18194F;
    font-size: clamp(1.375rem, 0.9856rem + 1.7308vw, 3.0625rem);
  }

  & > p {
    margin-top: 25px;
    width: 62vw;
    font-size: clamp(1rem, 0.8269rem + 0.7692vw, 1.75rem);
    color: #18194F;
    
  }
  
  @media(max-width: 768px){
    margin-top: 150px;
    
  }
`,yC=()=>{const{t:e}=ge();return u.jsxs(wC,{children:[u.jsx("h1",{children:e("main.about.experience.h1")}),u.jsx("h2",{children:e("main.about.experience.h2")}),u.jsx("p",{children:e("main.about.experience.p")})]})},SC=S.div`
  margin-top: 190px;
  width: 100vw;

  @media (max-width: 768px) {
    margin-bottom: -100px;
  }
`,Xa=S.div`
  display: grid;
  grid-template-columns: 550px 1fr;
  align-items: center;
  padding-left: 120px;

  min-height: 360px;
  color: #F2F6FF;
  background: #1344F0;
  border-bottom: 12px solid #4DDEC4;
  position: relative;

  & > img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }


  @media (max-width: 1600px) {
    grid-template-columns: 500px 1fr;
    padding-left: 100px;
  }

  @media (max-width: 1300px) {
    grid-template-columns:  420px 1fr;
    padding-left: 60px;
  }

  @media (max-width: 968px) {
    grid-template-columns: 300px 1fr;
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    padding: 50px 0 100px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;

    color: #F2F6FF;
    background: #1344F0;
    border-bottom: 12px solid #4DDEC4;
    position: relative;

    & > img {
      top: 90%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 100%;
    }
  }

`,qa=S.h2`
  font-family: "Fixel SemiBold Italic", serif;
  font-size: clamp(1.75rem, 1.3462rem + 1.7949vw, 3.5rem);
  z-index: 3;
  color: #F2F6FF;


  @media (max-width: 768px) {
    width: 70vw;
  }
`,Ja=S.div`
  width: 50vw;
  z-index: 2;

  & > p {
    margin-bottom: 15px;
    font-family: "Fixel ExtraLight", serif;
    font-size: clamp(1rem, 0.8269rem + 0.7692vw, 1.75rem);
    color: #F2F6FF;

  }

  @media (max-width: 1600px) {
    width: 45vw;
  }

  @media (max-width: 768px) {
    width: 70vw;
    margin-top: 20px;

    & > p {
      margin-bottom: 10px;
    }
  }
`,bC=()=>{const{t:e}=ge();let t={1:"/digital/about/line-desktop-1.svg",2:"/digital/about/line-desktop-2.svg",3:"/digital/about/line-desktop-3.svg"};return window.innerWidth<=768&&(t={1:"/digital/about/line-mobile-1.svg",2:"/digital/about/line-mobile-2.svg",3:"/digital/about/line-mobile-3.svg"}),u.jsxs(SC,{children:[u.jsxs(Xa,{children:[u.jsx(qa,{children:e("main.about.designers.1.name")}),u.jsxs(Ja,{children:[u.jsx("p",{children:e("main.about.designers.1.p1")}),u.jsx("p",{children:e("main.about.designers.1.p2")}),u.jsx("p",{children:e("main.about.designers.1.p3")})]}),u.jsx("img",{src:t[1],alt:"line-img"})]}),u.jsxs(Xa,{children:[u.jsx(qa,{children:e("main.about.designers.2.name")}),u.jsxs(Ja,{children:[u.jsx("p",{children:e("main.about.designers.2.p1")}),u.jsx("p",{children:e("main.about.designers.2.p2")}),u.jsx("p",{children:e("main.about.designers.2.p3")})]}),u.jsx("img",{src:t[3],alt:"line-img"})]}),u.jsxs(Xa,{children:[u.jsx(qa,{children:e("main.about.designers.3.name")}),u.jsxs(Ja,{children:[u.jsx("p",{children:e("main.about.designers.3.p1")}),u.jsx("p",{children:e("main.about.designers.3.p2")}),u.jsx("p",{children:e("main.about.designers.3.p3")})]}),u.jsx("img",{src:t[2],alt:"line-img"})]})]})},CC=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,jC=()=>u.jsxs(CC,{children:[u.jsx(xC,{}),u.jsx(yC,{}),u.jsx(bC,{})]});function hn(){const e=_n();return n=>{e(n),window.scrollTo(0,0)}}const kC=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  & > h3 {
    font-size: 40px;
    font-family: "Fixel Semi-Bold", serif;
    color: var(--color-black);
  }

  & > img {
    width: 60px;
    margin-bottom: 12px;
  }
  

  ${e=>(e.transparent==="true"||e.isgrey==="true")&&U`
            & > h3 {
              color: var(--color-white);
            }
          `}

  ${e=>e.ismenu==="true"&&U`
            & > h3 {
              color: var(--color-black);
            }
          `}
`,EC=({isMenu:e,isTransparent:t,isGrey:n})=>{const r=hn(),i=(e||t==="false")&&n==="false";return u.jsxs(kC,{onClick:()=>r("/architecture/home"),isgrey:n,transparent:t,ismenu:e?"true":"false",children:[i||e?u.jsx("img",{src:"/architecture/ui/header-logo-dark.svg",alt:"logo"}):u.jsx("img",{src:"/architecture/ui/header-logo.svg",alt:"logo"}),window.innerWidth>1e3&&u.jsx("h3",{children:"Tedo Artline"})]})},Sg=k.createContext();function bg({children:e}){const[t,n]=k.useState(!1),[r,i]=k.useState("false");k.useEffect(function(){t?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},[t]);function s(){n(o=>!o),i("true")}return u.jsx(Sg.Provider,{value:{isOpenBurger:t,toggleBurger:s,isInitialMount:r},children:e})}function Cg(){const e=k.useContext(Sg);if(e===void 0)throw new Error("BurgerContext was used outside of BurgerProvider");return e}bg.propTypes={children:je.node.isRequired};const TC=S.div`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  cursor: pointer;
`,PC=S.div`
  width: 70px;
  height: 4px;
  border-radius: 1rem;
  background: var(--color-white);
  position: relative;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &::before {
    content: "";
    width: 35px;
    height: 4px;
    border-radius: 1rem;
    background: var(--color-white);
    position: absolute;
    top: 12px;
    right: 0;
    transition: top 0.3s ease, transform 0.3s ease;

  }

  &::after {
    content: "";
    width: 35px;
    height: 4px;
    border-radius: 1rem;
    background: var(--color-white);
    position: absolute;
    top: 8px;
    right: 0;
    visibility: hidden;
    transition: top 0.3s ease, transform 0.3s ease;
  }

  ${({isactive:e})=>e==="true"&&U`
    background-color: var(--color-black);

    &::before {
      transform: rotate(-125deg);
      background-color: var(--color-black);
      top: 24px;
      right: -5px;
      border-radius: 1rem;
    }

    &::after {
      visibility: visible;
      transform: rotate(-125deg);
      background-color: var(--color-black);
      top: 24px;
      right: 25px;

      border-radius: 1rem;
    }
  `}

  ${e=>e.isgrey==="false"&&U`
    background-color: var(--color-black);

    &::before {
      background-color: var(--color-black);
    }

    &::after {
      background-color: var(--color-black);
    }
  `}

`;function $C({isTransparent:e,isGrey:t}){const{toggleBurger:n,isOpenBurger:r}=Cg(),i=t==="true"?"true":e;return u.jsx(TC,{onClick:n,children:u.jsx(PC,{isgrey:i,isactive:r?"true":"false"})})}const LC=({sectionName:e})=>{const[t,n]=k.useState(!0);return k.useEffect(()=>{const r=()=>{const i=window.scrollY,s=document.getElementById(e);if(s){const o=s.offsetTop,a=o+s.offsetHeight;i>=o&&i<a?n(!0):n(!1)}};return window.addEventListener("scroll",r),r(),()=>{window.removeEventListener("scroll",r)}},[e]),{isScrolled:t}},zC=S.div`
  position: relative;
  height: calc(100vh - 100px);

  @media (max-width: 768px) {
    height: calc(100vh - 85px);
  }

  
  ${e=>e.ismenu==="false"&&U`
    display: none;
  `}
`,FC=S.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 900px) {
    gap: 0;
    top: -10px;
    transform: translate(-50%, 0);
  }
  
  @media(max-width: 420px){
    top: 40%;
    transform: translate(-50%, -50%);
  }
  
`,OC=S.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 50vw;

  & > p {
    font-size: clamp(1.5rem, 1.1699rem + 1.0563vw, 2.4375rem);
    font-family: "Fixel Semi-Bold Italic", serif;
    color: var(--color-black);
  }

  @media (max-width: 1300px) {
    width: 65vw;
  }

  @media (max-width: 900px) {
    width: 80vw;
    margin-top: 2rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    width: 75vw;
  }

`,IC=S.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.5vh;
  width: 50vw;
  

  @media (max-width: 1300px) {
    width: 65vw;
  }

  @media (max-width: 900px) {
    width: 40vw;
    gap: 2rem;
  }

  @media (max-width: 650px) {
    width: 75vw;
    gap: 1rem;
  }


`,Za=S(Ui)`
  font-size: clamp(3.375rem, 1.8125rem + 5vw, 7.8125rem);
  font-family: "Fixel Semi-Bold Italic", serif;
  color: rgba(45, 47, 47, 0.5) !important;
  text-decoration: none;
  position: relative;


  ${e=>e.active==="active"&&U`
    color: var(--color-black) !important;
    margin-left: 9rem;
    transition: 1s;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -9rem;
      width: 7rem;
      height: 7rem;
      background: url('/architecture/ui/link-arrow.svg') no-repeat center center;
      background-size: contain;
    }

    @media (max-width: 1300px) {
      margin-left: 8rem;

      &:before {
        width: 5rem;
        height: 5rem;
        left: -7rem;

      }
    }

    @media (max-width: 900px) {
      margin-top: 3rem;
    }

    @media (max-width: 768px) {
      margin-left: 0;

      &:before {
        width: 0;
        height: 0;
      }
    }
  `}
`,NC=S.div`
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  width: 400px;
  height: 95px;
  background: var(--color-black);
  color: var(--color-yellow);
  font-family: "Fixel Extra-Bold", serif;
  font-size: clamp(1.375rem, 0.9569rem + 1.338vw, 2.5625rem);
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 900px) {
    width: 100vw;
    right: 0;
    bottom: 0;
  }
`,MC=({isMenu:e})=>{const t=pn(),n=hn(),r=s=>t.pathname.includes(s)?"active":null,i=s=>{n(`/architecture/home?section=${s}`)};return u.jsxs(zC,{ismenu:e,children:[u.jsxs(FC,{children:[u.jsxs(OC,{children:[u.jsx("p",{onClick:()=>i("building"),children:"Building"}),u.jsx("p",{onClick:()=>i("landscape-design"),children:"Landscape Design"}),u.jsx("p",{onClick:()=>i("interior-design"),children:"Interior Design"})]}),u.jsxs(IC,{children:[u.jsx(Za,{active:r("architecture/home"),to:"architecture/home",children:"Home"}),u.jsx(Za,{active:r("architecture/about"),to:"architecture/about",children:"About Us"}),u.jsx(Za,{active:r("architecture/contacts"),to:"architecture/contacts",children:"Contacts"})]})]}),u.jsx(NC,{onClick:()=>n("/digital/home"),children:"Digital Design"})]})},RC=dt`
  0% {
    height: 100px;

  }
  100% {
    height: 100vh;
  }
`,_C=dt`
  0% {
    height: 100vh;
  }
  100% {
    height: 100px;
  }
`,AC=S.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  overflow: hidden;
  background: #E5E3DF;

  @media (max-width: 768px) {
    height: 85px;
  }

  ${e=>e.transparent==="true"&&U`
    background: transparent;
  `}

  ${e=>e.isgrey==="true"&&U`
    background: var(--color-black);
  `}


  ${e=>e.ismenu==="true"&&U`
    background: var(--color-yellow);
    height: 100vh !important;
    animation: ${RC} 0.4s !important;
  `}
  
  //
  // ${e=>e.ismenu==="false"&&e.isinitialmount==="true"&&U`
  //     //animation: ${_C} 0.4s;
  //   height: 100px;
  // `}

  
`,DC=S.header`
  margin: 0 auto;
  width: 95vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 92vw;
    height: 85px;
  }
`,BC=S.div`
  margin-left: 3rem;
  background: var(--color-yellow);
  width: 350px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: -60%;
  transform: translate(-50%, 0);
  transition: 0.5s;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: var(--color-black);
    font-family: "Fixel Semi-Bold", serif;
    font-size: 32px;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    top: 0;

    & > p {
      opacity: 1;
    }
  }
  
  @media(max-width: 1000px){
    margin-left: 0;
  }
`,VC=()=>{const{isScrolled:e}=LC({sectionName:"sectionWelcome"}),{isOpenBurger:t,isInitialMount:n}=Cg(),r=pn(),i=hn(),s=r.pathname.includes("home")?"true":"false",o=e&&!t&&r.pathname.includes("home")?"true":"false",a=r.pathname.includes("contacts")?"true":"false";return u.jsxs(AC,{ismenu:t?"true":"false",transparent:o,isinitialmount:n,isgrey:a,children:[u.jsxs(DC,{children:[u.jsx(EC,{isTransparent:o,isGrey:a,isMenu:t}),window.innerWidth>768&&s==="true"&&!t&&u.jsx(BC,{onClick:()=>i("/architecture/contacts"),children:u.jsx("p",{children:"Contact with us"})}),u.jsx($C,{isGrey:a,isTransparent:o})]}),u.jsx(MC,{isMenu:t?"true":"false"})]})},UC=S.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media(max-width: 1000px){
    margin-left: 1rem;
    gap: 2rem;
  }
`,el=S.p`
  font-family: "Fixel Light-Italic", serif;
  font-size: clamp(2.1875rem, 1.8574rem + 1.0563vw, 3.125rem);
  text-decoration: none;
  transition: 0.5s;
  
  &:hover{
    color: var(--color-yellow);
  }
`,WC=()=>{const e=hn();return u.jsxs(UC,{children:[u.jsx(el,{onClick:()=>e("/architecture/home"),children:"Home"}),u.jsx(el,{onClick:()=>e("/architecture/about"),children:"About Us"}),u.jsx(el,{onClick:()=>e("/architecture/contacts"),children:"Contacts"})]})},HC=S.footer`
  width: 100vw;
  height: auto;
  background: var(--color-black);
  display: flex;
  flex-direction: column;
  justify-content: end;
`,GC=S.div`
  margin-top: 120px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 0;
    height: 1300px;
  }

  @media (max-width: 600px) {
    height: 900px;

  }
`,KC=S.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 50%;
  }

  @media(min-width: 3000px){
    padding-bottom: 300px;

  }
`,YC=S.div`
  display: flex;
  height: 330px;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;

    & > img {
      width: 50vw;
    }
  }

`,QC=S.div`
  justify-self: end;
  width: 30%;
  
  &>p{
    font-size: 97px;
    font-family: "Fixel Semi-Bold", serif;
    text-align: end;
    padding-right: 1rem;
    transition: 0.5s;
    
    &:hover{
      color: var(--color-yellow);
    }
  }


  @media (max-width: 1300px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    display: none;
  }

`,XC=S.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 1000px) {
    height: 50%;
    position: relative;
  }
  
`,qC=S.div`
  font-size: clamp(6.0625rem, 2.1893rem + 12.3944vw, 17.0625rem);
  font-family: "Fixel Extra-Bold", serif;
  color: var(--color-yellow);
  line-height: 0.9;
  width: 50%;
  margin: 5rem 0 0 3rem;

  @media (max-width: 1000px) {
    transform: rotate(-90deg);
    margin: 0;
    position: absolute;
    bottom: 90px;
    left: -30px;
    font-family: "Fixel Semi-Bold",serif;
  }

  @media (max-width: 600px) {
    bottom: 50px;
    left: 0;
  }

  @media (max-width: 400px) {
    bottom: 20px;
    left: 10px;
  }
`,JC=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 3rem 3rem 0;

  & img {
    width: 80px;
  }

  @media (max-width: 1000px) {
    margin: 0;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`,ZC=S.div`
  transition: 0.4s;
  background: var(--color-white);
  padding: 1rem;
  
  &:hover{
      background: var(--color-yellow);
  }
`,e5=S.div`
  transition: 0.4s;
  background: var(--color-white);
  padding: 1rem;
  
  &:hover{
    background: var(--color-yellow);
  }
`,t5=S.div`
  z-index: 100;
  min-height: 56px;
  background: var(--color-white);
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    font-family: "Fixel Light-Italic", serif;
    font-size: 14px;
    color: var(--color-black);
    padding-left: 2rem;
  }

`,n5=()=>u.jsx(HC,{children:u.jsxs(GC,{children:[u.jsxs(KC,{children:[u.jsxs(YC,{children:[u.jsx("img",{src:"/architecture/ui/footer-logo.svg",alt:"logo"}),u.jsx(WC,{})]}),u.jsxs(QC,{children:[u.jsx("p",{children:"Clever."}),u.jsx("p",{children:"Tailored."}),u.jsx("p",{children:"Clients."})]})]}),u.jsxs(XC,{children:[u.jsx(qC,{children:"Tedo Artline"}),u.jsxs(JC,{children:[u.jsx(e5,{onClick:()=>window.location.href="https://www.linkedin.com",children:u.jsx("img",{src:"/architecture/ui/linkedin.svg",alt:"linkedin"})}),u.jsx(ZC,{onClick:()=>window.location.href="https://mail.google.com",children:u.jsx("img",{src:"/architecture/ui/mail.svg",alt:"email"})})]})]}),u.jsx(t5,{children:u.jsx("p",{children:"Copyright 2024 Tedo Group. All rights Reserved."})})]})}),r5=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: #E5E3DF;

  & * {
    color: var(--color-white);
  }
`,i5=S.main`
    
`,s5=()=>u.jsxs(r5,{children:[u.jsx(VC,{}),u.jsx(i5,{children:u.jsx(dm,{})}),u.jsx(n5,{})]}),o5=S.div`
  width: 100vw;
  height: 1100px;

  @media (max-width: 768px) {
    height: 830px;
  }
`,a5=S.div`
  background: url("/architecture/home/main-bg.webp") no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 100%;

`,l5=S.div`
  width: 60vw;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  

  & > h1 {
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(2.0625rem, 1.1382rem + 2.9577vw, 4.6875rem);
    color: var(--color-white);
    
  }

  & > p {
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
    color: var(--color-white);
    
  }

  @media (max-width: 1300px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 82vw;
    text-align: center;
    top: 2%;
    margin-top: 400px;

    & > p {
      width: 80%;
      margin: 14px auto 0;

    }

    & > h1 {
      margin: 0 auto;
      width: 80%;
    }
  }
`,u5=S.div`
  margin-top: 10px;
  background: var(--color-black);
  width: 100%;
  height: 160px;
  display: grid;
  grid-template-columns: 17vw 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 10px 10px 10px 30px;
  border-radius: 23px;
  
  & > h2 {
    font-size: clamp(2.1875rem, 1.1458rem + 2.1701vw, 3.75rem);
    font-family: "Fixel Extra-Bold", serif;
    color: var(--color-white);
    
  }

  & > p {
    font-size: clamp(0.875rem, 0.5833rem + 0.6076vw, 1.3125rem);
    font-family: "Fixel Light", serif;
    color: var(--color-white);
    
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 19vw 1fr auto;
  }


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    justify-items: start;
    padding: 14px 0 0 14px;
    text-align: start;
    gap: 0.6rem;
    height: auto;
    margin-top: 2rem;

    & > p {
      font-size: 21px;
      width: 80%;
    }

    & > h2 {
      font-size: 46px;
    }
  }
`,c5=S.div`
  background: var(--color-yellow);
  align-self: end;
  border-radius: 5.5px;
  transition: 0.4s;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--color-white);
  }

  @media (max-width: 768px) {
    justify-self: end;
    border-radius: 0;
  }


`,d5=S.div`
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,p5=S.button`
  border: 2px solid var(--color-white);
  background: transparent;
  font-size: 21px;
  font-family: "Fixel Semi-Bold Italic", serif;
  width: 160px;
  height: 50px;
  cursor: pointer;
  transition: 0.4s;
  color: var(--color-white);

  &:hover {
    border: 2px solid var(--color-yellow);
    background: var(--color-yellow);
    color: var(--color-black);
  }
`,f5=S.button`
  border: 2px solid var(--color-yellow);
  background: var(--color-yellow);
  color: var(--color-black);
  font-size: 21px;
  font-family: "Fixel Semi-Bold Italic", serif;
  width: 160px;
  height: 50px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    border: 2px solid var(--color-white);
    background: transparent;
    color: var(--color-white);
  }
`,Yr=[{h2:"Building",p:"building entails the construction of structures such as houses, commercial buildings, bridges, and other infrastructural projects",id:"building"},{h2:"Landscape Design",p:"Interior design focuses on enhancing the interiors of buildings to create aesthetically pleasing and functional spaces. This includes choosing color schemes, furniture, lighting, and accessories, and optimizing layouts to reflect personal or corporate styles.",id:"landscape-design"},{h2:"Interior Design",p:"Landscape design involves the creation of outdoor spaces, incorporating natural elements like plants, trees, and bodies of water, as well as constructed features such as pathways, patios, and garden structures.",id:"interior-design"}],h5=()=>{const[e,t]=k.useState(0),n=()=>{e===Yr.length-1?t(0):t(s=>s+1)},r=()=>{t(e===0?Yr.length-1:s=>s-1)},i=()=>{document.getElementById(Yr[e].id).scrollIntoView({behavior:"smooth"})};return u.jsx(o5,{id:"sectionWelcome",children:u.jsx(a5,{children:u.jsxs(l5,{children:[u.jsx("h1",{children:"Construction at your request"}),u.jsx("p",{children:"We create unique and cozy interiors and beautiful landscapes"}),u.jsxs(u5,{children:[u.jsx("h2",{children:Yr[e].h2}),u.jsx("p",{children:Yr[e].p}),u.jsx(c5,{onClick:i,children:u.jsx("img",{src:"/architecture/home/eye.svg",alt:"eye-icon"})})]}),u.jsxs(d5,{children:[u.jsx(p5,{onClick:r,children:"prev"}),u.jsx(f5,{onClick:n,children:"next"})]})]})})})},m5=S.div`
  background: var(--color-yellow);
  width: 100vw;
  height: 50px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: var(--color-black);
    font-family: "Fixel Semi-Bold", serif;
    font-size: 32px;
  }

`,g5=()=>{const e=hn();return u.jsx(u.Fragment,{children:window.innerWidth<768&&u.jsx(m5,{onClick:()=>e("/architecture/contacts"),children:u.jsx("p",{children:"Contact with us"})})})},v5=S.div`
  width: 88vw;
  margin: 170px auto;
  display: flex;
  justify-content: space-between;


  & > h2 {
    width: 33vw;

    color: var(--color-black);
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(2rem, 1.3178rem + 2.1831vw, 3.9375rem);
  }

  & div {
    width: 46vw;
  }

  & p {
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
    color: var(--color-black);

    &:last-child {
      margin-top: 1rem;

    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 70px auto;

    & > h2 {
      width: 100%;
    }

    & div {
      width: 100%;

    }

  }
`,x5=()=>u.jsxs(v5,{children:[u.jsx("h2",{children:"Trust is the essence of our craft"}),u.jsxs("div",{children:[u.jsx("p",{children:"At Tedo ArtLine Creations, we find inspiration in the human experience of space. We strive to forge a seamless bond between individuals and the environments they inhabit."}),u.jsx("p",{children:"With each project, we blend pragmatism with ingenuity to sculpt spaces that narrate tales and evoke emotions, all while prioritizing your unique vision and needs."})]})]}),w5=S.div`
  height: 36vw;
  width: 100vw;
  border: 4px solid var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 1500px;
    width: 85vw;
  }
`,y5=S.div`
  width: 93vw;

`,wn=S(mt)`
  width: 100%;
  height: 26vw;
  position: relative;

  & > img {
    width: 100%;
  }

  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
  }

  &:hover:after {
    opacity: 0.6;
  }
`,Gn=S.div`
  height: 140px;
  width: 140px;
  background: var(--color-black);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fixel Light-Italic",serif;
  font-size: 28px;
  text-align: center;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--color-white);

  ${wn}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`,S5=()=>{const e=hn();return u.jsx(w5,{children:u.jsx(y5,{children:u.jsxs(Hi,{slidesPerView:3,loop:!0,children:[u.jsxs(wn,{children:[u.jsx("img",{src:"/architecture/home/solution-1.webp",alt:"iamge"}),u.jsx(Gn,{onClick:()=>e("/architecture/project1"),children:"See project"})]}),u.jsxs(wn,{children:[u.jsx("img",{src:"/architecture/home/solution-2.webp",alt:"iamge"}),u.jsx(Gn,{onClick:()=>e("/architecture/project1"),children:"See project"})]}),u.jsxs(wn,{children:[u.jsx("img",{src:"/architecture/home/solution-3.webp",alt:"iamge"}),u.jsx(Gn,{onClick:()=>e("/architecture/project1"),children:"See project"})]}),u.jsxs(wn,{children:[u.jsx("img",{src:"/architecture/home/solution-1.webp",alt:"iamge"}),u.jsx(Gn,{onClick:()=>e("/architecture/project1"),children:"See project"})]}),u.jsxs(wn,{children:[u.jsx("img",{src:"/architecture/home/solution-2.webp",alt:"iamge"}),u.jsx(Gn,{onClick:()=>e("/architecture/project1"),children:"See project"})]}),u.jsxs(wn,{children:[u.jsx("img",{src:"/architecture/home/solution-3.webp",alt:"iamge"}),u.jsx(Gn,{onClick:()=>e("/architecture/project1"),children:"See project"})]})]})})})},b5=S.div`
  width: 1500px;
  margin: 100px auto 0;
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 1505px) {
    width: 1200px;
    height: 800px;
  }

  @media (max-width: 1205px) {
    width: 100vw;
    height: 65vw;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 178fr 178fr 681fr;

    height: 300vw;
  }
`,xs=S.div`
  background: url(${e=>e.src}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: 0.5s;

  &:hover {
    background: url(${e=>e.active}) center center no-repeat;
    background-size: cover;

  }

  @media (max-width: 768px) {
    
  }
`,C5=S.div`
  grid-row: span 2;
  background: url(${e=>e.src}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: 0.5s;

  @media (max-width: 768px) {
    grid-row: auto;
    grid-column: span 2;
    order: 5;

  }

`,j5=()=>u.jsxs(b5,{children:[u.jsx(xs,{src:"/architecture/home/building/image-1.webp",active:"/architecture/home/building/image-active-1.webp"}),u.jsx(xs,{src:"/architecture/home/building/image-2.webp",active:"/architecture/home/building/image-active-2.webp"}),u.jsx(C5,{src:"/architecture/home/building/image-5.webp",active:"/architecture/home/building/image-5.webp"}),u.jsx(xs,{src:"/architecture/home/building/image-3.webp",active:"/architecture/home/building/image-active-3.webp"}),u.jsx(xs,{src:"/architecture/home/building/image-4.webp",active:"/architecture/home/building/image-active-4.webp"})]}),k5=S.div`
  position: relative;
  width: 100vw;
  height: 1500px;
  background: var(--color-black);
  margin-top: 150px;
  

  @media (max-width: 1505px) {
    height: 1200px;
  }

  @media (max-width: 1205px) {
    height: 1300px;
  }
  @media (max-width: 900px) {
    height: 1100px;
  }

  @media (max-width: 768px) {
    height: 350vw;
  }
`,E5=S.div`
  width: 78vw;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  z-index: 3;

  & > h2 {
    width: 50%;
    font-size: clamp(3.125rem, 1.4745rem + 5.2817vw, 7.8125rem);
    font-family: "Fixel Extra-Bold", serif;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    top: 10%;

    & img {
      width: 50px;
    }
  }
`,T5=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;

  & p {
    width: 100%;
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);

    & > span {
      font-family: "Fixel Semi-Bold", serif;
      font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
      color: var(--color-yellow);
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
  }
`,P5=S.img`
  position: absolute;
  bottom: 5%;
  left: 0;

  @media (max-width: 1500px) {
    display: none;
  }
`,$5=S.img`
  position: absolute;
  top: 10%;
  left: 0;

  @media (max-width: 1500px) {

    display: none;
  }
`,L5=S.img`
  position: absolute;
  top: 25%;
  right: 0;

  @media (max-width: 1500px) {
    display: none;
  }
`,z5=({id:e})=>u.jsxs(k5,{id:e,children:[u.jsxs(E5,{children:[u.jsxs("h2",{children:["Building ",u.jsx("img",{src:"/architecture/ui/yellow-arrow.svg",alt:"arrow"})]}),u.jsxs(T5,{children:[u.jsxs("p",{children:["From design to implementation: our team will provide you with the ",u.jsx("span",{children:"high-quality"})," construction of your dream."]}),u.jsxs("p",{children:["We offer an ",u.jsx("span",{children:"individual approach"})," to each project and use only the best materials and technologies."]})]})]}),u.jsx(j5,{}),u.jsx(P5,{src:"/architecture/home/line-1.svg",alt:"icon"}),u.jsx($5,{src:"/architecture/home/line-2.svg",alt:"icon"}),u.jsx(L5,{src:"/architecture/home/line-3.svg",alt:"icon"})]}),F5=S.div`
  color: var(--color-black);
  margin-top: 100px;
`,tl=S.div`
  overflow: hidden;
  width: 100%;
  padding: 30px 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-bottom: 4px solid var(--color-black);
  margin-top: 30px;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;

  &:hover {
    border-bottom: 4px solid var(--color-yellow);
    background: var(--color-black);

    & h3 {
      color: var(--color-white);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 5px 0;

  }

  ${e=>e.active==="true"&&U`
    padding: 30px;
    border-bottom: 4px solid var(--color-yellow);
    background: var(--color-black);
  `}
`,nl=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    color: var(--color-black);
    font-size: clamp(1.3125rem, 1.0704rem + 0.7746vw, 2rem);
    transition: color 0.3s;
  }
  

  ${e=>e.active==="true"&&U`
    & > h3 {
      color: var(--color-white);
    }
  `}
`,rl=S.div`
  height: 50px;
  width: 50px;
  background: url("/architecture/home/arrow-down.svg");
  background-size: cover;
  transition: transform 0.3s;

  ${e=>e.active==="true"&&U`
    transform: rotate(180deg);
  `}
`,il=S.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, height 0.3s ease-in-out;

  ${e=>e.active==="true"&&U`
    max-height: 1000px;
    height: auto;
    padding-bottom: 1rem;
  `}
  & > p {
    font-size: clamp(1rem, 0.8239rem + 0.5634vw, 1.5rem);
    color: var(--color-white);
  }
`,Ep=()=>{const[e,t]=k.useState(null),n=r=>{t(e===r?null:r)};return u.jsxs(F5,{children:[u.jsxs(tl,{onClick:()=>n(1),active:e===1?"true":"false",children:[u.jsxs(nl,{active:e===1?"true":"false",children:[u.jsx("h3",{children:"Landscape planning"}),u.jsx(rl,{active:e===1?"true":"false"})]}),u.jsxs(il,{active:e===1?"true":"false",children:[u.jsx("p",{children:"Efficient utilization of space and sustainability are at the heart of our ethos at ArtLine Creations."}),u.jsx("p",{children:"We specialize in optimizing every inch of your environment while championing eco-friendly practices."}),u.jsx("p",{children:"Our designs prioritize functionality and environmental consciousness, ensuring that your space not only looks remarkable but also contributes positively to the planet."})]})]}),u.jsxs(tl,{onClick:()=>n(2),active:e===2?"true":"false",children:[u.jsxs(nl,{active:e===2?"true":"false",children:[u.jsx("h3",{children:"Creating hydrospaces"}),u.jsx(rl,{active:e===2?"true":"false"})]}),u.jsxs(il,{active:e===2?"true":"false",children:[u.jsx("p",{children:"Efficient utilization of space and sustainability are at the heart of our ethos at ArtLine Creations."}),u.jsx("p",{children:"We specialize in optimizing every inch of your environment while championing eco-friendly practices."}),u.jsx("p",{children:"Our designs prioritize functionality and environmental consciousness, ensuring that your space not only looks remarkable but also contributes positively to the planet."})]})]}),u.jsxs(tl,{onClick:()=>n(3),active:e===3?"true":"false",children:[u.jsxs(nl,{active:e===3?"true":"false",children:[u.jsx("h3",{children:"Design and landscaping of the yard"}),u.jsx(rl,{active:e===3?"true":"false"})]}),u.jsxs(il,{active:e===3?"true":"false",children:[u.jsx("p",{children:"Efficient utilization of space and sustainability are at the heart of our ethos at ArtLine Creations."}),u.jsx("p",{children:"We specialize in optimizing every inch of your environment while championing eco-friendly practices."}),u.jsx("p",{children:"Our designs prioritize functionality and environmental consciousness, ensuring that your space not only looks remarkable but also contributes positively to the planet."})]})]})]})},O5=S.div`
  position: relative;
  width: 100vw;

`,I5=S.div`
  padding-top: 200px;
  margin: 0 auto;
  width: 83vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 90vw;
  }
  @media (max-width: 900px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    width: 87vw;
    flex-direction: column;
    margin-top: 50px;
  }
  @media (max-width: 450px) {
    margin-top: 140px;
  }
`,Tp=S.div`
  width: 80%;

  & > h2 {
    font-size: clamp(3.6875rem, 2.235rem + 4.6479vw, 7.8125rem);
    color: var(--color-black);
    font-family: "Fixel Extra-Bold", serif;
  }

  @media (max-width: 768px) {
    width: 87vw;
  }
`,Pp=S.div`
  width: 42vw;


  @media (max-width: 1000px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    position: relative;
    height: 110vw;
    width: 83vw;
  }
`,$p=S.div`
  width: 100%;

  & > p {
    color: var(--color-black);
    font-size: 28px;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 65vw;
    height: 60vw;


    & > p {
      color: var(--color-white);
      font-family: "Fixel Light",serif;
      font-size: clamp(1.625rem, 0.6324rem + 4.4118vw, 2.75rem);
    }
  }

  @media (max-width: 420px) {
    height: 40vw;
    width: 85%;
  
  }
`,Lp=S.div`
  margin-top: 100px;
  position: relative;
  width: 100%;
  height: 40vw;
  background-image: url('/architecture/home/landscape-img-active.webp');
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/architecture/home/landscape-img.webp');
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover:before {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    height: 50vw;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 87vw;
    height: 100%;

    &:before {
      opacity: 1;
    }
  }
`,N5=S.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }

`,M5=S.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }
`,R5=S.img`
  position: absolute;
  right: 0;
  bottom: 30%;
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }
`,zp=S.div`
  width: 580px;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`,_5=({id:e})=>u.jsxs(O5,{id:e,children:[u.jsx(I5,{children:window.innerWidth>768?u.jsxs(u.Fragment,{children:[u.jsxs(Tp,{children:[u.jsxs("h2",{children:["Landscape Design ",u.jsx("img",{src:"/architecture/ui/yellow-arrow.svg",alt:"arrow-icon"})]}),u.jsx(zp,{children:u.jsx(Ep,{})})]}),u.jsxs(Pp,{children:[u.jsxs($p,{children:[u.jsx("p",{children:"Our landscape designs reflect your desires and style."}),u.jsx("p",{children:"We develop exquisite designs for your yard, paying special attention to aesthetics and functionality."})]}),u.jsx(Lp,{})]})]}):u.jsxs(u.Fragment,{children:[u.jsx(Tp,{children:u.jsxs("h2",{children:["Landscape Design ",u.jsx("img",{src:"/architecture/ui/yellow-arrow.svg",alt:"arrow-icon"})]})}),u.jsxs(Pp,{children:[u.jsxs($p,{children:[u.jsx("p",{children:"Our landscape designs reflect your desires and style."}),u.jsx("p",{children:"We develop exquisite designs for your yard, paying special attention to aesthetics and functionality."})]}),u.jsx(Lp,{})]}),u.jsx(zp,{children:u.jsx(Ep,{})})]})}),u.jsx(N5,{src:"/architecture/home/landscape-line-1.svg",alt:"line"}),u.jsx(M5,{src:"/architecture/home/landscape-line-2.svg",alt:"line"}),u.jsx(R5,{src:"/architecture/home/landscape-line-3.svg",alt:"line"})]}),A5=S.div`
  margin-top: 100px;
  background: var(--color-black);
  width: 100vw;
  height: 80vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 250px;
    height: 120vw;
  }

  @media (max-width: 500px) {
    height: 180vw;
  }
`,D5=S.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 46vw;
  height: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/architecture/home/touch-img.webp") center center no-repeat;
  background-size: cover;
  z-index: 10;

  @media (max-width: 768px) {
    width: 72vw;
    height: 100vw;
  }

  @media (max-width: 500px) {
    width: 82vw;
    height: 120vw;
  }
`,B5=S.button`
  width: 22vw;
  height: 5.2vw;

  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  border: 3px solid var(--color-white);
  border-radius: 200px;
  background: transparent;
  color: var(--color-yellow);
  font-size: clamp(1.1875rem, -0.0625rem + 2.6042vw, 3.0625rem);
  font-family: "Fixel Light", serif;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  padding-top: 6px;

  &:hover {
    background: var(--color-yellow);
    border: 3px solid var(--color-yellow);
    color: var(--color-black);
    font-family: "Fixel Semi-Bold", serif;
  }

  @media (max-width: 768px) {
    width: 40vw;
    height: 10vw;
  }

  @media (max-width: 500px) {
    width: 60vw;
    height: 20vw;
  }
`,V5=S.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  color: var(--color-white);
  font-size: clamp(1.875rem, -0.5833rem + 5.1215vw, 5.5625rem);
  z-index: 12;
  text-align: justify;

  @media (max-width: 768px) {
    top: 33%;
  }
`,U5=()=>{const e=hn();return u.jsxs(A5,{children:[u.jsx(D5,{children:u.jsx(B5,{onClick:()=>e("/architecture/contacts"),children:"Get in touch"})}),u.jsx(V5,{children:"By immersing ourselves in your space, we gain invaluable insight into your vision, enabling us to conceptualize and craft the ideal kitchen tailored to your desires."})]})},W5=S.div`
  position: relative;
  width: 100vw;
  height: 1500px;
  
  @media (max-width: 1200px) {
    height: 1200px;
  }

  @media (max-width: 768px) {
    height: 1400px;
  }
`,H5=S.div`
  position: absolute;
  left: 50%;
  top: 400px;
  transform: translate(-50%, -50%);
  width: 1000px;

  & > h2 {
    font-size: clamp(3.6875rem, 2.235rem + 4.6479vw, 7.8125rem);
    font-family: "Fixel Extra-Bold", serif;
    color: var(--color-black);

    display: flex;
    align-items: flex-start;
    gap: 1rem;


  }

  & > p {
    margin-top: -20px;
    font-family: "Fixel Light-Italic", serif;
    color: var(--color-black);
    font-size: clamp(1.25rem, 1.162rem + 0.2817vw, 1.5rem);

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    width: 750px;
    top: 300px;
  }

  @media (max-width: 900px) {
    width: 650px;
  }

  @media (max-width: 768px) {
    top: 100px;
    width: 90vw;
    margin-top: 50px;
    & img {
      display: none;
    }
  }
`,G5=S.div`
  display: flex;
  justify-content: space-between;
  width: 98vw;

  position: absolute;
  left: 50%;
  top: 850px;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    top: 550px;
  }

  @media (max-width: 768px) {
    top: 650px;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
`,K5=S.img`
  width: 29.2vw;

  @media (max-width: 768px) {
    width: 77vw;
    max-width: 300px;
  }
`,Y5=S.img`
  width: 18.3vw;

  @media (max-width: 768px) {
    width: 49vw;
    max-width: 250px;
  }
`,Q5=S.div`
  width: 30.5vw;
  position: relative;

  & > img {
    width: 30.5vw;
    position: absolute;
    top: 0;
    left: 0;
  }


  @media (max-width: 768px) {
    width: 81vw;
    max-width: 320px;

    & > img {
      width: 81vw;
      max-width: 320px;
    }
  }
`,X5=S.div`
  z-index: 15;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid var(--color-yellow);
  border-radius: 100%;
  width: clamp(3.9375rem, 2.507rem + 4.5775vw, 8rem);
  height: clamp(3.9375rem, 2.507rem + 4.5775vw, 8rem);
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.6s;

  & > p {
    white-space: nowrap;
    font-family: "Fixel Light", serif;
    font-size: clamp(1.5rem, 0.9278rem + 1.831vw, 3.125rem);
    transition: 1s;
  }


  &:hover {
    border: 11px solid var(--color-yellow);

    & > p {
      font-family: "Fixel Semi-Bold Italic", serif;
    }
  }
  
  @media(max-width: 768px){
    top: 200px;
    
  }
`,q5=S.img`
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`,J5=S.img`
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`,Z5=({id:e})=>{const t=hn();return u.jsxs(W5,{id:e,children:[u.jsxs(H5,{children:[u.jsxs("h2",{children:["Interior Design ",u.jsx("img",{src:"/architecture/ui/yellow-arrow.svg",alt:"arrow"})]}),u.jsx("p",{children:"Explore Your Space with Artline Design"})]}),u.jsxs(G5,{children:[u.jsx(K5,{src:"/architecture/home/interior/grey-circle.svg",alt:"circle"}),u.jsx(Y5,{src:"/architecture/home/interior/yellow-circle.svg",alt:"circle"}),u.jsxs(Q5,{children:[u.jsx("img",{src:"/architecture/home/interior/black-circle.svg",alt:"circle"}),u.jsx(X5,{onClick:()=>t("/architecture/contacts"),children:u.jsx("p",{children:"Try new"})})]})]}),u.jsx(q5,{src:"/architecture/home/interior/line-1.svg",alt:"line"}),u.jsx(J5,{src:"/architecture/home/interior/line-2.svg",alt:"line"})]})},ej=S.div`
  width: 87vw;
  border: 4px solid var(--color-black);
  margin: auto;
`,tj=S.div`


  width: 100%;
  height: 200vw;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`,nj=S.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

`,yn=S.div`
  width: 74vw;
  height: 67vw;
  position: relative;


  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
  }

  &:hover:after {
    opacity: 0.6;
  }
`,Kn=S.img`
  width: 100%;
  
`,Yn=S.div`
  height: 200px;
  width: 200px;
  background: var(--color-black);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fixel Light-Italic",serif;
  font-size: 28px;
  text-align: center;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--color-white);

  ${yn}:hover & {
    opacity: 1;
    cursor: pointer;
  }
  
  @media(max-width: 500px){
    height: 140px;
    width: 140px;
    font-size: 22px;
    
  }
`,rj=()=>{const e=_n(),t=n=>{e(n),window.scrollTo(0,0)};return u.jsx(ej,{children:u.jsx(tj,{children:u.jsxs(nj,{children:[u.jsxs(yn,{children:[u.jsx(Kn,{src:"/architecture/home/solution-1.webp",alt:"image"}),u.jsx(Yn,{onClick:()=>t("/architecture/project1"),children:"See project"})]}),u.jsxs(yn,{children:[u.jsx(Kn,{src:"/architecture/home/solution-2.webp",alt:"image"}),u.jsx(Yn,{onClick:()=>t("/architecture/project1"),children:"See project"})]}),u.jsxs(yn,{children:[u.jsx(Kn,{src:"/architecture/home/solution-3.webp",alt:"image"}),u.jsx(Yn,{onClick:()=>t("/architecture/project1"),children:"See project"})]}),u.jsxs(yn,{children:[u.jsx(Kn,{src:"/architecture/home/solution-1.webp",alt:"image"}),u.jsx(Yn,{onClick:()=>t("/architecture/project1"),children:"See project"})]}),u.jsxs(yn,{children:[u.jsx(Kn,{src:"/architecture/home/solution-2.webp",alt:"image"}),u.jsx(Yn,{onClick:()=>t("/architecture/project1"),children:"See project"})]}),u.jsxs(yn,{children:[u.jsx(Kn,{src:"/architecture/home/solution-3.webp",alt:"image"}),u.jsx(Yn,{onClick:()=>t("/architecture/project1"),children:"See project"})]})]})})})},ij=S.div`

`,sj=()=>{const e=pn();return k.useEffect(()=>{const n=new URLSearchParams(e.search).get("section");if(n){const r=document.getElementById(n);r==null||r.scrollIntoView({behavior:"smooth"})}},[e]),u.jsxs(ij,{children:[u.jsx(h5,{}),u.jsx(g5,{}),u.jsx(x5,{}),window.innerWidth<=768?u.jsx(rj,{}):u.jsx(S5,{}),u.jsx(z5,{id:"building"}),u.jsx(_5,{id:"landscape-design"}),u.jsx(U5,{}),u.jsx(Z5,{id:"interior-design"})]})},oj=S.div`
  width: 100%;
  display: grid;
  row-gap: 10px;
  column-gap: 1rem;
  transition: 1s;
  grid-template-rows: auto 1fr;


  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ${e=>e.designer==="interior"&&U`
    grid-template-columns: 1.5fr 1fr 1fr;
  `}

  ${e=>e.designer==="landscape"&&U`
    grid-template-columns: 1fr 1.5fr 1fr;
  `}

  ${e=>e.designer==="building"&&U`
    grid-template-columns: 1fr 1fr 1.5fr;
  `}

  
`,aj=S.p`
  grid-column: span 3;
  color: var(--color-white);
  font-size: clamp(2.125rem, 1.9269rem + 0.6338vw, 2.6875rem);
  font-family: "Fixel Semi-Bold", serif;
  margin-top: 100px;
`,sl=S.div`
  position: relative;
  width: auto;
  height: 350px;
  background: url(${e=>e.background}) center center no-repeat;
  border: 2px solid var(--color-white);

  &:before {
    transition: 1s;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-yellow);
    opacity: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Fixel Light", serif;
    font-size: clamp(1.25rem, 1.0299rem + 0.7042vw, 1.875rem);
    width: 80%;
    text-align: center;
    z-index: 1;
  }

  & > h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(2.875rem, 2.4349rem + 1.4085vw, 4.125rem);
    font-family: "Fixel Semi-Bold", serif;
    color: var(--color-black);
    opacity: 0;
    transition: 1s;
    
  }


  @media(max-width: 768px) {
    background-size: cover;
    height: 140px;
    width: 80%;
  }


  ${e=>e.active==="true"&&U`
    width: 100%;

    &:before {
      opacity: 1;
    }

    &:after {
      opacity: 0;
    }
    
    & > h3 {
    opacity: 1;
    }

    @media(max-width: 768px) {
      width: 100%;
    }
  `}
`,lj=()=>{const[e,t]=k.useState("building");return u.jsxs(oj,{designer:e,children:[u.jsx(aj,{children:"Are you looking for..?"}),u.jsx(sl,{background:"/architecture/contact/interior.svg",onClick:()=>t("interior"),active:e==="interior"?"true":"false",children:e==="interior"?u.jsx("h3",{children:"Building"}):u.jsx("p",{children:"Interior Design"})}),u.jsx(sl,{background:"/architecture/contact/landscape.svg",onClick:()=>t("landscape"),active:e==="landscape"?"true":"false",children:e==="landscape"?u.jsx("h3",{children:"Building"}):u.jsx("p",{children:"Landscape Design"})}),u.jsx(sl,{background:"/architecture/contact/building.svg",onClick:()=>t("building"),active:e==="building"?"true":"false",children:e==="building"?u.jsx("h3",{children:"Building"}):u.jsx("p",{children:"Building Design"})})]})},uj=S.label`
  font-size: clamp(2.125rem, 1.9489rem + 0.5634vw, 2.625rem);
  margin-bottom: 20px;
`,Qr=({children:e})=>u.jsx(uj,{children:e}),cj=S.input`
  height: 80px;
  outline: none;
  border: 2.5px solid var(--color-white);
  background: transparent;
  padding: 20px;
  font-size: 24px;
  font-family: "Fixel Light", serif;
  margin-bottom: 40px;
  
  @media(max-width: 768px){
    height: 70px;
    
  }
`,ws=({type:e,onChange:t,value:n,placeholder:r})=>u.jsx(cj,{type:e,onChange:i=>t(i.target.value),placeholder:r,value:n}),dj=S.textarea`
  height: 180px;
  outline: none;
  border: 2.5px solid var(--color-white);
  background: transparent;
  padding: 20px;
  font-size: 24px;
  font-family: "Fixel Light", serif;
  margin-bottom: 40px;
`,pj=({onChange:e,value:t,placeholder:n})=>u.jsx(dj,{onChange:r=>e(r.target.value),placeholder:n,value:t});var fj={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const hj=S.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,Xr=S.div`
  display: flex;
  flex-direction: column;
`,mj=S.button`
  width: 540px;
  height: 110px;
  background: var(--color-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  transition: 0.5s;

  & > p {
    font-size: clamp(2.125rem, 1.5968rem + 1.6901vw, 3.625rem);
    font-family: "Fixel Extra-Bold", serif;
    padding-top: 6px;

  }

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background: var(--color-yellow);
    color: var(--color-black);

    & > p {
      color: var(--color-black);
    }

    & svg {
      stroke: var(--color-black);
    }
  }

  ${e=>e.active==="true"&&U`
    background: var(--color-yellow);
    color: var(--color-black);
  `}
`,gj=()=>{const[e,t]=k.useState(""),[n,r]=k.useState(""),[i,s]=k.useState(""),[o,a]=k.useState(""),[l,c]=k.useState(""),[d,f]=k.useState(!1),[m,x]=k.useState(!1),v=async w=>{w.preventDefault();const b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(e===""){gt.error("Please provide your name");return}if(n===""){gt.error("Please provide your surname");return}if(i===""){gt.error("Please provide your phone");return}if(i===""){gt.error("Please provide your email");return}if(!b.test(i)){gt.error("Please provide your real email");return}const p={name:`${e} ${n}`,email:i,comment:l},h=fj.VITE_CONTACT_URL;try{(await fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).ok?(gt.success("We received your message, wait for a reply"),f(!0)):console.error("Failed to send data to the server")}catch(g){console.error("Error submitting data:",g)}finally{t(""),r(""),s(""),c(""),a("")}};return u.jsxs(hj,{children:[u.jsxs(Xr,{children:[u.jsx(Qr,{children:"First Name"}),u.jsx(ws,{type:"text",value:e,onChange:w=>t(w),placeholder:"First Name"})]}),u.jsxs(Xr,{children:[u.jsx(Qr,{children:"Second Name"}),u.jsx(ws,{type:"text",value:n,onChange:w=>r(w),placeholder:"Second Name"})]}),u.jsxs(Xr,{children:[u.jsx(Qr,{children:"Email"}),u.jsx(ws,{type:"email",value:i,onChange:w=>s(w),placeholder:"example@gmail.com"})]}),u.jsxs(Xr,{children:[u.jsx(Qr,{children:"Phone Number"}),u.jsx(ws,{type:"text",value:o,onChange:w=>a(w),placeholder:"xxxxxxxxxxx"})]}),u.jsxs(Xr,{children:[u.jsx(Qr,{children:"Your Message"}),u.jsx(pj,{value:l,onChange:w=>c(w),placeholder:"Hello, I would like to get in touch for more information about your service. I would appreciate the opportunity to discuss the details."})]}),u.jsxs(mj,{onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),disabled:d,onClick:w=>v(w),active:d?"true":"false",children:[u.jsx("p",{children:"Send Enqury"}),m?u.jsx("img",{src:"/architecture/contact/arrow-up-right-dark.svg",alt:"arrow"}):u.jsx("img",{src:"/architecture/contact/arrow-up-right.svg",alt:"arrow"})]})]})},vj=S.div`
  width: 100vw;
  position: relative;
  background: var(--color-black);
  z-index: 1;
`,xj=S.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;
  column-gap: 4rem;
  width: 88vw;
  height: auto;
  margin: 100px auto 0;
  padding: 200px 0 100px;
  position: relative;
  

  @media(max-width: 1300px){
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 768px) {
    padding: 120px 0;
    margin: 30px auto 0;

  }
`,wj=S.h1`
  font-size: clamp(3.375rem, 1.8125rem + 5vw, 7.8125rem);
  font-family: "Fixel Extra-Bold", serif;
  grid-column: span 2;
`,yj=S.img`
  position: absolute;
  left: 0;
  top: 10vh;
  z-index: -1;
`,Sj=S.img`
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: -1;

  @media(max-width: 768px){
    display: none;
  }
`,bj=()=>u.jsxs(vj,{children:[u.jsxs(xj,{children:[u.jsx(wj,{children:"We are glad to see you"}),u.jsx(lj,{}),u.jsx(gj,{})]}),u.jsx(yj,{src:"/architecture/contact/line.svg",alt:"icon"}),u.jsx(Sj,{src:"/architecture/contact/bg-img.svg",alt:"image"})]}),Cj=S.div`
  text-align: center;
  margin: 250px auto 0;

  & > h2 {
    font-family: "Fixel Semi-Bold Italic", serif;
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-black);
  }


  & > h1 {
    text-shadow: 6px 1px var(--color-yellow);
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-black);
  }
  
  @media(max-width: 768px){
    margin-top: 150px;
  }
`,jj=()=>u.jsxs(Cj,{children:[u.jsx("h2",{children:"We Are"}),u.jsx("h1",{children:"Tedo Artline"})]}),kj=S.div`
  width: 90vw;
  margin: 15vw auto 0;
  overflow: hidden;

  & > img {
    width: 100%;
  }
  
  @media(max-width: 768px){
    width: 100vw;

    & > img {
      width: 167vw;
      margin-left: -33.5vw;
    }
  }
`,Ej=()=>u.jsx(kj,{children:u.jsx("img",{src:"/architecture/about/about-bg.svg",alt:"image"})}),Tj=S.div`
  width: 100vw;
  height: auto;

  display: grid;
  grid-template-rows: 535px 535px;
  grid-template-columns: 1fr 1fr;
  background: var(--color-black);

  & h3 {
    font-size: clamp(2.3125rem, 1.8944rem + 1.338vw, 3.5rem);
    padding-bottom: 24px;
    font-family: "Fixel Semi-Bold Italic", serif;
  }

  & p {
    font-family: "Fixel Light", serif;
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
    padding-bottom: 16px;
  }

  @media (max-width: 768px) {
    grid-template-rows: 350px 350px 350px;
    grid-template-columns: 1fr;

    & h3 {
      text-align: center;
    }
    
  }

`,Pj=S.div`
  position: relative;
  border-right: 12px solid var(--color-yellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    width: 72%;
  }

  @media (max-width: 768px) {
    border: none;
    border-bottom: 10px solid var(--color-yellow);

    & > div {
      width: 82%;
    }
  }
`,$j=S.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    width: 72%;
  }

  @media (max-width: 768px) {
    border: none;
    border-bottom: 10px solid var(--color-yellow);


    & > div {
      width: 82%;
    }
  }
`,Lj=S.div`
  position: relative;
  grid-column: span 2;
  border-top: 12px solid var(--color-yellow);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 78%;
    display: flex;
    justify-content: space-between;

    & > div {
      width: 66%;
    }
  }

  @media (max-width: 768px) {
    grid-column: auto;
    border: none;


    & > div {
      width: 82%;
      flex-direction: column;

      & > div {
        width: 100%;
      }
    }
  }
`,zj=S.img`
  position: absolute;
  bottom: 15%;
  left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,Fj=S.img`
  position: absolute;
  bottom: 0;
  left: 25%;

  @media (max-width: 768px) {
    display: none;
  }
`,Oj=S.img`
  position: absolute;
  top: 0;
  right: 20%;

  @media (max-width: 768px) {
      display: none;
  }
`,Ij=()=>u.jsxs(Tj,{children:[u.jsxs(Pj,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Building"}),u.jsxs("div",{children:[u.jsx("p",{children:"Transforming spaces into harmonious environments that reflect your style and vision."}),u.jsx("p",{children:"Maximizing functionality while enhancing aesthetic appeal."}),u.jsx("p",{children:"Collaborating closely with clients to tailor designs to their unique needs and preferences."})]})]}),u.jsx(zj,{src:"/architecture/about/line-1.svg",alt:"line-image"})]}),u.jsxs($j,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Interior Design"}),u.jsxs("div",{children:[u.jsx("p",{children:"Transforming spaces into harmonious environments that reflect your style and vision."}),u.jsx("p",{children:"Maximizing functionality while enhancing aesthetic appeal."}),u.jsx("p",{children:" Collaborating closely with clients to tailor designs to their unique needs and preferences."})]})]}),u.jsx(Oj,{src:"/architecture/about/line-3.svg",alt:"line-image"})]}),u.jsxs(Lj,{children:[u.jsxs("div",{children:[u.jsxs("h3",{children:["Landscape ",u.jsx("br",{}),"Design"]}),u.jsxs("div",{children:[u.jsx("p",{children:"Creating outdoor spaces that inspire and delight."}),u.jsx("p",{children:"Balancing natural elements with architectural features for a harmonious blend."}),u.jsx("p",{children:"Designing sustainable landscapes that thrive in their surroundings."})]})]}),u.jsx(Fj,{src:"/architecture/about/line-2.svg",alt:"line-image"})]})]}),Nj=S.div`

`,Mj=S.p`
  width: 90vw;
  margin: 250px auto 100px;
  font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
  color: var(--color-black);
  font-family: "Fixel Extra-Bold", serif;
  text-align: justify;

  & > span {
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-grey);
  }
`,Rj=()=>u.jsxs(Nj,{children:[u.jsx(jj,{}),u.jsx(Ej,{}),u.jsxs(Mj,{children:["Crafting Experiences Across ",u.jsx("span",{children:"Digital"})," and ",u.jsx("span",{children:"Physical Realms"})]}),u.jsx(Ij,{})]}),_j=S.div`
  margin: 230px auto 0;
  width: 85vw;
  display: flex;
  justify-content: space-between;

  
  @media(max-width: 1000px){
    margin-top: 150px;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;

    
  }
`,Aj=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`,Dj=S.div`

  & > h2 {
    font-size: clamp(1.875rem, 0.6206rem + 4.0141vw, 5.4375rem);
    color: var(--color-grey);
    font-family: "Fixel Extra-Bold",serif;
    text-transform: uppercase;
  }

  & > h1 {
    margin-top: 2rem;
    font-family: "Fixel Extra-Bold",serif;
    font-size: clamp(4rem, 1.4032rem + 8.3099vw, 11.375rem);
    color: var(--color-black);
    line-height: 0.9;
  }
  
  @media(max-width: 768px){
    & > h1 {
      margin-top: 1rem;
    }
  }
`,Bj=S.div`

  & > div {
    width: 280px;
    height: 65px;
    background: var(--color-yellow);
    margin-bottom: 2rem;
  }

  & > p {
    font-size: clamp(0.875rem, 0.5229rem + 1.1268vw, 1.875rem);
    color: var(--color-black);
    width: 60%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    
    & > div {
      width: 108px;
      height: 30px;
      margin-bottom: 1rem;
      margin-top: 8rem;
    }

    & > p {
      width: 70%;
    }
  }
`,Vj=S.img`
  width: 34vw;
  
  @media(max-width: 768px){
    margin-top: 2rem;
    width: 100%;
    align-self: center;
  }
`,Uj=()=>u.jsxs(_j,{children:[u.jsxs(Aj,{children:[u.jsxs(Dj,{children:[u.jsx("h2",{children:"Time TO meet your"}),u.jsx("h1",{children:"Mountain Oasis"})]}),u.jsxs(Bj,{children:[u.jsx("div",{}),u.jsx("p",{children:"combination of modern design and harmony with nature, located in a picturesque area of the Carpathians"})]})]}),u.jsx(Vj,{src:"/architecture/project1/welcome-image.svg",alt:"image"})]}),Wj=S.div`
  margin-top: 150px;
  padding: 250px 230px;
  background: var(--color-black);
  width: 100vw;
  
  column-gap: 9vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px 300px 300px;
  
  @media(max-width: 1300px){
    padding: 250px 80px;
    grid-template-columns: 1.4fr 1fr;
  }

  @media(max-width: 768px) {
    padding: 100px 24px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 150px 150px 150px;
    row-gap: 4rem;

  }
`,Hj=S.div`
  grid-row: span 3;
  
  & p{
    padding-bottom: 1rem;
    font-size: clamp(1.5625rem, 1.0123rem + 1.7606vw, 3.125rem);
    line-height: 1.4;
  }
  
  & span{
    font-size: clamp(1.5625rem, 1.0123rem + 1.7606vw, 3.125rem);
    font-family: "Fixel Semi-Bold",serif;
    color: var(--color-yellow);
  }

  @media(max-width: 768px) {
    grid-row: auto;
  
  }
`,ol=S.h3`
  font-family: "Fixel Extra-Bold",serif;
  color: var(--color-grey);
  font-size: clamp(2.6875rem, 1.9173rem + 2.4648vw, 4.875rem);
  line-height: 0.9;
  
  &>span{
    font-size: clamp(2.8125rem, 2.0423rem + 2.4648vw, 5rem);
    color: var(--color-yellow);
    font-family: "Fixel Extra-Bold",serif;
    line-height: 1.3;
  }
`,Gj=()=>u.jsxs(Wj,{children:[u.jsxs(Hj,{children:[u.jsxs("p",{children:["The ",u.jsx("span",{children:"Mountain Oasis"})," project is a combination of modern design and harmony with nature, located in a picturesque area of the Carpathians."]}),u.jsx("p",{children:"This house is designed for those who appreciate comfort and coziness, while enjoying the beauty of mountain views."})]}),u.jsxs(ol,{children:["Completion of construction:",u.jsx("br",{}),u.jsx("span",{children:"April 2024"})]}),u.jsxs(ol,{children:["Area of the house:",u.jsx("br",{}),u.jsx("span",{children:"150 м²"})]}),u.jsxs(ol,{children:["Location:",u.jsx("br",{}),u.jsx("span",{children:"Carpathians, Ukraine"})]})]}),Kj=S.div`
  width: 89vw;
  margin: 160px auto 0;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 50px;
  column-gap: 150px;
  
  @media(max-width: 950px){
    column-gap: 50px;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    width: 85vw;
  
  }
`,Yj=S.div`
  grid-column: span 2;
  
  & > h2 {
    font-size: clamp(3.0625rem, 1.39rem + 5.3521vw, 7.8125rem);
    font-family: "Fixel Extra-Bold", serif;
    color: var(--color-black);
  }

  & > h3 {
    font-size: 49px;
    font-family: "Fixel Extra-Bold", serif;
    color: var(--color-grey);
    display: none;
  }

  @media (max-width: 768px) {
    grid-column: auto;
    
    & > h3 {
      display: inline;
    }
  }

`,Qj=S.div`
  position: relative;
  width: 40vw;


  img {
    width: 100%;
    display: block;
  }

  &:hover::before {
    opacity: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    opacity: 1;
    transition: opacity 0.7s ease;
  }

  @media (max-width: 768px) {
    width: 85vw;
    max-width: 500px;
  
  }
  
`,Xj=S.p`
  align-self: end;

  & > p {
    margin-bottom: 1rem;
    color: var(--color-black);
    font-size: clamp(1.25rem, 0.8319rem + 1.338vw, 2.4375rem);
  }

  @media (max-width: 768px) {
    & > p {
      line-height: 1.6;
    }
  }
`,qj=()=>u.jsxs(Kj,{children:[u.jsxs(Yj,{children:[u.jsx("h2",{children:"Landscaping"}),u.jsx("h3",{children:"Mountain Oasis"})]}),u.jsx(Qj,{children:u.jsx("img",{src:"/architecture/project1/landscaping.svg",alt:"image"})}),u.jsxs(Xj,{children:[u.jsx("p",{children:"The surrounding area of the house is decorated in a minimalist style, with an emphasis on natural materials. "}),u.jsx("p",{children:"A beautiful garden with flowers, trees and bushes creates an atmosphere of coziness and harmony. "}),u.jsx("p",{children:"A large terrace with mountain views is an ideal place for outdoor recreation."})]})]}),Jj=S.div`
  margin-top: 180px;
  height: 46vw;
  width: 100vw;
  border: 5px solid var(--color-yellow);

  @media(max-width: 768px){
    height: 572px;
    margin-top: 100px;
    
  }
`,Zj=S(mt)`
  width: 100vw;
  height: 45.5vw;
  background: url(${e=>`/architecture/project1/swiper/${e.image}`}) no-repeat center center;
  background-size: cover;
  
  @media(max-width: 768px){
    height: 560px;
  }
`,ek=({images:e})=>u.jsx(Jj,{children:u.jsx(Hi,{slidesPerView:1,loop:!0,children:e.map((t,n)=>u.jsx(Zj,{image:t},n))})}),tk=S.div`
  margin: 100px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 92vw;

  
  &>h2{
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-black);
    font-family: "Fixel Extra-Bold",serif;
    
    &>span{
      font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
      color: var(--color-grey);
      font-family: "Fixel Extra-Bold",serif;

    }
  }
  
  &>p{
    color: var(--color-black);
    line-height: 1.5;
    font-size: clamp(1.6875rem, 1.3574rem + 1.0563vw, 2.625rem);
    
  }
  
  @media(max-width: 1100px){
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 2rem;
  }
`,nk=()=>u.jsxs(tk,{children:[u.jsxs("h2",{children:[u.jsx("span",{children:"The"}),u.jsx("br",{})," Achievement"]}),u.jsx("p",{children:"The Mountain Oasis project is an example of a successful combination of modern architecture and the natural beauty of the Carpathians. "})]}),rk=S.div`
  margin-bottom: 10rem;

`,ik=["photo_1_2024-05-30_11-38-02.jpg","photo_2_2024-05-30_11-38-02.jpg","photo_3_2024-05-30_11-38-02.jpg","photo_4_2024-05-30_11-38-02.jpg","photo_5_2024-05-30_11-38-02.jpg","photo_6_2024-05-30_11-38-02.jpg","photo_7_2024-05-30_11-38-02.jpg","photo_8_2024-05-30_11-38-02.jpg"],sk=()=>u.jsxs(rk,{children:[u.jsx(Uj,{}),u.jsx(Gj,{}),u.jsx(qj,{}),u.jsx(ek,{images:ik}),u.jsx(nk,{})]}),ok=S.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  &>div{
    border-radius: 28px;
    width: 48vw;
    height: 92vh;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(2rem, 1.3838rem + 1.9718vw, 3.75rem);
    color: var(--color-white);
    font-family: "Fixel Extra-Bold", serif;
    text-align: center;
  }
  
  
  
  @media(max-width: 768px){
    flex-direction: column;
    
    &>div{
      width: 90vw;
      height: 47vh;
    }
  }
`,ak=S.div`
  background: rgb(151, 71, 255);
  background: linear-gradient(135deg, rgba(151, 71, 255, 1) 0%, rgba(19, 68, 240, 1) 100%);
`,lk=S.div`
  background-image: linear-gradient(to right, rgba(185, 163, 121, 0.41), #b9a379),
  linear-gradient(to bottom, #E0E0DE, rgba(185, 163, 121, 0.59));
`,uk=()=>{const e=_n();return u.jsxs(ok,{children:[u.jsx(ak,{onClick:()=>e("/digital/home"),children:"Digital Designs"}),u.jsx(lk,{onClick:()=>e("/architecture/home"),children:"Architectural solutions"})]})},ck=()=>u.jsx(Ym,{children:u.jsxs(bg,{children:[u.jsx(qv,{children:u.jsxs(Wv,{children:[u.jsxs(_e,{element:u.jsx(hy,{}),children:[u.jsx(_e,{path:"digital/home",element:u.jsx(_2,{})}),u.jsx(_e,{path:"digital/partners",element:u.jsx(gC,{})}),u.jsx(_e,{path:"digital/contact",element:u.jsx(cC,{})}),u.jsx(_e,{path:"digital/about",element:u.jsx(jC,{})}),u.jsx(_e,{path:"digital/services/:id",element:u.jsx(rb,{})})]}),u.jsxs(_e,{element:u.jsx(s5,{}),children:[u.jsx(_e,{path:"architecture/home",element:u.jsx(sj,{})}),u.jsx(_e,{path:"architecture/contacts",element:u.jsx(bj,{})}),u.jsx(_e,{path:"architecture/about",element:u.jsx(Rj,{})}),u.jsx(_e,{path:"architecture/project1",element:u.jsx(sk,{})})]}),u.jsx(_e,{path:"*",element:u.jsx(uk,{})})]})}),u.jsx(iC,{})]})}),dk={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class ko{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||dk,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new ko(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new ko(this.logger,t)}}var wt=new ko;class Zo{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[t,...r])})}}function qr(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Fp(e){return e==null?"":""+e}function pk(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}const fk=/###/g;function hi(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(fk,"."):a}function i(){return!e||typeof e=="string"}const s=typeof t!="string"?t:t.split(".");let o=0;for(;o<s.length-1;){if(i())return{};const a=r(s[o]);!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={},++o}return i()?{}:{obj:e,k:r(s[o])}}function Op(e,t,n){const{obj:r,k:i}=hi(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let s=t[t.length-1],o=t.slice(0,t.length-1),a=hi(e,o,Object);for(;a.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),a=hi(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=n}function hk(e,t,n,r){const{obj:i,k:s}=hi(e,t,Object);i[s]=i[s]||[],i[s].push(n)}function Eo(e,t){const{obj:n,k:r}=hi(e,t);if(n)return n[r]}function mk(e,t,n){const r=Eo(e,n);return r!==void 0?r:Eo(t,n)}function jg(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):jg(e[r],t[r],n):e[r]=t[r]);return e}function Qn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var gk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function vk(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>gk[t]):e}class xk{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const wk=[" ",",","?","!",";"],yk=new xk(20);function Sk(e,t,n){t=t||"",n=n||"";const r=wk.filter(o=>t.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=yk.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(e);if(!s){const o=e.indexOf(n);o>0&&!i.test(e.substring(0,o))&&(s=!0)}return s}function Su(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=s;l<r.length;++l)if(l!==s&&(a+=n),a+=r[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<r.length-1)continue;s+=l-s+1;break}i=o}return i}function To(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Ip extends Zo{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,n],r&&(Array.isArray(r)?a.push(...r):typeof r=="string"&&s?a.push(...r.split(s)):a.push(r)));const l=Eo(this.data,a);return!l&&!n&&!r&&t.indexOf(".")>-1&&(t=a[0],n=a[1],r=a.slice(2).join(".")),l||!o||typeof r!="string"?l:Su(this.data&&this.data[t]&&this.data[t][n],r,s)}addResource(t,n,r,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[t,n];r&&(a=a.concat(o?r.split(o):r)),t.indexOf(".")>-1&&(a=t.split("."),i=n,n=a[1]),this.addNamespaces(n),Op(this.data,a,i),s.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in r)(typeof r[s]=="string"||Array.isArray(r[s]))&&this.addResource(t,n,s,r[s],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let l=Eo(this.data,a)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?jg(l,r,s):l={...l,...r},Op(this.data,a,l),o.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var kg={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(s=>{this.processors[s]&&(t=this.processors[s].process(t,n,r,i))}),t}};const Np={};class Po extends Zo{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),pk(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=wt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&t.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Sk(t,r,i);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:s};const c=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(c[0])>-1)&&(s=c.shift()),t=c.join(i)}return typeof s=="string"&&(s=[s]),{key:t,namespaces:s}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],n),l=a[a.length-1],c=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(d){const y=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${y}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${y}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o}const f=this.resolve(t,n);let m=f&&f.res;const x=f&&f.usedKey||o,v=f&&f.exactUsedKey||o,w=Object.prototype.toString.apply(m),b=["[object Number]","[object Function]","[object RegExp]"],p=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,h=!this.i18nFormat||this.i18nFormat.handleAsObject;if(h&&m&&(typeof m!="string"&&typeof m!="boolean"&&typeof m!="number")&&b.indexOf(w)<0&&!(typeof p=="string"&&Array.isArray(m))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,m,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(f.res=y,f.usedParams=this.getUsedParamsDetails(n),f):y}if(s){const y=Array.isArray(m),C=y?[]:{},j=y?v:x;for(const E in m)if(Object.prototype.hasOwnProperty.call(m,E)){const P=`${j}${s}${E}`;C[E]=this.translate(P,{...n,joinArrays:!1,ns:a}),C[E]===P&&(C[E]=m[E])}m=C}}else if(h&&typeof p=="string"&&Array.isArray(m))m=m.join(p),m&&(m=this.extendTranslation(m,t,n,r));else{let y=!1,C=!1;const j=n.count!==void 0&&typeof n.count!="string",E=Po.hasDefaultValue(n),P=j?this.pluralResolver.getSuffix(c,n.count,n):"",$=n.ordinal&&j?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",T=j&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),O=T&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${P}`]||n[`defaultValue${$}`]||n.defaultValue;!this.isValidLookup(m)&&E&&(y=!0,m=O),this.isValidLookup(m)||(C=!0,m=o);const F=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&C?void 0:m,_=E&&O!==m&&this.options.updateMissing;if(C||y||_){if(this.logger.log(_?"updateKey":"missingKey",c,l,o,_?O:m),s){const z=this.resolve(o,{...n,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let A=[];const se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(let z=0;z<se.length;z++)A.push(se[z]);else this.options.saveMissingTo==="all"?A=this.languageUtils.toResolveHierarchy(n.lng||this.language):A.push(n.lng||this.language);const Le=(z,N,R)=>{const H=E&&R!==m?R:F;this.options.missingKeyHandler?this.options.missingKeyHandler(z,l,N,H,_,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(z,l,N,H,_,n),this.emit("missingKey",z,l,N,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&j?A.forEach(z=>{const N=this.pluralResolver.getSuffixes(z,n);T&&n[`defaultValue${this.options.pluralSeparator}zero`]&&N.indexOf(`${this.options.pluralSeparator}zero`)<0&&N.push(`${this.options.pluralSeparator}zero`),N.forEach(R=>{Le([z],o+R,n[`defaultValue${R}`]||O)})}):Le(A,o,O))}m=this.extendTranslation(m,t,n,f,r),C&&m===o&&this.options.appendNamespaceToMissingKey&&(m=`${l}:${o}`),(C||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,y?m:void 0):m=this.options.parseMissingKeyHandler(m))}return i?(f.res=m,f.usedParams=this.getUsedParamsDetails(n),f):m}extendTranslation(t,n,r,i,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const c=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(c){const m=t.match(this.interpolator.nestingRegexp);d=m&&m.length}let f=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),t=this.interpolator.interpolate(t,f,r.lng||this.language,r),c){const m=t.match(this.interpolator.nestingRegexp),x=m&&m.length;d<x&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var m=arguments.length,x=new Array(m),v=0;v<m;v++)x[v]=arguments[v];return s&&s[0]===x[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${n[0]}`),null):o.translate(...x,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,l=typeof a=="string"?[a]:a;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=kg.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,s,o,a;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(l,n),d=c.key;i=d;let f=c.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const m=n.count!==void 0&&typeof n.count!="string",x=m&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(b=>{this.isValidLookup(r)||(a=b,!Np[`${w[0]}-${b}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Np[`${w[0]}-${b}`]=!0,this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(p=>{if(this.isValidLookup(r))return;o=p;const h=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(h,d,p,b,n);else{let y;m&&(y=this.pluralResolver.getSuffix(p,n.count,n));const C=`${this.options.pluralSeparator}zero`,j=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(m&&(h.push(d+y),n.ordinal&&y.indexOf(j)===0&&h.push(d+y.replace(j,this.options.pluralSeparator)),x&&h.push(d+C)),v){const E=`${d}${this.options.contextSeparator}${n.context}`;h.push(E),m&&(h.push(E+y),n.ordinal&&y.indexOf(j)===0&&h.push(E+y.replace(j,this.options.pluralSeparator)),x&&h.push(E+C))}}let g;for(;g=h.pop();)this.isValidLookup(r)||(s=g,r=this.getResource(p,b,g,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let i=r?t.replace:t;if(r&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function al(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Mp{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=wt.create("languageUtils")}getScriptPartFromCode(t){if(t=To(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=To(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=al(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=al(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=al(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(s=>{if(s===i)return s;if(!(s.indexOf("-")<0&&i.indexOf("-")<0)&&(s.indexOf("-")>0&&i.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===i||s.indexOf(i)===0&&i.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(t))):typeof t=="string"&&s(this.formatLanguageCode(t)),r.forEach(o=>{i.indexOf(o)<0&&s(this.formatLanguageCode(o))}),i}}let bk=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Ck={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const jk=["v1","v2","v3"],kk=["v4"],Rp={zero:0,one:1,two:2,few:3,many:4,other:5};function Ek(){const e={};return bk.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:Ck[t.fc]}})}),e}class Tk{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=wt.create("pluralResolver"),(!this.options.compatibilityJSON||kk.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Ek()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(To(t==="dev"?"en":t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,s)=>Rp[i]-Rp[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const s=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!jk.includes(this.options.compatibilityJSON)}}function _p(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=mk(e,t,n);return!s&&i&&typeof n=="string"&&(s=Su(e,n,r),s===void 0&&(s=Su(t,n,r))),s}class Pk{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=wt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:f,nestingPrefix:m,nestingPrefixEscaped:x,nestingSuffix:v,nestingSuffixEscaped:w,nestingOptionsSeparator:b,maxReplaces:p,alwaysFormat:h}=t.interpolation;this.escape=n!==void 0?n:vk,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?Qn(s):o||"{{",this.suffix=a?Qn(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=m?Qn(m):x||Qn("$t("),this.nestingSuffix=v?Qn(v):w||Qn(")"),this.nestingOptionsSeparator=b||",",this.maxReplaces=p||1e3,this.alwaysFormat=h!==void 0?h:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,r,i){let s,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(v){return v.replace(/\$/g,"$$$$")}const d=v=>{if(v.indexOf(this.formatSeparator)<0){const h=_p(n,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(h,void 0,r,{...i,...n,interpolationkey:v}):h}const w=v.split(this.formatSeparator),b=w.shift().trim(),p=w.join(this.formatSeparator).trim();return this.format(_p(n,l,b,this.options.keySeparator,this.options.ignoreJSONStructure),p,r,{...i,...n,interpolationkey:b})};this.resetRegExp();const f=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,m=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>c(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?c(this.escape(v)):c(v)}].forEach(v=>{for(a=0;s=v.regex.exec(t);){const w=s[1].trim();if(o=d(w),o===void 0)if(typeof f=="function"){const p=f(t,s,i);o=typeof p=="string"?p:""}else if(i&&Object.prototype.hasOwnProperty.call(i,w))o="";else if(m){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),o="";else typeof o!="string"&&!this.useRawValueToEscape&&(o=Fp(o));const b=v.safeValue(o);if(t=t.replace(s[0],b),m?(v.regex.lastIndex+=o.length,v.regex.lastIndex-=s[0].length):v.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,s,o;function a(l,c){const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const f=l.split(new RegExp(`${d}[ ]*{`));let m=`{${f[1]}`;l=f[0],m=this.interpolate(m,o);const x=m.match(/'/g),v=m.match(/"/g);(x&&x.length%2===0&&!v||v.length%2!==0)&&(m=m.replace(/'/g,'"'));try{o=JSON.parse(m),c&&(o={...c,...o})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${d}${m}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];o={...r},o=o.replace&&typeof o.replace!="string"?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const d=i[1].split(this.formatSeparator).map(f=>f.trim());i[1]=d.shift(),l=d,c=!0}if(s=n(a.call(this,i[1].trim(),o),o),s&&i[0]===t&&typeof s!="string")return s;typeof s!="string"&&(s=Fp(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),s=""),c&&(s=l.reduce((d,f)=>this.format(d,f,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),t=t.replace(i[0],s),this.regexp.lastIndex=0}return t}}function $k(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),d=a.trim();n[d]||(n[d]=c),c==="false"&&(n[d]=!1),c==="true"&&(n[d]=!0),isNaN(c)||(n[d]=parseInt(c,10))}})}return{formatName:t,formatOptions:n}}function Xn(e){const t={};return function(r,i,s){const o=i+JSON.stringify(s);let a=t[o];return a||(a=e(To(i),s),t[o]=a),a(r)}}class Lk{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=wt.create("formatter"),this.options=t,this.formats={number:Xn((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return s=>i.format(s)}),currency:Xn((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return s=>i.format(s)}),datetime:Xn((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return s=>i.format(s)}),relativetime:Xn((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return s=>i.format(s,r.range||"day")}),list:Xn((n,r)=>{const i=new Intl.ListFormat(n,{...r});return s=>i.format(s)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Xn(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((a,l)=>{const{formatName:c,formatOptions:d}=$k(l);if(this.formats[c]){let f=a;try{const m=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},x=m.locale||m.lng||i.locale||i.lng||r;f=this.formats[c](a,x,{...d,...i,...m})}catch(m){this.logger.warn(m)}return f}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}function zk(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class Fk extends Zo{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=wt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const s={},o={},a={},l={};return t.forEach(c=>{let d=!0;n.forEach(f=>{const m=`${c}|${f}`;!r.reload&&this.store.hasResourceBundle(c,f)?this.state[m]=2:this.state[m]<0||(this.state[m]===1?o[m]===void 0&&(o[m]=!0):(this.state[m]=1,d=!1,o[m]===void 0&&(o[m]=!0),s[m]===void 0&&(s[m]=!0),l[f]===void 0&&(l[f]=!0)))}),d||(a[c]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2;const a={};this.queue.forEach(l=>{hk(l.loaded,[s],o),zk(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const d=l.loaded[c];d.length&&d.forEach(f=>{a[c][f]===void 0&&(a[c][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const a=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(c&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,s*2,o)},s);return}o(c,d)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const c=l(t,n);c&&typeof c.then=="function"?c.then(d=>a(null,d)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,n,a)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const s=this.queueLoad(t,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,a),this.loaded(t,o,a)})}saveMissing(t,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:s},c=this.backend.create.bind(this.backend);if(c.length<6)try{let d;c.length===5?d=c(t,n,r,i,l):d=c(t,n,r,i),d&&typeof d.then=="function"?d.then(f=>a(null,f)).catch(a):a(null,d)}catch(d){a(d)}else c(t,n,r,i,a,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function Ap(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Dp(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function ys(){}function Ok(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Mi extends Zo{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Dp(t),this.services={},this.logger=wt,this.modules={external:[]},Ok(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Ap();this.options={...i,...this.options,...Dp(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function s(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?wt.init(s(this.modules.logger),this.options):wt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=Lk);const f=new Mp(this.options);this.store=new Ip(this.options.resources,this.options);const m=this.services;m.logger=wt,m.resourceStore=this.store,m.languageUtils=f,m.pluralResolver=new Tk(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(m.formatter=s(d),m.formatter.init(m,this.options),this.options.interpolation.format=m.formatter.format.bind(m.formatter)),m.interpolator=new Pk(this.options),m.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},m.backendConnector=new Fk(s(this.modules.backend),m.resourceStore,m,this.options),m.backendConnector.on("*",function(x){for(var v=arguments.length,w=new Array(v>1?v-1:0),b=1;b<v;b++)w[b-1]=arguments[b];t.emit(x,...w)}),this.modules.languageDetector&&(m.languageDetector=s(this.modules.languageDetector),m.languageDetector.init&&m.languageDetector.init(m,this.options.detection,this.options)),this.modules.i18nFormat&&(m.i18nFormat=s(this.modules.i18nFormat),m.i18nFormat.init&&m.i18nFormat.init(this)),this.translator=new Po(this.services,this.options),this.translator.on("*",function(x){for(var v=arguments.length,w=new Array(v>1?v-1:0),b=1;b<v;b++)w[b-1]=arguments[b];t.emit(x,...w)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,r||(r=ys),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const l=qr(),c=()=>{const d=(f,m)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(m),r(f,m)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ys;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const s=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&s.indexOf(c)<0&&s.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(s,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(t,n,r){const i=qr();return t||(t=this.languages),n||(n=this.options.ns),r||(r=ys),this.services.backendConnector.reload(t,n,s=>{i.resolve(),r(s)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&kg.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=qr();this.emit("languageChanging",t);const s=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(s(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,d=>{o(d,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,n,r){var i=this;const s=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,d=new Array(c>2?c-2:0),f=2;f<c;f++)d[f-2]=arguments[f];l=i.options.overloadTranslationOptionHandler([o,a].concat(d))}else l={...a};l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix=l.keyPrefix||r||s.keyPrefix;const m=i.options.keySeparator||".";let x;return l.keyPrefix&&Array.isArray(o)?x=o.map(v=>`${l.keyPrefix}${m}${v}`):x=l.keyPrefix?`${l.keyPrefix}${m}${o}`:o,i.t(x,l)};return typeof t=="string"?s.lng=t:s.lngs=t,s.ns=n,s.keyPrefix=r,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,t)&&(!i||o(s,t)))}loadNamespaces(t,n){const r=qr();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=qr();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],s=t.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Mp(Ap());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Mi(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ys;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},s=new Mi(i);return(t.debug!==void 0||t.prefix!==void 0)&&(s.logger=s.logger.clone(t)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r&&(s.store=new Ip(this.store.data,i),s.services.resourceStore=s.store),s.translator=new Po(s.services,i),s.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),d=1;d<l;d++)c[d-1]=arguments[d];s.emit(a,...c)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ye=Mi.createInstance();ye.createInstance=Mi.createInstance;ye.createInstance;ye.dir;ye.init;ye.loadResources;ye.reloadResources;ye.use;ye.changeLanguage;ye.getFixedT;ye.t;ye.exists;ye.setDefaultNamespace;ye.hasLoadedNamespace;ye.loadNamespaces;ye.loadLanguages;const Ik={home:"Home",services:"Services",about:"About Us",partners:"Our Partners",talk:"Let's talk",menu:"Menu",solutions:"Architectural solutions"},Nk={heading:"Got a Crazy Idea? Let's Make It Happen! <1/> <2>Get in Touch!</2>",copyright:"Copyright 2024 Tedo Artline. All rights Reserved."},Mk={home:{heading:{1:"Where digital commerce Meets Expertise",2:"Revolutionizing digital commerce with intuitive design and innovative solutions, we optimize user experience and drive growth to elevate your digital presence."},mission:{1:"<1>We</1> are committed to innovation and excellence, working with you to bring your ideas to life - whether in a digital or physical environment.",2:"When you choose <2>Tedo Artline</2>, you get a guarantee of unrivaled craftsmanship, attention to detail, and a commitment to exceeding your expectations."},partners:{title:"Partners",button:"See More"},scrollingText:"Relentless innovators. We turn your visions into realities, exceeding expectations every time. Choose us for unmatched creativity and craftsmanship.",services:"Experience <1>the</1> Exceptional",servicesSlider:{1:{h2:"<1>UI/UX</1> Design",p1:"UI/UX design service focuses on creating intuitive and visually stunning user <1>interfaces</1>. We prioritize user <1>experience</1>, ensuring that every interaction is seamless and engaging.",p2:"From wireframing to <1>prototyping</1>, we leverage cutting-edge technologies to craft interfaces that captivate and delight users."},2:{h2:"<1>Graphic</1> Design",p1:"Bring ideas to life through captivating visual <1>storytelling</1>. From logos to marketing materials, we specialize in creating impactful brand identities that resonate with your target audience.",p2:"Utilizing <1>cutting-edge technologies</1>, we create captivating and <1>user-friendly</1> interfaces through wireframing and prototyping in our Graphic Design services."},3:{h2:"<1>2D</1> Design",p1:"Transform your ideas into compelling visual narratives with our 2D Design service. From logos to marketing materials, we specialize in crafting <1>impactful brand identities</1> that connect with your target audience.",p2:"Utilizing state-of-the-art techniques from wireframing to prototyping, we create interfaces that captivate and engage users, ensuring an unforgettable experience."}},slogan:`"At <1>Tedo Artline, </1> we're`},service:{specialization:{"ui-ux":"<1>UI/UX</1> Design",graphic:"<1>Graphic</1> Design","2d":"<1>2D</1> Design"},text:{1:"At <1>Tedo Artline</1>, we're experts in delivering tailored graphic design solutions that cater specifically to our clients' diverse needs and preferences.",2:"Whether you're initiating a new brand identity or refining an existing one, rely on us to actualize your vision and enhance your digital footprint.",3:"<1>Our team</1> of experienced designers seamlessly blends creativity with technical expertise to deliver intuitive and visually stunning digital experiences."},budget:"Your Budget, Your Choice",projector:"Meet the talented individuals behind our UI/UX design team."},about:{welcome:{p:"Discover the values, mission, and vision that drive Tedo Artline, and meet the passionate individuals behind our innovative designs.",h1:"Who <1>We</1> Are"},experience:{h1:"Tedo Artline",h2:"Crafting Experiences Across Digital and Physical Realms",p:`At Tedo Artline, we are at the forefront of creative innovation, offering a diverse range of design solutions spanning UI/UX, graphic design, interior design, landscape architecture, and 2D design. Our
                multidisciplinary team of experts is dedicated to elevating every aspect of your project, ensuring a seamless fusion of aesthetics and functionality.`},designers:{1:{name:"UI/UX Design",p1:"Crafting intuitive and visually stunning user interfaces.",p2:"Ensuring exceptional user experiences through meticulous design principles",p3:" Incorporating cutting-edge technologies for interactive and engaging interfaces."},2:{name:"Graphic Design",p1:"Bringing ideas to life through captivating visual storytelling.",p2:"Creating impactful branding elements, including logos, graphics, and marketing materials.",p3:"Tailoring designs to resonate with your target audience and enhance brand recognition."},3:{name:"2D Design",p1:"Providing versatile and dynamic visual solutions across various mediums.",p2:"Delivering illustrations, animations, and graphic elements that captivate audiences.",p3:"Customizing designs to suit specific project requirements and objectives."}}},partners:{heading:{h1:"Unleashing collaborative synergy:",p:"Our Valued Partnerships"},text1:{p1:"At Tedo, we believe in the power of collaboration and partnership to drive innovation and achieve remarkable results.",p2:"Explore our valued partnerships below and discover how together, we&apos;re shaping the future of digital excellence"},text2:{p1:"At Tedo Gen, we're dedicated to fostering innovation through collaboration and partnership. ",p2:"Our Tedo Gen initiative provides young talents with invaluable commercial experience in IT through participation in charitable projects.",p3:"With mentorship from experienced professionals, participants develop their skills and chart their career paths."},slogan:"We believe in empowering the next generation of IT specialists to shape the future of technology."},contact:{hand:"Let’s Do Magic","form-toast":{name:"Please provide your name",email:"Please provide your email","valid-email":"Please provide a valid email",success:"We received your message, wait for a reply"},form:{1:"I’m Looking For..?",2:"Looking for pricing options?",3:"Name",4:"Email",5:"Your Message",button:"Send Enquiry","active-button":"Thank You for Reaching Out.",basic:"Basic",advanced:"Advanced",professional:"Professional",design:"Design"}}},Rk={header:Ik,footer:Nk,main:Mk},_k={home:"Головна",services:"Послуги",about:"Про нас",partners:"Партнери",talk:"Контакт",menu:"Меню",solutions:"Архітектурні рішення"},Ak={heading:"Є шалена ідея? Давайте втілимо її в життя! <1/> <2>Зв'яжіться з нами!</2>",copyright:"Авторські права 2024 Tedo Artline. Всі права захищені."},Dk={home:{heading:{1:"Де цифрова комерція зустрічається з експертизою",2:"Революціонізуючи цифрову комерцію завдяки інтуїтивно зрозумілому дизайну та інноваційним рішенням, ми оптимізуємо користувацький досвід і стимулюємо зростання, щоб підвищити вашу присутність у цифровому світі"},mission:{1:"<1>Ми</1> прагнемо до інновацій та досконалості, працюючи з вами, щоб втілити ваші ідеї в життя - чи то в цифровому, чи то в фізичному середовищі",2:"Коли ви обираєте <2>Tedo Artline</2>, ви отримуєте гарантію неперевершеної майстерності, уваги до деталей та прагнення перевершити ваші очікування"},partners:{title:"Партнери",button:"Більше"},scrollingText:"Невпинні новатори. Ми втілюємо ваші ідеї в реальність, щоразу перевершуючи очікування. Обирайте нас за неперевершену креативність та майстерність",services:"Досвід <1>виняткового</1>",servicesSlider:{1:{h2:"<1>UI/UX</1> Дизайн",p1:"Послуга UI/UX дизайну фокусується на створенні інтуїтивно зрозумілих та візуально приголомшливих користувацьких <1>інтерфейсів</1>. Ми надаємо пріоритет користувацькому <1>досвіду</1>, гарантуючи, що кожна взаємодія є безперебійною та цікавою",p2:"Від фреймворку до <1>прототипування</1>, ми використовуємо найсучасніші технології для створення інтерфейсів, які захоплюють і захоплюють користувачів"},2:{h2:"<1>Graphic</1> Дизайн",p1:"Втілюємо ідеї в життя за допомогою захоплюючих візуальних <1>сторітеллінгів</1>. Від логотипів до маркетингових матеріалів - ми спеціалізуємося на створенні вражаючої айдентики бренду, яка резонує з вашою цільовою аудиторією",p2:"Використовуючи <1>передові технології</1>, ми створюємо захоплюючі та <1>зручні</1> інтерфейси за допомогою фреймворку та прототипування в наших послугах графічного дизайну"},3:{h2:"<1>2D</1> Дизайн",p1:"Перетворіть свої ідеї на переконливі візуальні розповіді за допомогою нашої послуги 2D-дизайну. Від логотипів до маркетингових матеріалів, ми спеціалізуємося на створенні <1>ефектної айдентики бренду</1>, яка буде взаємодіяти з вашою цільовою аудиторією.",p2:"Використовуючи найсучасніші методи від фреймворку до прототипування, ми створюємо інтерфейси, які захоплюють і залучають користувачів, забезпечуючи незабутній досвід"}},slogan:"У <1>Tedo Artline, </1> ми"},service:{specialization:{"ui-ux":"<1>UI/UX</1> Дизайн",graphic:"<1>Graphic</1> Дизайн","2d":"<1>2D</1> Дизайн"},text:{1:"У <1>Tedo Artline</1> ми є експертами у наданні індивідуальних графічних дизайнерських рішень, які спеціально відповідають різноманітним потребам і уподобанням наших клієнтів.",2:"Незалежно від того, чи розпочинаєте ви нову ідентичність бренду, чи вдосконалюєте існуючу, покладайтеся на нас, щоб реалізувати ваше бачення і підвищити вашу цифрову присутність.",3:"<1>Наша команда</1> досвідчених дизайнерів бездоганно поєднує креативність з технічною майстерністю, щоб створювати інтуїтивно зрозумілі та візуально вражаючі цифрові враження."},budget:"Ваш Бюджет, Ваш Вибір",projector:"Познайомтесь з талановитими фахівцями нашої команди UI/UX дизайнерів."},about:{welcome:{p:"Дізнайтеся про цінності, місію та бачення, які рухають Tedo Artline, та познайомтеся з пристрасними людьми, які стоять за нашими інноваційними дизайнами.",h1:"Хто <1>Ми</1>"},experience:{h1:"Tedo Artline",h2:"Створення Вражень У Цифрових Та Фізичних Просторах",p:"У Tedo Artline ми стоїмо на передовій креативних інновацій, пропонуючи різноманітні дизайнерські рішення, що охоплюють UI/UX, графічний дизайн, інтер'єрний дизайн, ландшафтну архітектуру та 2D-дизайн. Наша мультидисциплінарна команда експертів прагне підвищити кожен аспект вашого проекту, забезпечуючи бездоганне поєднання естетики та функціональності."},designers:{1:{name:"UI/UX Дизайн",p1:"Створення інтуїтивно зрозумілих і візуально вражаючих користувацьких інтерфейсів.",p2:"Забезпечення виняткових користувацьких вражень завдяки ретельним дизайнерським принципам",p3:"Інтеграція передових технологій для інтерактивних та захоплюючих інтерфейсів."},2:{name:"Графічний Дизайн",p1:"Втілення ідей в життя через захоплюючі візуальні історії.",p2:"Створення впливових елементів брендингу, включаючи логотипи, графіку та маркетингові матеріали.",p3:"Адаптація дизайнів для резонансу з вашою цільовою аудиторією та підвищення впізнаваності бренду."},3:{name:"2D Дизайн",p1:"Надання універсальних та динамічних візуальних рішень у різних середовищах.",p2:"Створення ілюстрацій, анімацій та графічних елементів, що захоплюють аудиторію.",p3:"Налаштування дизайнів відповідно до специфічних вимог та цілей проекту."}}},partners:{heading:{h1:"Розкриваючи Синергію Співпраці:",p:"Наші Цінні Партнерства"},text1:{p1:"У Tedo ми віримо в силу співпраці та партнерства для досягнення інновацій та вражаючих результатів.",p2:"Дослідіть наші цінні партнерства нижче та дізнайтеся, як разом ми формуємо майбутнє цифрової досконалості."},text2:{p1:"У Tedo Gen ми присвячуємо себе сприянню інноваціям через співпрацю та партнерство.",p2:"Наша ініціатива Tedo Gen надає молодим талантам безцінний комерційний досвід у IT через участь у благодійних проектах.",p3:"За наставництва досвідчених професіоналів учасники розвивають свої навички та формують свої кар'єрні шляхи."},slogan:"Ми віримо в надання наступному поколінню IT-спеціалістів можливості формувати майбутнє технологій."},contact:{hand:"Давайте Робити Чудеса","form-toast":{name:"Будь ласка, вкажіть ваше ім'я",email:"Будь ласка, вкажіть ваш email","valid-email":"Будь ласка, вкажіть дійсний email",success:"Ми отримали ваше повідомлення, чекайте на відповідь"},form:{1:"Що Шукаю..?",2:"Шукаєте цінові варіанти?",3:"Ім'я",4:"Email",5:"Ваше Повідомлення",button:"Надіслати Запит","active-button":"Дякуємо за Звернення.",basic:"Основний",advanced:"Просунутий",professional:"Професійний",design:"Дизайн"}}},Bk={header:_k,footer:Ak,main:Dk};ye.use(Tw).init({resources:{en:{translation:Rk},ua:{translation:Bk}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});ll.createRoot(document.getElementById("root")).render(u.jsx(Q.StrictMode,{children:u.jsx(zw,{i18n:ye,children:u.jsx(ck,{})})}));
