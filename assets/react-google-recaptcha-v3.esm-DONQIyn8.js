import{r as d,bw as K}from"./index-B1IYvx0M.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var O=function(){return O=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},O.apply(this,arguments)},j,Q=function(e){var t;e?function(a){if(a)for(;a.lastChild;)a.lastChild.remove()}(typeof e=="string"?document.getElementById(e):e):(t=document.querySelector(".grecaptcha-badge"))&&t.parentNode&&document.body.removeChild(t.parentNode)},U=function(e,t){Q(t),window.___grecaptcha_cfg=void 0;var a=document.querySelector("#"+e);a&&a.remove(),function(){var i=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');i&&i.remove()}()},W=function(e){var t=e.render,a=e.onLoadCallbackName,i=e.language,s=e.onLoad,g=e.useRecaptchaNet,p=e.useEnterprise,v=e.scriptProps,o=v===void 0?{}:v,b=o.nonce,h=b===void 0?"":b,l=o.defer,A=l!==void 0&&l,f=o.async,T=f!==void 0&&f,w=o.id,C=w===void 0?"":w,F=o.appendTo,m=C||"google-recaptcha-v3";if(function(y){return!!document.querySelector("#"+y)}(m))s();else{var S=function(y){return"https://www."+(y.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(y.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:p,useRecaptchaNet:g}),u=document.createElement("script");u.id=m,u.src=S+"?render="+t+(t==="explicit"?"&onload="+a:"")+(i?"&hl="+i:""),h&&(u.nonce=h),u.defer=!!A,u.async=!!T,u.onload=s,(F==="body"?document.body:document.getElementsByTagName("head")[0]).appendChild(u)}},B=function(e){console.warn(e)};(function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"})(j||(j={}));var q=d.createContext({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});q.Consumer;function ae(e){var t=e.reCaptchaKey,a=e.useEnterprise,i=a!==void 0&&a,s=e.useRecaptchaNet,g=s!==void 0&&s,p=e.scriptProps,v=e.language,o=e.container,b=e.children,h=d.useState(null),l=h[0],A=h[1],f=d.useRef(t),T=JSON.stringify(p),w=JSON.stringify(o==null?void 0:o.parameters);d.useEffect(function(){if(t){var m=(p==null?void 0:p.id)||"google-recaptcha-v3",S=(p==null?void 0:p.onLoadCallbackName)||"onRecaptchaLoadCallback";return window[S]=function(){var u=i?window.grecaptcha.enterprise:window.grecaptcha,y=O({badge:"inline",size:"invisible",sitekey:t},(o==null?void 0:o.parameters)||{});f.current=u.render(o==null?void 0:o.element,y)},W({render:o!=null&&o.element?"explicit":t,onLoadCallbackName:S,useEnterprise:i,useRecaptchaNet:g,scriptProps:p,language:v,onLoad:function(){if(window&&window.grecaptcha){var u=i?window.grecaptcha.enterprise:window.grecaptcha;u.ready(function(){A(u)})}else B("<GoogleRecaptchaProvider /> "+j.SCRIPT_NOT_AVAILABLE)}}),function(){U(m,o==null?void 0:o.element)}}B("<GoogleReCaptchaProvider /> recaptcha key not provided")},[i,g,T,w,v,t,o==null?void 0:o.element]);var C=d.useCallback(function(m){if(!l||!l.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return l.execute(f.current,{action:m})},[l,f]),F=d.useMemo(function(){return{executeRecaptcha:l?C:void 0,container:o==null?void 0:o.element}},[C,l,o==null?void 0:o.element]);return K.createElement(q.Provider,{value:F},b)}var ce=function(){return d.useContext(q)};function H(e,t){return e(t={exports:{}},t.exports),t.exports;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var n=typeof Symbol=="function"&&Symbol.for,G=n?Symbol.for("react.element"):60103,z=n?Symbol.for("react.portal"):60106,$=n?Symbol.for("react.fragment"):60107,P=n?Symbol.for("react.strict_mode"):60108,R=n?Symbol.for("react.profiler"):60114,x=n?Symbol.for("react.provider"):60109,E=n?Symbol.for("react.context"):60110,I=n?Symbol.for("react.async_mode"):60111,k=n?Symbol.for("react.concurrent_mode"):60111,M=n?Symbol.for("react.forward_ref"):60112,N=n?Symbol.for("react.suspense"):60113,X=n?Symbol.for("react.suspense_list"):60120,L=n?Symbol.for("react.memo"):60115,_=n?Symbol.for("react.lazy"):60116,Y=n?Symbol.for("react.block"):60121,Z=n?Symbol.for("react.fundamental"):60117,ee=n?Symbol.for("react.responder"):60118,re=n?Symbol.for("react.scope"):60119;function c(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case G:switch(e=e.type){case I:case k:case $:case R:case P:case N:return e;default:switch(e=e&&e.$$typeof){case E:case M:case _:case L:case x:return e;default:return t}}case z:return t}}}function V(e){return c(e)===k}var te={AsyncMode:I,ConcurrentMode:k,ContextConsumer:E,ContextProvider:x,Element:G,ForwardRef:M,Fragment:$,Lazy:_,Memo:L,Portal:z,Profiler:R,StrictMode:P,Suspense:N,isAsyncMode:function(e){return V(e)||c(e)===I},isConcurrentMode:V,isContextConsumer:function(e){return c(e)===E},isContextProvider:function(e){return c(e)===x},isElement:function(e){return typeof e=="object"&&e!==null&&e.$$typeof===G},isForwardRef:function(e){return c(e)===M},isFragment:function(e){return c(e)===$},isLazy:function(e){return c(e)===_},isMemo:function(e){return c(e)===L},isPortal:function(e){return c(e)===z},isProfiler:function(e){return c(e)===R},isStrictMode:function(e){return c(e)===P},isSuspense:function(e){return c(e)===N},isValidElementType:function(e){return typeof e=="string"||typeof e=="function"||e===$||e===k||e===R||e===P||e===N||e===X||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===L||e.$$typeof===x||e.$$typeof===E||e.$$typeof===M||e.$$typeof===Z||e.$$typeof===ee||e.$$typeof===re||e.$$typeof===Y)},typeOf:c},r=H(function(e,t){}),J=(r.AsyncMode,r.ConcurrentMode,r.ContextConsumer,r.ContextProvider,r.Element,r.ForwardRef,r.Fragment,r.Lazy,r.Memo,r.Portal,r.Profiler,r.StrictMode,r.Suspense,r.isAsyncMode,r.isConcurrentMode,r.isContextConsumer,r.isContextProvider,r.isElement,r.isForwardRef,r.isFragment,r.isLazy,r.isMemo,r.isPortal,r.isProfiler,r.isStrictMode,r.isSuspense,r.isValidElementType,r.typeOf,H(function(e){e.exports=te})),oe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},D={};D[J.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D[J.Memo]=oe;export{ce as g,ae as h};
