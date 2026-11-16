VERDICT : REFAIRE

# Regard neuf n° 2 sur tout le site : Sarah Chaperon, « La planche-contact » (v2)

Regard fait le 16 novembre 2026. Il suit `_suivi/regard-neuf.md` (3,11 / 5) et applique la grille de `_audit/regard-da.md` au site entier.

**Sources.** J'ai regardé les captures du 16 novembre 13:46 dans `_suivi/captures/` : Parcours, Démo & voix et Contact (premier écran et page entière, ordinateur et téléphone), et aussi l'accueil et Portraits. Les pages entières ont été découpées en tranches lisibles, hors du projet. Je n'ai lancé aucun navigateur, car un audit tournait. J'ai lu le `CHANGELOG.md` v2 et vérifié quelques textes dans le HTML, sans rien modifier.

**Limites.**
- Les sections épinglées apparaissent vides dans les captures pleine page : la plongée de l'accueil (environ 1 800 px de crème) et la frise des tournages de Parcours (environ 1 900 px de noir). Je ne les compte pas comme des vides, mais je n'ai pas pu les juger.
- Les gestes annoncés dans le journal sont **non vérifiables** sans navigateur : le clic qui retourne un tirage, le message qui file dans la pochette avec le grand tampon « Reçu », la bande de film qui avance.

---

## La liste du premier regard, point par point

### 1. Faire entendre la voix et voir la bande-démo : **à moitié fait**
- Objets du formulaire : **fait.** Le formulaire propose maintenant « La bande-démo » et « Des extraits de voix ». « Recevoir la bande-démo » mène à `sujet=demo` et « Recevoir les extraits » à `sujet=voix-extraits`.
- Vrais lecteurs : **pas fait.**
  - Aucun fichier audio n'a été récupéré : la balise `<audio>` de Démo est vide.
  - Les quatre lignes ont toujours une onde rouge et une durée (1:54, 1:55, 1:55, 0:39), elles ont donc l'air de lecteurs, mais elles restent inertes. Elles portent la mention « Extraits disponibles sur demande », sur l'accueil comme sur Démo.
  - Le site Wix actuel, lui, les fait écouter.
- Lien de la bande-démo : **pas fait.** La page dit « Demandez le lien à Sarah ».

### 2. Rendre aux pages d'onglet la planche-contact et ses vraies photos : **fait pour les images, à moitié fait pour les gestes**
- Une seule image générée : **fait.** Il ne reste que la chaise de la 404. Plus de plateau, de salle de projection, de micro, de coulisses, ni de badge « Illustration générée » sur les pages.
- Démo : écran de cinéma et micro retirés, **fait.** La bande de film inclinée, avec ses perforations et les trois affiches de la Cie PILE, est une bonne idée qui vient bien de la planche-contact. En revanche, le « vrai faisceau qui suit la main » est remplacé par une onde au crayon tracée **en travers du cou** du portrait d'Ana Slk (voir plus bas) : **à moitié fait.**
- Parcours : l'ouverture est bien une table lumineuse. On y voit le tirage Bouillard aux lunettes, trois affiches et une fiche « À venir · Décembre 2026 » entourée. Mais la « planche de ses rôles, titres en grand » n'y est pas : on ne lit sur la table aucun rôle (la servante, Katia, Yerma…). **À moitié fait.**
- Contact : **fait** pour l'objet. La pochette de tirages est posée sur la table, avec le portrait de Fabrice Robin qui en dépasse. Le tampon en grand à l'envoi est **non vérifiable**.

### 3. Désempiler l'ouverture de l'accueil : **pas fait**
- Ordinateur (`accueil-o-1`) : le tirage « Col roulé » couvre encore les vignettes 05, 09 et 10. Son cercle rouge déborde de la table sur la colonne crème (vers x = 490 à 513), et la loupe est coupée par le pli. Dans la page entière, la loupe et le tirage sont toujours empilés dans le quart bas gauche de la planche.
- Téléphone (`accueil-t-full`) : la planche ne prend que 320 px de haut. La loupe est coupée par le bord droit et le tirage la recouvre.
- « Depuis 1991 » : **non vérifiable**, car la plongée est blanche dans les captures.

### 4. Casser les répétitions : **pas fait**
La photo des coulisses a disparu, mais seulement parce que toutes les images générées ont été retirées. Le reste n'a pas bougé, ou s'est aggravé :
- **Les 12 portraits dans le même ordre, trois fois** : la planche (01 Roka, 02 Bouillard, 03 Ana Slk, 04 Col roulé…), la table « Ses visages », puis la grille de Portraits. L'ordre est identique.
- **Le rire paraît toujours cinq fois** : sous la loupe, dans la plongée, sur la table, dans la grille et dans le bloc « Besoin d'une photo en haute définition ? ». Dans ce bloc, il a pris la place des coulisses.
- **Nouvelles répétitions créées par la v2 :**
  - Les trois affiches de la Cie PILE paraissent trois fois : vidéos de l'accueil, table de Parcours, bande de film de Démo.
  - Le portrait « De face » de Fabrice Robin paraît cinq fois, dont deux en grand : le répertoire de Parcours et la pochette de Contact.
  - « La rêveuse » d'Ana Slk paraît cinq fois, dont le bandeau contact de l'accueil et « Où la voir ».
  - Les dates 2026 paraissent trois fois : l'actualité de l'accueil, la fiche de la table de Parcours et « Où la voir ».
- **La formule des titres reste** : « Sarah *Chaperon* », « Sur les *planches* », « Douze *visages* », « La voir, *l'entendre* », « Écrire *à Sarah* ». Elle revient cinq fois sur cinq pages.

### 5. Parcours et Portraits : **à moitié fait**
- Frise : le rôle est devenu le titre (« Katia », « La servante », « Maman »), **fait.** Mais les cartes ne sont pas serrées : il reste environ 150 px de noir sous le réalisateur, et chaque carte a toujours son filet rouge en haut.
- Répertoire : c'est maintenant un index typographique sur deux colonnes, à filets fins, **fait.** C'est la plus belle section de Parcours.
- Bandes crème : elles sont réduites, **fait** en grande partie.
- Filtre sans vide : les filtres ont changé, **non vérifiable**.
- « Tous les tirages » : **pas fait.**
  - Sur ordinateur, le titre est toujours calé à droite, alors que son surtitre « LA PLANCHE » est à gauche.
  - Sur téléphone, l'ellipse est coupée au bord droit, et la capture fait 396 px de large au lieu de 390 : la page déborde à l'horizontale.
- Double cadre du portrait d'ouverture de Portraits : toujours là.

### 6. Les textes et les petites finitions : **à moitié fait**
- « Portrait » est devenu « Photographe non crédité », sur la bague de la loupe, la table et la grille : **fait.**
- « d'après son CV » est devenu « tel que publié sur son site » : **fait.** Mais le bloc CV dit encore « Formation, langues et compétences figurent dans son CV », alors que le CV n'a pas été lu.
- « Jeune public » : il est sourcé par l'affiche de Sacrées Championnes (« pour un public familial à partir de 8 ans »). Je le considère comme acceptable, à faire confirmer par Sarah.
- Clic qui retourne un tirage, geste de l'envoi : **non vérifiables.** L'accueil dit toujours « Tracez un cercle au crayon autour d'un portrait ».
- Pied de page du téléphone sur deux colonnes : **pas fait.** C'est toujours un lien par ligne, soit à peu près un écran sur chaque page. Il y a en plus une bande crème d'environ 60 px sous le pied de page, sur Démo et Contact.
- « · VOIX » seul sur sa ligne (téléphone) : **pas fait.**
- Bande claire d'environ 15 px au bord droit : **pas fait.** Elle est visible même sur les captures d'un seul écran : sur la section noire de Parcours, le noir s'arrête à 1 425 px et du crème (241, 238, 231) remplit le reste. C'est à corriger, ou à prouver comme réserve de la barre de défilement dans un vrai navigateur.

---

## Ce que la v2 a introduit (nouveaux défauts)

1. **Démo : la vague rouge au crayon traverse le cou de Sarah.** Elle est placée à 62 % de la hauteur du portrait d'Ana Slk, d'un bord à l'autre de l'image, et c'est encore plus net sur téléphone. On ne lit pas « une voix », on lit « une gorge barrée ». C'est le défaut le plus grave du site : il est à retirer avant toute présentation.
2. **Démo, premier écran :**
   - Les affiches sont des portraits posés dans des cadres 16:9 : chaque image de la bande est à moitié noire.
   - À côté de « Écouter sa voix », la ligne « Bande-démo 2024 · 4 extraits de voix » est presque invisible, avec un contraste quasi nul (`demo-et-voix-o-1`).
   - Sur téléphone, il y a environ 200 px de dégradé vide entre la bande et le surtitre.
3. **Démo, bas de page :** il reste environ 250 px de noir sous les voix, qui ne portent que « Un rôle, une lecture, une voix off ? ».
4. **Parcours, ouverture :**
   - Cinq objets inclinés sont semés sans point focal, et le tiers bas central de la table est vide. Le tirage Bouillard et la fiche « À venir » se chevauchent : c'est à la limite du collage façon polaroïd.
   - Sur téléphone, la table passe sous le texte, et la fiche « À venir » et l'affiche Veni Vidi Bibi sont coupées par la fin de la section.
5. **Contact :**
   - La pochette est un rectangle en dégradé kraft avec une encoche, dont la moitié basse est vide. À côté de la loupe chromée de l'accueil, elle a l'air dessinée en code.
   - Le formulaire reste une carte blanche classique, sans rapport avec la pochette.
   - Sur téléphone, « Ou directement » et le portrait Bouillard passent **avant** le formulaire : le « ou » arrive avant ce à quoi il s'oppose.

## Ce qui est réussi, à garder

- **Plus aucune image générée sur les pages**, et chaque photo porte son crédit. Le site ne raconte plus un théâtre de velours rouge inventé : c'est le vrai progrès de la v2.
- **Le répertoire de Parcours en index typographique**, sur deux colonnes à filets, et la frise avec le rôle en titre.
- **La bande de film de Démo** : c'est une vraie idée de la planche-contact. Elle serait excellente avec de vraies images de jeu (voir la correction 4).

---

## Les neuf critères, sur l'ensemble du site

Pour chaque point de la liste précédente à moitié fait ou pas fait, la grille retire un point au critère concerné. Je donne la note de base et la note finale.

| # | Critère | Base | Finale | Pourquoi |
|---|---|---|---|---|
| 1 | Fidélité au vrai lieu et au métier | 4 | **3** | Images toutes réelles, données justes, crédits partout. Mais la voix ne s'écoute toujours pas alors que le Wix la fait écouter, et la bande-démo reste « sur demande » (point 1 à moitié fait). |
| 2 | Effet signature | 4 | **3** | L'accueil garde sa loupe, son tirage et sa plongée. La matière passe enfin sur les pages (table, bande de film, pochette), mais Démo n'a pas de geste et Parcours n'a pas ses rôles (point 2 à moitié fait). |
| 3 | Images | 4 | **3** | Belles photos et vraies affiches. Mais les mêmes 12 portraits reviennent dans le même ordre trois fois, le rire cinq fois, les affiches trois fois (point 4 pas fait), et la vague rouge barre le cou du portrait de Démo. |
| 4 | Composition et finition | 3 | **2** | L'ouverture de l'accueil est toujours empilée et coupée (point 3 pas fait), « Tous les tirages » est désaligné et déborde sur téléphone, le double cadre est toujours là, la table de Parcours est semée sans foyer et la pochette est plate. |
| 5 | Rythme, sans vides | 4 | **3** | L'accueil tient en 8 écrans et les bandes crème sont réduites. Restent le noir sous les voix de Démo, le vide sous la bande de film sur téléphone, les cartes de la frise à moitié vides et le pied de page d'un écran sur téléphone (point 5 à moitié fait). |
| 6 | Typographie et lisibilité | 4 | **3** | Instrument Serif et Fragment Mono tiennent, et le numéro est très grand. Mais « · VOIX » est seul sur sa ligne, la ligne d'info de Démo est quasi invisible, et la formule « mot + *mot italique rouge* » revient cinq fois (point 6 à moitié fait). |
| 7 | Niveau par rapport au palmarès | 3 | **3** | Démo et Contact remontent : bande de film, pochette. Portraits reste une grille, l'agenda une liste barrée et la voix un faux lecteur, tous trois sous le palmarès. |
| 8 | Envie d'agir | 4 | **4** | Le contact est partout et les objets sont maintenant justes. Mais « Écouter sa voix » mène encore à une demande par e-mail. |
| 9 | Jeu | 3 | **3** | Sur l'accueil, on joue avec la loupe et le tirage. Sur les pages, il n'y a que des filtres, une frise et une bande qui défilent, et des voix qui ne jouent pas. |

Total des notes finales : 3 + 3 + 3 + 2 + 3 + 3 + 3 + 4 + 3 = 27, soit **3,00 / 5**. Sans les pénalités de suivi, les notes de base donneraient 3,67 / 5. L'écart correspond à ce que la v2 a laissé de côté dans la liste.

Le verdict est **REFAIRE** : un critère vaut 2 et la moyenne est sous 3,5. C'est le deuxième regard sur tout le site sous 3,5. Le problème n'est plus le choix de direction des pages, que la v2 a réglé. Il tient à deux choses :
- **la voix**, le seul objet que le visiteur veut faire jouer, reste fausse ;
- **l'ouverture de l'accueil** n'a jamais été reprise.

Je propose une autre idée pour la voix : en faire la seconde signature du site, plutôt qu'une liste. Le tirage d'Ana Slk est posé sur la table, et l'onde au crayon se trace **sur la table, sous le tirage**, à mesure que « En mai » joue vraiment. Chaque extrait est un trait qu'on pose et qu'on relance.

---

## Ce qui doit changer, par priorité

1. **Retirer la vague rouge du cou de Sarah (Démo).** Le trait au crayon qui traverse le portrait d'Ana Slk à hauteur de gorge doit être tracé sur la table, sous le bord du tirage, ou devenir la barre de lecture de chaque extrait. Il ne doit jamais toucher le visage ni le cou.
2. **Faire jouer les quatre voix, pour de bon.** C'est la deuxième demande.
   - Récupérer sur le Wix les fichiers « En mai », Bien-être 1, Bien-être 2 et Shanghai.
   - Faire de chaque ligne un vrai lecteur : un clic joue, et l'onde avance avec le son.
   - « Écouter sa voix » doit lancer « En mai » sur place.
   - Retirer « Extraits disponibles sur demande ».
   - Tant que les fichiers manquent, retirer l'onde et la durée, pour que rien n'ait l'air de pouvoir se lire.
3. **Désempiler l'ouverture de l'accueil.** C'est aussi la deuxième demande.
   - Poser le tirage « Col roulé » dans une zone libre de la table, sans couvrir les vignettes 05, 09 et 10.
   - Garder son cercle rouge entier dans la table, sans franchir la colonne crème.
   - Placer la loupe entière au-dessus du pli.
   - Sur téléphone, mettre la planche en pleine largeur, avec la loupe et le tirage dans le cadre.
   - Couper le surtitre en « Comédienne · Théâtre » et « Tournages · Voix ».
4. **Casser les répétitions.**
   - Sur la table « Ses visages », regrouper les tirages par registre (le rire, le jeu, le calme), dans un autre ordre que la planche.
   - Le rire ne doit paraître que deux fois. Dans le bloc HD de Portraits, le remplacer par « Trois quarts » ou « En pied ».
   - Chaque page d'onglet garde ses portraits en grand, qui ne reviennent pas en grand ailleurs. Par exemple, Fabrice Robin « De face » reste sur Contact et quitte le répertoire de Parcours.
   - Sur la bande de film de Démo, remplacer les trois affiches, déjà vues deux fois, par des images de jeu tirées des captations YouTube de la Cie PILE, en plein cadre 16:9 et sans bandes noires.
   - Casser la formule « mot + *mot italique rouge* » sur au moins trois titres sur cinq.
5. **Finitions visibles.**
   - Portraits : aligner « Tous les tirages » à gauche sous « LA PLANCHE », supprimer le débordement à 396 px sur téléphone et retirer le double cadre.
   - Parcours : sur la table, inscrire les rôles en grand (la servante, Yerma, Katia) à la place de la fiche de dates, qui est déjà deux fois dans le site. Resserrer les cartes de la frise.
   - Démo : rendre lisible « Bande-démo 2024 · 4 extraits de voix ».
   - Téléphone : passer le pied de page sur deux colonnes, supprimer la bande claire de 15 px au bord droit et faire passer le formulaire de Contact avant « Ou directement ».
