/* ═══════════════════════════════════════════════════════════════
   Schere-Stein-Papier Turnier – App-Logik
   Jeder spielt gegen jeden (Round-Robin, 66 Matches bei 12 Spielern).
   Ergebnis: 1 Punkt für Sieg, 0 für Niederlage/Unentschieden.
═══════════════════════════════════════════════════════════════ */

'use strict';

// ─── Zustand ────────────────────────────────────────────────
const ANZAHL = 12;
// Jeder Spieler bestreitet RUNDEN Begegnungen (polygon-Methode).
// Bei 12 Spielern: 6 Runden × 6 Spiele = 36 Spiele gesamt.
const RUNDEN = 6;

let spieler = [];   // Array<string> – Namen
let matches = [];   // Array<{ a, b, ergebnis: null|'a'|'remi'|'b' }>

// ─── DOM-Referenzen ──────────────────────────────────────────
const seiteKonfig    = document.getElementById('seite-konfiguration');
const seiteTurnier   = document.getElementById('seite-turnier');
const namenGrid      = document.getElementById('namen-grid');
const btnStarten     = document.getElementById('btn-starten');
const matchListe     = document.getElementById('match-liste');
const ranglisteBody  = document.getElementById('rangliste-body');
const fortschrittText  = document.getElementById('fortschritt-text');
const fortschrittBalken = document.getElementById('fortschritt-balken');

// ─── Initialisierung: Namensfelder ──────────────────────────
(function namenfelderErstellen() {
  for (let i = 1; i <= ANZAHL; i++) {
    const label = document.createElement('label');
    label.textContent = `Spieler ${i}`;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = `Spieler ${i}`;
    input.maxLength = 24;
    input.dataset.idx = i - 1;
    label.appendChild(input);
    namenGrid.appendChild(label);
  }
})();

// ─── Turnier starten ────────────────────────────────────────
btnStarten.addEventListener('click', () => {
  const inputs = namenGrid.querySelectorAll('input');
  spieler = Array.from(inputs).map(inp => inp.value.trim() || `Spieler ${+inp.dataset.idx + 1}`);

  // Doppelnamen verhindern: Suffix anhängen
  const zaehler = {};
  spieler = spieler.map(name => {
    zaehler[name] = (zaehler[name] || 0) + 1;
    return zaehler[name] > 1 ? `${name} (${zaehler[name]})` : name;
  });

  // Matches generieren: RUNDEN Runden nach der Polygon-Methode.
  // Spieler ANZAHL-1 ist fixiert, die anderen rotieren.
  matches = matchesGenerieren();

  seiteKonfig.classList.add('versteckt');
  seiteTurnier.classList.remove('versteckt');

  matchListeRendern();
  ranglisteAktualisieren();
});

// ─── Matches generieren (Polygon-Methode) ───────────────────
// Spieler ANZAHL-1 ist fixiert. Pro Runde rotieren die anderen
// n-1 Spieler, sodass jeder exakt RUNDEN Partien bestreitet.
function matchesGenerieren() {
  const n = ANZAHL;
  const fixiert = n - 1;
  const ergebnis = [];

  for (let runde = 0; runde < RUNDEN; runde++) {
    ergebnis.push({ runde, a: runde, b: fixiert, ergebnis: null });

    for (let i = 1; i <= (n - 2) / 2; i++) {
      const x = (runde + i) % (n - 1);
      const y = (runde - i + (n - 1)) % (n - 1);
      ergebnis.push({ runde, a: Math.min(x, y), b: Math.max(x, y), ergebnis: null });
    }
  }
  return ergebnis;
}

// ─── Match-Liste rendern ────────────────────────────────────
function matchListeRendern() {
  matchListe.innerHTML = '';
  let aktuelleRunde = -1;

  matches.forEach((match, idx) => {
    // Runden-Überschrift einfügen wenn neue Runde beginnt
    if (match.runde !== aktuelleRunde) {
      aktuelleRunde = match.runde;
      const header = document.createElement('h3');
      header.className = 'runden-header';
      header.textContent = `Runde ${aktuelleRunde + 1}`;
      matchListe.appendChild(header);
    }

    const zeile = document.createElement('div');
    zeile.className = 'match-zeile';
    zeile.dataset.idx = idx;

    // Nummer
    const nr = document.createElement('span');
    nr.className = 'match-nr';
    nr.textContent = `#${idx + 1}`;

    // Spieler-Anzeige
    const spielerSpan = document.createElement('span');
    spielerSpan.className = 'match-spieler';
    spielerSpan.innerHTML =
      `<strong>${escHtml(spieler[match.a])}</strong>` +
      `<span class="vs"> vs. </span>` +
      `<strong>${escHtml(spieler[match.b])}</strong>`;

    // Ergebnis-Buttons
    const buttons = document.createElement('div');
    buttons.className = 'ergebnis-buttons';

    const btnA    = ergebnisButton(`${kurzname(spieler[match.a])} gewinnt`, 'btn-sieg-a', 'a', idx);
    const btnRemi = ergebnisButton('Unentschieden', 'btn-remi', 'remi', idx);
    const btnB    = ergebnisButton(`${kurzname(spieler[match.b])} gewinnt`, 'btn-sieg-b', 'b', idx);

    buttons.appendChild(btnA);
    buttons.appendChild(btnRemi);
    buttons.appendChild(btnB);

    zeile.appendChild(nr);
    zeile.appendChild(spielerSpan);
    zeile.appendChild(buttons);
    matchListe.appendChild(zeile);
  });
}

function ergebnisButton(text, css, wert, matchIdx) {
  const btn = document.createElement('button');
  btn.className = `btn ${css}`;
  btn.textContent = text;
  btn.addEventListener('click', () => ergebnisSetzen(matchIdx, wert));
  return btn;
}

// ─── Ergebnis setzen ────────────────────────────────────────
function ergebnisSetzen(matchIdx, wert) {
  matches[matchIdx].ergebnis = wert;
  matchZeileAktualisieren(matchIdx);
  ranglisteAktualisieren();
  fortschrittAktualisieren();
}

function matchZeileAktualisieren(matchIdx) {
  const zeile = matchListe.querySelector(`.match-zeile[data-idx="${matchIdx}"]`);
  if (!zeile) return;
  const [btnA, btnRemi, btnB] = zeile.querySelectorAll('.ergebnis-buttons .btn');
  const ergebnis = matches[matchIdx].ergebnis;
  btnA.classList.toggle('aktiv', ergebnis === 'a');
  btnRemi.classList.toggle('aktiv', ergebnis === 'remi');
  btnB.classList.toggle('aktiv', ergebnis === 'b');
}

// ─── Rangliste berechnen & rendern ──────────────────────────
function ranglisteAktualisieren() {
  // Punkte & Spiele zählen
  const siege   = new Array(ANZAHL).fill(0);
  const gespielt = new Array(ANZAHL).fill(0);

  matches.forEach(m => {
    if (m.ergebnis === null) return;
    gespielt[m.a]++;
    gespielt[m.b]++;
    if (m.ergebnis === 'a') siege[m.a]++;
    else if (m.ergebnis === 'b') siege[m.b]++;
    // 'remi' → kein Punkt
  });

  const offen = gespielt.map((g, i) => (ANZAHL - 1) - g);

  // Rangliste sortieren: erst Siege (absteigend), dann Name (alphabetisch)
  const reihenfolge = spieler
    .map((_, i) => i)
    .sort((x, y) => siege[y] - siege[x] || spieler[x].localeCompare(spieler[y], 'de'));

  ranglisteBody.innerHTML = '';
  reihenfolge.forEach((spielerIdx, rang) => {
    const tr = document.createElement('tr');
    if (rang === 0) tr.className = 'rang-1';
    else if (rang === 1) tr.className = 'rang-2';
    else if (rang === 2) tr.className = 'rang-3';

    tr.innerHTML =
      `<td>${rang + 1}.</td>` +
      `<td>${escHtml(spieler[spielerIdx])}</td>` +
      `<td><strong>${siege[spielerIdx]}</strong></td>` +
      `<td>${gespielt[spielerIdx]}</td>` +
      `<td>${offen[spielerIdx]}</td>`;
    ranglisteBody.appendChild(tr);
  });

  fortschrittAktualisieren();
}

function fortschrittAktualisieren() {
  const eingetragen = matches.filter(m => m.ergebnis !== null).length;
  const gesamt = matches.length;
  fortschrittText.textContent = `${eingetragen} von ${gesamt} Spielen eingetragen`;
  fortschrittBalken.style.width = `${(eingetragen / gesamt) * 100}%`;
}

// ─── Hilfsfunktionen ────────────────────────────────────────
function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function kurzname(name) {
  const teile = name.split(/\s+/);
  return teile[0]; // Vorname / erstes Wort
}
