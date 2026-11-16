/* Démo et voix · ouverture : la salle de projection, un faisceau qui suit la main et allume l'écran (centrée, plein écran, titre en bas).
   Signature : les extraits de voix, dont l'onde respire avec la lecture (module lecteur-reactif-au-son quand les mp3 sont fournis). */
import { html, brut } from '../../outils/gabarit.mjs';
import { crayon } from '../gabarits/crayon.mjs';
import { existsSync } from 'node:fs';

export const page = { cle: 'demo-et-voix', fichier: 'demo-et-voix', imagePartage: 'grok/salle-projection-1280.webp' };

export default (c) => {
  const p = c.donnees.parcours;
  const sons = c.donnees.voix.map((v) => ({ ...v, src: existsSync(new URL(`../../assets/audio/${v.fichier}.mp3`, import.meta.url)) ? `/assets/audio/${v.fichier}.mp3` : '' }));
  const avecSon = sons.some((v) => v.src);
  return html`
<section class="dv-ouverture" id="debut">
  ${c.media({ nom: 'grok/salle-projection', alt: c.s('demo.alt'), priorite: true, classe: 'dv-salle', sizes: '100vw', cadrage: '60% 45%' })}
  <span class="dv-faisceau" data-effet="faisceau" data-souris aria-hidden="true"></span>
  <div class="dv-texte conteneur">
    <p class="surtitre mono ouvre" data-anime="gsap">${c.t('demo.sur')}</p>
    <h1 class="dv-titre" data-grille="typo" data-iris-centre><span>${c.t('demo.titre1')}</span> <span class="rouge">${c.t('demo.titre2')}</span></h1>
    <p class="ouvre dv-actions" data-anime="gsap"><a class="bouton bouton--clair" href="#voix" data-action-principale>Écouter sa voix</a> <span class="mono dv-info" data-info-cle>${c.t('demo.info')}</span></p>
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
  <ol class="dv-videos" data-anime="cascade">
    ${p.videos.map((v) => html`<li><a class="dv-video" href="${v.url}" target="_blank" rel="noopener">
      ${c.media({ nom: v.image, alt: `Affiche de ${v.titre}`, classe: 'dv-video-media', sizes: '(max-width: 760px) 30vw, 10vw', ratio: '2/3' })}
      <span><b>${v.titre}</b> <em>${v.accroche}</em> <span class="mono">YouTube ↗</span></span></a></li>`)}
  </ol>
</section>

<section class="dv-voix" id="voix" data-gouttiere="#0f0e0d">
  <div class="conteneur dv-voix-grille">
    ${c.media({ nom: 'grok/studio-voix', alt: 'Un micro à ruban devant un pupitre dans une cabine d’enregistrement', classe: 'dv-voix-media', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-fx="zoom"' })}
    <div class="lrs dv-lecteur" data-module="lecteur-reactif-au-son" data-avec-son="${avecSon ? 'oui' : 'non'}">
      <p class="surtitre mono">${c.t('demo.voix.sur')}</p>
      <h2 data-anime="lignes">${c.t('demo.voix.titre')}</h2>
      <p>${c.t('demo.voix.texte')}</p>
      <ol class="lrs__pistes dv-pistes">
        ${sons.map((v) => html`<li class="lrs__piste dv-piste"${v.src ? brut(` data-src="${v.src}"`) : ''}>
          ${v.src ? html`<button class="lrs__jouer" type="button" aria-pressed="false" aria-label="Écouter ${v.titre}"><span class="lrs__ico" aria-hidden="true"></span></button>` : html`<span class="dv-onde" aria-hidden="true" data-effet="onde-voix">${Array.from({ length: 14 }, () => html`<i></i>`)}</span>`}
          <span class="lrs__corps"><span class="lrs__titre">${v.titre}</span><span class="lrs__detail">${[v.auteur, v.detail].filter(Boolean).join(' · ')}</span></span>
          <span class="lrs__duree mono">${v.duree}</span>
        </li>`)}
      </ol>
      ${avecSon ? '' : html`<p class="dv-note">${c.t('demo.voix.note')}</p><p>${c.lien('contact', { ancre: 'message', params: 'sujet=voix-extraits', classe: 'bouton bouton--clair', texte: c.t('demo.voix.demande') })}</p>`}
      <audio class="lrs__audio" preload="none"></audio>
      <p class="dv-suite"><b>${c.t('demo.suite.titre')}</b> ${c.lien('contact', { classe: 'lien-fleche', texte: c.t('demo.suite.action') })}</p>
    </div>
  </div>
</section>
`;
};
