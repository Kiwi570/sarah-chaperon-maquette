/* Contact (v2) · ouverture : le numéro en très grand sur le cache crème, et sur la table lumineuse la pochette de tirages
   d'où dépasse son portrait (scindée, compacte). Signature : à l'envoi, le message file vers la pochette,
   le tirage rentre dedans et le tampon « Reçu » s'abat sur la pochette (retour physique). */
import { html } from '../../outils/gabarit.mjs';
import { crayon } from '../gabarits/crayon.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'robin-1120.webp' };

export default (c) => html`
<section class="table-ouverture co2-ouverture" id="debut">
  <div class="to-cache">
    <p class="surtitre mono ouvre" data-anime="gsap">${c.t('contact.sur')}</p>
    <h1 class="to-titre" data-grille="typo"><span>${c.t('contact.titre1')}</span> <span class="rouge rouge--sobre">${c.t('contact.titre2')}</span></h1>
    <p class="co-coord ouvre" data-anime="gsap">
      <a class="co-tel" href="tel:${c.site.contact.telephoneLien}" data-info-cle><span class="tel-boite"><span class="tel-num">${c.site.contact.telephone}</span>${crayon({ forme: 2, classe: 'crayon-tel', fil: true })}</span></a>
      <a class="co-mail" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a>
    </p>
    <p class="ouvre" data-anime="gsap"><a class="bouton" href="#message" data-action-principale>${c.t('contact.form.titre')}</a></p>
    <p class="ouvre co-intro masque-ecran-bas" data-anime="gsap">${c.t('contact.texte')}</p>
  </div>
  <div class="to-table">
    <div class="to-lumiere" aria-hidden="true"></div>
    <div class="pochette" data-effet="pochette" data-iris-centre>
      <figure class="pochette-tirage">${c.media({ nom: 'robin', alt: c.donnees.images.robin.alt, classe: 'to-media', sizes: '(max-width: 760px) 50vw, 20vw', priorite: true, ratio: '4/5' })}</figure>
      <div class="pochette-avant" aria-hidden="true"><span class="pochette-nom">Sarah Chaperon</span><span class="mono">Tirages · Photo Fabrice Robin</span></div>
      <span class="pochette-tampon" aria-hidden="true" data-superpose>${c.t('contact.recu')}</span>
    </div>
  </div>
</section>

<section class="co-form-zone conteneur" id="message">
  <form class="co-form" data-formulaire data-grille="retour" data-effet="pochette-recu">
    <h2 data-anime="lignes">${c.t('contact.form.titre')}</h2>
    <div class="champ"><label for="nom">${c.t('contact.form.nom')}</label><input id="nom" name="nom" autocomplete="name" required></div>
    <div class="champ"><label for="email">${c.t('contact.form.email')}</label><input id="email" name="email" type="email" autocomplete="email" required></div>
    <div class="champ"><label for="tel">${c.t('contact.form.tel')}</label><input id="tel" name="tel" type="tel" autocomplete="tel"></div>
    <div class="champ"><label for="sujet">${c.t('contact.form.sujet')}</label>
      <select id="sujet" name="sujet">
        <option value="role">${c.t('contact.form.sujetRole')}</option>
        <option value="lecture">${c.t('contact.form.sujetLecture')}</option>
        <option value="voix">${c.t('contact.form.sujetVoix')}</option>
        <option value="demo">${c.t('contact.form.sujetDemo')}</option>
        <option value="voix-extraits">${c.t('contact.form.sujetExtraits')}</option>
        <option value="cv">${c.t('contact.form.sujetCv')}</option>
        <option value="autre">${c.t('contact.form.sujetAutre')}</option>
      </select></div>
    <div class="champ"><label for="message-texte">${c.t('contact.form.message')}</label><textarea id="message-texte" name="message" rows="5" required></textarea></div>
    <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
    <p><button class="bouton" type="submit">${c.t('contact.form.envoyer')}</button></p>
    <p data-message-envoi hidden tabindex="-1" data-texte="${c.s('contact.form.simule')}"></p>
    <span class="co-tampon" aria-hidden="true" data-superpose>${c.t('contact.recu')}</span>
  </form>
  <aside class="co-direct">
    ${c.media({ nom: 'bouillard-pied', alt: c.donnees.images['bouillard-pied'].alt, classe: 'co-portrait', sizes: '(max-width: 760px) 50vw, 20vw', ratio: '2/3', attrs: 'data-anime="rideau"' })}
    <p class="mono co-credit">Photo Laurent Bouillard</p>
    <h2 data-anime="lignes">${c.t('contact.direct.titre')}</h2>
    <p data-anime><a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('contact.direct.appel')} ${c.site.contact.telephone}</a></p>
    <p data-anime><a class="lien-fleche" href="mailto:${c.site.contact.email}">${c.t('contact.direct.mail')}</a></p>
  </aside>
</section>
`;
