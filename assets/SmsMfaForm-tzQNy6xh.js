import{a as D}from"./index.esm-B2HhHynd.js";import{d as y,r as g,F as E,u as w,z,bi as I,j as t,t as a,S as M,eY as b,P as A,w as n,q as P,eZ as V,dG as $,C as W}from"./index-B1IYvx0M.js";import{C as v}from"./legacy-fonts-BbYsH4nw.js";import{M as F}from"./MaskedInput-CGosAaON.js";import{C as S,b as k}from"./index.esm-h9f6KZvT.js";const Ce=e=>{const o=D().email();try{return o.validateSync(e),!!e}catch{return!1}},q=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i,je=e=>{let o;return e?q.test(e)||(o="Invalid email address. Please try again"):o="Please enter your email",o},G=n("div")`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  align-items: center;
`,Q=n("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  margin-top: 24px;
  border: 1px solid ${({theme:e})=>e.palette.designColors.borders.critical.default};
  border-radius: 4px;
  padding: 20px 16px;
  background-color: ${({theme:e})=>e.palette.designColors.surface.critical.subdued};
`,U=n(v)`
  text-align: center;
`,Y=n(F)`
  font-family: ${({theme:e})=>e.typography.fonts.medium};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: 0;
  width: 172px;
  height: 56px;
  text-align: center;
  padding: 14px;
  color: ${({theme:e})=>e.palette.designColors.text.default};
  border-radius: 4px !important;
  border: 1px solid ${({theme:e})=>e.palette.designColors.borders.subdued};
`,H=n("div")`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
  margin-top: 48px;
  gap: 8px;
`,K=n("h4")`
  text-align: center;
  margin-bottom: 32px;
  font-size: 21px;
  line-height: 30px;
  font-family: ${({theme:e})=>e.typography.fonts.bold};
  letter-spacing: -0.2px;
`,O=n("h5")`
  text-align: center;
  color: ${({theme:e})=>e.palette.designColors.text.strong};
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 21px;
  font-family: ${({theme:e})=>e.typography.fonts.semiBold};
`,Me=e=>{const{onBack:o,onSubmit:l,buttonSize:r="large"}=e,x=y(d=>d.userAuth.mfaConfirmation.hasError),h=y(d=>d.userAuth.mfaConfirmation.reachedLimit),p=y(d=>d.userAuth.mfaConfirmation.loading),[u,f]=g.useState(""),{formatMessage:c}=E(),s=w(),m=d=>{s(b()),f(d)};return g.useEffect(()=>{h&&(s(z()),I.error(c({id:"t43Q7E",defaultMessage:[{type:0,value:"Logged out due to incorrect 2FA attempts."}]})))},[s,c,h]),t.jsx(t.Fragment,{children:t.jsxs(G,{children:[t.jsx(K,{children:t.jsx(a,{id:"MUs0px",defaultMessage:[{type:0,value:"Enter the code generated from your authenticator app to authorise the withdrawal"}]})}),t.jsx(O,{children:t.jsx(a,{id:"ZVMCn+",defaultMessage:[{type:0,value:"Enter your code here"}]})}),t.jsx(Y,{format:"### ###",autoComplete:"off",autoFocus:!0,placeholder:c({id:"2ZZbWY",defaultMessage:[{type:0,value:"Enter your code"}]}),onValueChange:d=>m(d.value)}),x&&t.jsx(Q,{children:t.jsx(U,{children:t.jsx(a,{id:"cA2nsG",defaultMessage:[{type:0,value:"Incorrect code, please try again."}]})})}),t.jsxs(H,{children:[o&&t.jsx(M,{size:r,onClick:()=>{s(b()),o()},"data-cy":"qrcode-mfaform-back-btn",disabled:p,children:t.jsx(a,{id:"cyR7Kh",defaultMessage:[{type:0,value:"Back"}]})}),t.jsx(A,{size:r,disabled:(u==null?void 0:u.length)!==6||p,loading:p,onClick:()=>{l(u)},"data-cy":"qrcode-mfaform-confirm-btn",children:t.jsx(a,{id:"N2IrpM",defaultMessage:[{type:0,value:"Confirm"}]})})]})]})})},_=n("div")`
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
`,J=n("div")`
  position: absolute;
  height: 72px;
  width: 72px;
  z-index: 0;
`,X=n("div")`
  position: absolute;
  height: 72px;
  width: 72px;
`,ee=n("span")`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fonts.semiBold};
`,te=e=>{const{onTimerReached:o,maxSeconds:l=60*5,seconds:r,setSeconds:x,className:h}=e,p=P(),{progress:u,remainingMinutes:f,remainingSeconds:c}=g.useMemo(()=>{const s=Math.trunc((l-r)%60);return{progress:r*100/l,remainingMinutes:Math.trunc((l-r)/60),remainingSeconds:s<10?"0"+s:s}},[r,l]);return g.useEffect(()=>{let s;return r<l?s=setInterval(()=>{x(m=>m+1)},1e3):r===l&&(clearInterval(s),o==null||o()),()=>clearInterval(s)},[l,o,x,r]),t.jsxs(_,{className:h,children:[t.jsx(J,{children:t.jsx(S,{value:100,strokeWidth:8,styles:k({rotation:0,strokeLinecap:"round",pathTransition:"none",pathColor:p.palette.designColors.interactive.secondary.disabled})})}),t.jsx(X,{children:t.jsx(S,{value:u,strokeWidth:8,styles:k({rotation:0,strokeLinecap:"round",pathTransition:"none",pathColor:p.palette.designColors.interactive.primary.default})})}),t.jsx(ee,{children:t.jsx(a,{id:"lI17Av",defaultMessage:[{type:1,value:"minutes"},{type:0,value:":"},{type:1,value:"seconds"}],values:{minutes:f,seconds:c}})})]})},ne=n("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,se=n(te)`
  margin-bottom: 40px;
`,oe=n("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  border: 1px solid ${({theme:e})=>e.palette.designColors.borders.success.default};
  border-radius: 4px;
  padding: 20px 16px;
  background-color: ${({theme:e})=>e.palette.designColors.surface.success.subdued};
`,ae=n(v)`
  min-width: 272px;
  text-align: center;
`,re=n("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  margin-top: 24px;
  border: 1px solid ${({theme:e})=>e.palette.designColors.borders.critical.default};
  border-radius: 4px;
  padding: 20px 16px;
  background-color: ${({theme:e})=>e.palette.designColors.surface.critical.subdued};
`,ie=n(v)`
  text-align: center;
`,le=n(F)`
  font-family: ${({theme:e})=>e.typography.fonts.medium};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: 0;
  width: 182px;
  height: 56px;
  text-align: center;
  padding: 14px;
  color: ${({theme:e})=>e.palette.designColors.text.default};
  border-radius: 4px !important;
  border: 1px solid ${({theme:e})=>e.palette.designColors.borders.subdued};
`,de=n("div")`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
  margin-top: 48px;
  gap: 8px;
`,ce=n("h4")`
  text-align: center;
  margin-bottom: 32px;
  font-size: 21px;
  line-height: 30px;
  font-family: ${({theme:e})=>e.typography.fonts.bold};
  letter-spacing: -0.2px;
`,pe=n("h5")`
  text-align: center;
  color: ${({theme:e})=>e.palette.designColors.text.strong};
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 21px;
  font-family: ${({theme:e})=>e.typography.fonts.semiBold};
`,ue=n(W)`
  padding: 20px 0;
  font-family: ${({theme:e})=>e.typography.fonts.medium};
  color: ${({theme:e})=>e.palette.designColors.text.tertiary};
  font-size: 16px;
  line-height: 24px;
  justify-content: center;
  align-items: center;
  div {
    cursor: pointer;
    padding-left: 2px;
    color: ${({theme:e})=>e.palette.designColors.interactive.primary.default};
  }
`,ge=n("span")`
  margin-right: 10px;
`,xe=e=>e?`${e.substring(0,4)}${"*".repeat(e.length-7)}${e.substring(e.length-3)}`:"",ve=e=>{const{onBack:o,onSubmit:l,onCloseClick:r,buttonSize:x="large"}=e,h=y(i=>i.userAuth.mfaConfirmation.hasError),p=y(i=>i.userAuth.mfaConfirmation.reachedLimit),u=y(i=>i.userAuth.mfaConfirmation.loading),{data:f}=V(),c=f==null?void 0:f.mfaMobileNumber,s=w(),[m,d]=g.useState(""),[L,T]=g.useState(0),[C,Z]=g.useState(!0),{formatMessage:j}=E(),B=600,N=i=>{s(b()),d(i)},R=()=>{Z(!1),r()};return g.useEffect(()=>{s($.request({smsMobileNumber:c}))},[s,c]),g.useEffect(()=>{p&&(s(z()),I.error(j({id:"t43Q7E",defaultMessage:[{type:0,value:"Logged out due to incorrect 2FA attempts."}]})))},[j,p,s]),t.jsx(t.Fragment,{children:t.jsxs(ne,{children:[t.jsx(se,{seconds:L,setSeconds:T,maxSeconds:B,onTimerReached:R}),t.jsx(ce,{children:t.jsx(a,{id:"urtkrV",defaultMessage:[{type:0,value:"Please enter the SMS code to authorise the withdrawal"}]})}),t.jsx(oe,{children:t.jsx(ae,{children:t.jsx(a,{id:"ayNz1L",defaultMessage:[{type:0,value:"A code has been sent to "},{type:1,value:"getMobileNumber"}],values:{getMobileNumber:xe(c)}})})}),t.jsx(pe,{children:t.jsx(a,{id:"ZVMCn+",defaultMessage:[{type:0,value:"Enter your code here"}]})}),t.jsx(le,{format:"### ###",autoComplete:"off",autoFocus:!0,placeholder:j({id:"2ZZbWY",defaultMessage:[{type:0,value:"Enter your code"}]}),onValueChange:i=>N(i!=null&&i.value?i.value.replace(/ /g,""):"")}),(h||!C)&&t.jsx(re,{children:t.jsx(ie,{children:C?t.jsx(a,{id:"cA2nsG",defaultMessage:[{type:0,value:"Incorrect code, please try again."}]}):t.jsx(a,{id:"Ux0WVF",defaultMessage:[{type:0,value:"SMS code has expired."}]})})}),t.jsxs(de,{children:[o&&t.jsx(M,{size:x,onClick:()=>{s(b()),o()},"data-cy":"sms-mfaform-back-btn",children:t.jsx(a,{id:"cyR7Kh",defaultMessage:[{type:0,value:"Back"}]})}),t.jsx(M,{size:x,disabled:!C,onClick:()=>{s(b()),s($.request({smsMobileNumber:c}))},"data-cy":"sms-mfaform-resend-btn",children:t.jsx(a,{id:"ZD48TW",defaultMessage:[{type:0,value:"Resend code"}]})}),t.jsx(A,{size:x,disabled:!C||(m==null?void 0:m.length)!==6||u,loading:u,onClick:()=>l(m),"data-cy":"sms-mfaform-confirm-btn",children:t.jsx(a,{id:"N2IrpM",defaultMessage:[{type:0,value:"Confirm"}]})})]}),t.jsxs(ue,{children:[t.jsx(ge,{children:t.jsx(a,{id:"CJEjuM",defaultMessage:[{type:0,value:"Didn't receive the SMS?"}]})}),t.jsx("div",{onClick:()=>window.open("https://kinesis.money/contact-us/","_blank"),children:t.jsx(a,{id:"iI4i7d",defaultMessage:[{type:0,value:"contact support."}]})})]})]})})};export{Me as M,te as T,ve as a,Ce as b,je as v};
