# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 16/11/2026 14:18:16 · 1 min · 3 page(s) · audit standard ciblé sur /,/demo-et-voix,/parcours (étapes : fichiers, mesures)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261116-131709-standard-cible-partiel` · version ?v=2
- Échecs : **2**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (33), balayage (3)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-124724-standard | standard | toutes | toutes | 27 | 3 | 7 | échecs |
| 20261116-125759-standard | standard | toutes | toutes | 23 | 10 | 1 | échecs |
| 20261116-131519-standard-cible-partiel | standard | /,/demo-et-voix,/parcours,/portraits | fichiers, mesures | 5 | 1 | 0 | échecs |
| **20261116-131709-standard-cible-partiel** (celle-ci) | standard | /,/demo-et-voix,/parcours | fichiers, mesures | 2 | 1 | 0 | échecs |

## Échecs

### texte coupé (2)

- **texte coupé** — `/parcours` — section#debut > div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-titre:nth-of-type(2) « Les voix de l'eau » — coupé par section#debut « PARCOURS Sur les planches Prochainement : Les voix » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/parcours` — div.to-table:nth-of-type(2) > div.to-fiche:nth-of-type(2) > p.to-fiche-quand:nth-of-type(3) > span.tel-boite « Décembre 2026 » — coupé par section#debut « PARCOURS Sur les planches Prochainement : Les voix » _(320×568 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 0 étape(s) notée(s), 0 min de travail, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /demo-et-voix, /parcours.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/parcours --seulement=fichiers,mesures
```
