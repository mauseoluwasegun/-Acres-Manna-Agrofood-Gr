/* Generates brand logo SVGs for HappyMan Foods and Maluza Foods Co. */
const fs = require("fs");
const path = require("path");

const NAVY = "#1E2A5A";
const ORANGE = "#E9632B";
const GOLD = "#EDB62C";
const OUT = path.join(__dirname, "public", "images", "brands");

const W = 1280;
const H = 500;
const cx = 170;
const cy = 250;

/* ---------------- HappyMan Foods ---------------- */
// Sun: 12 rays around a core with a simple smiling face.
const rays = [];
for (let i = 0; i < 12; i++) {
  const a = (i * Math.PI) / 6;
  const x1 = cx + Math.cos(a) * 76;
  const y1 = cy + Math.sin(a) * 76;
  const x2 = cx + Math.cos(a) * 104;
  const y2 = cy + Math.sin(a) * 104;
  rays.push(
    `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${ORANGE}" stroke-width="17" stroke-linecap="round"/>`,
  );
}

const happyMan = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="HappyMan Foods logo">
  <title>HappyMan Foods</title>
  <g>${rays.join("\n    ")}</g>
  <circle cx="${cx}" cy="${cy}" r="62" fill="${ORANGE}"/>
  <circle cx="${cx - 20}" cy="${cy - 8}" r="7.5" fill="#fff"/>
  <circle cx="${cx + 20}" cy="${cy - 8}" r="7.5" fill="#fff"/>
  <path d="M${cx - 27} ${cy + 18} Q${cx} ${cy + 42} ${cx + 27} ${cy + 18}" stroke="#fff" stroke-width="11" stroke-linecap="round" fill="none"/>
  <text x="300" y="292" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" letter-spacing="-3">
    <tspan font-size="116" font-weight="800" fill="${NAVY}">HappyMan</tspan>
    <tspan font-size="82" font-weight="600" dx="26" fill="${NAVY}">Foods</tspan>
  </text>
</svg>
`;

/* ---------------- Maluza Foods Co. ---------------- */
const mx = 170;
const grains = [];
// stem
const stem = `<path d="M${mx} 392 L${mx} 168" stroke="${NAVY}" stroke-width="11" stroke-linecap="round"/>`;
// pairs of grains along the ear
[196, 240, 284, 328].forEach((y) => {
  [-1, 1].forEach((side) => {
    grains.push(
      `<ellipse cx="${mx + side * 34}" cy="${y}" rx="16" ry="33" fill="${GOLD}" transform="rotate(${side * 38} ${mx + side * 34} ${y})"/>`,
    );
  });
});
// top grain
grains.push(`<ellipse cx="${mx}" cy="152" rx="15" ry="32" fill="${GOLD}"/>`);
// leaves
const leaves = `<path d="M${mx} 372 C122 368 98 338 102 296" stroke="${NAVY}" stroke-width="10" stroke-linecap="round" fill="none"/>
  <path d="M${mx} 372 C218 368 242 338 238 296" stroke="${NAVY}" stroke-width="10" stroke-linecap="round" fill="none"/>`;

const maluza = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Maluza Foods Co. logo">
  <title>Maluza Foods Co.</title>
  ${stem}
  ${leaves}
  ${grains.join("\n  ")}
  <text x="316" y="292" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" letter-spacing="-3">
    <tspan font-size="116" font-weight="800" fill="${NAVY}">Maluza</tspan>
    <tspan font-size="70" font-weight="600" dx="26" letter-spacing="1.5" fill="${NAVY}">Foods Co.</tspan>
  </text>
</svg>
`;

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "happyman-foods-logo.svg"), happyMan);
fs.writeFileSync(path.join(OUT, "maluza-foods-logo.svg"), maluza);
console.log("wrote 2 svgs to", OUT);
