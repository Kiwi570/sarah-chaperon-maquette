/* Parcours (v2) · ouverture : la feuille de route posée sur la table lumineuse, entre trois affiches et un tirage
   (cache crème à gauche, table à droite, tirages qui glissent en place).
   Signature : la frise des tournages, rôle en titre, qui avance de côté ; le répertoire en index typographique. */
import { html } from '../../outils/gabarit.mjs';
import { crayon } from '../gabarits/crayon.mjs';

export const page = { cle: 'parcours', fichier: 'parcours', imagePartage: 'bouillard-lunettes-1120.webp' };

const REG = ['tous', 'classique', 'contemporain', 'jeune-public'];

export default (c) => {
  const p = c.donnees.parcours;
  const tournages = [...p.tournages].sort((a, b) => a.annee - b.annee);
  const prochaine = p.agenda[0];
  return html`
<section class="table-ouverture pa2-ouverture" id="debut">
  <div class="to-cache">
    <p class="surtitre mono ouvre" data-anime="gsap">${c.t('parcours.sur')}</p>
    <h1 class="to-titre" data-grille="typo"><span>${c.t('parcours.titre1')}</span> <span class="rouge rouge--sobre">${c.t('parcours.titre2')}</span></h1>
    <p class="mono ouvre to-info" data-info-cle data-anime="gsap">${c.t('parcours.info')}</p>
    <p class="ouvre" data-anime="gsap"><a class="bouton" href="#actualite" data-action-principale>${c.t('parcours.action')}</a> ${c.lien('contact', { ancre: 'message', params: 'sujet=cv', classe: 'bouton bouton--contour', texte: c.t('parcours.cv.action') })}</p>
    <p class="ouvre to-intro masque-ecran-bas" data-anime="gsap">${c.t('parcours.texte')}</p>
  </div>
  <div class="to-table" data-effet="tirages-poses">
    <div class="to-lumiere" aria-hidden="true"></div>
    <figure class="to-tirage to-t1" data-iris-centre>${c.media({ nom: 'bouillard-lunettes', alt: c.donnees.images['bouillard-lunettes'].alt, classe: 'to-media', sizes: '(max-width: 760px) 60vw, 26vw', priorite: true, ratio: '3/2' })}<figcaption class="mono">Photo Laurent Bouillard</figcaption></figure>
    <figure class="to-tirage to-t2">${c.media({ nom: 'affiche-sacrees-championnes', alt: 'Affiche de Sacrées Championnes', classe: 'to-media', sizes: '(max-width: 760px) 30vw, 11vw', ratio: '2/3' })}</figure>
    <figure class="to-tirage to-t3">${c.media({ nom: 'affiche-veni-vidi-bibi', alt: 'Affiche de Veni Vidi Bibi', classe: 'to-media', sizes: '(max-width: 760px) 30vw, 11vw', ratio: '2/3' })}</figure>
    <figure class="to-tirage to-t4">${c.media({ nom: 'affiche-lombricontes', alt: 'Affiche des Lombricontes', classe: 'to-media', sizes: '(max-width: 760px) 30vw, 11vw', ratio: '2/3' })}</figure>
    <div class="to-fiche" data-superpose>
      <p class="mono">${c.t('parcours.actu.aVenir')}</p>
      <p class="to-fiche-titre">${prochaine.titre}</p>
      <p class="to-fiche-quand"><span class="tel-boite">${prochaine.quand}${crayon({ forme: 2, classe: 'crayon-fiche', fil: true })}</span></p>
      <p class="to-fiche-detail">${prochaine.mes}</p>
    </div>
  </div>
</section>

<section class="pa-actu conteneur" id="actualite">
  <div>
    <p class="surtitre mono" data-anime>${c.t('parcours.actu.sur')}</p>
    <h2 data-anime="lignes">${c.t('parcours.actu.titre')}</h2>
    ${c.media({ nom: 'slk-menton', alt: c.donnees.images['slk-menton'].alt, classe: 'pa-actu-affiche', sizes: '(max-width: 760px) 50vw, 18vw', ratio: '2/3', attrs: 'data-fx="parallaxe"' })}
  </div>
  <div class="pa-dates" data-effet="dates">
    <p class="mono actu-etiquette" data-groupe-titre="avenir" data-texte="${c.s('parcours.actu.aVenir')}">${c.t('parcours.actu.toutes')}</p>
    <ol class="pa-liste" data-groupe="avenir">
      ${p.agenda.map((d) => html`<li class="pa-date" data-debut="${d.debut}" data-fin="${d.fin || d.debut}"><span class="pa-quand">${d.quand}</span><b>${d.titre}</b><span>${d.auteurs}${d.mes ? ` · ${d.mes}` : ''} · ${d.lieu}</span></li>`)}
    </ol>
    <p class="mono actu-etiquette" data-groupe-titre="passees" hidden>${c.t('parcours.actu.passees')}</p>
    <ol class="pa-liste pa-liste--passees" data-groupe="passees"></ol>
  </div>
</section>

<section class="pa-theatre" id="theatre">
  <div class="conteneur pa-theatre-grille">
    <div class="pa-theatre-tete">
      <p class="surtitre mono" data-anime>${c.t('parcours.theatre.sur')}</p>
      <h2 data-anime="lignes">${c.t('parcours.theatre.titre')}</h2>
      <p data-anime>${c.t('parcours.theatre.texte')}</p>
      <div class="filtres filtres--clair" role="group" aria-label="${c.s('parcours.theatre.filtres')}">
        ${REG.map((r, i) => html`<button type="button" class="filtre" data-registre="${r}" aria-pressed="${i ? 'false' : 'true'}">${c.t('parcours.theatre.' + r)}</button>`)}
      </div>
      ${c.media({ nom: 'roka-pied', alt: c.donnees.images['roka-pied'].alt, classe: 'pa-theatre-media', sizes: '(max-width: 760px) 50vw, 16vw', ratio: '9/16', attrs: 'data-fx="parallaxe"' })}
      <p class="mono pa-credit">Photo Roka production</p>
    </div>
    <ol class="pa-index" data-effet="recomposition">
      ${p.theatre.map((t) => html`<li class="pa-piece" data-registre="${t.registre}"><b>${t.titre}</b><span>${t.detail}</span></li>`)}
    </ol>
  </div>
  <p class="conteneur pa-compagnies mono" data-anime>${c.t('parcours.theatre.compagnies')} ${p.compagnies}</p>
</section>

<section class="pa-tournages" id="tournages" data-scene data-entete-cache>
  <div class="pa-collant" data-collant>
    <div class="pa-tournages-tete conteneur">
      <p class="surtitre mono">${c.t('parcours.tournages.sur')}</p>
      <h2 data-anime="lignes">${c.t('parcours.tournages.titre')}</h2>
      <p class="masque-ecran-bas">${c.t('parcours.tournages.texte')}</p>
    </div>
    <div class="pa-frise" data-effet="frise" data-galerie tabindex="0" role="region" aria-label="${c.s('parcours.tournages.region')}">
      <figure class="pa-frise-tirage">${c.media({ nom: 'bouillard-hanches', alt: c.donnees.images['bouillard-hanches'].alt, classe: 'pa-frise-media', sizes: '(max-width: 760px) 70vw, 26vw', ratio: '3/2' })}<figcaption class="mono">Photo Laurent Bouillard</figcaption></figure>
      ${tournages.map((t) => html`<article class="pa-film"><p class="pa-annee mono">${String(t.annee)}${t.format ? ` · ${t.format}` : ''}</p><h3>${t.role || t.titre}</h3>${t.role ? html`<p class="pa-film-titre">${t.titre}</p>` : ''}<p>${t.real}</p></article>`)}
    </div>
    <div class="pa-frise-barre" aria-hidden="true"><span></span></div>
  </div>
</section>

<section class="pa-cv conteneur" id="cv">
  ${c.media({ nom: 'fougereux-manteau', alt: c.donnees.images['fougereux-manteau'].alt, classe: 'pa-cv-media', sizes: '(max-width: 760px) 60vw, 18vw', ratio: '2/3', attrs: 'data-anime="rideau"' })}
  <h2 data-anime="lignes">${c.t('parcours.cv.titre')}</h2>
  <p data-anime>${c.t('parcours.cv.texte')}</p>
  <p data-anime>${c.lien('contact', { ancre: 'message', params: 'sujet=cv', classe: 'bouton', texte: c.t('parcours.cv.action') })}</p>
</section>
`;
};
