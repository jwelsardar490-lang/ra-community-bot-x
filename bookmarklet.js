
(function () {
  if (document.getElementById("ra-cyber-overlay")) return;

  const style = document.createElement("style");
  style.textContent = `
    #ra-cyber-overlay {
      position:fixed; inset:0; z-index:9999999;
      background:rgba(3,5,10,.97); color:#00ff9d;
      font-family:monospace; display:flex;
      align-items:center; justify-content:center;
      padding:20px; box-sizing:border-box;
    }
    #ra-cyber-panel {
      width:100%; max-width:480px;
      border:1px solid #ff1744; border-radius:16px;
      padding:22px; background:#080c12;
      box-shadow:0 0 30px #ff174455;
    }
    #ra-cyber-title {
      color:#ff1744; font-size:23px;
      text-shadow:0 0 12px #ff1744;
      animation:ra-glitch .7s infinite alternate;
    }
    @keyframes ra-glitch {
      from {opacity:.65;transform:translateX(-1px)}
      to {opacity:1;transform:translateX(1px)}
    }
    #ra-cyber-log {
      height:175px; overflow:hidden;
      font-size:12px; line-height:2;
      color:#00ff9d; margin-top:20px;
    }
    #ra-cyber-track {
      height:8px;background:#202630;
      border-radius:10px;overflow:hidden;
      margin:18px 0;
    }
    #ra-cyber-progress {
      width:0%;height:100%;background:#ff1744;
      box-shadow:0 0 12px #ff1744;
      transition:width .25s;
    }
    #ra-cyber-result {
      display:none;text-align:center;
      padding:18px;border:1px solid #00ff9d;
      border-radius:12px;margin-top:15px;
    }
    #ra-cyber-close {
      width:100%;padding:13px;
      background:#ff1744;color:white;
      border:0;border-radius:8px;
      font-weight:bold;margin-top:15px;
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "ra-cyber-overlay";
  overlay.innerHTML = `
    <div id="ra-cyber-panel">
      <div style="font-size:11px;letter-spacing:3px">
        RA COMMUNITY // SECURITY TERMINAL
      </div>
      <h2 id="ra-cyber-title">INITIALIZING...</h2>
      <div id="ra-cyber-log"></div>
      <div id="ra-cyber-track">
        <div id="ra-cyber-progress"></div>
      </div>
      <div id="ra-cyber-percent">0% ANALYZED</div>
      <div id="ra-cyber-result">
        <h2 style="color:#00ff9d">SCAN COMPLETE</h2>
        <h3 style="color:#ffca28">NO VERIFIED SIGNAL</h3>
        <p style="color:#aaa;font-size:12px">
          Demo analysis only. No verified market signal available.
        </p>
      </div>
      <button id="ra-cyber-close" style="display:none">
        CLOSE TERMINAL
      </button>
      <div style="font-size:10px;color:#657080;margin-top:15px">
        RA COMMUNITY BOT X • VISUAL SIMULATION
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const logs = [
    ">> INITIALIZING CYBER TERMINAL...",
    ">> CONNECTING ANALYSIS INTERFACE...",
    ">> LOADING CHART DATA...",
    ">> PROCESSING RSI INDICATOR...",
    ">> PROCESSING EMA INDICATOR...",
    ">> CHECKING MARKET DATA...",
    ">> VALIDATING DATA QUALITY...",
    ">> CALCULATING ANALYSIS...",
    ">> GENERATING DEMO RESULT...",
    ">> SCAN COMPLETED."
  ];

  const log = document.getElementById("ra-cyber-log");
  const progress = document.getElementById("ra-cyber-progress");
  const percent = document.getElementById("ra-cyber-percent");
  const title = document.getElementById("ra-cyber-title");
  let i = 0;

  const timer = setInterval(() => {
    if (i >= logs.length) {
      clearInterval(timer);
      title.textContent = "ANALYSIS COMPLETE";
      document.getElementById("ra-cyber-result").style.display = "block";
      document.getElementById("ra-cyber-close").style.display = "block";
      return;
    }

    log.innerHTML += `<div>${logs[i]}</div>`;
    log.scrollTop = log.scrollHeight;

    const value = Math.round(((i + 1) / logs.length) * 100);
    progress.style.width = value + "%";
    percent.textContent = value + "% ANALYZED";
    i++;
  }, 650);

  document.getElementById("ra-cyber-close").onclick = () => {
    clearInterval(timer);
    overlay.remove();
    style.remove();
  };
})();
