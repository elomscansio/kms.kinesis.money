import{bw as f,r as g}from"./index-B1IYvx0M.js";/*! *****************************************************************************
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
***************************************************************************** */var v=function(i,r){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t])})(i,r)},m,u,b=(function(i){/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if(s==="string"||s==="number")e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if(s==="object")for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}i.exports?(o.default=o,i.exports=o):window.classNames=o})()}(u={path:m,exports:{},require:function(i,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(r==null&&u.path)}},u.exports),u.exports);function h(i,r,o){var e,t,n,s,a;function l(){var c=Date.now()-s;c<r&&c>=0?e=setTimeout(l,r-c):(e=null,o||(a=i.apply(n,t),n=t=null))}r==null&&(r=100);var p=function(){n=this,t=arguments,s=Date.now();var c=o&&!e;return e||(e=setTimeout(l,r)),c&&(a=i.apply(n,t),n=t=null),a};return p.clear=function(){e&&(clearTimeout(e),e=null)},p.flush=function(){e&&(a=i.apply(n,t),n=t=null,clearTimeout(e),e=null)},p}h.debounce=h;var y=h;(function(i,r){r===void 0&&(r={});var o=r.insertAt;if(typeof document<"u"){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",o==="top"&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i))}})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);var d,w=(d="indiana-scroll-container",function(i,r){if(!i)return d;var o;typeof i=="string"?o=i:r=i;var e=d;return o&&(e+="__"+o),e+(r?Object.keys(r).reduce(function(t,n){var s=r[n];return s&&(t+=" "+(typeof s=="boolean"?e+"--"+n:e+"--"+n+"_"+s)),t},""):"")}),M=function(i){function r(o){var e=i.call(this,o)||this;return e.onEndScroll=function(){e.scrolling=!1,!e.pressed&&e.started&&e.processEnd()},e.onScroll=function(t){var n=e.container.current;n.scrollLeft===e.scrollLeft&&n.scrollTop===e.scrollTop||(e.scrolling=!0,e.processScroll(t),e.onEndScroll())},e.onTouchStart=function(t){var n=e.props.nativeMobileScroll;if(e.isDraggable(t.target))if(e.internal=!0,n&&e.scrolling)e.pressed=!0;else{var s=t.touches[0];e.processClick(t,s.clientX,s.clientY),!n&&e.props.stopPropagation&&t.stopPropagation()}},e.onTouchEnd=function(t){var n=e.props.nativeMobileScroll;e.pressed&&(!e.started||e.scrolling&&n?e.pressed=!1:e.processEnd(),e.forceUpdate())},e.onTouchMove=function(t){var n=e.props.nativeMobileScroll;if(e.pressed&&(!n||!e.isMobile)){var s=t.touches[0];s&&e.processMove(t,s.clientX,s.clientY),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation()}},e.onMouseDown=function(t){e.isDraggable(t.target)&&e.isScrollable()&&(e.internal=!0,e.props.buttons.indexOf(t.button)!==-1&&(e.processClick(t,t.clientX,t.clientY),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation()))},e.onMouseMove=function(t){e.pressed&&(e.processMove(t,t.clientX,t.clientY),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation())},e.onMouseUp=function(t){e.pressed&&(e.started?e.processEnd():(e.internal=!1,e.pressed=!1,e.forceUpdate(),e.props.onClick&&e.props.onClick(t)),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation())},e.container=f.createRef(),e.onEndScroll=y(e.onEndScroll,300),e.scrolling=!1,e.started=!1,e.pressed=!1,e.internal=!1,e.getRef=e.getRef.bind(e),e}return function(o,e){function t(){this.constructor=o}v(o,e),o.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(r,i),r.prototype.componentDidMount=function(){var o=this.props.nativeMobileScroll,e=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),e.addEventListener("touchstart",this.onTouchStart,{passive:!1}),e.addEventListener("mousedown",this.onMouseDown,{passive:!1}),o&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},r.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},r.prototype.getElement=function(){return this.container.current},r.prototype.isMobileDevice=function(){return window.orientation!==void 0||navigator.userAgent.indexOf("IEMobile")!==-1},r.prototype.isDraggable=function(o){var e=this.props.ignoreElements;if(e){var t=o.closest(e);return t===null||t.contains(this.getElement())}return!0},r.prototype.isScrollable=function(){var o=this.container.current;return o&&(o.scrollWidth>o.clientWidth||o.scrollHeight>o.clientHeight)},r.prototype.processClick=function(o,e,t){var n=this.container.current;this.scrollLeft=n.scrollLeft,this.scrollTop=n.scrollTop,this.clientX=e,this.clientY=t,this.pressed=!0},r.prototype.processStart=function(o){o===void 0&&(o=!0);var e=this.props.onStartScroll;this.started=!0,o&&document.body.classList.add("indiana-dragging"),e&&e({external:!this.internal}),this.forceUpdate()},r.prototype.processScroll=function(o){if(this.started){var e=this.props.onScroll;e&&e({external:!this.internal})}else this.processStart(!1)},r.prototype.processMove=function(o,e,t){var n=this.props,s=n.horizontal,a=n.vertical,l=n.activationDistance,p=n.onScroll,c=this.container.current;this.started?(s&&(c.scrollLeft-=e-this.clientX),a&&(c.scrollTop-=t-this.clientY),p&&p({external:!this.internal}),this.clientX=e,this.clientY=t,this.scrollLeft=c.scrollLeft,this.scrollTop=c.scrollTop):(s&&Math.abs(e-this.clientX)>l||a&&Math.abs(t-this.clientY)>l)&&(this.clientX=e,this.clientY=t,this.processStart())},r.prototype.processEnd=function(){var o=this.props.onEndScroll;this.container.current&&o&&o({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},r.prototype.getRef=function(o){[this.container,this.props.innerRef].forEach(function(e){e&&(typeof e=="function"?e(o):e.current=o)})},r.prototype.render=function(){var o=this.props,e=o.children,t=o.draggingClassName,n=o.className,s=o.style,a=o.hideScrollbars,l=o.component;return f.createElement(l,{className:b(n,this.pressed&&t,w({dragging:this.pressed,"hide-scrollbars":a,"native-scroll":this.isMobile})),style:s,ref:this.getRef,onScroll:this.onScroll},e)},r.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},r}(g.PureComponent);export{M as p};
