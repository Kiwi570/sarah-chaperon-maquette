import { createRequire } from 'node:module';
import { demarrerServeur } from '../_audit/serveur.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const racine = new URL('..', import.meta.url).pathname;
const s = await demarrerServeur(racine, {});
const base = s.adresse;
const nav = await chromium.launch();
const chemin = process.argv[2] || '/';
const nom = process.argv[3] || 'accueil';
for (const [w, h, t] of [[1440, 900, 'o'], [390, 844, 't']]) {
  const ctx = await nav.newContext({ viewport: { width: w, height: h }, hasTouch: t === 't', isMobile: t === 't', deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  const errs = []; p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', (e) => errs.push(String(e)));
  await p.goto(base + chemin, { waitUntil: 'load' });
  await p.waitForTimeout(3600);
  await p.screenshot({ path: `_suivi/captures/${nom}-${t}-1.jpg`, quality: 70 });
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 300) { await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(90); }
  await p.waitForTimeout(500);
  await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(400);
  await p.screenshot({ path: `_suivi/captures/${nom}-${t}-full.jpg`, fullPage: true, quality: 55 });
  console.log(t, w, 'hauteur', H, (H / h).toFixed(1), 'écrans', errs.slice(0, 6).join(' | '));
  await ctx.close();
}
await nav.close(); s.fermer?.(); s.close?.(); process.exit(0);
