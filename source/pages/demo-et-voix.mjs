/* Démo et voix (v2) · ouverture : une bande de film posée sur la table lumineuse, ses trois images sont les vraies vidéos
   de la Cie PILE ; la bande avance au défilement (titre en bas, bande en travers de l'écran).
   Signature : sa voix, une onde tracée au crayon qui court sur son portrait. */
import { html, brut } from '../../outils/gabarit.mjs';
import { crayon } from '../gabarits/crayon.mjs';
import { existsSync } from 'node:fs';

export const page = { cle: 'demo-et-voix', fichier: 'demo-et-voix', imagePartage: 'slk-jardin-1120.webp' };
const IMG = { 'Veni Vidi Bibi': 'video-veni', 'Sacrées Championnes': 'video-sacrees', 'Les Lombricontes': 'video-lombri' };

export default (c) => {
  const p = c.donnees.parcours;
  const sons = c.donnees.voix.map((v) => ({ ...v, src: existsSync(new URL(`../../assets/audio/${v.fichier}.mp3`, import.meta.url)) ? `/assets/audio/${v.fichier}.mp3` : '' }));
  const avecSon = sons.some((v) => v.src);
  return html`
<section class="dv2-ouverture" id="debut">
  <div class="dv2-table" aria-hidden="true"></div>
  <div class="dv2-bande" data-effet="bande" data-galerie data-visuel>
    ${p.videos.map((v, i) => html`<a class="dv2-image" href="${v.url}" target="_blank" rel="noopener" aria-label="${v.titre} : voir la vidéo sur YouTube (nouvel onglet)"${i === 1 ? brut(' data-iris-centre') : ''}>
      ${c.media({ nom: IMG[v.titre], alt: `Image de la vidéo ${v.titre}`, classe: 'dv2-media', sizes: '(max-width: 760px) 70vw, 30vw', priorite: true, ratio: '16/9' })}
      <span class="dv2-play" aria-hidden="true" data-audit-ignorer>▶</span><span class="dv2-legende mono">${v.titre} · YouTube ↗</span>
    </a>`)}
  </div>
  <div class="dv2-texte conteneur">
    <p class="surtitre mono ouvre" data-anime="gsap">${c.t('demo.sur')}</p>
    <h1 class="dv-titre" data-grille="typo"><span>${c.t('demo.titre1')}</span> <span class="rouge rouge--sobre">${c.t('demo.titre2')}</span></h1>
    <p class="ouvre dv-actions" data-anime="gsap"><a class="bouton" href="#voix" data-action-principale>Écouter sa voix</a> <span class="mono dv-info" data-info-cle>${c.t('demo.info')}</span></p>
    <p class="ouvre dv-intro masque-ecran-bas" data-anime="gsap">${c.t('demo.texte')}</p>
  </div>
</section>

<section class="dv-demo conteneur" id="demo">
  <div>
    <p class="surtitre mono" data-anime>${c.t('demo.video.sur')}</p>
    <h2 data-anime="lignes">${c.t('demo.video.titre')}</h2>
    <p data-anime>${c.t('demo.video.texte')} ${c.t('demo.video.note')}</p>
    <p data-anime class="dv-demande">${c.lien('contact', { ancre: 'message', params: 'sujet=demo', classe: 'bouton', texte: c.t('demo.video.demande') })}${crayon({ forme: 2, classe: 'crayon-bouton', fil: true })}</p>
  </div>
  <figure class="dv-portrait">${c.media({ nom: 'slk-menton', alt: c.donnees.images['slk-menton'].alt, classe: 'dv-portrait-media', sizes: '(max-width: 760px) 70vw, 30vw', ratio: '3/2', cadrage: '50% 25%', attrs: 'data-fx="parallaxe"' })}<figcaption class="mono">Photo Ana Slk</figcaption></figure>
</section>

<section class="dv-voix" id="voix">
  <div class="conteneur dv-voix-grille">
    <figure class="dv-voix-portrait" data-effet="onde-crayon">
      ${c.media({ nom: 'slk-jardin', alt: c.donnees.images['slk-jardin'].alt, classe: 'dv-voix-media', sizes: '(max-width: 760px) 100vw, 36vw', ratio: '4/5' })}
      <svg class="dv-onde-crayon" viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 L400 40"/></svg>
      <figcaption class="mono">Photo Ana Slk</figcaption>
    </figure>
    <div class="lrs dv-lecteur" data-module="lecteur-reactif-au-son" data-avec-son="${avecSon ? 'oui' : 'non'}">
      <p class="surtitre mono">${c.t('demo.voix.sur')}</p>
      <h2 data-anime="lignes">${c.t('demo.voix.titre')}</h2>
      <p>${c.t('demo.voix.texte')}</p>
      <ol class="lrs__pistes dv-pistes">
        ${sons.map((v) => html`<li class="lrs__piste dv-piste"${v.src ? brut(` data-src="${v.src}"`) : ''}>
          ${v.src ? html`<button class="lrs__jouer" type="button" aria-pressed="false" aria-label="Écouter ${v.titre}"><span class="lrs__ico" aria-hidden="true"></span></button>` : html`<span class="dv-num mono" aria-hidden="true">${String(sons.indexOf(v) + 1).padStart(2, '0')}</span>`}
          <span class="lrs__corps"><span class="lrs__titre">${v.titre}</span><span class="lrs__detail">${[v.auteur, v.detail].filter(Boolean).join(' · ')}</span></span>
          <span class="lrs__duree mono">${v.duree}</span>
        </li>`)}
      </ol>
      ${avecSon ? '' : html`<p class="dv-note">${c.t('demo.voix.note')}</p><p>${c.lien('contact', { ancre: 'message', params: 'sujet=voix-extraits', classe: 'bouton bouton--clair', texte: c.t('demo.voix.demande') })}</p>`}
      <audio class="lrs__audio" preload="none"></audio>
      <p class="dv-suite"><b>${c.t('demo.suite.titre')}</b> ${c.lien('contact', { ancre: 'message', classe: 'lien-fleche', texte: c.t('demo.suite.action') })}</p>
    </div>
  </div>
</section>
`;
};
