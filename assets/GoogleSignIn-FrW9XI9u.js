import {
  a7 as Oe,
  d as ae,
  X as je,
  u as be,
  h as we,
  Y as Re,
  r as U,
  e as re,
  n as ce,
  T as Le,
  a8 as Ue,
  K as te,
  p as pe,
  a9 as Ae,
  aa as ee,
  ab as Ee,
  ac as Ie,
  a as xe,
  ad as Be,
  ae as Ce,
  a5 as Fe,
  af as Ne,
  y as Me,
  j as Ve,
} from "./index-B1IYvx0M.js";
import { g as Ge } from "./react-google-recaptcha-v3.esm-DONQIyn8.js";
import { i as He, g as $e } from "./helpers-D0lXFcyB.js";
import { F as Ke } from "./RateLimitModal-ebsrfP5_.js";
const qe = () => {
  const [b, { data: A, isLoading: w, error: T, reset: R }] = Oe({
      fixedCacheKey: "login-auth",
    }),
    S = ae(je),
    m = be(),
    g = we(),
    { executeRecaptcha: c } = Ge();
  return (
    Re(
      U.useCallback(() => {
        R();
      }, [R])
    ),
    {
      login: U.useCallback(
        async (v) => {
          var p, L;
          try {
            if ((!c && re.dataProvider === "api") || w) return;
            const O = await (c == null
                ? void 0
                : c(v.mfaToken ? "mfa" : "login")),
              k = await b({ ...S, ...v, googleCaptchaToken: O }).unwrap();
            ce.gtag("event", "login", {
              login_with_google: v.googleTokenId ? "yes" : "no",
            }),
              ce.gtag("set", "user_properties", {
                account_id: k.accountId,
                kyc_status: k.kycStatus,
              }),
              Le.dataLayer({
                dataLayer: {
                  event: "Login",
                  hin: k.hin,
                  accountId: k.accountId,
                  status: k.kycStatus,
                },
              }),
              m(Ue(k));
          } catch (O) {
            if (He(O)) {
              if (O.data === "ThrottlerException: Too Many Requests")
                return g(te.login.path), m(pe());
              if (
                ((p = O.data) == null ? void 0 : p.message) ===
                "Please verify your email to sign in"
              )
                return void g(te.userVerification.path, {
                  state: { email: v.email },
                });
              const k = (L = O.data) == null ? void 0 : L.metadata;
              if (k)
                return (
                  k.smsVerificationAttemptsLimitReached && m(pe()),
                  g(te.login.path),
                  m(
                    Ae({
                      email: v.email ?? (S == null ? void 0 : S.email),
                      googleTokenId:
                        v.googleTokenId ??
                        (S == null ? void 0 : S.googleTokenId),
                      type: k.type,
                      reachLimit: !!k.smsVerificationAttemptsLimitReached,
                      mobileNumber: k.mobileNumber,
                    })
                  )
                );
            }
          }
        },
        [c, w, b, S, m, g]
      ),
      message: $e(T),
      ...A,
      isLoading: w || (!c && re.dataProvider === "api"),
    }
  );
};
var ne = { exports: {} },
  ze = ne.exports,
  me;
function Je() {
  return (
    me ||
      ((me = 1),
      (function (b, A) {
        (function (w, T) {
          b.exports = T();
        })(ze, function () {
          function w(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function T(t, e) {
            for (var n = 0; n < e.length; n++) {
              var s = e[n];
              (s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                "value" in s && (s.writable = !0),
                Object.defineProperty(t, s.key, s);
            }
          }
          function R(t, e, n) {
            return e && T(t.prototype, e), t;
          }
          function S(t) {
            return (S = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(t);
          }
          function m(t, e) {
            return (m =
              Object.setPrototypeOf ||
              function (n, s) {
                return (n.__proto__ = s), n;
              })(t, e);
          }
          function g(t, e) {
            return !e || (typeof e != "object" && typeof e != "function")
              ? (function (n) {
                  if (n === void 0)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return n;
                })(t)
              : e;
          }
          var c =
              (typeof globalThis < "u" && globalThis) ||
              (typeof self < "u" && self) ||
              (c !== void 0 && c),
            E = "URLSearchParams" in c,
            v = "Symbol" in c && "iterator" in Symbol,
            p =
              "FileReader" in c &&
              "Blob" in c &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch {
                  return !1;
                }
              })(),
            L = "FormData" in c,
            O = "ArrayBuffer" in c;
          if (O)
            var k = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              H =
                ArrayBuffer.isView ||
                function (t) {
                  return t && -1 < k.indexOf(Object.prototype.toString.call(t));
                };
          function B(t) {
            if (
              (typeof t != "string" && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || t === "")
            )
              throw new TypeError(
                'Invalid character in header field name: "' + t + '"'
              );
            return t.toLowerCase();
          }
          function V(t) {
            return typeof t != "string" && (t = String(t)), t;
          }
          function I(t) {
            var e = {
              next: function () {
                var n = t.shift();
                return { done: n === void 0, value: n };
              },
            };
            return (
              v &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function y(t) {
            (this.map = {}),
              t instanceof y
                ? t.forEach(function (e, n) {
                    this.append(n, e);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function C(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function D(t) {
            return new Promise(function (e, n) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  n(t.error);
                });
            });
          }
          function M(t) {
            var e = new FileReader(),
              n = D(e);
            return e.readAsArrayBuffer(t), n;
          }
          function F(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function j() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                var e;
                (this.bodyUsed = this.bodyUsed),
                  (this._bodyInit = t)
                    ? typeof t == "string"
                      ? (this._bodyText = t)
                      : p && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : L && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : E && URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : O && p && (e = t) && DataView.prototype.isPrototypeOf(e)
                      ? ((this._bodyArrayBuffer = F(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : O && (ArrayBuffer.prototype.isPrototypeOf(t) || H(t))
                      ? (this._bodyArrayBuffer = F(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    (typeof t == "string"
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : E &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              p &&
                ((this.blob = function () {
                  var t = C(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  if (this._bodyArrayBuffer) {
                    var t = C(this);
                    return (
                      t ||
                      (ArrayBuffer.isView(this._bodyArrayBuffer)
                        ? Promise.resolve(
                            this._bodyArrayBuffer.buffer.slice(
                              this._bodyArrayBuffer.byteOffset,
                              this._bodyArrayBuffer.byteOffset +
                                this._bodyArrayBuffer.byteLength
                            )
                          )
                        : Promise.resolve(this._bodyArrayBuffer))
                    );
                  }
                  return this.blob().then(M);
                })),
              (this.text = function () {
                var t,
                  e,
                  n,
                  s = C(this);
                if (s) return s;
                if (this._bodyBlob)
                  return (
                    (t = this._bodyBlob),
                    (e = new FileReader()),
                    (n = D(e)),
                    e.readAsText(t),
                    n
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (u) {
                      for (
                        var i = new Uint8Array(u),
                          d = new Array(i.length),
                          l = 0;
                        l < i.length;
                        l++
                      )
                        d[l] = String.fromCharCode(i[l]);
                      return d.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              L &&
                (this.formData = function () {
                  return this.text().then(Q);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (y.prototype.append = function (t, e) {
            (t = B(t)), (e = V(e));
            var n = this.map[t];
            this.map[t] = n ? n + ", " + e : e;
          }),
            (y.prototype.delete = function (t) {
              delete this.map[B(t)];
            }),
            (y.prototype.get = function (t) {
              return (t = B(t)), this.has(t) ? this.map[t] : null;
            }),
            (y.prototype.has = function (t) {
              return this.map.hasOwnProperty(B(t));
            }),
            (y.prototype.set = function (t, e) {
              this.map[B(t)] = V(e);
            }),
            (y.prototype.forEach = function (t, e) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
            }),
            (y.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push(n);
                }),
                I(t)
              );
            }),
            (y.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                I(t)
              );
            }),
            (y.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push([n, e]);
                }),
                I(t)
              );
            }),
            v && (y.prototype[Symbol.iterator] = y.prototype.entries);
          var z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function N(t, e) {
            if (!(this instanceof N))
              throw new TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            var n,
              s,
              u = (e = e || {}).body;
            if (t instanceof N) {
              if (t.bodyUsed) throw new TypeError("Already read");
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new y(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                u ||
                  t._bodyInit == null ||
                  ((u = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || "same-origin"),
              (!e.headers && this.headers) || (this.headers = new y(e.headers)),
              (this.method =
                ((n = e.method || this.method || "GET"),
                (s = n.toUpperCase()),
                -1 < z.indexOf(s) ? s : n)),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              (this.method === "GET" || this.method === "HEAD") && u)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            if (
              (this._initBody(u),
              !(
                (this.method !== "GET" && this.method !== "HEAD") ||
                (e.cache !== "no-store" && e.cache !== "no-cache")
              ))
            ) {
              var i = /([?&])_=[^&]*/;
              i.test(this.url)
                ? (this.url = this.url.replace(
                    i,
                    "$1_=" + new Date().getTime()
                  ))
                : (this.url +=
                    (/\?/.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime());
            }
          }
          function Q(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (n) {
                  if (n) {
                    var s = n.split("="),
                      u = s.shift().replace(/\+/g, " "),
                      i = s.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(u), decodeURIComponent(i));
                  }
                }),
              e
            );
          }
          function _(t, e) {
            if (!(this instanceof _))
              throw new TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            (e = e || {}),
              (this.type = "default"),
              (this.status = e.status === void 0 ? 200 : e.status),
              (this.ok = 200 <= this.status && this.status < 300),
              (this.statusText =
                e.statusText === void 0 ? "" : "" + e.statusText),
              (this.headers = new y(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t);
          }
          (N.prototype.clone = function () {
            return new N(this, { body: this._bodyInit });
          }),
            j.call(N.prototype),
            j.call(_.prototype),
            (_.prototype.clone = function () {
              return new _(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new y(this.headers),
                url: this.url,
              });
            }),
            (_.error = function () {
              var t = new _(null, { status: 0, statusText: "" });
              return (t.type = "error"), t;
            });
          var ie = [301, 302, 303, 307, 308];
          _.redirect = function (t, e) {
            if (ie.indexOf(e) === -1)
              throw new RangeError("Invalid status code");
            return new _(null, { status: e, headers: { location: t } });
          };
          var $ = c.DOMException;
          try {
            new $();
          } catch {
            (($ = function (e, n) {
              (this.message = e), (this.name = n);
              var s = Error(e);
              this.stack = s.stack;
            }).prototype = Object.create(Error.prototype)),
              ($.prototype.constructor = $);
          }
          function ue(t, e) {
            return new Promise(function (n, s) {
              var u = new N(t, e);
              if (u.signal && u.signal.aborted)
                return s(new $("Aborted", "AbortError"));
              var i = new XMLHttpRequest();
              function d() {
                i.abort();
              }
              (i.onload = function () {
                var l,
                  r,
                  o = {
                    status: i.status,
                    statusText: i.statusText,
                    headers:
                      ((l = i.getAllResponseHeaders() || ""),
                      (r = new y()),
                      l
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split("\r")
                        .map(function (f) {
                          return f.indexOf(`
`) === 0
                            ? f.substr(1, f.length)
                            : f;
                        })
                        .forEach(function (f) {
                          var h = f.split(":"),
                            x = h.shift().trim();
                          if (x) {
                            var G = h.join(":").trim();
                            r.append(x, G);
                          }
                        }),
                      r),
                  };
                o.url =
                  "responseURL" in i
                    ? i.responseURL
                    : o.headers.get("X-Request-URL");
                var a = "response" in i ? i.response : i.responseText;
                setTimeout(function () {
                  n(new _(a, o));
                }, 0);
              }),
                (i.onerror = function () {
                  setTimeout(function () {
                    s(new TypeError("Network request failed"));
                  }, 0);
                }),
                (i.ontimeout = function () {
                  setTimeout(function () {
                    s(new TypeError("Network request failed"));
                  }, 0);
                }),
                (i.onabort = function () {
                  setTimeout(function () {
                    s(new $("Aborted", "AbortError"));
                  }, 0);
                }),
                i.open(
                  u.method,
                  (function (l) {
                    try {
                      return l === "" && c.location.href ? c.location.href : l;
                    } catch {
                      return l;
                    }
                  })(u.url),
                  !0
                ),
                u.credentials === "include"
                  ? (i.withCredentials = !0)
                  : u.credentials === "omit" && (i.withCredentials = !1),
                "responseType" in i &&
                  (p
                    ? (i.responseType = "blob")
                    : O &&
                      u.headers.get("Content-Type") &&
                      u.headers
                        .get("Content-Type")
                        .indexOf("application/octet-stream") !== -1 &&
                      (i.responseType = "arraybuffer")),
                !e || typeof e.headers != "object" || e.headers instanceof y
                  ? u.headers.forEach(function (l, r) {
                      i.setRequestHeader(r, l);
                    })
                  : Object.getOwnPropertyNames(e.headers).forEach(function (l) {
                      i.setRequestHeader(l, V(e.headers[l]));
                    }),
                u.signal &&
                  (u.signal.addEventListener("abort", d),
                  (i.onreadystatechange = function () {
                    i.readyState === 4 &&
                      u.signal.removeEventListener("abort", d);
                  })),
                i.send(u._bodyInit === void 0 ? null : u._bodyInit);
            });
          }
          (ue.polyfill = !0),
            c.fetch ||
              ((c.fetch = ue),
              (c.Headers = y),
              (c.Request = N),
              (c.Response = _));
          var K =
            typeof globalThis < "u"
              ? globalThis
              : typeof window < "u"
              ? window
              : typeof ee < "u"
              ? ee
              : typeof self < "u"
              ? self
              : {};
          function fe(t) {
            var e = this.constructor;
            return this.then(
              function (n) {
                return e.resolve(t()).then(function () {
                  return n;
                });
              },
              function (n) {
                return e.resolve(t()).then(function () {
                  return e.reject(n);
                });
              }
            );
          }
          function de(t) {
            return new this(function (e, n) {
              if (!t || t.length === void 0)
                return n(
                  new TypeError(
                    typeof t +
                      " " +
                      t +
                      " is not iterable(cannot read property Symbol(Symbol.iterator))"
                  )
                );
              var s = Array.prototype.slice.call(t);
              if (s.length === 0) return e([]);
              var u = s.length;
              function i(l, r) {
                if (r && (typeof r == "object" || typeof r == "function")) {
                  var o = r.then;
                  if (typeof o == "function")
                    return void o.call(
                      r,
                      function (a) {
                        i(l, a);
                      },
                      function (a) {
                        (s[l] = { status: "rejected", reason: a }),
                          --u == 0 && e(s);
                      }
                    );
                }
                (s[l] = { status: "fulfilled", value: r }), --u == 0 && e(s);
              }
              for (var d = 0; d < s.length; d++) i(d, s[d]);
            });
          }
          (function (t) {
            function e(r) {
              var o = {
                next: function () {
                  var a = r.shift();
                  return { done: a === void 0, value: a };
                },
              };
              return (
                d &&
                  (o[Symbol.iterator] = function () {
                    return o;
                  }),
                o
              );
            }
            function n(r) {
              return encodeURIComponent(r).replace(/%20/g, "+");
            }
            function s(r) {
              return decodeURIComponent(String(r).replace(/\+/g, " "));
            }
            var u,
              i,
              d = (function () {
                try {
                  return !!Symbol.iterator;
                } catch {
                  return !1;
                }
              })();
            !(function () {
              try {
                var r = t.URLSearchParams;
                return (
                  new r("?a=1").toString() === "a=1" &&
                  typeof r.prototype.set == "function" &&
                  typeof r.prototype.entries == "function"
                );
              } catch {
                return !1;
              }
            })() &&
              (((i = (u = function (r) {
                Object.defineProperty(this, "_entries", {
                  writable: !0,
                  value: {},
                });
                var o = typeof r;
                if (o != "undefined")
                  if (o == "string") r !== "" && this._fromString(r);
                  else if (r instanceof u) {
                    var a = this;
                    r.forEach(function (G, Y) {
                      a.append(Y, G);
                    });
                  } else {
                    if (r === null || o != "object")
                      throw new TypeError(
                        "Unsupported input's type for URLSearchParams"
                      );
                    if (Object.prototype.toString.call(r) === "[object Array]")
                      for (var f = 0; f < r.length; f++) {
                        var h = r[f];
                        if (
                          Object.prototype.toString.call(h) !==
                            "[object Array]" &&
                          h.length === 2
                        )
                          throw new TypeError(
                            "Expected [string, any] as entry at index " +
                              f +
                              " of URLSearchParams's input"
                          );
                        this.append(h[0], h[1]);
                      }
                    else
                      for (var x in r)
                        r.hasOwnProperty(x) && this.append(x, r[x]);
                  }
              }).prototype).append = function (r, o) {
                r in this._entries
                  ? this._entries[r].push(String(o))
                  : (this._entries[r] = [String(o)]);
              }),
              (i.delete = function (r) {
                delete this._entries[r];
              }),
              (i.get = function (r) {
                return r in this._entries ? this._entries[r][0] : null;
              }),
              (i.getAll = function (r) {
                return r in this._entries ? this._entries[r].slice(0) : [];
              }),
              (i.has = function (r) {
                return r in this._entries;
              }),
              (i.set = function (r, o) {
                this._entries[r] = [String(o)];
              }),
              (i.forEach = function (r, o) {
                var a;
                for (var f in this._entries)
                  if (this._entries.hasOwnProperty(f)) {
                    a = this._entries[f];
                    for (var h = 0; h < a.length; h++) r.call(o, a[h], f, this);
                  }
              }),
              (i.keys = function () {
                var r = [];
                return (
                  this.forEach(function (o, a) {
                    r.push(a);
                  }),
                  e(r)
                );
              }),
              (i.values = function () {
                var r = [];
                return (
                  this.forEach(function (o) {
                    r.push(o);
                  }),
                  e(r)
                );
              }),
              (i.entries = function () {
                var r = [];
                return (
                  this.forEach(function (o, a) {
                    r.push([a, o]);
                  }),
                  e(r)
                );
              }),
              d && (i[Symbol.iterator] = i.entries),
              (i.toString = function () {
                var r = [];
                return (
                  this.forEach(function (o, a) {
                    r.push(n(a) + "=" + n(o));
                  }),
                  r.join("&")
                );
              }),
              (t.URLSearchParams = u));
            var l = t.URLSearchParams.prototype;
            typeof l.sort != "function" &&
              (l.sort = function () {
                var r = this,
                  o = [];
                this.forEach(function (f, h) {
                  o.push([h, f]), r._entries || r.delete(h);
                }),
                  o.sort(function (f, h) {
                    return f[0] < h[0] ? -1 : f[0] > h[0] ? 1 : 0;
                  }),
                  r._entries && (r._entries = {});
                for (var a = 0; a < o.length; a++)
                  this.append(o[a][0], o[a][1]);
              }),
              typeof l._fromString != "function" &&
                Object.defineProperty(l, "_fromString", {
                  enumerable: !1,
                  configurable: !1,
                  writable: !1,
                  value: function (r) {
                    if (this._entries) this._entries = {};
                    else {
                      var o = [];
                      this.forEach(function (x, G) {
                        o.push(G);
                      });
                      for (var a = 0; a < o.length; a++) this.delete(o[a]);
                    }
                    var f,
                      h = (r = r.replace(/^\?/, "")).split("&");
                    for (a = 0; a < h.length; a++)
                      (f = h[a].split("=")),
                        this.append(s(f[0]), 1 < f.length ? s(f[1]) : "");
                  },
                });
          })(
            K !== void 0
              ? K
              : typeof window < "u"
              ? window
              : typeof self < "u"
              ? self
              : K
          ),
            (function (t) {
              var e, n;
              function s(i, d) {
                typeof i != "string" && (i = String(i)),
                  d && typeof d != "string" && (d = String(d));
                var l,
                  r = document;
                if (d && (t.location === void 0 || d !== t.location.href)) {
                  (d = d.toLowerCase()),
                    ((l = (r =
                      document.implementation.createHTMLDocument(
                        ""
                      )).createElement("base")).href = d),
                    r.head.appendChild(l);
                  try {
                    if (l.href.indexOf(d) !== 0) throw new Error(l.href);
                  } catch (Z) {
                    throw new Error(
                      "URL unable to set base " + d + " due to " + Z
                    );
                  }
                }
                var o = r.createElement("a");
                (o.href = i), l && (r.body.appendChild(o), (o.href = o.href));
                var a = r.createElement("input");
                if (
                  ((a.type = "url"),
                  (a.value = i),
                  o.protocol === ":" ||
                    !/:/.test(o.href) ||
                    (!a.checkValidity() && !d))
                )
                  throw new TypeError("Invalid URL");
                Object.defineProperty(this, "_anchorElement", { value: o });
                var f = new t.URLSearchParams(this.search),
                  h = !0,
                  x = !0,
                  G = this;
                ["append", "delete", "set"].forEach(function (Z) {
                  var ke = f[Z];
                  f[Z] = function () {
                    ke.apply(f, arguments),
                      h && ((x = !1), (G.search = f.toString()), (x = !0));
                  };
                }),
                  Object.defineProperty(this, "searchParams", {
                    value: f,
                    enumerable: !0,
                  });
                var Y = void 0;
                Object.defineProperty(this, "_updateSearchParams", {
                  enumerable: !1,
                  configurable: !1,
                  writable: !1,
                  value: function () {
                    this.search !== Y &&
                      ((Y = this.search),
                      x &&
                        ((h = !1),
                        this.searchParams._fromString(this.search),
                        (h = !0)));
                  },
                });
              }
              if (
                (!(function () {
                  try {
                    var i = new t.URL("b", "http://a");
                    return (
                      (i.pathname = "c d"),
                      i.href === "http://a/c%20d" && i.searchParams
                    );
                  } catch {
                    return !1;
                  }
                })() &&
                  ((e = t.URL),
                  (n = s.prototype),
                  ["hash", "host", "hostname", "port", "protocol"].forEach(
                    function (i) {
                      var d;
                      (d = i),
                        Object.defineProperty(n, d, {
                          get: function () {
                            return this._anchorElement[d];
                          },
                          set: function (l) {
                            this._anchorElement[d] = l;
                          },
                          enumerable: !0,
                        });
                    }
                  ),
                  Object.defineProperty(n, "search", {
                    get: function () {
                      return this._anchorElement.search;
                    },
                    set: function (i) {
                      (this._anchorElement.search = i),
                        this._updateSearchParams();
                    },
                    enumerable: !0,
                  }),
                  Object.defineProperties(n, {
                    toString: {
                      get: function () {
                        var i = this;
                        return function () {
                          return i.href;
                        };
                      },
                    },
                    href: {
                      get: function () {
                        return this._anchorElement.href.replace(/\?$/, "");
                      },
                      set: function (i) {
                        (this._anchorElement.href = i),
                          this._updateSearchParams();
                      },
                      enumerable: !0,
                    },
                    pathname: {
                      get: function () {
                        return this._anchorElement.pathname.replace(
                          /(^\/?)/,
                          "/"
                        );
                      },
                      set: function (i) {
                        this._anchorElement.pathname = i;
                      },
                      enumerable: !0,
                    },
                    origin: {
                      get: function () {
                        var i = { "http:": 80, "https:": 443, "ftp:": 21 }[
                            this._anchorElement.protocol
                          ],
                          d =
                            this._anchorElement.port != i &&
                            this._anchorElement.port !== "";
                        return (
                          this._anchorElement.protocol +
                          "//" +
                          this._anchorElement.hostname +
                          (d ? ":" + this._anchorElement.port : "")
                        );
                      },
                      enumerable: !0,
                    },
                    password: {
                      get: function () {
                        return "";
                      },
                      set: function (i) {},
                      enumerable: !0,
                    },
                    username: {
                      get: function () {
                        return "";
                      },
                      set: function (i) {},
                      enumerable: !0,
                    },
                  }),
                  (s.createObjectURL = function (i) {
                    return e.createObjectURL.apply(e, arguments);
                  }),
                  (s.revokeObjectURL = function (i) {
                    return e.revokeObjectURL.apply(e, arguments);
                  }),
                  (t.URL = s)),
                t.location !== void 0 && !("origin" in t.location))
              ) {
                var u = function () {
                  return (
                    t.location.protocol +
                    "//" +
                    t.location.hostname +
                    (t.location.port ? ":" + t.location.port : "")
                  );
                };
                try {
                  Object.defineProperty(t.location, "origin", {
                    get: u,
                    enumerable: !0,
                  });
                } catch {
                  setInterval(function () {
                    t.location.origin = u();
                  }, 100);
                }
              }
            })(
              K !== void 0
                ? K
                : typeof window < "u"
                ? window
                : typeof self < "u"
                ? self
                : K
            );
          var Pe = setTimeout;
          function le(t) {
            return !!(t && t.length !== void 0);
          }
          function De() {}
          function P(t) {
            if (!(this instanceof P))
              throw new TypeError("Promises must be constructed via new");
            if (typeof t != "function") throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              _e(t, this);
          }
          function he(t, e) {
            for (; t._state === 3; ) t = t._value;
            t._state !== 0
              ? ((t._handled = !0),
                P._immediateFn(function () {
                  var n = t._state === 1 ? e.onFulfilled : e.onRejected;
                  if (n !== null) {
                    var s;
                    try {
                      s = n(t._value);
                    } catch (u) {
                      return void J(e.promise, u);
                    }
                    oe(e.promise, s);
                  } else (t._state === 1 ? oe : J)(e.promise, t._value);
                }))
              : t._deferreds.push(e);
          }
          function oe(t, e) {
            try {
              if (e === t)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );
              if (e && (typeof e == "object" || typeof e == "function")) {
                var n = e.then;
                if (e instanceof P)
                  return (t._state = 3), (t._value = e), void se(t);
                if (typeof n == "function")
                  return void _e(
                    ((s = n),
                    (u = e),
                    function () {
                      s.apply(u, arguments);
                    }),
                    t
                  );
              }
              (t._state = 1), (t._value = e), se(t);
            } catch (i) {
              J(t, i);
            }
            var s, u;
          }
          function J(t, e) {
            (t._state = 2), (t._value = e), se(t);
          }
          function se(t) {
            t._state === 2 &&
              t._deferreds.length === 0 &&
              P._immediateFn(function () {
                t._handled || P._unhandledRejectionFn(t._value);
              });
            for (var e = 0, n = t._deferreds.length; e < n; e++)
              he(t, t._deferreds[e]);
            t._deferreds = null;
          }
          function Te(t, e, n) {
            (this.onFulfilled = typeof t == "function" ? t : null),
              (this.onRejected = typeof e == "function" ? e : null),
              (this.promise = n);
          }
          function _e(t, e) {
            var n = !1;
            try {
              t(
                function (s) {
                  n || ((n = !0), oe(e, s));
                },
                function (s) {
                  n || ((n = !0), J(e, s));
                }
              );
            } catch (s) {
              if (n) return;
              (n = !0), J(e, s);
            }
          }
          (P.prototype.catch = function (t) {
            return this.then(null, t);
          }),
            (P.prototype.then = function (t, e) {
              var n = new this.constructor(De);
              return he(this, new Te(t, e, n)), n;
            }),
            (P.prototype.finally = fe),
            (P.all = function (t) {
              return new P(function (e, n) {
                if (!le(t))
                  return n(new TypeError("Promise.all accepts an array"));
                var s = Array.prototype.slice.call(t);
                if (s.length === 0) return e([]);
                var u = s.length;
                function i(l, r) {
                  try {
                    if (r && (typeof r == "object" || typeof r == "function")) {
                      var o = r.then;
                      if (typeof o == "function")
                        return void o.call(
                          r,
                          function (a) {
                            i(l, a);
                          },
                          n
                        );
                    }
                    (s[l] = r), --u == 0 && e(s);
                  } catch (a) {
                    n(a);
                  }
                }
                for (var d = 0; d < s.length; d++) i(d, s[d]);
              });
            }),
            (P.allSettled = de),
            (P.resolve = function (t) {
              return t && typeof t == "object" && t.constructor === P
                ? t
                : new P(function (e) {
                    e(t);
                  });
            }),
            (P.reject = function (t) {
              return new P(function (e, n) {
                n(t);
              });
            }),
            (P.race = function (t) {
              return new P(function (e, n) {
                if (!le(t))
                  return n(new TypeError("Promise.race accepts an array"));
                for (var s = 0, u = t.length; s < u; s++)
                  P.resolve(t[s]).then(e, n);
              });
            }),
            (P._immediateFn =
              typeof setImmediate == "function"
                ? function (t) {
                    setImmediate(t);
                  }
                : function (t) {
                    Pe(t, 0);
                  }),
            (P._unhandledRejectionFn = function (t) {
              typeof console < "u" &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", t);
            });
          var q = (function () {
            if (typeof self < "u") return self;
            if (typeof window < "u") return window;
            if (typeof ee < "u") return ee;
            throw new Error("unable to locate global object");
          })();
          typeof q.Promise != "function"
            ? (q.Promise = P)
            : q.Promise.prototype.finally
            ? q.Promise.allSettled || (q.Promise.allSettled = de)
            : (q.Promise.prototype.finally = fe);
          var Se = (function () {
            function t(e) {
              if ((w(this, t), this.constructor === t))
                throw new TypeError("Can not construct abstract class.");
              if (this._persist === t.prototype._persist)
                throw new TypeError(
                  "Please implement abstract method _persist."
                );
              if (this._fetch === t.prototype._fetch)
                throw new TypeError("Please implement abstract method _fetch.");
              (this.customParamProvider = e),
                (this._trackingDomain = "<<.TrackingDomain>>"),
                (this._organicEnabled = !1);
            }
            return (
              R(t, [
                {
                  key: "configure",
                  value: function (e) {
                    this._isDefined(e.tracking_domain) &&
                      (this._trackingDomain = e.tracking_domain),
                      this._isDefined(e.tld) && (this._tld = e.tld),
                      this._isDefined(e.organic) &&
                        (this._isDefined(e.organic.offer_id) &&
                        this._isDefined(e.organic.affiliate_id)
                          ? ((this._organicEnabled = !0),
                            (this._organicOptions = Object.assign(
                              this._getDefaultOrganicClickOptions(),
                              e.organic.options || {},
                              {
                                affiliate_id: e.organic.affiliate_id,
                                offer_id: e.organic.offer_id,
                              }
                            )))
                          : console.warn(
                              'Unable to setup organic tracking. Missing "organic.offer_id" or "organic.affiliate_id" parameter.'
                            ));
                  },
                },
                {
                  key: "getAdvertiserTransactionId",
                  value: function (e) {
                    var n = this._fetch("ef_tid_c_a_".concat(e)).split("|");
                    return (n = n
                      ? n[n.length - 1]
                      : this._fetch("ef_tid_i_a_".concat(e)));
                  },
                },
                {
                  key: "getTransactionId",
                  value: function (e) {
                    var n = this._fetch("ef_tid_c_o_".concat(e)).split("|");
                    return (n =
                      (n = n
                        ? n[n.length - 1]
                        : this._fetch("ef_tid_i_o_".concat(e))) ||
                      this._fetch("ef_tid_".concat(e)));
                  },
                },
                {
                  key: "impression",
                  value: function (e) {
                    var n = this;
                    return e.offer_id || e.coupon_code
                      ? e.do_not_track === !0
                        ? Promise.resolve("")
                        : new Promise(function (s, u) {
                            n._getCustomParams().then(function (i) {
                              var d = n._isDefined(e.tracking_domain)
                                  ? e.tracking_domain
                                  : n._trackingDomain,
                                l = new URL("".concat(d, "/sdk/impression")),
                                r = new URLSearchParams(l.search);
                              for (var o in i)
                                i.hasOwnProperty(o) && r.set(o, i[o]);
                              r.set("oid", e.offer_id),
                                r.set("affid", e.affiliate_id || ""),
                                r.set("async", "json"),
                                n._isDefined(e.sub1) && r.set("sub1", e.sub1),
                                n._isDefined(e.sub2) && r.set("sub2", e.sub2),
                                n._isDefined(e.sub3) && r.set("sub3", e.sub3),
                                n._isDefined(e.sub4) && r.set("sub4", e.sub4),
                                n._isDefined(e.sub5) && r.set("sub5", e.sub5),
                                n._isDefined(e.adv1) && r.set("adv1", e.adv1),
                                n._isDefined(e.adv2) && r.set("adv2", e.adv2),
                                n._isDefined(e.adv3) && r.set("adv3", e.adv3),
                                n._isDefined(e.adv4) && r.set("adv4", e.adv4),
                                n._isDefined(e.adv5) && r.set("adv5", e.adv5),
                                n._isDefined(e.source_id) &&
                                  r.set("source_id", e.source_id),
                                n._isDefined(e.creative_id) &&
                                  r.set("creative_id", e.creative_id),
                                n._isDefined(e.fbclid)
                                  ? r.set("fbclid", e.fbclid)
                                  : n._setDefaultFromURL(r, "fbclid"),
                                n._isDefined(e.gclid)
                                  ? r.set("gclid", e.gclid)
                                  : n._setDefaultFromURL(r, "gclid"),
                                n._isDefined(e.ttclid)
                                  ? r.set("ttclid", e.ttclid)
                                  : n._setDefaultFromURL(r, "ttclid"),
                                n._isDefined(e.coupon_code) &&
                                  r.set("__cc", e.coupon_code || ""),
                                n._isDefined(e.parameters) &&
                                  Object.keys(e.parameters).forEach(function (
                                    a
                                  ) {
                                    return r.set(a, e.parameters[a]);
                                  }),
                                e.disable_fingerprinting === !0 &&
                                  r.delete("effp"),
                                (l.search = r.toString()),
                                fetch(l.toString(), {
                                  method: "GET",
                                  credentials: "include",
                                })
                                  .then(
                                    function (a) {
                                      return a.json();
                                    },
                                    function (a) {
                                      console.error(a), s("");
                                    }
                                  )
                                  .then(function (a) {
                                    if (
                                      a.transaction_id &&
                                      0 < a.transaction_id.length
                                    ) {
                                      var f = n._fetch(
                                        "ef_tid_i_o_".concat(
                                          a.oid || e.offer_id
                                        )
                                      );
                                      n._persist(
                                        "ef_tid_i_o_".concat(
                                          a.oid || e.offer_id
                                        ),
                                        f && 0 < f.length
                                          ? ""
                                              .concat(f, "|")
                                              .concat(a.transaction_id)
                                          : a.transaction_id
                                      );
                                      var h = n._fetch(
                                        "ef_tid_i_a_".concat(a.aid)
                                      );
                                      n._persist(
                                        "ef_tid_i_a_".concat(a.aid),
                                        h && 0 < h.length
                                          ? ""
                                              .concat(h, "|")
                                              .concat(a.transaction_id)
                                          : a.transaction_id
                                      ),
                                        s(a.transaction_id);
                                    }
                                  });
                            });
                          })
                      : (console.warn(
                          'Unable to track. Missing "offer_id" parameter.'
                        ),
                        Promise.resolve(""));
                  },
                },
                {
                  key: "_getDefaultOrganicClickOptions",
                  value: function () {
                    var e = "";
                    return (
                      this.urlParameter("fbclid") &&
                        ((e = "Facebook"),
                        this.urlParameter("fbclid").slice(0, 3) === "PAA" &&
                          (e = "Instagram")),
                      this.urlParameter("gclid") && (e = "Google"),
                      this.urlParameter("ttclid") && (e = "Tiktok"),
                      (this.urlParameter("MSCLKID") ||
                        this.urlParameter("msclkid")) &&
                        (e = "Microsoft"),
                      this.urlParameter("OutbrainClickId") && (e = "Outbrain"),
                      this.urlParameter("TCLID") && (e = "Taboola"),
                      {
                        sub1: this.urlParameter("sub1") || e,
                        sub2: this.urlParameter("sub2") || document.referrer,
                        sub3:
                          this.urlParameter("sub3") ||
                          "/" + window.location.pathname.split("/")[1],
                        sub4:
                          this.urlParameter("sub4") || window.location.pathname,
                        sub5:
                          this.urlParameter("sub5") || window.location.search,
                        source_id: this.urlParameter("source_id") || "organic",
                        transaction_id: this.urlParameter("_ef_transaction_id"),
                        organic: 1,
                      }
                    );
                  },
                },
                {
                  key: "click",
                  value: function (e) {
                    var n = this;
                    if (e.do_not_track === !0) return Promise.resolve("");
                    if (!e.offer_id && !e.transaction_id && !e.coupon_code) {
                      if (!this._organicEnabled || this._fetch("ef_witness"))
                        return (
                          console.warn(
                            'Unable to track. Missing "offer_id" or "transaction_id" parameter.'
                          ),
                          Promise.resolve("")
                        );
                      e = this._organicOptions;
                    }
                    return new Promise(function (s, u) {
                      n._getCustomParams().then(function (i) {
                        var d = n._isDefined(e.tracking_domain)
                            ? e.tracking_domain
                            : n._trackingDomain,
                          l = new URL("".concat(d, "/sdk/click")),
                          r = new URLSearchParams(l.search);
                        for (var o in i) i.hasOwnProperty(o) && r.set(o, i[o]);
                        r.set("_ef_transaction_id", e.transaction_id || ""),
                          r.set("oid", e.offer_id || ""),
                          r.set("affid", e.affiliate_id || ""),
                          r.set("__cc", e.coupon_code || ""),
                          r.set("async", "json"),
                          n._isDefined(e.uid) && r.set("uid", e.uid),
                          n._isDefined(e.sub1) && r.set("sub1", e.sub1),
                          n._isDefined(e.sub2) && r.set("sub2", e.sub2),
                          n._isDefined(e.sub3) && r.set("sub3", e.sub3),
                          n._isDefined(e.sub4) && r.set("sub4", e.sub4),
                          n._isDefined(e.sub5) && r.set("sub5", e.sub5),
                          n._isDefined(e.adv1) && r.set("adv1", e.adv1),
                          n._isDefined(e.adv2) && r.set("adv2", e.adv2),
                          n._isDefined(e.adv3) && r.set("adv3", e.adv3),
                          n._isDefined(e.adv4) && r.set("adv4", e.adv4),
                          n._isDefined(e.adv5) && r.set("adv5", e.adv5),
                          n._isDefined(e.source_id) &&
                            r.set("source_id", e.source_id),
                          n._isDefined(e.creative_id) &&
                            r.set("creative_id", e.creative_id),
                          n._isDefined(e.organic) &&
                            r.set("__organic_click", e.organic || ""),
                          n._isDefined(e.cost) && r.set("cost", e.cost),
                          n._isDefined(e.fbclid)
                            ? r.set("fbclid", e.fbclid)
                            : n._setDefaultFromURL(r, "fbclid"),
                          n._isDefined(e.gclid)
                            ? r.set("gclid", e.gclid)
                            : n._setDefaultFromURL(r, "gclid"),
                          n._isDefined(e.ttclid)
                            ? r.set("ttclid", e.ttclid)
                            : n._setDefaultFromURL(r, "ttclid"),
                          e.disable_fingerprinting === !0 && r.delete("effp"),
                          n._isDefined(e.parameters) &&
                            Object.keys(e.parameters).forEach(function (a) {
                              return r.set(a, e.parameters[a]);
                            }),
                          (l.search = r.toString()),
                          fetch(l.toString(), {
                            method: "GET",
                            credentials: "include",
                          })
                            .then(
                              function (a) {
                                return a.json();
                              },
                              function (a) {
                                console.error(a), s("");
                              }
                            )
                            .then(function (a) {
                              if (
                                a.transaction_id &&
                                0 < a.transaction_id.length
                              ) {
                                n._persist("ef_witness", "1");
                                var f = n._fetch(
                                  "ef_tid_c_o_".concat(a.oid || e.offer_id)
                                );
                                n._persist(
                                  "ef_tid_c_o_".concat(a.oid || e.offer_id),
                                  f && 0 < f.length
                                    ? "".concat(f, "|").concat(a.transaction_id)
                                    : a.transaction_id
                                );
                                var h = n._fetch("ef_tid_c_a_".concat(a.aid));
                                n._persist(
                                  "ef_tid_c_a_".concat(a.aid),
                                  h && 0 < h.length
                                    ? "".concat(h, "|").concat(a.transaction_id)
                                    : a.transaction_id
                                ),
                                  s(a.transaction_id);
                              }
                            });
                      });
                    });
                  },
                },
                {
                  key: "conversion",
                  value: function (e) {
                    var n = this;
                    if (!e.transaction_id) {
                      if (this._isDefined(e.offer_id))
                        (e.transaction_id = this._fetch(
                          "ef_tid_c_o_".concat(e.offer_id)
                        )),
                          e.transaction_id ||
                            (e.transaction_id = this._fetch(
                              "ef_tid_i_o_".concat(e.offer_id)
                            )),
                          e.transaction_id ||
                            (e.transaction_id = this._fetch(
                              "ef_tid_".concat(e.offer_id)
                            ));
                      else if (
                        this._isDefined(e.advertiser_id) ||
                        this._isDefined(e.aid)
                      ) {
                        var s = e.advertiser_id || e.aid;
                        (e.transaction_id = this._fetch(
                          "ef_tid_c_a_".concat(s)
                        )),
                          e.transaction_id ||
                            (e.transaction_id = this._fetch(
                              "ef_tid_i_a_".concat(s)
                            )),
                          e.transaction_id ||
                            (e.transaction_id = this._fetch(
                              "ef_tid_".concat(e.offer_id)
                            ));
                      }
                    }
                    return (
                      e.transaction_id &&
                        332 < e.transaction_id.length &&
                        (e.transaction_id =
                          e.transaction_id.substring(0, 33) +
                          e.transaction_id.substring(
                            e.transaction_id.length - 297,
                            e.transaction_id.length
                          )),
                      new Promise(function (u, i) {
                        n._getCustomParams().then(function (d) {
                          var l = n._isDefined(e.tracking_domain)
                              ? e.tracking_domain
                              : n._trackingDomain,
                            r = new URL("".concat(l, "/sdk/conversion")),
                            o = new URLSearchParams(r.search);
                          for (var a in d)
                            d.hasOwnProperty(a) && o.set(a, d[a]);
                          o.set("transaction_id", e.transaction_id || ""),
                            o.set("event_id", e.event_id || 0),
                            n._isDefined(e.offer_id) &&
                              o.set("oid", e.offer_id),
                            n._isDefined(e.affiliate_id) &&
                              o.set("affid", e.affiliate_id),
                            n._isDefined(e.advertiser_id) &&
                              o.set("advid", e.advertiser_id),
                            n._isDefined(e.aid) && o.set("aid", e.aid),
                            n._isDefined(e.adv_event_id) &&
                              (o.set("adv_event_id", e.adv_event_id),
                              o.delete("event_id")),
                            n._isDefined(e.coupon_code) &&
                              o.set("coupon_code", e.coupon_code),
                            n._isDefined(e.amount) && o.set("amount", e.amount),
                            n._isDefined(e.adv1) && o.set("adv1", e.adv1),
                            n._isDefined(e.adv2) && o.set("adv2", e.adv2),
                            n._isDefined(e.adv3) && o.set("adv3", e.adv3),
                            n._isDefined(e.adv4) && o.set("adv4", e.adv4),
                            n._isDefined(e.adv5) && o.set("adv5", e.adv5),
                            n._isDefined(e.sub1) && o.set("sub1", e.sub1),
                            n._isDefined(e.sub2) && o.set("sub2", e.sub2),
                            n._isDefined(e.sub3) && o.set("sub3", e.sub3),
                            n._isDefined(e.sub4) && o.set("sub4", e.sub4),
                            n._isDefined(e.sub5) && o.set("sub5", e.sub5),
                            n._isDefined(e.order_id) &&
                              o.set("order_id", e.order_id),
                            n._isDefined(e.verification_token) &&
                              o.set("verification_token", e.verification_token),
                            n._isDefined(e.email) && o.set("email", e.email),
                            n._isDefined(e.order) &&
                              o.set("order", JSON.stringify(e.order)),
                            n._isDefined(e.user_id) &&
                              o.set("user_id", e.user_id),
                            e.disable_fingerprinting === !0 && o.delete("effp"),
                            n._isDefined(e.parameters) &&
                              Object.keys(e.parameters).forEach(function (f) {
                                return o.set(f, e.parameters[f]);
                              }),
                            o.set("event_source_url", window.location.hostname),
                            (r.search = o.toString()),
                            fetch(r.toString(), {
                              method: "GET",
                              headers: { Accept: "application/json" },
                              credentials: "include",
                            })
                              .then(function (f) {
                                return f.status === 200
                                  ? f.json()
                                  : {
                                      conversion_id: "",
                                      transaction_id: "",
                                      html_pixel: "",
                                    };
                              })
                              .then(function (f) {
                                if (f.html_pixel != "") {
                                  var h = document.createElement("iframe");
                                  (h.width = 1),
                                    (h.height = 1),
                                    (h.frameBorder = 0),
                                    document
                                      .getElementsByTagName("body")[0]
                                      .appendChild(h),
                                    h.contentWindow.document.open(),
                                    h.contentWindow.document.write(
                                      f.html_pixel
                                    ),
                                    h.contentWindow.document.close();
                                }
                                u({
                                  transaction_id: f.transaction_id,
                                  conversion_id: f.conversion_id,
                                });
                              })
                              .catch(function (f) {
                                console.log(f),
                                  u({
                                    conversion_id: "",
                                    transaction_id: "",
                                    html_pixel: "",
                                  });
                              });
                        });
                      })
                    );
                  },
                },
                {
                  key: "_getCustomParams",
                  value: function () {
                    return Promise.all([
                      this.customParamProvider,
                      this._getClientHints(),
                    ]).then(function (e) {
                      return e.reduce(function (n, s) {
                        return Object.assign(n, s);
                      }, {});
                    });
                  },
                },
                {
                  key: "_getClientHints",
                  value: function () {
                    return window.navigator.userAgentData
                      ? navigator.userAgentData
                          .getHighEntropyValues([
                            "platform",
                            "platformVersion",
                            "model",
                          ])
                          .then(function (e) {
                            return {
                              sec_ch_ua_platform: e.platform,
                              sec_ch_ua_platform_version: e.platformVersion,
                              sec_ch_ua_model: e.model,
                            };
                          })
                      : Promise.resolve({});
                  },
                },
                {
                  key: "_fetch",
                  value: function () {
                    throw new TypeError("Do not call abstract method _fetch");
                  },
                },
                {
                  key: "_persist",
                  value: function () {
                    throw new TypeError("Do not call abstract method _persist");
                  },
                },
                {
                  key: "_isDefined",
                  value: function (e) {
                    return e !== void 0 && e != null;
                  },
                },
                {
                  key: "_setDefaultFromURL",
                  value: function (e, n) {
                    var s = this.urlParameter(n);
                    this._isDefined(s) && e.set(n, s);
                  },
                },
                {
                  key: "urlParameter",
                  value: function (e) {
                    return new URL(window.location.href).searchParams.get(e);
                  },
                },
              ]),
              t
            );
          })();
          return new ((function () {
            function t() {
              return w(this, t), g(this, S(t).call(this, Promise.resolve({})));
            }
            return (
              (function (e, n) {
                if (typeof n != "function" && n !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(n && n.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  n && m(e, n);
              })(t, Se),
              R(t, [
                {
                  key: "_fetch",
                  value: function (e) {
                    var n = document.cookie
                      .split(";")
                      .map(function (s) {
                        return s.split("=");
                      })
                      .reduce(function (s, u) {
                        try {
                          s[decodeURIComponent(u[0].trim())] =
                            decodeURIComponent(u[1].trim());
                        } catch {}
                        return s;
                      }, {});
                    return n[e] ? n[e].trim() : "";
                  },
                },
                {
                  key: "_persist",
                  value: function (e, n, s) {
                    var u = 2 < arguments.length && s !== void 0 ? s : 30,
                      i = new Date();
                    i.setTime(i.getTime() + 24 * u * 60 * 60 * 1e3),
                      1650 < n.length &&
                        (n =
                          n.substring(0, 33) +
                          n.substring(n.length - 1616, n.length)),
                      this._tld
                        ? (document.cookie = ""
                            .concat(e, "=")
                            .concat(n, ";expires=")
                            .concat(i.toUTCString(), ";path=/;domain=")
                            .concat(this._tld))
                        : (document.cookie = ""
                            .concat(e, "=")
                            .concat(n, ";expires=")
                            .concat(i.toUTCString(), ";path=/"));
                  },
                },
              ]),
              t
            );
          })())();
        });
      })(ne)),
    ne.exports
  );
}
var We = Je();
const ge = Ee(We);
function ot() {
  const [b, A] = U.useState(""),
    [w, T] = U.useState(""),
    [R, S] = U.useState(""),
    m = be(),
    g = Ie(),
    [c] = xe(),
    E = "*",
    v = () => {
      const {
        utm_source: p,
        utm_campaign: L,
        utm_medium: O,
        emailAddress: k,
        firstName: H,
        lastName: B,
        session: V,
      } = g;
      let I = (c == null ? void 0 : c.get("utm_source")) ?? p,
        y = (c == null ? void 0 : c.get("utm_campaign")) ?? L,
        C = (c == null ? void 0 : c.get("utm_medium")) ?? O,
        D = (c == null ? void 0 : c.get("emailAddress")) ?? k,
        M = (c == null ? void 0 : c.get("firstName")) ?? H,
        F = (c == null ? void 0 : c.get("lastName")) ?? B;
      const j = c.get("affid"),
        z = c.get("oid"),
        N = (c == null ? void 0 : c.get("referrer")) ?? g[E],
        Q = (c == null ? void 0 : c.get("session")) ?? V;
      if (Q) {
        let _;
        try {
          _ = JSON.parse(Buffer.from(Q, "base64").toString());
        } catch {
          _ = null;
        }
        _ &&
          ((I = (_ == null ? void 0 : _.utm_source) ?? I),
          (y = (_ == null ? void 0 : _.utm_campaign) ?? y),
          (C = (_ == null ? void 0 : _.utm_medium) ?? C),
          (D = (_ == null ? void 0 : _.email) ?? D),
          (M = (_ == null ? void 0 : _.firstname) ?? M),
          (F = (_ == null ? void 0 : _.lastname) ?? F));
      }
      if (
        ((D ?? M ?? F) && (A(D), T(M), S(F)),
        I && C && y && m(Be({ utmSource: I, utmCampaign: y, utmMedium: C })),
        N && m(Ce(N)),
        z && j)
      ) {
        ge.configure({ tracking_domain: re.everflowTrackingDomain });
        const _ = ge.getTransactionId(z),
          ie = {
            offerId: Number(z),
            partnerPlatformId: Number(j),
            sub1: c.get("sub1") ?? void 0,
            sub2: c.get("sub2") ?? void 0,
            sub3: c.get("sub3") ?? void 0,
            sub4: c.get("sub4") ?? void 0,
            sub5: c.get("sub5") ?? void 0,
            sourceId: c.get("source_id") ?? void 0,
            clickTransactionId: _ || void 0,
          };
        m(Fe(ie));
      }
    };
  return U.useEffect(v, [g, c, m]), [b, w, R];
}
var W = {},
  X = {},
  ye;
function Xe() {
  return (
    ye ||
      ((ye = 1),
      (function (b) {
        var A =
          (X && X.__rest) ||
          function (m, g) {
            var c = {};
            for (var E in m)
              Object.prototype.hasOwnProperty.call(m, E) &&
                g.indexOf(E) < 0 &&
                (c[E] = m[E]);
            if (m != null && typeof Object.getOwnPropertySymbols == "function")
              for (
                var v = 0, E = Object.getOwnPropertySymbols(m);
                v < E.length;
                v++
              )
                g.indexOf(E[v]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(m, E[v]) &&
                  (c[E[v]] = m[E[v]]);
            return c;
          };
        Object.defineProperty(b, "__esModule", { value: !0 }),
          (b.scripts = void 0);
        var w = Ne();
        b.scripts = {};
        var T = function (m) {
          var g = document.querySelector('script[src="' + m + '"]');
          if (g)
            return (b.scripts[m] = { loading: !1, error: null, scriptEl: g });
        };
        function R(m) {
          var g = m.src,
            c = m.checkForExisting,
            E = c === void 0 ? !1 : c,
            v = A(m, ["src", "checkForExisting"]),
            p = g ? b.scripts[g] : void 0;
          !p && E && g && S && (p = T(g));
          var L = (0, w.useState)(p ? p.loading : !!g),
            O = L[0],
            k = L[1],
            H = (0, w.useState)(p ? p.error : null),
            B = H[0],
            V = H[1],
            I = (0, w.useState)(!1),
            y = I[0],
            C = I[1];
          return (
            (0, w.useEffect)(
              function () {
                if (!(!S || !g || y || B)) {
                  (p = b.scripts[g]), !p && E && (p = T(g));
                  var D;
                  p
                    ? (D = p.scriptEl)
                    : ((D = document.createElement("script")),
                      (D.src = g),
                      Object.keys(v).forEach(function (j) {
                        D[j] === void 0
                          ? D.setAttribute(j, v[j])
                          : (D[j] = v[j]);
                      }),
                      (p = b.scripts[g] =
                        { loading: !0, error: null, scriptEl: D }));
                  var M = function () {
                      p && (p.loading = !1), k(!1), C(!0);
                    },
                    F = function (j) {
                      p && (p.error = j), V(j);
                    };
                  return (
                    D.addEventListener("load", M),
                    D.addEventListener("error", F),
                    document.body.appendChild(D),
                    function () {
                      D.removeEventListener("load", M),
                        D.removeEventListener("error", F);
                    }
                  );
                }
              },
              [g]
            ),
            [O, B]
          );
        }
        b.default = R;
        var S = typeof window < "u" && typeof window.document < "u";
      })(X)),
    X
  );
}
var ve;
function Qe() {
  return (
    ve ||
      ((ve = 1),
      (function (b) {
        var A =
          (W && W.__importDefault) ||
          function (T) {
            return T && T.__esModule ? T : { default: T };
          };
        Object.defineProperty(b, "__esModule", { value: !0 }),
          (b.scripts = b.default = void 0);
        var w = Xe();
        Object.defineProperty(b, "default", {
          enumerable: !0,
          get: function () {
            return A(w).default;
          },
        }),
          Object.defineProperty(b, "scripts", {
            enumerable: !0,
            get: function () {
              return w.scripts;
            },
          });
      })(W)),
    W
  );
}
var Ye = Qe();
const Ze = Ee(Ye),
  et = () => {
    const [b, A] = Ze({ src: "https://accounts.google.com/gsi/client" }),
      w = window.google,
      T = ae(Me),
      R = ae((p) => p.uiState.language.language),
      S = U.useCallback(() => !!T && Date.now() - T < Ke, [T]),
      [m, g] = U.useState(""),
      { login: c } = qe(),
      E = we();
    U.useEffect(() => {
      ce.ga((p) => {
        g(p.get("clientId") ?? "noconsent");
      });
    }, []);
    const v = U.useCallback(
      async (p) => {
        const L = await (
          await fetch(
            `https://oauth2.googleapis.com/tokeninfo?id_token=${p.credential}`
          )
        ).json();
        if (S()) return void E(te.login.path);
        await c({ googleTokenId: p.credential, email: L.email, gaClientID: m });
      },
      [m, c, S, E]
    );
    return (
      U.useEffect(() => {
        !b &&
          !A &&
          w &&
          (w.accounts.id.initialize({
            client_id: re.googleClientId,
            callback: v,
          }),
          w.accounts.id.renderButton(document.getElementById("googleLogin"), {
            theme: "outline",
            size: "large",
            width: 328,
            locale: R,
            shape: "pill",
          }));
      }, [R, A, w, v, b]),
      Ve.jsx("div", { id: "googleLogin" })
    );
  },
  st = U.memo(et);
export { ge as E, st as G, qe as a, ot as u };
