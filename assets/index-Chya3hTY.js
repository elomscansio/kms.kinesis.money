import{bw as _e,r as p,q as yo,j as vo,w as eo,x as to}from"./index-B1IYvx0M.js";import{c as Ct}from"./index-iGSc46GB.js";const Ie=Math.min,Se=Math.max,mt=Math.round,pt=Math.floor,ue=e=>({x:e,y:e}),wo={left:"right",right:"left",bottom:"top",top:"bottom"},bo={start:"end",end:"start"};function Rt(e,t,n){return Se(e,Ie(t,n))}function nt(e,t){return typeof e=="function"?e(t):e}function Ae(e){return e.split("-")[0]}function rt(e){return e.split("-")[1]}function oo(e){return e==="x"?"y":"x"}function Lt(e){return e==="y"?"height":"width"}function je(e){return["top","bottom"].includes(Ae(e))?"y":"x"}function Nt(e){return oo(je(e))}function xo(e,t,n){n===void 0&&(n=!1);const o=rt(e),r=Nt(e),l=Lt(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(s=ht(s)),[s,ht(s)]}function Eo(e){const t=ht(e);return[Ot(e),t,Ot(t)]}function Ot(e){return e.replace(/start|end/g,t=>bo[t])}function _o(e,t,n){const o=["left","right"],r=["right","left"],l=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?l:s;default:return[]}}function So(e,t,n,o){const r=rt(e);let l=_o(Ae(e),n==="start",o);return r&&(l=l.map(s=>s+"-"+r),t&&(l=l.concat(l.map(Ot)))),l}function ht(e){return e.replace(/left|right|bottom|top/g,t=>wo[t])}function Ao(e){return{top:0,right:0,bottom:0,left:0,...e}}function no(e){return typeof e!="number"?Ao(e):{top:e,right:e,bottom:e,left:e}}function gt(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Wt(e,t,n){let{reference:o,floating:r}=e;const l=je(t),s=Nt(t),i=Lt(s),c=Ae(t),a=l==="y",m=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,v=o[i]/2-r[i]/2;let f;switch(c){case"top":f={x:m,y:o.y-r.height};break;case"bottom":f={x:m,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-r.width,y:d};break;default:f={x:o.x,y:o.y}}switch(rt(t)){case"start":f[s]-=v*(n&&a?-1:1);break;case"end":f[s]+=v*(n&&a?-1:1);break}return f}const Co=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:s}=n,i=l.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:m,y:d}=Wt(a,o,c),v=o,f={},h=0;for(let w=0;w<i.length;w++){const{name:E,fn:b}=i[w],{x:S,y:_,data:O,reset:C}=await b({x:m,y:d,initialPlacement:o,placement:v,strategy:r,middlewareData:f,rects:a,platform:s,elements:{reference:e,floating:t}});m=S??m,d=_??d,f={...f,[E]:{...f[E],...O}},C&&h<=50&&(h++,typeof C=="object"&&(C.placement&&(v=C.placement),C.rects&&(a=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):C.rects),{x:m,y:d}=Wt(a,v,c)),w=-1)}return{x:m,y:d,placement:v,strategy:r,middlewareData:f}};async function ro(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:l,rects:s,elements:i,strategy:c}=e,{boundary:a="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:v=!1,padding:f=0}=nt(t,e),h=no(f),E=i[v?d==="floating"?"reference":"floating":d],b=gt(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(E)))==null||n?E:E.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(i.floating)),boundary:a,rootBoundary:m,strategy:c})),S=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,_=await(l.getOffsetParent==null?void 0:l.getOffsetParent(i.floating)),O=await(l.isElement==null?void 0:l.isElement(_))?await(l.getScale==null?void 0:l.getScale(_))||{x:1,y:1}:{x:1,y:1},C=gt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:S,offsetParent:_,strategy:c}):S);return{top:(b.top-C.top+h.top)/O.y,bottom:(C.bottom-b.bottom+h.bottom)/O.y,left:(b.left-C.left+h.left)/O.x,right:(C.right-b.right+h.right)/O.x}}const Ro=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:l,platform:s,elements:i,middlewareData:c}=t,{element:a,padding:m=0}=nt(e,t)||{};if(a==null)return{};const d=no(m),v={x:n,y:o},f=Nt(r),h=Lt(f),w=await s.getDimensions(a),E=f==="y",b=E?"top":"left",S=E?"bottom":"right",_=E?"clientHeight":"clientWidth",O=l.reference[h]+l.reference[f]-v[f]-l.floating[h],C=v[f]-l.reference[f],H=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let k=H?H[_]:0;(!k||!await(s.isElement==null?void 0:s.isElement(H)))&&(k=i.floating[_]||l.floating[h]);const J=O/2-C/2,q=k/2-w[h]/2-1,Q=Ie(d[b],q),se=Ie(d[S],q),Z=Q,ie=k-w[h]-se,T=k/2-w[h]/2+J,K=Rt(Z,T,ie),M=!c.arrow&&rt(r)!=null&&T!==K&&l.reference[h]/2-(T<Z?Q:se)-w[h]/2<0,F=M?T<Z?T-Z:T-ie:0;return{[f]:v[f]+F,data:{[f]:K,centerOffset:T-K-F,...M&&{alignmentOffset:F}},reset:M}}}),Oo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:l,rects:s,initialPlacement:i,platform:c,elements:a}=t,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:v,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:w=!0,...E}=nt(e,t);if((n=l.arrow)!=null&&n.alignmentOffset)return{};const b=Ae(r),S=je(i),_=Ae(i)===i,O=await(c.isRTL==null?void 0:c.isRTL(a.floating)),C=v||(_||!w?[ht(i)]:Eo(i)),H=h!=="none";!v&&H&&C.push(...So(i,w,h,O));const k=[i,...C],J=await ro(t,E),q=[];let Q=((o=l.flip)==null?void 0:o.overflows)||[];if(m&&q.push(J[b]),d){const T=xo(r,s,O);q.push(J[T[0]],J[T[1]])}if(Q=[...Q,{placement:r,overflows:q}],!q.every(T=>T<=0)){var se,Z;const T=(((se=l.flip)==null?void 0:se.index)||0)+1,K=k[T];if(K)return{data:{index:T,overflows:Q},reset:{placement:K}};let M=(Z=Q.filter(F=>F.overflows[0]<=0).sort((F,D)=>F.overflows[1]-D.overflows[1])[0])==null?void 0:Z.placement;if(!M)switch(f){case"bestFit":{var ie;const F=(ie=Q.filter(D=>{if(H){const W=je(D.placement);return W===S||W==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(W=>W>0).reduce((W,pe)=>W+pe,0)]).sort((D,W)=>D[1]-W[1])[0])==null?void 0:ie[0];F&&(M=F);break}case"initialPlacement":M=i;break}if(r!==M)return{reset:{placement:M}}}return{}}}};async function To(e,t){const{placement:n,platform:o,elements:r}=e,l=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Ae(n),i=rt(n),c=je(n)==="y",a=["left","top"].includes(s)?-1:1,m=l&&c?-1:1,d=nt(t,e);let{mainAxis:v,crossAxis:f,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return i&&typeof h=="number"&&(f=i==="end"?h*-1:h),c?{x:f*m,y:v*a}:{x:v*a,y:f*m}}const ko=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:l,placement:s,middlewareData:i}=t,c=await To(t,e);return s===((n=i.offset)==null?void 0:n.placement)&&(o=i.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:l+c.y,data:{...c,placement:s}}}}},Lo=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:E=>{let{x:b,y:S}=E;return{x:b,y:S}}},...c}=nt(e,t),a={x:n,y:o},m=await ro(t,c),d=je(Ae(r)),v=oo(d);let f=a[v],h=a[d];if(l){const E=v==="y"?"top":"left",b=v==="y"?"bottom":"right",S=f+m[E],_=f-m[b];f=Rt(S,f,_)}if(s){const E=d==="y"?"top":"left",b=d==="y"?"bottom":"right",S=h+m[E],_=h-m[b];h=Rt(S,h,_)}const w=i.fn({...t,[v]:f,[d]:h});return{...w,data:{x:w.x-n,y:w.y-o,enabled:{[v]:l,[d]:s}}}}}};function yt(){return typeof window<"u"}function We(e){return lo(e)?(e.nodeName||"").toLowerCase():"#document"}function U(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function de(e){var t;return(t=(lo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function lo(e){return yt()?e instanceof Node||e instanceof U(e).Node:!1}function re(e){return yt()?e instanceof Element||e instanceof U(e).Element:!1}function fe(e){return yt()?e instanceof HTMLElement||e instanceof U(e).HTMLElement:!1}function zt(e){return!yt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof U(e).ShadowRoot}function lt(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=le(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function No(e){return["table","td","th"].includes(We(e))}function vt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Dt(e){const t=$t(),n=re(e)?le(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Do(e){let t=ve(e);for(;fe(t)&&!Me(t);){if(Dt(t))return t;if(vt(t))return null;t=ve(t)}return null}function $t(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Me(e){return["html","body","#document"].includes(We(e))}function le(e){return U(e).getComputedStyle(e)}function wt(e){return re(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ve(e){if(We(e)==="html")return e;const t=e.assignedSlot||e.parentNode||zt(e)&&e.host||de(e);return zt(t)?t.host:t}function so(e){const t=ve(e);return Me(t)?e.ownerDocument?e.ownerDocument.body:e.body:fe(t)&&lt(t)?t:so(t)}function ot(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=so(e),l=r===((o=e.ownerDocument)==null?void 0:o.body),s=U(r);if(l){const i=Tt(s);return t.concat(s,s.visualViewport||[],lt(r)?r:[],i&&n?ot(i):[])}return t.concat(r,ot(r,[],n))}function Tt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function io(e){const t=le(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=fe(e),l=r?e.offsetWidth:n,s=r?e.offsetHeight:o,i=mt(n)!==l||mt(o)!==s;return i&&(n=l,o=s),{width:n,height:o,$:i}}function Pt(e){return re(e)?e:e.contextElement}function Fe(e){const t=Pt(e);if(!fe(t))return ue(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:l}=io(t);let s=(l?mt(n.width):n.width)/o,i=(l?mt(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const $o=ue(0);function co(e){const t=U(e);return!$t()||!t.visualViewport?$o:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Po(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==U(e)?!1:t}function Ce(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),l=Pt(e);let s=ue(1);t&&(o?re(o)&&(s=Fe(o)):s=Fe(e));const i=Po(l,n,o)?co(l):ue(0);let c=(r.left+i.x)/s.x,a=(r.top+i.y)/s.y,m=r.width/s.x,d=r.height/s.y;if(l){const v=U(l),f=o&&re(o)?U(o):o;let h=v,w=Tt(h);for(;w&&o&&f!==h;){const E=Fe(w),b=w.getBoundingClientRect(),S=le(w),_=b.left+(w.clientLeft+parseFloat(S.paddingLeft))*E.x,O=b.top+(w.clientTop+parseFloat(S.paddingTop))*E.y;c*=E.x,a*=E.y,m*=E.x,d*=E.y,c+=_,a+=O,h=U(w),w=Tt(h)}}return gt({width:m,height:d,x:c,y:a})}function Bt(e,t){const n=wt(e).scrollLeft;return t?t.left+n:Ce(de(e)).left+n}function ao(e,t,n){n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(n?0:Bt(e,o)),l=o.top+t.scrollTop;return{x:r,y:l}}function Bo(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const l=r==="fixed",s=de(o),i=t?vt(t.floating):!1;if(o===s||i&&l)return n;let c={scrollLeft:0,scrollTop:0},a=ue(1);const m=ue(0),d=fe(o);if((d||!d&&!l)&&((We(o)!=="body"||lt(s))&&(c=wt(o)),fe(o))){const f=Ce(o);a=Fe(o),m.x=f.x+o.clientLeft,m.y=f.y+o.clientTop}const v=s&&!d&&!l?ao(s,c,!0):ue(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+m.x+v.x,y:n.y*a.y-c.scrollTop*a.y+m.y+v.y}}function Fo(e){return Array.from(e.getClientRects())}function Io(e){const t=de(e),n=wt(e),o=e.ownerDocument.body,r=Se(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),l=Se(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Bt(e);const i=-n.scrollTop;return le(o).direction==="rtl"&&(s+=Se(t.clientWidth,o.clientWidth)-r),{width:r,height:l,x:s,y:i}}function jo(e,t){const n=U(e),o=de(e),r=n.visualViewport;let l=o.clientWidth,s=o.clientHeight,i=0,c=0;if(r){l=r.width,s=r.height;const a=$t();(!a||a&&t==="fixed")&&(i=r.offsetLeft,c=r.offsetTop)}return{width:l,height:s,x:i,y:c}}function Mo(e,t){const n=Ce(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,l=fe(e)?Fe(e):ue(1),s=e.clientWidth*l.x,i=e.clientHeight*l.y,c=r*l.x,a=o*l.y;return{width:s,height:i,x:c,y:a}}function Vt(e,t,n){let o;if(t==="viewport")o=jo(e,n);else if(t==="document")o=Io(de(e));else if(re(t))o=Mo(t,n);else{const r=co(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return gt(o)}function uo(e,t){const n=ve(e);return n===t||!re(n)||Me(n)?!1:le(n).position==="fixed"||uo(n,t)}function Wo(e,t){const n=t.get(e);if(n)return n;let o=ot(e,[],!1).filter(i=>re(i)&&We(i)!=="body"),r=null;const l=le(e).position==="fixed";let s=l?ve(e):e;for(;re(s)&&!Me(s);){const i=le(s),c=Dt(s);!c&&i.position==="fixed"&&(r=null),(l?!c&&!r:!c&&i.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||lt(s)&&!c&&uo(e,s))?o=o.filter(m=>m!==s):r=i,s=ve(s)}return t.set(e,o),o}function zo(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?vt(t)?[]:Wo(t,this._c):[].concat(n),o],i=s[0],c=s.reduce((a,m)=>{const d=Vt(t,m,r);return a.top=Se(d.top,a.top),a.right=Ie(d.right,a.right),a.bottom=Ie(d.bottom,a.bottom),a.left=Se(d.left,a.left),a},Vt(t,i,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Vo(e){const{width:t,height:n}=io(e);return{width:t,height:n}}function Ho(e,t,n){const o=fe(t),r=de(t),l=n==="fixed",s=Ce(e,!0,l,t);let i={scrollLeft:0,scrollTop:0};const c=ue(0);if(o||!o&&!l)if((We(t)!=="body"||lt(r))&&(i=wt(t)),o){const v=Ce(t,!0,l,t);c.x=v.x+t.clientLeft,c.y=v.y+t.clientTop}else r&&(c.x=Bt(r));const a=r&&!o&&!l?ao(r,i):ue(0),m=s.left+i.scrollLeft-c.x-a.x,d=s.top+i.scrollTop-c.y-a.y;return{x:m,y:d,width:s.width,height:s.height}}function St(e){return le(e).position==="static"}function Ht(e,t){if(!fe(e)||le(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return de(e)===n&&(n=n.ownerDocument.body),n}function fo(e,t){const n=U(e);if(vt(e))return n;if(!fe(e)){let r=ve(e);for(;r&&!Me(r);){if(re(r)&&!St(r))return r;r=ve(r)}return n}let o=Ht(e,t);for(;o&&No(o)&&St(o);)o=Ht(o,t);return o&&Me(o)&&St(o)&&!Dt(o)?n:o||Do(e)||n}const qo=async function(e){const t=this.getOffsetParent||fo,n=this.getDimensions,o=await n(e.floating);return{reference:Ho(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ko(e){return le(e).direction==="rtl"}const Xo={convertOffsetParentRelativeRectToViewportRelativeRect:Bo,getDocumentElement:de,getClippingRect:zo,getOffsetParent:fo,getElementRects:qo,getClientRects:Fo,getDimensions:Vo,getScale:Fe,isElement:re,isRTL:Ko};function po(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Yo(e,t){let n=null,o;const r=de(e);function l(){var i;clearTimeout(o),(i=n)==null||i.disconnect(),n=null}function s(i,c){i===void 0&&(i=!1),c===void 0&&(c=1),l();const a=e.getBoundingClientRect(),{left:m,top:d,width:v,height:f}=a;if(i||t(),!v||!f)return;const h=pt(d),w=pt(r.clientWidth-(m+v)),E=pt(r.clientHeight-(d+f)),b=pt(m),_={rootMargin:-h+"px "+-w+"px "+-E+"px "+-b+"px",threshold:Se(0,Ie(1,c))||1};let O=!0;function C(H){const k=H[0].intersectionRatio;if(k!==c){if(!O)return s();k?s(!1,k):o=setTimeout(()=>{s(!1,1e-7)},1e3)}k===1&&!po(a,e.getBoundingClientRect())&&s(),O=!1}try{n=new IntersectionObserver(C,{..._,root:r.ownerDocument})}catch{n=new IntersectionObserver(C,_)}n.observe(e)}return s(!0),l}function Uo(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:l=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Pt(e),m=r||l?[...a?ot(a):[],...ot(t)]:[];m.forEach(b=>{r&&b.addEventListener("scroll",n,{passive:!0}),l&&b.addEventListener("resize",n)});const d=a&&i?Yo(a,n):null;let v=-1,f=null;s&&(f=new ResizeObserver(b=>{let[S]=b;S&&S.target===a&&f&&(f.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var _;(_=f)==null||_.observe(t)})),n()}),a&&!c&&f.observe(a),f.observe(t));let h,w=c?Ce(e):null;c&&E();function E(){const b=Ce(e);w&&!po(w,b)&&n(),w=b,h=requestAnimationFrame(E)}return n(),()=>{var b;m.forEach(S=>{r&&S.removeEventListener("scroll",n),l&&S.removeEventListener("resize",n)}),d==null||d(),(b=f)==null||b.disconnect(),f=null,c&&cancelAnimationFrame(h)}}const Jo=ko,Qo=Lo,Zo=Oo,Go=Ro,qt=(e,t,n)=>{const o=new Map,r={platform:Xo,...n},l={...r.platform,_c:o};return Co(e,t,{...r,platform:l})};var Kt={};const en="react-tooltip-core-styles",tn="react-tooltip-base-styles",Xt={core:!1,base:!1};function Yt({css:e,id:t=tn,type:n="base",ref:o}){var r,l;if(!e||typeof document>"u"||Xt[n]||n==="core"&&typeof process<"u"&&(!((r=process==null?void 0:Kt)===null||r===void 0)&&r.REACT_TOOLTIP_DISABLE_CORE_STYLES)||n!=="base"&&typeof process<"u"&&(!((l=process==null?void 0:Kt)===null||l===void 0)&&l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;n==="core"&&(t=en),o||(o={});const{insertAt:s}=o;if(document.getElementById(t))return;const i=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=t,c.type="text/css",s==="top"&&i.firstChild?i.insertBefore(c,i.firstChild):i.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e)),Xt[n]=!0}const Ut=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:n=null,place:o="top",offset:r=10,strategy:l="absolute",middlewares:s=[Jo(Number(r)),Zo({fallbackAxisSideDirection:"start"}),Qo({padding:5})],border:i})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};if(t===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};const c=s;return n?(c.push(Go({element:n,padding:5})),qt(e,t,{placement:o,strategy:l,middleware:c}).then(({x:a,y:m,placement:d,middlewareData:v})=>{var f,h;const w={left:`${a}px`,top:`${m}px`,border:i},{x:E,y:b}=(f=v.arrow)!==null&&f!==void 0?f:{x:0,y:0},S=(h={top:"bottom",right:"left",bottom:"top",left:"right"}[d.split("-")[0]])!==null&&h!==void 0?h:"bottom",_=i&&{borderBottom:i,borderRight:i};let O=0;if(i){const C=`${i}`.match(/(\d+)px/);O=C!=null&&C[1]?Number(C[1]):1}return{tooltipStyles:w,tooltipArrowStyles:{left:E!=null?`${E}px`:"",top:b!=null?`${b}px`:"",right:"",bottom:"",..._,[S]:`-${4+O}px`},place:d}})):qt(e,t,{placement:"bottom",strategy:l,middleware:c}).then(({x:a,y:m,placement:d})=>({tooltipStyles:{left:`${a}px`,top:`${m}px`},tooltipArrowStyles:{},place:d}))},Jt=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),Qt=(e,t,n)=>{let o=null;const r=function(...l){const s=()=>{o=null};!o&&(e.apply(this,l),o=setTimeout(s,t))};return r.cancel=()=>{o&&(clearTimeout(o),o=null)},r},Zt=e=>e!==null&&!Array.isArray(e)&&typeof e=="object",kt=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((r,l)=>kt(r,t[l]));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!Zt(e)||!Zt(t))return e===t;const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&n.every(r=>kt(e[r],t[r]))},on=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some(n=>{const o=t.getPropertyValue(n);return o==="auto"||o==="scroll"})},Gt=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(on(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},nn=typeof window<"u"?p.useLayoutEffect:p.useEffect,te=e=>{e.current&&(clearTimeout(e.current),e.current=null)},rn="DEFAULT_TOOLTIP_ID",ln={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},sn=p.createContext({getTooltipData:()=>ln});function mo(e=rn){return p.useContext(sn).getTooltipData(e)}var Be={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},At={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const cn=({forwardRef:e,id:t,className:n,classNameArrow:o,variant:r="dark",anchorId:l,anchorSelect:s,place:i="top",offset:c=10,events:a=["hover"],openOnClick:m=!1,positionStrategy:d="absolute",middlewares:v,wrapper:f,delayShow:h=0,delayHide:w=0,float:E=!1,hidden:b=!1,noArrow:S=!1,clickable:_=!1,closeOnEsc:O=!1,closeOnScroll:C=!1,closeOnResize:H=!1,openEvents:k,closeEvents:J,globalCloseEvents:q,imperativeModeOnly:Q,style:se,position:Z,afterShow:ie,afterHide:T,disableTooltip:K,content:M,contentWrapperRef:F,isOpen:D,defaultIsOpen:W=!1,setIsOpen:pe,activeAnchor:P,setActiveAnchor:Re,border:st,opacity:it,arrowColor:ct,role:bt="tooltip"})=>{var ze;const z=p.useRef(null),Oe=p.useRef(null),oe=p.useRef(null),he=p.useRef(null),Ve=p.useRef(null),[ge,xt]=p.useState({tooltipStyles:{},tooltipArrowStyles:{},place:i}),[X,at]=p.useState(!1),[we,be]=p.useState(!1),[N,He]=p.useState(null),qe=p.useRef(!1),Ke=p.useRef(null),{anchorRefs:Xe,setActiveAnchor:ut}=mo(t),Te=p.useRef(!1),[ye,Ye]=p.useState([]),xe=p.useRef(!1),ke=m||a.includes("click"),Ue=ke||(k==null?void 0:k.click)||(k==null?void 0:k.dblclick)||(k==null?void 0:k.mousedown),Le=k?{...k}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!k&&ke&&Object.assign(Le,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const Je=J?{...J}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!J&&ke&&Object.assign(Je,{mouseleave:!1,blur:!1,mouseout:!1});const ne=q?{...q}:{escape:O||!1,scroll:C||!1,resize:H||!1,clickOutsideAnchor:Ue||!1};Q&&(Object.assign(Le,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(Je,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(ne,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),nn(()=>(xe.current=!0,()=>{xe.current=!1}),[]);const $=u=>{xe.current&&(u&&be(!0),setTimeout(()=>{xe.current&&(pe==null||pe(u),D===void 0&&at(u))},10))};p.useEffect(()=>{if(D===void 0)return()=>null;D&&be(!0);const u=setTimeout(()=>{at(D)},10);return()=>{clearTimeout(u)}},[D]),p.useEffect(()=>{if(X!==qe.current)if(te(Ve),qe.current=X,X)ie==null||ie();else{const u=(y=>{const x=y.match(/^([\d.]+)(ms|s)$/);if(!x)return 0;const[,B,j]=x;return Number(B)*(j==="ms"?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));Ve.current=setTimeout(()=>{be(!1),He(null),T==null||T()},u+25)}},[X]);const ft=u=>{xt(y=>kt(y,u)?y:u)},Qe=(u=h)=>{te(oe),we?$(!0):oe.current=setTimeout(()=>{$(!0)},u)},Ne=(u=w)=>{te(he),he.current=setTimeout(()=>{Te.current||$(!1)},u)},Ze=u=>{var y;if(!u)return;const x=(y=u.currentTarget)!==null&&y!==void 0?y:u.target;if(!(x!=null&&x.isConnected))return Re(null),void ut({current:null});h?Qe():$(!0),Re(x),ut({current:x}),te(he)},De=()=>{_?Ne(w||100):w?Ne():$(!1),te(oe)},$e=({x:u,y})=>{var x;const B={getBoundingClientRect:()=>({x:u,y,width:0,height:0,top:y,left:u,right:u,bottom:y})};Ut({place:(x=N==null?void 0:N.place)!==null&&x!==void 0?x:i,offset:c,elementReference:B,tooltipReference:z.current,tooltipArrowReference:Oe.current,strategy:d,middlewares:v,border:st}).then(j=>{ft(j)})},Pe=u=>{if(!u)return;const y=u,x={x:y.clientX,y:y.clientY};$e(x),Ke.current=x},Ge=u=>{var y;if(!X)return;const x=u.target;x.isConnected&&(!((y=z.current)===null||y===void 0)&&y.contains(x)||[document.querySelector(`[id='${l}']`),...ye].some(B=>B==null?void 0:B.contains(x))||($(!1),te(oe)))},dt=Qt(Ze,50),I=Qt(De,50),G=u=>{I.cancel(),dt(u)},g=()=>{dt.cancel(),I()},A=p.useCallback(()=>{var u,y;const x=(u=N==null?void 0:N.position)!==null&&u!==void 0?u:Z;x?$e(x):E?Ke.current&&$e(Ke.current):P!=null&&P.isConnected&&Ut({place:(y=N==null?void 0:N.place)!==null&&y!==void 0?y:i,offset:c,elementReference:P,tooltipReference:z.current,tooltipArrowReference:Oe.current,strategy:d,middlewares:v,border:st}).then(B=>{xe.current&&ft(B)})},[X,P,M,se,i,N==null?void 0:N.place,c,d,Z,N==null?void 0:N.position,E]);p.useEffect(()=>{var u,y;const x=new Set(Xe);ye.forEach(R=>{K!=null&&K(R)||x.add({current:R})});const B=document.querySelector(`[id='${l}']`);B&&!(K!=null&&K(B))&&x.add({current:B});const j=()=>{$(!1)},ce=Gt(P),ae=Gt(z.current);ne.scroll&&(window.addEventListener("scroll",j),ce==null||ce.addEventListener("scroll",j),ae==null||ae.addEventListener("scroll",j));let V=null;ne.resize?window.addEventListener("resize",j):P&&z.current&&(V=Uo(P,z.current,A,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const ee=R=>{R.key==="Escape"&&$(!1)};ne.escape&&window.addEventListener("keydown",ee),ne.clickOutsideAnchor&&window.addEventListener("click",Ge);const L=[],et=R=>{X&&(R==null?void 0:R.target)===P||Ze(R)},ho=R=>{X&&(R==null?void 0:R.target)===P&&De()},Ft=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],It=["click","dblclick","mousedown","mouseup"];Object.entries(Le).forEach(([R,me])=>{me&&(Ft.includes(R)?L.push({event:R,listener:G}):It.includes(R)&&L.push({event:R,listener:et}))}),Object.entries(Je).forEach(([R,me])=>{me&&(Ft.includes(R)?L.push({event:R,listener:g}):It.includes(R)&&L.push({event:R,listener:ho}))}),E&&L.push({event:"pointermove",listener:Pe});const jt=()=>{Te.current=!0},Mt=()=>{Te.current=!1,De()};return _&&!Ue&&((u=z.current)===null||u===void 0||u.addEventListener("mouseenter",jt),(y=z.current)===null||y===void 0||y.addEventListener("mouseleave",Mt)),L.forEach(({event:R,listener:me})=>{x.forEach(Et=>{var tt;(tt=Et.current)===null||tt===void 0||tt.addEventListener(R,me)})}),()=>{var R,me;ne.scroll&&(window.removeEventListener("scroll",j),ce==null||ce.removeEventListener("scroll",j),ae==null||ae.removeEventListener("scroll",j)),ne.resize?window.removeEventListener("resize",j):V==null||V(),ne.clickOutsideAnchor&&window.removeEventListener("click",Ge),ne.escape&&window.removeEventListener("keydown",ee),_&&!Ue&&((R=z.current)===null||R===void 0||R.removeEventListener("mouseenter",jt),(me=z.current)===null||me===void 0||me.removeEventListener("mouseleave",Mt)),L.forEach(({event:Et,listener:tt})=>{x.forEach(go=>{var _t;(_t=go.current)===null||_t===void 0||_t.removeEventListener(Et,tt)})})}},[P,A,we,Xe,ye,k,J,q,ke,h,w]),p.useEffect(()=>{var u,y;let x=(y=(u=N==null?void 0:N.anchorSelect)!==null&&u!==void 0?u:s)!==null&&y!==void 0?y:"";!x&&t&&(x=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`);const B=new MutationObserver(j=>{const ce=[],ae=[];j.forEach(V=>{if(V.type==="attributes"&&V.attributeName==="data-tooltip-id"&&(V.target.getAttribute("data-tooltip-id")===t?ce.push(V.target):V.oldValue===t&&ae.push(V.target)),V.type==="childList"){if(P){const ee=[...V.removedNodes].filter(L=>L.nodeType===1);if(x)try{ae.push(...ee.filter(L=>L.matches(x))),ae.push(...ee.flatMap(L=>[...L.querySelectorAll(x)]))}catch{}ee.some(L=>{var et;return!!(!((et=L==null?void 0:L.contains)===null||et===void 0)&&et.call(L,P))&&(be(!1),$(!1),Re(null),te(oe),te(he),!0)})}if(x)try{const ee=[...V.addedNodes].filter(L=>L.nodeType===1);ce.push(...ee.filter(L=>L.matches(x))),ce.push(...ee.flatMap(L=>[...L.querySelectorAll(x)]))}catch{}}}),(ce.length||ae.length)&&Ye(V=>[...V.filter(ee=>!ae.includes(ee)),...ce])});return B.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{B.disconnect()}},[t,s,N==null?void 0:N.anchorSelect,P]),p.useEffect(()=>{A()},[A]),p.useEffect(()=>{if(!(F!=null&&F.current))return()=>null;const u=new ResizeObserver(()=>{setTimeout(()=>A())});return u.observe(F.current),()=>{u.disconnect()}},[M,F==null?void 0:F.current]),p.useEffect(()=>{var u;const y=document.querySelector(`[id='${l}']`),x=[...ye,y];P&&x.includes(P)||Re((u=ye[0])!==null&&u!==void 0?u:y)},[l,ye,P]),p.useEffect(()=>(W&&$(!0),()=>{te(oe),te(he)}),[]),p.useEffect(()=>{var u;let y=(u=N==null?void 0:N.anchorSelect)!==null&&u!==void 0?u:s;if(!y&&t&&(y=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),y)try{const x=Array.from(document.querySelectorAll(y));Ye(x)}catch{Ye([])}},[t,s,N==null?void 0:N.anchorSelect]),p.useEffect(()=>{oe.current&&(te(oe),Qe(h))},[h]);const Y=(ze=N==null?void 0:N.content)!==null&&ze!==void 0?ze:M,Ee=X&&Object.keys(ge.tooltipStyles).length>0;return p.useImperativeHandle(e,()=>({open:u=>{if(u!=null&&u.anchorSelect)try{document.querySelector(u.anchorSelect)}catch{return void console.warn(`[react-tooltip] "${u.anchorSelect}" is not a valid CSS selector`)}He(u??null),u!=null&&u.delay?Qe(u.delay):$(!0)},close:u=>{u!=null&&u.delay?Ne(u.delay):$(!1)},activeAnchor:P,place:ge.place,isOpen:!!(we&&!b&&Y&&Ee)})),we&&!b&&Y?_e.createElement(f,{id:t,role:bt,className:Ct("react-tooltip",Be.tooltip,At.tooltip,At[r],n,`react-tooltip__place-${ge.place}`,Be[Ee?"show":"closing"],Ee?"react-tooltip__show":"react-tooltip__closing",d==="fixed"&&Be.fixed,_&&Be.clickable),onTransitionEnd:u=>{te(Ve),X||u.propertyName!=="opacity"||(be(!1),He(null),T==null||T())},style:{...se,...ge.tooltipStyles,opacity:it!==void 0&&Ee?it:void 0},ref:z},Y,_e.createElement(f,{className:Ct("react-tooltip-arrow",Be.arrow,At.arrow,o,S&&Be.noArrow),style:{...ge.tooltipArrowStyles,background:ct?`linear-gradient(to right bottom, transparent 50%, ${ct} 50%)`:void 0},ref:Oe})):null},an=({content:e})=>_e.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),un=_e.forwardRef(({id:e,anchorId:t,anchorSelect:n,content:o,html:r,render:l,className:s,classNameArrow:i,variant:c="dark",place:a="top",offset:m=10,wrapper:d="div",children:v=null,events:f=["hover"],openOnClick:h=!1,positionStrategy:w="absolute",middlewares:E,delayShow:b=0,delayHide:S=0,float:_=!1,hidden:O=!1,noArrow:C=!1,clickable:H=!1,closeOnEsc:k=!1,closeOnScroll:J=!1,closeOnResize:q=!1,openEvents:Q,closeEvents:se,globalCloseEvents:Z,imperativeModeOnly:ie=!1,style:T,position:K,isOpen:M,defaultIsOpen:F=!1,disableStyleInjection:D=!1,border:W,opacity:pe,arrowColor:P,setIsOpen:Re,afterShow:st,afterHide:it,disableTooltip:ct,role:bt="tooltip"},ze)=>{const[z,Oe]=p.useState(o),[oe,he]=p.useState(r),[Ve,ge]=p.useState(a),[xt,X]=p.useState(c),[at,we]=p.useState(m),[be,N]=p.useState(b),[He,qe]=p.useState(S),[Ke,Xe]=p.useState(_),[ut,Te]=p.useState(O),[ye,Ye]=p.useState(d),[xe,ke]=p.useState(f),[Ue,Le]=p.useState(w),[Je,ne]=p.useState(null),[$,ft]=p.useState(null),Qe=p.useRef(D),{anchorRefs:Ne,activeAnchor:Ze}=mo(e),De=I=>I==null?void 0:I.getAttributeNames().reduce((G,g)=>{var A;return g.startsWith("data-tooltip-")&&(G[g.replace(/^data-tooltip-/,"")]=(A=I==null?void 0:I.getAttribute(g))!==null&&A!==void 0?A:null),G},{}),$e=I=>{const G={place:g=>{var A;ge((A=g)!==null&&A!==void 0?A:a)},content:g=>{Oe(g??o)},html:g=>{he(g??r)},variant:g=>{var A;X((A=g)!==null&&A!==void 0?A:c)},offset:g=>{we(g===null?m:Number(g))},wrapper:g=>{var A;Ye((A=g)!==null&&A!==void 0?A:d)},events:g=>{const A=g==null?void 0:g.split(" ");ke(A??f)},"position-strategy":g=>{var A;Le((A=g)!==null&&A!==void 0?A:w)},"delay-show":g=>{N(g===null?b:Number(g))},"delay-hide":g=>{qe(g===null?S:Number(g))},float:g=>{Xe(g===null?_:g==="true")},hidden:g=>{Te(g===null?O:g==="true")},"class-name":g=>{ne(g)}};Object.values(G).forEach(g=>g(null)),Object.entries(I).forEach(([g,A])=>{var Y;(Y=G[g])===null||Y===void 0||Y.call(G,A)})};p.useEffect(()=>{Oe(o)},[o]),p.useEffect(()=>{he(r)},[r]),p.useEffect(()=>{ge(a)},[a]),p.useEffect(()=>{X(c)},[c]),p.useEffect(()=>{we(m)},[m]),p.useEffect(()=>{N(b)},[b]),p.useEffect(()=>{qe(S)},[S]),p.useEffect(()=>{Xe(_)},[_]),p.useEffect(()=>{Te(O)},[O]),p.useEffect(()=>{Le(w)},[w]),p.useEffect(()=>{Qe.current!==D&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[D]),p.useEffect(()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:D==="core",disableBase:D}}))},[]),p.useEffect(()=>{var I;const G=new Set(Ne);let g=n;if(!g&&e&&(g=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),g)try{document.querySelectorAll(g).forEach(y=>{G.add({current:y})})}catch{console.warn(`[react-tooltip] "${g}" is not a valid CSS selector`)}const A=document.querySelector(`[id='${t}']`);if(A&&G.add({current:A}),!G.size)return()=>null;const Y=(I=$??A)!==null&&I!==void 0?I:Ze.current,Ee=new MutationObserver(y=>{y.forEach(x=>{var B;if(!Y||x.type!=="attributes"||!(!((B=x.attributeName)===null||B===void 0)&&B.startsWith("data-tooltip-")))return;const j=De(Y);$e(j)})}),u={attributes:!0,childList:!1,subtree:!1};if(Y){const y=De(Y);$e(y),Ee.observe(Y,u)}return()=>{Ee.disconnect()}},[Ne,Ze,$,t,n]),p.useEffect(()=>{T!=null&&T.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),W&&!Jt("border",`${W}`)&&console.warn(`[react-tooltip] "${W}" is not a valid \`border\`.`),T!=null&&T.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),pe&&!Jt("opacity",`${pe}`)&&console.warn(`[react-tooltip] "${pe}" is not a valid \`opacity\`.`)},[]);let Pe=v;const Ge=p.useRef(null);if(l){const I=l({content:($==null?void 0:$.getAttribute("data-tooltip-content"))||z||null,activeAnchor:$});Pe=I?_e.createElement("div",{ref:Ge,className:"react-tooltip-content-wrapper"},I):null}else z&&(Pe=z);oe&&(Pe=_e.createElement(an,{content:oe}));const dt={forwardRef:ze,id:e,anchorId:t,anchorSelect:n,className:Ct(s,Je),classNameArrow:i,content:Pe,contentWrapperRef:Ge,place:Ve,variant:xt,offset:at,wrapper:ye,events:xe,openOnClick:h,positionStrategy:Ue,middlewares:E,delayShow:be,delayHide:He,float:Ke,hidden:ut,noArrow:C,clickable:H,closeOnEsc:k,closeOnScroll:J,closeOnResize:q,openEvents:Q,closeEvents:se,globalCloseEvents:Z,imperativeModeOnly:ie,style:T,position:K,isOpen:M,defaultIsOpen:F,border:W,opacity:pe,arrowColor:P,setIsOpen:Re,afterShow:st,afterHide:it,disableTooltip:ct,activeAnchor:$,setActiveAnchor:I=>ft(I),role:bt};return _e.createElement(cn,{...dt})});typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||Yt({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||Yt({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});const fn=({theme:e,tooltipStyle:t="midnight"})=>({basic:{backgroundColor:e.palette.designColors.interactive.secondary.default,textColor:e.palette.designColors.text.default},midnight:{backgroundColor:e.palette.designColors.icons.default,textColor:e.palette.designColors.interactive.secondary.default},primary:{backgroundColor:e.palette.designColors.interactive.primary.default,textColor:e.palette.designColors.interactive.secondary.default},success:{backgroundColor:e.palette.designColors.interactive.success.default,textColor:e.palette.designColors.interactive.secondary.default},neutral:{backgroundColor:e.palette.designColors.surface.neutral.subdued,textColor:e.palette.designColors.text.default},info:{backgroundColor:e.palette.designColors.surface.info.subdued,textColor:e.palette.designColors.text.default},warning:{backgroundColor:e.palette.designColors.surface.warning.subdued,textColor:e.palette.designColors.text.default},critical:{backgroundColor:e.palette.designColors.surface.critical.subdued,textColor:e.palette.designColors.text.default},light:{backgroundColor:e.palette.designColors.surface.neutral.subdued,textColor:e.palette.designColors.text.default},dark:{backgroundColor:e.palette.designColors.text.default,textColor:e.palette.designColors.text.default}})[t],mn=({place:e="bottom",style:t,tooltipStyle:n,...o})=>{const r=yo();return vo.jsx(un,{place:e,style:{...fn({theme:r,tooltipStyle:n}),...t,fontFamily:r.typography.fonts.regular,zIndex:999999},...o})},hn=eo("div",{shouldForwardProp:to(["textAlign","width"])})`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
  width: ${({width:e})=>e??"240px"};
  text-align: ${({textAlign:e})=>e??"left"};
  font-family: ${({theme:e})=>e.typography.fonts.medium};
`,gn=eo("div",{shouldForwardProp:to(["textAlign","width"])})`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  width: ${({width:e})=>e??"240px"};
  text-align: ${({textAlign:e})=>e??"left"};
  font-family: ${({theme:e})=>e.typography.fonts.regular};
`;export{mn as T,gn as a,hn as b};
