import {
  r as n,
  b1 as N,
  d as Q,
  fn as V,
  F as Y,
  j as e,
  C as b,
  R as u,
  B as x,
  t as i,
  w,
  S as G,
  P as $,
  ah as U,
  x as D,
} from "./index-B1IYvx0M.js";
import { a as I, b as Z, N as X } from "./Names-CaXmBvXg.js";
import { j as _, n as ee, N as te, h as re } from "./order-source-yjVi4RrL.js";
import { c as oe, a as ae, b as ie, T as se } from "./Chart--asC7R1O.js";
import { s as T, f as R } from "./currencyFormatter-DqHkUfNj.js";
import "./Input-U7WLNE8T.js";
import "./PasswordInput-BRrGqd8k.js";
import { s as ne } from "./SegmentedTab-Bx0ApLVn.js";
import { g as le } from "./getCurrencySymbol-U33HH9zA.js";
import { O as pe } from "./order-direction-B5kfqJoW.js";
import { a as c } from "./chart-VlffLmI0.js";
import { c as ue } from "./capitalize-Crm3kySE.js";
import { i as ce } from "./TextField-DL0nOe5P.js";
import { T as de, a as me } from "./Tabs-nCopnh2s.js";
import { A as ge } from "./Alert-D9otgbzb.js";
import "./index-DWKsSpgP.js";
import "./react-number-format.es-D6j4F3wj.js";
import "./index.esm-B2HhHynd.js";
import "./index-CVGWP4XK.js";
import "./index-DMBgV4GW.js";
import "./CurrencyIcon-BSh20PSx.js";
import "./fiat-currencies-4YJiRIqJ.js";
import "./order-type-BEH08Hfo.js";
import "./helpers-BxXgrS-G.js";
import "./helpers-D0lXFcyB.js";
import "./useRequireStatus-C5948B1u.js";
import "./index-DcvGW77o.js";
import "./executed-orders.listener-GkgxCqGH.js";
import "./depth.listener-Bb9oU3qt.js";
import "./socket-client-ClPHFSdE.js";
import "./index-DQUs1ZHf.js";
import "./index-BdZiPhrX.js";
import "./index-DamApG0r.js";
import "./index-DeSxTRGL.js";
import "./Skeleton-D3zW9zfH.js";
import "./index-Bo_9n-PG.js";
import "./PaybisButton-CLNx20jt.js";
import "./OnBoardingPopUp-CbaltDgU.js";
import "./legacy-fonts-BbYsH4nw.js";
import "./DropdownChipBase-Tvm1Fi1i.js";
import "./Chip-BmP1UBlr.js";
import "./useSlot-DZH0Y2jJ.js";
import "./usePrivacyMode-sFMhOLJ_.js";
import "./short-names-CEnQyANM.js";
import "./Collapse-UbjukSi0.js";
import "./Menu-CbwN-UdZ.js";
import "./index-muQS-9Gf.js";
import "./index-BBKt8-YL.js";
import "./index-C7glG_Ry.js";
import "./DialogContent-A833hUPt.js";
import "./shared-CWEmH2rA.js";
import "./Tooltip-QCFsSCkk.js";
import "./useFormControl-B5X7CYHM.js";
import "./createPopper-DLtJTqii.js";
import "./Divider-DtXA8bzM.js";
import "./dividerClasses-CKrR6pKE.js";
import "./index-Do1i7yHT.js";
import "./BubbleTab-BNonz68w.js";
import "./MenuItem-wDwmnSJr.js";
import "./index.es-B63JM6fg.js";
import "./index-D4hGd7fZ.js";
import "./isObject-C3e4t58V.js";
import "./isObjectLike-BR2ybR99.js";
import "./isSymbol-CPa7d4e7.js";
import "./useOverflowFade-BK4lhouq.js";
import "./index-Sia8Y9vT.js";
import "./index-J1GP0RDZ.js";
import "./accounts-CTdEXpRp.js";
import "./Checkbox-azwF4S2Y.js";
import "./Switch-mECX2JQG.js";
import "./Action-Chaeft7b.js";
import "./DialogActions-CR6pyUZM.js";
import "./Basic-C8TpTkuW.js";
import "./visitHistory-VyF4gOMN.js";
import "./feature-flag-CBj2T29d.js";
import "./shared-kyc.form-DU9uJhtw.js";
import "./toString-BcLWPS8a.js";
import "./isArray-Dxzbedgu.js";
import "./upperFirst-DZHx3_7l.js";
import "./_baseSlice-F8doVSIJ.js";
import "./IconButton-ClDlR7xP.js";
const xe = w(X, { shouldForwardProp: D(["displayPercentages"]) })(
    ({ theme: s, displayPercentages: y }) => ({
      marginRight: "16px",
      alignSelf: "center",
      "& path": {
        stroke: y
          ? s.palette.designColors.surface.default
          : s.palette.designColors.interactive.secondary.active,
      },
      backgroundColor: y
        ? s.palette.designColors.interactive.secondary.active
        : s.palette.designColors.surface.subdued,
    })
  ),
  z = w(U, { shouldForwardProp: D(["show"]) })(({ show: s }) => ({
    minWidth: "16px",
    marginBottom: "20px",
    visibility: s ? "visible" : "hidden",
  })),
  ve = w(b)(() => ({ maxHeight: "0px", overflow: "visible", zIndex: 30 })),
  ye = w(b)(() => ({
    margin: "auto 0 32px",
    width: "fit-content",
    alignSelf: "center",
  })),
  Qt = (s) => {
    const {
        trade: y,
        bestPrice: o,
        precision: { decimal: f },
        events: { onRate: O },
      } = _(),
      { direction: C, symbol: P } = y,
      { base: q, quote: l } = P,
      { onClose: E, focus: A, onFocus: B } = s,
      v = C === pe.buy,
      [p, h] = n.useState(),
      [r, H] = n.useState(!1),
      [S, W] = n.useState(c.OneDay),
      [J, L] = n.useState(!1),
      K = new N(Q(V) ?? 0),
      { lowerBound: M, upperBound: F } = ee(P.symbolId),
      k = le(l),
      { formatMessage: d } = Y(),
      j = n.useMemo(() => (v ? -Math.abs(Number(p)) : p ?? 0), [p, v]),
      m = n.useMemo(
        () => (r ? oe(o.value, j).toFixed(f(l)) : ae(j, o.value).toFixed(2)),
        [r, o.value, j, f, l]
      ),
      g = n.useMemo(() => T(r ? m : p ?? "0"), [p, m, r]);
    return (
      n.useEffect(() => {
        L(g.gte(M) && g.lte(F));
      }, [M, g, F]),
      e.jsxs(e.Fragment, {
        children: [
          e.jsxs(
            b,
            {
              children: [
                e.jsx(u, {
                  justifyContent: "center",
                  children: e.jsx(x, {
                    subdued: !0,
                    children: e.jsx(i, {
                      id: "7wHJaL",
                      defaultMessage: [
                        { type: 1, value: "direction" },
                        { type: 0, value: " " },
                        { type: 1, value: "base" },
                        { type: 0, value: " if the price " },
                        { type: 1, value: "variation" },
                        { type: 0, value: " from " },
                        {
                          type: 8,
                          value: "Price",
                          children: [{ type: 1, value: "currentPrice" }],
                        },
                        { type: 0, value: " to" },
                      ],
                      values: {
                        direction: ue(C),
                        base: q,
                        variation: v ? "drops" : "increase",
                        Price: (t) => e.jsx(x, { children: t }),
                        currentPrice: R({ value: o.value, code: o.code }),
                      },
                    }),
                  }),
                }),
                e.jsxs(u, {
                  textAlign: "center",
                  marginTop: "14px",
                  marginLeft: "48px",
                  children: [
                    e.jsx(u, {
                      flex: "1",
                      justifyContent: "center",
                      children: e.jsx(te, {
                        value: j,
                        onValueChange: ({ value: t }) => t && h(t),
                        decimalScale: r ? 2 : f(l),
                        slotProps: {
                          htmlInput: ({ value: t }) => ({
                            sx: {
                              textAlign: "center",
                              maxWidth: `${
                                t ? t.length : o.value.length || 1
                              }ch`,
                              fieldSizing: "content",
                            },
                            onFocus: () => B(!0),
                          }),
                          input: {
                            startAdornment: e.jsx(z, { show: !r, children: k }),
                            endAdornment: e.jsx(z, {
                              show: r,
                              children: e.jsx(i, {
                                id: "kZcqo0",
                                defaultMessage: [{ type: 0, value: "%" }],
                              }),
                            }),
                          },
                        },
                        autoComplete: "off",
                        allowNegative: r && v,
                        placeholder: r && !p ? "0" : o.value,
                        onClick: (t) => {
                          t.stopPropagation(), p || h(r ? "0" : o.value);
                        },
                        isAllowed: ({ floatValue: t }) =>
                          !t || (t >= -100 && Math.abs(t) <= 1e9),
                        sx: (t) => ({
                          cursor: "pointer",
                          borderRadius: "4px",
                          [`& .${ce.input}`]: {
                            fontSize: "48px",
                            fontWeight: 300,
                            fontFamily: t.typography.fontFamily,
                            caretColor:
                              t.palette.designColors.interactive.primary
                                .default,
                            padding: 0,
                            height: "unset",
                          },
                          ":hover": {
                            background: t.palette.designColors.surface.hovered,
                          },
                        }),
                        "data-cy": "input-currency-price",
                      }),
                    }),
                    e.jsx(xe, {
                      name: Z.percentage,
                      displayPercentages: r,
                      size: I.thirtyTwo,
                      iconSize: I.sixteen,
                      onClick: (t) => {
                        t.stopPropagation(),
                          h((a) => a && m.toString()),
                          H((a) => !a),
                          B(!0);
                      },
                      rounded: !0,
                    }),
                  ],
                }),
                A &&
                  e.jsxs(
                    ve,
                    {
                      onClick: (t) => t.stopPropagation(),
                      children: [
                        e.jsx(u, {
                          justifyContent: "center",
                          margin: "4px 0 14px 0",
                          children: r
                            ? e.jsxs(u, {
                                gap: "5px",
                                children: [
                                  e.jsx(x, {
                                    subdued: !0,
                                    children: e.jsx(i, {
                                      id: "NLeFGn",
                                      defaultMessage: [
                                        { type: 0, value: "to" },
                                      ],
                                    }),
                                  }),
                                  e.jsx(x, {
                                    children: R({
                                      value: new N(m).gt(0) ? m : 0,
                                      code: l,
                                    }),
                                  }),
                                ],
                              })
                            : e.jsxs(u, {
                                gap: "5px",
                                children: [
                                  e.jsx(x, {
                                    children: e.jsx(i, {
                                      id: "kggwrj",
                                      defaultMessage: [
                                        { type: 1, value: "value" },
                                        { type: 0, value: "%" },
                                      ],
                                      values: { value: m },
                                    }),
                                  }),
                                  e.jsx(x, {
                                    subdued: !0,
                                    children: e.jsx(i, {
                                      id: "eDH3KJ",
                                      defaultMessage: [
                                        {
                                          type: 0,
                                          value: "from current price",
                                        },
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                        }),
                        e.jsx(u, {
                          gap: "8px",
                          justifyContent: "center",
                          children: [1, 5, 10].map((t) =>
                            e.jsx(
                              G,
                              {
                                onClick: (a) => {
                                  a.stopPropagation(),
                                    a.preventDefault(),
                                    h(
                                      (r
                                        ? T(t).toFixed(2)
                                        : ie(o.value, t, C).toFixed(f(l))
                                      ).toString()
                                    );
                                },
                                children: e.jsx(i, {
                                  id: "a6eClJ",
                                  defaultMessage: [
                                    { type: 1, value: "sign" },
                                    { type: 1, value: "value" },
                                    { type: 0, value: "%" },
                                  ],
                                  values: { sign: v ? "-" : "+", value: t },
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    },
                    "percentage-rows"
                  ),
              ],
            },
            "target-body"
          ),
          e.jsx(
            se,
            {
              symbol: P,
              period: S,
              bestPrice: o.value,
              focus: A,
              price: g.toNumber(),
            },
            "target-price"
          ),
          J
            ? e.jsxs(
                b,
                {
                  maxWidth: "100%",
                  alignItems: "center",
                  gap: "18px",
                  margin: "32px",
                  children: [
                    e.jsx(de, {
                      sx: ne({ tab: { root: { width: "45px" } } }),
                      value: S,
                      children: [
                        {
                          value: c.OneHour,
                          label: d({
                            id: "KGft5r",
                            defaultMessage: [{ type: 0, value: "1h" }],
                          }),
                        },
                        {
                          value: c.OneDay,
                          label: d({
                            id: "54iQNA",
                            defaultMessage: [{ type: 0, value: "24h" }],
                          }),
                        },
                        {
                          value: c.OneMonth,
                          label: d({
                            id: "kr31SN",
                            defaultMessage: [{ type: 0, value: "1m" }],
                          }),
                        },
                        {
                          value: c.OneQuarter,
                          label: d({
                            id: "b6waYy",
                            defaultMessage: [{ type: 0, value: "1q" }],
                          }),
                        },
                        {
                          value: c.OneYear,
                          label: d({
                            id: "1lkU0S",
                            defaultMessage: [{ type: 0, value: "1y" }],
                          }),
                        },
                        {
                          value: c.All,
                          label: d({
                            id: "zQvVDJ",
                            defaultMessage: [{ type: 0, value: "All" }],
                          }),
                        },
                      ].map(({ value: t, label: a }) =>
                        e.jsx(
                          me,
                          {
                            label: a,
                            value: t,
                            onClick: () => W(S),
                            disableRipple: !0,
                          },
                          t
                        )
                      ),
                    }),
                    e.jsx($, {
                      onClick: () => {
                        O({ value: g.toString(), code: l }), E();
                      },
                      "data-cy": "set-price",
                      children: e.jsx(i, {
                        id: "kYt29s",
                        defaultMessage: [{ type: 0, value: "Set price" }],
                      }),
                    }),
                  ],
                },
                "validation"
              )
            : e.jsx(
                ye,
                {
                  children: e.jsx(ge, {
                    icon: !1,
                    severity: "error",
                    sx: re,
                    children: g.gt(K)
                      ? e.jsx(
                          i,
                          {
                            id: "R6ios6",
                            defaultMessage: [
                              {
                                type: 0,
                                value: "Set price can't be higher than ",
                              },
                              { type: 1, value: "quoteCurrency" },
                              { type: 1, value: "upperBound" },
                            ],
                            values: {
                              quoteCurrency: k,
                              upperBound: F.toString(),
                            },
                          },
                          "higher"
                        )
                      : e.jsx(
                          i,
                          {
                            id: "AkA979",
                            defaultMessage: [
                              {
                                type: 0,
                                value: "Set price can't be lower than ",
                              },
                              { type: 1, value: "quoteCurrency" },
                              { type: 1, value: "lowerBound" },
                            ],
                            values: {
                              quoteCurrency: k,
                              lowerBound: M.toString(),
                            },
                          },
                          "lower"
                        ),
                  }),
                },
                "error"
              ),
        ],
      })
    );
  };
export { Qt as default };
