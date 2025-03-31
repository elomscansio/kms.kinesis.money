import{dw as $,j as t,b2 as c,B as y,I as d,t as l,w as p,x as g}from"./index-B1IYvx0M.js";import{b as u,N as j}from"./Names-CaXmBvXg.js";import{T as k,a as v}from"./index-Chya3hTY.js";const w=e=>e.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase(),z=p("div",{shouldForwardProp:g(["$background","$imageUrl","$size"])})`
  cursor: ${({onClick:e})=>e?"pointer":"unset"};
  align-self: center;
  position: relative;
  height: ${({$size:e})=>e};
  width: ${({$size:e})=>e};
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({$imageUrl:e})=>e?`url(${e})`:"unset"};
  background-color: ${({theme:e,$background:o})=>o??e.palette.designColors.greyscale.black[4]};
`,I=p(j,{shouldForwardProp:g(["bottom","right"])})`
  position: absolute;
  right: ${({right:e})=>e??"-18%"};
  bottom: ${({bottom:e})=>e??"-18%"};
`,F=e=>{const{profileImageUrl:o,status:i,accountType:r,onClick:m,size:h="32px",statusSize:s="16px",name:a,background:f,right:b,bottom:x}=e,n=$();return t.jsxs(z,{$imageUrl:r===c.corporate?void 0:o,onClick:m,$size:h,$background:f,children:[a&&(!o||o&&r===c.corporate)&&t.jsx(y,{children:w(`${a}`)}),i&&t.jsxs(t.Fragment,{children:[t.jsx(I,{"data-tip":!0,"data-tooltip-id":`profile-icon-${n}`,name:i===d.kycVerified?u.verifiedWithOutline:u.unverifiedWithOutline,size:s,iconSize:s,bottom:x,right:b}),t.jsx(k,{id:`profile-icon-${n}`,children:t.jsx(v,{width:"fit-content",children:i===d.kycVerified?t.jsx(l,{id:"Z8971h",defaultMessage:[{type:0,value:"Verified"}]}):t.jsx(l,{id:"n9fdaJ",defaultMessage:[{type:0,value:"Unverified"}]})})})]})]})};export{F as P};
