function updateStats(win) {
  let s = JSON.parse(localStorage.getItem("stats")) || { t: 0, w: 0, l: 0 };
  s.t++;
  win ? s.w++ : s.l++;
  localStorage.setItem("stats", JSON.stringify(s));
  showStats();
}

function showStats() {
  let s = JSON.parse(localStorage.getItem("stats")) || { t: 0, w: 0, l: 0 };
  document.getElementById("signals").innerText = s.t;
  document.getElementById("wins").innerText = s.w;
  document.getElementById("losses").innerText = s.l;
  document.getElementById("winrate").innerText =
    s.t ? ((s.w / s.t) * 100).toFixed(1) : 0;
}
