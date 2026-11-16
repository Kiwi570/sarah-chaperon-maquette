/* Sarah Chaperon · « La planche-contact ». Effets propres au projet (chacun marqué data-effet dans les pages) :
   planche, compte-fils, revelateur, crayon (fil), plongee-portrait, ecran, affiches, table-tirages, recomposition,
   lumiere-table, onde-voix, halo-voix, poursuite, faisceau, tirage, pochette-recu.
   Le socle gère l'intro, le voile en iris, l'en-tête, les boucles et la bibliothèque d'effets. */
import { demarrer, boucle, versObjet } from './socle/index.js?v=1';
import { initPages } from './pages.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const borne = (v, a, b) => Math.min(b, Math.max(a, v));

/* ---------- Titre qui se révèle comme un tirage dans le bac (grille, point 5) ---------- */
export function revelerTitre(el, delai = 0) {
  if (!el) return;
  el.classList.add('revele');
  if (!gsap) return;
  const parts = el.children.length ? [...el.children] : [el];
  gsap.fromTo(parts, { opacity: 0, filter: 'blur(9px) contrast(.4)', color: '#bdb6aa' },
    { opacity: 1, filter: 'blur(0px) contrast(1)', clearProps: 'filter,color', duration: 1.1, stagger: 0.16, ease: 'power2.out', delay: delai });
}

/* ---------- Crayon gras : chaque trait se dessine quand il arrive à l'écran (fil, point 4) ---------- */
function crayons() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('.crayon').forEach((svg) => {
    const p = svg.querySelector('path');
    window.ScrollTrigger.create({
      trigger: svg.parentElement, start: 'top 82%', once: true,
      onEnter: () => gsap.fromTo(p, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut', onComplete: () => svg.classList.add('trace') }),
    });
  });
}
const crayonsFinals = () => $$('.crayon').forEach((s) => { s.classList.add('trace'); const p = s.querySelector('path'); if (p) p.style.strokeDashoffset = '0'; });

/* ---------- Planche et loupe en verre (objet manipulé, point 1) ---------- */
const ZOOM = 2.2;
const P = { table: null, cases: [], rects: [], loupe: null, zoom: null, img: null, bague: null, cercle: null,
  x: 0, y: 0, cx: 0, cy: 0, vx: 0, vy: 0, w: 0, v: 0, tw: 0, th: 0, tire: false, elan: false, survol: false, courante: -1, actif: true };
const plongee = {};

function mesurerPlanche() {
  if (!P.table) return;
  const t = P.table.getBoundingClientRect();
  P.tw = t.width; P.th = t.height; P.w = P.loupe.offsetWidth; P.v = P.w * 0.82;
  P.rects = P.cases.map((c) => { if (!c.offsetParent) return null; const r = c.getBoundingClientRect(); return { x: r.left - t.left, y: r.top - t.top, w: r.width, h: r.height }; });
  const pl = $('.planche', P.table).getBoundingClientRect(); P.pl = { x: pl.left - t.left, y: pl.top - t.top };
  P.courante = -1;
}
function caseSous(x, y) {
  let best = -1, d = Infinity;
  P.rects.forEach((q, i) => { if (!q) return; const dx = x - (q.x + q.w / 2), dy = y - (q.y + q.h / 2); const dd = dx * dx + dy * dy; if (dd < d) { d = dd; best = i; } });
  return best;
}
function montrerCase(i) {
  if (i < 0 || i === P.courante) return;
  P.courante = i;
  const c = P.cases[i];
  if (P.bague) P.bague.textContent = `${c.dataset.credit} · ${c.dataset.titre}`.toUpperCase();
}
/* La lentille grossit la planche telle qu'elle est : une copie inerte de la table et de la planche, avec les originaux. */
function construireMonde() {
  if (!P.zoom) return;
  P.zoom.textContent = '';
  const monde = document.createElement('div'); monde.className = 'loupe-monde';
  monde.append($('.table-lumineuse', P.table).cloneNode(true), $('.planche', P.table).cloneNode(true));
  monde.querySelectorAll('[id], [data-iris-centre], [data-effet], [data-grille], [aria-pressed], [aria-label], [data-superpose]').forEach((n) => ['id', 'data-iris-centre', 'data-effet', 'data-grille', 'aria-pressed', 'aria-label', 'data-superpose', 'role'].forEach((a) => n.removeAttribute(a)));
  monde.querySelectorAll('button').forEach((b) => { b.tabIndex = -1; b.disabled = true; });
  /* Dès la première image : les vignettes déjà chargées sur la table (jamais de disque noir) ;
     les originaux les remplacent ensuite, une fois chargés, en fondu. */
  const vraies = $$('.case-img', P.table);
  [...monde.querySelectorAll('img')].forEach((im, k) => {
    const v = vraies[k]; im.removeAttribute('srcset'); im.removeAttribute('sizes'); im.loading = 'eager';
    im.src = (v && v.currentSrc) || im.src;
    setTimeout(() => { const g = new Image(); g.decoding = 'async'; g.src = im.dataset.grand; g.decode().then(() => { im.src = g.src; }).catch(() => {}); }, 900 + k * 90);
  });
  P.zoom.append(monde); P.monde = monde;
  P.cercleMonde = monde.querySelector('.cercle-choix');
  tailleMonde();
}
function tailleMonde() {
  if (!P.monde) return;
  P.monde.style.width = `${P.tw}px`; P.monde.style.height = `${P.th}px`;
  if (P.cercleMonde && P.cercle) P.cercleMonde.style.cssText = P.cercle.style.cssText;
}
function placerCercle(i, trace = true) {
  const q = P.rects[i]; if (!q || !P.cercle) return;
  const m = Math.max(10, q.w * 0.14);
  Object.assign(P.cercle.style, { left: `${q.x - P.pl.x - m}px`, top: `${q.y - P.pl.y - m}px`, width: `${q.w + 2 * m}px`, height: `${q.h + 2 * m}px` });
  const p = P.cercle.querySelector('path'), pm = P.cercleMonde?.querySelector('path');
  if (P.cercleMonde) P.cercleMonde.style.cssText = P.cercle.style.cssText;
  if (trace && gsap) gsap.fromTo([p, pm].filter(Boolean), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' });
  else [p, pm].forEach((x) => { if (x) x.style.strokeDashoffset = '0'; });
}
function viserCase(i) { const q = P.rects[i]; if (q) { P.cx = q.x + q.w / 2; P.cy = q.y + q.h / 2; } }
function choisir(i, viser = true) {
  /* Un second clic sur le portrait déjà entouré : on plonge dedans. */
  if (viser && P.cases[i]?.getAttribute('aria-pressed') === 'true' && plongee.aller) { plongee.aller(); return; }
  P.cases.forEach((c, k) => { c.setAttribute('aria-pressed', k === i ? 'true' : 'false'); c.classList.toggle('est-choisie', k === i); });
  if (viser) viserCase(i);
  placerCercle(i);
  plongee.mesurer?.();
}
function initPlanche() {
  P.table = $('.po-table'); if (!P.table) return;
  P.cases = $$('.case', P.table); P.loupe = $('.loupe', P.table); P.zoom = $('.loupe-zoom', P.table);
  P.bague = $('[data-bague]', P.table); P.cercle = $('.cercle-choix', P.table);
  mesurerPlanche();
  const depart = P.cases.findIndex((c) => c.classList.contains('est-choisie'));
  viserCase(depart); P.x = P.cx; P.y = P.cy; montrerCase(depart); placerCercle(depart, false);
  construireMonde();
  new ResizeObserver(() => { mesurerPlanche(); placerCercle(P.cases.findIndex((c) => c.getAttribute('aria-pressed') === 'true'), false); tailleMonde(); }).observe(P.table);

  const local = (e) => { const t = P.table.getBoundingClientRect(); return { x: e.clientX - t.left, y: e.clientY - t.top }; };
  P.table.addEventListener('pointermove', (e) => { if (e.pointerType !== 'mouse' || P.tire || !P.actif) return; const p = local(e); P.cx = p.x; P.cy = p.y; P.survol = true; P.elan = false; });
  let dernier = null;
  P.loupe.addEventListener('pointerdown', (e) => {
    P.tire = true; P.elan = false; P.survol = true; P.loupe.setPointerCapture(e.pointerId); dernier = { ...local(e), t: performance.now() };
    P.dx = P.x - dernier.x; P.dy = P.y - dernier.y; P.bouge = 0;
  });
  P.loupe.addEventListener('pointermove', (e) => {
    if (!P.tire) return;
    const p = local(e), t = performance.now(), dt = Math.max(8, t - dernier.t);
    P.vx = (p.x - dernier.x) / dt * 16; P.vy = (p.y - dernier.y) / dt * 16; P.bouge += Math.abs(p.x - dernier.x) + Math.abs(p.y - dernier.y);
    P.x = P.cx = p.x + P.dx; P.y = P.cy = p.y + P.dy; dernier = { ...p, t };
  });
  const lacher = () => { if (!P.tire) return; P.tire = false; if (P.bouge > 6) P.elan = true; else { const i = caseSous(P.x, P.y); if (i >= 0) choisir(i); } };
  P.loupe.addEventListener('pointerup', lacher); P.loupe.addEventListener('pointercancel', lacher);
  P.cases.forEach((c, i) => c.addEventListener('click', () => choisir(i)));

  boucle(P.table, (dt) => {
    if (!P.actif && !P.tire) return;
    const k = 1 - Math.pow(0.0009, dt);
    if (P.elan) {
      P.x += P.vx * dt * 60; P.y += P.vy * dt * 60; P.vx *= Math.pow(0.04, dt); P.vy *= Math.pow(0.04, dt);
      P.cx = P.x; P.cy = P.y;
      if (Math.abs(P.vx) + Math.abs(P.vy) < 0.05) { P.elan = false; const i = caseSous(P.x, P.y); if (i >= 0) { viserCase(i); choisir(i, false); } }
    } else if (!P.tire) {
      P.x += (P.cx - P.x) * k; P.y += (P.cy - P.y) * k;
      if (Math.abs(P.cx - P.x) < 0.2) P.x = P.cx;
      if (Math.abs(P.cy - P.y) < 0.2) P.y = P.cy;
    }
    const m = P.w / 2; P.x = borne(P.x, m * 1.02, P.tw - m * 1.02); P.y = borne(P.y, m * 0.6, P.th - m * 0.6);
    P.loupe.style.setProperty('--lx', `${(P.x - m).toFixed(1)}px`);
    P.loupe.style.setProperty('--ly', `${(P.y - m).toFixed(1)}px`);
    const fx = P.x / P.tw - 0.5, fy = P.y / P.th - 0.5;
    P.loupe.style.setProperty('--hx', `${(32 - fx * 18).toFixed(1)}%`); P.loupe.style.setProperty('--hy', `${(24 - fy * 14).toFixed(1)}%`);
    P.loupe.style.setProperty('--ox', `${(14 + fx * 30).toFixed(1)}px`); P.loupe.style.setProperty('--oy', `${(26 + fy * 16).toFixed(1)}px`);
    montrerCase(caseSous(P.x, P.y));
    /* Le verre commence à 9 % du bord de la loupe : le point visé (P.x, P.y) tombe au centre du verre. */
    P.zoom.style.transform = `translate3d(${(P.v / 2 - P.x * ZOOM).toFixed(1)}px, ${(P.v / 2 - P.y * ZOOM).toFixed(1)}px, 0) scale(${ZOOM})`;
  });
}
/* Juste après l'intro, la loupe se promène seule sur quatre portraits puis revient, et un reflet passe sur la planche. */
function promenade() {
  if (!P.table || P.survol || P.tire) return;
  const depart = P.cases.findIndex((c) => c.classList.contains('est-choisie'));
  [0, 3, 8, 11, depart].filter((i) => P.rects[i]).forEach((i, k) => setTimeout(() => { if (!P.survol && !P.tire) viserCase(i); }, k * 520));
}

/* ---------- La plongée : le portrait entouré grandit depuis sa vignette jusqu'au plein écran (point 6) ---------- */
function initPlongee() {
  const s = $('.ouverture-scene'); if (!s || !gsap || !window.ScrollTrigger) return;
  const collant = $('.os-collant', s), calque = $('.plongee-calque', s), boite = $('.plongee-image', s), img = $('img', boite), texte = $('.plongee-texte', s);
  const po = $('.planche-ouverture', s);
  let G = null;
  plongee.mesurer = () => {
    const c = P.cases.find((x) => x.getAttribute('aria-pressed') === 'true') || P.cases[5]; if (!c) return;
    const vi = c.querySelector('img');
    if (img.getAttribute('src') !== vi.dataset.grand) { img.removeAttribute('srcset'); img.src = vi.dataset.grand; }
    const pos = (vi.style.objectPosition || '50% 30%').split(' ').map((v) => parseFloat(v) / 100);
    img.style.objectPosition = vi.style.objectPosition;
    const R = collant.getBoundingClientRect(), r = c.getBoundingClientRect();
    const W = R.width, H = R.height, iw = vi.naturalWidth || vi.width || 4, ih = vi.naturalHeight || vi.height || 5;
    const cw = r.width, ch = r.height, cx = r.left - R.left, cy = r.top - R.top;
    /* Ce que montre la vignette (cover dans cw × ch), exprimé dans l'image plein écran (cover dans W × H). */
    const fv = Math.max(cw / iw, ch / ih), sx0 = (iw * fv - cw) * pos[0] / fv, sy0 = (ih * fv - ch) * pos[1] / fv, sw = cw / fv, sh = ch / fv;
    const F = Math.max(W / iw, H / ih), ox = (W - iw * F) * pos[0], oy = (H - ih * F) * pos[1];
    const X0 = ox + sx0 * F, Y0 = oy + sy0 * F, w0 = sw * F, h0 = sh * F, k = cw / w0;
    G = { W, H, X0, Y0, w0, h0, k, tx: cx - X0 * k, ty: cy - Y0 * k };
    plongee.rendre(plongee.t || 0);
  };
  plongee.rendre = (t) => {
    plongee.t = t; if (!G) return;
    const e = t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
    const top = G.Y0 * (1 - e), left = G.X0 * (1 - e), right = (G.W - G.X0 - G.w0) * (1 - e), bot = (G.H - G.Y0 - G.h0) * (1 - e);
    const k = G.k + (1 - G.k) * e;
    boite.style.clipPath = `inset(${top.toFixed(1)}px ${right.toFixed(1)}px ${bot.toFixed(1)}px ${left.toFixed(1)}px)`;
    boite.style.transform = `translate3d(${(G.tx * (1 - e)).toFixed(1)}px, ${(G.ty * (1 - e) - (plongee.sortie || 0)).toFixed(1)}px, 0) scale(${k.toFixed(4)})`;
  };
  img.addEventListener('load', () => plongee.mesurer());
  plongee.aller = () => { const top = s.getBoundingClientRect().top + scrollY, longueur = s.offsetHeight - innerHeight;
    if (gsap) { const o = { y: scrollY }; gsap.to(o, { y: top + longueur * 0.5, duration: 1.6, ease: 'power2.inOut', onUpdate: () => window.scrollTo(0, o.y) }); } };
  window.ScrollTrigger.create({
    trigger: s, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true,
    onRefresh: () => plongee.mesurer(),
    onUpdate: (st) => {
      const p = st.progress;
      P.actif = p < 0.05;
      if (p > 0.01 && p < 0.08) viserCase(P.cases.findIndex((c) => c.getAttribute('aria-pressed') === 'true'));
      calque.style.visibility = p > 0.07 ? 'visible' : 'hidden';
      plongee.rendre((p - 0.08) / 0.28);
      calque.style.setProperty('--voile', borne((p - 0.32) / 0.1, 0, 1).toFixed(3));
      const to = borne((p - 0.36) / 0.12, 0, 1);
      texte.style.opacity = to.toFixed(3); texte.style.visibility = to > 0 ? 'visible' : 'hidden';
      /* Sortie : la photo et le texte remontent avec le rideau de la section suivante. */
      plongee.sortie = borne((p - 0.56) / 0.44, 0, 1) * innerHeight * 0.55;
      plongee.rendre((p - 0.08) / 0.28);
      texte.style.transform = `translate3d(0, ${(24 * (1 - to) - plongee.sortie).toFixed(1)}px, 0)`;
      po.style.opacity = (1 - borne((p - 0.16) / 0.18, 0, 1) * 0.6).toFixed(3);
    },
  });
}

/* ---------- Affiches de la Cie PILE qui montent l'une après l'autre ---------- */
function initAffiches() {
  const l = $('.videos'); if (!l || !gsap || !window.ScrollTrigger) return;
  gsap.fromTo($$('.video', l), { y: (i) => 30 + i * 18 }, { y: 0, ease: 'none', scrollTrigger: { trigger: l, start: 'top bottom', end: 'top 45%', scrub: true } });
}

/* ---------- Tirages : on trace le cercle soi-même, le tirage se soulève et se retourne ; on les fait glisser ---------- */
function retourner(li, force) {
  const b = $('.tirage-carte', li), dos = b.getAttribute('aria-pressed') === 'true', vers = force ?? !dos;
  b.setAttribute('aria-pressed', vers ? 'true' : 'false');
  li.classList.toggle('est-leve', vers);
  if (gsap) gsap.to(b, { rotateY: vers ? 180 : 0, y: vers ? -14 : 0, scale: vers ? 1.06 : 1, duration: 0.8, ease: 'power3.inOut' });
  else b.style.transform = vers ? 'rotateY(180deg)' : '';
}
function initTirages() {
  const table = $('.table-tirages'); if (!table) return;
  const liste = $('.tirages', table), items = $$('.tirage', liste), boutons = $$('.filtre'), trace = $('.trace-libre path', table);
  const pos = new Map(items.map((it) => [it, { x: 0, y: 0 }]));
  let mode = null, courant = null, depart = null, points = [], bouge = 0, vx = 0, vy = 0, dernier = null;
  const local = (e) => { const r = table.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  table.addEventListener('pointerdown', (e) => {
    const li = e.target.closest('.tirage');
    const p = local(e); bouge = 0; vx = 0; vy = 0; dernier = { ...p, t: performance.now() };
    if (li) { mode = 'glisser'; courant = li; const o = pos.get(li); depart = { px: p.x, py: p.y, ox: o.x, oy: o.y }; }
    else if (e.pointerType !== 'touch') { mode = 'tracer'; points = [p]; trace.setAttribute('d', `M${p.x} ${p.y}`); if (gsap) gsap.set(trace, { opacity: 1 }); }
    else return;
    if (e.pointerType !== 'touch') table.setPointerCapture(e.pointerId);
  });
  table.addEventListener('pointermove', (e) => {
    if (!mode) return;
    const p = local(e), t = performance.now(), dt = Math.max(8, t - dernier.t);
    bouge += Math.abs(p.x - dernier.x) + Math.abs(p.y - dernier.y);
    if (mode === 'glisser') {
      vx = (p.x - dernier.x) / dt * 16; vy = (p.y - dernier.y) / dt * 16;
      if (bouge > 6) {
        courant.classList.add('est-leve');
        const o = pos.get(courant); o.x = depart.ox + (p.x - depart.px); o.y = depart.oy + (p.y - depart.py);
        if (gsap) gsap.set(courant, { x: o.x, y: o.y });
      }
    } else {
      points.push(p);
      trace.setAttribute('d', points.map((q, i) => `${i ? 'L' : 'M'}${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join(' '));
    }
    dernier = { ...p, t };
  });
  const fin = () => {
    if (!mode) return;
    if (mode === 'glisser') {
      const li = courant, o = pos.get(li);
      if (bouge > 6) {
        li.dataset.glisse = '1';
        const r = table.getBoundingClientRect();
        o.x = borne(o.x + vx * 9, -r.width * 0.35, r.width * 0.35); o.y = borne(o.y + vy * 9, -r.height * 0.3, r.height * 0.3);
        if (gsap) gsap.to(li, { x: o.x, y: o.y, duration: 0.7, ease: 'power3.out' });
      }
      else { li.dataset.glisse = '1'; retourner(li); }
      if ($('.tirage-carte', li).getAttribute('aria-pressed') !== 'true') li.classList.remove('est-leve');
    } else {
      /* Le cercle tracé : on retourne le tirage dont le centre est dans la boucle. */
      const xs = points.map((q) => q.x), ys = points.map((q) => q.y);
      const b = { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) };
      const r = table.getBoundingClientRect();
      let cible = null, d = Infinity;
      if (points.length > 8 && b.x1 - b.x0 > 30 && b.y1 - b.y0 > 30) {
        items.forEach((it) => { if (it.hidden) return; const q = it.getBoundingClientRect(); const cx = q.left + q.width / 2 - r.left, cy = q.top + q.height / 2 - r.top;
          if (cx > b.x0 && cx < b.x1 && cy > b.y0 && cy < b.y1) { const dd = Math.hypot(cx - (b.x0 + b.x1) / 2, cy - (b.y0 + b.y1) / 2); if (dd < d) { d = dd; cible = it; } } });
      }
      if (cible) retourner(cible, true);
      if (gsap) gsap.to(trace, { opacity: 0, duration: 0.6, delay: cible ? 1.1 : 0.2 });
    }
    mode = null; courant = null;
  };
  table.addEventListener('pointerup', fin); table.addEventListener('pointercancel', fin);
  /* Toucher, clic sans glisser, clavier : le tirage se retourne. */
  items.forEach((li) => $('.tirage-carte', li).addEventListener('click', (e) => {
    if (li.dataset.glisse) { delete li.dataset.glisse; e.preventDefault(); return; }
    retourner(li);
  }));
  boutons.forEach((b) => b.addEventListener('click', () => {
    const f = b.dataset.filtre;
    boutons.forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    items.forEach((it) => { pos.set(it, { x: 0, y: 0 }); if (gsap) gsap.set(it, { x: 0, y: 0 }); });
    const avant = new Map(items.map((it) => [it, it.getBoundingClientRect()]));
    items.forEach((it) => { it.hidden = !(f === 'tous' || it.dataset.photographe === f); });
    if (!gsap) return;
    items.forEach((it) => {
      if (it.hidden) return;
      const a = avant.get(it), n = it.getBoundingClientRect();
      if (!a.width) { gsap.fromTo(it, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out', clearProps: 'scale,opacity' }); return; }
      gsap.fromTo(it, { x: a.left - n.left, y: a.top - n.top }, { x: 0, y: 0, duration: 0.65, ease: 'power3.inOut' });
    });
  }));
}

/* ---------- Le tirage posé sur la table de l'ouverture : démonstration, puis on le lance ---------- */
const volant = {};
function initVolant() {
  const t = $('.tirage-volant'), table = $('.po-table'), trace = $('.trace-ouverture path'); if (!t || !table) return;
  const b = $('.tirage-carte', t);
  let o = { x: 0, y: 0 }, dep = null, bouge = 0, vx = 0, vy = 0, der = null;
  const local = (e) => { const r = table.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const tourner = (vers) => { b.setAttribute('aria-pressed', vers ? 'true' : 'false'); if (gsap) gsap.to(b, { rotateY: vers ? 180 : 0, duration: 0.8, ease: 'power3.inOut' }); };
  t.addEventListener('pointerdown', (e) => { const p = local(e); dep = { px: p.x, py: p.y, ox: o.x, oy: o.y }; der = { ...p, t: performance.now() }; bouge = 0; t.setPointerCapture(e.pointerId); });
  t.addEventListener('pointermove', (e) => {
    if (!dep) return; const p = local(e), tm = performance.now(), dt = Math.max(8, tm - der.t);
    bouge += Math.abs(p.x - der.x) + Math.abs(p.y - der.y); vx = (p.x - der.x) / dt * 16; vy = (p.y - der.y) / dt * 16; der = { ...p, t: tm };
    if (bouge > 6) { o.x = dep.ox + p.x - dep.px; o.y = dep.oy + p.y - dep.py; if (gsap) gsap.set(t, { x: o.x, y: o.y, scale: 1.06 }); }
  });
  const fin = () => {
    if (!dep) return; dep = null;
    if (bouge <= 6) { t.dataset.glisse = '1'; tourner(b.getAttribute('aria-pressed') !== 'true'); return; }
    if (bouge > 6) {
      t.dataset.glisse = '1';
      const r = table.getBoundingClientRect(), q = t.getBoundingClientRect();
      const bx = r.width - q.width, by = r.height - q.height;
      const base = { x: q.left - r.left - o.x, y: q.top - r.top - o.y };
      o.x = borne(o.x + vx * 10, -base.x, bx - base.x); o.y = borne(o.y + vy * 10, -base.y, by - base.y);
      if (gsap) gsap.to(t, { x: o.x, y: o.y, scale: 1, rotate: (vx > 0 ? 1 : -1) * Math.min(14, Math.abs(vx) * 2), duration: 0.9, ease: 'power3.out' });
    }
  };
  t.addEventListener('pointerup', fin); t.addEventListener('pointercancel', fin);
  b.addEventListener('click', (e) => { if (t.dataset.glisse) { delete t.dataset.glisse; e.preventDefault(); return; } tourner(b.getAttribute('aria-pressed') !== 'true'); });
  /* Juste après l'intro : le crayon entoure le tirage, il se soulève, se retourne (crédit au dos), puis se repose. */
  volant.demo = () => {
    if (!gsap || dep) return;
    const r = table.getBoundingClientRect(), q = t.getBoundingClientRect();
    const cx = q.left + q.width / 2 - r.left, cy = q.top + q.height / 2 - r.top, rx = q.width * 0.66, ry = q.height * 0.62;
    const pts = Array.from({ length: 50 }, (_, k) => { const a = -Math.PI / 2 + (k / 45) * Math.PI * 2; return `${(cx + Math.cos(a) * rx).toFixed(1)} ${(cy + Math.sin(a) * ry * (1 + 0.03 * Math.sin(k * 1.7))).toFixed(1)}`; });
    trace.setAttribute('d', 'M' + pts.join(' L'));
    const L = trace.getTotalLength();
    gsap.timeline()
      .set(trace, { opacity: 1, strokeDasharray: L, strokeDashoffset: L })
      .to(trace, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' })
      .to(t, { y: -22, scale: 1.1, rotate: -2, '--leve': 1, duration: 0.5, ease: 'power2.out' }, 0.75)
      .call(() => tourner(true), null, 0.9)
      .to(trace, { opacity: 0, duration: 0.4 }, 1.9)
      .call(() => tourner(false), null, 3.0)
      .to(t, { y: 0, scale: 1, rotate: 0, '--leve': 0, duration: 0.6, ease: 'power2.inOut' }, 3.4)
      .set(trace, { clearProps: 'strokeDasharray,strokeDashoffset' })
      .call(() => trace.setAttribute('d', ''));
  };
}

/* ---------- Lumière de la table qui suit la main (lumiere-pointeur) ---------- */
function initLumiere() {
  const zone = $('.table-tirages'), l = $('.table-tirages-lumiere'); if (!zone || !l) return;
  const r = { x: 50, y: 40, tx: 50, ty: 40, vu: false };
  zone.addEventListener('pointermove', (e) => { if (e.pointerType !== 'mouse') return; const b = zone.getBoundingClientRect(); r.tx = ((e.clientX - b.left) / b.width) * 100; r.ty = ((e.clientY - b.top) / b.height) * 100; r.vu = true; });
  let W = zone.offsetWidth, H = zone.offsetHeight;
  new ResizeObserver(() => { W = zone.offsetWidth; H = zone.offsetHeight; }).observe(zone);
  boucle(zone, (dt, t) => {
    if (!r.vu) { r.tx = 50 + Math.sin(t * 0.6) * 30; r.ty = 45 + Math.cos(t * 0.45) * 22; }   /* sans souris : la lumière balaie la table */
    const k = 1 - Math.pow(0.002, dt);
    r.x += (r.tx - r.x) * k; r.y += (r.ty - r.y) * k;
    if (r.vu && Math.abs(r.tx - r.x) < 0.05) r.x = r.tx; if (r.vu && Math.abs(r.ty - r.y) < 0.05) r.y = r.ty;
    l.style.setProperty('--lx', `${(r.x * W / 100).toFixed(1)}px`); l.style.setProperty('--ly', `${(r.y * H / 100).toFixed(1)}px`);
  });
}

/* ---------- Ondes des voix qui respirent, et le halo autour de son portrait qui les suit ---------- */
function initOndes() {
  const halo = $('.voix-halo');
  $$('.voix-onde').forEach((o, n) => {
    const barres = [...o.children];
    boucle(o, (dt, t) => {
      let somme = 0;
      barres.forEach((b, k) => { const h = Math.abs(Math.sin(t * 2.2 + k * 0.7 + n) * Math.sin(t * 0.9 + k * 0.31)); somme += h; b.style.transform = `scaleY(${(0.2 + 0.75 * h).toFixed(3)})`; });
      if (halo && n === 0) { const niv = somme / barres.length; halo.style.setProperty('--niveau', (0.35 + niv * 0.9).toFixed(3)); halo.style.setProperty('--souffle', (1 + niv * 0.05).toFixed(3)); }
    });
  });
}

/* ---------- Démarrage ---------- */
function entreeAccueil() {
  if (!gsap) return;
  revelerTitre($('.po-titre'));
  gsap.fromTo('.planche-ouverture [data-anime="gsap"]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out', clearProps: 'transform' });
  gsap.fromTo('.case-img', { filter: 'brightness(2.4) grayscale(1) contrast(.5)' }, { filter: 'brightness(1) grayscale(0) contrast(1)', duration: 0.9, stagger: { each: 0.05, from: 5 }, ease: 'power2.out', clearProps: 'filter' });
  /* La loupe n'arrive qu'avec la planche, une fois le panneau de l'intro ouvert. */
  gsap.fromTo('.loupe', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.85, ease: 'back.out(1.6)', clearProps: 'opacity,scale',
    onStart: () => $('.loupe')?.classList.add('est-la') });
}
function entreeInterieure() {
  if (!gsap) return;
  revelerTitre($('main [data-grille="typo"]'));
  gsap.fromTo('main .ouvre', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' });
}
const entree = () => ($('.planche-ouverture') ? entreeAccueil() : entreeInterieure());

demarrer({
  preparer() {
    initPlanche(); initPlongee(); initAffiches(); initTirages(); initVolant(); initLumiere(); initOndes(); crayons();
    try { initPages(); } catch (err) { console.error(err); }
  },
  /* Intro, moins de 3 s : le nom se révèle dans la chambre noire, le crayon trace un cadre, qui glisse sur le portrait
     entouré de la planche ; le panneau s'ouvre depuis lui (versObjet) et la planche s'expose. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-nom', { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.7 }, 0)
      .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.25)
      .fromTo('.ouverture-cercle path', { strokeDashoffset: 760 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, 0.2)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, duration: 0.3 }, 0.9);
    versObjet(tl, { a: 1.0 });
    tl.call(entree, null, 1.45);
    tl.call(promenade, null, 2.15);
    tl.call(() => volant.demo?.(), null, 2.35);
    return tl;
  },
  etatFinal() {
    crayonsFinals();
    $$('[data-grille="typo"]').forEach((t) => t.classList.add('revele'));
    $('.loupe')?.classList.add('est-la');
    if (P.cercle) { const p = P.cercle.querySelector('path'); if (p) p.style.strokeDashoffset = '0'; }
    if (!gsap) return;
    gsap.set('.planche-ouverture [data-anime="gsap"], main .ouvre, .loupe, .case-img, main [data-grille="typo"] > *', { clearProps: 'transform,opacity,filter' });
  },
  arrivee() { entree(); setTimeout(promenade, 1100); setTimeout(() => volant.demo?.(), 1300); },
});
