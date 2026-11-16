# Test « vrai visiteur » : Sarah Chaperon, comédienne

Persona : directrice de casting qui distribue une pièce et un court métrage et cherche une comédienne de 45 à 55 ans, capable de drame comme de comédie. Elle n'a jamais vu le site.
Outil : `node _audit/visiteur.mjs`, chaque parcours rejoué depuis l'accueil, téléphone 390x844 (tactile) puis ordinateur 1440x900. Les secondes sont celles du journal et comptent le chargement de l'accueil, environ 3,3 s.
Barème : mission 1 sans aucun geste, les autres en 3 gestes et 30 s au plus.

## Synthèse

| Mission | Téléphone 390x844 | Ordinateur 1440x900 |
|---|---|---|
| 1. Quoi, pour qui, où (0 geste) | **en partie** : quoi oui, pour qui implicite, **où absent** | **en partie** : pareil |
| 2. Bande-démo et CV | bande-démo **réussie** (3 gestes, 8,9 s), **CV hors barème** (8 gestes, 13,6 s) | bande-démo **réussie** (2 gestes, 7 s), **CV hors barème** (8 gestes, 11 s) |
| 3. Formulaire jusqu'à la confirmation | **réussie mais hors barème** : 8 gestes, 11,8 s (formulaire atteint en 2 gestes) | **réussie mais hors barème** : 9 gestes, 12,9 s (formulaire atteint en 2 gestes) |
| 4. La joindre (téléphone, e-mail) | **réussie** : 1 geste, 6 s | **réussie** : 1 geste, 6,8 s |
| 5. Ce qui la distingue (30 s) | **réussie** : 3 gestes, 7,1 s | **réussie** : 3 gestes, 5,7 s |
| 6. Portraits en grand, avec le photographe | **réussie de justesse** : planche légendée en 3 gestes (10 s), grand format en 4 gestes (11,7 s), donc hors barème | **réussie** : grand tirage légendé en 1 geste (6,4 s), visionneuse en 3 gestes (10,4 s) |
| 7. Prochaine date sur scène | **en partie** : 0 geste pour « décembre 2026 », 2 gestes (8,8 s) pour le détail, mais ni jour ni lieu | **en partie** : pareil, 2 gestes (9,1 s) |

## Détail par mission

### 1. En arrivant, sans geste : de quoi s'agit-il, pour qui, où ?
- **Téléphone** (`arrivee-390x844/etape-0.png`) : on voit tout de suite « Comédienne · Théâtre · Tournages · Voix », le nom en grand, « Prochainement : Les voix de l'eau, décembre 2026 », une planche contact de portraits, les boutons « Écrire à Sarah », « Son parcours » et la barre fixe « Appeler / La contacter ». **Quoi** : clair. **Pour qui** : rien ne le dit, mais une professionnelle le devine (on contacte une comédienne pour un rôle). **Où** : rien, ni ville ni région. Une directrice de casting ne sait pas si elle vit à Paris, à Montpellier ou ailleurs.
- **Ordinateur** (`arrivee-1440x900/etape-0.png`) : même contenu, avec le menu (Parcours, Portraits, Démo & voix, Contact) et « La contacter ». Aucun lieu non plus. À 3,3 s, le tirage polaroid du bas de la planche est encore un **carré gris vide** entouré de rouge, et ne se « développe » qu'ensuite (`arrivee-attente-1440x900/etape-2.png`, 6,5 s). Le premier coup d'œil tombe donc sur un cadre vide.
- Gênes : aucun lieu de résidence ni zone de travail sur tout le site. Les seules villes sont celles des dates passées (Montpellier, Dijon, Paris, Sancerre). La phrase d'accroche (« Cinq photographes, un même visage. Promenez la loupe… ») parle de la planche et pas d'elle : elle n'aide pas à situer la comédienne. Sur téléphone, la barre fixe « Appeler / La contacter » est coupée en bas d'écran sur l'accueil.

### 2. Prix : aucun, c'est normal. Comment obtenir sa bande-démo et son CV
- **Bande-démo, téléphone** : `menu` → `Démo & voix` → `defiler 1` = 3 gestes, 8,9 s (`demo-cv-390x844/etape-3.png`). On trouve « La bande-démo » et le bouton « Recevoir la bande-démo ». Autre chemin depuis l'accueil : `defiler 2` → « Demander la bande-démo » (3 gestes, 9,2 s, `demo-cv-accueil-390x844/etape-4.png`).
- **Bande-démo, ordinateur** : `Démo & voix` → `defiler 1` = 2 gestes, 7 s (`demo-cv-1440x900/etape-2.png`).
- **CV** : aucun lien « CV » dans le menu. On le trouve tout en bas de la page Parcours (« Son CV complet » → « Demander le CV ») : 8 gestes sur téléphone (13,6 s, `cv-390x844`) et 8 sur ordinateur (11 s, `cv-1440x900`). **Hors barème.** On peut aussi le demander par l'objet « Recevoir le CV ou des photos » du formulaire, mais il faut deviner que ce choix existe.
- Gênes : la bande-démo n'est pas regardable sur le site, elle s'obtient seulement sur demande (« Demandez le lien à Sarah »). Pour un casting, c'est un aller-retour de plus. Le CV n'est pas téléchargeable non plus, et la page dit que « formation, langues et compétences figurent dans son CV : demandez-le à Sarah ». Les infos qu'un casting cherche d'abord (âge de jeu, langues, taille, agent) ne sont donc pas sur le site. « Demander la bande-démo » et « Recevoir la bande-démo » envoient sur le haut de la page Contact (`?sujet=cv`), et rien à l'écran n'y rappelle la bande-démo. Sur téléphone, le portrait projeté de l'en-tête « La voir, l'entendre » flotte au-dessus de l'écran de cinéma au lieu d'être posé dessus (`demo-cv-390x844/etape-2.png`). Sur ordinateur, il est bien sur l'écran.

### 3. Lui écrire par le formulaire, jusqu'à la confirmation
- **Téléphone** : `La contacter` → `Votre message` → Nom, E-mail, Téléphone, Objet « Un rôle (théâtre ou tournage) », Message → `Envoyer le message`. 8 gestes, 11,8 s. Confirmation visible : « Maquette : le message n'est pas envoyé. Sur le site en ligne, il arrivera dans la boîte de Sarah. » avec un tampon « REÇU » (`formulaire-390x844/etape-10.png`).
- **Ordinateur** : `Contact` → `Votre message` → les 5 champs → `defiler 1` → `Envoyer le message`. 9 gestes, 12,9 s. Même confirmation (`formulaire-1440x900/etape-12.png`).
- Le formulaire est atteint en 2 gestes, ce qui est dans le barème. Le total passe 3 gestes parce qu'il y a 5 champs à remplir : c'est normal, et le formulaire reste court et bien étiqueté.
- Gênes : sur téléphone, le bouton « Votre message » fait descendre trop haut. On arrive sur une photo et « Ou directement », avec le titre « Votre message » et le champ Nom tout en bas de l'écran (`formulaire-390x844/etape-2.png`, y=744). Le bouton « Écrire à Sarah » de l'accueil mène en haut de la page Contact et pas au formulaire, ce qui ajoute un geste. Sur ordinateur, le bouton Envoyer est sous la ligne de flottaison quand on remplit : il faut défiler (`formulaire-1440x900/etape-3.png`). La mention « Politique de confidentialité : à compléter » est visible juste au-dessus du bouton Envoyer.

### 4. La joindre (téléphone, e-mail)
- **Téléphone** : `La contacter` = 1 geste, 6 s. Le 06 11 62 65 41 s'affiche en très grand et l'e-mail sarahchaperon93@gmail.com juste dessous (`joindre-390x844/etape-1.png`). Le numéro est aussi dans le menu (« Appeler 06 11 62 65 41 ») et derrière le bouton fixe « Appeler ».
- **Ordinateur** : `Contact` = 1 geste, 6,8 s (`joindre-1440x900/etape-1.png`). On retrouve aussi les deux en bas de l'accueil et dans le pied de page.
- Gêne : aucune. Le meilleur moment du parcours.

### 5. Après 30 s, ce qui la distingue
- **Téléphone** : 3 défilements, 7,1 s (`distinction-390x844/etape-2.png`, `etape-4.png`, `etape-6.png`). **Ordinateur** : 3 défilements, 5,7 s (`explore-accueil-1440x900/etape-4.png`).
- Ce que je retiens comme directrice de casting : elle joue **depuis 1991** (donc une trentaine d'années de métier, ce qui colle à la tranche 45-55 ans), avec la devise **« Le drame, le rire, la voix »**. Elle couvre le répertoire dramatique (Yerma de Lorca), la comédie et le jeune public (Cie PILE : Veni Vidi Bibi, Sacrées Championnes, Les Lombricontes), le court métrage et le **travail de voix** (lecture de Victor Hugo, extraits audio). Elle a fait **plus de 160 soirs pour cinq spectacles**. Les portraits montrent bien les deux registres : grave sur fond noir, rieuse « les mains sur les joues ».
- Gênes : sur téléphone, juste après le premier défilement, le bloc « Depuis 1991 / Le drame, le rire, la voix » est encore en fondu, presque illisible sur la photo (`distinction-390x844/etape-2.png`). Il ne devient lisible qu'au défilement suivant. La grande photo du rire est un peu molle sur téléphone. Rien ne dit son âge de jeu ni ses langues.

### 6. Portraits en grand avec le nom du photographe
- **Ordinateur** : `Portraits` = 1 geste, 6,4 s. Un grand tirage légendé « Photo Roka production » occupe la moitié droite, avec la liste des cinq photographes (`portraits-hero-1440x900/etape-1.png`). En visionneuse plein écran : `Portraits` → `defiler 1` → « La rêveuse : ouvrir en grand » = 3 gestes, 10,4 s, légende « La rêveuse · Photo Ana Slk » et flèches de navigation (`portraits-1440x900/etape-5.png`). Sur l'accueil, la planche « Entourez votre tirage » met aussi le photographe sous chaque photo et propose un tri par photographe (`explore-accueil-1440x900/etape-10.png`).
- **Téléphone** : `menu` → `Portraits` donne un grand tirage, mais sa légende est sous la ligne de flottaison (`portraits-390x844/etape-2.png`). `Voir la planche` donne une grille à deux colonnes légendée par photographe en 3 gestes, 10 s (`portraits-390x844/etape-5.png`). Le vrai grand format, la visionneuse « Le sourire posé · Photo Roka production », demande 4 gestes, 11,7 s (`portraits-ouvrir-390x844/etape-6.png`). **Hors barème d'un geste** pour le « en grand ».
- Gênes : sur téléphone, toucher le polaroid de l'accueil (« Col roulé · Photo Laurent Bouillard ») ne l'ouvre pas : le geste est perdu (`portraits-court-390x844/etape-3.png`). La loupe de l'accueil affiche bien photographe et titre sur sa bague, mais l'image y est floue. Sur téléphone, le mot « visages » du titre est d'un gris peu contrasté à l'arrivée.

### 7. Prochaine date sur scène
- **Sans geste**, sur les deux formats : « Prochainement : Les voix de l'eau, décembre 2026 » sous le nom.
- **Détail** : `Son parcours` / `Parcours` → `Voir l'actualité` = 2 gestes (téléphone 8,8 s, `date-390x844/etape-4.png`, ordinateur 9,1 s, `date-1440x900/etape-4.png`). On y lit « À venir : Décembre 2026, Les voix de l'eau, Thomas Delaporte et Christy Simon, mise en scène Christy Simon, lieu et dates à venir ». Sur l'accueil, le même bloc « Sur scène en 2026 » est au 7e défilement sur ordinateur (`explore-accueil-1440x900/etape-14.png`).
- **Résultat : en partie.** On trouve le spectacle et le mois, mais **ni jour, ni lieu, ni lien de réservation**. Je ne peux pas aller la voir jouer.
- Gênes : à côté de « Où la voir », on voit en grand l'affiche de **Veni Vidi Bibi**, un spectacle dont les dates sont toutes passées. On croit d'abord que c'est la prochaine date. Les dates passées, barrées, prennent plus de place que la date à venir.

## Gênes principales, par ordre d'importance
1. **Aucun lieu** sur tout le site (ville de résidence, région, mobilité) : la mission 1 n'est remplie qu'en partie.
2. **CV introuvable vite** : il est seulement en bas de Parcours (8 gestes), sur demande, sans lien dans le menu. La bande-démo est elle aussi seulement sur demande, rien n'est visionnable ni téléchargeable.
3. **Prochaine date floue** : « décembre 2026, lieu et dates à venir », et l'affiche voisine d'un spectacle passé prête à confusion.
4. **Formulaire sur téléphone** : l'ancre « Votre message » arrive trop haut, et « Écrire à Sarah » mène en haut de Contact plutôt qu'au formulaire. « Politique de confidentialité : à compléter » est visible.
5. **Portraits en grand sur téléphone** : 4 gestes. Le polaroid de l'accueil ne réagit pas au toucher.
6. Détails visuels : polaroid vide à l'arrivée sur ordinateur, texte « Depuis 1991 » en fondu illisible sur téléphone, portrait projeté hors de l'écran de cinéma sur téléphone (Démo & voix), barre « Appeler / La contacter » coupée en bas de l'accueil sur téléphone.
