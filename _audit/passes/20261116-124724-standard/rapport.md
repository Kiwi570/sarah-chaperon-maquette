# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 16/11/2026 13:56:59 · 10 min · 6 page(s) · audit standard

## Résumé

- Statut : **27 échec(s)**
- Passe : `20261116-124724-standard` · version ?v=2
- Échecs : **27**
- À regarder : **3**
- Non lancé : **7**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (4)

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

## Échecs

### contraste sur image (7)

- **contraste sur image** — `/` — section#debut > div.os-collant > div.plongee-texte:nth-of-type(3) > p:nth-of-type(2) « De Yerma de Lorca aux spectacles familiaux de la C » — 1.33:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — section#debut > div.os-collant > div.plongee-texte:nth-of-type(3) > a.bouton.bouton--clair « Tout le parcours » — 1.12:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — 1.85:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-legende.mono:nth-of-type(2) « Sacrées Championnes · YouTube ↗ » — 2.76:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(3) > span.dv2-play:nth-of-type(1) « ▶ » — 1.20:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/demo-et-voix` — section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » — 4.17:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.mono:nth-of-type(1) « À venir » — 1.25:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### texte coupé (4)

- **texte coupé** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-legende.mono:nth-of-type(2) « Sacrées Championnes · YouTube ↗ » — coupé par section#debut « ▶ Veni Vidi Bibi · YouTube ↗ ▶ Sacrées Championnes » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-play:nth-of-type(1) « ▶ » — coupé par section#debut « ▶ Veni Vidi Bibi · YouTube ↗ ▶ Sacrées Championnes » _(390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — coupé par section#debut « ▶ Veni Vidi Bibi · YouTube ↗ ▶ Sacrées Championnes » _(1366×768 sansJs)_
- **texte coupé** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-titre:nth-of-type(2) « Les voix de l'eau » — coupé par section#debut « PARCOURS Sur les planches Prochainement : Les voix » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_

### textes qui se chevauchent (11)

- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » _(320×568 normal)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — avec section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » _(320×568 normal)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(1) > span.dv2-legende.mono:nth-of-type(2) « Veni Vidi Bibi · YouTube ↗ » — avec section#debut > div.dv2-texte.conteneur:nth-of-type(3) > h1.dv-titre.revele > span:nth-of-type(1) « La voir, » _(320×568 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(2) > span.dv2-legende.mono:nth-of-type(2) « Sacrées Championnes · YouTube ↗ » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(3) > span.dv2-play:nth-of-type(1) « ▶ » — avec section#debut > div.dv2-bande:nth-of-type(2) > a.dv2-image:nth-of-type(3) > span.dv2-legende.mono:nth-of-type(2) « Les Lombricontes · YouTube ↗ » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-titre:nth-of-type(2) « Les voix de l'eau » — avec div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-quand:nth-of-type(3) > span.tel-boite « Décembre 2026 » _(390×844 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, +2)_
- **textes qui se chevauchent** — `/parcours` — div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-quand:nth-of-type(3) > span.tel-boite « Décembre 2026 » — avec section#actualite > div:nth-of-type(1) > p.surtitre.mono « ACTUALITÉ 2026 » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-detail:nth-of-type(4) « mise en scène Christy Simon » — avec section#actualite > div:nth-of-type(1) > h2 « Où la voir » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-detail:nth-of-type(4) « mise en scène Christy Simon » — avec section#actualite > div:nth-of-type(1) > p.surtitre.mono « ACTUALITÉ 2026 » _(320×568 normal)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > figure.to-tirage.to-t1:nth-of-type(1) > figcaption.mono « Photo Laurent Bouillard » — avec section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-titre:nth-of-type(2) « Les voix de l'eau » _(320×568 sansJs)_

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/demo-et-voix` — figure.dv-portrait > figure.media.dv-portrait-media > picture > img « Sarah Chaperon souriante, haut noir en V, sur fond » — bouillard-sourire (4/5, faible, 32 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/parcours` — div.pa-theatre-tete > figure.media.pa-theatre-media > picture > img « Sarah Chaperon de face, cheveux auburn, sur fond g » — robin (3/5, faible, 65 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/parcours` — div.pa-theatre-tete > figure.media.pa-theatre-media > picture > img « Sarah Chaperon de face, cheveux auburn, sur fond g » — robin (3/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/demo-et-voix` — section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.ouvre.dv-actions:nth-of-type(2) > a.bouton « Écouter sa voix » _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/demo-et-voix` — section#debut > div.dv2-texte.conteneur:nth-of-type(3) > p.ouvre.dv-actions:nth-of-type(2) > span.mono.dv-info « Bande-démo 2024 · 4 extraits de voix » _(1366×768 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 87 ms (différence 23 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/parcours` — à 68 ms (différence 28 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

- **parcours:hauteur** : page.evaluate: Target page, context or browser has been closed
- **ecran** : browser.newContext: Target page, context or browser has been closed
- **fluidite** : browser.newContext: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
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
- Ouverture / (1366×768) : 2631 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2524 ms depuis le premier octet
- Ouverture /demo-et-voix (1366×768) : 2557 ms depuis le premier octet
- film de l'ouverture /demo-et-voix 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /parcours (1366×768) : 2487 ms depuis le premier octet
- Ouverture /portraits (1366×768) : 2577 ms depuis le premier octet
- Ouverture / (390×844) : 2642 ms depuis le premier octet
- Ouverture /contact (390×844) : 2518 ms depuis le premier octet
- Ouverture /demo-et-voix (390×844) : 2489 ms depuis le premier octet
- Ouverture /parcours (390×844) : 2551 ms depuis le premier octet
- Ouverture /portraits (390×844) : 2529 ms depuis le premier octet
- film de l'ouverture /portraits 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /parcours 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 541 images d’intro, 32 de voile et 130 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours,ecran,fluidite,mouvement,vitesse,captures
```
