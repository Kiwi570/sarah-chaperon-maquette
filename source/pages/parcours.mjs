/* Parcours · ouverture : plateau noir, une poursuite qui suit la main (fond sombre, plein écran, grand titre à gauche).
   Signature : les tournages en frise qui avancent de côté (1991 → 2024) ; le théâtre se range par registre. */
import { html } from '../../outils/gabarit.mjs';
import { crayon } from '../gabarits/crayon.mjs';

export const page = { cle: 'parcours', fichier: 'parcours', imagePartage: 'grok/plateau-1280.webp' };

const REG = ['tous', 'classique', 'contemporain', 'jeune-public'];

export default (c) => {
  const p = c.donnees.parcours;
  const tournages = [...p.tournages].sort((a, b) => a.annee - b.annee);
  return html`
<section class="pa-ouverture" id="debut">
  ${c.media({ nom: 'grok/plateau', alt: c.s('parcours.alt'), priorite: true, classe: 'pa-plateau', sizes: '100vw', cadrage: '60% 60%' })}
  <span class="pa-poursuite" data-effet="poursuite" data-souris aria-hidden="true"></span>
  <div class="pa-texte conteneur">
    <p class="surtitre mono ouvre" data-anime="gsap">${c.t('parcours.sur')}</p>
    <h1 class="pa-titre" data-grille="typo" data-iris-centre><span>${c.t('parcours.titre1')}</span> <span class="rouge">${c.t('parcours.titre2')}</span></h1>
    <p class="mono ouvre pa-info" data-info-cle data-anime="gsap">${c.t('parcours.info')}</p>
    <p class="ouvre" data-anime="gsap"><a class="bouton bouton--clair" href="#actualite" data-action-principale>${c.t('parcours.action')}</a></p>
    <p class="ouvre pa-intro masque-ecran-bas" data-anime="gsap">${c.t('parcours.texte')}</p>
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
      ${p.agenda.map((d, i) => html`<li class="pa-date" data-debut="${d.debut}" data-fin="${d.fin || d.debut}"><span class="pa-quand">${d.quand}${i === 0 ? crayon({ forme: 2, classe: 'crayon-date', fil: true }) : ''}</span><b>${d.titre}</b><span>${d.auteurs}${d.mes ? ` · ${d.mes}` : ''} · ${d.lieu}</span></li>`)}
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
      ${c.media({ nom: 'grok/texte-annote', alt: 'Pages de texte annotées au crayon rouge sur une table de répétition', classe: 'pa-theatre-media', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="parallaxe"' })}
    </div>
    <ul class="pa-pieces" data-effet="recomposition">
      ${p.theatre.map((t) => html`<li class="pa-piece" data-registre="${t.registre}"><b>${t.titre}</b><span>${t.detail}</span></li>`)}
    </ul>
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
      ${c.media({ nom: 'grok/tournage', alt: c.s('parcours.tournages.alt'), classe: 'pa-frise-media', sizes: '(max-width: 760px) 80vw, 34vw' })}
      ${tournages.map((t) => html`<article class="pa-film"><p class="pa-annee">${String(t.annee)}</p><h3>${t.titre}</h3><p>${t.real}${t.format ? ` · ${t.format}` : ''}</p>${t.role ? html`<p class="pa-role">${t.role}</p>` : ''}</article>`)}
    </div>
    <div class="pa-frise-barre" aria-hidden="true"><span></span></div>
  </div>
</section>

<section class="pa-cv conteneur" id="cv">
  ${c.media({ nom: 'bouillard-lunettes', alt: c.donnees.images['bouillard-lunettes'].alt, classe: 'pa-cv-media', sizes: '(max-width: 760px) 70vw, 24vw', attrs: 'data-anime="rideau"' })}
  <h2 data-anime="lignes">${c.t('parcours.cv.titre')}</h2>
  <p data-anime>${c.t('parcours.cv.texte')}</p>
  <p data-anime>${c.lien('contact', { ancre: 'message', params: 'sujet=cv', classe: 'bouton', texte: c.t('parcours.cv.action') })}</p>
</section>
`;
};
