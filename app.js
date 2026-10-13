(function () {
  const rackets = window.RACKETS || [];
  const shop = window.SHOP || {};

  const LEVELS = { beginner: "מתחילים", intermediate: "בינוניים", advanced: "מתקדמים" };
  const CONDITIONS = { new: "חדש", used: "משומש" };

  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const count = document.getElementById("result-count");
  const form = document.getElementById("filters");

  const nis = new Intl.NumberFormat("he-IL", { style: "currency", currency: "ILS", maximumFractionDigits: 0 });

  function waLink(text) {
    return "https://wa.me/" + (shop.whatsapp || "") + "?text=" + encodeURIComponent(text);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ציור מחבט פשוט; גודל הראש משתנה לפי גודל הראש האמיתי
  function racketSVG(r) {
    const rx = 26 + (r.headSize - 95) * 0.6;
    const ry = rx * 1.3;
    const cy = 8 + ry;
    const throatY = cy + ry;
    const strings = [];
    for (let i = -3; i <= 3; i++) {
      const x = 40 + i * (rx / 4);
      const h = ry * Math.sqrt(Math.max(0, 1 - Math.pow((x - 40) / rx, 2)));
      strings.push(`<line x1="${x}" y1="${cy - h}" x2="${x}" y2="${cy + h}"/>`);
      const y = cy + i * (ry / 4);
      const w = rx * Math.sqrt(Math.max(0, 1 - Math.pow((y - cy) / ry, 2)));
      strings.push(`<line x1="${40 - w}" y1="${y}" x2="${40 + w}" y2="${y}"/>`);
    }
    return `<svg viewBox="0 0 80 210" aria-hidden="true">
      <g stroke="#A9B2AC" stroke-width="1">${strings.join("")}</g>
      <ellipse cx="40" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${esc(r.frame)}" stroke-width="6"/>
      <path d="M${40 - rx * 0.55} ${throatY - 6} L36 ${throatY + 34} M${40 + rx * 0.55} ${throatY - 6} L44 ${throatY + 34}" stroke="${esc(r.frame)}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <rect x="34" y="${throatY + 32}" width="12" height="${200 - throatY - 32}" rx="4" fill="${esc(r.frame)}"/>
      <rect x="35" y="${throatY + 62}" width="10" height="${200 - throatY - 64}" rx="3" fill="#2B2F36"/>
    </svg>`;
  }

  function card(r) {
    const name = `${r.brand} ${r.model}`;
    const art = r.photo
      ? `<img src="${esc(r.photo)}" alt="${esc(name)}" loading="lazy">`
      : racketSVG(r);
    const ask = waLink(`היי, אני מתעניין/ת ב-${name} (${nis.format(r.price)}). הוא עדיין זמין?`);
    return `<li class="racket">
      <div class="racket-art">${art}</div>
      <div class="racket-head">
        <p class="racket-brand">${esc(r.brand)}${r.year ? ", " + esc(r.year) : ""}</p>
        <h3>${esc(r.model)}</h3>
        <span class="tag ${r.condition === "new" ? "is-new" : ""}">${CONDITIONS[r.condition] || ""}</span>
        <span class="tag">${LEVELS[r.level] || ""}</span>
        ${r.conditionNote ? `<p class="racket-note">${esc(r.conditionNote)}</p>` : ""}
      </div>
      <dl class="racket-specs">
        <div><dt>ראש</dt><dd>${esc(r.headSize)}</dd></div>
        <div><dt>משקל</dt><dd>${esc(r.weight)} ג'</dd></div>
        <div><dt>איזון</dt><dd>${esc(r.balance)}</dd></div>
        <div><dt>אחיזה</dt><dd>${esc(r.grip)}</dd></div>
      </dl>
      <div class="racket-foot">
        <span class="price">${nis.format(r.price)}</span>
        <a class="ask" href="${ask}" target="_blank" rel="noopener" aria-label="שאלה על ${esc(name)} בוואטסאפ">שאלה על המחבט</a>
      </div>
    </li>`;
  }

  function render() {
    const data = new FormData(form);
    const level = data.get("level");
    const condition = data.get("condition");
    const sort = data.get("sort");

    let list = rackets.filter(r =>
      (level === "all" || r.level === level) &&
      (condition === "all" || r.condition === condition)
    );

    const sorters = {
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      "weight-asc": (a, b) => a.weight - b.weight
    };
    if (sorters[sort]) list = list.slice().sort(sorters[sort]);

    grid.innerHTML = list.map(card).join("");
    empty.hidden = list.length > 0;
    count.textContent = list.length === 1 ? "מחבט אחד" : `${list.length} מחבטים`;
  }

  form.addEventListener("change", render);
  render();

  document.getElementById("contact-whatsapp").href = waLink("היי, אני מחפש/ת מחבט טניס ורציתי להתייעץ.");
  document.getElementById("year").textContent = new Date().getFullYear();
})();
