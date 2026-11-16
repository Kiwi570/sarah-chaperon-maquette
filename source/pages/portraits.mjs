/* Portraits · ouverture : fond noir de studio, un tirage qui se révèle dans le bac (scindée : texte à gauche, tirage à droite).
   Signature : la planche complète qu'on range par photographe ou par lumière, et chaque tirage qui s'ouvre en grand (lien propre). */
import { html } from '../../outils/gabarit.mjs';
import { crayon } from '../gabarits/crayon.mjs';

export const page = { cle: 'portraits', fichier: 'portraits', imagePartage: 'roka-buste-800.webp' };
const slug = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default (c) => {
  const P = c.donnees.portraits;
  const photographes = [...new Set(P.map((x) => x.photographe).filter(Boolean))];
  const grand = (nom) => { const ws = c.donnees.images[nom].largeurs; return `/assets/images/${nom}-${ws[ws.length - 1]}.webp`; };
  return html`
<section class="po2-ouverture" id="debut">
  <div class="po2-texte">
    <p class="surtitre mono ouvre" data-anime="gsap">${c.t('portraits.sur')}</p>
    <h1 class="po2-titre" data-grille="typo"><span>${c.t('portraits.titre1')}</span> <span class="rouge">${c.t('portraits.titre2')}</span></h1>
    <p class="ouvre" data-anime="gsap">${c.t('portraits.texte')}</p>
    <p class="mono ouvre po2-info" data-info-cle data-anime="gsap">${c.t('portraits.info')}</p>
    <p class="ouvre" data-anime="gsap"><a class="bouton bouton--clair" href="#planche" data-action-principale>${c.t('portraits.action')}</a></p>
  </div>
  <div class="po2-bac" data-iris-centre>
    ${c.media({ nom: 'roka-buste', alt: c.donnees.images['roka-buste'].alt, priorite: true, classe: 'po2-tirage', sizes: '(max-width: 760px) 70vw, 30vw', attrs: 'data-effet="tirage"' })}
    <p class="po2-credit mono">Photo Roka production</p>
  </div>
</section>

<section class="po2-planche" id="planche">
  <div class="conteneur">
    <div class="po2-tete">
      <p class="surtitre mono" data-anime>${c.t('portraits.planche.sur')}</p>
      <h2 data-anime="lignes">${c.t('portraits.planche.titre')}${crayon({ forme: 1, classe: 'crayon-titre', fil: true })}</h2>
      <div class="filtres filtres--clair" role="group" aria-label="${c.s('portraits.planche.filtres')}">
        <button type="button" class="filtre" data-filtre="tous" aria-pressed="true">${c.t('portraits.planche.tous')}</button>
        ${photographes.map((n) => html`<button type="button" class="filtre" data-filtre="${slug(n)}" aria-pressed="false">${n}</button>`)}
        ${['noir', 'gris', 'dehors'].map((l) => html`<button type="button" class="filtre" data-filtre="${l}" aria-pressed="false">${c.t('portraits.planche.' + l)}</button>`)}
      </div>
    </div>
    <ul class="po2-grille" data-effet="recomposition">
      ${P.map((x, i) => html`<li class="po2-item" id="portrait-${i + 1}" data-cles="tous ${x.photographe ? slug(x.photographe) : ''} ${x.lumiere}">
        <a class="po2-lien" href="#portrait-${i + 1}" data-sans-transition data-grand="${grand(x.image)}" data-titre="${x.titre}" data-credit="${x.photographe ? `Photo ${x.photographe}` : 'Photographe non crédité'}" aria-label="${x.titre} : ouvrir en grand">
          ${c.media({ nom: x.image, alt: c.donnees.images[x.image].alt, classe: 'po2-media', sizes: '(max-width: 760px) 45vw, 22vw', ratio: '4/5' })}
        </a>
        <p class="po2-legende"><b>${x.titre}</b> ${x.photographe ? `Photo ${x.photographe}` : 'Photographe non crédité'}</p>
      </li>`)}
    </ul>
  </div>
</section>

<dialog class="visionneuse" data-recouvrement aria-label="${c.s('portraits.visionneuse.titre')}">
  <figure class="vis-figure"><img class="vis-img" src="/assets/images/${P[0].image}-480.webp" alt="" width="480" height="600"><figcaption class="vis-legende"><b data-vis-titre></b> <span data-vis-credit></span></figcaption></figure>
  <button type="button" class="vis-bouton vis-prec" aria-label="${c.s('portraits.visionneuse.precedent')}">←</button>
  <button type="button" class="vis-bouton vis-suiv" aria-label="${c.s('portraits.visionneuse.suivant')}">→</button>
  <button type="button" class="vis-bouton vis-fermer">${c.t('portraits.visionneuse.fermer')}</button>
</dialog>

<section class="po2-demande" id="demande">
  <div class="conteneur po2-demande-grille">
    ${c.media({ nom: 'grok/coulisses', alt: c.s('contact.alt'), classe: 'po2-demande-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <h2 data-anime="lignes">${c.t('portraits.demande.titre')}</h2>
      <p data-anime>${c.t('portraits.demande.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'message', params: 'sujet=cv', classe: 'bouton bouton--clair', texte: c.t('portraits.demande.action') })}</p>
    </div>
  </div>
</section>
`;
};
