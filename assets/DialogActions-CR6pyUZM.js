import{as as c,at as p,r as g,ap as u,j as d,w as f,aq as m,ar as D}from"./index-B1IYvx0M.js";function x(s){return c("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const y=s=>{const{classes:t,disableSpacing:o}=s;return D({root:["root",!o&&"spacing"]},x,t)},A=f("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:s})=>!s.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),S=g.forwardRef(function(t,o){const a=u({props:t,name:"MuiDialogActions"}),{className:i,disableSpacing:n=!1,...l}=a,e={...a,disableSpacing:n},r=y(e);return d.jsx(A,{className:m(r.root,i),ownerState:e,ref:o,...l})});export{S as D};
