var x = ((c) => (
  (c.ada = "ada"),
  (c.kvtSellTradeEnabled = "kvt_sell_trade_enabled"),
  (c.api_key = "api_key"),
  (c.referrerYield = "referrers_yield"),
  (c.aud = "aud"),
  (c.cad = "cad"),
  (c.sgd = "sgd"),
  (c.chf = "chf"),
  (c.aed = "aed"),
  (c.xlm = "xlm"),
  (c.xdc = "xdc"),
  (c.usdc = "usdc"),
  (c.kes = "kes"),
  (c.gbx = "gbx"),
  (c.xau = "xau"),
  (c.xaa = "xaa"),
  (c.usd1 = "usd1"),
  (c.xeroExportStatement = "xeroExportStatement"),
  (c.debitCard = "debit_card"),
  (c.fiatRepublic = "fiat_republic"),
  (c.paybis = "paybis"),
  (c.cointracking = "cointracking"),
  c
))(x || {});
function a(c, i) {
  const n = (c && Array.isArray(c) ? c : []).find(
    ({ name: f }) => f.toLocaleLowerCase() === i.toLocaleLowerCase()
  );
  return !n || n.enabled;
}
function b(c, i) {
  const n = (c && Array.isArray(c) ? c : []).find(
    ({ name: f }) => f.toLocaleLowerCase() === i.toLocaleLowerCase()
  );
  return n ? n.enabled : !1;
}
export { x as S, b as a, a as f };
