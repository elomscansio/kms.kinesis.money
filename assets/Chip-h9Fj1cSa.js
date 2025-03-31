import{j as t,q as C,bD as f,w as c,x as h,R as b}from"./index-B1IYvx0M.js";import{N as i,a,b as n,C as m}from"./Names-CaXmBvXg.js";import{T as y,a as j}from"./index-Chya3hTY.js";const w=s=>{const e=C();return{neutral:e.palette.designColors.surface.neutral.subdued,info:e.palette.designColors.surface.info.subdued,success:e.palette.designColors.surface.success.subdued,warning:e.palette.designColors.surface.warning.subdued,critical:e.palette.designColors.surface.critical.subdued,light:e.palette.designColors.surface.neutral.subdued,dark:e.palette.designColors.text.default,primary:e.palette.designColors.interactive.primary.default}[s]},N=c(b)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`,T=c("span")`
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({theme:s})=>s.palette.designColors.text.tertiary};
  font-family: ${({theme:s})=>s.typography.fonts.medium};
`,k=c("div",{shouldForwardProp:h(["backgroundColor","hasIcon","hasText","tooltip"])})`
  display: flex;
  position: relative;
  align-items: center;

  gap: ${({hasText:s})=>s?"5px":"unset"};
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  border-radius: 22px;
  padding: ${({hasIcon:s,hasText:e})=>e?s?"2px 8px 2px 2px":"2px 8px":"unset"};

  color: ${({theme:s})=>s.palette.designColors.text.default};
  font-family: ${({theme:s})=>s.typography.fonts.medium};
  background-color: ${({backgroundColor:s,hasText:e})=>e?s:"unset"};
  transition: all ease-in-out 0.2s;

  ${({hasText:s})=>!s&&f`
      div {
        background-color: unset;
      }
    `}

  ${({tooltip:s,theme:e})=>s&&f`
      cursor: pointer;

      :hover {
        ${m(e.palette.designColors.surface.default,{transition:"0.15s"})};
        color: ${e.palette.designColors.surface.default};
        background-color: ${e.palette.designColors.icons.success};
      }
    `}
`,r=s=>{var g;const{className:e,tooltip:l,icon:p,children:o,type:u}=s,x=w(u??"success"),d=(g=o==null?void 0:o.replace)==null?void 0:g.call(o,/'/g,"");return t.jsxs(k,{className:e,tooltip:l,"data-tip":!0,"data-for":d,"data-tooltip-id":d,hasIcon:!!p,backgroundColor:x,hasText:!!o,children:[p,t.jsx("span",{children:o}),l&&o&&t.jsx(y,{id:d,tooltipStyle:u??"success",children:t.jsx(j,{children:l})})]})},W=s=>t.jsx(r,{type:"info",icon:t.jsx(i,{name:n.info,size:a.sixteen,fill:e=>e.palette.designColors.interactive.info.default,backgroundColor:e=>e.palette.designColors.surface.info.subdued}),...s}),S=s=>t.jsx(r,{type:"success",icon:t.jsx(i,{name:n.tick,size:a.sixteen,fill:e=>e.palette.designColors.interactive.success.default,backgroundColor:e=>e.palette.designColors.surface.success.subdued}),...s}),R=s=>t.jsx(r,{type:"warning",icon:t.jsx(i,{name:n.info,size:a.sixteen,fill:e=>e.palette.designColors.interactive.warning.default,backgroundColor:e=>e.palette.designColors.surface.warning.subdued}),...s}),F=s=>t.jsx(r,{type:"warning",icon:t.jsx(i,{name:n.infoWait,size:a.sixteen}),...s}),$=s=>t.jsx(r,{type:"critical",icon:t.jsx(i,{name:n.info,size:a.sixteen,fill:e=>e.palette.designColors.interactive.critical.default,backgroundColor:e=>e.palette.designColors.surface.critical.subdued}),...s}),P=c($)`
  font-size: 14px;
  height: 100%;
  border-radius: 3px;
  padding: 3px 10px;
  line-height: unset;
`;export{r as C,W as I,P as S,R as W,$ as a,S as b,N as c,F as d,T as e};
