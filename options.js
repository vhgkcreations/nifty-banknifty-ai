function getOption(confidence, trend, price) {
  let strike = Math.round(price / 100) * 100;

  if (confidence >= 80)
    return strike + (trend === "BULLISH" ? " CE (ITM)" : " PE (ITM)");

  if (confidence >= 70)
    return strike + (trend === "BULLISH" ? " CE (ATM)" : " PE (ATM)");

  return "NO TRADE";
}
