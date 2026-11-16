# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 13/11/2026 16:57:53 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261113-153955-standard` · version ?v=1
- Échecs : **9**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (4), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (19), souris immobile (5), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-140548-rapide-cible | rapide | / | toutes | 37 | 12 | 1 | échecs |
| 20261113-151900-standard | standard | toutes | toutes | 63 | 18 | 1 | échecs |
| **20261113-153955-standard** (celle-ci) | standard | toutes | toutes | 9 | 14 | 1 | échecs |

## Échecs

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — div.os-collant > div.plongee-texte:nth-of-type(3) > p.plongee-mots:nth-of-type(1) > span:nth-of-type(2) « 1991 » — 2.40:1 (minimum 3:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#debut > div.os-collant > div.plongee-texte:nth-of-type(3) > p:nth-of-type(2) « De Yerma de Lorca aux spectacles jeune public de l » — 3.51:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > p.ouvre:nth-of-type(3) > a.bouton.bouton--clair « Revenir à la planche » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/demo-et-voix` — section#debut > div.dv-texte.conteneur:nth-of-type(2) > p.ouvre.dv-actions:nth-of-type(2) > a.bouton.bouton--clair « Écouter sa voix » _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > p.mono.ouvre:nth-of-type(4) « 06 11 62 65 41 » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/demo-et-voix` — section#debut > div.dv-texte.conteneur:nth-of-type(2) > p.ouvre.dv-actions:nth-of-type(2) > span.mono.dv-info « Bande-démo 2024 · 4 extraits de voix » _(1366×768 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/parcours` — section#debut > div.pa-texte.conteneur > p.surtitre.mono:nth-of-type(1) « PARCOURS » — avec section#debut > div.pa-texte.conteneur > h1.pa-titre.revele > span:nth-of-type(1) « Sur les » _(1920×1080 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 563 px — largeurs : 560, 600, 640, 680, 720, 760 px _(balayage 320–1920 normal)_

### fluidité (1)

- **fluidité** — `/` — 10 % d'images de plus de 50 ms, tâche la plus longue 111 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/parcours` — à 407 ms (différence 39 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/parcours` — à 128 ms (différence 34 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### transition : changement brusque (1)

- **transition : changement brusque** — `/contact → /parcours` — à 283 ms (différence 23 %) (films/transition-contact-vers-parcours-390.png) _(390×844 film)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/parcours` — écran différent à la même position après rechargement (28.4 %), voir comparaisons/rechargement-parcours-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/portraits` — écran différent à la même position après rechargement (26.4 %), voir comparaisons/rechargement-portraits-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (8)

- **effet qui ne bouge pas au défilement** — `/` — div.table-tirages — table-tirages : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — ul.tirages — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — form.co-form — pochette-recu : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/demo-et-voix` — img.dv-ecran-img — ecran : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — div.pa-dates — dates : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — ul.pa-pieces — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
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

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 151 min de travail pour 130 min de budget, 6 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 118 min pour 45 prévues.
- Audit standard : étapes lourdes sur /, /contact, /demo-et-voix, /parcours, /portraits.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 3000 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2872 ms depuis le premier octet
- Ouverture /demo-et-voix (1366×768) : 2751 ms depuis le premier octet
- Ouverture /parcours (1366×768) : 2668 ms depuis le premier octet
- Ouverture /portraits (1366×768) : 2776 ms depuis le premier octet
- Ouverture / (390×844) : 2688 ms depuis le premier octet
- Ouverture /contact (390×844) : 2585 ms depuis le premier octet
- Ouverture /demo-et-voix (390×844) : 2621 ms depuis le premier octet
- film de l'ouverture /demo-et-voix 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /parcours (390×844) : 2678 ms depuis le premier octet
- Ouverture /portraits (390×844) : 2614 ms depuis le premier octet
- Bords de l’écran : 295 images d’intro, 37 de voile et 96 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /demo-et-voix : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Tient dans l'écran /portraits : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 138, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 1366×768 (molette) : 1 % d'images lentes sur 177, tâche la plus longue 0 ms
- Fluidité /parcours 1366×768 (molette) : 0 % d'images lentes sur 289, tâche la plus longue 0 ms
- Fluidité /portraits 1366×768 (molette) : 0 % d'images lentes sur 186, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1331, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 390×844 (doigt) : 0 % d'images lentes sur 1391, tâche la plus longue 0 ms
- Fluidité /parcours 390×844 (doigt) : 0 % d'images lentes sur 1415, tâche la plus longue 0 ms
- Fluidité /portraits 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.71 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /demo-et-voix : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /parcours : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /portraits : 0.38 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/demo-et-voix,/parcours --seulement=fichiers,mesures,fluidite
```
