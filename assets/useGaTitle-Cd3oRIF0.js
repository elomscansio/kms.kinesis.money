import{j as t,w as e,bt as a,r,n as i}from"./index-B1IYvx0M.js";import{u as n}from"./useRoute-R5W9bIdF.js";import{c}from"./capitalize-Crm3kySE.js";const l=e(a)`
  top: 3.5em !important;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: '600px') {
    top: 4em !important;
    width: 400px;
    display: block;
  }

  .Toastify__toast {
    font-family: ${({theme:o})=>o.typography.fonts.HarmonyOsSans.medium};
    font-size: 12px;
    color: ${({theme:o})=>o.palette.designColors.text.default};
  }

  .Toastify__toast--success {
    background-color: ${({theme:o})=>o.palette.designColors.surface.success.subdued};
  }

  .Toastify__toast--info {
    background-color: ${({theme:o})=>o.palette.designColors.surface.info.subdued};
  }

  .Toastify__toast--warning {
    background-color: ${({theme:o})=>o.palette.designColors.surface.warning.subdued};
  }

  .Toastify__toast--error {
    background-color: ${({theme:o})=>o.palette.designColors.surface.critical.subdued};
  }

  .Toastify__progress-bar--success {
    background-color: ${({theme:o})=>o.palette.designColors.surface.success.default};
  }

  .Toastify__progress-bar--info {
    background-color: ${({theme:o})=>o.palette.designColors.surface.info.default};
  }

  .Toastify__progress-bar--warn {
    background-color: ${({theme:o})=>o.palette.designColors.surface.warning.default};
  }

  .Toastify__progress-bar--error {
    background-color: ${({theme:o})=>o.palette.designColors.surface.critical.default};
  }

  .toast__close-button {
    font-size: 16px;
  }
`,p=()=>t.jsx(l,{}),g=()=>{const{baseRoute:o,path:s}=n();r.useEffect(()=>{i.send({hitType:"pageview",page:s,title:`${c(o)} - Kinesis Money`})},[o,s])};export{p as T,g as u};
