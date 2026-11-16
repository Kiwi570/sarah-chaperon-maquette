/* Accueil · direction « La planche-contact » · plan galerie (refait après le regard DA n°1).
   1 la table lumineuse : planche + loupe en verre, puis plongée dans le portrait entouré, qui grandit depuis sa vignette
   (une seule scène épinglée) · 2 bande-démo · 3 représentations et affiches de la Cie PILE · 4 tirages à entourer
   au crayon et à retourner, sur la même table · 5 voix · 6 actualité · 7 appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { crayon } from '../gabarits/crayon.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'rire-1280.webp' };

const PHOTOGRAPHES = ['Roka production', 'Laurent Bouillard', 'Ana Slk', 'Fabrice Robin', 'Lisa Fougereux'];
const slug = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const src = (c, nom) => { const ws = c.donnees.images[nom].largeurs; return { ws, srcset: ws.map((w) => `/assets/images/${nom}-${w}.webp ${w}w`).join(', '), grand: `/assets/images/${nom}-${ws[ws.length - 1]}.webp` }; };
/* Vignette dans un bouton : une image simple (une figure est interdite dans un bouton). */
const vignette = (c, nom, prio) => {
  const im = c.donnees.images[nom], s = src(c, nom);
  return html`<img class="case-img" src="/assets/images/${nom}-${s.ws[0]}.webp" srcset="${s.srcset}" sizes="(max-width: 760px) 30vw, 16vw" alt="" width="${s.ws[0]}" height="${Math.round(s.ws[0] * 1.25)}" style="object-position:${im.cadrage || '50% 30%'}" data-grand="${s.grand}" ${brut(prio ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"')} decoding="async">`;
};

export default (c) => {
  const P = c.donnees.portraits;
  const choisi = P.findIndex((x) => x.choisi);
  const credit = (x) => x.photographe ? `Photo ${x.photographe}` : 'Photographe non crédité';
  const p = c.donnees.parcours;
  const avenir = p.agenda[0], passees = p.agenda.slice(1);
  const rire = src(c, 'rire');
  return html`
<section class="ouverture-scene" id="debut" data-scene data-grille="scene">
  <div class="os-collant" data-collant>
    <div class="planche-ouverture">
      <div class="po-texte">
        <p class="surtitre mono" data-anime="gsap">${c.t('accueil.hero.sur')}</p>
        <h1 class="po-titre" data-grille="typo" data-effet="revelateur"><span class="po-l1">${c.t('accueil.hero.titre1')}</span><span class="po-l2">${c.t('accueil.hero.titre2')}</span></h1>
        <p class="po-info mono" data-info-cle data-anime="gsap">${c.t('accueil.hero.info')}</p>
        <p class="po-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
        <p class="po-actions" data-anime="gsap">
          ${c.lien('contact', { ancre: 'message', classe: 'bouton', texte: c.t('accueil.hero.ecrire'), attrs: 'data-action-principale data-survol="magnetique"' })}
          ${c.lien('parcours', { classe: 'bouton bouton--contour', texte: c.t('accueil.hero.action') })}
        </p>
        <p class="po-geste mono masque-ecran-bas" aria-hidden="true"><span class="geste-souris">${c.t('accueil.hero.geste')}</span><span class="geste-doigt">${c.t('accueil.hero.gesteTactile')}</span></p>
      </div>
      <div class="po-table" data-anime="gsap">
        <div class="table-lumineuse" aria-hidden="true"></div>
        <div class="planche" data-effet="planche" data-grille="manipuler" role="group" aria-label="${c.s('accueil.hero.planche')}">
          ${P.map((x, i) => html`<button type="button" class="case${i === choisi ? ' est-choisie' : ''}${i >= 9 ? ' case-ordi' : ''}" data-i="${i}" data-titre="${x.titre}" data-credit="${credit(x)}" aria-pressed="${i === choisi ? 'true' : 'false'}" aria-label="${x.titre}, ${credit(x)}"${i === choisi ? brut(' data-iris-centre') : ''}>
            ${vignette(c, x.image, i < 6)}
            <span class="case-n" aria-hidden="true" data-audit-ignorer>${String(i + 1).padStart(2, '0')}</span>
          </button>`)}
          <svg class="cercle-choix" viewBox="0 0 220 270" preserveAspectRatio="none" aria-hidden="true" data-superpose><path d="M112 14 C 168 12, 206 62, 204 136 C 202 214, 160 258, 106 256 C 50 254, 14 206, 16 132 C 18 62, 58 18, 120 20" pathLength="1" filter="url(#gras-fil)"/></svg>
        </div>
        <div class="tirage-volant" data-effet="tirage-volant" data-superpose>
          <button type="button" class="tirage-carte" aria-pressed="false" aria-label="${c.s('accueil.visages.retourner')} : Col roulé, photo Laurent Bouillard">
            <span class="tirage-face">${c.media({ nom: 'bouillard-noir', alt: '', classe: 'tirage-media', sizes: '(max-width: 760px) 28vw, 13vw', priorite: true })}</span>
            <span class="tirage-dos" data-face="dos"><span class="mono">${c.t('accueil.visages.dos')}</span><b>Col roulé</b><span>Photo Laurent Bouillard</span></span>
          </button>
        </div>
        <svg class="trace-ouverture" aria-hidden="true" data-superpose><path filter="url(#gras-fil)"/></svg>
        <div class="loupe" data-effet="compte-fils" data-souris data-superpose data-audit-ignorer aria-hidden="true">
          <span class="loupe-ombre"></span>
          <div class="loupe-verre"><div class="loupe-zoom"></div><span class="loupe-reflet"></span></div>
          <svg class="loupe-bague" viewBox="0 0 200 200"><defs><path id="bague-cercle" d="M100 100 m -84 0 a 84 84 0 1 1 168 0 a 84 84 0 1 1 -168 0"/></defs><text><textPath href="#bague-cercle" startOffset="3%" data-bague>${credit(P[choisi]).toUpperCase()} · ${P[choisi].titre.toUpperCase()}</textPath></text></svg>
        </div>
      </div>
    </div>
    <div class="plongee-calque" aria-hidden="true" data-effet="plongee-portrait">
      <div class="plongee-image"><img src="${rire.grand}" srcset="${rire.srcset}" sizes="100vw" alt="" width="1920" height="1280" loading="lazy" decoding="async"></div>
    </div>
    <div class="plongee-texte">
      <p class="plongee-mots"><span>${c.t('accueil.plongee.mot1')}</span> <span>${c.t('accueil.plongee.mot2')}</span></p>
      <h2>${c.t('accueil.plongee.titre')}</h2>
      <p>${c.t('accueil.plongee.texte')}</p>
      ${c.lien('parcours', { classe: 'bouton bouton--clair', texte: c.t('accueil.plongee.lien') })}
    </div>
  </div>
</section>

<section class="jeu" id="jeu">
  <div class="conteneur jeu-grille">
    <div class="jeu-texte">
      <p class="surtitre mono" data-anime>${c.t('accueil.jeu.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.jeu.titre')}</h2>
      <p data-anime>${c.t('accueil.jeu.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'message', params: 'sujet=demo', classe: 'bouton', texte: c.t('accueil.jeu.demande') })}</p>
    </div>
    <ul class="videos" data-effet="affiches">
      ${p.videos.map((v, i) => html`<li class="video">
        <a class="video-lien" href="${v.url}" target="_blank" rel="noopener" aria-label="${v.titre} : ${c.s('accueil.jeu.voir')} ${c.s('accueil.jeu.nouvel')}">
          ${c.media({ nom: v.image, alt: `Affiche de ${v.titre}`, classe: 'video-media', sizes: '(max-width: 760px) 30vw, 16vw', ratio: '2/3' })}
          <span class="video-play" aria-hidden="true">▶${i === 0 ? crayon({ forme: 0, classe: 'crayon-play', fil: true }) : ''}</span>
        </a>
        <p class="video-titre">${v.titre}</p>
        <p class="video-accroche">${v.accroche}</p>
      </li>`)}
    </ul>
  </div>
  <div class="conteneur chiffres-grille" id="representations">
    <div class="chiffres-tete">
      <p class="surtitre mono" data-anime>${c.t('accueil.chiffres.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.chiffres.titre')}</h2>
      <p data-anime>${c.t('accueil.chiffres.texte')}</p>
      ${c.media({ nom: 'roka-pied', alt: 'Sarah Chaperon debout, les mains jointes, robe noire à manches de dentelle', classe: 'chiffres-portrait', sizes: '(max-width: 760px) 50vw, 18vw', cadrage: '50% 20%', attrs: 'data-fx="parallaxe"' })}
    </div>
    <div class="chiffres-droite">
    <ol class="chiffres-liste" data-anime="cascade">
      ${p.chiffres.map((x, i) => html`<li class="chiffre-ligne"><span class="chiffre-boite"><strong class="chiffre" data-compteur="${x.valeur}">${x.valeur}</strong>${i === 0 ? crayon({ forme: 1, classe: 'crayon-chiffre' }) : ''}</span><span class="chiffre-titre">${x.titre}</span><span class="chiffre-texte">${x.texte}</span></li>`)}
    </ol>
    <p class="chiffres-compagnies" data-anime>${c.t('accueil.chiffres.compagnies')}</p>
    </div>
  </div>
</section>

<section class="visages" id="visages">
  <div class="conteneur visages-contenu">
    <div class="visages-tete">
      <p class="surtitre mono" data-anime>${c.t('accueil.visages.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.visages.titre')}</h2>
      <p data-anime><span class="geste-souris">${c.t('accueil.visages.texte')}</span><span class="geste-doigt">${c.t('accueil.visages.texteTactile')}</span></p>
    </div>
    <div class="table-tirages" data-effet="table-tirages">
      <span class="table-tirages-lumiere" aria-hidden="true" data-effet="lumiere-table" data-souris></span>
      <ul class="tirages" data-effet="recomposition">
        ${P.map((x, i) => html`<li class="tirage" data-photographe="${x.photographe ? slug(x.photographe) : 'aucun'}" style="--r:${[-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.2, -0.8, 2.2, -1.8][i % 11]}deg">
          <button type="button" class="tirage-carte" aria-label="${c.s('accueil.visages.retourner')} : ${x.titre}, ${credit(x)}" aria-pressed="false">
            <span class="tirage-face">${c.media({ nom: x.image, alt: '', classe: 'tirage-media', sizes: '(max-width: 760px) 30vw, 14vw' })}</span>
            <span class="tirage-dos" data-face="dos"><span class="mono">${c.t('accueil.visages.dos')}</span><b>${x.titre}</b><span>${credit(x)}</span></span>
          </button>
          <p class="tirage-legende">${x.photographe || 'Photographe non crédité'}</p>
        </li>`)}
      </ul>
      <svg class="trace-libre" aria-hidden="true" data-superpose><path filter="url(#gras-fil)"/></svg>
    </div>
    <div class="visages-pied">
      <div class="filtres" role="group" aria-label="${c.s('accueil.visages.filtres')}">
        <span class="mono filtres-titre">${c.t('accueil.visages.filtres')}</span>
        <button type="button" class="filtre" data-filtre="tous" aria-pressed="true">${c.t('accueil.visages.tous')}</button>
        ${PHOTOGRAPHES.map((n) => html`<button type="button" class="filtre" data-filtre="${slug(n)}" aria-pressed="false">${n}</button>`)}
      </div>
      ${c.lien('portraits', { classe: 'bouton', texte: c.t('accueil.visages.lien') })}
    </div>
  </div>
</section>

<section class="voix-accueil" id="voix">
  <div class="conteneur voix-grille">
    <div class="voix-portrait" data-effet="halo-voix">
      ${c.media({ nom: 'bouillard-noir', alt: c.s('accueil.voix.alt'), classe: 'voix-media', sizes: '(max-width: 760px) 100vw, 40vw', cadrage: '50% 30%' })}
      <span class="voix-halo" aria-hidden="true"></span>
    </div>
    <div class="voix-texte">
      <p class="surtitre mono" data-anime>${c.t('accueil.voix.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.voix.titre')}</h2>
      <p data-anime>${c.t('accueil.voix.texte')}</p>
      <ol class="voix-liste" data-anime="cascade">
        ${c.donnees.voix.map((v) => html`<li><span class="voix-onde" aria-hidden="true" data-effet="onde-voix">${Array.from({ length: 18 }, (_, k) => html`<i style="--k:${k}"></i>`)}</span><span class="voix-titre">${v.titre}${v.auteur ? html` <em>· ${v.auteur}</em>` : ''}</span><span class="voix-duree mono">${v.duree}</span></li>`)}
      </ol>
      <p>${c.lien('demo-et-voix', { ancre: 'voix', classe: 'bouton bouton--clair', texte: c.t('accueil.voix.lien') })}</p>
    </div>
  </div>
</section>

<section class="actualite conteneur" id="actualite">
  <div class="actu-tete">
    <p class="surtitre mono" data-anime>${c.t('accueil.actualite.sur')}</p>
    <h2 data-anime="lignes">${c.t('accueil.actualite.titre')}</h2>
  </div>
  <article class="actu-avenir" data-anime>
    <p class="mono actu-etiquette">${c.t('accueil.actualite.aVenir')}</p>
    <h3>${avenir.titre}</h3>
    <p>${avenir.auteurs} · ${avenir.mes}</p>
    <p class="actu-quand"><span class="actu-quand-txt">${avenir.quand}</span>${crayon({ forme: 2, classe: 'crayon-date' })}</p>
  </article>
  <div class="actu-passees">
    <p class="mono actu-etiquette">${c.t('accueil.actualite.passees')}</p>
    <ol data-anime="cascade">${passees.map((d) => html`<li><s>${d.quand}</s><b>${d.titre}</b><span>${d.lieu}</span></li>`)}</ol>
    <p>${c.lien('parcours', { ancre: 'actualite', classe: 'lien-fleche', texte: c.t('accueil.actualite.lien') })}</p>
  </div>
</section>

<section class="appel" id="appel">
  ${c.media({ nom: 'grok/coulisses', alt: '', classe: 'appel-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" aria-hidden="true"' })}
  <div class="conteneur appel-grille">
    <div>
      <p class="surtitre mono" data-anime>${c.t('accueil.appel.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.appel.titre')}</h2>
      <p data-anime>${c.t('accueil.appel.texte')}</p>
    </div>
    <div class="appel-coord" data-anime>
      <a class="appel-tel" href="tel:${c.site.contact.telephoneLien}"><span class="tel-boite"><span class="tel-num">${c.site.contact.telephone}</span>${crayon({ forme: 2, classe: 'crayon-tel' })}</span></a>
      <a class="appel-mail" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a>
      ${c.lien('contact', { classe: 'bouton bouton--clair', texte: c.t('accueil.appel.ecrire'), attrs: 'data-survol="magnetique"' })}
    </div>
  </div>
</section>
`;
};
