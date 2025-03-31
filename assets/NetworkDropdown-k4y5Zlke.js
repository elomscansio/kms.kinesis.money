import{w as n,x as u,j as s}from"./index-B1IYvx0M.js";import{N as p,a as c}from"./Names-CaXmBvXg.js";import{D as d}from"./Dropdown-B-BoUpC5.js";import"./index-6vxM0M4a.js";import"./index-J1GP0RDZ.js";import"./CurrencyIcon-BSh20PSx.js";import"./long-names-G_UIJH0E.js";var a=(e=>(e.ethereum="ethereum",e.stellar="stellar",e.default="default",e))(a||{});const k=n("div",{shouldForwardProp:u(["noMargin","size"])})(({noMargin:e,size:t})=>({margin:e?"":"60px auto",fontSize:"10px",position:"relative",textIndent:"-9999em",borderTop:"0.3em solid rgba(0, 0, 0, 0.6)",borderRight:"0.3em solid rgba(0, 0, 0, 0.6)",borderBottom:"0.3em solid rgba(0, 0, 0, 0.6)",borderLeft:"0.3em solid #000000",transform:"translateZ(0)",animation:"load8 1.1s infinite linear",borderRadius:"50%",width:t??"2.8em",height:t??"2.8em","&:after":{borderRadius:"50%",width:t??"2.8em",height:t??"2.8em"},"@keyframes load8":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}})),h=n("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({theme:e})=>e.palette.designColors.greyscale.black.default};
  border-radius: 50%;
  width: 32px;
  height: 32px;

  @media screen and (max-width: ${({theme:e})=>`${e.breakpoints.values.sm}px`}) {
    max-width: 26px;
    max-height: 26px;
    width: 100%;
  }
`,C=e=>{const{title:t,options:i,...r}=e;return s.jsx(d,{options:i.map(o=>({label:o.name,value:o.name,description:o.additionalInfo,left:s.jsx(h,{children:s.jsx(p,{name:o.icon,fill:m=>m.palette.designColors.surface.default,size:c.sixteen})}),onClick:()=>o.onClick()})),defaultValue:t,value:t,...r})},l={[a.ethereum]:{label:"ETH",description:"Ethereum (ERC-20)",value:a.ethereum},[a.stellar]:{label:"XLM",description:"Stellar network",value:a.stellar}},N=e=>{const{setNetwork:t,currentCryptoNetwork:i}=e;return s.jsx(d,{showHorizontal:!0,size:"small",value:l[i??a.ethereum],options:Object.values(l).map(r=>({label:r.label,description:r.description,value:r.value})),onChange:r=>{t(r)}})};export{C as A,a as C,N,k as S};
