# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 13/11/2026 17:45:52 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261113-162806-standard` · version ?v=1
- Échecs : **3**
- À regarder : **15**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (18), souris immobile (5), vitesse (5), captures (1)

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
| 20261113-153955-standard | standard | toutes | toutes | 9 | 14 | 1 | échecs |
| **20261113-162806-standard** (celle-ci) | standard | toutes | toutes | 3 | 15 | 1 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > figure.media.dv-salle > figcaption.mention-ia « Illustration générée » — avec section#debut > div.dv-texte.conteneur > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » _(320×568 sansJs)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 563 px — largeurs : 560, 600, 640, 680, 720, 760 px _(balayage 320–1920 normal)_

### effet du plan absent (1)

- **effet du plan absent** — « ecran » : aucun élément data-effet="ecran"

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/demo-et-voix` — 358 × 48 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/parcours` — à 154 ms (différence 39 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/parcours` — à 136 ms (différence 34 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### transition : changement brusque (1)

- **transition : changement brusque** — `/ → /parcours` — à 290 ms (différence 21 %) (films/transition-vers-parcours-390.png) _(390×844 film)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/parcours` — écran différent à la même position après rechargement (25.6 %), voir comparaisons/rechargement-parcours-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/portraits` — écran différent à la même position après rechargement (26.4 %), voir comparaisons/rechargement-portraits-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/` — 4 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (7)

- **effet qui ne bouge pas au défilement** — `/` — div.table-tirages — table-tirages : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — ul.tirages — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — form.co-form — pochette-recu : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
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
- Ouverture / (1366×768) : 2703 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2606 ms depuis le premier octet
- Ouverture /demo-et-voix (1366×768) : 2602 ms depuis le premier octet
- Ouverture /parcours (1366×768) : 2602 ms depuis le premier octet
- Ouverture /portraits (1366×768) : 2641 ms depuis le premier octet
- Ouverture / (390×844) : 2676 ms depuis le premier octet
- Ouverture /contact (390×844) : 2668 ms depuis le premier octet
- Ouverture /demo-et-voix (390×844) : 2646 ms depuis le premier octet
- film de l'ouverture /demo-et-voix 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /parcours (390×844) : 2582 ms depuis le premier octet
- film de l'ouverture /parcours 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /portraits (390×844) : 2587 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 458 images d’intro, 32 de voile et 176 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /demo-et-voix : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Tient dans l'écran /portraits : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 134, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 1366×768 (molette) : 1 % d'images lentes sur 180, tâche la plus longue 0 ms
- Fluidité /parcours 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /portraits 1366×768 (molette) : 0 % d'images lentes sur 192, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1325, tâche la plus longue 52 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 0 ms
- Fluidité /parcours 390×844 (doigt) : 0 % d'images lentes sur 1411, tâche la plus longue 0 ms
- Fluidité /portraits 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse / : 0.74 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /demo-et-voix : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /parcours : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /portraits : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,mouvement
```
