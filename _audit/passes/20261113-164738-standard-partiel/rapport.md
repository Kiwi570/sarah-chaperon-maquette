# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 13/11/2026 17:51:48 · 4 min · 6 page(s) · audit standard (étapes : fichiers, mesures, mouvement)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261113-164738-standard-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **8**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), mouvement (10), effets du plan (18), souris immobile (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-140548-rapide-cible | rapide | / | toutes | 37 | 12 | 1 | échecs |
| 20261113-151900-standard | standard | toutes | toutes | 63 | 18 | 1 | échecs |
| 20261113-153955-standard | standard | toutes | toutes | 9 | 14 | 1 | échecs |
| 20261113-162806-standard | standard | toutes | toutes | 3 | 15 | 1 | échecs |
| **20261113-164738-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, mouvement | 2 | 8 | 0 | échecs |

## Échecs

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/` — div.chiffres-tete:nth-of-type(1) > figure.media.chiffres-portrait > picture > img « Sarah Chaperon debout, les mains jointes, robe noi » — roka-pied (4/5, faible, 37 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### effet du plan absent (1)

- **effet du plan absent** — « ecran » : aucun élément data-effet="ecran"

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### effet qui ne bouge pas au défilement (7)

- **effet qui ne bouge pas au défilement** — `/` — div.table-tirages — table-tirages : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — ul.tirages — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — form.co-form — pochette-recu : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — div.pa-dates — dates : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — ul.pa-pieces — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/portraits` — ul.po2-grille — recomposition : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/parcours` — div.pa-frise — frise : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 151 min de travail pour 130 min de budget, 6 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 118 min pour 45 prévues.
- Audit standard : étapes lourdes sur /, /contact, /demo-et-voix, /parcours, /portraits.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

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
