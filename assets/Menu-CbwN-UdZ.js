import{r as c,aq as _,bB as oe,bC as gt,bx as re,bw as vt,e5 as Jt,as as st,at as it,ap as at,j as A,w as W,ar as lt,dV as Mt,dX as ct,e6 as se,q as Lt,e7 as Kt,bA as ie,dZ as Ut,au as Qt,d$ as $t,e8 as zt,dY as ae,aK as le}from"./index-B1IYvx0M.js";import{o as V,a as X,u as q,e as ce,d as ue,b as de}from"./useSlot-DZH0Y2jJ.js";function Bt(...t){return t.reduce((e,o)=>o==null?e:function(...s){e.apply(this,s),o.apply(this,s)},()=>{})}function Vt(t=window){const e=t.document.documentElement.clientWidth;return t.innerWidth-e}function yt(t){var e;return parseInt(c.version,10)>=19?((e=t==null?void 0:t.props)==null?void 0:e.ref)||null:(t==null?void 0:t.ref)||null}function fe(t,e){if(!t)return e;if(typeof t=="function"||typeof e=="function")return s=>{const n=typeof e=="function"?e(s):e,i=typeof t=="function"?t({...s,...n}):t,a=_(s==null?void 0:s.className,n==null?void 0:n.className,i==null?void 0:i.className);return{...n,...i,...!!a&&{className:a},...(n==null?void 0:n.style)&&(i==null?void 0:i.style)&&{style:{...n.style,...i.style}},...(n==null?void 0:n.sx)&&(i==null?void 0:i.sx)&&{sx:[...Array.isArray(n.sx)?n.sx:[n.sx],...Array.isArray(i.sx)?i.sx:[i.sx]]}}};const o=e,r=_(o==null?void 0:o.className,t==null?void 0:t.className);return{...e,...t,...!!r&&{className:r},...(o==null?void 0:o.style)&&(t==null?void 0:t.style)&&{style:{...o.style,...t.style}},...(o==null?void 0:o.sx)&&(t==null?void 0:t.sx)&&{sx:[...Array.isArray(o.sx)?o.sx:[o.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}const Ht={disabled:!1};var pe=function(e){return e.scrollTop},ft="unmounted",J="exited",Q="entering",rt="entered",Nt="exiting",G=function(t){oe(e,t);function e(r,s){var n;n=t.call(this,r,s)||this;var i=s,a=i&&!i.isMounting?r.enter:r.appear,u;return n.appearStatus=null,r.in?a?(u=J,n.appearStatus=Q):u=rt:r.unmountOnExit||r.mountOnEnter?u=ft:u=J,n.state={status:u},n.nextCallback=null,n}e.getDerivedStateFromProps=function(s,n){var i=s.in;return i&&n.status===ft?{status:J}:null};var o=e.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var n=null;if(s!==this.props){var i=this.state.status;this.props.in?i!==Q&&i!==rt&&(n=Q):(i===Q||i===rt)&&(n=Nt)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,n,i,a;return n=i=a=s,s!=null&&typeof s!="number"&&(n=s.exit,i=s.enter,a=s.appear!==void 0?s.appear:i),{exit:n,enter:i,appear:a}},o.updateStatus=function(s,n){if(s===void 0&&(s=!1),n!==null)if(this.cancelNextCallback(),n===Q){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:gt.findDOMNode(this);i&&pe(i)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===J&&this.setState({status:ft})},o.performEnter=function(s){var n=this,i=this.props.enter,a=this.context?this.context.isMounting:s,u=this.props.nodeRef?[a]:[gt.findDOMNode(this),a],m=u[0],y=u[1],x=this.getTimeouts(),P=a?x.appear:x.enter;if(!s&&!i||Ht.disabled){this.safeSetState({status:rt},function(){n.props.onEntered(m)});return}this.props.onEnter(m,y),this.safeSetState({status:Q},function(){n.props.onEntering(m,y),n.onTransitionEnd(P,function(){n.safeSetState({status:rt},function(){n.props.onEntered(m,y)})})})},o.performExit=function(){var s=this,n=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:gt.findDOMNode(this);if(!n||Ht.disabled){this.safeSetState({status:J},function(){s.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Nt},function(){s.props.onExiting(a),s.onTransitionEnd(i.exit,function(){s.safeSetState({status:J},function(){s.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,n){n=this.setNextCallback(n),this.setState(s,n)},o.setNextCallback=function(s){var n=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,n.nextCallback=null,s(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(s,n){this.setNextCallback(n);var i=this.props.nodeRef?this.props.nodeRef.current:gt.findDOMNode(this),a=s==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],m=u[0],y=u[1];this.props.addEndListener(m,y)}s!=null&&setTimeout(this.nextCallback,s)},o.render=function(){var s=this.state.status;if(s===ft)return null;var n=this.props,i=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=re(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return vt.createElement(Jt.Provider,{value:null},typeof i=="function"?i(s,a):vt.cloneElement(vt.Children.only(i),a))},e}(vt.Component);G.contextType=Jt;G.propTypes={};function ot(){}G.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ot,onEntering:ot,onEntered:ot,onExit:ot,onExiting:ot,onExited:ot};G.UNMOUNTED=ft;G.EXITED=J;G.ENTERING=Q;G.ENTERED=rt;G.EXITING=Nt;function he(t){return typeof t=="string"}const me=c.createContext({});function ge(t){return st("MuiList",t)}it("MuiList",["root","padding","dense","subheader"]);const ve=t=>{const{classes:e,disablePadding:o,dense:r,subheader:s}=t;return lt({root:["root",!o&&"padding",r&&"dense",s&&"subheader"]},ge,e)},Ee=W("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.disablePadding&&e.padding,o.dense&&e.dense,o.subheader&&e.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>t.subheader,style:{paddingTop:0}}]}),be=c.forwardRef(function(e,o){const r=at({props:e,name:"MuiList"}),{children:s,className:n,component:i="ul",dense:a=!1,disablePadding:u=!1,subheader:m,...y}=r,x=c.useMemo(()=>({dense:a}),[a]),P={...r,component:i,dense:a,disablePadding:u},p=ve(P);return A.jsx(me.Provider,{value:x,children:A.jsxs(Ee,{as:i,className:_(p.root,n),ref:o,ownerState:P,...y,children:[m,s]})})});function Pt(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function Wt(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function te(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.startsWith(e.keys.join(""))}function dt(t,e,o,r,s,n){let i=!1,a=s(t,e,e?o:!1);for(;a;){if(a===t.firstChild){if(i)return!1;i=!0}const u=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!te(a,n)||u)a=s(t,a,o);else return a.focus(),!0}return!1}const ye=c.forwardRef(function(e,o){const{actions:r,autoFocus:s=!1,autoFocusItem:n=!1,children:i,className:a,disabledItemsFocusable:u=!1,disableListWrap:m=!1,onKeyDown:y,variant:x="selectedMenu",...P}=e,p=c.useRef(null),g=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Mt(()=>{s&&p.current.focus()},[s]),c.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(l,{direction:f})=>{const E=!p.current.style.width;if(l.clientHeight<p.current.clientHeight&&E){const k=`${Vt(V(l))}px`;p.current.style[f==="rtl"?"paddingLeft":"paddingRight"]=k,p.current.style.width=`calc(100% + ${k})`}return p.current}}),[]);const I=l=>{const f=p.current,E=l.key;if(l.ctrlKey||l.metaKey||l.altKey){y&&y(l);return}const R=X(f).activeElement;if(E==="ArrowDown")l.preventDefault(),dt(f,R,m,u,Pt);else if(E==="ArrowUp")l.preventDefault(),dt(f,R,m,u,Wt);else if(E==="Home")l.preventDefault(),dt(f,null,m,u,Pt);else if(E==="End")l.preventDefault(),dt(f,null,m,u,Wt);else if(E.length===1){const b=g.current,O=E.toLowerCase(),j=performance.now();b.keys.length>0&&(j-b.lastTime>500?(b.keys=[],b.repeating=!0,b.previousKeyMatched=!0):b.repeating&&O!==b.keys[0]&&(b.repeating=!1)),b.lastTime=j,b.keys.push(O);const K=R&&!b.repeating&&te(R,b);b.previousKeyMatched&&(K||dt(f,R,!1,u,Pt,b))?l.preventDefault():b.previousKeyMatched=!1}y&&y(l)},M=ct(p,o);let v=-1;c.Children.forEach(i,(l,f)=>{if(!c.isValidElement(l)){v===f&&(v+=1,v>=i.length&&(v=-1));return}l.props.disabled||(x==="selectedMenu"&&l.props.selected||v===-1)&&(v=f),v===f&&(l.props.disabled||l.props.muiSkipListHighlight||l.type.muiSkipListHighlight)&&(v+=1,v>=i.length&&(v=-1))});const C=c.Children.map(i,(l,f)=>{if(f===v){const E={};return n&&(E.autoFocus=!0),l.props.tabIndex===void 0&&x==="selectedMenu"&&(E.tabIndex=0),c.cloneElement(l,E)}return l});return A.jsx(be,{role:"menu",ref:M,className:a,onKeyDown:I,tabIndex:s?0:-1,...P,children:C})}),ee=t=>t.scrollTop;function bt(t,e){const{timeout:o,easing:r,style:s={}}=t;return{duration:s.transitionDuration??(typeof o=="number"?o:o[e.mode]||0),easing:s.transitionTimingFunction??(typeof r=="object"?r[e.mode]:r),delay:s.transitionDelay}}function It(t){return`scale(${t}, ${t**2})`}const xe={entering:{opacity:1,transform:It(1)},entered:{opacity:1,transform:"none"}},Ct=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),St=c.forwardRef(function(e,o){const{addEndListener:r,appear:s=!0,children:n,easing:i,in:a,onEnter:u,onEntered:m,onEntering:y,onExit:x,onExited:P,onExiting:p,style:g,timeout:I="auto",TransitionComponent:M=G,...v}=e,C=se(),l=c.useRef(),f=Lt(),E=c.useRef(null),k=ct(E,yt(n),o),R=d=>h=>{if(d){const S=E.current;h===void 0?d(S):d(S,h)}},b=R(y),O=R((d,h)=>{ee(d);const{duration:S,delay:$,easing:T}=bt({style:g,timeout:I,easing:i},{mode:"enter"});let F;I==="auto"?(F=f.transitions.getAutoHeightDuration(d.clientHeight),l.current=F):F=S,d.style.transition=[f.transitions.create("opacity",{duration:F,delay:$}),f.transitions.create("transform",{duration:Ct?F:F*.666,delay:$,easing:T})].join(","),u&&u(d,h)}),j=R(m),K=R(p),U=R(d=>{const{duration:h,delay:S,easing:$}=bt({style:g,timeout:I,easing:i},{mode:"exit"});let T;I==="auto"?(T=f.transitions.getAutoHeightDuration(d.clientHeight),l.current=T):T=h,d.style.transition=[f.transitions.create("opacity",{duration:T,delay:S}),f.transitions.create("transform",{duration:Ct?T:T*.666,delay:Ct?S:S||T*.333,easing:$})].join(","),d.style.opacity=0,d.style.transform=It(.75),x&&x(d)}),z=R(P),N=d=>{I==="auto"&&C.start(l.current||0,d),r&&r(E.current,d)};return A.jsx(M,{appear:s,in:a,nodeRef:E,onEnter:O,onEntered:j,onEntering:b,onExit:U,onExited:z,onExiting:K,addEndListener:N,timeout:I==="auto"?null:I,...v,children:(d,{ownerState:h,...S})=>c.cloneElement(n,{style:{opacity:0,transform:It(.75),visibility:d==="exited"&&!a?"hidden":void 0,...xe[d],...g,...n.props.style},ref:k,...S})})});St&&(St.muiSupportAuto=!0);function Re(t){const e=X(t);return e.body===t?V(t).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function pt(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function Gt(t){return parseInt(V(t).getComputedStyle(t).paddingRight,10)||0}function Te(t){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(t.tagName),r=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return o||r}function qt(t,e,o,r,s){const n=[e,o,...r];[].forEach.call(t.children,i=>{const a=!n.includes(i),u=!Te(i);a&&u&&pt(i,s)})}function kt(t,e){let o=-1;return t.some((r,s)=>e(r)?(o=s,!0):!1),o}function Pe(t,e){const o=[],r=t.container;if(!e.disableScrollLock){if(Re(r)){const i=Vt(V(r));o.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Gt(r)+i}px`;const a=X(r).querySelectorAll(".mui-fixed");[].forEach.call(a,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${Gt(u)+i}px`})}let n;if(r.parentNode instanceof DocumentFragment)n=X(r).body;else{const i=r.parentElement,a=V(r);n=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:r}o.push({value:n.style.overflow,property:"overflow",el:n},{value:n.style.overflowX,property:"overflow-x",el:n},{value:n.style.overflowY,property:"overflow-y",el:n}),n.style.overflow="hidden"}return()=>{o.forEach(({value:n,el:i,property:a})=>{n?i.style.setProperty(a,n):i.style.removeProperty(a)})}}function Ce(t){const e=[];return[].forEach.call(t.children,o=>{o.getAttribute("aria-hidden")==="true"&&e.push(o)}),e}class ke{constructor(){this.modals=[],this.containers=[]}add(e,o){let r=this.modals.indexOf(e);if(r!==-1)return r;r=this.modals.length,this.modals.push(e),e.modalRef&&pt(e.modalRef,!1);const s=Ce(o);qt(o,e.mount,e.modalRef,s,!0);const n=kt(this.containers,i=>i.container===o);return n!==-1?(this.containers[n].modals.push(e),r):(this.containers.push({modals:[e],container:o,restore:null,hiddenSiblings:s}),r)}mount(e,o){const r=kt(this.containers,n=>n.modals.includes(e)),s=this.containers[r];s.restore||(s.restore=Pe(s,o))}remove(e,o=!0){const r=this.modals.indexOf(e);if(r===-1)return r;const s=kt(this.containers,i=>i.modals.includes(e)),n=this.containers[s];if(n.modals.splice(n.modals.indexOf(e),1),this.modals.splice(r,1),n.modals.length===0)n.restore&&n.restore(),e.modalRef&&pt(e.modalRef,o),qt(n.container,e.mount,e.modalRef,n.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=n.modals[n.modals.length-1];i.modalRef&&pt(i.modalRef,!1)}return r}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}const we=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Me(t){const e=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(e)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e}function Ne(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const e=r=>t.ownerDocument.querySelector(`input[type="radio"]${r}`);let o=e(`[name="${t.name}"]:checked`);return o||(o=e(`[name="${t.name}"]`)),o!==t}function Ie(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||Ne(t))}function Se(t){const e=[],o=[];return Array.from(t.querySelectorAll(we)).forEach((r,s)=>{const n=Me(r);n===-1||!Ie(r)||(n===0?e.push(r):o.push({documentOrder:s,tabIndex:n,node:r}))}),o.sort((r,s)=>r.tabIndex===s.tabIndex?r.documentOrder-s.documentOrder:r.tabIndex-s.tabIndex).map(r=>r.node).concat(e)}function Le(){return!0}function Oe(t){const{children:e,disableAutoFocus:o=!1,disableEnforceFocus:r=!1,disableRestoreFocus:s=!1,getTabbable:n=Se,isEnabled:i=Le,open:a}=t,u=c.useRef(!1),m=c.useRef(null),y=c.useRef(null),x=c.useRef(null),P=c.useRef(null),p=c.useRef(!1),g=c.useRef(null),I=ct(yt(e),g),M=c.useRef(null);c.useEffect(()=>{!a||!g.current||(p.current=!o)},[o,a]),c.useEffect(()=>{if(!a||!g.current)return;const l=X(g.current);return g.current.contains(l.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),p.current&&g.current.focus()),()=>{s||(x.current&&x.current.focus&&(u.current=!0,x.current.focus()),x.current=null)}},[a]),c.useEffect(()=>{if(!a||!g.current)return;const l=X(g.current),f=R=>{M.current=R,!(r||!i()||R.key!=="Tab")&&l.activeElement===g.current&&R.shiftKey&&(u.current=!0,y.current&&y.current.focus())},E=()=>{var O,j;const R=g.current;if(R===null)return;if(!l.hasFocus()||!i()||u.current){u.current=!1;return}if(R.contains(l.activeElement)||r&&l.activeElement!==m.current&&l.activeElement!==y.current)return;if(l.activeElement!==P.current)P.current=null;else if(P.current!==null)return;if(!p.current)return;let b=[];if((l.activeElement===m.current||l.activeElement===y.current)&&(b=n(g.current)),b.length>0){const K=!!((O=M.current)!=null&&O.shiftKey&&((j=M.current)==null?void 0:j.key)==="Tab"),U=b[0],z=b[b.length-1];typeof U!="string"&&typeof z!="string"&&(K?z.focus():U.focus())}else R.focus()};l.addEventListener("focusin",E),l.addEventListener("keydown",f,!0);const k=setInterval(()=>{l.activeElement&&l.activeElement.tagName==="BODY"&&E()},50);return()=>{clearInterval(k),l.removeEventListener("focusin",E),l.removeEventListener("keydown",f,!0)}},[o,r,s,i,a,n]);const v=l=>{x.current===null&&(x.current=l.relatedTarget),p.current=!0,P.current=l.target;const f=e.props.onFocus;f&&f(l)},C=l=>{x.current===null&&(x.current=l.relatedTarget),p.current=!0};return A.jsxs(c.Fragment,{children:[A.jsx("div",{tabIndex:a?0:-1,onFocus:C,ref:m,"data-testid":"sentinelStart"}),c.cloneElement(e,{ref:I,onFocus:v}),A.jsx("div",{tabIndex:a?0:-1,onFocus:C,ref:y,"data-testid":"sentinelEnd"})]})}function Fe(t){return typeof t=="function"?t():t}const De=c.forwardRef(function(e,o){const{children:r,container:s,disablePortal:n=!1}=e,[i,a]=c.useState(null),u=ct(c.isValidElement(r)?yt(r):null,o);if(Mt(()=>{n||a(Fe(s)||document.body)},[s,n]),Mt(()=>{if(i&&!n)return Kt(o,i),()=>{Kt(o,null)}},[o,i,n]),n){if(c.isValidElement(r)){const m={ref:u};return c.cloneElement(r,m)}return r}return i&&ie.createPortal(r,i)}),Ae={entering:{opacity:1},entered:{opacity:1}},je=c.forwardRef(function(e,o){const r=Lt(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:n,appear:i=!0,children:a,easing:u,in:m,onEnter:y,onEntered:x,onEntering:P,onExit:p,onExited:g,onExiting:I,style:M,timeout:v=s,TransitionComponent:C=G,...l}=e,f=c.useRef(null),E=ct(f,yt(a),o),k=N=>d=>{if(N){const h=f.current;d===void 0?N(h):N(h,d)}},R=k(P),b=k((N,d)=>{ee(N);const h=bt({style:M,timeout:v,easing:u},{mode:"enter"});N.style.webkitTransition=r.transitions.create("opacity",h),N.style.transition=r.transitions.create("opacity",h),y&&y(N,d)}),O=k(x),j=k(I),K=k(N=>{const d=bt({style:M,timeout:v,easing:u},{mode:"exit"});N.style.webkitTransition=r.transitions.create("opacity",d),N.style.transition=r.transitions.create("opacity",d),p&&p(N)}),U=k(g),z=N=>{n&&n(f.current,N)};return A.jsx(C,{appear:i,in:m,nodeRef:f,onEnter:b,onEntered:O,onEntering:R,onExit:K,onExited:U,onExiting:j,addEndListener:z,timeout:v,...l,children:(N,{ownerState:d,...h})=>c.cloneElement(a,{style:{opacity:0,visibility:N==="exited"&&!m?"hidden":void 0,...Ae[N],...M,...a.props.style},ref:E,...h})})});function Ke(t){return st("MuiBackdrop",t)}it("MuiBackdrop",["root","invisible"]);const Ue=t=>{const{classes:e,invisible:o}=t;return lt({root:["root",o&&"invisible"]},Ke,e)},$e=W("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.invisible&&e.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),ze=c.forwardRef(function(e,o){const r=at({props:e,name:"MuiBackdrop"}),{children:s,className:n,component:i="div",invisible:a=!1,open:u,components:m={},componentsProps:y={},slotProps:x={},slots:P={},TransitionComponent:p,transitionDuration:g,...I}=r,M={...r,component:i,invisible:a},v=Ue(M),C={transition:p,root:m.Root,...P},l={...y,...x},f={slots:C,slotProps:l},[E,k]=q("root",{elementType:$e,externalForwardedProps:f,className:_(v.root,n),ownerState:M}),[R,b]=q("transition",{elementType:je,externalForwardedProps:f,ownerState:M});return A.jsx(R,{in:u,timeout:g,...I,...b,children:A.jsx(E,{"aria-hidden":!0,...k,classes:v,ref:o,children:s})})});function Be(t){return typeof t=="function"?t():t}function He(t){return t?t.props.hasOwnProperty("in"):!1}const _t=()=>{},Et=new ke;function We(t){const{container:e,disableEscapeKeyDown:o=!1,disableScrollLock:r=!1,closeAfterTransition:s=!1,onTransitionEnter:n,onTransitionExited:i,children:a,onClose:u,open:m,rootRef:y}=t,x=c.useRef({}),P=c.useRef(null),p=c.useRef(null),g=ct(p,y),[I,M]=c.useState(!m),v=He(a);let C=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(C=!1);const l=()=>X(P.current),f=()=>(x.current.modalRef=p.current,x.current.mount=P.current,x.current),E=()=>{Et.mount(f(),{disableScrollLock:r}),p.current&&(p.current.scrollTop=0)},k=Ut(()=>{const d=Be(e)||l().body;Et.add(f(),d),p.current&&E()}),R=()=>Et.isTopModal(f()),b=Ut(d=>{P.current=d,d&&(m&&R()?E():p.current&&pt(p.current,C))}),O=c.useCallback(()=>{Et.remove(f(),C)},[C]);c.useEffect(()=>()=>{O()},[O]),c.useEffect(()=>{m?k():(!v||!s)&&O()},[m,O,v,s,k]);const j=d=>h=>{var S;(S=d.onKeyDown)==null||S.call(d,h),!(h.key!=="Escape"||h.which===229||!R())&&(o||(h.stopPropagation(),u&&u(h,"escapeKeyDown")))},K=d=>h=>{var S;(S=d.onClick)==null||S.call(d,h),h.target===h.currentTarget&&u&&u(h,"backdropClick")};return{getRootProps:(d={})=>{const h=ce(t);delete h.onTransitionEnter,delete h.onTransitionExited;const S={...h,...d};return{role:"presentation",...S,onKeyDown:j(S),ref:g}},getBackdropProps:(d={})=>{const h=d;return{"aria-hidden":!0,...h,onClick:K(h),open:m}},getTransitionProps:()=>{const d=()=>{M(!1),n&&n()},h=()=>{M(!0),i&&i(),s&&O()};return{onEnter:Bt(d,(a==null?void 0:a.props.onEnter)??_t),onExited:Bt(h,(a==null?void 0:a.props.onExited)??_t)}},rootRef:g,portalRef:b,isTopModal:R,exited:I,hasTransition:v}}function Ge(t){return st("MuiModal",t)}it("MuiModal",["root","hidden","backdrop"]);const qe=t=>{const{open:e,exited:o,classes:r}=t;return lt({root:["root",!e&&o&&"hidden"],backdrop:["backdrop"]},Ge,r)},_e=W("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.open&&o.exited&&e.hidden]}})(Qt(({theme:t})=>({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:e})=>!e.open&&e.exited,style:{visibility:"hidden"}}]}))),Xe=W(ze,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,e)=>e.backdrop})({zIndex:-1}),Ye=c.forwardRef(function(e,o){const r=at({name:"MuiModal",props:e}),{BackdropComponent:s=Xe,BackdropProps:n,classes:i,className:a,closeAfterTransition:u=!1,children:m,container:y,component:x,components:P={},componentsProps:p={},disableAutoFocus:g=!1,disableEnforceFocus:I=!1,disableEscapeKeyDown:M=!1,disablePortal:v=!1,disableRestoreFocus:C=!1,disableScrollLock:l=!1,hideBackdrop:f=!1,keepMounted:E=!1,onBackdropClick:k,onClose:R,onTransitionEnter:b,onTransitionExited:O,open:j,slotProps:K={},slots:U={},theme:z,...N}=r,d={...r,closeAfterTransition:u,disableAutoFocus:g,disableEnforceFocus:I,disableEscapeKeyDown:M,disablePortal:v,disableRestoreFocus:C,disableScrollLock:l,hideBackdrop:f,keepMounted:E},{getRootProps:h,getBackdropProps:S,getTransitionProps:$,portalRef:T,isTopModal:F,exited:Y,hasTransition:ht}=We({...d,rootRef:o}),Z={...d,exited:Y},B=qe(Z),tt={};if(m.props.tabIndex===void 0&&(tt.tabIndex="-1"),ht){const{onEnter:L,onExited:D}=$();tt.onEnter=L,tt.onExited=D}const mt={slots:{root:P.Root,backdrop:P.Backdrop,...U},slotProps:{...p,...K}},[xt,Rt]=q("root",{ref:o,elementType:_e,externalForwardedProps:{...mt,...N,component:x},getSlotProps:h,ownerState:Z,className:_(a,B==null?void 0:B.root,!Z.open&&Z.exited&&(B==null?void 0:B.hidden))}),[Tt,w]=q("backdrop",{ref:n==null?void 0:n.ref,elementType:s,externalForwardedProps:mt,shouldForwardComponentProp:!0,additionalProps:n,getSlotProps:L=>S({...L,onClick:D=>{k&&k(D),L!=null&&L.onClick&&L.onClick(D)}}),className:_(n==null?void 0:n.className,B==null?void 0:B.backdrop),ownerState:Z});return!E&&!j&&(!ht||Y)?null:A.jsx(De,{ref:T,container:y,disablePortal:v,children:A.jsxs(xt,{...Rt,children:[!f&&s?A.jsx(Tt,{...w}):null,A.jsx(Oe,{disableEnforceFocus:I,disableAutoFocus:g,disableRestoreFocus:C,isEnabled:F,open:j,children:c.cloneElement(m,tt)})]})})});function Ze(t){return st("MuiPaper",t)}it("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Je=t=>{const{square:e,elevation:o,variant:r,classes:s}=t,n={root:["root",r,!e&&"rounded",r==="elevation"&&`elevation${o}`]};return lt(n,Ze,s)},Qe=W("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],!o.square&&e.rounded,o.variant==="elevation"&&e[`elevation${o.elevation}`]]}})(Qt(({theme:t})=>({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(t.vars||t).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),Ve=c.forwardRef(function(e,o){var p;const r=at({props:e,name:"MuiPaper"}),s=Lt(),{className:n,component:i="div",elevation:a=1,square:u=!1,variant:m="elevation",...y}=r,x={...r,component:i,elevation:a,square:u,variant:m},P=Je(x);return A.jsx(Qe,{as:i,ownerState:x,className:_(P.root,n),ref:o,...y,style:{...m==="elevation"&&{"--Paper-shadow":(s.vars||s).shadows[a],...s.vars&&{"--Paper-overlay":(p=s.vars.overlays)==null?void 0:p[a]},...!s.vars&&s.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${$t("#fff",zt(a))}, ${$t("#fff",zt(a))})`}},...y.style}})});function tn(t){return st("MuiPopover",t)}const hn=it("MuiPopover",["root","paper"]);function Xt(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.height/2:e==="bottom"&&(o=t.height),o}function Yt(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.width/2:e==="right"&&(o=t.width),o}function Zt(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function wt(t){return typeof t=="function"?t():t}const en=t=>{const{classes:e}=t;return lt({root:["root"],paper:["paper"]},tn,e)},nn=W(Ye,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),ne=W(Ve,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),on=c.forwardRef(function(e,o){const r=at({props:e,name:"MuiPopover"}),{action:s,anchorEl:n,anchorOrigin:i={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:u="anchorEl",children:m,className:y,container:x,elevation:P=8,marginThreshold:p=16,open:g,PaperProps:I={},slots:M={},slotProps:v={},transformOrigin:C={vertical:"top",horizontal:"left"},TransitionComponent:l,transitionDuration:f="auto",TransitionProps:E={},disableScrollLock:k=!1,...R}=r,b=c.useRef(),O={...r,anchorOrigin:i,anchorReference:u,elevation:P,marginThreshold:p,transformOrigin:C,TransitionComponent:l,transitionDuration:f,TransitionProps:E},j=en(O),K=c.useCallback(()=>{if(u==="anchorPosition")return a;const w=wt(n),D=(w&&w.nodeType===1?w:X(b.current).body).getBoundingClientRect();return{top:D.top+Xt(D,i.vertical),left:D.left+Yt(D,i.horizontal)}},[n,i.horizontal,i.vertical,a,u]),U=c.useCallback(w=>({vertical:Xt(w,C.vertical),horizontal:Yt(w,C.horizontal)}),[C.horizontal,C.vertical]),z=c.useCallback(w=>{const L={width:w.offsetWidth,height:w.offsetHeight},D=U(L);if(u==="none")return{top:null,left:null,transformOrigin:Zt(D)};const ut=K();let et=ut.top-D.vertical,nt=ut.left-D.horizontal;const Ot=et+L.height,Ft=nt+L.width,Dt=V(wt(n)),At=Dt.innerHeight-p,jt=Dt.innerWidth-p;if(p!==null&&et<p){const H=et-p;et-=H,D.vertical+=H}else if(p!==null&&Ot>At){const H=Ot-At;et-=H,D.vertical+=H}if(p!==null&&nt<p){const H=nt-p;nt-=H,D.horizontal+=H}else if(Ft>jt){const H=Ft-jt;nt-=H,D.horizontal+=H}return{top:`${Math.round(et)}px`,left:`${Math.round(nt)}px`,transformOrigin:Zt(D)}},[n,u,K,U,p]),[N,d]=c.useState(g),h=c.useCallback(()=>{const w=b.current;if(!w)return;const L=z(w);L.top!==null&&w.style.setProperty("top",L.top),L.left!==null&&(w.style.left=L.left),w.style.transformOrigin=L.transformOrigin,d(!0)},[z]);c.useEffect(()=>(k&&window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)),[n,k,h]);const S=()=>{h()},$=()=>{d(!1)};c.useEffect(()=>{g&&h()}),c.useImperativeHandle(s,()=>g?{updatePosition:()=>{h()}}:null,[g,h]),c.useEffect(()=>{if(!g)return;const w=ue(()=>{h()}),L=V(n);return L.addEventListener("resize",w),()=>{w.clear(),L.removeEventListener("resize",w)}},[n,g,h]);let T=f;const F={slots:{transition:l,...M},slotProps:{transition:E,paper:I,...v}},[Y,ht]=q("transition",{elementType:St,externalForwardedProps:F,ownerState:O,getSlotProps:w=>({...w,onEntering:(L,D)=>{var ut;(ut=w.onEntering)==null||ut.call(w,L,D),S()},onExited:L=>{var D;(D=w.onExited)==null||D.call(w,L),$()}}),additionalProps:{appear:!0,in:g}});f==="auto"&&!Y.muiSupportAuto&&(T=void 0);const Z=x||(n?X(wt(n)).body:void 0),[B,{slots:tt,slotProps:mt,...xt}]=q("root",{ref:o,elementType:nn,externalForwardedProps:{...F,...R},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:M.backdrop},slotProps:{backdrop:fe(typeof v.backdrop=="function"?v.backdrop(O):v.backdrop,{invisible:!0})},container:Z,open:g},ownerState:O,className:_(j.root,y)}),[Rt,Tt]=q("paper",{ref:b,className:j.paper,elementType:ne,externalForwardedProps:F,shouldForwardComponentProp:!0,additionalProps:{elevation:P,style:N?void 0:{opacity:0}},ownerState:O});return A.jsx(B,{...xt,...!he(B)&&{slots:tt,slotProps:mt,disableScrollLock:k},children:A.jsx(Y,{...ht,timeout:T,children:A.jsx(Rt,{...Tt,children:m})})})});function rn(t){return st("MuiMenu",t)}const mn=it("MuiMenu",["root","paper","list"]),sn={vertical:"top",horizontal:"right"},an={vertical:"top",horizontal:"left"},ln=t=>{const{classes:e}=t;return lt({root:["root"],paper:["paper"],list:["list"]},rn,e)},cn=W(on,{shouldForwardProp:t=>le(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),un=W(ne,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),dn=W(ye,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),gn=c.forwardRef(function(e,o){const r=at({props:e,name:"MuiMenu"}),{autoFocus:s=!0,children:n,className:i,disableAutoFocusItem:a=!1,MenuListProps:u={},onClose:m,open:y,PaperProps:x={},PopoverClasses:P,transitionDuration:p="auto",TransitionProps:{onEntering:g,...I}={},variant:M="selectedMenu",slots:v={},slotProps:C={},...l}=r,f=ae(),E={...r,autoFocus:s,disableAutoFocusItem:a,MenuListProps:u,onEntering:g,PaperProps:x,transitionDuration:p,TransitionProps:I,variant:M},k=ln(E),R=s&&!a&&y,b=c.useRef(null),O=(T,F)=>{b.current&&b.current.adjustStyleForScrollbar(T,{direction:f?"rtl":"ltr"}),g&&g(T,F)},j=T=>{T.key==="Tab"&&(T.preventDefault(),m&&m(T,"tabKeyDown"))};let K=-1;c.Children.map(n,(T,F)=>{c.isValidElement(T)&&(T.props.disabled||(M==="selectedMenu"&&T.props.selected||K===-1)&&(K=F))});const U={slots:v,slotProps:{list:u,transition:I,paper:x,...C}},z=de({elementType:v.root,externalSlotProps:C.root,ownerState:E,className:[k.root,i]}),[N,d]=q("paper",{className:k.paper,elementType:un,externalForwardedProps:U,shouldForwardComponentProp:!0,ownerState:E}),[h,S]=q("list",{className:_(k.list,u.className),elementType:dn,shouldForwardComponentProp:!0,externalForwardedProps:U,getSlotProps:T=>({...T,onKeyDown:F=>{var Y;j(F),(Y=T.onKeyDown)==null||Y.call(T,F)}}),ownerState:E}),$=typeof U.slotProps.transition=="function"?U.slotProps.transition(E):U.slotProps.transition;return A.jsx(cn,{onClose:m,anchorOrigin:{vertical:"bottom",horizontal:f?"right":"left"},transformOrigin:f?sn:an,slots:{root:v.root,paper:N,backdrop:v.backdrop,...v.transition&&{transition:v.transition}},slotProps:{root:z,paper:d,backdrop:typeof C.backdrop=="function"?C.backdrop(E):C.backdrop,transition:{...$,onEntering:(...T)=>{var F;O(...T),(F=$==null?void 0:$.onEntering)==null||F.call($,...T)}}},open:y,ref:o,transitionDuration:p,ownerState:E,...l,classes:P,children:A.jsx(h,{actions:b,autoFocus:s&&(K===-1||a),autoFocusItem:R,variant:M,...S,children:n})})});export{ze as B,rt as E,je as F,St as G,me as L,gn as M,Ve as P,G as T,be as a,on as b,Q as c,Nt as d,J as e,bt as f,yt as g,Ye as h,he as i,De as j,pe as k,Bt as l,fe as m,Oe as n,ye as o,hn as p,mn as q,ee as r};
