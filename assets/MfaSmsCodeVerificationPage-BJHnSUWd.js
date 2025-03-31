import{ai as W,q as Q,r as n,d as K,ev as Z,F as ee,bi as te,j as e,t as i,S as se,w as s,P as ie,ew as oe,dG as ae}from"./index-B1IYvx0M.js";import{P as ne}from"./react-number-format.es-D6j4F3wj.js";import{C as P,b as _}from"./index.esm-h9f6KZvT.js";import{I as re}from"./InputStatus-DpYcmRe_.js";import{m as de,S as le}from"./SmsNotification-jXRCWLtp.js";import{T as pe,a as ue}from"./index-Chya3hTY.js";const L=5,ce=6,f=s("div")`
  display: flex;
  flex-direction: row;
`,p=s("div")`
  display: flex;
  flex-direction: column;
`,me=s(p)`
  width: 100%;
`,xe=s(f)`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 50px 0 65px 0;
`,he=s("div")`
  position: absolute;
  height: 72px;
  width: 72px;
  z-index: 0;
`,ge=s("div")`
  position: absolute;
  height: 72px;
  width: 72px;
`,fe=s("div")`
  position: relative;
  margin: 0 auto;
  top: 24px;
  font-size: 16px;
  line-height: 24px;
  font-family: ${({theme:t})=>t.typography.fonts.semiBold};
  color: ${({theme:t})=>t.palette.designColors.text.default};
`,ye=s(p)`
  margin: 24px auto 0 auto;
  align-items: center;
  text-align: center;
  font-family: ${({theme:t})=>t.typography.fonts.bold};
  font-size: 21px;
  height: 60px;
  width: 360px;
  letter-spacing: -0.2px;
  line-height: 30px;

  @media screen and (max-width: 452px) {
    width: 330px;
  }

  @media screen and (max-width: 376px) {
    width: 280px;
  }

  @media screen and (max-width: ${({theme:t})=>`${t.breakpoints.values.xs}px`}) {
    width: 250px;
  }
`,ve=s(f)`
  padding-top: 4px;
  width: 97px;
  margin: 0 auto;
`,N=s(re)`
  justify-content: center;
`,Ce=s(ne)`
  border: 1px solid ${({theme:t})=>t.palette.designColors.borders.subdued};
  border-radius: 4px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  font-family: ${({theme:t})=>t.typography.fonts.medium};
  color: ${({theme:t})=>t.palette.designColors.text.tertiary};
  max-width: 280px;
  width: 100%;
  outline: none;
`,je=s(p)`
  align-items: center;
  padding: 40px 0;
  font-family: ${({theme:t})=>t.typography.fonts.medium};
  color: ${({theme:t})=>t.palette.designColors.text.tertiary};
  font-size: 16px;
  line-height: 24px;
  justify-content: center;
  div {
    cursor: pointer;
    padding-left: 2px;
    color: ${({theme:t})=>t.palette.designColors.interactive.primary.default};
  }

  @media screen and (max-width: 376px) {
    flex-direction: column;
    align-items: center;
  }
`,be=s(f)`
  width: 230px;
  margin: 0 auto;
  justify-content: center;
  padding-top: 40px;
  gap: 20px;
`,Me=s(ie)`
  width: 85px;
`,Te=s(le(p))`
  margin: auto auto 4px auto;
`,Se=s("div")`
  position: relative;

  &:hover {
    & .Tooltip {
      visibility: visible;
      top: -20px;
    }
    & .Tooltip > :first-child {
      margin-right: -30%;
    }
  }
`,we=({userAuth:{mfa:t}})=>({smsCodeVerificationInProgress:t.smsCodeVerificationInProgress,smsCodeVerified:t.smsCodeVerification.isSmsCodeValid,smsVerificationAttempts:t.smsCodeVerification.smsVerificationAttempts,cantRetrySmsCodeValidation:t.smsCodeVerification.reachedLimit,sendSmsOtpInProgress:t.sendSmsOtpInProgress,smsOtpSent:t.smsOtpSent,dontSendAdditionalOtps:t.sendSmsOtpInProgress?!1:t.smsOtp.reachedLimit,phoneCountryCode:t.phoneCountryCode}),Ie={resendOtp:ae.request,smsCodeValidation:oe.request},r=600,Ee=({selectedPhoneNumber:t,selectedDialCode:y,smsCodeVerificationInProgress:d,dontSendAdditionalOtps:u,cantRetrySmsCodeValidation:c,sendSmsOtpInProgress:m,smsOtpSent:v,smsCodeVerified:$,smsVerificationAttempts:x,smsCodeValidation:F,onUnableToRetryCodeValidation:C,onMfaValidationSuccess:j,resendOtp:R,shouldChangeMobileNumber:V,origin:z,phoneCountryCode:B,mobileVerificationType:b,inModal:O})=>{const M=Q(),[a,T]=n.useState(0),X=K(Z),g=y+t,[S,A]=n.useState(!1),[l,w]=n.useState(""),[I,E]=n.useState(!1),{formatMessage:D}=ee(),h=de(y+t),Y=X?e.jsx(i,{id:"CJEjuM",defaultMessage:[{type:0,value:"Didn't receive the SMS?"}]}):e.jsx(i,{id:"lVm3OJ",defaultMessage:[{type:0,value:"Having problems signing in?"}]}),{progress:G,remainingMinutes:J,remainingSeconds:q}=n.useMemo(()=>{const o=Math.trunc((r-a)%60);return{progress:a*100/r,remainingMinutes:Math.trunc((r-a)/60),remainingSeconds:o<10?"0"+o:o}},[a]),H=()=>{let o;return a<r&&(o=setInterval(()=>{T(a+1)},1e3)),()=>{clearInterval(o)}};n.useEffect(()=>H(),[a]),n.useEffect(()=>{u&&a===r&&C()},[u,a===r]),n.useEffect(()=>{c&&(te.error(D({id:"V47TTL",defaultMessage:[{type:0,value:"You have reached the maximum number of attempts to validate your mfa, please try again later."}]})),C())},[c]),n.useEffect(()=>{E(!c&&x>0&&!d),w("")},[x,d]);const k=o=>{I&&E(!1),w(o)};return e.jsxs(me,{children:[e.jsxs(xe,{children:[e.jsx(he,{children:e.jsx(P,{value:100,strokeWidth:8,styles:_({rotation:0,strokeLinecap:"round",pathColor:M.palette.designColors.text.subtle,pathTransition:"none"})})}),e.jsx(ge,{children:e.jsx(P,{value:G,strokeWidth:8,styles:_({rotation:0,strokeLinecap:"round",pathColor:M.palette.designColors.interactive.primary.default,pathTransitionDuration:.5})})}),e.jsx(fe,{children:e.jsx(i,{id:"lI17Av",defaultMessage:[{type:1,value:"minutes"},{type:0,value:":"},{type:1,value:"seconds"}],values:{minutes:J,seconds:q}})})]}),e.jsx(ye,{children:e.jsx(i,{id:"lC+nK8",defaultMessage:[{type:0,value:"Enter mobile verification code"}]})}),!m&&e.jsx(Te,{success:v,children:v?S?e.jsx(i,{id:"JmldaL",defaultMessage:[{type:0,value:"Code has been resent to "},{type:1,value:"maskPhNo"}],values:{maskPhNo:h}}):e.jsx(i,{id:"XQtrip",defaultMessage:[{type:0,value:"Code has been sent to "},{type:1,value:"maskPhNo"}],values:{maskPhNo:h}}):S?e.jsx(i,{id:"M6Fn91",defaultMessage:[{type:0,value:"Unable to resend code to "},{type:1,value:"maskPhNo"}],values:{maskPhNo:h}}):e.jsx(i,{id:"J18itb",defaultMessage:[{type:0,value:"Unable to send code to to "},{type:1,value:"maskPhNo"}],values:{maskPhNo:h}})}),e.jsx(ve,{children:e.jsx(Ce,{value:l,disabled:a===r||d||m,format:"### ###",autoComplete:"off",name:"twoFACode",placeholder:"XXX XXX",onValueChange:o=>{const U=o!=null&&o.value?o.value.replace(/ /g,""):"";k(U)}})}),a===r&&e.jsx(N,{visible:!0,type:"error",children:e.jsx(i,{id:"1+kFiG",defaultMessage:[{type:0,value:"The token has expired. Please click RESEND to generate a new one."}]})}),I&&!$&&e.jsx(N,{visible:!0,type:"error",children:L-x===1?e.jsx(i,{id:"TfeGAW",defaultMessage:[{type:0,value:"Please try again. You have 1 attempt remaining"}]}):e.jsx(i,{id:"6ydfdR",defaultMessage:[{type:0,value:"Please try again. You have "},{type:1,value:"attempt"},{type:0,value:" attempts remaining"}],values:{attempt:L-x}})}),e.jsxs(be,{children:[e.jsx(p,{children:e.jsxs(Se,{"data-tip":!0,"data-tooltip-id":"smsCodeTooltip",children:[u&&e.jsx(pe,{id:"smsCodeTooltip",children:e.jsx(ue,{children:e.jsx(i,{id:"2fb058",defaultMessage:[{type:0,value:"You have reached maximum resend attempts. Try again later"}]})})}),e.jsx(se,{size:"large",disabled:u||d||m,onClick:()=>{R({smsMobileNumber:g,mobileVerificationType:b}),k(""),T(0),A(!0)},children:e.jsx(i,{id:"IdxmOT",defaultMessage:[{type:0,value:"Resend Code"}]})})]})}),e.jsx(Me,{size:"large",loading:d||m,disabled:c||(l==null?void 0:l.length)!==ce||a===r,onClick:()=>{F({code:l,smsMobileNumber:g,onSuccess:()=>{j&&j(g)},shouldChangeMobileNumber:V,origin:z,countryCode:O?B:void 0,mobileVerificationType:b})},"data-cy":"mobile-2fa-submit-btn",children:e.jsx(i,{id:"wSZR47",defaultMessage:[{type:0,value:"Submit"}]})})]}),e.jsxs(je,{children:[Y,e.jsx("div",{onClick:()=>window.open("https://kinesis.money/contact-us/","_blank"),children:e.jsx(i,{id:"iI4i7d",defaultMessage:[{type:0,value:"contact support."}]})})]})]})},Fe=W(we,Ie)(Ee);export{Fe as M};
