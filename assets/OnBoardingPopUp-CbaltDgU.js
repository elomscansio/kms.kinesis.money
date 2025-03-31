import{F as g,w as i,C as u,be as p,j as t,t as s,P as f}from"./index-B1IYvx0M.js";import{b as a,G as x}from"./Names-CaXmBvXg.js";import{D as m,b}from"./legacy-fonts-BbYsH4nw.js";var l=(e=>(e.email="email",e.kyc="kyc",e.mfa="mfa",e.kycPending="kycPending",e.welcomeFutureMoney="welcomeFutureMoney",e.firstDeposit="firstDeposit",e.debitCard="debitCard",e.comingSoon="comingSoon",e.underage="underage",e))(l||{});const h=()=>{const{formatMessage:e}=g();return{email:{image:a.verifyEmail,headingText:e({id:"lBs6BA",defaultMessage:[{type:0,value:"Verify your email"}]}),bodyText:e({id:"y9PIYA",defaultMessage:[{type:0,value:"Verify your email to gain access to digital gold and silver as well as a range of cryptocurrencies."}]}),buttonText:e({id:"LnZ/ly",defaultMessage:[{type:0,value:"SEND VERIFICATION EMAIL"}]})},kyc:{image:a.KycVerification,headingText:e({id:"oBSCG0",defaultMessage:[{type:0,value:"Verify your account"}]}),bodyText:e({id:"RQjWQg",defaultMessage:[{type:0,value:"To access all the benefits of your account, we need to verify your ID. It should only take a few minutes."}]}),buttonText:e({id:"t28SE7",defaultMessage:[{type:0,value:"Verify now"}]})},mfa:{image:a.verify2fa,headingText:e({id:"sAnz8y",defaultMessage:[{type:0,value:"Setup 2FA"}]}),bodyText:e({id:"fYfsM3",defaultMessage:[{type:0,value:"Ensure the safety of your assets by setting up 2 factor authentication. We highly recommended you take the time to protect your account."}]}),buttonText:e({id:"z4ePe5",defaultMessage:[{type:0,value:"SETUP 2FA"}]})},kycPending:{image:a.verifyId,headingText:e({id:"Bl3BPc",defaultMessage:[{type:0,value:"ID Verification Pending"}]}),bodyText:e({id:"IQ0JB5",defaultMessage:[{type:0,value:"Please allow 1-3 business days to process your details. We will get in touch if further information is required."}]}),buttonText:e({id:"PjYk7+",defaultMessage:[{type:0,value:"CONTACT SUPPORT"}]})},welcomeFutureMoney:{image:a.futureOfMoney,headingText:e({id:"pMGec6",defaultMessage:[{type:0,value:"Welcome to the Future of Money"}]}),bodyText:e({id:"jcZ5+O",defaultMessage:[{type:0,value:"Start your journey with Kinesis - A universally accepted currency where borders become obsolete, opening up payment solutions to all."}]}),buttonText:e({id:"igtH1W",defaultMessage:[{type:0,value:"EXPLORE KINESIS"}]})},firstDeposit:{image:a.firstDeposit,headingText:e({id:"ReMJPQ",defaultMessage:[{type:0,value:"Make your first deposit"}]}),bodyText:e({id:"jcZ5+O",defaultMessage:[{type:0,value:"Start your journey with Kinesis - A universally accepted currency where borders become obsolete, opening up payment solutions to all."}]}),buttonText:e({id:"B7cvvp",defaultMessage:[{type:0,value:"DEPOSIT NOW"}]})},debitCard:{image:a.newDebitCard,headingText:e({id:"8FcLKL",defaultMessage:[{type:0,value:"Kinesis Virtual Card"}]}),bodyText:e({id:"MA9HyE",defaultMessage:[{type:0,value:"The perfect card for making payments using digital gold and silver, easily accessible to anyone, anywhere in the world."}]}),buttonText:e({id:"P9wyYK",defaultMessage:[{type:0,value:"ORDER YOUR CARD"}]})},comingSoon:{image:a.virtualAndContis,headingText:e({id:"H+fjlp",defaultMessage:[{type:0,value:"Enhanced virtual cards coming soon"}]}),bodyText:e({id:"bzmFqF",defaultMessage:[{type:0,value:"Kinesis is upgrading card suppliers. Stay tuned for the enhanced functionality of the new and improved virtual cards."}]})},underage:{image:a.verifyId,headingText:e({id:"I2k09K",defaultMessage:[{type:0,value:"Unable to verify your account"}]}),bodyText:e({id:"QtQSuG",defaultMessage:[{type:0,value:"It looks like you are under 18 years old. Unfortunately, we are unable to verify your account."}]}),buttonText:e({id:"PjYk7+",defaultMessage:[{type:0,value:"CONTACT SUPPORT"}]})}}},v=i(p)`
  color: ${({theme:e})=>e.palette.designColors.text.tertiary};
  text-align: center;
  margin: 13px 32px 0 32px;
  white-space: pre-line;
`,M=i("img")`
  width: 100%;
  border-radius: 6px 6px 0 0;
`,T=i(u)`
  white-space: normal;
  flex: 1;
`,w=i(m)`
  text-align: center;
`,C=i("div")`
  padding-top: 16px;
  align-self: center;
`,d=i(b)`
  cursor: pointer;
  padding: 0 4px;
  text-align: center;
  color: ${({theme:e})=>e.palette.designColors.text.subdued};
`,j=i(u)`
  height: 100%;
  border-radius: 6px 6px 0px 0px;
  white-space: nowrap;
`,P=i(f)`
  margin: 32px auto 12px;
`,E=e=>{const{type:o,onButtonClick:r,onExploreLater:c,onDontShowAgain:y}=e,n=h();return t.jsxs(j,{children:[t.jsx(M,{src:x(n[o].image),alt:n[o].headingText}),t.jsxs(T,{children:[t.jsx(w,{id:"onboardingPopUpHeading","data-testid":"onboarding-pop-up-heading",children:n[o].headingText}),t.jsx(v,{children:n[o].bodyText}),r&&t.jsx(P,{"data-testid":"onboarding-pop-up-action-btn",onClick:r,size:"large","data-cy":"onboarding-btn",children:n[o].buttonText}),o===l.welcomeFutureMoney&&t.jsxs(C,{children:[t.jsx(d,{onClick:c,children:t.jsx(s,{id:"C/BPjY",defaultMessage:[{type:0,value:"Explore later"}]})}),t.jsx("span",{children:t.jsx(s,{id:"v8m94Z",defaultMessage:[{type:0,value:"|"}]})}),t.jsx(d,{onClick:y,children:t.jsx(s,{id:"OfQY5F",defaultMessage:[{type:0,value:"Don't show again"}]})})]})]})]})};export{v as B,C as F,w as H,M as I,E as O,T,l as W,d as a,h as u};
