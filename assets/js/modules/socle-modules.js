/* Pont entre les modules de la bibliothèque (qui attendent pret() de leur socle de démonstration)
   et le socle du projet : même GSAP, même défilement, mêmes boucles et mêmes mesures.
   Les modules ne sont pas réécrits : seul leur import pointe ici. */
import { rafraichir } from '../socle/index.js?v=1';

const html = document.documentElement;
export const socle = {
  gsap: null, ScrollTrigger: null, SplitText: null, Flip: null, OGL: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { if (/[?&]sanswebgl\b/.test(location.search)) return false; try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } },
  rafraichir() { try { rafraichir(); } catch {} },
  /** boucle(el, fn(t, dt)) : t et dt en millisecondes, comme le socle des modules ; s'arrête hors écran et onglet caché. */
  boucle(el, fn) {
    let visible = false, id = 0, avant = 0, fini = false;
    const tour = (t) => { if (!visible || fini || document.hidden) { id = 0; return; } const dt = avant ? Math.min(64, t - avant) : 16; avant = t; fn(t, dt); id = requestAnimationFrame(tour); };
    const relancer = () => { if (!id && visible && !document.hidden && !fini) { avant = 0; id = requestAnimationFrame(tour); } };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; relancer(); }, { rootMargin: '100px' });
    io.observe(el);
    document.addEventListener('visibilitychange', relancer);
    return { arreter() { fini = true; io.disconnect(); cancelAnimationFrame(id); document.removeEventListener('visibilitychange', relancer); } };
  },
  mesurer() {},
};
export async function pret() {
  const g = window.gsap || null;
  socle.gsap = g;
  socle.ScrollTrigger = window.ScrollTrigger || null;
  socle.SplitText = window.SplitText || null;
  return socle;
}
void html;
