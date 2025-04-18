var y = {
    log: "log",
    debug: "debug",
    info: "info",
    warn: "warn",
    error: "error",
  },
  A = console,
  H = {};
Object.keys(y).forEach(function (e) {
  H[e] = A[e];
});
var ue = "Datadog Browser SDK:",
  E = {
    debug: H.debug.bind(A, ue),
    log: H.log.bind(A, ue),
    info: H.info.bind(A, ue),
    warn: H.warn.bind(A, ue),
    error: H.error.bind(A, ue),
  },
  rt = "https://docs.datadoghq.com",
  Mt = "".concat(rt, "/real_user_monitoring/browser/troubleshooting"),
  Ge = "More details:";
function Ut(e, t) {
  return function () {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    try {
      return e.apply(void 0, n);
    } catch (o) {
      E.error(t, o);
    }
  };
}
function Te(e) {
  return e !== 0 && Math.random() * 100 <= e;
}
function Mn(e) {
  return Un(e) && e >= 0 && e <= 100;
}
function Un(e) {
  return typeof e == "number";
}
var ge = 1e3,
  V = 60 * ge,
  Pt = 60 * V,
  Pn = 24 * Pt,
  Bn = 365 * Pn;
function fe() {
  return new Date().getTime();
}
function P() {
  return fe();
}
function Ae() {
  return performance.now();
}
function B() {
  return { relative: Ae(), timeStamp: P() };
}
function Dn() {
  return { relative: 0, timeStamp: Bt() };
}
function Fn(e, t) {
  return t - e;
}
function Gn(e, t) {
  return e + t;
}
function jn(e) {
  return e - Bt();
}
var Ye;
function Bt() {
  return Ye === void 0 && (Ye = performance.timing.navigationStart), Ye;
}
var I = 1024,
  Dt = 1024 * I,
  Hn = /[^\u0000-\u007F]/;
function ot(e) {
  return Hn.test(e)
    ? window.TextEncoder !== void 0
      ? new TextEncoder().encode(e).length
      : new Blob([e]).size
    : e.length;
}
function X(e, t) {
  return e.indexOf(t) !== -1;
}
function it(e) {
  if (Array.from) return Array.from(e);
  var t = [];
  if (e instanceof Set)
    e.forEach(function (r) {
      return t.push(r);
    });
  else for (var n = 0; n < e.length; n++) t.push(e[n]);
  return t;
}
function Yn(e, t) {
  for (var n = 0; n < e.length; n += 1) {
    var r = e[n];
    if (t(r, n)) return r;
  }
}
function Ie(e) {
  return Object.keys(e).map(function (t) {
    return e[t];
  });
}
function zn(e) {
  return Object.keys(e).map(function (t) {
    return [t, e[t]];
  });
}
function at(e, t) {
  return e.slice(0, t.length) === t;
}
function Kn(e, t) {
  return e.slice(-t.length) === t;
}
function O(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return (
    t.forEach(function (r) {
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }),
    e
  );
}
function qn(e) {
  return O({}, e);
}
function Ft(e, t) {
  return Object.keys(e).some(function (n) {
    return e[n] === t;
  });
}
function st(e) {
  return Object.keys(e).length === 0;
}
function D() {
  if (typeof globalThis == "object") return globalThis;
  Object.defineProperty(Object.prototype, "_dd_temp_", {
    get: function () {
      return this;
    },
    configurable: !0,
  });
  var e = _dd_temp_;
  return (
    delete Object.prototype._dd_temp_,
    typeof e != "object" &&
      (typeof self == "object"
        ? (e = self)
        : typeof window == "object"
        ? (e = window)
        : (e = {})),
    e
  );
}
function re(e, t) {
  var n = D(),
    r;
  return (
    n.Zone &&
      typeof n.Zone.__symbol__ == "function" &&
      (r = e[n.Zone.__symbol__(t)]),
    r || (r = e[t]),
    r
  );
}
var Jn = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, o = t.length, i; r < o; r++)
        (i || !(r in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
    return e.concat(i || Array.prototype.slice.call(t));
  },
  ke,
  Gt = !1;
function Vn(e) {
  ke = e;
}
function Xn(e) {
  Gt = e;
}
function Wn(e, t, n) {
  var r = n.value;
  n.value = function () {
    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
    var a = ke ? h(r) : r;
    return a.apply(this, o);
  };
}
function h(e) {
  return function () {
    return de(e, this, arguments);
  };
}
function de(e, t, n) {
  try {
    return e.apply(t, n);
  } catch (r) {
    if ((Qe(r), ke))
      try {
        ke(r);
      } catch (o) {
        Qe(o);
      }
  }
}
function Qe() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  Gt && E.error.apply(E, Jn(["[MONITOR]"], e, !1));
}
function me(e, t) {
  return re(D(), "setTimeout")(h(e), t);
}
function jt(e) {
  re(D(), "clearTimeout")(e);
}
function ut(e, t) {
  return re(D(), "setInterval")(h(e), t);
}
function Ht(e) {
  re(D(), "clearInterval")(e);
}
var _ = (function () {
  function e(t) {
    (this.onFirstSubscribe = t), (this.observers = []);
  }
  return (
    (e.prototype.subscribe = function (t) {
      var n = this;
      return (
        this.observers.push(t),
        this.observers.length === 1 &&
          this.onFirstSubscribe &&
          (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0),
        {
          unsubscribe: function () {
            (n.observers = n.observers.filter(function (r) {
              return t !== r;
            })),
              !n.observers.length &&
                n.onLastUnsubscribe &&
                n.onLastUnsubscribe();
          },
        }
      );
    }),
    (e.prototype.notify = function (t) {
      this.observers.forEach(function (n) {
        return n(t);
      });
    }),
    e
  );
})();
function Yt() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return new _(function (n) {
    var r = e.map(function (o) {
      return o.subscribe(function (i) {
        return n.notify(i);
      });
    });
    return function () {
      return r.forEach(function (o) {
        return o.unsubscribe();
      });
    };
  });
}
function zt(e, t, n) {
  var r = !1,
    o,
    i;
  return {
    throttled: function () {
      for (var a = [], u = 0; u < arguments.length; u++) a[u] = arguments[u];
      if (r) {
        o = a;
        return;
      }
      e.apply(void 0, a),
        (r = !0),
        (i = me(function () {
          o && e.apply(void 0, o), (r = !1), (o = void 0);
        }, t));
    },
    cancel: function () {
      jt(i), (r = !1), (o = void 0);
    },
  };
}
function U() {}
function W(e) {
  return e
    ? (
        parseInt(e, 10) ^
        ((Math.random() * 16) >> (parseInt(e, 10) / 4))
      ).toString(16)
    : ""
        .concat(1e7, "-")
        .concat(1e3, "-")
        .concat(4e3, "-")
        .concat(8e3, "-")
        .concat(1e11)
        .replace(/[018]/g, W);
}
var Ne = /([\w-]+)\s*=\s*([^;]+)/g;
function $n(e, t) {
  for (Ne.lastIndex = 0; ; ) {
    var n = Ne.exec(e);
    if (n) {
      if (n[1] === t) return n[2];
    } else break;
  }
}
function Zn(e) {
  var t = new Map();
  for (Ne.lastIndex = 0; ; ) {
    var n = Ne.exec(e);
    if (n) t.set(n[1], n[2]);
    else break;
  }
  return t;
}
function Qn(e, t, n) {
  var r = e.charCodeAt(t - 1),
    o = r >= 55296 && r <= 56319,
    i = o ? t + 1 : t;
  return e.length <= i ? e : "".concat(e.slice(0, i)).concat(n);
}
function er() {
  return tr() === 1;
}
var Se;
function tr() {
  return Se ?? (Se = nr());
}
function nr(e) {
  var t;
  e === void 0 && (e = window);
  var n = e.navigator.userAgent;
  return e.chrome || /HeadlessChrome/.test(n)
    ? 1
    : ((t = e.navigator.vendor) === null || t === void 0
        ? void 0
        : t.indexOf("Apple")) === 0 ||
      (/safari/i.test(n) && !/chrome|android/i.test(n))
    ? 2
    : e.document.documentMode
    ? 0
    : 3;
}
var le;
(function (e) {
  (e.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql"),
    (e.REMOTE_CONFIGURATION = "remote_configuration"),
    (e.LONG_ANIMATION_FRAME = "long_animation_frame"),
    (e.ANONYMOUS_USER_TRACKING = "anonymous_user_tracking"),
    (e.ACTION_NAME_MASKING = "action_name_masking"),
    (e.CONSISTENT_TRACE_SAMPLING = "consistent_trace_sampling"),
    (e.DELAY_VIEWPORT_COLLECTION = "delay_viewport_collection");
})(le || (le = {}));
var ct = new Set();
function rr(e) {
  Array.isArray(e) &&
    or(
      e.filter(function (t) {
        return Ft(le, t);
      })
    );
}
function or(e) {
  e.forEach(function (t) {
    ct.add(t);
  });
}
function Kt(e) {
  return ct.has(e);
}
function ir() {
  return ct;
}
function be(e, t, n, r) {
  n === void 0 && (n = 0);
  var o = new Date();
  o.setTime(o.getTime() + n);
  var i = "expires=".concat(o.toUTCString()),
    a = r && r.crossSite ? "none" : "strict",
    u = r && r.domain ? ";domain=".concat(r.domain) : "",
    f = r && r.secure ? ";secure" : "",
    s = r && r.partitioned ? ";partitioned" : "";
  document.cookie = ""
    .concat(e, "=")
    .concat(t, ";")
    .concat(i, ";path=/;samesite=")
    .concat(a)
    .concat(u)
    .concat(f)
    .concat(s);
}
function ft(e) {
  return $n(document.cookie, e);
}
var ze;
function K(e) {
  return ze || (ze = Zn(document.cookie)), ze.get(e);
}
function qt(e, t) {
  be(e, "", 0, t);
}
function ar(e) {
  if (document.cookie === void 0 || document.cookie === null) return !1;
  try {
    var t = "dd_cookie_test_".concat(W()),
      n = "test";
    be(t, n, V, e);
    var r = ft(t) === n;
    return qt(t, e), r;
  } catch (o) {
    return E.error(o), !1;
  }
}
var Ke;
function sr() {
  if (Ke === void 0) {
    for (
      var e = "dd_site_test_".concat(W()),
        t = "test",
        n = window.location.hostname.split("."),
        r = n.pop();
      n.length && !ft(e);

    )
      (r = "".concat(n.pop(), ".").concat(r)), be(e, t, ge, { domain: r });
    qt(e, { domain: r }), (Ke = r);
  }
  return Ke;
}
var ae = "_dd_s";
function dt(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function yt(e) {
  var t = O({}, e),
    n = ["id", "name", "email"];
  return (
    n.forEach(function (r) {
      r in t && (t[r] = String(t[r]));
    }),
    t
  );
}
function ur(e) {
  var t = dt(e) === "object";
  return t || E.error("Unsupported user:", e), t;
}
function cr() {
  return Math.floor(Math.random() * Math.pow(2, 53)).toString(36);
}
var lt = 4 * Pt,
  Jt = 15 * V,
  fr = Bn,
  ve = { COOKIE: "cookie", LOCAL_STORAGE: "local-storage" },
  Vt = /^([a-zA-Z]+)=([a-z0-9-]+)$/,
  vt = "&";
function dr(e) {
  return !!e && (e.indexOf(vt) !== -1 || Vt.test(e));
}
var lr = "1";
function Y(e) {
  var t = { isExpired: lr };
  return (
    Kt(le.ANONYMOUS_USER_TRACKING) &&
      (e != null && e.anonymousId
        ? (t.anonymousId = e == null ? void 0 : e.anonymousId)
        : (t.anonymousId = cr())),
    t
  );
}
function we(e) {
  return st(e);
}
function Xt(e) {
  return !we(e);
}
function Me(e) {
  return e.isExpired !== void 0 || !vr(e);
}
function vr(e) {
  return (
    (e.created === void 0 || fe() - Number(e.created) < lt) &&
    (e.expire === void 0 || fe() < Number(e.expire))
  );
}
function Wt(e) {
  e.expire = String(fe() + Jt);
}
function pt(e) {
  return zn(e)
    .map(function (t) {
      var n = t[0],
        r = t[1];
      return n === "anonymousId"
        ? "aid=".concat(r)
        : "".concat(n, "=").concat(r);
    })
    .join(vt);
}
function $t(e) {
  var t = {};
  return (
    dr(e) &&
      e.split(vt).forEach(function (n) {
        var r = Vt.exec(n);
        if (r !== null) {
          var o = r[1],
            i = r[2];
          o === "aid" ? (t.anonymousId = i) : (t[o] = i);
        }
      }),
    t
  );
}
var pr = "_dd",
  gr = "_dd_r",
  mr = "_dd_l",
  br = "rum",
  hr = "logs";
function Sr(e) {
  var t = K(ae);
  if (!t) {
    var n = K(pr),
      r = K(gr),
      o = K(mr),
      i = {};
    n && (i.id = n),
      o && /^[01]$/.test(o) && (i[hr] = o),
      r && /^[012]$/.test(r) && (i[br] = r),
      Xt(i) && (Wt(i), e.persistSession(i));
  }
}
function Et(e) {
  var t = Cr(e);
  return ar(t) ? { type: ve.COOKIE, cookieOptions: t } : void 0;
}
function yr(e) {
  var t = {
    isLockEnabled: er(),
    persistSession: Er(e),
    retrieveSession: Or,
    expireSession: function (n) {
      return _r(e, n);
    },
  };
  return Sr(t), t;
}
function Er(e) {
  return function (t) {
    be(ae, pt(t), Jt, e);
  };
}
function _r(e, t) {
  var n = Y(t);
  be(ae, pt(n), Kt(le.ANONYMOUS_USER_TRACKING) ? fr : lt, e);
}
function Or() {
  var e = ft(ae),
    t = $t(e);
  return t;
}
function Cr(e) {
  var t = {};
  return (
    (t.secure =
      !!e.useSecureSessionCookie ||
      !!e.usePartitionedCrossSiteSessionCookie ||
      !!e.useCrossSiteSessionCookie),
    (t.crossSite =
      !!e.usePartitionedCrossSiteSessionCookie ||
      !!e.useCrossSiteSessionCookie),
    (t.partitioned = !!e.usePartitionedCrossSiteSessionCookie),
    e.trackSessionAcrossSubdomains && (t.domain = sr()),
    t
  );
}
var Tr = "_dd_test_";
function _t() {
  try {
    var e = W(),
      t = "".concat(Tr).concat(e);
    localStorage.setItem(t, e);
    var n = localStorage.getItem(t);
    return (
      localStorage.removeItem(t), e === n ? { type: ve.LOCAL_STORAGE } : void 0
    );
  } catch {
    return;
  }
}
function wr() {
  return {
    isLockEnabled: !1,
    persistSession: Zt,
    retrieveSession: Rr,
    expireSession: xr,
  };
}
function Zt(e) {
  localStorage.setItem(ae, pt(e));
}
function Rr() {
  var e = localStorage.getItem(ae);
  return $t(e);
}
function xr(e) {
  Zt(Y(e));
}
var Lr = 10,
  Ar = 100,
  Qt = [],
  Re;
function z(e, t, n) {
  var r;
  n === void 0 && (n = 0);
  var o = t.isLockEnabled,
    i = t.persistSession,
    a = t.expireSession,
    u = function (l) {
      return i(O({}, l, { lock: s }));
    },
    f = function () {
      var l = t.retrieveSession(),
        v = l.lock;
      return l.lock && delete l.lock, { session: l, lock: v };
    };
  if ((Re || (Re = e), e !== Re)) {
    Qt.push(e);
    return;
  }
  if (o && n >= Ar) {
    Ot(t);
    return;
  }
  var s,
    c = f();
  if (o) {
    if (c.lock) {
      ye(e, t, n);
      return;
    }
    if (((s = W()), u(c.session), (c = f()), c.lock !== s)) {
      ye(e, t, n);
      return;
    }
  }
  var d = e.process(c.session);
  if (o && ((c = f()), c.lock !== s)) {
    ye(e, t, n);
    return;
  }
  if ((d && (Me(d) ? a(d) : (Wt(d), o ? u(d) : i(d))), o && !(d && Me(d)))) {
    if (((c = f()), c.lock !== s)) {
      ye(e, t, n);
      return;
    }
    i(c.session), (d = c.session);
  }
  (r = e.after) === null || r === void 0 || r.call(e, d || c.session), Ot(t);
}
function ye(e, t, n) {
  me(function () {
    z(e, t, n + 1);
  }, Lr);
}
function Ot(e) {
  Re = void 0;
  var t = Qt.shift();
  t && z(t, e);
}
var Ct = ge;
function Ir(e) {
  switch (e.sessionPersistence) {
    case ve.COOKIE:
      return Et(e);
    case ve.LOCAL_STORAGE:
      return _t();
    case void 0: {
      var t = Et(e);
      return !t && e.allowFallbackToLocalStorage && (t = _t()), t;
    }
    default:
      E.error(
        "Invalid session persistence '".concat(
          String(e.sessionPersistence),
          "'"
        )
      );
  }
}
function kr(e, t, n) {
  var r = new _(),
    o = new _(),
    i = new _(),
    a = e.type === ve.COOKIE ? yr(e.cookieOptions) : wr(),
    u = a.expireSession,
    f = ut(m, Ct),
    s;
  S();
  var c = zt(function () {
      z(
        {
          process: function (b) {
            if (!we(b)) {
              var G = p(b);
              return C(G), G;
            }
          },
          after: function (b) {
            Xt(b) && !L() && An(b), (s = b);
          },
        },
        a
      );
    }, Ct),
    d = c.throttled,
    l = c.cancel;
  function v() {
    z(
      {
        process: function (b) {
          return L() ? p(b) : void 0;
        },
      },
      a
    );
  }
  function m() {
    z(
      {
        process: function (b) {
          return Me(b) ? Y(b) : void 0;
        },
        after: p,
      },
      a
    );
  }
  function p(b) {
    return (
      Me(b) && (b = Y(b)),
      L() &&
        (ee(b) ? Ln() : (i.notify({ previousState: s, newState: b }), (s = b))),
      b
    );
  }
  function S() {
    z(
      {
        process: function (b) {
          if (we(b)) return Y(b);
        },
        after: function (b) {
          s = b;
        },
      },
      a
    );
  }
  function C(b) {
    if (we(b)) return !1;
    var G = n(b[t]),
      kn = G.trackingType,
      Nn = G.isTracked;
    (b[t] = kn),
      delete b.isExpired,
      Nn && !b.id && ((b.id = W()), (b.created = String(fe())));
  }
  function L() {
    return s[t] !== void 0;
  }
  function ee(b) {
    return s.id !== b.id || s[t] !== b[t];
  }
  function Ln() {
    (s = Y(s)), o.notify();
  }
  function An(b) {
    (s = b), r.notify();
  }
  function In(b) {
    z(
      {
        process: function (G) {
          return O({}, G, b);
        },
        after: p,
      },
      a
    );
  }
  return {
    expandOrRenewSession: d,
    expandSession: v,
    getSession: function () {
      return s;
    },
    renewObservable: r,
    expireObservable: o,
    sessionStateUpdateObservable: i,
    restartSession: S,
    expire: function () {
      l(), u(s), p(Y(s));
    },
    stop: function () {
      Ht(f);
    },
    updateSessionState: In,
  };
}
var et = { GRANTED: "granted", NOT_GRANTED: "not-granted" };
function Nr(e) {
  var t = new _();
  return {
    tryToInit: function (n) {
      e || (e = n);
    },
    update: function (n) {
      (e = n), t.notify();
    },
    isGranted: function () {
      return e === et.GRANTED;
    },
    observable: t,
  };
}
function $(e, t, n) {
  if (typeof e != "object" || e === null) return JSON.stringify(e);
  var r = te(Object.prototype),
    o = te(Array.prototype),
    i = te(Object.getPrototypeOf(e)),
    a = te(e);
  try {
    return JSON.stringify(e, t, n);
  } catch {
    return "<error: unable to serialize object>";
  } finally {
    r(), o(), i(), a();
  }
}
function te(e) {
  var t = e,
    n = t.toJSON;
  return n
    ? (delete t.toJSON,
      function () {
        t.toJSON = n;
      })
    : U;
}
function gt(e) {
  return Mr(e, location.href).href;
}
function Mr(e, t) {
  var n = Ur();
  if (n)
    try {
      return t !== void 0 ? new n(e, t) : new n(e);
    } catch (a) {
      throw new Error(
        "Failed to construct URL: "
          .concat(String(a), " ")
          .concat($({ url: e, base: t }))
      );
    }
  if (t === void 0 && !/:/.test(e))
    throw new Error("Invalid URL: '".concat(e, "'"));
  var r = document,
    o = r.createElement("a");
  if (t !== void 0) {
    r = document.implementation.createHTMLDocument("");
    var i = r.createElement("base");
    (i.href = t), r.head.appendChild(i), r.body.appendChild(o);
  }
  return (o.href = e), o;
}
var Tt = URL,
  Ee;
function Ur() {
  if (Ee === void 0)
    try {
      var e = new Tt("http://test/path");
      Ee = e.href === "http://test/path";
    } catch {
      Ee = !1;
    }
  return Ee ? Tt : void 0;
}
var Pr = "datad0g.com",
  Br = "dd0g-gov.com",
  ne = "datadoghq.com",
  Dr = "ddog-gov.com",
  Fr = "pci.browser-intake-datadoghq.com",
  Gr = ["ddsource", "ddtags"];
function ce(e, t, n) {
  var r = jr(e, t);
  return {
    build: function (o, i) {
      var a = Yr(e, t, n, o, i);
      return r(a);
    },
    urlPrefix: r(""),
    trackType: t,
  };
}
function jr(e, t) {
  var n = "/api/v2/".concat(t),
    r = e.proxy;
  if (typeof r == "string") {
    var o = gt(r);
    return function (a) {
      return ""
        .concat(o, "?ddforward=")
        .concat(encodeURIComponent("".concat(n, "?").concat(a)));
    };
  }
  if (typeof r == "function")
    return function (a) {
      return r({ path: n, parameters: a });
    };
  var i = Hr(t, e);
  return function (a) {
    return "https://".concat(i).concat(n, "?").concat(a);
  };
}
function Hr(e, t) {
  var n = t.site,
    r = n === void 0 ? ne : n,
    o = t.internalAnalyticsSubdomain;
  if (e === "logs" && t.usePciIntake && r === ne) return Fr;
  if (o && r === ne) return "".concat(o, ".").concat(ne);
  if (r === Br) return "http-intake.logs.".concat(r);
  var i = r.split("."),
    a = i.pop();
  return "browser-intake-".concat(i.join("-"), ".").concat(a);
}
function Yr(e, t, n, r, o) {
  var i = e.clientToken,
    a = e.internalAnalyticsSubdomain,
    u = o.retry,
    f = o.encoding,
    s = ["sdk_version:".concat("5.35.1"), "api:".concat(r)].concat(n);
  u &&
    s.push(
      "retry_count:".concat(u.count),
      "retry_after:".concat(u.lastFailureStatus)
    );
  var c = [
    "ddsource=browser",
    "ddtags=".concat(encodeURIComponent(s.join(","))),
    "dd-api-key=".concat(i),
    "dd-evp-origin-version=".concat(encodeURIComponent("5.35.1")),
    "dd-evp-origin=browser",
    "dd-request-id=".concat(W()),
  ];
  return (
    f && c.push("dd-evp-encoding=".concat(f)),
    t === "rum" && c.push("batch_time=".concat(P())),
    a && c.reverse(),
    c.join("&")
  );
}
var zr = 200;
function Kr(e) {
  var t = e.env,
    n = e.service,
    r = e.version,
    o = e.datacenter,
    i = [];
  return (
    t && i.push(_e("env", t)),
    n && i.push(_e("service", n)),
    r && i.push(_e("version", r)),
    o && i.push(_e("datacenter", o)),
    i
  );
}
function _e(e, t) {
  var n = zr - e.length - 1;
  (t.length > n || qr(t)) &&
    E.warn(
      ""
        .concat(
          e,
          " value doesn't meet tag requirements and will be sanitized. "
        )
        .concat(Ge, " ")
        .concat(rt, "/getting_started/tagging/#defining-tags")
    );
  var r = t.replace(/,/g, "_");
  return "".concat(e, ":").concat(r);
}
function qr(e) {
  return Jr() ? new RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(e) : !1;
}
function Jr() {
  try {
    return new RegExp("[\\p{Ll}]", "u"), !0;
  } catch {
    return !1;
  }
}
function Vr(e) {
  var t = e.site || ne,
    n = Kr(e),
    r = Xr(e, n),
    o = Wr(e, n);
  return O({ replica: o, site: t }, r);
}
function Xr(e, t) {
  return {
    logsEndpointBuilder: ce(e, "logs", t),
    rumEndpointBuilder: ce(e, "rum", t),
    sessionReplayEndpointBuilder: ce(e, "replay", t),
  };
}
function Wr(e, t) {
  if (e.replica) {
    var n = O({}, e, { site: ne, clientToken: e.replica.clientToken }),
      r = {
        logsEndpointBuilder: ce(n, "logs", t),
        rumEndpointBuilder: ce(n, "rum", t),
      };
    return O({ applicationId: e.replica.applicationId }, r);
  }
}
function $r(e) {
  return Gr.every(function (t) {
    return X(e, t);
  });
}
function qe(e, t) {
  return e != null && typeof e != "string"
    ? (E.error("".concat(t, " must be defined as a string")), !1)
    : !0;
}
function Zr(e) {
  return e && typeof e == "string" && !/(datadog|ddog|datad0g|dd0g)/.test(e)
    ? (E.error(
        "Site should be a valid Datadog site. "
          .concat(Ge, " ")
          .concat(rt, "/getting_started/site/.")
      ),
      !1)
    : !0;
}
function Oe(e, t) {
  return e !== void 0 && !Mn(e)
    ? (E.error(
        "".concat(t, " Sample Rate should be a number between 0 and 100")
      ),
      !1)
    : !0;
}
function Qr(e) {
  var t, n, r, o, i;
  if (!e || !e.clientToken) {
    E.error("Client Token is not configured, we will not send any data.");
    return;
  }
  if (
    !(
      !Zr(e.site) ||
      !Oe(e.sessionSampleRate, "Session") ||
      !Oe(e.telemetrySampleRate, "Telemetry") ||
      !Oe(e.telemetryConfigurationSampleRate, "Telemetry Configuration") ||
      !Oe(e.telemetryUsageSampleRate, "Telemetry Usage") ||
      !qe(e.version, "Version") ||
      !qe(e.env, "Env") ||
      !qe(e.service, "Service")
    )
  ) {
    if (e.trackingConsent !== void 0 && !Ft(et, e.trackingConsent)) {
      E.error('Tracking Consent should be either "granted" or "not-granted"');
      return;
    }
    return O(
      {
        beforeSend:
          e.beforeSend && Ut(e.beforeSend, "beforeSend threw an error:"),
        sessionStoreStrategyType: Ir(e),
        sessionSampleRate:
          (t = e.sessionSampleRate) !== null && t !== void 0 ? t : 100,
        telemetrySampleRate:
          (n = e.telemetrySampleRate) !== null && n !== void 0 ? n : 20,
        telemetryConfigurationSampleRate:
          (r = e.telemetryConfigurationSampleRate) !== null && r !== void 0
            ? r
            : 5,
        telemetryUsageSampleRate:
          (o = e.telemetryUsageSampleRate) !== null && o !== void 0 ? o : 5,
        service: e.service || void 0,
        silentMultipleInit: !!e.silentMultipleInit,
        allowUntrustedEvents: !!e.allowUntrustedEvents,
        trackingConsent:
          (i = e.trackingConsent) !== null && i !== void 0 ? i : et.GRANTED,
        storeContextsAcrossPages: !!e.storeContextsAcrossPages,
        batchBytesLimit: 16 * I,
        eventRateLimiterThreshold: 3e3,
        maxTelemetryEventsPerPage: 15,
        flushTimeout: 30 * ge,
        batchMessagesLimit: 50,
        messageBytesLimit: 256 * I,
      },
      Vr(e)
    );
  }
}
function eo(e) {
  return {
    session_sample_rate: e.sessionSampleRate,
    telemetry_sample_rate: e.telemetrySampleRate,
    telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
    telemetry_usage_sample_rate: e.telemetryUsageSampleRate,
    use_before_send: !!e.beforeSend,
    use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
    use_partitioned_cross_site_session_cookie:
      e.usePartitionedCrossSiteSessionCookie,
    use_secure_session_cookie: e.useSecureSessionCookie,
    use_proxy: !!e.proxy,
    silent_multiple_init: e.silentMultipleInit,
    track_session_across_subdomains: e.trackSessionAcrossSubdomains,
    session_persistence: e.sessionPersistence,
    allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
    store_contexts_across_pages: !!e.storeContextsAcrossPages,
    allow_untrusted_events: !!e.allowUntrustedEvents,
    tracking_consent: e.trackingConsent,
  };
}
var he = "?";
function N(e) {
  var t = [],
    n = Je(e, "stack"),
    r = String(e);
  return (
    n && at(n, r) && (n = n.slice(r.length)),
    n &&
      n
        .split(
          `
`
        )
        .forEach(function (o) {
          var i = ro(o) || io(o) || so(o) || fo(o);
          i && (!i.func && i.line && (i.func = he), t.push(i));
        }),
    { message: Je(e, "message"), name: Je(e, "name"), stack: t }
  );
}
var en =
    "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
  oe = "(?::(\\d+))",
  to = new RegExp(
    "^\\s*at (.*?) ?\\(".concat(en).concat(oe, "?").concat(oe, "?\\)?\\s*$"),
    "i"
  ),
  no = new RegExp("\\((\\S*)".concat(oe).concat(oe, "\\)"));
function ro(e) {
  var t = to.exec(e);
  if (t) {
    var n = t[2] && t[2].indexOf("native") === 0,
      r = t[2] && t[2].indexOf("eval") === 0,
      o = no.exec(t[2]);
    return (
      r && o && ((t[2] = o[1]), (t[3] = o[2]), (t[4] = o[3])),
      {
        args: n ? [t[2]] : [],
        column: t[4] ? +t[4] : void 0,
        func: t[1] || he,
        line: t[3] ? +t[3] : void 0,
        url: n ? void 0 : t[2],
      }
    );
  }
}
var oo = new RegExp(
  "^\\s*at ?".concat(en).concat(oe, "?").concat(oe, "??\\s*$"),
  "i"
);
function io(e) {
  var t = oo.exec(e);
  if (t)
    return {
      args: [],
      column: t[3] ? +t[3] : void 0,
      func: he,
      line: t[2] ? +t[2] : void 0,
      url: t[1],
    };
}
var ao =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function so(e) {
  var t = ao.exec(e);
  if (t)
    return {
      args: [],
      column: t[4] ? +t[4] : void 0,
      func: t[1] || he,
      line: +t[3],
      url: t[2],
    };
}
var uo =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  co = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function fo(e) {
  var t = uo.exec(e);
  if (t) {
    var n = t[3] && t[3].indexOf(" > eval") > -1,
      r = co.exec(t[3]);
    return (
      n && r && ((t[3] = r[1]), (t[4] = r[2]), (t[5] = void 0)),
      {
        args: t[2] ? t[2].split(",") : [],
        column: t[5] ? +t[5] : void 0,
        func: t[1] || he,
        line: t[4] ? +t[4] : void 0,
        url: t[3],
      }
    );
  }
}
function Je(e, t) {
  if (!(typeof e != "object" || !e || !(t in e))) {
    var n = e[t];
    return typeof n == "string" ? n : void 0;
  }
}
function lo(e, t, n, r) {
  var o = [{ url: t, column: r, line: n }],
    i = po(e),
    a = i.name,
    u = i.message;
  return { name: a, message: u, stack: o };
}
var vo =
  /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
function po(e) {
  var t, n, r;
  return (
    {}.toString.call(e) === "[object String]" &&
      ((t = vo.exec(e)), (n = t[1]), (r = t[2])),
    { name: n, message: r }
  );
}
function je() {
  var e = 2,
    t = new Error(),
    n;
  if (!t.stack)
    try {
      throw t;
    } catch {}
  return (
    de(function () {
      var r = N(t);
      (r.stack = r.stack.slice(e)), (n = Z(r));
    }),
    n
  );
}
function Z(e) {
  var t = tn(e);
  return (
    e.stack.forEach(function (n) {
      var r = n.func === "?" ? "<anonymous>" : n.func,
        o =
          n.args && n.args.length > 0 ? "(".concat(n.args.join(", "), ")") : "",
        i = n.line ? ":".concat(n.line) : "",
        a = n.line && n.column ? ":".concat(n.column) : "";
      t += `
  at `
        .concat(r)
        .concat(o, " @ ")
        .concat(n.url)
        .concat(i)
        .concat(a);
    }),
    t
  );
}
function tn(e) {
  return "".concat(e.name || "Error", ": ").concat(e.message);
}
function q(e, t, n, r) {
  var o = r === void 0 ? {} : r,
    i = o.computeHandlingStack,
    a = e[t];
  if (typeof a != "function")
    if (t in e && at(t, "on")) a = U;
    else return { stop: U };
  var u = !1,
    f = function () {
      if (u) return a.apply(this, arguments);
      var s = it(arguments),
        c;
      de(n, null, [
        {
          target: this,
          parameters: s,
          onPostCall: function (l) {
            c = l;
          },
          handlingStack: i ? je() : void 0,
        },
      ]);
      var d = a.apply(this, s);
      return c && de(c, null, [d]), d;
    };
  return (
    (e[t] = f),
    {
      stop: function () {
        (u = !0), e[t] === f && (e[t] = a);
      },
    }
  );
}
var go = 220 * I,
  mo = "$",
  bo = 3;
function k(e, t) {
  t === void 0 && (t = go);
  var n = te(Object.prototype),
    r = te(Array.prototype),
    o = [],
    i = new WeakMap(),
    a = Ve(e, mo, void 0, o, i),
    u = JSON.stringify(a),
    f = u ? u.length : 0;
  if (f > t) {
    Xe(t, "discarded", e);
    return;
  }
  for (; o.length > 0 && f < t; ) {
    var s = o.shift(),
      c = 0;
    if (Array.isArray(s.source))
      for (var d = 0; d < s.source.length; d++) {
        var l = Ve(s.source[d], s.path, d, o, i);
        if (
          (l !== void 0 ? (f += JSON.stringify(l).length) : (f += 4),
          (f += c),
          (c = 1),
          f > t)
        ) {
          Xe(t, "truncated", e);
          break;
        }
        s.target[d] = l;
      }
    else
      for (var d in s.source)
        if (Object.prototype.hasOwnProperty.call(s.source, d)) {
          var l = Ve(s.source[d], s.path, d, o, i);
          if (
            (l !== void 0 &&
              ((f += JSON.stringify(l).length + c + d.length + bo), (c = 1)),
            f > t)
          ) {
            Xe(t, "truncated", e);
            break;
          }
          s.target[d] = l;
        }
  }
  return n(), r(), a;
}
function Ve(e, t, n, r, o) {
  var i = yo(e);
  if (!i || typeof i != "object") return ho(i);
  var a = So(i);
  if (a !== "[Object]" && a !== "[Array]" && a !== "[Error]") return a;
  var u = e;
  if (o.has(u)) return "[Reference seen at ".concat(o.get(u), "]");
  var f = n !== void 0 ? "".concat(t, ".").concat(n) : t,
    s = Array.isArray(i) ? [] : {};
  return o.set(u, f), r.push({ source: i, target: s, path: f }), s;
}
function ho(e) {
  return typeof e == "bigint"
    ? "[BigInt] ".concat(e.toString())
    : typeof e == "function"
    ? "[Function] ".concat(e.name || "unknown")
    : typeof e == "symbol"
    ? "[Symbol] ".concat(e.description || e.toString())
    : e;
}
function So(e) {
  try {
    if (e instanceof Event) return { isTrusted: e.isTrusted };
    var t = Object.prototype.toString.call(e),
      n = t.match(/\[object (.*)\]/);
    if (n && n[1]) return "[".concat(n[1], "]");
  } catch {}
  return "[Unserializable]";
}
function yo(e) {
  var t = e;
  if (t && typeof t.toJSON == "function")
    try {
      return t.toJSON();
    } catch {}
  return e;
}
function Xe(e, t, n) {
  E.warn(
    "The data provided has been "
      .concat(t, " as it is over the limit of ")
      .concat(e, " characters:"),
    n
  );
}
var nn = "No stack, consider using an instance of Error";
function rn(e) {
  var t = e.stackTrace,
    n = e.originalError,
    r = e.handlingStack,
    o = e.startClocks,
    i = e.nonErrorPrefix,
    a = e.source,
    u = e.handling,
    f = F(n),
    s = Eo(t, f, i, n),
    c = _o(f, t) ? Z(t) : nn,
    d = f ? an(n, a) : void 0,
    l = t ? t.name : void 0,
    v = on(n);
  return {
    startClocks: o,
    source: a,
    handling: u,
    handlingStack: r,
    originalError: n,
    type: l,
    message: s,
    stack: c,
    causes: d,
    fingerprint: v,
  };
}
function Eo(e, t, n, r) {
  return e != null && e.message && e != null && e.name
    ? e.message
    : t
    ? "Empty message"
    : "".concat(n, " ").concat($(k(r)));
}
function _o(e, t) {
  return t === void 0
    ? !1
    : e
    ? !0
    : t.stack.length > 0 && (t.stack.length > 1 || t.stack[0].url !== void 0);
}
function on(e) {
  return F(e) && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0;
}
function Oo(e) {
  var t;
  return (t = /@ (.+)/.exec(e)) === null || t === void 0 ? void 0 : t[1];
}
function F(e) {
  return (
    e instanceof Error || Object.prototype.toString.call(e) === "[object Error]"
  );
}
function an(e, t) {
  for (var n = e, r = []; F(n == null ? void 0 : n.cause) && r.length < 10; ) {
    var o = N(n.cause);
    r.push({
      message: n.cause.message,
      source: t,
      type: o == null ? void 0 : o.name,
      stack: o && Z(o),
    }),
      (n = n.cause);
  }
  return r.length ? r : void 0;
}
var T = {
  AGENT: "agent",
  CONSOLE: "console",
  CUSTOM: "custom",
  LOGGER: "logger",
  NETWORK: "network",
  SOURCE: "source",
  REPORT: "report",
};
function Co(e) {
  var t = function (o, i) {
      var a = rn({
        stackTrace: o,
        originalError: i,
        startClocks: B(),
        nonErrorPrefix: "Uncaught",
        source: T.SOURCE,
        handling: "unhandled",
      });
      e.notify(a);
    },
    n = To(t).stop,
    r = wo(t).stop;
  return {
    stop: function () {
      n(), r();
    },
  };
}
function To(e) {
  return q(window, "onerror", function (t) {
    var n = t.parameters,
      r = n[0],
      o = n[1],
      i = n[2],
      a = n[3],
      u = n[4],
      f;
    F(u) ? (f = N(u)) : (f = lo(r, o, i, a)), e(f, u ?? r);
  });
}
function wo(e) {
  return q(window, "onunhandledrejection", function (t) {
    var n = t.parameters[0],
      r = n.reason || "Empty reason",
      o = N(r);
    e(o, r);
  });
}
function Ro(e) {
  var t = O(
    {
      version: "5.35.1",
      onReady: function (n) {
        n();
      },
    },
    e
  );
  return (
    Object.defineProperty(t, "_setDebug", {
      get: function () {
        return Xn;
      },
      enumerable: !1,
    }),
    t
  );
}
function xo(e, t, n) {
  var r = e[t];
  r &&
    !r.q &&
    r.version &&
    E.warn(
      "SDK is loaded more than once. This is unsupported and might have unexpected behavior."
    ),
    (e[t] = n),
    r &&
      r.q &&
      r.q.forEach(function (o) {
        return Ut(o, "onReady callback threw an error:")();
      });
}
function sn(e, t) {
  t.silentMultipleInit || E.error("".concat(e, " is already initialized."));
}
function Q(e, t, n, r, o) {
  return mt(e, t, [n], r, o);
}
function mt(e, t, n, r, o) {
  var i = o === void 0 ? {} : o,
    a = i.once,
    u = i.capture,
    f = i.passive,
    s = h(function (m) {
      (!m.isTrusted && !m.__ddIsTrusted && !e.allowUntrustedEvents) ||
        (a && v(), r(m));
    }),
    c = f ? { capture: u, passive: f } : u,
    d =
      window.EventTarget && t instanceof EventTarget
        ? window.EventTarget.prototype
        : t,
    l = re(d, "addEventListener");
  n.forEach(function (m) {
    return l.call(t, m, s, c);
  });
  function v() {
    var m = re(d, "removeEventListener");
    n.forEach(function (p) {
      return m.call(t, p, s, c);
    });
  }
  return { stop: v };
}
var Ue = {
  intervention: "intervention",
  deprecation: "deprecation",
  cspViolation: "csp_violation",
};
function Lo(e, t) {
  var n = [];
  X(t, Ue.cspViolation) && n.push(Io(e));
  var r = t.filter(function (o) {
    return o !== Ue.cspViolation;
  });
  return r.length && n.push(Ao(r)), Yt.apply(void 0, n);
}
function Ao(e) {
  return new _(function (t) {
    if (window.ReportingObserver) {
      var n = h(function (o, i) {
          return o.forEach(function (a) {
            return t.notify(ko(a));
          });
        }),
        r = new window.ReportingObserver(n, { types: e, buffered: !0 });
      return (
        r.observe(),
        function () {
          r.disconnect();
        }
      );
    }
  });
}
function Io(e) {
  return new _(function (t) {
    var n = Q(e, document, "securitypolicyviolation", function (r) {
      t.notify(No(r));
    }).stop;
    return n;
  });
}
function ko(e) {
  var t = e.type,
    n = e.body;
  return un({
    type: n.id,
    message: "".concat(t, ": ").concat(n.message),
    originalError: e,
    stack: cn(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber),
  });
}
function No(e) {
  var t = "'"
    .concat(e.blockedURI, "' blocked by '")
    .concat(e.effectiveDirective, "' directive");
  return un({
    type: e.effectiveDirective,
    message: "".concat(Ue.cspViolation, ": ").concat(t),
    originalError: e,
    csp: { disposition: e.disposition },
    stack: cn(
      e.effectiveDirective,
      e.originalPolicy
        ? ""
            .concat(t, ' of the policy "')
            .concat(Qn(e.originalPolicy, 100, "..."), '"')
        : "no policy",
      e.sourceFile,
      e.lineNumber,
      e.columnNumber
    ),
  });
}
function un(e) {
  return O({ startClocks: B(), source: T.REPORT, handling: "unhandled" }, e);
}
function cn(e, t, n, r, o) {
  return n
    ? Z({
        name: e,
        message: t,
        stack: [{ func: "?", url: n, line: r ?? void 0, column: o ?? void 0 }],
      })
    : void 0;
}
function fn(e, t) {
  var n = window.__ddBrowserSdkExtensionCallback;
  n && n({ type: e, payload: t });
}
function Pe(e, t, n) {
  if ((n === void 0 && (n = Mo()), t === void 0)) return e;
  if (typeof t != "object" || t === null) return t;
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    var r =
      t.flags ||
      [
        t.global ? "g" : "",
        t.ignoreCase ? "i" : "",
        t.multiline ? "m" : "",
        t.sticky ? "y" : "",
        t.unicode ? "u" : "",
      ].join("");
    return new RegExp(t.source, r);
  }
  if (!n.hasAlreadyBeenSeen(t)) {
    if (Array.isArray(t)) {
      for (var o = Array.isArray(e) ? e : [], i = 0; i < t.length; ++i)
        o[i] = Pe(o[i], t[i], n);
      return o;
    }
    var a = dt(e) === "object" ? e : {};
    for (var u in t)
      Object.prototype.hasOwnProperty.call(t, u) && (a[u] = Pe(a[u], t[u], n));
    return a;
  }
}
function dn(e) {
  return Pe(void 0, e);
}
function ie() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n, r = 0, o = e; r < o.length; r++) {
    var i = o[r];
    i != null && (n = Pe(n, i));
  }
  return n;
}
function Mo() {
  if (typeof WeakSet < "u") {
    var e = new WeakSet();
    return {
      hasAlreadyBeenSeen: function (n) {
        var r = e.has(n);
        return r || e.add(n), r;
      },
    };
  }
  var t = [];
  return {
    hasAlreadyBeenSeen: function (n) {
      var r = t.indexOf(n) >= 0;
      return r || t.push(n), r;
    },
  };
}
function Uo() {
  var e,
    t = window.navigator;
  return {
    status: t.onLine ? "connected" : "not_connected",
    interfaces:
      t.connection && t.connection.type ? [t.connection.type] : void 0,
    effective_type:
      (e = t.connection) === null || e === void 0 ? void 0 : e.effectiveType,
  };
}
function Po(e) {
  var t = new Set();
  return (
    e.forEach(function (n) {
      return t.add(n);
    }),
    it(t)
  );
}
function ln(e, t) {
  var n = e.indexOf(t);
  n >= 0 && e.splice(n, 1);
}
var Bo = 500;
function vn() {
  var e = [],
    t = function (o) {
      var i = e.push(o);
      i > Bo && e.splice(0, 1);
    },
    n = function (o) {
      ln(e, o);
    },
    r = function (o) {
      e.forEach(function (i) {
        return i(o);
      }),
        (e.length = 0);
    };
  return { add: t, remove: n, drain: r };
}
var J = { log: "log", configuration: "configuration", usage: "usage" },
  Do = [
    "https://www.datadoghq-browser-agent.com",
    "https://www.datad0g-browser-agent.com",
    "https://d3uc069fcn7uxw.cloudfront.net",
    "https://d20xtzwzcl0ceb.cloudfront.net",
    "http://localhost",
    "<anonymous>",
  ],
  Fo = [Dr],
  pn = vn(),
  se = function (e) {
    pn.add(function () {
      return se(e);
    });
  };
function Go(e, t) {
  var n,
    r,
    o = new _(),
    i = new Set(),
    a = !X(Fo, t.site) && Te(t.telemetrySampleRate),
    u =
      ((n = {}),
      (n[J.log] = a),
      (n[J.configuration] = a && Te(t.telemetryConfigurationSampleRate)),
      (n[J.usage] = a && Te(t.telemetryUsageSampleRate)),
      n),
    f = jo();
  (se = function (c) {
    var d = $(c);
    if (u[c.type] && i.size < t.maxTelemetryEventsPerPage && !i.has(d)) {
      var l = s(e, c, f);
      o.notify(l), fn("telemetry", l), i.add(d);
    }
  }),
    Vn(mn);
  function s(c, d, l) {
    return ie(
      {
        type: "telemetry",
        date: P(),
        service: c,
        version: "5.35.1",
        source: "browser",
        _dd: { format_version: 2 },
        telemetry: ie(d, {
          runtime_env: l,
          connectivity: Uo(),
          sdk_setup: "npm",
        }),
        experimental_features: it(ir()),
      },
      r !== void 0 ? r() : {}
    );
  }
  return {
    setContextProvider: function (c) {
      r = c;
    },
    observable: o,
    enabled: a,
  };
}
function jo() {
  return {
    is_local_file: window.location.protocol === "file:",
    is_worker: "WorkerGlobalScope" in self,
  };
}
function Ho() {
  pn.drain();
}
function Yo(e) {
  return e.site === Pr;
}
function gn(e, t) {
  Qe(y.debug, e, t), se(O({ type: J.log, message: e, status: "debug" }, t));
}
function mn(e, t) {
  se(O({ type: J.log, status: "error" }, qo(e), t));
}
function zo(e) {
  se({ type: J.configuration, configuration: e });
}
function Ko(e) {
  se({ type: J.usage, usage: e });
}
function qo(e) {
  if (F(e)) {
    var t = N(e);
    return { error: { kind: t.name, stack: Z(Jo(t)) }, message: t.message };
  }
  return {
    error: { stack: nn },
    message: "".concat("Uncaught", " ").concat($(e)),
  };
}
function Jo(e) {
  return (
    (e.stack = e.stack.filter(function (t) {
      return (
        !t.url ||
        Do.some(function (n) {
          return at(t.url, n);
        })
      );
    })),
    e
  );
}
var Ce = 1 / 0,
  Vo = V;
function Xo(e) {
  var t = e.expireDelay,
    n = e.maxEntries,
    r = [],
    o = ut(function () {
      return i();
    }, Vo);
  function i() {
    for (var l = Ae() - t; r.length > 0 && r[r.length - 1].endTime < l; )
      r.pop();
  }
  function a(l, v) {
    var m = {
      value: l,
      startTime: v,
      endTime: Ce,
      remove: function () {
        ln(r, m);
      },
      close: function (p) {
        m.endTime = p;
      },
    };
    return n && r.length >= n && r.pop(), r.unshift(m), m;
  }
  function u(l, v) {
    l === void 0 && (l = Ce), v === void 0 && (v = { returnInactive: !1 });
    for (var m = 0, p = r; m < p.length; m++) {
      var S = p[m];
      if (S.startTime <= l) {
        if (v.returnInactive || l <= S.endTime) return S.value;
        break;
      }
    }
  }
  function f(l) {
    var v = r[0];
    v && v.endTime === Ce && v.close(l);
  }
  function s(l, v) {
    l === void 0 && (l = Ce), v === void 0 && (v = 0);
    var m = Gn(l, v);
    return r
      .filter(function (p) {
        return p.startTime <= m && l <= p.endTime;
      })
      .map(function (p) {
        return p.value;
      });
  }
  function c() {
    r = [];
  }
  function d() {
    Ht(o);
  }
  return { add: a, find: u, closeActive: f, findAll: s, reset: c, stop: d };
}
var Wo = V,
  $o = lt;
function Zo(e, t, n, r) {
  var o = new _(),
    i = new _(),
    a = kr(e.sessionStoreStrategyType, t, n),
    u = Xo({ expireDelay: $o });
  a.renewObservable.subscribe(function () {
    u.add(f(), Ae()), o.notify();
  }),
    a.expireObservable.subscribe(function () {
      i.notify(), u.closeActive(Ae());
    }),
    a.expandOrRenewSession(),
    u.add(f(), Dn().relative),
    r.observable.subscribe(function () {
      r.isGranted() ? a.expandOrRenewSession() : a.expire();
    }),
    Qo(e, function () {
      r.isGranted() && a.expandOrRenewSession();
    }),
    ei(e, function () {
      return a.expandSession();
    }),
    ti(e, function () {
      return a.restartSession();
    });
  function f() {
    return {
      id: a.getSession().id,
      trackingType: a.getSession()[t],
      isReplayForced: !!a.getSession().forcedReplay,
      anonymousId: a.getSession().anonymousId,
    };
  }
  return {
    findSession: function (s, c) {
      return u.find(s, c);
    },
    renewObservable: o,
    expireObservable: i,
    sessionStateUpdateObservable: a.sessionStateUpdateObservable,
    expire: a.expire,
    updateSessionState: a.updateSessionState,
  };
}
function Qo(e, t) {
  mt(e, window, ["click", "touchstart", "keydown", "scroll"], t, {
    capture: !0,
    passive: !0,
  }).stop;
}
function ei(e, t) {
  var n = function () {
    document.visibilityState === "visible" && t();
  };
  Q(e, document, "visibilitychange", n).stop, ut(n, Wo);
}
function ti(e, t) {
  Q(e, window, "resume", t, { capture: !0 }).stop;
}
function bn(e) {
  return e >= 500;
}
function ni(e) {
  try {
    return e.clone();
  } catch {
    return;
  }
}
var ri = 80 * I,
  oi = 32,
  hn = 3 * Dt,
  ii = V,
  Sn = ge;
function yn(e, t, n, r, o) {
  t.transportStatus === 0 &&
  t.queuedPayloads.size() === 0 &&
  t.bandwidthMonitor.canHandle(e)
    ? _n(e, t, n, {
        onSuccess: function () {
          return On(0, t, n, r, o);
        },
        onFailure: function () {
          t.queuedPayloads.enqueue(e), En(t, n, r, o);
        },
      })
    : t.queuedPayloads.enqueue(e);
}
function En(e, t, n, r) {
  e.transportStatus === 2 &&
    me(function () {
      var o = e.queuedPayloads.first();
      _n(o, e, t, {
        onSuccess: function () {
          e.queuedPayloads.dequeue(),
            (e.currentBackoffTime = Sn),
            On(1, e, t, n, r);
        },
        onFailure: function () {
          (e.currentBackoffTime = Math.min(ii, e.currentBackoffTime * 2)),
            En(e, t, n, r);
        },
      });
    }, e.currentBackoffTime);
}
function _n(e, t, n, r) {
  var o = r.onSuccess,
    i = r.onFailure;
  t.bandwidthMonitor.add(e),
    n(e, function (a) {
      t.bandwidthMonitor.remove(e),
        ai(a)
          ? ((t.transportStatus =
              t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2),
            (e.retry = {
              count: e.retry ? e.retry.count + 1 : 1,
              lastFailureStatus: a.status,
            }),
            i())
          : ((t.transportStatus = 0), o());
    });
}
function On(e, t, n, r, o) {
  e === 0 &&
    t.queuedPayloads.isFull() &&
    !t.queueFullReported &&
    (o({
      message: "Reached max "
        .concat(r, " events size queued for upload: ")
        .concat(hn / Dt, "MiB"),
      source: T.AGENT,
      startClocks: B(),
    }),
    (t.queueFullReported = !0));
  var i = t.queuedPayloads;
  for (t.queuedPayloads = Cn(); i.size() > 0; ) yn(i.dequeue(), t, n, r, o);
}
function ai(e) {
  return (
    e.type !== "opaque" &&
    ((e.status === 0 && !navigator.onLine) ||
      e.status === 408 ||
      e.status === 429 ||
      bn(e.status))
  );
}
function si() {
  return {
    transportStatus: 0,
    currentBackoffTime: Sn,
    bandwidthMonitor: ui(),
    queuedPayloads: Cn(),
    queueFullReported: !1,
  };
}
function Cn() {
  var e = [];
  return {
    bytesCount: 0,
    enqueue: function (t) {
      this.isFull() || (e.push(t), (this.bytesCount += t.bytesCount));
    },
    first: function () {
      return e[0];
    },
    dequeue: function () {
      var t = e.shift();
      return t && (this.bytesCount -= t.bytesCount), t;
    },
    size: function () {
      return e.length;
    },
    isFull: function () {
      return this.bytesCount >= hn;
    },
  };
}
function ui() {
  return {
    ongoingRequestCount: 0,
    ongoingByteCount: 0,
    canHandle: function (e) {
      return (
        this.ongoingRequestCount === 0 ||
        (this.ongoingByteCount + e.bytesCount <= ri &&
          this.ongoingRequestCount < oi)
      );
    },
    add: function (e) {
      (this.ongoingRequestCount += 1), (this.ongoingByteCount += e.bytesCount);
    },
    remove: function (e) {
      (this.ongoingRequestCount -= 1), (this.ongoingByteCount -= e.bytesCount);
    },
  };
}
function ci(e, t, n) {
  var r = si(),
    o = function (i, a) {
      return li(e, t, i, a);
    };
  return {
    send: function (i) {
      yn(i, r, o, e.trackType, n);
    },
    sendOnExit: function (i) {
      fi(e, t, i);
    },
  };
}
function fi(e, t, n) {
  var r = !!navigator.sendBeacon && n.bytesCount < t;
  if (r)
    try {
      var o = e.build("beacon", n),
        i = navigator.sendBeacon(o, n.data);
      if (i) return;
    } catch (u) {
      di(u);
    }
  var a = e.build("xhr", n);
  tt(a, n.data);
}
var wt = !1;
function di(e) {
  wt || ((wt = !0), mn(e));
}
function li(e, t, n, r) {
  var o = vi() && n.bytesCount < t;
  if (o) {
    var i = e.build("fetch", n);
    fetch(i, {
      method: "POST",
      body: n.data,
      keepalive: !0,
      mode: "cors",
    }).then(
      h(function (u) {
        return r == null ? void 0 : r({ status: u.status, type: u.type });
      }),
      h(function () {
        var u = e.build("xhr", n);
        tt(u, n.data, r);
      })
    );
  } else {
    var a = e.build("xhr", n);
    tt(a, n.data, r);
  }
}
function vi() {
  try {
    return window.Request && "keepalive" in new Request("http://a");
  } catch {
    return !1;
  }
}
function tt(e, t, n) {
  var r = new XMLHttpRequest();
  r.open("POST", e, !0),
    t instanceof Blob && r.setRequestHeader("Content-Type", t.type),
    Q(
      { allowUntrustedEvents: !0 },
      r,
      "loadend",
      function () {
        n == null || n({ status: r.status });
      },
      { once: !0 }
    ),
    r.send(t);
}
function bt() {
  var e = pi();
  if (e)
    return {
      getCapabilities: function () {
        var t;
        return JSON.parse(
          ((t = e.getCapabilities) === null || t === void 0
            ? void 0
            : t.call(e)) || "[]"
        );
      },
      getPrivacyLevel: function () {
        var t;
        return (t = e.getPrivacyLevel) === null || t === void 0
          ? void 0
          : t.call(e);
      },
      getAllowedWebViewHosts: function () {
        return JSON.parse(e.getAllowedWebViewHosts());
      },
      send: function (t, n, r) {
        var o = r ? { id: r } : void 0;
        e.send(JSON.stringify({ eventType: t, event: n, view: o }));
      },
    };
}
function Be(e) {
  var t;
  e === void 0 &&
    (e = (t = D().location) === null || t === void 0 ? void 0 : t.hostname);
  var n = bt();
  return (
    !!n &&
    n.getAllowedWebViewHosts().some(function (r) {
      return e === r || Kn(e, ".".concat(r));
    })
  );
}
function pi() {
  return D().DatadogEventBridge;
}
var xe = {
  HIDDEN: "visibility_hidden",
  UNLOADING: "before_unload",
  PAGEHIDE: "page_hide",
  FROZEN: "page_frozen",
};
function gi(e) {
  return new _(function (t) {
    var n = mt(
        e,
        window,
        ["visibilitychange", "freeze"],
        function (o) {
          o.type === "visibilitychange" && document.visibilityState === "hidden"
            ? t.notify({ reason: xe.HIDDEN })
            : o.type === "freeze" && t.notify({ reason: xe.FROZEN });
        },
        { capture: !0 }
      ).stop,
      r = Q(e, window, "beforeunload", function () {
        t.notify({ reason: xe.UNLOADING });
      }).stop;
    return function () {
      n(), r();
    };
  });
}
function mi(e) {
  return X(Ie(xe), e);
}
function bi(e) {
  var t = e.encoder,
    n = e.request,
    r = e.flushController,
    o = e.messageBytesLimit,
    i = {},
    a = r.flushObservable.subscribe(function (l) {
      return d(l);
    });
  function u(l, v, m) {
    r.notifyBeforeAddMessage(v),
      m !== void 0
        ? ((i[m] = l), r.notifyAfterAddMessage())
        : t.write(
            t.isEmpty
              ? l
              : `
`.concat(l),
            function (p) {
              r.notifyAfterAddMessage(p - v);
            }
          );
  }
  function f(l) {
    return l !== void 0 && i[l] !== void 0;
  }
  function s(l) {
    var v = i[l];
    delete i[l];
    var m = t.estimateEncodedBytesCount(v);
    r.notifyAfterRemoveMessage(m);
  }
  function c(l, v) {
    var m = $(l),
      p = t.estimateEncodedBytesCount(m);
    if (p >= o) {
      E.warn(
        "Discarded a message whose size was bigger than the maximum allowed size "
          .concat(o, "KB. ")
          .concat(Ge, " ")
          .concat(Mt, "/#technical-limitations")
      );
      return;
    }
    f(v) && s(v), u(m, p, v);
  }
  function d(l) {
    var v = Ie(i).join(`
`);
    i = {};
    var m = mi(l.reason),
      p = m ? n.sendOnExit : n.send;
    if (m && t.isAsync) {
      var S = t.finishSync();
      S.outputBytesCount && p(Rt(S));
      var C = [S.pendingData, v].filter(Boolean).join(`
`);
      C && p({ data: C, bytesCount: ot(C) });
    } else
      v &&
        t.write(
          t.isEmpty
            ? v
            : `
`.concat(v)
        ),
        t.finish(function (L) {
          p(Rt(L));
        });
  }
  return { flushController: r, add: c, upsert: c, stop: a.unsubscribe };
}
function Rt(e) {
  var t;
  return (
    typeof e.output == "string"
      ? (t = e.output)
      : (t = new Blob([e.output], { type: "text/plain" })),
    { data: t, bytesCount: e.outputBytesCount, encoding: e.encoding }
  );
}
function hi(e) {
  var t = e.messagesLimit,
    n = e.bytesLimit,
    r = e.durationLimit,
    o = e.pageExitObservable,
    i = e.sessionExpireObservable,
    a = o.subscribe(function (p) {
      return d(p.reason);
    }),
    u = i.subscribe(function () {
      return d("session_expire");
    }),
    f = new _(function () {
      return function () {
        a.unsubscribe(), u.unsubscribe();
      };
    }),
    s = 0,
    c = 0;
  function d(p) {
    if (c !== 0) {
      var S = c,
        C = s;
      (c = 0),
        (s = 0),
        m(),
        f.notify({ reason: p, messagesCount: S, bytesCount: C });
    }
  }
  var l;
  function v() {
    l === void 0 &&
      (l = me(function () {
        d("duration_limit");
      }, r));
  }
  function m() {
    jt(l), (l = void 0);
  }
  return {
    flushObservable: f,
    get messagesCount() {
      return c;
    },
    notifyBeforeAddMessage: function (p) {
      s + p >= n && d("bytes_limit"), (c += 1), (s += p), v();
    },
    notifyAfterAddMessage: function (p) {
      p === void 0 && (p = 0),
        (s += p),
        c >= t ? d("messages_limit") : s >= n && d("bytes_limit");
    },
    notifyAfterRemoveMessage: function (p) {
      (s -= p), (c -= 1), c === 0 && m();
    },
  };
}
function Tn(e, t, n, r, o, i, a) {
  a === void 0 && (a = bi);
  var u = s(e, t),
    f = n && s(e, n);
  function s(c, d) {
    var l = d.endpoint,
      v = d.encoder;
    return a({
      encoder: v,
      request: ci(l, c.batchBytesLimit, r),
      flushController: hi({
        messagesLimit: c.batchMessagesLimit,
        bytesLimit: c.batchBytesLimit,
        durationLimit: c.flushTimeout,
        pageExitObservable: o,
        sessionExpireObservable: i,
      }),
      messageBytesLimit: c.messageBytesLimit,
    });
  }
  return {
    flushObservable: u.flushController.flushObservable,
    add: function (c, d) {
      d === void 0 && (d = !0),
        u.add(c),
        f && d && f.add(n.transformMessage ? n.transformMessage(c) : c);
    },
    upsert: function (c, d) {
      u.upsert(c, d),
        f && f.upsert(n.transformMessage ? n.transformMessage(c) : c, d);
    },
    stop: function () {
      u.stop(), f && f.stop();
    },
  };
}
function De() {
  var e = "",
    t = 0;
  return {
    isAsync: !1,
    get isEmpty() {
      return !e;
    },
    write: function (n, r) {
      var o = ot(n);
      (t += o), (e += n), r && r(o);
    },
    finish: function (n) {
      n(this.finishSync());
    },
    finishSync: function () {
      var n = {
        output: e,
        outputBytesCount: t,
        rawBytesCount: t,
        pendingData: "",
      };
      return (e = ""), (t = 0), n;
    },
    estimateEncodedBytesCount: function (n) {
      return n.length;
    },
  };
}
var Si = (function () {
  function e() {
    this.callbacks = {};
  }
  return (
    (e.prototype.notify = function (t, n) {
      var r = this.callbacks[t];
      r &&
        r.forEach(function (o) {
          return o(n);
        });
    }),
    (e.prototype.subscribe = function (t, n) {
      var r = this;
      return (
        this.callbacks[t] || (this.callbacks[t] = []),
        this.callbacks[t].push(n),
        {
          unsubscribe: function () {
            r.callbacks[t] = r.callbacks[t].filter(function (o) {
              return n !== o;
            });
          },
        }
      );
    }),
    e
  );
})();
function yi(e, t, n) {
  var r = 0,
    o = !1;
  return {
    isLimitReached: function () {
      if (
        (r === 0 &&
          me(function () {
            r = 0;
          }, V),
        (r += 1),
        r <= t || o)
      )
        return (o = !1), !1;
      if (r === t + 1) {
        o = !0;
        try {
          n({
            message: "Reached max number of "
              .concat(e, "s by minute: ")
              .concat(t),
            source: T.AGENT,
            startClocks: B(),
          });
        } finally {
          o = !1;
        }
      }
      return !0;
    },
  };
}
var We,
  ht = new WeakMap();
function Ei(e) {
  return We || (We = _i(e)), We;
}
function _i(e) {
  return new _(function (t) {
    var n = q(XMLHttpRequest.prototype, "open", Oi).stop,
      r = q(
        XMLHttpRequest.prototype,
        "send",
        function (i) {
          Ci(i, e, t);
        },
        { computeHandlingStack: !0 }
      ).stop,
      o = q(XMLHttpRequest.prototype, "abort", Ti).stop;
    return function () {
      n(), r(), o();
    };
  });
}
function Oi(e) {
  var t = e.target,
    n = e.parameters,
    r = n[0],
    o = n[1];
  ht.set(t, {
    state: "open",
    method: String(r).toUpperCase(),
    url: gt(String(o)),
  });
}
function Ci(e, t, n) {
  var r = e.target,
    o = e.handlingStack,
    i = ht.get(r);
  if (i) {
    var a = i;
    (a.state = "start"),
      (a.startClocks = B()),
      (a.isAborted = !1),
      (a.xhr = r),
      (a.handlingStack = o);
    var u = !1,
      f = q(r, "onreadystatechange", function () {
        r.readyState === XMLHttpRequest.DONE && s();
      }).stop,
      s = function () {
        if ((c(), f(), !u)) {
          u = !0;
          var d = i;
          (d.state = "complete"),
            (d.duration = Fn(a.startClocks.timeStamp, P())),
            (d.status = r.status),
            n.notify(qn(d));
        }
      },
      c = Q(t, r, "loadend", s).stop;
    n.notify(a);
  }
}
function Ti(e) {
  var t = e.target,
    n = ht.get(t);
  n && (n.isAborted = !0);
}
var $e;
function wn() {
  return $e || ($e = wi()), $e;
}
function wi() {
  return new _(function (e) {
    if (window.fetch) {
      var t = q(
        window,
        "fetch",
        function (n) {
          return Ri(n, e);
        },
        { computeHandlingStack: !0 }
      ).stop;
      return t;
    }
  });
}
function Ri(e, t) {
  var n = e.parameters,
    r = e.onPostCall,
    o = e.handlingStack,
    i = n[0],
    a = n[1],
    u = a && a.method;
  u === void 0 && i instanceof Request && (u = i.method);
  var f = u !== void 0 ? String(u).toUpperCase() : "GET",
    s = i instanceof Request ? i.url : gt(String(i)),
    c = B(),
    d = {
      state: "start",
      init: a,
      input: i,
      method: f,
      startClocks: c,
      url: s,
      handlingStack: o,
    };
  t.notify(d),
    (n[0] = d.input),
    (n[1] = d.init),
    r(function (l) {
      return xi(t, l, d);
    });
}
function xi(e, t, n) {
  var r = n;
  function o(i) {
    (r.state = "resolve"), O(r, i), e.notify(r);
  }
  t.then(
    h(function (i) {
      o({ response: i, responseType: i.type, status: i.status, isAborted: !1 });
    }),
    h(function (i) {
      var a, u;
      o({
        status: 0,
        isAborted:
          ((u = (a = r.init) === null || a === void 0 ? void 0 : a.signal) ===
            null || u === void 0
            ? void 0
            : u.aborted) ||
          (i instanceof DOMException && i.code === DOMException.ABORT_ERR),
        error: i,
      });
    })
  );
}
var Ze = {};
function Li(e) {
  var t = e.map(function (n) {
    return Ze[n] || (Ze[n] = Ai(n)), Ze[n];
  });
  return Yt.apply(void 0, t);
}
function Ai(e) {
  return new _(function (t) {
    var n = A[e];
    return (
      (A[e] = function () {
        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
        n.apply(console, r);
        var i = je();
        de(function () {
          t.notify(Ii(r, e, i));
        });
      }),
      function () {
        A[e] = n;
      }
    );
  });
}
function Ii(e, t, n) {
  var r = e
      .map(function (a) {
        return ki(a);
      })
      .join(" "),
    o;
  if (t === y.error) {
    var i = Yn(e, F);
    o = {
      stack: i ? Z(N(i)) : void 0,
      fingerprint: on(i),
      causes: i ? an(i, "console") : void 0,
      startClocks: B(),
      message: r,
      source: T.CONSOLE,
      handling: "handled",
      handlingStack: n,
    };
  }
  return { api: t, message: r, error: o, handlingStack: n };
}
function ki(e) {
  return typeof e == "string" ? k(e) : F(e) ? tn(N(e)) : $(k(e), void 0, 2);
}
function nt(e) {
  var t = {},
    n = new _(),
    r = {
      getContext: function () {
        return dn(t);
      },
      setContext: function (o) {
        dt(o) === "object"
          ? ((t = k(o)), e == null || e.updateCustomerData(t))
          : r.clearContext(),
          n.notify();
      },
      setContextProperty: function (o, i) {
        (t[o] = k(i)), e == null || e.updateCustomerData(t), n.notify();
      },
      removeContextProperty: function (o) {
        delete t[o], e == null || e.updateCustomerData(t), n.notify();
      },
      clearContext: function () {
        (t = {}), e == null || e.resetCustomerData(), n.notify();
      },
      changeObservable: n,
    };
  return r;
}
var Ni = "_dd_c",
  Mi = [];
function xt(e, t, n, r) {
  var o = Ui(n, r);
  Mi.push(
    Q(e, window, "storage", function (f) {
      var s = f.key;
      o === s && i();
    })
  ),
    t.changeObservable.subscribe(a),
    t.setContext(ie(u(), t.getContext()));
  function i() {
    t.setContext(u());
  }
  function a() {
    localStorage.setItem(o, JSON.stringify(t.getContext()));
  }
  function u() {
    var f = localStorage.getItem(o);
    return f !== null ? JSON.parse(f) : {};
  }
}
function Ui(e, t) {
  return "".concat(Ni, "_").concat(e, "_").concat(t);
}
var Pi = 3 * I,
  Bi = 16 * I,
  Di = 200;
function Fi(e) {
  e === void 0 && (e = 2);
  var t = new Map(),
    n = !1;
  function r(o) {
    if ((o === void 0 && (o = 0), !(n || e === 0))) {
      var i = e === 2 ? Pi : Bi,
        a = o;
      t.forEach(function (u) {
        a += u.getBytesCount();
      }),
        a > i && (Gi(i), (n = !0));
    }
  }
  return {
    createDetachedTracker: function () {
      var o = Lt(function () {
        return r(o.getBytesCount());
      });
      return o;
    },
    getOrCreateTracker: function (o) {
      return t.has(o) || t.set(o, Lt(r)), t.get(o);
    },
    setCompressionStatus: function (o) {
      e === 0 && ((e = o), r());
    },
    getCompressionStatus: function () {
      return e;
    },
    stop: function () {
      t.forEach(function (o) {
        return o.stop();
      }),
        t.clear();
    },
  };
}
function Lt(e) {
  var t = 0,
    n = zt(function (a) {
      (t = ot($(a))), e();
    }, Di),
    r = n.throttled,
    o = n.cancel,
    i = function () {
      o(), (t = 0);
    };
  return {
    updateCustomerData: function (a) {
      st(a) ? i() : r(a);
    },
    resetCustomerData: i,
    getBytesCount: function () {
      return t;
    },
    stop: function () {
      o();
    },
  };
}
function Gi(e) {
  E.warn(
    "Customer data exceeds the recommended "
      .concat(e / I, "KiB threshold. ")
      .concat(Ge, " ")
      .concat(Mt, "/#customer-data-exceeds-the-recommended-threshold-warning")
  );
}
function ji(e, t, n) {
  var r = e.getReader(),
    o = [],
    i = 0;
  a();
  function a() {
    r.read().then(
      h(function (f) {
        if (f.done) {
          u();
          return;
        }
        o.push(f.value), (i += f.value.length), i > n.bytesLimit ? u() : a();
      }),
      h(function (f) {
        return t(f);
      })
    );
  }
  function u() {
    r.cancel().catch(U);
    var f, s;
    {
      var c;
      if (o.length === 1) c = o[0];
      else {
        c = new Uint8Array(i);
        var d = 0;
        o.forEach(function (l) {
          c.set(l, d), (d += l.length);
        });
      }
      (f = c.slice(0, n.bytesLimit)), (s = c.length > n.bytesLimit);
    }
    t(void 0, f, s);
  }
}
var Hi = "datadog-synthetics-public-id",
  Yi = "datadog-synthetics-result-id",
  zi = "datadog-synthetics-injects-rum";
function Rn() {
  return !!(window._DATADOG_SYNTHETICS_INJECTS_RUM || K(zi));
}
function Ki() {
  var e = window._DATADOG_SYNTHETICS_PUBLIC_ID || K(Hi);
  return typeof e == "string" ? e : void 0;
}
function qi() {
  var e = window._DATADOG_SYNTHETICS_RESULT_ID || K(Yi);
  return typeof e == "string" ? e : void 0;
}
var w;
function Fe(e, t, n) {
  var r = n.getHandler(),
    o = Array.isArray(r) ? r : [r];
  return At[e] >= At[n.getLevel()] && X(o, t);
}
var g = {
    ok: "ok",
    debug: "debug",
    info: "info",
    notice: "notice",
    warn: "warn",
    error: "error",
    critical: "critical",
    alert: "alert",
    emerg: "emerg",
  },
  At =
    ((w = {}),
    (w[g.ok] = 0),
    (w[g.debug] = 1),
    (w[g.info] = 2),
    (w[g.notice] = 4),
    (w[g.warn] = 5),
    (w[g.error] = 6),
    (w[g.critical] = 7),
    (w[g.alert] = 8),
    (w[g.emerg] = 9),
    w);
function He(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.includeMessage,
    o = r === void 0 ? !1 : r;
  return {
    stack: e.stack,
    kind: e.type,
    message: o ? e.message : void 0,
    causes: e.causes,
    fingerprint: e.fingerprint,
    handling: e.handling,
  };
}
var Ji = function (e, t, n, r) {
    var o = arguments.length,
      i =
        o < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, n))
          : r,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      i = Reflect.decorate(e, t, n, r);
    else
      for (var u = e.length - 1; u >= 0; u--)
        (a = e[u]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
    return o > 3 && i && Object.defineProperty(t, n, i), i;
  },
  pe = { console: "console", http: "http" },
  Vi = Object.keys(g),
  x = (function () {
    function e(t, n, r, o, i, a) {
      o === void 0 && (o = pe.http),
        i === void 0 && (i = g.debug),
        a === void 0 && (a = {}),
        (this.handleLogStrategy = t),
        (this.handlerType = o),
        (this.level = i),
        (this.contextManager = nt(n)),
        this.contextManager.setContext(a),
        r && this.contextManager.setContextProperty("logger", { name: r });
    }
    return (
      (e.prototype.logImplementation = function (t, n, r, o, i) {
        r === void 0 && (r = g.info);
        var a = k(n),
          u;
        if (o != null) {
          var f = rn({
            stackTrace: F(o) ? N(o) : void 0,
            originalError: o,
            nonErrorPrefix: "Provided",
            source: T.LOGGER,
            handling: "handled",
            startClocks: B(),
          });
          u = ie({ error: He(f, { includeMessage: !0 }) }, a);
        } else u = a;
        this.handleLogStrategy(
          { message: k(t), context: u, status: r },
          this,
          i
        );
      }),
      (e.prototype.log = function (t, n, r, o) {
        r === void 0 && (r = g.info);
        var i;
        Fe(r, pe.http, this) && (i = je()),
          this.logImplementation(t, n, r, o, i);
      }),
      (e.prototype.setContext = function (t) {
        this.contextManager.setContext(t);
      }),
      (e.prototype.getContext = function () {
        return this.contextManager.getContext();
      }),
      (e.prototype.setContextProperty = function (t, n) {
        this.contextManager.setContextProperty(t, n);
      }),
      (e.prototype.removeContextProperty = function (t) {
        this.contextManager.removeContextProperty(t);
      }),
      (e.prototype.clearContext = function () {
        this.contextManager.clearContext();
      }),
      (e.prototype.setHandler = function (t) {
        this.handlerType = t;
      }),
      (e.prototype.getHandler = function () {
        return this.handlerType;
      }),
      (e.prototype.setLevel = function (t) {
        this.level = t;
      }),
      (e.prototype.getLevel = function () {
        return this.level;
      }),
      Ji([Wn], e.prototype, "logImplementation", null),
      e
    );
  })();
x.prototype.ok = M(g.ok);
x.prototype.debug = M(g.debug);
x.prototype.info = M(g.info);
x.prototype.notice = M(g.notice);
x.prototype.warn = M(g.warn);
x.prototype.error = M(g.error);
x.prototype.critical = M(g.critical);
x.prototype.alert = M(g.alert);
x.prototype.emerg = M(g.emerg);
function M(e) {
  return function (t, n, r) {
    var o;
    Fe(e, pe.http, this) && (o = je()), this.logImplementation(t, n, e, r, o);
  };
}
function Xi(e, t) {
  return {
    view: { referrer: document.referrer, url: window.location.href },
    context: e.getContext(),
    user: t.getContext(),
  };
}
var Wi = 32 * I;
function $i(e) {
  e.usePciIntake === !0 &&
    e.site &&
    e.site !== "datadoghq.com" &&
    E.warn(
      "PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used."
    );
  var t = Qr(e),
    n = It(e.forwardConsoleLogs, Ie(y), "Forward Console Logs"),
    r = It(e.forwardReports, Ie(Ue), "Forward Reports");
  if (!(!t || !n || !r))
    return (
      e.forwardErrorsToLogs && !X(n, y.error) && n.push(y.error),
      O(
        {
          forwardErrorsToLogs: e.forwardErrorsToLogs !== !1,
          forwardConsoleLogs: n,
          forwardReports: r,
          requestErrorResponseLengthLimit: Wi,
          sendLogsAfterSessionExpiration: !!e.sendLogsAfterSessionExpiration,
        },
        t
      )
    );
}
function It(e, t, n) {
  if (e === void 0) return [];
  if (
    !(
      e === "all" ||
      (Array.isArray(e) &&
        e.every(function (r) {
          return X(t, r);
        }))
    )
  ) {
    E.error(
      ""
        .concat(n, ' should be "all" or an array with allowed values "')
        .concat(t.join('", "'), '"')
    );
    return;
  }
  return e === "all" ? t : Po(e);
}
function Zi(e) {
  var t = eo(e);
  return O(
    {
      forward_errors_to_logs: e.forwardErrorsToLogs,
      forward_console_logs: e.forwardConsoleLogs,
      forward_reports: e.forwardReports,
      use_pci_intake: e.usePciIntake,
      send_logs_after_session_expiration: e.sendLogsAfterSessionExpiration,
    },
    t
  );
}
function Qi(e, t, n) {
  var r = vn(),
    o,
    i,
    a = t.observable.subscribe(u);
  function u() {
    if (!(!i || !o || !t.isGranted())) {
      a.unsubscribe();
      var f = n(o, i);
      r.drain(f);
    }
  }
  return {
    init: function (f) {
      if (!f) {
        E.error("Missing configuration");
        return;
      }
      if ((rr(f.enableExperimentalFeatures), Be() && (f = ea(f)), (o = f), i)) {
        sn("DD_LOGS", f);
        return;
      }
      var s = $i(f);
      s && ((i = s), wn().subscribe(U), t.tryToInit(s.trackingConsent), u());
    },
    get initConfiguration() {
      return o;
    },
    getInternalContext: U,
    handleLog: function (f, s, c, d, l) {
      d === void 0 && (d = e()),
        l === void 0 && (l = P()),
        r.add(function (v) {
          return v.handleLog(f, s, c, d, l);
        });
    },
  };
}
function ea(e) {
  return O({}, e, { clientToken: "empty" });
}
var kt = "logs";
function ta(e) {
  var t = Fi(),
    n = nt(t.getOrCreateTracker(2)),
    r = nt(t.getOrCreateTracker(1)),
    o = Nr();
  function i() {
    return Xi(n, r);
  }
  var a = Qi(i, o, function (s, c) {
      s.storeContextsAcrossPages && (xt(c, n, kt, 2), xt(c, r, kt, 1));
      var d = e(s, c, i, o);
      return (a = na(s, d)), d;
    }),
    u = {},
    f = new x(function () {
      for (var s = [], c = 0; c < arguments.length; c++) s[c] = arguments[c];
      return a.handleLog.apply(a, s);
    }, t.createDetachedTracker());
  return Ro({
    logger: f,
    init: h(function (s) {
      return a.init(s);
    }),
    setTrackingConsent: h(function (s) {
      o.update(s), Ko({ feature: "set-tracking-consent", tracking_consent: s });
    }),
    getGlobalContext: h(function () {
      return n.getContext();
    }),
    setGlobalContext: h(function (s) {
      return n.setContext(s);
    }),
    setGlobalContextProperty: h(function (s, c) {
      return n.setContextProperty(s, c);
    }),
    removeGlobalContextProperty: h(function (s) {
      return n.removeContextProperty(s);
    }),
    clearGlobalContext: h(function () {
      return n.clearContext();
    }),
    createLogger: h(function (s, c) {
      return (
        c === void 0 && (c = {}),
        (u[s] = new x(
          function () {
            for (var d = [], l = 0; l < arguments.length; l++)
              d[l] = arguments[l];
            return a.handleLog.apply(a, d);
          },
          t.createDetachedTracker(),
          k(s),
          c.handler,
          c.level,
          k(c.context)
        )),
        u[s]
      );
    }),
    getLogger: h(function (s) {
      return u[s];
    }),
    getInitConfiguration: h(function () {
      return dn(a.initConfiguration);
    }),
    getInternalContext: h(function (s) {
      return a.getInternalContext(s);
    }),
    setUser: h(function (s) {
      ur(s) && r.setContext(yt(s));
    }),
    getUser: h(function () {
      return r.getContext();
    }),
    setUserProperty: h(function (s, c) {
      var d,
        l = yt(((d = {}), (d[s] = c), d))[s];
      r.setContextProperty(s, l);
    }),
    removeUserProperty: h(function (s) {
      return r.removeContextProperty(s);
    }),
    clearUser: h(function () {
      return r.clearContext();
    }),
  });
}
function na(e, t) {
  return O(
    {
      init: function (n) {
        sn("DD_LOGS", n);
      },
      initConfiguration: e,
    },
    t
  );
}
var ra = "logs";
function oa(e, t) {
  var n = Zo(
    e,
    ra,
    function (r) {
      return aa(e, r);
    },
    t
  );
  return {
    findTrackedSession: function (r, o) {
      o === void 0 && (o = { returnInactive: !1 });
      var i = n.findSession(r, o);
      return i && i.trackingType === "1" ? { id: i.id } : void 0;
    },
    expireObservable: n.expireObservable,
  };
}
function ia(e) {
  var t = xn(e) === "1",
    n = t ? {} : void 0;
  return {
    findTrackedSession: function () {
      return n;
    },
    expireObservable: new _(),
  };
}
function xn(e) {
  return Te(e.sessionSampleRate) ? "1" : "0";
}
function aa(e, t) {
  var n = sa(t) ? t : xn(e);
  return { trackingType: n, isTracked: n === "1" };
}
function sa(e) {
  return e === "0" || e === "1";
}
var Nt = !1;
function Le(e) {
  var t = window;
  if (Rn()) {
    var n = r(t.DD_RUM_SYNTHETICS);
    return (
      !n &&
        !Nt &&
        ((Nt = !0),
        gn("Logs sent before RUM is injected by the synthetics worker", {
          testId: Ki(),
          resultId: qi(),
        })),
      n
    );
  }
  return r(t.DD_RUM);
  function r(o) {
    if (o && o.getInternalContext) return o.getInternalContext(e);
  }
}
function ua(e, t, n, r, o) {
  var i = Vi.concat(["custom"]),
    a = {};
  i.forEach(function (u) {
    a[u] = yi(u, t.eventRateLimiterThreshold, o);
  }),
    n.subscribe(0, function (u) {
      var f,
        s,
        c = u.rawLogsEvent,
        d = u.messageContext,
        l = d === void 0 ? void 0 : d,
        v = u.savedCommonContext,
        m = v === void 0 ? void 0 : v,
        p = u.domainContext,
        S = jn(c.date),
        C = e.findTrackedSession(S);
      if (
        !(
          !C &&
          (!t.sendLogsAfterSessionExpiration ||
            !e.findTrackedSession(S, { returnInactive: !0 }))
        )
      ) {
        var L = m || r(),
          ee = ie(
            {
              service: t.service,
              session_id: C ? C.id : void 0,
              session: C ? { id: C.id } : void 0,
              usr: st(L.user) ? void 0 : L.user,
              view: L.view,
            },
            L.context,
            Le(S),
            c,
            l
          );
        ((f = t.beforeSend) === null || f === void 0
          ? void 0
          : f.call(t, ee, p)) === !1 ||
          (ee.origin !== T.AGENT &&
            ((s = a[ee.status]) !== null && s !== void 0
              ? s
              : a.custom
            ).isLimitReached()) ||
          n.notify(1, ee);
      }
    });
}
var j,
  ca =
    ((j = {}),
    (j[y.log] = g.info),
    (j[y.debug] = g.debug),
    (j[y.info] = g.info),
    (j[y.warn] = g.warn),
    (j[y.error] = g.error),
    j);
function fa(e, t) {
  var n = Li(e.forwardConsoleLogs).subscribe(function (r) {
    var o = {
      rawLogsEvent: {
        date: P(),
        message: r.message,
        origin: T.CONSOLE,
        error: r.error && He(r.error),
        status: ca[r.api],
      },
      domainContext: { handlingStack: r.handlingStack },
    };
    t.notify(0, o);
  });
  return {
    stop: function () {
      n.unsubscribe();
    },
  };
}
function da(e, t) {
  var n = Lo(e, e.forwardReports).subscribe(function (r) {
    var o = r.message,
      i,
      a = r.originalError.type === "deprecation" ? g.warn : g.error;
    a === g.error
      ? (i = He(r))
      : r.stack && (o += " Found in ".concat(Oo(r.stack))),
      t.notify(0, {
        rawLogsEvent: {
          date: P(),
          message: o,
          origin: T.REPORT,
          error: i,
          status: a,
        },
      });
  });
  return {
    stop: function () {
      n.unsubscribe();
    },
  };
}
function la(e, t) {
  if (!e.forwardErrorsToLogs) return { stop: U };
  var n = Ei(e).subscribe(function (i) {
      i.state === "complete" && o("xhr", i);
    }),
    r = wn().subscribe(function (i) {
      i.state === "resolve" && o("fetch", i);
    });
  function o(i, a) {
    !$r(a.url) &&
      (ma(a) || bn(a.status)) &&
      ("xhr" in a
        ? va(a.xhr, e, u)
        : a.response
        ? ga(a.response, e, u)
        : a.error && pa(a.error, e, u));
    function u(f) {
      var s = { isAborted: a.isAborted, handlingStack: a.handlingStack };
      t.notify(0, {
        rawLogsEvent: {
          message: ""
            .concat(ba(i), " error ")
            .concat(a.method, " ")
            .concat(a.url),
          date: a.startClocks.timeStamp,
          error: { stack: f || "Failed to load", handling: void 0 },
          http: { method: a.method, status_code: a.status, url: a.url },
          status: g.error,
          origin: T.NETWORK,
        },
        domainContext: s,
      });
    }
  }
  return {
    stop: function () {
      n.unsubscribe(), r.unsubscribe();
    },
  };
}
function va(e, t, n) {
  typeof e.response == "string" ? n(St(e.response, t)) : n(e.response);
}
function pa(e, t, n) {
  n(St(Z(N(e)), t));
}
function ga(e, t, n) {
  var r = ni(e);
  !r || !r.body
    ? n()
    : window.TextDecoder
    ? ha(r.body, t.requestErrorResponseLengthLimit, function (o, i) {
        n(o ? "Unable to retrieve response: ".concat(o) : i);
      })
    : r.text().then(
        h(function (o) {
          return n(St(o, t));
        }),
        h(function (o) {
          return n("Unable to retrieve response: ".concat(o));
        })
      );
}
function ma(e) {
  return e.status === 0 && e.responseType !== "opaque";
}
function St(e, t) {
  return e.length > t.requestErrorResponseLengthLimit
    ? "".concat(e.substring(0, t.requestErrorResponseLengthLimit), "...")
    : e;
}
function ba(e) {
  return e === "xhr" ? "XHR" : "Fetch";
}
function ha(e, t, n) {
  ji(
    e,
    function (r, o, i) {
      if (r) n(r);
      else {
        var a = new TextDecoder().decode(o);
        i && (a += "..."), n(void 0, a);
      }
    },
    { bytesLimit: t }
  );
}
function Sa(e, t) {
  if (!e.forwardErrorsToLogs) return { stop: U };
  var n = new _(),
    r = Co(n).stop,
    o = n.subscribe(function (i) {
      t.notify(0, {
        rawLogsEvent: {
          message: i.message,
          date: i.startClocks.timeStamp,
          error: He(i),
          origin: T.SOURCE,
          status: g.error,
        },
      });
    });
  return {
    stop: function () {
      r(), o.unsubscribe();
    },
  };
}
var ya = Si,
  R;
function Ea(e) {
  function t(n, r, o, i, a) {
    var u = ie(r.getContext(), n.context);
    if ((Fe(n.status, pe.console, r) && Oa(n, u), Fe(n.status, pe.http, r))) {
      var f = {
        rawLogsEvent: {
          date: a || P(),
          message: n.message,
          status: n.status,
          origin: T.LOGGER,
        },
        messageContext: u,
        savedCommonContext: i,
      };
      o && (f.domainContext = { handlingStack: o }), e.notify(0, f);
    }
  }
  return { handleLog: t };
}
var _a =
  ((R = {}),
  (R[g.ok] = y.debug),
  (R[g.debug] = y.debug),
  (R[g.info] = y.info),
  (R[g.notice] = y.info),
  (R[g.warn] = y.warn),
  (R[g.error] = y.error),
  (R[g.critical] = y.error),
  (R[g.alert] = y.error),
  (R[g.emerg] = y.error),
  R);
function Oa(e, t) {
  var n = e.status,
    r = e.message;
  H[_a[n]].call(A, r, t);
}
function Ca(e, t, n, r, o) {
  var i = Tn(
    e,
    { endpoint: e.logsEndpointBuilder, encoder: De() },
    e.replica && { endpoint: e.replica.logsEndpointBuilder, encoder: De() },
    n,
    r,
    o.expireObservable
  );
  return (
    t.subscribe(1, function (a) {
      i.add(a);
    }),
    i
  );
}
function Ta(e) {
  var t = bt();
  e.subscribe(1, function (n) {
    t.send("log", n);
  });
}
function wa(e) {
  return {
    get: function (t) {
      var n = e.findTrackedSession(t);
      if (n) return { session_id: n.id };
    },
  };
}
function Ra(e) {
  return function (t) {
    e.notify(0, {
      rawLogsEvent: {
        message: t.message,
        date: t.startClocks.timeStamp,
        origin: T.AGENT,
        status: g.error,
      },
    }),
      gn("Error reported to customer", { "error.message": t.message });
  };
}
function xa(e, t, n, r, o) {
  var i = Go("browser-logs-sdk", t);
  i.setContextProvider(function () {
    var d, l, v, m, p, S;
    return {
      application: {
        id: (d = Le()) === null || d === void 0 ? void 0 : d.application_id,
      },
      session: {
        id:
          (l = o.findTrackedSession()) === null || l === void 0 ? void 0 : l.id,
      },
      view: {
        id:
          (m = (v = Le()) === null || v === void 0 ? void 0 : v.view) ===
            null || m === void 0
            ? void 0
            : m.id,
      },
      action: {
        id:
          (S = (p = Le()) === null || p === void 0 ? void 0 : p.user_action) ===
            null || S === void 0
            ? void 0
            : S.id,
      },
    };
  });
  var a = [];
  if (Be()) {
    var u = bt(),
      f = i.observable.subscribe(function (d) {
        return u.send("internal_telemetry", d);
      });
    a.push(function () {
      return f.unsubscribe();
    });
  } else {
    var s = Tn(
      t,
      { endpoint: t.rumEndpointBuilder, encoder: De() },
      t.replica && { endpoint: t.replica.rumEndpointBuilder, encoder: De() },
      n,
      r,
      o.expireObservable
    );
    a.push(function () {
      return s.stop();
    });
    var c = i.observable.subscribe(function (d) {
      return s.add(d, Yo(t));
    });
    a.push(function () {
      return c.unsubscribe();
    });
  }
  return (
    Ho(),
    zo(Zi(e)),
    {
      telemetry: i,
      stop: function () {
        a.forEach(function (d) {
          return d();
        });
      },
    }
  );
}
function La(e, t, n, r) {
  var o = new ya(),
    i = [];
  o.subscribe(1, function (v) {
    return fn("logs", v);
  });
  var a = Ra(o),
    u = gi(t),
    f = t.sessionStoreStrategyType && !Be() && !Rn() ? oa(t, r) : ia(t),
    s = xa(e, t, a, u, f).stop;
  i.push(function () {
    return s();
  }),
    la(t, o),
    Sa(t, o),
    fa(t, o),
    da(t, o);
  var c = Ea(o).handleLog;
  if ((ua(f, t, o, n, a), Be())) Ta(o);
  else {
    var d = Ca(t, o, a, u, f).stop;
    i.push(function () {
      return d();
    });
  }
  var l = wa(f);
  return {
    handleLog: c,
    getInternalContext: l.get,
    stop: function () {
      i.forEach(function (v) {
        return v();
      });
    },
  };
}
var Aa = ta(La);
xo(D(), "DD_LOGS", Aa);
export { pe as HandlerType, x as Logger, g as StatusType, Aa as datadogLogs };
