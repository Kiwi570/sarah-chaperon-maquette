import { createRequire } from 'node:module';
import { demarrerServeur } from '../_audit/serveur.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const s = await demarrerServeur(new URL('..', import.meta.url).pathname, {});
const nav = await chromium.launch();
const out = [];
for (const t of process.argv[3].split(',')) {
  const [w, h] = t.split('x').map(Number);
  const ctx = await nav.newContext({ viewport: { width: w, height: h }, hasTouch: w < 800, isMobile: w < 800 });
  const p = await ctx.newPage();
  await p.goto(s.adresse + (process.argv[4] || '/'), { waitUntil: 'load' }); await p.waitForTimeout(3600);
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 500) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(40); }
  await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), process.argv[2]); await p.waitForTimeout(1500);
  const f = `_suivi/captures/el-${w}.jpg`; await p.screenshot({ path: f, quality: 60 }); out.push(f); await ctx.close();
}
console.log(out.join(' ')); await nav.close(); await s.fermer(); process.exit(0);
