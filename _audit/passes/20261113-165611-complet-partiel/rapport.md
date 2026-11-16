# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 13/11/2026 18:01:53 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261113-165611-complet-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-140548-rapide-cible | rapide | / | toutes | 37 | 12 | 1 | échecs |
| 20261113-151900-standard | standard | toutes | toutes | 63 | 18 | 1 | échecs |
| 20261113-153955-standard | standard | toutes | toutes | 9 | 14 | 1 | échecs |
| 20261113-162806-standard | standard | toutes | toutes | 3 | 15 | 1 | échecs |
| 20261113-164738-standard-partiel | standard | toutes | fichiers, mesures, mouvement | 2 | 8 | 0 | échecs |
| 20261113-165156-standard-partiel | standard | toutes | fichiers, mesures, mouvement | 0 | 8 | 0 | complet |
| **20261113-165611-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 5 | 0 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — div.planche-ouverture:nth-of-type(1) > div.po-texte:nth-of-type(1) > p.po-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « Écrire à Sarah » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/portraits` — section#debut > div.po2-texte:nth-of-type(1) > p.ouvre:nth-of-type(4) > a.bouton.bouton--clair « Voir la planche » _(1000×560 sansJs)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div.os-collant > div.plongee-texte:nth-of-type(3) > p.plongee-mots:nth-of-type(1) > span:nth-of-type(1) « Depuis » — avec section#debut > div.os-collant > div.plongee-texte:nth-of-type(3) > h2 « Le drame, le rire, la voix. » _(1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_
- **textes qui se chevauchent** — `/` — div.os-collant > div.plongee-texte:nth-of-type(3) > p.plongee-mots:nth-of-type(1) > span:nth-of-type(2) « 1991 » — avec section#debut > div.os-collant > div.plongee-texte:nth-of-type(3) > h2 « Le drame, le rire, la voix. » _(1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_

### texte coupé (1)

- **texte coupé** — `/404` — section#debut > div.introuvable-texte.conteneur > h1 > span « Cette prise n'existe pas » — coupé par section#debut « Illustration générée Cette prise n'existe pas La p » _(844×390 sansJs)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /demo-et-voix : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Tient dans l'écran /portraits : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/portraits --seulement=fichiers,mesures
```
