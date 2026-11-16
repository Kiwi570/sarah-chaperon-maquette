import { createRequire } from 'node:module';
import { demarrerServeur } from '../_audit/serveur.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const s = await demarrerServeur(new URL('..', import.meta.url).pathname, {});
const nav = await chromium.launch();
const ctx = await nav.newContext({ viewport: { width: 600, height: 800 } });
const p = await ctx.newPage(); await p.goto(s.adresse + '/', { waitUntil: 'load' }); await p.waitForTimeout(6000);
console.log(await p.evaluate(() => {
  const sw = () => document.documentElement.scrollWidth;
  const out = ['base ' + sw()];
  for (const sel of ['.ouverture-scene', '.jeu', '.visages', '.voix-accueil', '.actualite', '.appel', '.pied', '[data-barre-fixe]', '[data-entete]', '[data-voile]', '.ouverture-panneau']) {
    const e = document.querySelector(sel); if (!e) continue; const d = e.style.display; e.style.display = 'none'; out.push(sel + ' ' + sw()); e.style.display = d;
  }
  return out.join(' | ');
}));
await nav.close(); await s.fermer(); process.exit(0);
