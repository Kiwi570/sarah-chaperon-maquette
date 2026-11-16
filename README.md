# Sarah Chaperon — maquette v2

Maquette du site de Sarah Chaperon, comédienne (théâtre, tournages, voix). Direction « La planche-contact » : ses portraits sur une table lumineuse, une loupe à promener, le crayon gras rouge qui entoure ce qu'il faut voir.

- Adresse prévue : https://sarah-chaperon-maquette.vercel.app
- Site actuel : https://sarahchaperon.wixsite.com/sarah-chaperon
- Pages : accueil, Parcours, Portraits, Démo & voix, Contact, 404.

## Pour la modifier

Les textes sont dans `donnees/textes/fr.json`, les données (dates, tournages, théâtre, portraits, voix) dans `donnees/*.json`. Ensuite, lancer `node outils/generer.mjs` pour regénérer les pages. Ne jamais modifier les fichiers `.html` à la main.

## À fournir par Sarah (à compléter)

- **Mentions légales** : nom de l'éditeur, adresse, SIRET ou statut (intermittente, auto-entrepreneuse…), directeur de la publication. À compléter.
- **Politique de confidentialité** : données recueillies par le formulaire, durée de conservation, droits. À compléter.
- **Hébergeur** : Vercel Inc., adresse à vérifier sur vercel.com au moment de la mise en ligne.
- **Crédits photos** : le portrait au grand rire (page Contact du site actuel) n'a pas de crédit. Photographe à confirmer.
- **Orthographe** : la metteuse en scène de Yerma est écrite « Aura Cobenau » et « Aura Coben » sur le site actuel. Le nom de la photographe est écrit « Ana Slk » et « Anna Slk ». À confirmer.
- **Bande-démo 2024** : le lien (YouTube ou Vimeo) n'a pas pu être récupéré depuis Wix. La maquette propose « sur demande » et un lien vers le formulaire.
- **Extraits de voix** : les 4 fichiers mp3 (En mai, Bien-être 1 et 2, Shanghai). Sans eux, les lecteurs affichent « disponibles sur demande ». Posés dans `assets/audio/` (`en-mai.mp3`, `bien-etre-1.mp3`, `bien-etre-2.mp3`, `shanghai.mp3`), ils s'activent tout seuls à la génération suivante.
- **CV complet** (formation, langues, compétences, agent éventuel) : le site actuel ne le donne qu'en PDF. Rien n'en est repris.
- **Dates des « Voix de l'eau »** : seul « décembre » est connu. Jour et lieu à fournir.
- **Photos de scène ou de tournage** : aucune sur le site actuel.

## Retiré ou remplacé faute d'information

- La bande-démo, remplacée par les 3 vidéos YouTube de la Cie PILE et « sur demande » (accueil, Démo & voix).
- Les extraits audio, présentés « sur demande » (accueil, Démo & voix).
- Pas de biographie : seuls les faits du CV publié sont repris (Parcours).
- Les dates sans année du site actuel ont été datées de 2026, d'après la programmation du Carré Rondelet (Yerma, 9 au 11 octobre 2026). Les dates passées sont rangées comme passées, au jour réel.

## Crédits

- Photographies : Roka production, Laurent Bouillard, Ana Slk, Fabrice Robin, Lisa Fougereux (et un portrait sans crédit connu).
- Affiches : Cie PILE (et Cie Pulsatille pour Sacrées Championnes), d'après les vidéos YouTube de la compagnie.
- Une seule image est générée par intelligence artificielle : la chaise de la page 404, marquée « Illustration générée ». **Garder cette mention sur le site final.**
- Les images des vidéos de la Cie PILE viennent de leurs vignettes YouTube.

## À la mise en ligne définitive

- Retirer `noindex` : la balise robots dans `source/gabarits/commun.mjs`, et l'en-tête X-Robots-Tag dans `vercel.json`.
- Brancher le formulaire de contact. Il est simulé : rien n'est envoyé.
- Remplacer les mentions « à compléter » du pied de page par les vraies pages.
- Remplacer « sur demande » par la vraie bande-démo et les vrais extraits.
- Garder la mention « Illustration générée ».
