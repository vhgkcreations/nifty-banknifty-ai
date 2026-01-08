let widget;

function loadChart(symbol) {
  if (widget) widget.remove();

  widget = new TradingView.widget({
    container_id: "tv-chart",
    symbol: symbol,
    interval: "5",
    theme: "dark",
    style: "1",
    locale: "en",
    hide_side_toolbar: false,
    allow_symbol_change: false
  });
}
