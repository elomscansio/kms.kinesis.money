import { S as s } from "./socket-client-ClPHFSdE.js";
import "./index-B1IYvx0M.js";
class e extends s {
  subscribeToSnapshotsChanges() {
    return this.subscribe({ path: "/notifications/market-data/v2/snapshots" });
  }
  unsubscribe() {
    this.disconnect();
  }
  isConnected() {
    return this.connected;
  }
}
const n = new e();
class i {
  static getInstance() {
    return n;
  }
}
export { i as S };
