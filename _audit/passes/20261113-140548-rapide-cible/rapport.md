# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 13/11/2026 15:10:56 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **37 échec(s)**
- Passe : `20261113-140548-rapide-cible` · version ?v=1
- Échecs : **37**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (4), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (6), liens vers la page en cours (1), changements de hauteur (1), tient dans l’écran (2), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (10), souris immobile (3), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✗ absent | sans objet d’ouverture : /contact, /demo-et-voix, /parcours, /portraits |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ⚠ à regarder | présent sur / ; absent sur /contact, /demo-et-voix, /parcours, /portraits |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `demo-et-voix.html` — fichier introuvable : /assets/partage/demo-et-voix-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `parcours.html` — fichier introuvable : /assets/partage/parcours-fr.jpg
- **image de partage** — `portraits.html` — fichier introuvable : /assets/partage/portraits-fr.jpg

### grille : objet d’ouverture absent (points 2 et 3) (4)

- **grille : objet d’ouverture absent (points 2 et 3)** — `/contact` — aucun élément data-iris-centre : l’intro et le voile s’ouvrent alors depuis le centre de l’écran, pas depuis l’objet de la page
- **grille : objet d’ouverture absent (points 2 et 3)** — `/demo-et-voix` — aucun élément data-iris-centre : l’intro et le voile s’ouvrent alors depuis le centre de l’écran, pas depuis l’objet de la page
- **grille : objet d’ouverture absent (points 2 et 3)** — `/parcours` — aucun élément data-iris-centre : l’intro et le voile s’ouvrent alors depuis le centre de l’écran, pas depuis l’objet de la page
- **grille : objet d’ouverture absent (points 2 et 3)** — `/portraits` — aucun élément data-iris-centre : l’intro et le voile s’ouvrent alors depuis le centre de l’écran, pas depuis l’objet de la page

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### débordement horizontal (3)

- **débordement horizontal** — `/` — section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) — page large de 396 px pour un écran de 390 px _(390×844 normal)_
- **débordement horizontal** — `/` — section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) > div.loupe-verre — dépasse aussi à droite _(390×844 normal, 390×844 sansWebgl)_
- **débordement horizontal** — `/` — section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) — page large de 392 px pour un écran de 390 px _(390×844 sansWebgl)_

### contraste insuffisant (1)

- **contraste insuffisant** — `/` — section#plongee > div.plongee-cadre > p.plongee-mots > span:nth-of-type(1) « Depuis » — 1.07:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/` — div.visages-fond:nth-of-type(1) > figure.media.visages-table > picture > img — grok/table-lumineuse (4/5, faible, 100 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal, 1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.jeu-ecran:nth-of-type(2) > figure.media.jeu-media > picture > img « Sarah Chaperon en col roulé noir, sourire franc » — bouillard-sourire (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.chiffres-tete > figure.media.chiffres-media > picture > img « Pages de texte annotées au crayon rouge sur une ta » — grok/texte-annote (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.po-texte:nth-of-type(1) > p.po-info.mono:nth-of-type(4) « Prochainement : Les voix de l'eau, décembre 2026 » _(320×568 sansJs)_

### élément recouvert (5)

- **élément recouvert** — `/` — section#debut > div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(5) « 05 » — par section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) > div.loupe-verre _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — section#debut > div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case.est-choisie:nth-of-type(6) « 06 » — par section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) > div.loupe-verre _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — section#debut > div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(2) « 02 » — par section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) > div.loupe-verre _(1366×768 normal)_
- **élément recouvert** — `/` — section#debut > div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(7) « 07 » — par section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) > div.loupe-verre _(1366×768 normal)_
- **élément recouvert** — `/` — section#debut > div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case.case-ordi:nth-of-type(10) « 10 » — par section#debut > div.po-table:nth-of-type(2) > div.loupe:nth-of-type(2) > div.loupe-verre _(1366×768 normal)_

### contraste sur image (8)

- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(3) > span.case-n « 03 » — 3.10:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(2) > span.case-n « 02 » — 2.52:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(5) > span.case-n « 05 » — 1.24:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case.est-choisie:nth-of-type(6) > span.case-n « 06 » — 1.02:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case.est-choisie:nth-of-type(6) > span.case-n « 06 » — 1.07:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(9) > span.case-n « 09 » — 2.43:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(7) > span.case-n « 07 » — 1.02:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(1) > button.case:nth-of-type(9) > span.case-n « 09 » — 2.79:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### transition : élément visible, caché puis réaffiché (flash) (1)

- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /parcours` — section#debut > div > h1 « Parcours » _(1366×768 film, 390×844 film)_

### lien profond (2)

- **lien profond** — `/ → /demo-et-voix#demo` — section cachée sous l'en-tête (8 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /demo-et-voix#demo` — section cachée sous l'en-tête (14 px) _(390×844 lien profond)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/` — section#plongee > div.plongee-cadre > p.plongee-mots « Depuis 1991 » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#plongee > div.plongee-cadre > p.plongee-mots « Depuis 1991 » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#plongee > div.plongee-cadre > p.plongee-mots « Depuis 1991 » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_

## À regarder

### grille : rien ne relie les sections (point 4) (4)

- **grille : rien ne relie les sections (point 4)** — `/contact` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"
- **grille : rien ne relie les sections (point 4)** — `/demo-et-voix` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"
- **grille : rien ne relie les sections (point 4)** — `/parcours` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"
- **grille : rien ne relie les sections (point 4)** — `/portraits` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### texte de contenu sous 13 px (ordinateur) (3)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.chiffres-grille > div.chiffres-tete > figure.media.chiffres-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#visages > div.visages-fond:nth-of-type(1) > figure.media.visages-table > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#voix > figure.media.voix-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### transition : changement brusque (2)

- **transition : changement brusque** — `/ → /parcours` — à 450 ms (différence 23 %) (films/transition-vers-parcours-1366.png) _(1366×768 film)_
- **transition : changement brusque** — `/ → /parcours` — à 1847 ms (différence 21 %) (films/transition-vers-parcours-1366.png) _(1366×768 film)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/parcours` — à 62 ms (différence 38 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — svg — cercle-crayon : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — span.visages-lumiere — lumiere-table : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 16 min de travail pour 50 min de budget, 4 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2758 ms depuis le premier octet
- Ouverture / (390×844) : 2840 ms depuis le premier octet
- Bords de l’écran : 41 images d’intro, 4 de voile et 11 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 395, tâche la plus longue 79 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1357, tâche la plus longue 0 ms
- Vitesse / : 0.66 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,grille,mesures,films,parcours,ecran
```
