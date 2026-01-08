function getIndicators() {
  return {
    ema20: Math.random() * 100,
    ema50: Math.random() * 100,
    rsi: 30 + Math.random() * 40,
    macd: Math.random() > 0.5,
    volume: Math.random() > 0.4
  };
}
