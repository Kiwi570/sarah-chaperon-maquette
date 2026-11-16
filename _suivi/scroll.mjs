import { createRequire } from 'node:module';
import { demarrerServeur } from '../_audit/serveur.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const s = await demarrerServeur(new URL('..', import.meta.url).pathname, {});
const nav = await chromium.launch();
const [w, h] = (process.argv[3] || '1440x900').split('x').map(Number);
const ctx = await nav.newContext({ viewport: { width: w, height: h }, hasTouch: w < 800, isMobile: w < 800 });
const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
await p.goto(s.adresse + (process.argv[4] || '/'), { waitUntil: 'load' }); await p.waitForTimeout(3500);
const ys = (process.argv[2] || '0').split(',').map(Number);
for (const [i, y] of ys.entries()) { await p.evaluate((y) => window.scrollTo(0, y * innerHeight), y); await p.waitForTimeout(900); await p.screenshot({ path: `_suivi/captures/s${i}.jpg`, quality: 60 }); }
console.log(errs.join('\n')); await nav.close(); await s.fermer(); process.exit(0);
