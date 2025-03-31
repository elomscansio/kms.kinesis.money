import {
  h as O,
  F as E,
  j as s,
  H as V,
  t as g,
  _ as W,
  C as b,
  P as F,
  V as Z,
  v as K,
  K as J,
  r as u,
  u as Q,
  $ as X,
  d as N,
  a0 as $,
  a1 as Y,
  a2 as D,
  a3 as R,
  n as k,
  a4 as T,
  s as ee,
  e as se,
  a5 as te,
  I as U,
  T as ae,
} from "./index-B1IYvx0M.js";
import { G as oe, u as ie, E as z } from "./GoogleSignIn-FrW9XI9u.js";
import { g as ne } from "./helpers-D0lXFcyB.js";
import { b as ue } from "./SupportText-CNbXLo8d.js";
import { u as L } from "./index.esm-B2HhHynd.js";
import "./shared-kyc.form-DU9uJhtw.js";
import {
  S as de,
  a as re,
  b as me,
  P as ce,
} from "./PasswordInput-BRrGqd8k.js";
import { I as P } from "./Input-U7WLNE8T.js";
import { A as le } from "./Alert-D9otgbzb.js";
import { D as ge } from "./Divider-DtXA8bzM.js";
import { g as pe } from "./react-google-recaptcha-v3.esm-DONQIyn8.js";
import { V as he } from "./Verification-D8KD8xPB.js";
import "./RateLimitModal-ebsrfP5_.js";
import "./index-Bo_9n-PG.js";
import "./index-muQS-9Gf.js";
import "./index-BBKt8-YL.js";
import "./index-C7glG_Ry.js";
import "./useSlot-DZH0Y2jJ.js";
import "./Menu-CbwN-UdZ.js";
import "./DialogContent-A833hUPt.js";
import "./Action-Chaeft7b.js";
import "./DialogActions-CR6pyUZM.js";
import "./Names-CaXmBvXg.js";
import "./index-DWKsSpgP.js";
import "./TextField-DL0nOe5P.js";
import "./useFormControl-B5X7CYHM.js";
import "./IconButton-ClDlR7xP.js";
import "./dividerClasses-CKrR6pKE.js";
const fe = (p) => {
    var o;
    const { email: i, onNext: h, signUpError: m } = p,
      f = O(),
      { formatMessage: n } = E(),
      {
        register: v,
        handleSubmit: C,
        formState: t,
        setValue: c,
      } = L({ mode: "onChange", resolver: de(), defaultValues: { email: i } }),
      { isValid: a, errors: d } = t;
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(V, {
          children: s.jsx(g, {
            id: "SeO7GZ",
            defaultMessage: [{ type: 0, value: "Create your account" }],
          }),
        }),
        s.jsx(P, {
          label: n({
            id: "hJZwTS",
            defaultMessage: [{ type: 0, value: "Email address" }],
          }),
          autoComplete: "email",
          ...v("email"),
          error:
            (o = d == null ? void 0 : d.email) == null ? void 0 : o.message,
          onChange: (r) => c("email", r.target.value, { shouldValidate: !0 }),
          autoFocus: !0,
          fullWidth: !0,
        }),
        m &&
          s.jsxs(le, {
            icon: !1,
            severity: "error",
            children: [
              m,
              m.includes("contact support") &&
                s.jsx(W, {
                  target: "_blank",
                  rel: "noopener",
                  href: "https://kinesis.money/about-us/contact-us/",
                  children: s.jsx(g, {
                    id: "hniz8Z",
                    defaultMessage: [{ type: 0, value: "here" }],
                  }),
                }),
            ],
          }),
        s.jsxs(b, {
          gap: "12px",
          width: "100%",
          children: [
            s.jsx(F, {
              type: "button",
              disabled: !a,
              size: "large",
              onClick: C(h),
              fullWidth: !0,
              children: s.jsx(g, {
                id: "l6yCDg",
                defaultMessage: [{ type: 0, value: "Continue with email" }],
              }),
            }),
            s.jsx(ge, {
              textAlign: "center",
              children: s.jsx(Z, {
                subdued: !0,
                children: s.jsx(g, {
                  id: "Ntjkqd",
                  defaultMessage: [{ type: 0, value: "or" }],
                }),
              }),
            }),
            s.jsx(oe, {}),
          ],
        }),
        s.jsx(b, {
          alignItems: "center",
          children: s.jsx(K, {
            onClick: () => void f(J.login.path),
            children: s.jsx(g, {
              id: "uCk8r+",
              defaultMessage: [{ type: 0, value: "Already have an account?" }],
            }),
          }),
        }),
      ],
    });
  },
  xe = (p) => {
    var d, o;
    const { onNext: i, firstName: h, lastName: m } = p,
      { formatMessage: f } = E(),
      {
        register: n,
        handleSubmit: v,
        formState: C,
        setValue: t,
      } = L({
        mode: "onChange",
        resolver: re(),
        defaultValues: { firstName: h, lastName: m },
      }),
      { isValid: c, errors: a } = C;
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(V, {
          children: s.jsx(g, {
            id: "DX9QSt",
            defaultMessage: [{ type: 0, value: "Enter your name" }],
          }),
        }),
        s.jsxs(b, {
          gap: "16px",
          width: "100%",
          children: [
            s.jsx(P, {
              label: f({
                id: "pONqz8",
                defaultMessage: [{ type: 0, value: "First name" }],
              }),
              autoComplete: "given-name",
              slotProps: { htmlInput: { maxLength: 40 } },
              ...n("firstName"),
              error:
                (d = a == null ? void 0 : a.firstName) == null
                  ? void 0
                  : d.message,
              onChange: (r) =>
                t("firstName", r.target.value, { shouldValidate: !0 }),
              autoFocus: !0,
            }),
            s.jsx(P, {
              label: f({
                id: "txUL0F",
                defaultMessage: [{ type: 0, value: "Last name" }],
              }),
              autoComplete: "family-name",
              slotProps: { htmlInput: { maxLength: 80 } },
              ...n("lastName"),
              error:
                (o = a == null ? void 0 : a.lastName) == null
                  ? void 0
                  : o.message,
              onChange: (r) =>
                t("lastName", r.target.value, { shouldValidate: !0 }),
            }),
          ],
        }),
        s.jsx(b, {
          width: "100%",
          children: s.jsx(F, {
            fullWidth: !0,
            type: "button",
            disabled: !c,
            size: "medium",
            onClick: v(i),
            children: s.jsx(g, {
              id: "6qPIIF",
              defaultMessage: [{ type: 0, value: "Create your password" }],
            }),
          }),
        }),
      ],
    });
  },
  je = (p) => {
    var S;
    const { onNext: i } = p,
      [h, m] = u.useState(!1),
      { formatMessage: f } = E(),
      { executeRecaptcha: n } = pe(),
      {
        register: v,
        handleSubmit: C,
        formState: t,
        setValue: c,
        watch: a,
      } = L({ mode: "onChange", resolver: me() }),
      { isValid: d, errors: o } = t,
      r = a("password"),
      w = u.useCallback(
        async (x) => {
          if (!n) return;
          m(!0);
          const y = await n("signUp");
          i({ ...x, googleCaptchaToken: y });
        },
        [n, i]
      );
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(V, {
          children: s.jsx(g, {
            id: "6qPIIF",
            defaultMessage: [{ type: 0, value: "Create your password" }],
          }),
        }),
        s.jsx(ce, {
          label: f({
            id: "5sg7KC",
            defaultMessage: [{ type: 0, value: "Password" }],
          }),
          autoComplete: "new-password",
          ...v("password"),
          onChange: (x) =>
            c("password", x.target.value, { shouldValidate: !0 }),
          password: r,
          error:
            (S = o == null ? void 0 : o.password) == null ? void 0 : S.message,
          autoFocus: !0,
        }),
        s.jsx(b, {
          width: "100%",
          children: s.jsx(F, {
            fullWidth: !0,
            type: "button",
            disabled: !d || !!o.password || !n || h,
            loading: !n || h,
            size: "medium",
            onClick: C(w),
            children: s.jsx(g, {
              id: "SeO7GZ",
              defaultMessage: [{ type: 0, value: "Create your account" }],
            }),
          }),
        }),
      ],
    });
  },
  Je = () => {
    var A;
    const [p, i] = u.useState(0),
      [h, m] = u.useState(void 0),
      [f, n] = u.useState(void 0),
      [v, C] = u.useState(void 0),
      [t, c] = u.useState({}),
      a = Q(),
      [d, { isSuccess: o, isError: r, error: w }] = X(),
      [S, x, y] = ie(),
      B = N($),
      G = N(Y),
      q = N(D),
      e = N(R),
      I = e == null ? void 0 : e.offerId,
      M = e == null ? void 0 : e.partnerPlatformId,
      _ = u.useMemo(
        () => ({
          sub1: e == null ? void 0 : e.sub1,
          sub2: e == null ? void 0 : e.sub2,
          sub3: e == null ? void 0 : e.sub3,
          sub4: e == null ? void 0 : e.sub4,
          sub5: e == null ? void 0 : e.sub5,
          source_id: e == null ? void 0 : e.sourceId,
        }),
        [
          e == null ? void 0 : e.sourceId,
          e == null ? void 0 : e.sub1,
          e == null ? void 0 : e.sub2,
          e == null ? void 0 : e.sub3,
          e == null ? void 0 : e.sub4,
          e == null ? void 0 : e.sub5,
        ]
      );
    return (
      u.useEffect(() => {
        {
          k.ga((H) => {
            m(H.get("clientId") ?? "noconsent");
          });
          const l = T.get("cstmsrc") ?? "no_source_set";
          n(l);
          const j = T.get("cstm_landing") ?? "no_landing_set";
          C(j);
        }
      }, []),
      u.useEffect(() => {
        o ? (a(ee(void 0)), i(3)) : r && i(0);
      }, [o, r, w, a]),
      u.useEffect(() => {
        (S ?? x ?? y) &&
          (c({
            email: S ?? void 0,
            firstName: x ?? void 0,
            lastName: y ?? void 0,
          }),
          S && i(x && y ? 2 : 1));
      }, [a, S, x, y]),
      u.useEffect(() => {
        I &&
          M &&
          (z.configure({ tracking_domain: se.everflowTrackingDomain }),
          z.click({ offer_id: I, affiliate_id: M, ..._ }).then((l) => {
            a(te({ clickTransactionId: l }));
          }));
      }, [a, _, M, I]),
      s.jsxs(s.Fragment, {
        children: [
          {
            0: s.jsx(fe, {
              email: t == null ? void 0 : t.email,
              onNext: (l) => {
                c({ ...t, ...l }), i(1);
              },
              signUpError: ne(w),
            }),
            1: s.jsx(xe, {
              firstName: t == null ? void 0 : t.firstName,
              lastName: t == null ? void 0 : t.lastName,
              onNext: (l) => {
                c({ ...t, ...l }), i(2);
              },
            }),
            2: s.jsx(je, {
              onNext: async (l) => {
                const j = await d({
                  ...t,
                  email: t.email.toLowerCase(),
                  ...l,
                  gaClientID: h,
                  referrerHin: B,
                  generateUserToken: !0,
                  pardotCampaignId: G,
                  utmData: q,
                  partnerReferralDetails: e,
                  customSource: f,
                  customLanding: v,
                }).unwrap();
                k.gtag("event", "signup"),
                  k.gtag("set", "user_properties", {
                    account_id: j == null ? void 0 : j.id,
                    kyc_status: U.registered,
                  }),
                  ae.dataLayer({
                    dataLayer: {
                      event: "Signup",
                      status: U.registered,
                      accountId: j == null ? void 0 : j.id,
                      hasDeposited: !1,
                    },
                  });
              },
            }),
            3: s.jsx(he, {
              email:
                (A = t == null ? void 0 : t.email) == null
                  ? void 0
                  : A.toLowerCase(),
            }),
          }[p],
          p === 0 && s.jsx(ue, {}),
        ],
      })
    );
  };
export { Je as default };
