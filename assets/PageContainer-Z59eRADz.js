import{q as m,j as p,w as r,aN as s,x as c}from"./index-B1IYvx0M.js";import{u as g}from"./index-BBKt8-YL.js";import{S as h}from"./index-D4hGd7fZ.js";const u=r(s)(({theme:o})=>({gap:"32px",justifyContent:"center",position:"relative",[o.breakpoints.down("xs")]:{padding:"24px 15px"},[o.breakpoints.down("sm")]:{padding:"40px 16px"},[o.breakpoints.down("md")]:{padding:"40px 21px",overflowX:"hidden"},[o.breakpoints.down("lg")]:{padding:"40px 16px"},[o.breakpoints.up("lg")]:{padding:"40px 59px"}})),d={display:"grid",gap:"24px",gridTemplateRows:"max-content",gridTemplateColumns:"100%"},w=r(s,{shouldForwardProp:c(["singleColumn"])})(({theme:o,singleColumn:n})=>({...d,width:n?"100%":"calc(100% - 360px - 32px)",maxWidth:n?"1064px":"672px",[o.breakpoints.down("md")]:{width:"100%",maxWidth:"672px"},[o.breakpoints.down("sm")]:{maxWidth:n?"512px":"480px"}})),b=r(s)(({marginTop:o})=>({...d,width:"360px",marginTop:o??void 0,position:"sticky",top:"32px",height:"fit-content"})),y=o=>{const{left:n,right:t,children:a,width:i,rightMarginTop:e}=o,x=m(),l=g(x.breakpoints.down("md"));return p.jsx(h,{children:p.jsxs(u,{container:!0,direction:"row",children:[p.jsx(w,{singleColumn:!t,sx:{maxWidth:t?i==null?void 0:i.double:i==null?void 0:i.single},children:n??a}),t&&!l&&p.jsx(b,{marginTop:e,children:t})]})})};export{y as P};
