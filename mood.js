function getMarketMood() {
  const moods = ["TREND DAY 🔥", "SIDEWAYS ⚠️", "VOLATILE ⚡"];
  return moods[Math.floor(Math.random() * moods.length)];
}
