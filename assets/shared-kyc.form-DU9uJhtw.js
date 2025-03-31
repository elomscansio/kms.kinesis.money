import{r as x,F as y,j as r,e9 as f,w as o,x as b,q as N,ag as n,ea as j,eb as k}from"./index-B1IYvx0M.js";import{N as P,a as S,b as R}from"./Names-CaXmBvXg.js";import{c as C,d as g,a as l,f as F,o as $}from"./index.esm-B2HhHynd.js";var L=(e=>(e[e.DEFAULT=0]="DEFAULT",e[e.VERY_WEAK=1]="VERY_WEAK",e[e.WEAK=2]="WEAK",e[e.AVERAGE=3]="AVERAGE",e[e.STRONG=4]="STRONG",e[e.VERY_STRONG=5]="VERY_STRONG",e))(L||{});const c={default:f.text.subtle,danger:f.interactive.critical.default,warning:f.interactive.warning.default,success:f.interactive.success.default},O=()=>{const{formatMessage:e}=y();return{0:{text:"",color:c.default},1:{text:e({id:"ozCHsd",defaultMessage:[{type:0,value:"Too Weak"}]}),color:c.danger},2:{text:e({id:"fx99AL",defaultMessage:[{type:0,value:"Weak"}]}),color:c.danger},3:{text:e({id:"FnRTEV",defaultMessage:[{type:0,value:"Average"}]}),color:c.warning},4:{text:e({id:"JENgfj",defaultMessage:[{type:0,value:"Stong"}]}),color:c.warning},5:{text:e({id:"dxgYKK",defaultMessage:[{type:0,value:"Very Strong"}]}),color:c.success}}},D=o("div")`
  display: flex;
  flex-direction: column;
`,A=o("div")`
  display: flex;
  flex-direction: row;
`,W=o(D)`
  gap: 8px;
  max-width: 300px;
  padding: 10px 0 15px 0;
`,q=o(A)`
  justify-content: space-between;
`,G=o(A)`
  min-width: 220px;
  justify-content: space-between;
`,V=o(D,{shouldForwardProp:b(["color"])})`
  color: ${({color:e})=>e};
  font-family: ${({theme:e})=>e.typography.fonts.medium};
  font-size: 12px;
  line-height: 16px;
`,U=o("div")`
  display: flex;
  flex-direction: row;

  gap: 10px;
  font-size: 13px;
  align-items: center;
  color: ${({theme:e})=>e.palette.designColors.text.default};
  font-family: ${({theme:e})=>e.typography.fonts.regular};
`,v=o("div")`
  width: 64px;
  height: 6px;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: 2px;
  padding-top: 3px;
`,z=o(v)`
  background-image: linear-gradient(
    90deg,
    ${({color:e})=>e} 100%,
    ${({theme:e})=>e.palette.designColors.surface.neutral.selected} 100%,
    ${({theme:e})=>e.palette.designColors.surface.neutral.selected} 100%
  );
`,B=o(v)`
  background-image: linear-gradient(
    90deg,
    ${({theme:e,status:s,color:a})=>s===1||s===2?e.palette.designColors.surface.neutral.selected:a}
      100%,
    ${({theme:e})=>e.palette.designColors.surface.neutral.selected} 100%,
    ${({theme:e})=>e.palette.designColors.surface.neutral.selected} 100%
  );
`,K=o(v)`
  background-image: linear-gradient(
    90deg,
    ${({theme:e,status:s,color:a})=>s===5?a:e.palette.designColors.surface.neutral.selected} 100%,
    ${({theme:e})=>e.palette.designColors.surface.neutral.selected} 100%,
    ${({theme:e})=>e.palette.designColors.surface.neutral.selected} 100%
  );
`,h=e=>{const{checked:s,children:a,className:d,dataCy:i}=e,t=N();return r.jsxs(U,{className:d,children:[r.jsx(P,{name:R.tick,size:S.twentyFour,fill:s?t.palette.designColors.icons.success:t.palette.designColors.greyscale.black[10],"data-cy":`password-err-icon-${i}`}),r.jsx("span",{children:a})]})},_=e=>{const{password:s}=e,[a,d]=x.useState(0),{formatMessage:i}=y(),t=O(),[p,Y]=x.useState({checkDefaultCaseLength:!1,checkLength:!1,checkNumber:!1,checkUpper:!1,checkSpecial:!1});return x.useEffect(()=>{const m={checkDefaultCaseLength:s.length>=1,checkLength:s.length>=8,checkNumber:/^(?=.*[0-9])/.test(s),checkUpper:/^(?=.*[A-Z])/.test(s),checkSpecial:/[^A-Za-z0-9]/.test(s)};let M=0;for(const E in m)m[E]&&M++;d(M),Y({...m})},[s]),r.jsxs(W,{children:[r.jsxs(q,{children:[r.jsxs(G,{children:[r.jsx(z,{color:t[a].color}),r.jsx(B,{color:t[a].color,status:a}),r.jsx(K,{color:t[a].color,status:a})]}),r.jsx(V,{color:t[a].color,"data-cy":"pass-status-view",children:t[a].text})]}),r.jsx(h,{checked:p.checkLength,dataCy:"eightchars",children:i({id:"YwMziN",defaultMessage:[{type:0,value:"At least 8 characters"}]})}),r.jsx(h,{checked:p.checkUpper,dataCy:"oneupper",children:i({id:"rmhLgG",defaultMessage:[{type:0,value:"At least 1 uppercase"}]})}),r.jsx(h,{checked:p.checkNumber,dataCy:"onenumber",children:i({id:"UE9SJZ",defaultMessage:[{type:0,value:"At least 1 number"}]})}),r.jsx(h,{checked:p.checkSpecial,dataCy:"onespecial",children:i({id:"3rClUx",defaultMessage:[{type:0,value:"At least 1 special character (e.g. !, @, #, $)"}]})})]})};var u=(e=>(e.PDF="application/pdf",e.JPEG="image/jpeg",e.PNG="image/png",e.JPG="image/jpg",e.TIFF="image/tiff",e.MOV="video/quicktime",e.MP4="video/mp4",e.WAV="audio/wav",e.DOC="application/msword",e.DOCX="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.XLS="application/vnd.ms-excel",e.XLSX="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.CSV="text/csv",e))(u||{});n.extend(j);const w=1048576*10,X=(e=!1)=>{const s=[u.PDF,u.JPEG,u.PNG,u.JPG],{formatMessage:a}=y(),d=C().shape({roleType:e?g().oneOf(Object.values(k)).optional():g().oneOf(Object.values(k)).required(a({id:"4OsioW",defaultMessage:[{type:0,value:"Please check role"}]})),firstName:l().required(a({id:"Nur61h",defaultMessage:[{type:0,value:"Please enter First Name"}]})).max(40,a({id:"/9Rr0U",defaultMessage:[{type:0,value:"You have past the maximum character limit"}]})),middleName:l().optional().max(40,a({id:"/9Rr0U",defaultMessage:[{type:0,value:"You have past the maximum character limit"}]})),lastName:l().required(a({id:"kE/6CK",defaultMessage:[{type:0,value:"Please enter Last Name"}]})).max(40,a({id:"/9Rr0U",defaultMessage:[{type:0,value:"You have past the maximum character limit"}]})),areaCode:l().required(a({id:"ukqW+W",defaultMessage:[{type:0,value:"Please enter Area Code"}]})),phoneNumber:l().required(a({id:"UHu1T/",defaultMessage:[{type:0,value:"Phone number is required"}]})),dateOfBirth:l().required(a({id:"SgZoQd",defaultMessage:[{type:0,value:"Please enter Date of Birth"}]})).test("validDateCheck",a({id:"6DCLcI",defaultMessage:[{type:0,value:"Please enter a valid date"}]}),t=>!!t&&n(t,"DD/MM/YYYY",!0).isValid()).test("dobCheck18",a({id:"aPrHhB",defaultMessage:[{type:0,value:"You must be over the age of 18"}]}),t=>!!t&&n(t,"DD/MM/YYYY",!0).isBefore(n().subtract(18,"years"))).test("dobCheckAfter",a({id:"yydWcf",defaultMessage:[{type:0,value:"Date of birth is outside range"}]}),t=>!!t&&n(t,"DD/MM/YYYY",!0).isAfter("1900-01-01")).test("formatCheck",a({id:"xyArGy",defaultMessage:[{type:0,value:"Please enter in the format DD/MM/YYYY"}]}),t=>!!t&&(t.length===10||t.length<=6)),photoId:g().test("atLeastOne",a({id:"Ac4uWR",defaultMessage:[{type:0,value:"Please enter PhotoID"}]}),t=>!!t).test("fileType",a({id:"GQhR2F",defaultMessage:[{type:0,value:"Unsupported File Format"}]}),t=>typeof t=="string"||s.includes((t==null?void 0:t.type)||"")).test("fileSize",a({id:"/DDSVM",defaultMessage:[{type:0,value:"The file is too large. Allowed maximum size is 10MB"}]}),t=>t?typeof t=="string"||t.size<=w:!1).required(a({id:"OTU9KJ",defaultMessage:[{type:0,value:"Photo id is required"}]})),proofOfAddress:g().test("atLeastOne",a({id:"LuWhke",defaultMessage:[{type:0,value:"Please enter Proof of Address"}]}),t=>!!t).test("fileType",a({id:"GQhR2F",defaultMessage:[{type:0,value:"Unsupported File Format"}]}),t=>typeof t=="string"||s.includes((t==null?void 0:t.type)||"")).test("fileSize",a({id:"/DDSVM",defaultMessage:[{type:0,value:"The file is too large. Allowed maximum size is 10MB"}]}),t=>t?typeof t=="string"||t.size<=w:!1).required(a({id:"c4Fo6n",defaultMessage:[{type:0,value:"Address proof is required"}]}))}),i=C().shape({entityDetails:F().of(d).required(a({id:"UYEXeL",defaultMessage:[{type:0,value:"KYC member details required"}]}))});return $(i)};export{X as K,u as M,L as P,_ as a};
