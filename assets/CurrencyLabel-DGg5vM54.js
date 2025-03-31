import{j as t,w as i}from"./index-B1IYvx0M.js";import{C as n}from"./legacy-fonts-BbYsH4nw.js";import{C as s}from"./CurrencyIcon-BSh20PSx.js";import{c as a}from"./short-names-CEnQyANM.js";import{c as l}from"./long-names-G_UIJH0E.js";const c=i("div")`
  display: flex;
  margin-left: 1px;

  & > :not(:last-child) {
    margin-right: 8px;
  }
`,d=i("div")`
  display: flex;
  flex-direction: column;
`,p=i(n)`
  white-space: nowrap;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.designColors.text.tertiary};
`,o=i("span")`
  font-size: 13px;
  line-height: 16px;
  white-space: nowrap;
  text-transform: capitalize;
  font-family: ${({theme:e})=>e.typography.fonts.semiBold};
  color: ${({theme:e})=>e.palette.designColors.text.default};
  @media screen and (max-width: 452px) {
    max-width: 95px;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media screen and (min-width: 600px) and (max-width: ${({theme:e})=>`${e.breakpoints.values.lg}px`}) {
    max-width: 125px;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`,u=e=>{const{currencyCode:r}=e;return t.jsxs(c,{children:[t.jsx(s,{currencyCode:r}),t.jsxs(d,{children:[e.useShortName?t.jsx(o,{children:a[r]||r}):t.jsx(o,{children:l[r]||r}),t.jsx(p,{children:r})]})]})};export{u as C};
