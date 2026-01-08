function loadAll() {
  let symbol = document.getElementById("symbol").value;
  loadChart(symbol);

  let ind = getIndicators();
  let mood = getMarketMood();

  let bullish = ind.ema20 > ind.ema50 && ind.rsi > 40 && ind.macd;

  let confidence =
    (bullish ? 30 : 0) +
    (ind.rsi > 40 && ind.rsi < 60 ? 20 : 0) +
    (ind.macd ? 20 : 0) +
    (ind.volume ? 20 : 0) +
    10;

  document.getElementById("market").innerText =
    symbol.includes("BANK") ? "BANKNIFTY" : "NIFTY";

  document.getElementById("mood").innerText = mood;
  document.getElementById("trend").innerText =
    bullish ? "BULLISH 🟢" : "BEARISH 🔴";
  document.getElementById("confidence").innerText = confidence;

  if (confidence >= MIN_CONFIDENCE && mood !== "SIDEWAYS ⚠️") {
    document.getElementById("entry").innerText = "Breakout Entry";
    document.getElementById("target").innerText = "Target 1 / Target 2";
    document.getElementById("sl").innerText = "Strict SL";
    document.getElementById("option").innerText =
      getOption(confidence, bullish ? "BULLISH" : "BEARISH", 48000);
    playAlert();
  } else {
    document.getElementById("entry").innerText = "NO TRADE";
    document.getElementById("target").innerText = "-";
    document.getElementById("sl").innerText = "-";
    document.getElementById("option").innerText = "-";
  }

  showStats();
}

loadAll();
setInterval(loadAll, REFRESH_TIME);
