var v = Object.defineProperty;
var x = (a, e, t) =>
  e in a
    ? v(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (a[e] = t);
var r = (a, e, t) => x(a, typeof e != "symbol" ? e + "" : e, t);
import {
  av as l,
  ay as C,
  e as M,
  ag as y,
  az as g,
  aA as k,
  df as D,
  f9 as w,
  fa as O,
  dj as U,
} from "./index-B1IYvx0M.js";
import { S as I, a as c } from "./socket-client-ClPHFSdE.js";
class A extends I {
  subscribeToDepthUpdate(e) {
    return this.subscribe({
      path: "/notifications/market-data/v2/depth",
      queryParams: new Map().set("symbolId", e),
    });
  }
  subscribeToGenericDepthUpdate(e) {
    return this.subscribe({
      path: "/notifications/market-data/depth-updates-generic",
      queryParams: new Map().set("symbolId", e),
    });
  }
  changePair(e) {
    return this.sendEvent(c.changeSymbol, { symbolId: e });
  }
  unsubscribe() {
    this.disconnect();
  }
  isConnected() {
    return this.connected;
  }
}
class j {
  constructor() {
    r(this, "subscriptionSubject");
    r(this, "onChangeBidInterval");
    r(this, "onChangeAskInterval");
    r(this, "socketConnected", !1);
    r(this, "random", !0);
  }
  subscribeToDepthUpdate(e) {
    return (
      (this.subscriptionSubject = new l()),
      this.spinUpMockedOrdersFlow(e),
      (this.socketConnected = !0),
      this.subscriptionSubject
    );
  }
  subscribeToGenericDepthUpdate(e) {
    return (
      (this.subscriptionSubject = new l()),
      this.spinUpMockedOrdersFlow(e),
      (this.socketConnected = !0),
      this.subscriptionSubject
    );
  }
  spinUpMockedOrdersFlow(e) {
    const t = this.createOnInit(e);
    setTimeout(() => {
      var s;
      (s = this.subscriptionSubject) == null || s.next(t),
        this.spinUpOnChange(e, t.data.bid, t.data.ask);
    }, 1e3);
  }
  spinUpOnChange(e, t, s) {
    this.random &&
      ((this.onChangeBidInterval = setInterval(() => {
        var n;
        (n = this.subscriptionSubject) == null ||
          n.next({
            type: c.onChange,
            data: [
              {
                symbolId: e,
                direction: "bid",
                depth: t
                  .concat(this.createRandomData())
                  .sort((i, o) => o.price - i.price),
              },
            ],
          });
      }, 3e5)),
      (this.onChangeAskInterval = setInterval(() => {
        var n;
        (n = this.subscriptionSubject) == null ||
          n.next({
            type: c.onChange,
            data: [
              {
                symbolId: e,
                direction: "ask",
                depth: s
                  .concat(this.createRandomData())
                  .sort((i, o) => i.price - o.price),
              },
            ],
          });
      }, 3e5)));
  }
  unsubscribe() {
    return (
      this.onChangeBidInterval && clearInterval(this.onChangeBidInterval),
      this.onChangeAskInterval && clearInterval(this.onChangeAskInterval),
      C.ofSuccess()
    );
  }
  changePair(e) {
    this.onChangeAskInterval && clearInterval(this.onChangeAskInterval),
      this.spinUpMockedOrdersFlow(e);
  }
  isConnected() {
    return this.socketConnected;
  }
  createOnInit(e) {
    const t = this.random
        ? [
            ...new Set(
              [...new Array(this.randomNumber(50))].map(() =>
                this.createRandomData()
              )
            ).values(),
          ]
        : [
            { amount: 29, price: 28.42 },
            { amount: 33, price: 29.89 },
            { amount: 8, price: 36.07 },
            { amount: 47, price: 37.92 },
            { amount: 9, price: 49.56 },
          ],
      s = Math.max(...t.map(({ price: n }) => n));
    return {
      type: c.onInit,
      data: {
        symbolId: e,
        bid: t.sort((n, i) => i.price - n.price),
        ask: t
          .map((n) => ({ ...n, price: n.price === s ? s : n.price + s }))
          .sort((n, i) => n.price - i.price),
      },
    };
  }
  createRandomData() {
    return { amount: this.randomNumber(50), price: this.randomNumber(50, 2) };
  }
  randomNumber(e = 10, t = 0) {
    const s = 10 ** t;
    return Math.floor(Math.random() * e * s) / s + 1;
  }
}
const h = class h {
  static getInstance() {
    return h.depthUpdateSocketClient;
  }
};
r(h, "depthUpdateSocketClient", new A()),
  r(h, "mockDepthUpdateSocketClient", new j());
let u = h;
class P extends I {
  constructor() {
    super({ socketRootUrl: M.exchangeApiRoot });
  }
  subscribeToExecutionOrders(e) {
    return this.subscribe({
      path: "/notifications/order-data/executions",
      queryParams: new Map().set("symbolId", e),
    });
  }
  changePair(e) {
    return this.sendEvent(c.changeSymbol, { symbolId: e });
  }
  unsubscribe() {
    this.disconnect();
  }
  isConnected() {
    return this.connected;
  }
}
class T {
  constructor() {
    r(this, "subscriptionSubject", new l());
    r(this, "onChangeInterval");
    r(this, "socketConnected", !1);
  }
  subscribeToExecutionOrders(e) {
    return (
      this.spinUpMockedOrderExecutions(e),
      (this.socketConnected = !0),
      this.subscriptionSubject
    );
  }
  spinUpMockedOrderExecutions(e) {
    setTimeout(() => {
      this.subscriptionSubject.next({
        type: c.onInit,
        data: Array.from(Array(100).keys()).map((t) => this.getMockData(e, t)),
      });
    }, 1e3),
      (this.onChangeInterval = setInterval(() => {
        this.subscriptionSubject.next({
          type: c.onChange,
          data: this.getMockData(e, 0),
        });
      }, 5e3));
  }
  getMockData(e, t = 1) {
    return {
      date: y().subtract(t, "hour").toISOString(),
      amount: Math.random() * 100,
      price: Math.random() * 10,
      symbolId: e,
    };
  }
  unsubscribe() {
    return (
      this.onChangeInterval && clearInterval(this.onChangeInterval),
      C.ofSuccess()
    );
  }
  changePair(e) {
    this.onChangeInterval && clearInterval(this.onChangeInterval),
      this.spinUpMockedOrderExecutions(e);
  }
  isConnected() {
    return this.socketConnected;
  }
}
const d = class d {
  static getInstance() {
    return d.executionOrderSocketClient;
  }
};
r(d, "executionOrderSocketClient", new P()),
  r(d, "mockExecutionOrderSocketClient", new T());
let m = d;
const E = g("connectDepthSocket"),
  R = g("disconnectDepthSocket");
k.startListening({
  actionCreator: E,
  effect: (a, { getState: e, dispatch: t, cancelActiveListeners: s }) => {
    s();
    const {
        user: n,
        exchangeView: {
          selectedPair: { symbolId: i },
        },
      } = e(),
      o = u.getInstance();
    o.isConnected() ||
      (n
        ? o.subscribeToDepthUpdate(i)
        : o.subscribeToGenericDepthUpdate(i)
      ).subscribe(({ data: p, type: f }) => {
        const { symbolId: S } = D(e()),
          b = Array.isArray(p) ? p[0] : p;
        b.symbolId === S && (f === c.onInit ? t(w(b)) : t(O(b)));
      });
  },
});
k.startListening({
  actionCreator: U,
  effect: (a, { cancelActiveListeners: e }) => {
    e();
    const t = `${a.payload.base}_${a.payload.quote}`,
      s = u.getInstance(),
      n = m.getInstance();
    s.changePair(t), n.changePair(t);
  },
});
k.startListening({
  actionCreator: R,
  effect: (a, { cancelActiveListeners: e }) => {
    e(), u.getInstance().unsubscribe();
  },
});
export { m as E, E as c, R as d };
