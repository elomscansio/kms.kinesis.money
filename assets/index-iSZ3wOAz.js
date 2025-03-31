import {
  F as L,
  h as A,
  r as o,
  d as v,
  U as P,
  j as e,
  C as p,
  H as E,
  t as i,
  B as V,
  v as k,
  P as B,
  V as U,
  W as R,
  X as T,
  u as q,
  y as z,
  M as D,
  Y as O,
  z as W,
} from "./index-B1IYvx0M.js";
import { u as $, G, a as H } from "./GoogleSignIn-FrW9XI9u.js";
import { F as X, R as K } from "./RateLimitModal-ebsrfP5_.js";
import { c as Q, a as b, o as _, u as J } from "./index.esm-B2HhHynd.js";
import { N as Y, a as Z, b as F } from "./Names-CaXmBvXg.js";
import "./shared-kyc.form-DU9uJhtw.js";
import { I } from "./Input-U7WLNE8T.js";
import { T as ee } from "./SupportText-CNbXLo8d.js";
import { F as se, Q as ae, S as te } from "./SmsCodeMfa-DpoDzOL_.js";
import { A as ie } from "./Alert-D9otgbzb.js";
import { D as oe } from "./Divider-DtXA8bzM.js";
import { r as re } from "./visitHistory-VyF4gOMN.js";
import "./react-google-recaptcha-v3.esm-DONQIyn8.js";
import "./helpers-D0lXFcyB.js";
import "./index-Bo_9n-PG.js";
import "./index-muQS-9Gf.js";
import "./index-BBKt8-YL.js";
import "./index-C7glG_Ry.js";
import "./useSlot-DZH0Y2jJ.js";
import "./Menu-CbwN-UdZ.js";
import "./DialogContent-A833hUPt.js";
import "./Action-Chaeft7b.js";
import "./DialogActions-CR6pyUZM.js";
import "./index-DWKsSpgP.js";
import "./TextField-DL0nOe5P.js";
import "./useFormControl-B5X7CYHM.js";
import "./PasswordInput-BRrGqd8k.js";
import "./IconButton-ClDlR7xP.js";
import "./dividerClasses-CKrR6pKE.js";
const ne = () => {
    const { formatMessage: a } = L(),
      g = Q().shape({
        email: b()
          .email(
            a({
              id: "45Igqv",
              defaultMessage: [
                { type: 0, value: "Must be a valid email address" },
              ],
            })
          )
          .required(
            a({
              id: "cU/aSG",
              defaultMessage: [{ type: 0, value: "Email is required" }],
            })
          ),
        password: b().required(
          a({
            id: "uiFoFm",
            defaultMessage: [{ type: 0, value: "Password is required" }],
          })
        ),
      });
    return _(g);
  },
  le = (a) => {
    var C, S;
    const { onNext: g, loading: x, error: l } = a,
      f = A(),
      { formatMessage: t } = L(),
      [r, d] = o.useState(!1),
      u = v(P);
    $();
    const {
        register: m,
        handleSubmit: w,
        formState: y,
        setValue: c,
        watch: h,
      } = J({ mode: "onChange", resolver: ne() }),
      { isValid: s, errors: n } = y,
      { email: N } = n,
      j = h("email");
    return e.jsxs(se, {
      onSubmit: w(g),
      children: [
        e.jsxs(p, {
          gap: "8px",
          width: "100%",
          alignItems: "center",
          children: [
            e.jsx(E, {
              children: u
                ? e.jsx(i, {
                    id: "n8UuNg",
                    defaultMessage: [
                      { type: 0, value: "We've verified your email" },
                    ],
                  })
                : e.jsx(i, {
                    id: "bTjwXj",
                    defaultMessage: [{ type: 0, value: "Welcome Back" }],
                  }),
            }),
            e.jsx(V, {
              subdued: !0,
              children: u
                ? e.jsx(i, {
                    id: "toSg39",
                    defaultMessage: [
                      { type: 0, value: "Sign in to your Kinesis account" },
                    ],
                  })
                : e.jsx(i, {
                    id: "tncgXz",
                    defaultMessage: [
                      { type: 0, value: "Log in to your account" },
                    ],
                  }),
            }),
          ],
        }),
        e.jsxs(p, {
          gap: "16px",
          width: "100%",
          children: [
            e.jsx(p, {
              children: e.jsx(I, {
                label: t({
                  id: "hJZwTS",
                  defaultMessage: [{ type: 0, value: "Email address" }],
                }),
                autoComplete: "email",
                ...m("email"),
                error:
                  (C = n == null ? void 0 : n.email) == null
                    ? void 0
                    : C.message,
                onChange: (M) =>
                  c("email", M.target.value, { shouldValidate: !0 }),
                autoFocus: !0,
              }),
            }),
            e.jsx(p, {
              children: e.jsx(I, {
                label: t({
                  id: "5sg7KC",
                  defaultMessage: [{ type: 0, value: "Password" }],
                }),
                type: r ? "text" : "password",
                autoComplete: "current-password",
                ...m("password"),
                error:
                  (S = n == null ? void 0 : n.password) == null
                    ? void 0
                    : S.message,
                onChange: (M) =>
                  c("password", M.target.value, { shouldValidate: !0 }),
                right: e.jsx(Y, {
                  name: r ? F.eyeClosedPassword : F.eyePassword,
                  iconSize: Z.twenty,
                  onClick: () => d(!r),
                }),
              }),
            }),
            l &&
              ![
                "MFA Required",
                "The token you have provided is invalid",
                "Please verify your email to sign in",
              ].includes(l) &&
              e.jsx(ie, { icon: !1, severity: "error", children: l }),
          ],
        }),
        e.jsx(p, {
          alignItems: "center",
          children: e.jsx(k, {
            onClick: async () =>
              await f(
                `/reset-password${
                  N === void 0 && (j == null ? void 0 : j.length) > 0
                    ? `?email=${encodeURIComponent(j)}`
                    : ""
                }`
              ),
            children: e.jsx(i, {
              id: "cyRU1N",
              defaultMessage: [{ type: 0, value: "Forgot your password?" }],
            }),
          }),
        }),
        e.jsxs(p, {
          gap: "12px",
          width: "100%",
          children: [
            e.jsx(B, {
              size: "large",
              fullWidth: !0,
              type: "submit",
              disabled: !s || x,
              loading: x,
              children: u
                ? e.jsx(i, {
                    id: "acrOoz",
                    defaultMessage: [{ type: 0, value: "Continue" }],
                  })
                : e.jsx(i, {
                    id: "l6yCDg",
                    defaultMessage: [{ type: 0, value: "Continue with email" }],
                  }),
            }),
            !u &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(oe, {
                    textAlign: "center",
                    children: e.jsx(U, {
                      subdued: !0,
                      children: e.jsx(i, {
                        id: "Ntjkqd",
                        defaultMessage: [{ type: 0, value: "or" }],
                      }),
                    }),
                  }),
                  e.jsx(G, {}),
                ],
              }),
          ],
        }),
        e.jsx(ee, {}),
      ],
    });
  },
  Te = () => {
    const [a, g] = o.useState(""),
      [x, l] = o.useState(0),
      f = v(R),
      t = v(T),
      { login: r, isLoading: d, message: u } = H(),
      m = q(),
      [w, y] = o.useState(!1),
      c = v(z),
      h = o.useCallback(() => !!c && Date.now() - c < X, [c]);
    return (
      o.useEffect(() => {
        re("skip_mobile", f);
      }, [f]),
      o.useEffect(() => {
        t != null && t.type ? l(t.type === D.sms ? 1 : 2) : l(0);
      }, [m, t, x, a]),
      O(
        o.useCallback(() => {
          m(W());
        }, [m])
      ),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(K, { open: w, setOpen: y, active: h() }),
          {
            0: e.jsx(le, {
              error: u,
              loading: d,
              onNext: async (s) => {
                if (!d) {
                  if (h()) {
                    y(!0);
                    return;
                  }
                  g((s == null ? void 0 : s.password) ?? ""), await r(s);
                }
              },
            }),
            1: e.jsx(te, {
              loading: d,
              onSubmit: async (s) => {
                await r({ password: a, mfaToken: s });
              },
            }),
            2: e.jsx(ae, {
              loading: d,
              onSubmit: async (s) => {
                await r({ password: a, mfaToken: s });
              },
            }),
          }[x],
        ],
      })
    );
  };
export { Te as default };
