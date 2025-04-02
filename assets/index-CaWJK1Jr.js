import {
  h,
  c as j,
  r as p,
  z as m,
  K as t,
  dn as y,
  j as e,
  w as g,
  R as r,
  t as a,
  x as k,
  S as w,
} from "./index-B1IYvx0M.js";
import { c as C, a as u, b as f } from "./Names-CaXmBvXg.js";
const b = g(r, { shouldForwardProp: k(["isGuestExchange"]) })(
    ({ theme: s, isGuestExchange: n }) => ({
      width: "100%",
      padding: n ? "10px 18px" : "28px 80px",
      gap: "40px",
      justifyContent: "space-between",
      backgroundColor: s.palette.designColors.surface.default,
      [s.breakpoints.down("sm")]: { padding: "16px" },
    })
  ),
  o = g(w)`
  border-radius: 24px;
  background: ${({ theme: s }) =>
    s.palette.designColors.interactive.secondary.default};
`,
  S = (s) => {
    const { isGuest: n } = s,
      i = h(),
      d = j(),
      l = p.useCallback(async () => {
        d(m())/* , await i(t.login.path) */;
      }, [d, i]),
      c = p.useCallback(async () => {
        /* await i(t.signUp.path); */
      }, [i]),
      x = y([
        {
          path: t.exchange.path,
          element: e.jsxs(e.Fragment, {
            children: [
              e.jsx(o, {
                size: "large",
                onClick: c,
                children: e.jsx(a, {
                  id: "8HJxXG",
                  defaultMessage: [{ type: 0, value: "Sign up" }],
                }),
              }),
              e.jsx(o, {
                size: "large",
                onClick: l,
                children: e.jsx(a, {
                  id: "odXlk8",
                  defaultMessage: [{ type: 0, value: "Log in" }],
                }),
              }),
            ],
          }),
        },
        {
          path: t.login.path,
          element: e.jsx(o, {
            size: "large",
            onClick: c,
            children: e.jsx(a, {
              id: "8HJxXG",
              defaultMessage: [{ type: 0, value: "Sign up" }],
            }),
          }),
        },
        {
          path: t.mobileNumberRegistration.path,
          element: e.jsx(o, {
            size: "large",
            onClick: l,
            children: e.jsx(a, {
              id: "PlBReU",
              defaultMessage: [{ type: 0, value: "Log out" }],
            }),
          }),
        },
      ]);
    return e.jsxs(b, {
      isGuestExchange: !!n,
      children: [
        e.jsx(r, {
          children: e.jsx(C, {
            name: f.KinesisLogoWithText,
            height: u.thirtySix,
            width: u.oneForty,
          }),
        }),
        e.jsx(r, {
          children:[/* 
            x ??
            e.jsx(o, {
              size: "large",
              onClick: l,
              children: e.jsx(a, {
                id: "odXlk8",
                defaultMessage: [{ type: 0, value: "Log in" }],
              }),
            }), */]
        }),
      ],
    });
  };
export { S as G };
