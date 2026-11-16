# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 16/11/2026 14:14:44 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **23 échec(s)**
- Passe : `20261116-125759-standard` · version ?v=2
- Échecs : **23**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (20), souris immobile (3), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-124724-standard | standard | toutes | toutes | 27 | 3 | 7 | échecs |
| **20261116-125759-standard** (celle-ci) | standard | toutes | toutes | 23 | 10 | 1 | échecs |

## Échecs

### texte coupé (4)

- **texte coupé** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-legende.mono:nth-of-type(2) « Sacrées Championnes · YouTube ↗ » — coupé par section#debut « ▶ Veni Vidi Bibi · YouTube ↗ ▶ Sacrées Championnes » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-play:nth-of-type(1) « ▶ » — coupé par section#debut « ▶ Veni Vidi Bibi · YouTube ↗ ▶ Sacrées Championnes » _(390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — coupé par section#debut « ▶ Veni Vidi Bibi · YouTube ↗ ▶ Sacrées Championnes » _(1366×768 sansJs)_
- **texte coupé** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-titre:nth-of-type(2) « Les voix de l'eau » — coupé par section#debut « PARCOURS Sur les planches Prochainement : Les voix » _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_

### textes qui se chevauchent (11)

- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » _(320×568 normal)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — avec section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » _(320×568 normal)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — avec section#debut > div.dv2-texte.conteneur:nth-of-type(3) > h1.dv-titre.revele > span:nth-of-type(1) « La voir, » _(320×568 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-legende.mono:nth-of-type(2) « Sacrées Championnes · YouTube ↗ » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(3) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(3) > span.dv2-legende.mono:nth-of-type(2) « Les Lombricontes · YouTube ↗ » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/parcours` — div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-quand:nth-of-type(3) > span.tel-boite « Décembre 2026 » — avec section#actualite > div:nth-of-type(1) > p.surtitre.mono « ACTUALITÉ 2026 » _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-detail:nth-of-type(4) « mise en scène Christy Simon » — avec section#actualite > div:nth-of-type(1) > p.surtitre.mono « ACTUALITÉ 2026 » _(320×568 normal)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-detail:nth-of-type(4) « mise en scène Christy Simon » — avec section#actualite > div:nth-of-type(1) > h2 « Où la voir » _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-titre:nth-of-type(2) « Les voix de l'eau » — avec div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-quand:nth-of-type(3) > span.tel-boite « Décembre 2026 » _(390×844 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, +2)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > figure.to-tirage.to-t1:nth-of-type(1) > figcaption.mono « Photo Laurent Bouillard » — avec section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-titre:nth-of-type(2) « Les voix de l'eau » _(320×568 sansJs)_

### contraste sur image (4)

- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — 1.85:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-legende.mono:nth-of-type(2) « Sacrées Championnes · YouTube ↗ » — 2.76:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(3) > span.dv2-play:nth-of-type(1) « ▶ » — 1.20:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » — 4.17:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/demo-et-voix` — section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.ouvre.dv-actions:nth-of-type(2) > a.bouton « Écouter sa voix » _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/demo-et-voix` — section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.ouvre.dv-actions:nth-of-type(2) > span.mono.dv-info « Bande-démo 2024 · 4 extraits de voix » _(1366×768 sansJs)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/portraits` — div.po2-bac:nth-of-type(2) > figure.media.po2-tirage > picture > img « Sarah Chaperon souriante, pull noir et boucles d'o » — roka-buste (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/portraits` — div.conteneur.po2-demande-grille > figure.media.po2-demande-media > picture > img « Sarah Chaperon souriante, haut noir en V, sur fond » — bouillard-sourire (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/parcours` — à 74 ms (différence 28 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/portraits` — écran différent à la même position après rechargement (27.6 %), voir comparaisons/rechargement-portraits-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (7)

- **effet qui ne bouge pas au défilement** — `/` — div.table-tirages — table-tirages : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — ul.tirages — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — form.co-form — pochette-recu : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — div.pa-dates — dates : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — ol.pa-index — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/portraits` — ul.po2-grille — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — div.pa-frise — frise : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 0 étape(s) notée(s), 0 min de travail, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /demo-et-voix, /parcours, /portraits.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2611 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2507 ms depuis le premier octet
- Ouverture /demo-et-voix (1366×768) : 2513 ms depuis le premier octet
- film de l'ouverture /demo-et-voix 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /parcours (1366×768) : 2507 ms depuis le premier octet
- Ouverture /portraits (1366×768) : 2513 ms depuis le premier octet
- film de l'ouverture /portraits 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2557 ms depuis le premier octet
- Ouverture /contact (390×844) : 2503 ms depuis le premier octet
- Ouverture /demo-et-voix (390×844) : 2517 ms depuis le premier octet
- Ouverture /parcours (390×844) : 2517 ms depuis le premier octet
- Ouverture /portraits (390×844) : 2523 ms depuis le premier octet
- Bords de l’écran : 526 images d’intro, 35 de voile et 131 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /demo-et-voix : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Tient dans l'écran /portraits : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 323, tâche la plus longue 62 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 132, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité /parcours 1366×768 (molette) : 0 % d'images lentes sur 325, tâche la plus longue 0 ms
- Fluidité /portraits 1366×768 (molette) : 0 % d'images lentes sur 177, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /parcours 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /portraits 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /demo-et-voix : 0.23 s de calcul au chargement (téléphone ralenti).
- Vitesse /parcours : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /portraits : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/demo-et-voix,/parcours,/portraits --seulement=fichiers,mesures
```
