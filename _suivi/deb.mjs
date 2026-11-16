import { createRequire } from 'node:module';
import { demarrerServeur } from '../_audit/serveur.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const s = await demarrerServeur(new URL('..', import.meta.url).pathname, {});
const nav = await chromium.launch();
let ctx = await nav.newContext({ viewport: { width: 600, height: 800 } });
let p = await ctx.newPage(); await p.goto(s.adresse + '/', { waitUntil: 'load' }); await p.waitForTimeout(3500);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += 400) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(30); }
console.log(await p.evaluate(() => { const W = document.documentElement.clientWidth; return [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); return r.right > W + 1 && r.width > 0; }).slice(0, 3).map((e) => (e.getAttribute('class')||e.tagName) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.parentElement.getAttribute('class'))); }));
await ctx.close();
for (const [pg, w, h] of []) {
  ctx = await nav.newContext({ viewport: { width: w, height: h }, javaScriptEnabled: false }); p = await ctx.newPage(); await p.goto(s.adresse + pg); await p.waitForTimeout(800);
  await p.screenshot({ path: `_suivi/captures/nojs-${w}.jpg`, quality: 50 }); await ctx.close();
}
await nav.close(); await s.fermer(); process.exit(0);
