import{d as m,fE as q,fF as J,dD as L,aZ as Y,dE as X,u as _,r,j as e,b2 as y,t as n,S as A,P as ee,bg as te,w as o,R as M,C as N,x as ae,dA as ne}from"./index-B1IYvx0M.js";import{M as oe}from"./MfaSmsCodeVerificationPage-BJHnSUWd.js";import{M as ie}from"./index-muQS-9Gf.js";import{N as se,a as re,b as de}from"./Names-CaXmBvXg.js";import{g as F,P as ce}from"./PhoneNumberInput-CtBmxYCy.js";const le=o(N,{shouldForwardProp:ae(["$inModal"])})`
  width: ${({$inModal:t})=>t?"auto":"652px"};
  padding-bottom: 56px;

  @media screen and (max-width: ${({theme:t})=>`${t.breakpoints.values.sm}px`}) {
    width: 494px;
    padding-bottom: 56.35px;
  }

  @media screen and (max-width: 452px) {
    width: 370px;
    padding-bottom: 15px;
  }

  @media screen and (max-width: ${({theme:t})=>`${t.breakpoints.values.xs}px`}) {
    width: 296px;
  }
`,j=o(N)`
  margin-top: 4px;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:t})=>t.typography.fonts.bold};
  letter-spacing: -0.2px;
  font-size: 24px;
  letter-spacing: -0.4px;
  line-height: 34px;
  text-align: center;

  div {
    font-size: 18px;
    line-height: 26px;
    text-align: center;
  }
`,pe=o(j)`
  margin-bottom: 5px;
  padding-left: 50px;
  padding-right: 50px;
`,E=o(M)`
  width: 100%;
  padding: 0 32px 0 32px;
  justify-content: center;
  text-align: center;
  margin-top: 4px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;

  font-family: ${({theme:t})=>t.typography.fonts.medium};
  color: ${({theme:t})=>t.palette.designColors.text.tertiary};
`,B=o(E)`
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
`,ue=o(M)`
  width: 100%;
  padding-top: 63px;
  padding-bottom: 24px;
  justify-content: center;

  @media screen and (max-width: ${({theme:t})=>`${t.breakpoints.values.sm}px`}) {
    padding: 15px 0;
  }
`,me=o(N)`
  height: 105px;
  padding-bottom: 56px;
  align-items: center;
  margin: 0 auto;
  input {
    outline: none;
  }

  @media screen and (max-width: ${({theme:t})=>`${t.breakpoints.values.sm}px`}) {
    padding-bottom: 56.24px;
  }

  @media screen and (max-width: 452px) {
    padding-bottom: 40.16px;
  }

  @media screen and (max-width: ${({theme:t})=>`${t.breakpoints.values.xs}px`}) {
    padding-bottom: 40.16px;
    padding-left: 10px;
    padding-right: 10px;
  }
`,xe=o(M)`
  margin: 0 auto;
  justify-content: space-between;
  padding: 20px 0 40px 0;
  grid-column-gap: 5px;
  gap: 16px;

  @media screen and (max-width: 452px) {
    padding: 40px 0 40px 0;
  }
`,ge=o("span")`
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 21px;
  font-family: ${({theme:t})=>t.typography.fonts.medium};
  color: ${({theme:t})=>t.palette.designColors.text.strong};
  align-self: start;
`,he=o(ce)`
  width: 100%;
`,Ne=t=>{const{onNext:S,onBack:I,inModal:l,mobileVerificationType:w,onSkip:C}=t,P=m(q),p=m(J),s=m(L)??"",x=m(Y),{data:g}=X(),v=_(),[U,W]=r.useState(!1),[d,h]=r.useState(s),[u,b]=r.useState(s!=null&&s.startsWith("+")?"":"+61"),i=F(p),$=(i==null?void 0:i.countryDialCode)||u,k=(i==null?void 0:i.shortPhoneNumber)||d,D=!!p||!s&&!g,[G,V]=r.useState(!1),[H,f]=r.useState(!1),T=()=>s!==u+d,z=()=>T()?u+d:s,R=c=>{if(!c)return;const a=F(c);b(a!=null&&a.countryDialCode?a==null?void 0:a.countryDialCode:""),h(a!=null&&a.shortPhoneNumber?a==null?void 0:a.shortPhoneNumber:"")};r.useEffect(()=>{P&&R(P),p&&(b(i.countryDialCode),h(i.shortPhoneNumber))},[]);const K=()=>{T()||!g||x===y.corporate?(V(!0),v(ne.request({mobileNumber:u+d,mobileVerificationType:w})),f(!0)):S(z())},O=()=>{f(!1)},Q=()=>{v(te.util.invalidateTags(["validated-mobile"])),S(z())},Z=()=>{V(!1),f(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(ie,{open:H,onClose:()=>{Z()},children:G&&e.jsx(oe,{selectedPhoneNumber:k,selectedDialCode:$,onUnableToRetryCodeValidation:O,onMfaValidationSuccess:Q,shouldChangeMobileNumber:x!==y.corporate?D:!1,origin:"KMS Profile",mobileVerificationType:w,inModal:!0})}),e.jsx(ue,{children:e.jsx(se,{name:de.mobilePhone,size:re.eighty})}),e.jsx(le,{$inModal:l,children:l?e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsx(n,{id:"P+M6Wg",defaultMessage:[{type:0,value:"Enter your mobile number for regulatory, security and communication purposes."}]})}),e.jsx(B,{children:e.jsx(n,{id:"GcgoKl",defaultMessage:[{type:0,value:"We only use your number as an additional layer of security verification to protect your account and personal data."}]})}),e.jsx(B,{children:e.jsx(n,{id:"yjAe7F",defaultMessage:[{type:0,value:"You will receive an SMS code with your security code."}]})})]}):x!==y.corporate?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx(n,{id:"3SrNU/",defaultMessage:[{type:0,value:"Enter your primary contact number"}]})}),e.jsx(E,{children:e.jsx(n,{id:"Q+ovld",defaultMessage:[{type:0,value:"Use this number to receive 2-Factor authorisation codes"}]})})]}):e.jsx(e.Fragment,{children:e.jsx(j,{children:e.jsx(n,{id:"weBsO3",defaultMessage:[{type:0,value:"Enter your business contact number"}]})})})}),e.jsxs(me,{children:[e.jsx(ge,{children:e.jsx(n,{id:"JBLdZm",defaultMessage:[{type:0,value:"Mobile number"}]})}),e.jsx(he,{defaultDial:$,value:k,onValidationStatusChanged:W,onPhoneNumberChange:c=>{b(c.dial),h(c.phone)},disabled:!!p})]}),e.jsxs(xe,{children:[!l&&e.jsx(A,{id:"onGoBackButton",size:"large",onClick:I,"data-cy":"change-mobile-back-btn",children:e.jsx(n,{id:"orvpWh",defaultMessage:[{type:0,value:"Go back"}]})}),C&&e.jsx(A,{id:"onSkipButton",size:"large",onClick:C,"data-cy":"change-mobile-skip-btn",children:e.jsx(n,{id:"/4tOwT",defaultMessage:[{type:0,value:"Skip"}]})}),e.jsx(ee,{id:"onNextButton",size:"large",disabled:!d&&!U,onClick:()=>{K()},"data-cy":"change-mobile-next-btn",children:g||!l?e.jsx(n,{id:"9+Ddtu",defaultMessage:[{type:0,value:"Next"}]}):e.jsx(n,{id:"MTwUmz",defaultMessage:[{type:0,value:"Send code"}]})})]})]})};export{Ne as E};
