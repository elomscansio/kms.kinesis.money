import{w as j,C as b,x as N,B as M,q as Q,r as a,j as e,R as v,Z as T,t as m,H as D,D as R,v as W}from"./index-B1IYvx0M.js";import{Q as z,T as F,R as K,a as V}from"./SupportText-CNbXLo8d.js";import{I as L}from"./Input-U7WLNE8T.js";import"./PasswordInput-BRrGqd8k.js";const $=j("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  max-width: 360px;
  gap: 24px;
  padding: 16px;

  @media screen and (max-height: 812px) {
    gap: 20px;
  }
`,Z=j(M)`
  color: ${({theme:n})=>n.palette.designColors.borders.critical.default};
`,q=j(b,{shouldForwardProp:N(["$hasError"])})`
  border-radius: 8px;
  display: flex;
  justify-content: center;

  input {
    text-align: center;
    border-radius: 8px;
    box-shadow: ${({$hasError:n,theme:o})=>n&&`0 0 0 1px ${o.palette.designColors.borders.critical.default}`};

    &:focus {
      max-height: 48px;
      box-shadow: 0 0 0 2px ${({theme:n})=>n.palette.designColors.interactive.primary.default};
    }
  }
`,J=j("div")`
  width: 4px;
  height: 4px;
  background-color: ${({theme:n})=>n.palette.designColors.icons.subtle};
  border-radius: 50%;
  align-self: center;
`,E=(n,o)=>i=>{const u=[...i];return u[o]=n,u},A=n=>{const o=Q(),{onSubmit:i,loading:u,setErrorAttempts:d,isSubmitting:g}=n,[l,p]=a.useState(["","","","","",""]),[f,x]=a.useState(!1),c=a.useRef([]),[{isEmpty:C,isValid:S},I]=a.useState({isEmpty:!0,isValid:!1});a.useEffect(()=>{const t=l.join("").length;t>0&&x(!1),I({isEmpty:t===0,isValid:t===6&&!f})},[l,f]);const w=a.useCallback(async()=>{S&&(await i(l.join("")),d&&d(t=>t+1),p(["","","","","",""]),x(!0))},[l,S,i,d]),k=t=>{var s;/^\d+$/.test(t)&&(p(r=>r.map((h,y)=>t[y])),(s=c.current.slice(-1)[0])==null||s.focus())},P=(t,s)=>{var r;if(t.target.value)if(t.target.value.length===6)k(t.target.value);else{const h=t.target.value.slice(-1);/^\d?$/.test(h)&&(p(E(h,s)),s<5&&((r=c.current[s+1])==null||r.focus()))}},B=(t,s)=>{var r,h,y;t.key==="Backspace"||t.key==="Delete"?(t.preventDefault(),p(E("",s)),s>0&&((r=c.current[s-1])==null||r.focus())):s>0&&t.key==="ArrowLeft"?(t.preventDefault(),(h=c.current[s-1])==null||h.focus()):(t.key==="ArrowRight"||t.key===l[s])&&(t.preventDefault(),(y=c.current[s+1])==null||y.focus())},H=(t,s)=>{t.preventDefault();const r=t.clipboardData.getData("text").trim().slice(0,6-s);k(r)};return a.useEffect(()=>{w()},[w]),a.useEffect(()=>{C&&c.current[0]&&c.current[0].focus()},[C]),e.jsxs(b,{gap:"10px",children:[e.jsx(v,{width:"100%",gap:"10px",alignItems:"center",children:l.map((t,s)=>e.jsxs(a.Fragment,{children:[e.jsx(q,{$hasError:f&&!u&&!g,children:e.jsx(L,{type:"number",autoComplete:"one-time-code",inputMode:"numeric",value:t,onInput:r=>P(r,s),onKeyDown:r=>B(r,s),onPaste:r=>H(r,s),inputRef:r=>{c.current[s]=r},sx:{"& .MuiFilledInput-input":{padding:"10px",height:"48px",width:"48px",boxSizing:"border-box"},"& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0},"& input[type=number]":{"-moz-appearance":"textfield"}},autoFocus:s===0})}),s===2&&(u||g)?e.jsx(T,{disableShrink:!0,sx:{color:o.palette.designColors.icons.subdued},size:15,thickness:6}):s===2?e.jsx(J,{}):null]},s))}),f&&!u&&e.jsx(v,{justifyContent:"center",children:e.jsx(Z,{children:e.jsx(m,{id:"vNWZbC",defaultMessage:[{type:0,value:"Enter a valid security code"}]})})})]})},X=n=>{const{onSubmit:o,loading:i}=n;return e.jsxs($,{children:[e.jsxs(b,{gap:"8px",children:[e.jsx(D,{children:e.jsx(m,{id:"HiNpW8",defaultMessage:[{type:0,value:"Enter the security code"}]})}),e.jsx(R,{children:e.jsx(m,{id:"20c7JN",defaultMessage:[{type:0,value:"Enter the code from your authenticator app"}]})})]}),e.jsx(A,{onSubmit:o,loading:i}),e.jsx(z,{}),e.jsx(F,{})]})},Y=n=>{const{onSubmit:o,loading:i,onResend:u,onQrCode:d}=n,[g,l]=a.useState(0),[p,f]=a.useState(!1);return e.jsxs($,{children:[e.jsxs(b,{gap:"8px",children:[e.jsx(D,{children:e.jsx(m,{id:"HiNpW8",defaultMessage:[{type:0,value:"Enter the security code"}]})}),e.jsx(R,{children:e.jsx(m,{id:"la6KHk",defaultMessage:[{type:0,value:"We've just sent the code to your mobile"}]})})]}),e.jsx(A,{onSubmit:o,loading:i,setErrorAttempts:l}),e.jsx(K,{resendText:u??o,setResendClicked:f}),d&&(g>2||p)&&e.jsx(v,{gap:"5px",children:e.jsx(m,{id:"E/AtRU",defaultMessage:[{type:8,value:"font",children:[{type:0,value:"Set up 2FA with"}]},{type:0,value:" "},{type:8,value:"link",children:[{type:0,value:"authenticator app"}]},{type:0,value:" "},{type:8,value:"font",children:[{type:0,value:"instead"}]}],values:{font:x=>e.jsx(M,{subdued:!0,children:x}),link:x=>e.jsx(W,{onClick:d,children:x})}})}),e.jsx(V,{}),e.jsx(F,{})]})};export{$ as F,X as Q,Y as S};
