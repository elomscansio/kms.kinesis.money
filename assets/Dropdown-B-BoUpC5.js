import{F as _,j as s,r as n,C as S,e0 as G,bD as J,w as f,R as m,x as $,d7 as z,dF as A}from"./index-B1IYvx0M.js";import{N as R,b as D,a as Q}from"./Names-CaXmBvXg.js";import{I as T}from"./Input-U7WLNE8T.js";import{b as U,f as H}from"./TextField-DL0nOe5P.js";const X=e=>({[`& .${H.root}`]:{borderRadius:"20px",backgroundColor:e.palette.designColors.interactive.secondary.default,border:`1px solid ${e.palette.designColors.interactive.secondary.default}`,"&.Mui-focused":{border:`1px solid ${e.palette.designColors.interactive.primary.default}`,backgroundColor:e.palette.designColors.interactive.secondary.default,path:{fill:e.palette.designColors.interactive.primary.default}},"&:hover":{backgroundColor:e.palette.designColors.interactive.secondary.default}},[`& :not(:has(${U.root}))`]:{[`&.${H.input}`]:{padding:"10px "}}}),Y=e=>{const{placeholder:t,sx:a,...o}=e,{formatMessage:i}=_();return s.jsx(T,{left:s.jsx(R,{name:D.search,fill:u=>u.palette.designColors.icons.iconsOn.interactiveDisabled}),placeholder:t??i({id:"xmcVZ0",defaultMessage:[{type:0,value:"Search"}]}),...o,sx:[X,...Array.isArray(a)?a:[a]]})},ee=f("div",{shouldForwardProp:$(["$error","$size","disabled"])})`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: ${({disabled:e})=>e?"unset":"pointer"};
  align-items: center;
  width: 100%;

  opacity: 1;
  border-radius: ${({$size:e})=>e==="small"?"5px":"8px"};
  box-shadow: 0px 1px 0px ${({theme:e})=>e.palette.designColors.greyscale.black[4]};
  background-color: ${({theme:e,disabled:t,$error:a})=>t?e.palette.designColors.surface.disabled:a?e.palette.designColors.surface.critical.subdued:e.palette.designColors.surface.default};
  border: 1px solid
    ${({theme:e,disabled:t,$error:a})=>t?e.palette.designColors.borders.disabled:a?e.palette.designColors.borders.critical.default:e.palette.designColors.borders.textInput.default};

  &:focus-visible {
    border: 2px solid ${({theme:e})=>e.palette.designColors.focused.default};
  }
`,te=f(m,{shouldForwardProp:$(["$label","$thick"])})`
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: ${({$thick:e,$label:t})=>e?"12px":t?"0px":"10px 12px"};
`,se=e=>A`
  0% {
    max-height: 0px;
    padding: 0px 8px;
  }
  100% {
    max-height: ${e??"280px"};
    padding: 8px;
  }
`,re=e=>A`
  0% {
    max-height: ${e??"280px"};
    border-width: 1px;
    padding: 8px;
  }
  100% {
    max-height: 0px;
    padding: 0px 8px;
  }
`,ae=f(S,{shouldForwardProp:$(["$listHeight","$visible"])})`
  position: absolute;
  overflow-y: scroll;
  z-index: 2;
  gap: 2px;

  min-width: max-content;
  top: calc(100% + 8px);
  width: 100%;
  max-height: 0px;
  border-radius: 8px;
  box-shadow:
    0px 0px 2px 0px ${({theme:e})=>e.palette.designColors.greyscale.black[20]},
    0px 2px 10px 0px ${({theme:e})=>e.palette.designColors.greyscale.black[10]};
  background-color: ${({theme:e})=>e.palette.designColors.surface.default};
  animation-name: ${({$visible:e,$listHeight:t})=>e===void 0?"unset":e?se(t):re(t)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  height: fit-content;
  color: inherit;

  @media screen and (max-width: 400px) {
    min-width: unset !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
`,oe=f(m,{shouldForwardProp:$(["$active"])})`
  position: relative;
  gap: 8px;
  padding: 10px 8px;
  align-items: center;
  border-radius: 4px;
  color: inherit;

  ${({$active:e,theme:t})=>e&&J`
        color: ${t.palette.designColors.text.default};
        background-color: ${t.palette.designColors.surface.selected};

        &:before {
          content: '';
          position: absolute;
          height: 100%;
          left: -8px;
          width: 3px;
          border-radius: 0px 4px 4px 0px;
          background-color: ${t.palette.designColors.interactive.primary.default};
        }
      `}

  :hover {
    background-color: ${({theme:e})=>e.palette.designColors.surface.hovered};
  }
`,M=f(z,{shouldForwardProp:$(["$hasDescription","$disabled"])})`
  line-height: ${({$hasDescription:e})=>e?"16px":"22px"};
  color: ${({theme:e,$disabled:t})=>t?e.palette.designColors.text.textOn.interactiveDisabled:e.palette.designColors.text.default};
`,le=f(S)`
  overflow: scroll;
`,B=e=>{const{option:t,disabled:a,placeholder:o,main:i,showHorizontal:u,size:c}=e,l=typeof t=="string"||typeof t>"u",x=n.useMemo(()=>l?t??o:i?t.label??t.value??o:t.dropLabel??t.label??t.value??o,[l,i,t,o]);return u?s.jsxs(m,{padding:c==="small"?"0":"5px 0",gap:"8px",children:[!l&&(t==null?void 0:t.left),s.jsxs(m,{gap:"8px",children:[s.jsx(M,{color:"inherit",$hasDescription:!l&&!!t.description,$disabled:a,"data-cy":`${l?t:t.value}-column`,children:x}),!l&&t.description&&s.jsx(z,{subdued:!0,disabled:a,children:t.description})]})]}):s.jsxs(s.Fragment,{children:[!l&&(t==null?void 0:t.left),s.jsxs(S,{gap:"2px",children:[s.jsx(M,{color:"inherit",$hasDescription:!l&&!!t.description,$disabled:a,"data-cy":`${l?t:t.value}-column`,children:x}),!l&&t.description&&s.jsx(z,{subdued:!0,disabled:a,children:t.description})]})]})},O=e=>{const{thick:t,disabled:a,showHorizontal:o,visible:i,placeholder:u,selected:c,size:l="regular",label:x,setVisible:v}=e;return s.jsxs(te,{$thick:t,onClick:p=>{p.preventDefault(),a||v(!i)},$label:x,children:[s.jsx(m,{gap:"8px",alignItems:"center",children:s.jsx(B,{size:l,showHorizontal:o,option:c,disabled:a,placeholder:u,main:!0})}),!a&&s.jsx(R,{name:i?D.upSmall:D.downSmall,size:Q.sixteen})]})},pe=e=>{const{ref:t,options:a,disabled:o,placeholder:i,defaultValue:u,onChange:c,listHeight:l,className:x,thick:v,onSearch:p,value:C,returnNameValue:N,error:q,label:w,showHorizontal:F,size:b="regular"}=e,[d,L]=n.useState(C??u??(i?void 0:a[0])),[g,y]=n.useState(),[K,E]=n.useState(""),P=typeof d=="string"||typeof d>"u",V=n.useId(),j=n.useRef(null),k=n.useCallback(()=>{p&&(p(void 0),E(""))},[p]);n.useEffect(()=>{C&&L(C)},[C]),n.useEffect(()=>{const r=h=>{j.current&&!j.current.contains(h.target)&&(y(g===void 0?void 0:!1),k())};return document.addEventListener("click",r,!0),()=>{document.removeEventListener("click",r,!0)}},[k,j,g]);const W=n.useCallback(r=>{const h=typeof r=="string",I=h?r:r.value??r.name??r.label,Z=N?h?I:r.name:I;return s.jsx(oe,{onClick:()=>{!h&&r.onClick?r.onClick():(L(r),c==null||c(Z)),k(),y(!1)},$active:I===(P?d:d.value??d.name??d.label),children:s.jsx(B,{size:b,option:r,disabled:o})},h?r:`${r.name}_${r.value}`)},[k,o,P,c,N,d,b]);return s.jsxs(ee,{className:`${x} ${g?"open":"close"}`,$size:b,disabled:o,ref:r=>{j.current=r,t!=null&&t.current&&(t.current=r)},$error:q,children:[w?s.jsxs(S,{padding:"8px 8px 8px 16px",alignItems:"flex-start",justifyContent:"flex-start",width:"100%",gap:"4px",children:[s.jsx(G,{strong:!0,whiteSpace:"nowrap",children:w}),s.jsx(O,{thick:v,disabled:o,showHorizontal:F,visible:g,placeholder:i,selected:d,size:b,label:w,setVisible:y})]}):s.jsx(O,{thick:v,disabled:o,showHorizontal:F,visible:g,placeholder:i,selected:d,size:b,label:w,setVisible:y}),s.jsxs(ae,{className:`dropdown-list ${p?"":`scroll-${V}`}`,$visible:g,$listHeight:l,children:[p&&s.jsx(Y,{onChange:r=>{E(r.target.value),p(r.target.value)},value:K}),s.jsx(le,{className:`scroll-${V}`,children:a.map(W)})]})]})};export{pe as D,Y as S};
