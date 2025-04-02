import {
  az as t,
  aA as o,
  df as x,
  fb as f,
  fc as b,
} from "./index-B1IYvx0M.js";
import { E as n } from "./depth.listener-Bb9oU3qt.js";
const O = t("connectExecutedOrdersSocket"),
  l = t("disconnectExecutedOrdersSocket");
o.startListening({
  actionCreator: O,
  effect: (d, { getState: c, dispatch: r, cancelActiveListeners: i }) => {
    i();
    const {
        exchangeView: {
          selectedPair: { symbolId: a },
        },
      } = c(),
      s = n.getInstance();
    s.isConnected() ||
      s.subscribeToExecutionOrders(a).subscribe(({ data: e }) => {
        const { symbolId: u } = x(c());
        Array.isArray(e) && e.length && e[0].symbolId === u
          ? r(f(e))
          : Array.isArray(e) || r(b(e));
      });
  },
});
o.startListening({
  actionCreator: l,
  effect: (d, { cancelActiveListeners: c }) => {
    c(), n.getInstance().unsubscribe();
  },
});
export { O as c, l as d };
