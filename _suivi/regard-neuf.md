# Regard neuf sur tout le site : Sarah Chaperon, « La planche-contact »

Regard fait le 13 novembre 2026 par un directeur artistique qui n'a pas vu la construction. Il porte sur le site entier : accueil, Parcours, Portraits, Démo & voix, Contact, sur ordinateur et sur téléphone. La grille est celle de `_audit/regard-da.md`.

**Sources.** J'ai lu le relevé, l'intention, les quatre regards sur l'accueil, les mosaïques et les films de `_audit/apercu/` et les planches du palmarès (ouverture, portfolio, contact, agenda, outil-interactif). J'ai aussi regardé les captures `_suivi/captures/*-full.jpg`.

**Attention aux captures.** Elles sont plus anciennes que le site : 15:27 pour l'accueil, 16:18 pour les pages, alors que les fichiers du site datent de 16:39. Par exemple, `accueil-o-full.jpg` montre encore un lecteur « La voir jouer » et une table de 11 tirages avec une case vide. J'ai donc refait des captures fraîches, écran par écran, des cinq pages en 1440 × 900 et en 390 × 844, dans `/tmp/da/fresh/`, hors du projet. J'ai aussi essayé les gestes : glisser la loupe, cliquer une voix, passer d'une page à l'autre, ouvrir la visionneuse, filtrer, envoyer le formulaire. Ces essais sont dans `/tmp/da/int/`. Aucun fichier du site n'a été modifié.

---

## Les cinq questions

### 1. Qu'est-ce que le visiteur peut toucher ?

- **Accueil :**
  - La loupe chromée : on la fait glisser ou on la lance, et sa bague porte le nom du photographe et le titre du portrait survolé. C'est vérifié : après un glisser, la loupe montre « Ana Slk · Plein air ».
  - Le tirage « Col roulé » : il se retourne et on peut le lancer.
  - Les vignettes de la planche : celle qu'on entoure déclenche la plongée.
  - La table « Ses visages » : on trace un cercle au crayon autour d'un tirage pour le retourner, on fait glisser les tirages, on les range par photographe. **Sur ordinateur, un simple clic ne fait rien** : il faut tracer un cercle, ce que personne ne devinera.
  - Les trois vidéos YouTube de la Cie PILE.
- **Parcours :** une poursuite qui suit la souris (à peine visible), des filtres par registre et une frise des tournages qui défile de côté.
- **Portraits :** des filtres par photographe et par lumière, et une visionneuse avec flèches, clavier et un lien propre à chaque portrait (`#portrait-3`).
- **Démo & voix :** des liens YouTube et deux boutons « Recevoir… ».
- **Contact :** un formulaire simulé et le numéro, qui appelle sur téléphone.
- **Ce qui a l'air touchable et ne l'est pas : les quatre voix.** Sur l'accueil comme sur Démo & voix, chaque ligne porte une forme d'onde rouge et une durée (1:54, 1:55…). C'est un `<li>` inerte : au clic, rien ne se passe. Le site ne contient aucun fichier audio.

### 2. Qu'est-ce qui relie les pages entre elles (intro, voile, fil) ?

- **Intro.** Sur fond noir, son nom apparaît, puis un cercle au crayon rouge et le mot « COMÉDIENNE ». La même intro revient à chaque arrivée directe sur une page.
- **Voile.** Un diaphragme noir se ferme depuis le lien cliqué, avec le monogramme « SC » et le nom de la page (« Portraits »). Le portrait d'arrivée apparaît ensuite en gris, puis la page s'ouvre en cercle (vérifié image par image, `t-voile-0` à `t-voile-5`). Ça fonctionne et c'est cohérent.
- **Fil.** Un cercle au crayon rouge entoure la chose à regarder dans chaque section : le portrait choisi, « 70 », « Décembre 2026 », le numéro, « Tous les tirages », le bouton « Recevoir la bande-démo ». Le curseur est un petit cercle rouge.
- **Ce qui ne relie pas.** La table lumineuse, la planche et le tirage ne quittent jamais l'accueil. Les pages d'onglet ne partagent avec l'accueil que le crayon et le diaphragme, pas la matière. Elles partagent en revanche entre elles les images générées de théâtre (point 5).

### 3. Que se passe-t-il quand il fait l'action principale ?

L'action principale est de la contacter.

- **Le chemin.** « La contacter », dans l'en-tête et dans la barre fixe du téléphone, et « Écrire à Sarah » mènent tous deux à la page Contact, à travers le diaphragme. On y trouve le numéro, en très grand et entouré, l'e-mail et un formulaire.
- **À l'envoi.** Le bouton devient gris. Un encart rose dit « Maquette : le message n'est pas envoyé… », avec un petit tampon « REÇU » penché d'environ 60 px. La « feuille qui file dans la pochette » promise par l'intention n'est pas perceptible dans les images prises toutes les 350 ms. **La récompense est petite**, très en dessous du « Bon de commande » du palmarès.
- **Les chemins secondaires sont faux ou sans issue :**
  - « Demander la bande-démo » (accueil), « Recevoir la bande-démo » (démo) et « Demander les fichiers » (portraits) mènent tous à `/contact?sujet=cv`. Le formulaire présélectionne alors « **Recevoir le CV ou des photos** » : un directeur de casting qui demande la bande-démo se retrouve avec l'objet « CV ».
  - « Écouter sa voix » mène à « Extraits disponibles sur demande ». **Le site actuel, lui, laisse écouter les quatre extraits.**

### 4. Qu'est-ce qui est spectaculaire au premier défilement de l'accueil, et chaque page d'onglet a-t-elle une famille d'effet moderne ?

**L'accueil a son moment fort.** En moins de 5 s :
- la loupe se pose sur la planche ;
- le crayon entoure le tirage ;
- le tirage se retourne (« Au dos du tirage · Col roulé ») ;
- puis on plonge dans le grand rire en plein écran (mosaïque, ligne 1, images 3 et 4 ; ligne 2, images 1 et 2).

Après la plongée, la suite est sage : des affiches avec un bouton lecture, des chiffres qui comptent, une table de tirages, un halo rouge autour d'un portrait et une liste de dates.

**Les pages d'onglet :**

| Page | Famille moderne | Ce qu'on voit vraiment |
|---|---|---|
| Parcours | lumière au pointeur (poursuite), défilement horizontal (frise) | Oui, mais la poursuite se voit à peine sur la photo générée, et la frise est une rangée de cartes sombres. |
| Portraits | révélation (le tirage gris qui se colore dans le bac), recomposition (filtres) | Oui. C'est la seule page qui garde la direction. |
| Démo & voix | « faisceau de projection » | **Non.** Le faisceau est peint dans l'image générée et rien ne réagit à la souris. Les voix ne jouent pas. |
| Contact | trait qui se dessine (ellipse), tampon | **Presque rien.** Un cercle au crayon et un petit tampon, et aucune famille moderne réelle. |

### 5. Chaque page a-t-elle sa signature après l'ouverture, ou les pages se ressemblent-elles ?

**Elles se ressemblent, et elles ressemblent à un autre site que l'accueil.**
- Trois pages d'onglet sur quatre s'ouvrent sur une image générée de théâtre aux tons de velours rouge : le plateau vide et sa poursuite (Parcours), la salle de projection (Démo), les coulisses (Contact). La même photo des coulisses revient trois fois dans le site : sur l'accueil, sur Portraits et sur Contact.
- Elles suivent le même gabarit : un surtitre en mono, un titre serif dont un mot est en italique rouge, un bouton pilule et un badge « Illustration générée ». La formule des titres revient cinq fois : « Sarah *Chaperon* », « Sur les *planches* », « Douze *visages* », « La voir, *l'entendre* », « Écrire *à Sarah* ».
- Portraits est la seule page dont l'ouverture appartient à la planche-contact, avec un tirage qui se développe.
- La table lumineuse, la loupe, les perforations de film et le crayon gras de l'accueil ne sont repris nulle part ailleurs. Le visiteur qui quitte l'accueil change d'univers : il passe de la planche-contact à un « théâtre en velours rouge » générique.

### Ressemblance avec les trois dernières de la bibliothèque

Elle ne leur ressemble pas visuellement : ni la lumière de la journée de Jardins de l'Hacienda 2, ni la porte et le fil de laiton de Locomponairo, ni le Q de QD2A. Elle partage pourtant avec elles deux familles d'effet, le trait qui se dessine (le fil au crayon) et le masque (la plongée et le diaphragme), ainsi que la scène épinglée.

---

## Ce qu'un client exigeant relèverait

### Écarts avec le relevé et textes

1. **Les voix ne s'écoutent pas.** Le site Wix a 4 extraits lisibles, que le relevé décrit avec leurs durées. La maquette les affiche comme des lecteurs, avec forme d'onde et durée, mais rien ne joue, et la page Démo dit « disponibles sur demande ». Pour un studio de voix, c'est un recul par rapport au site actuel.
2. **La bande-démo.** Le titre de Démo dit « Sa bande-démo de 2024 et quatre extraits de voix », mais la page ne montre ni l'une ni les autres. Le lien vers la vidéo n'a pas été retrouvé (relevé) : il faut le demander à Sarah, pas en faire une règle (« envoyée sur demande »).
3. **Les trois boutons « bande-démo » et « fichiers HD » présélectionnent l'objet « Recevoir le CV ou des photos ».** Il faut un objet « La bande-démo » et un objet « Des extraits de voix ».
4. **« Les spectacles jeune public de la Cie PILE »** (texte de la plongée). Rien dans le relevé ne dit que la Cie PILE fait du jeune public, et Veni Vidi Bibi est « une conférence théâtravinée à consommer avec modération ». Le filtre « Jeune public » de Parcours range des spectacles sans source. C'est à vérifier auprès d'elle, ou à reformuler.
5. **« Le parcours de Sarah Chaperon, d'après son CV »** et **« Formation, langues et compétences figurent dans son CV »**. Le CV en PDF n'a pas été récupéré (relevé, « Ce qui manque ») : le parcours vient de la page Actualité. Ce qu'il y a dans le CV est une supposition.
6. **Le crédit « Portrait » sous le grand rire** (table, page Portraits) et **« PORTRAIT · LE RIRE, EN GRAND »** gravé sur la bague de la loupe. On lit « Portrait » comme le nom d'un photographe. Le relevé dit « crédit inconnu » : il faut écrire « Crédit à confirmer », ou ne rien écrire.
7. « Sacrées Championnes, racontées par Sarah Chaperon et Caroline Mattei, Cies PILE et Pulsatille » ne figure pas dans le relevé : c'est tiré de l'affiche. À faire confirmer.
8. Ce qui est juste et à garder :
   - les 169 représentations (70 + 35 + 29 + 24 + 11) et « dont Avignon » ;
   - les 12 tournages, avec réalisateur et rôle exacts ;
   - les dates de 2026 barrées et Les voix de l'eau en décembre ;
   - « Aura Cobenau », dont l'orthographe est incertaine, laissé de côté ;
   - « Ana Slk » écrit de la même façon partout ;
   - le numéro et l'e-mail.

### Cadrages et hiérarchie

9. **Le premier écran de l'accueil s'empile.** Le dos du tirage « Col roulé », son cercle rouge et la loupe sont entassés dans le quart bas gauche de la planche, et le dos du tirage couvre trois vignettes. Le cercle rouge déborde de la table sur la colonne crème et passe sous le pli, et la loupe est coupée par le bas de l'écran (`accueil-o-00`). Sur téléphone, la planche n'occupe que les 40 % du bas de l'écran, et le tirage cache la loupe : les deux sont coupés par le bord droit (`z-tel-1`). Le surtitre laisse « · VOIX » seul sur sa ligne.
10. **« Depuis 1991 » est de nouveau dans un encart sombre translucide** posé sur la photo. C'est ce que les corrections avaient retiré. Sur téléphone, l'encart couvre ses mains et son menton.
11. **La page Démo colle sa photo à plat sur l'écran de cinéma généré.** C'est un rectangle sans perspective, qui n'occupe qu'un tiers de l'écran. Sur téléphone, il flotte même *au-dessus* de l'écran, dans le noir (`demo-t-00`). C'est le défaut le plus visible du site, celui qui fait collage.
12. Portraits :
    - Le titre « Tous les tirages » est aligné à droite alors que son surtitre « LA PLANCHE » est à gauche : la hiérarchie est cassée. Sur téléphone, l'ellipse est coupée par le bord droit.
    - Le portrait d'ouverture a un double cadre (un passe-partout blanc dans une boîte grise).
13. Parcours :
    - Dans la frise des tournages, le rôle (« La servante », « Wanda », « La femme du maire ») est l'information la plus forte, mais il est écrit en petit italique gris en bas de cartes à moitié vides, avec environ 150 px de noir entre le titre et le rôle.
    - « Son CV complet » est surmonté d'une vignette de 128 px, centrée et perdue.
14. Contact : la moitié droite du premier écran est vide, et l'e-mail est collé à l'ellipse du numéro.

### Répétitions

15. **Les 12 mêmes portraits, dans le même ordre (Roka, Bouillard, Ana Slk, Bouillard…), reviennent trois fois** : sur la planche de l'ouverture, sur la table « Ses visages » quatre écrans plus bas, puis sur la grille de Portraits.
    - **Le grand rire paraît cinq fois** : sous la loupe, dans la plongée, sur la table, sur Portraits et sur l'écran de cinéma de Démo.
    - Le buste Roka paraît trois fois.
16. **La photo générée des coulisses revient trois fois** : derrière « Écrivez-lui, appelez-la » sur l'accueil, derrière « Besoin d'une photo en haute définition ? » sur Portraits et en bandeau sur Contact.
17. Le badge « Illustration générée » apparaît huit fois sur le site. C'est honnête, mais à ce nombre il signale surtout que le site est fait d'images fausses.

### Effets ratés ou trop sages

18. Les lignes de voix ont l'air de lecteurs, mais ce ne sont pas des lecteurs (point 1).
19. **Le micro de studio généré** (Démo) est le cliché même que le relevé avait écarté (« micros, banque d'images : 1 »).
20. Le filtre « Drame » de Parcours ne laisse qu'une carte (Yerma), seule dans un grand vide crème (`pa-filtre-drame`).
21. Le répertoire de Parcours est une grille de cartes à bord gauche rouge : c'est le « suite de cartes à bordure » que la grille sanctionne.
22. La poursuite de Parcours est presque invisible sur une photo déjà éclairée. Le faisceau de Démo ne réagit pas.
23. L'envoi du formulaire se termine sur un tampon de 60 px dans un coin (point 3).
24. Sur ordinateur, la table « Ses visages » ne répond pas au clic : il faut tracer un cercle. Un clic doit aussi retourner le tirage.

### Rythme et vides

25. Parcours : une bande crème d'environ 300 px sous les dates passées, et la même sous la ligne des compagnies.
26. Démo : un aplat noir d'environ 350 px entre les voix et le pied de page, qui ne porte qu'une ligne (« Un rôle, une lecture, une voix off ? »).
27. Sur téléphone, le pied de page empile les liens un par ligne et prend plus d'un écran sur chaque page.

### Finition

28. Dans les captures en 1440 px, une bande claire d'environ 15 px longe le bord droit des sections sombres, sur toutes les pages. C'est peut-être une réserve de barre de défilement (`scrollbar-gutter`) : à vérifier dans un vrai navigateur.

---

## Les neuf critères, sur l'ensemble du site

| # | Critère | Note | Pourquoi |
|---|---|---|---|
| 1 | Fidélité au vrai lieu et au métier | 3 | Les données sont exactes (représentations, tournages, dates, crédits) et les photos sont les siennes. Mais six images générées (plateau, salle de projection, coulisses, micro, texte annoté, caméra) racontent un théâtre de velours rouge que l'intention ne prévoyait pas. Les voix et la bande-démo reculent par rapport au site actuel. « Jeune public de la Cie PILE » et « d'après son CV » ne sont pas sourcés. |
| 2 | Effet signature | 3 | La table, la loupe, le tirage et la plongée de l'accueil sont réels, bougent seuls et occupent la moitié de l'écran : c'est un 4 sur l'accueil seul. Mais l'ouverture s'empile et elle est coupée par le pli et par le bord du téléphone, et la signature ne vit sur aucune autre page. |
| 3 | Images | 3 | Ses portraits sont beaux et nets. En revanche, la photo collée à plat sur l'écran de cinéma (et flottante sur téléphone) fait collage, le micro est un cliché, la photo des coulisses est répétée trois fois, et le portrait de « Écouter Sarah » est écrasé dans le noir. |
| 4 | Composition et finition | 3 | Un seul langage typographique, mais l'ouverture empile ses objets, « Depuis 1991 » est dans un encart, Parcours aligne des cartes à bordure, « Tous les tirages » est désaligné et coupé sur téléphone, et le portrait de Portraits a un double cadre. |
| 5 | Rythme, sans vides | 3 | L'accueil tient en 8 écrans, sans écran vide. Les pages ont des aplats : une bande crème sur Parcours, une bande noire sur Démo, la moitié droite vide sur Contact, et un filtre qui laisse une carte seule. Sur téléphone, le pied de page fait plus d'un écran. |
| 6 | Typographie et lisibilité | 4 | Instrument Serif condensé et Fragment Mono tiennent, les titres sont généreux et le numéro est très grand. Les rôles de la frise sont en petit italique gris, et « · VOIX » reste seul sur sa ligne sur téléphone. |
| 7 | Niveau par rapport au palmarès | 2 | L'ouverture est à peu près au niveau. Le reste est nettement en dessous : un portfolio en grille contre « Répertoire en piste », un contact avec formulaire et tampon contre « Bon de commande », un agenda en liste barrée contre « L'année en cercle », et un outil interactif (les voix) inerte contre le cadenas des missions. |
| 8 | Envie d'agir | 4 | Le contact est partout : en-tête, barre fixe « Appeler / La contacter » sur téléphone, numéro géant. Mais les demandes de bande-démo et de fichiers arrivent avec le mauvais objet, et l'écoute mène à une demande par e-mail. |
| 9 | Jeu | 3 | Deux vraies manipulations sur l'accueil (la loupe, le tirage), plus la table. Sur les pages, il n'y a que des filtres, une frise et une visionneuse, qui ne sont pas des jeux, et le seul objet qu'on voudrait faire jouer, la voix, ne joue pas. |

Total : 3 + 3 + 3 + 3 + 3 + 4 + 2 + 4 + 3 = 28, soit **3,11 / 5**.

Selon la grille, un critère à 2 et une moyenne sous 3,5 donnent **REFAIRE**. Ce sont les pages d'onglet qu'il faut refaire, pas l'accueil, qui reste à ajuster.

---

## Ce qui doit changer, par priorité

1. **Faire entendre la voix et voir la bande-démo.** Il faut récupérer sur le Wix les 4 fichiers audio (« En mai », Bien-être 1 et 2, Shanghai) et demander à Sarah le lien de la bande-démo 2024. Les lignes de voix doivent devenir de vrais lecteurs, sur l'accueil et sur Démo, avec une forme d'onde qui avance. En attendant, rien ne doit avoir l'air de pouvoir se lire. Il faut aussi corriger l'objet du formulaire : « La bande-démo » et « Des extraits de voix », au lieu de « CV ou photos ».
2. **Rendre aux pages d'onglet la planche-contact et ses vraies photos, à la place des trois théâtres générés.**
   - Démo : un portrait réel en plein cadre (photos-7, col roulé, qui est déjà le portrait de la voix) dans un vrai faisceau qui suit la main. Si l'on garde la salle, la photo doit être projetée en perspective sur tout l'écran, jamais posée à plat ou flottante. Il faut retirer le micro généré.
   - Parcours : une planche de ses rôles, faite des affiches de la Cie PILE et de titres en grand, sous la loupe ou le crayon.
   - Contact : la pochette de tirages où le message est glissé et tamponné en grand.
   - Il ne doit rester qu'une image générée au plus dans tout le site.
3. **Désempiler l'ouverture de l'accueil.**
   - Le tirage « Col roulé » doit être posé entier sur la table, sans couvrir de vignettes, et son cercle doit rester sur la table.
   - La loupe doit être entière au-dessus du pli. Sur téléphone, rien ne doit être coupé par le bord droit.
   - Il faut retirer l'encart sombre de « Depuis 1991 » : le texte se pose sur le fond gris de la photo.
4. **Casser les répétitions.**
   - La table « Ses visages » ne doit pas redonner les 12 portraits de l'ouverture dans le même ordre : les regrouper par registre (le rire, le jeu, le calme) ou les recadrer serré sur les visages.
   - Le rire ne doit pas paraître plus de deux fois sur le site, et la photo des coulisses une seule fois.
   - Les titres ne doivent pas tous suivre la formule « mot + *mot italique rouge* ».
5. **Parcours et Portraits.**
   - La frise doit faire du rôle le titre (« La servante », 1992, Christian Fechner) dans une carte serrée.
   - Le répertoire doit être une liste typographique sans cartes à bordure.
   - Un filtre ne doit pas laisser de vide : la grille se recompose.
   - Les bandes crème vides doivent être coupées.
   - « Tous les tirages » doit être aligné avec son surtitre et tenir sur téléphone.
6. **Les textes et les petites finitions.**
   - « Portrait » doit devenir « Crédit à confirmer ».
   - « Jeune public de la Cie PILE » est à vérifier, et « d'après son CV » doit devenir « d'après son site ».
   - Un clic doit aussi retourner un tirage sur ordinateur.
   - L'envoi du formulaire doit se finir sur un grand geste visible.
   - Le pied de page du téléphone doit passer sur deux colonnes, et le surtitre ne doit plus laisser « · VOIX » seul.
   - La bande claire de 15 px au bord droit est à vérifier.

## Ce qui est réussi, à garder

- La scène d'ouverture et la plongée : une loupe gravée du photographe, un crayon, un tirage qui se retourne, puis le rire en plein cadre, en moins de 5 s.
- Le diaphragme entre les pages, qui part du lien cliqué et porte le nom de la page. Il relie vraiment le site.
- La justesse des données : 169 soirs, 12 tournages exacts, dates de 2026 barrées, crédits photo partout, numéro en très grand et barre « Appeler » sur téléphone.
