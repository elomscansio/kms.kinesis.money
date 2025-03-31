import{q as h,F as C,r as v,j as i,w as z,x as T}from"./index-B1IYvx0M.js";import{a as d,b as u,N as w}from"./Names-CaXmBvXg.js";import{T as j,a as N}from"./index-Chya3hTY.js";const M=z("div",{shouldForwardProp:T(["fill"])})`
  cursor: pointer;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 16px;
  padding: 0 4px;
  gap: 5px;
  font-size: 10px;
  line-height: 16px;
  font-family: ${({theme:e})=>e.typography.fonts.semiBold};
  border-radius: 2px;
  border: 1px solid ${({fill:e})=>e};
  color: ${({fill:e})=>e};
  svg {
    & path {
      stroke-width: 1;
      stroke: ${({theme:e})=>e.palette.designColors.text.default};
    }
  }
`,I=e=>{const p=h(),{formatMessage:o}=C(),{copyText:a,idSuffix:r,className:f="",buttonText:x=o({id:"3s/StO",defaultMessage:[{type:0,value:"COPY"}]}),successText:l=o({id:"0oL1zz",defaultMessage:[{type:0,value:"Copied!"}]}),message:m=o({id:"4l6vz1",defaultMessage:[{type:0,value:"Copy"}]}),successMessage:g=o({id:"0oL1zz",defaultMessage:[{type:0,value:"Copied!"}]}),icon:s={name:u.copy,size:d.ten,fill:p.palette.designColors.icons.interactive},successIcon:n={name:u.tick,size:d.ten,fill:p.palette.designColors.icons.success}}=e,[t,c]=v.useState(!1),y=()=>{navigator.clipboard.writeText(a),c(!0),setTimeout(()=>c(!1),2e3)};return i.jsxs(M,{className:f,fill:t?n.fill:s.fill,onClick:y,"data-tip":!0,"data-tooltip-id":`copyButtonTip-${r??a}`,children:[t?l==null?void 0:l.toUpperCase():x,i.jsx(w,{name:t?n.name:s.name,size:s.size,fill:t?n.fill:s.fill}),i.jsx(j,{id:`copyButtonTip-${r??a}`,place:"top",tooltipStyle:t?"success":"midnight",children:i.jsx(N,{width:"51px",textAlign:"center",children:t?g:m})})]})};export{I as C};
