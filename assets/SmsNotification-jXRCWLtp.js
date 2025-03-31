import{w as c}from"./index-B1IYvx0M.js";const o=t=>{if(!t||t.length<5)return null;const i=t.substring(0,4);t=t==null?void 0:t.substring(4,t.length);const s=t==null?void 0:t.replace(/.(?=.{3})/g,"*"),a=s==null?void 0:s.match(/.{1,3}/g);return a&&i+a.join(" ")},g=t=>c(t)`
  justify-content: center;
  align-items: center;
  margin: 24px auto 0 auto;
  height: 56px;
  width: 300px;
  font-family: ${({theme:i})=>i.typography.fonts.bold};
  font-size: 12px;
  line-height: 16px;
  border: 1px solid ${({theme:i,success:s})=>i.palette.designColors.borders[s?"success":"critical"].default};
  background-color: ${({success:i})=>i?"rgba(92, 184, 92, 0.1)":""};
  color: ${({theme:i,success:s})=>s?"":i.palette.designColors.text.critical};
  border-radius: 4px;
`;export{g as S,o as m};
