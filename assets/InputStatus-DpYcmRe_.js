import{j as n,e9 as e,w as c,x as g}from"./index-B1IYvx0M.js";import{a as o,b as a,N as x}from"./Names-CaXmBvXg.js";const r={error:{textColor:e.interactive.critical.default,color:e.greyscale.white.default,icon:a.cross,backgroundColor:e.interactive.critical.default,iconSize:o.nine},warning:{textColor:e.interactive.critical.default,color:e.interactive.warning.default,icon:"icons/fill/icon-bank-fill",backgroundColor:e.greyscale.white.default,iconSize:o.sixteen},message:{textColor:e.interactive.info.default,color:e.interactive.info.default,icon:a.help,backgroundColor:e.greyscale.white.default,iconSize:o.sixteen},success:{textColor:e.interactive.success.default,color:e.interactive.success.default,icon:a.tick,backgroundColor:e.greyscale.white.default,iconSize:o.sixteen},caution:{textColor:e.interactive.warning.default,color:e.interactive.warning.default,icon:a.caution,backgroundColor:e.greyscale.white.default,iconSize:o.sixteen}},p=c("div",{shouldForwardProp:g(["type"])})`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  justify-content: flex-end;
  min-height: 24px;

  font-size: 12px;
  line-height: 16px;
  font-family: ${({theme:i})=>i.typography.fonts.medium};
  color: ${({type:i})=>r[i].textColor};
`,h=c(x)`
  margin: 4px;
  border-radius: 50%;
  background-color: ${({type:i})=>r[i].backgroundColor};
`,w=i=>{const{children:l,type:t,visible:s,className:d,disableIcon:u,dataCy:f}=i;return n.jsx(p,{className:d,type:t,children:s&&n.jsxs(n.Fragment,{children:[!u&&n.jsx(h,{type:t,name:r[t].icon,size:o.sixteen,iconSize:r[t].iconSize,fill:r[t].color},0),n.jsx("span",{"data-cy":f,children:l})]})})};export{w as I};
