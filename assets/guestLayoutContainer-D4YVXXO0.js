import {
  u as i,
  a as p,
  r as m,
  s as n,
  j as t,
  G as c,
  e as u,
  b as d,
  O as l,
} from "./index-B1IYvx0M.js";
import { h as g } from "./react-google-recaptcha-v3.esm-DONQIyn8.js";
import { u as h, T as x } from "./useGaTitle-Cd3oRIF0.js";
import { G as f } from "./index-CaWJK1Jr.js";
import "./useRoute-R5W9bIdF.js";
import "./capitalize-Crm3kySE.js";
import "./toString-BcLWPS8a.js";
import "./isObjectLike-BR2ybR99.js";
import "./isArray-Dxzbedgu.js";
import "./isSymbol-CPa7d4e7.js";
import "./upperFirst-DZHx3_7l.js";
import "./_baseSlice-F8doVSIJ.js";
import "./Names-CaXmBvXg.js";
import "./index-DWKsSpgP.js";
const k = () => {
  const r = i(),
    [e, s] = p();
  return (
    h(),
    m.useEffect(() => {
      const a = e.get("pardotCampaignId");
      if (a) localStorage.setItem("pardot-campaign-id", a), r(n(a));
      else {
        const o = localStorage.getItem("pardot-campaign-id");
        o && s(o);
      }
    }, [r, e, s]),
    t.jsxs(t.Fragment, {
      children: [
        t.jsx(x, {}),
        t.jsxs(c, {
          children: [
            t.jsx(f, {}),/* 
            t.jsx(g, {
              reCaptchaKey: u.googleCaptchaKey,
              useEnterprise: !0,
              children: t.jsx(d, { children: t.jsx(l, {}) }),
            }), */
          ],
        }),
      ],
    })
  );
};
export { k as default };
