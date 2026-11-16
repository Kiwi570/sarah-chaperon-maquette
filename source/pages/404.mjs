/* Page introuvable : une chaise seule sur le plateau. */
import { html } from '../../outils/gabarit.mjs';
export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };
export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/vide', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="zoom"' })}
  <div class="introuvable-texte conteneur">
    <p class="surtitre mono ouvre" data-anime="gsap">Erreur 404</p>
    <h1 data-grille="typo"><span>${c.t('introuvable.titre')}</span></h1>
    <p data-anime="gsap" class="ouvre">${c.t('introuvable.texte')}</p>
    <p data-anime="gsap" class="ouvre">${c.lien('accueil', { classe: 'bouton bouton--clair', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
    <p class="mono ouvre" data-info-cle data-anime="gsap">${c.site.contact.telephone}</p>
  </div>
</section>`;
