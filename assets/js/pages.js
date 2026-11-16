/* Effets des pages intérieures : poursuite (Parcours), dates rangées au jour réel, registres, frise des tournages,
   tirage qui se révèle et visionneuse (Portraits), faisceau et onde (Démo et voix), envol et tampon « Reçu » (Contact).
   Appelé par site.js dans preparer(). Chaque effet est marqué data-effet dans sa page. */
import { boucle, suivre, lacher } from './socle/index.js?v=2';
import { envol } from './modules/envol-vers-le-panier/module.js?v=2';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Une lumière (poursuite de théâtre, faisceau de projecteur) qui suit la souris et balaie seule sans elle. */
function lumiereSuiveuse(sel, base) {
  const z = $(sel); if (!z) return;
  const hote = z.closest('section') || z;
  const r = { x: base[0], y: base[1], tx: base[0], ty: base[1], vu: false };
  hote.addEventListener('pointermove', (e) => { if (e.pointerType !== 'mouse') return; const b = hote.getBoundingClientRect(); r.tx = ((e.clientX - b.left) / b.width) * 100; r.ty = ((e.clientY - b.top) / b.height) * 100; r.vu = true; });
  boucle(hote, (dt, t) => {
    if (!r.vu) { r.tx = base[0] + Math.sin(t * 0.5) * 14; r.ty = base[1] + Math.cos(t * 0.4) * 8; }
    const k = 1 - Math.pow(0.003, dt);
    r.x += (r.tx - r.x) * k; r.y += (r.ty - r.y) * k;
    if (r.vu && Math.abs(r.tx - r.x) < 0.05) r.x = r.tx; if (r.vu && Math.abs(r.ty - r.y) < 0.05) r.y = r.ty;
    z.style.setProperty('--px', `${r.x.toFixed(2)}%`); z.style.setProperty('--py', `${r.y.toFixed(2)}%`);
  });
}

/* Dates : rangées à venir ou passées au jour réel du visiteur (heure de Paris), jamais à la génération des pages. */
function dates() {
  const zone = $('.pa-dates'); if (!zone) return;
  const auj = new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date());   /* AAAA-MM-JJ */
  const finDe = (v) => (v.length === 7 ? `${v}-31` : v);
  const avenir = $('[data-groupe="avenir"]', zone), passees = $('[data-groupe="passees"]', zone);
  const items = $$('.pa-date', zone);
  items.filter((li) => finDe(li.dataset.fin) < auj).sort((a, b) => (b.dataset.debut > a.dataset.debut ? 1 : -1)).forEach((li) => passees.append(li));
  const t = $('[data-groupe-titre="avenir"]', zone); t.textContent = t.dataset.texte;
  $('[data-groupe-titre="passees"]', zone).hidden = !passees.children.length;
  if (!avenir.children.length) $('[data-groupe-titre="avenir"]', zone).hidden = true;
}

/* Filtres qui recomposent une grille (registres du théâtre, photographes et lumières des portraits). */
function filtres(boutons, items, cle) {
  boutons.forEach((b) => b.addEventListener('click', () => {
    const f = b.dataset[cle];
    boutons.forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    const avant = new Map(items.map((it) => [it, it.getBoundingClientRect()]));
    items.forEach((it) => { it.hidden = !(f === 'tous' || (it.dataset.cles || it.dataset.registre || '').split(' ').includes(f)); });
    if (!gsap) return;
    items.forEach((it) => {
      if (it.hidden) return;
      const a = avant.get(it), n = it.getBoundingClientRect();
      if (!a.width) gsap.fromTo(it, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.45, clearProps: 'opacity,scale' });
      else gsap.fromTo(it, { x: a.left - n.left, y: a.top - n.top }, { x: 0, y: 0, duration: 0.6, ease: 'power3.inOut', clearProps: 'transform' });
    });
  }));
}

/* Frise des tournages : épinglée, elle avance de côté au défilement (ordinateur et tablette). */
function frise() {
  const s = $('.pa-tournages'), piste = $('.pa-frise'); if (!s || !piste || !gsap || !window.ScrollTrigger) return;
  if (innerWidth < 761) return;
  const barre = $('.pa-frise-barre span');
  const longueur = () => Math.max(0, piste.scrollWidth - innerWidth);
  gsap.to(piste, { x: () => -longueur(), ease: 'none', scrollTrigger: { trigger: s, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true,
    onUpdate: (st) => barre && barre.style.setProperty('--progres', st.progress.toFixed(3)) } });
  piste.removeAttribute('tabindex'); piste.removeAttribute('role');
}

/* Portraits : le tirage se révèle comme dans le bac, et chaque tirage s'ouvre en grand (lien #portrait-n). */
function portraits() {
  const t = $('.po2-tirage img');
  if (t && gsap) gsap.fromTo(t, { filter: 'brightness(3) contrast(.3) grayscale(1)' }, { filter: 'brightness(1) contrast(1) grayscale(0)', duration: 2.2, delay: 0.4, ease: 'power2.out', clearProps: 'filter' });
  const grille = $('.po2-grille'); if (!grille) return;
  filtres($$('.po2-tete .filtre'), $$('.po2-item', grille), 'filtre');
  const dlg = $('.visionneuse'), img = $('.vis-img', dlg), liens = $$('.po2-lien', grille);
  let i = 0, retour = null;
  const montrer = (k) => {
    const vis = liens.filter((l) => !l.closest('.po2-item').hidden);
    i = (k + vis.length) % vis.length; const l = vis[i];
    img.src = l.dataset.grand; img.alt = l.querySelector('img').alt;
    $('[data-vis-titre]', dlg).textContent = l.dataset.titre; $('[data-vis-credit]', dlg).textContent = l.dataset.credit;
    history.replaceState(null, '', '#' + l.closest('.po2-item').id);
  };
  const ouvrir = (l) => { retour = l; const vis = liens.filter((x) => !x.closest('.po2-item').hidden); montrer(vis.indexOf(l)); dlg.showModal(); suivre(dlg);
    if (gsap) gsap.fromTo(dlg, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }); };
  liens.forEach((l) => l.addEventListener('click', (e) => { e.preventDefault(); ouvrir(l); }));
  $('.vis-prec', dlg).addEventListener('click', () => montrer(i - 1));
  $('.vis-suiv', dlg).addEventListener('click', () => montrer(i + 1));
  $('.vis-fermer', dlg).addEventListener('click', () => dlg.close());
  dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') montrer(i - 1); if (e.key === 'ArrowRight') montrer(i + 1); });
  let x0 = null; dlg.addEventListener('pointerdown', (e) => { x0 = e.clientX; }); dlg.addEventListener('pointerup', (e) => { if (x0 != null && Math.abs(e.clientX - x0) > 50) montrer(i + (e.clientX < x0 ? 1 : -1)); x0 = null; });
  dlg.addEventListener('close', () => { lacher(dlg); history.replaceState(null, '', location.pathname); retour?.focus(); });
  /* Lien direct vers un portrait : il s'ouvre tout seul. */
  const m = location.hash.match(/^#portrait-(\d+)$/);
  if (m) { const l = $(`#portrait-${m[1]} .po2-lien`); if (l) setTimeout(() => ouvrir(l), 900); }
}

/* Ondes des extraits sans fichier : elles respirent doucement. */
function ondes() {
  $$('.dv-onde').forEach((o, n) => { const b = [...o.children];
    boucle(o, (dt, t) => b.forEach((x, k) => { const h = Math.abs(Math.sin(t * 2 + k * 0.8 + n) * Math.sin(t * 0.8 + k * 0.3)); x.style.transform = `scaleY(${(0.2 + 0.75 * h).toFixed(3)})`; })); });
}

/* Contact : à l'envoi, le message file vers « La contacter », la page remonte sur la pochette,
   le tirage rentre dedans et le tampon « Reçu » s'abat dessus. */
function contact() {
  const f = $('.co-form'); if (!f) return;
  const pochette = $('.pochette'), tirage = $('.pochette-tirage');
  if (pochette && gsap && window.ScrollTrigger) {
    gsap.fromTo(tirage, { y: 0 }, { y: -40, ease: 'none', scrollTrigger: { trigger: pochette, start: 'top 80%', end: 'bottom top', scrub: true } });
  }
  f.addEventListener('submit', () => setTimeout(() => {
    if (!$('[data-message-envoi]', f) || $('[data-message-envoi]', f).hidden) return;
    f.classList.add('est-recu');
    if (gsap) gsap.fromTo($('.co-tampon', f), { scale: 2.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)' });
    try { envol({ depuis: $('textarea', f), vers: '[data-envol-cible]', forme: 'carte' }); } catch (err) { console.error(err); }
    if (!pochette || !gsap) { pochette?.classList.add('est-recu'); return; }
    const o = { y: scrollY };
    gsap.timeline({ delay: 1.6 })
      .to(o, { y: 0, duration: 1.1, ease: 'power2.inOut', onUpdate: () => window.scrollTo(0, o.y) })
      .to(tirage, { yPercent: 62, rotate: 0, duration: 0.8, ease: 'power3.in' })
      .call(() => pochette.classList.add('est-recu'))
      .fromTo($('.pochette-tampon'), { scale: 3, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'power4.in' })
      .to(pochette, { x: 6, duration: 0.05, yoyo: true, repeat: 3 });
  }, 30));
}

/* Parcours : les tirages posés sur la table glissent chacun à sa vitesse au défilement. */
function tiragesPoses() {
  const t = $$(innerWidth < 761 ? '.pa2-ouverture .to-tirage' : '.pa2-ouverture .to-tirage, .pa2-ouverture .to-fiche'); if (!t.length || !gsap || !window.ScrollTrigger) return;
  gsap.fromTo(t, { y: (i) => 60 + i * 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out', delay: 0.3, clearProps: 'opacity' });
  t.forEach((el, i) => gsap.to(el, { y: -(30 + i * 22), ease: 'none', scrollTrigger: { trigger: '.pa2-ouverture', start: 'top top', end: 'bottom top', scrub: true } }));
}

/* Démo et voix : la bande de film avance de côté au défilement. */
function bande() {
  const b = $('.dv2-bande'); if (!b || !gsap || !window.ScrollTrigger) return;
  gsap.fromTo(b, { x: '4vw' }, { x: '-14vw', ease: 'none', scrollTrigger: { trigger: '.dv2-ouverture', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.fromTo(b, { opacity: 0, x: '24vw' }, { opacity: 1, x: '4vw', duration: 1.1, ease: 'power3.out', delay: 0.2, clearProps: 'opacity' });
}

/* Sa voix : une onde tracée au crayon qui court sur son portrait. */
function ondeCrayon() {
  const svg = $('.dv-onde-crayon'); if (!svg) return; const p = $('path', svg);
  boucle(svg, (dt, t) => {
    let d = 'M0 40';
    for (let x = 0; x <= 400; x += 8) { const a = Math.sin(x * 0.045 + t * 3) * Math.sin(x * 0.011 + t * 0.7) * 30 * Math.sin((x / 400) * Math.PI); d += ` L${x} ${(40 + a).toFixed(1)}`; }
    p.setAttribute('d', d);
  });
}

export function initPages() {
  lumiereSuiveuse('[data-effet="poursuite"]', [62, 70]);
  lumiereSuiveuse('[data-effet="faisceau"]', [56, 34]);
  tiragesPoses(); bande(); ondeCrayon();
  dates();
  const pieces = $$('.pa-piece');
  if (pieces.length) filtres($$('.pa-theatre .filtre'), pieces, 'registre');
  frise();
  portraits();
  ondes();
  contact();
}
