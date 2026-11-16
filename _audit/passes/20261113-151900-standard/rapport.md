# Rapport d’audit

Projet : `sarah-chaperon-maquette` · 13/11/2026 16:36:06 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **63 échec(s)**
- Passe : `20261113-151900-standard` · version ?v=1
- Échecs : **63**
- À regarder : **18**
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
| **20261113-151900-standard** (celle-ci) | standard | toutes | toutes | 63 | 18 | 1 | échecs |

## Échecs

### texte sous 12 px (1)

- **texte sous 12 px** — `/` — div.loupe.est-la:nth-of-type(4) > svg.loupe-bague > text > textpath — 8.6 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

### texte coupé (8)

- **texte coupé** — `/` — div.loupe-monde > div.planche:nth-of-type(2) > button.case:nth-of-type(3) > span.case-n « 03 » — coupé par section#debut > div.os-collant « COMÉDIENNE · THÉÂTRE · TOURNAGES · VOIX Sarah Chap » _(768×1024 normal)_
- **texte coupé** — `/` — div.loupe-monde > div.planche:nth-of-type(2) > button.case.est-choisie:nth-of-type(6) > span.case-n « 06 » — coupé par section#debut > div.os-collant « COMÉDIENNE · THÉÂTRE · TOURNAGES · VOIX Sarah Chap » _(768×1024 normal)_
- **texte coupé** — `/` — div.tirage-volant:nth-of-type(3) > button.tirage-carte > span.tirage-dos:nth-of-type(2) > span:nth-of-type(2) « Photo Laurent Bouillard » — coupé par section#debut > div.os-collant « Sarah Chaperon Prochainement : Les voix de l'eau,  » _(844×390 normal)_
- **texte coupé** — `/` — div.loupe-monde > div.planche:nth-of-type(2) > button.case:nth-of-type(7) > span.case-n « 07 » — coupé par section#debut > div.os-collant « Sarah Chaperon Prochainement : Les voix de l'eau,  » _(844×390 normal)_
- **texte coupé** — `/` — div.loupe-monde > div.planche:nth-of-type(2) > button.case:nth-of-type(8) > span.case-n « 08 » — coupé par section#debut > div.os-collant « Sarah Chaperon Prochainement : Les voix de l'eau,  » _(844×390 normal)_
- **texte coupé** — `/parcours` — div.pa-collant > div.pa-frise:nth-of-type(2) > article.pa-film:nth-of-type(3) > p.pa-annee:nth-of-type(1) « 1997 » — coupé par section#tournages > div.pa-collant « Devant la caméra Illustration générée 1991 Le song » _(844×390 normal)_
- **texte coupé** — `/parcours` — div.pa-collant > div.pa-frise:nth-of-type(2) > article.pa-film:nth-of-type(3) > h3 « L'éveil du toucher » — coupé par section#tournages > div.pa-collant « Devant la caméra Illustration générée 1991 Le song » _(844×390 normal)_
- **texte coupé** — `/parcours` — div.pa-collant > div.pa-frise:nth-of-type(2) > article.pa-film:nth-of-type(5) > p:nth-of-type(2) « Coralie Coscas · court métrage » — coupé par section#tournages > div.pa-collant « TOURNAGES Devant la caméra Courts et longs métrage » _(1920×1080 normal)_

### textes qui se chevauchent (14)

- **textes qui se chevauchent** — `/` — div.actu-passees:nth-of-type(2) > ol.fx-fini > li:nth-of-type(1) > b « Yerma » — avec div.actu-passees:nth-of-type(2) > ol.fx-fini > li:nth-of-type(1) > span « Carré Rondelet, Montpellier » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.jeu-grille:nth-of-type(1) > ul.videos > li.video:nth-of-type(3) > p.video-titre:nth-of-type(1) « Les Lombricontes » — avec div#representations > div.chiffres-tete:nth-of-type(1) > h2 « Plus de 160 soirs, rien que pour cinq spectacles » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.planche-ouverture:nth-of-type(1) > div.po-texte:nth-of-type(1) > h1.po-titre > span.po-l2:nth-of-type(2) « Chaperon » — avec div.os-collant > div.planche-ouverture:nth-of-type(1) > div.po-texte:nth-of-type(1) > p.po-info.mono:nth-of-type(2) « Prochainement : Les voix de l'eau, décembre 2026 » _(390×844 sansJs, 1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — div.os-collant > div.plongee-texte:nth-of-type(3) > p.plongee-mots:nth-of-type(1) > span:nth-of-type(1) « Depuis » — avec section#debut > div.os-collant > div.plongee-texte:nth-of-type(3) > h2 « Le drame, le rire, la voix. » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.os-collant > div.plongee-texte:nth-of-type(3) > p.plongee-mots:nth-of-type(1) > span:nth-of-type(2) « 1991 » — avec section#debut > div.os-collant > div.plongee-texte:nth-of-type(3) > h2 « Le drame, le rire, la voix. » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.os-collant > div.planche-ouverture:nth-of-type(1) > div.po-texte:nth-of-type(1) > p.po-info.mono:nth-of-type(2) « Prochainement : Les voix de l'eau, décembre 2026 » — avec div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(1) > span.case-n « 01 » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur.co-tete > p.surtitre.mono:nth-of-type(1) « CONTACT » — avec section#debut > div.conteneur.co-tete > h1.co-titre.revele > span:nth-of-type(1) « Écrire » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv-texte.conteneur:nth-of-type(2) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » — avec section#debut > div.dv-texte.conteneur:nth-of-type(2) > h1.dv-titre.revele > span:nth-of-type(1) « La voir, » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/demo-et-voix` — section#debut > div.dv-texte.conteneur:nth-of-type(2) > p.surtitre.mono:nth-of-type(1) « BANDE-DÉMO ET VOIX » — avec section#debut > div.dv-texte.conteneur:nth-of-type(2) > h1.dv-titre > span:nth-of-type(1) « La voir, » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.pa-texte.conteneur > p.surtitre.mono:nth-of-type(1) « PARCOURS » — avec section#debut > div.pa-texte.conteneur > h1.pa-titre.revele > span:nth-of-type(1) « Sur les » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.pa-texte.conteneur > h1.pa-titre.revele > span.rouge:nth-of-type(2) « planches » — avec section#debut > div.pa-texte.conteneur > p.ouvre.pa-intro:nth-of-type(2) « Théâtre classique et contemporain, spectacles jeun » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/parcours` — section#debut > div.pa-texte.conteneur > p.surtitre.mono:nth-of-type(1) « PARCOURS » — avec section#debut > div.pa-texte.conteneur > h1.pa-titre > span:nth-of-type(1) « Sur les » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/portraits` — section#debut > div.po2-texte:nth-of-type(1) > p.surtitre.mono:nth-of-type(1) « PORTRAITS » — avec section#debut > div.po2-texte:nth-of-type(1) > h1.po2-titre.revele > span:nth-of-type(1) « Douze » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/portraits` — section#debut > div.po2-texte:nth-of-type(1) > p.surtitre.mono:nth-of-type(1) « PORTRAITS » — avec section#debut > div.po2-texte:nth-of-type(1) > h1.po2-titre > span:nth-of-type(1) « Douze » _(1366×768 sansJs)_

### section sans visuel (6)

- **section sans visuel** — `/` — section#appel « POUR UN RÔLE, UNE LECTURE, UNE VOIX Écrivez-lui, a » _(320×568 normal, 320×568 sansJs)_
- **section sans visuel** — `/demo-et-voix` — section#suite « Un rôle, une lecture, une voix off ? La contacter » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/parcours` — section#actualite « ACTUALITÉ 2026 Où la voir À VENIR Décembre 2026 Le » _(390×844 normal, 320×568 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/parcours` — section#cv « Son CV complet Formation, langues et compétences f » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/parcours` — section#actualite « Où la voir À VENIR Décembre 2026 Les voix de l'eau » _(844×390 normal)_
- **section sans visuel** — `/parcours` — section#actualite « ACTUALITÉ 2026 Où la voir DATES DE 2026 Décembre 2 » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### contraste sur image (16)

- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(3) > span.case-n « 03 » — 1.04:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(5) > span.case-n « 05 » — 1.04:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case.est-choisie:nth-of-type(6) > span.case-n « 06 » — 1.12:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(7) > span.case-n « 07 » — 3.39:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(8) > span.case-n « 08 » — 1.70:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(1) > span.case-n « 01 » — 2.25:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(3) > span.case-n « 03 » — 2.12:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(4) > span.case-n « 04 » — 2.49:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(5) > span.case-n « 05 » — 2.30:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case.est-choisie:nth-of-type(6) > span.case-n « 06 » — 1.16:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(7) > span.case-n « 07 » — 2.12:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(8) > span.case-n « 08 » — 2.22:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case:nth-of-type(9) > span.case-n « 09 » — 1.74:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case.case-ordi:nth-of-type(10) > span.case-n « 10 » — 2.56:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case.case-ordi:nth-of-type(11) > span.case-n « 11 » — 3.15:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.po-table:nth-of-type(2) > div.planche:nth-of-type(2) > button.case.case-ordi:nth-of-type(12) > span.case-n « 12 » — 3.23:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (5)

- **premier écran : bouton principal hors de l’écran** — `/` — div.planche-ouverture:nth-of-type(1) > div.po-texte:nth-of-type(1) > p.po-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « Écrire à Sarah » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > p.ouvre:nth-of-type(3) > a.bouton.bouton--clair « Revenir à la planche » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div.conteneur.co-tete > p.ouvre:nth-of-type(4) > a.bouton « Votre message » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/demo-et-voix` — section#debut > div.dv-texte.conteneur:nth-of-type(2) > p.ouvre.dv-actions:nth-of-type(3) > a.bouton.bouton--clair « Écouter sa voix » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/parcours` — section#debut > div.pa-texte.conteneur > p.ouvre:nth-of-type(4) > a.bouton.bouton--clair « Voir l'actualité » _(320×568 sansJs)_

### contraste insuffisant (1)

- **contraste insuffisant** — `/` — div.os-collant > div.plongee-texte:nth-of-type(3) > p.plongee-mots:nth-of-type(1) > span:nth-of-type(2) « 1991 » — 2.23:1 (minimum 3:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### premier écran : titre hors de l’écran (4)

- **premier écran : titre hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > h1.revele « Cette prise n'existe pas » — haut 475 px, bas 512 px, zone 65–390 px _(844×390 normal)_
- **premier écran : titre hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > h1.revele « Cette prise n'existe pas » — haut 796 px, bas 835 px, zone 65–768 px _(1366×768 normal, 1366×768 sansWebgl)_
- **premier écran : titre hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > h1.revele « Cette prise n'existe pas » — haut 1108 px, bas 1147 px, zone 65–1080 px _(1920×1080 normal)_
- **premier écran : titre hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > h1 « Cette prise n'existe pas » — haut 904 px, bas 943 px, zone 108–768 px _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > p.mono.ouvre:nth-of-type(4) « 06 11 62 65 41 » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/demo-et-voix` — section#debut > div.dv-texte.conteneur:nth-of-type(2) > p.ouvre.dv-actions:nth-of-type(3) > span.mono.dv-info « Bande-démo 2024 · 4 extraits de voix » _(320×568 normal, 390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/contact` — aside.co-direct > figure.media.co-portrait > picture > img « Sarah Chaperon de face, cheveux auburn, sur fond g » — robin (3/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### élément recouvert (2)

- **élément recouvert** — `/contact` — section#message > form.co-form > h2 « Votre message » — par section#message > form.co-form > span.co-tampon « REÇU » _(390×844 normal, 768×1024 normal)_
- **élément recouvert** — `/demo-et-voix` — section#demo > div > p.dv-demande:nth-of-type(3) > a.bouton « Recevoir la bande-démo » — par section#demo > div > p.dv-demande:nth-of-type(3) > svg.crayon.crayon-bouton _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### image non chargée (1)

- **image non chargée** — `/portraits` — main#contenu > dialog.visionneuse > figure.vis-figure > img.vis-img — http://127.0.0.1:46825/portraits _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 563 px — largeurs : 560, 600, 640, 680, 720, 760 px _(balayage 320–1920 normal)_

### stabilité pendant le défilement (CLS) (1)

- **stabilité pendant le défilement (CLS)** — `/parcours` — span.pa-poursuite ; span.pa-poursuite ; span.pa-poursuite — 0.052 (0,05 au plus) _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### typographie française (1)

- **typographie française** — `/parcours` — section#theatre > p.conteneur.pa-compagnies « Compagnies : Rugir l'art · PILE · TIC TAC · SOKOL  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour avant : changement brusque (4)

- **retour avant : changement brusque** — `/parcours` — à 80 ms (différence 42 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/parcours` — à 120 ms (différence 39 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/parcours` — à 79 ms (différence 31 %) (films/retour-avant-390.png) _(390×844 retour avant)_
- **retour avant : changement brusque** — `/parcours` — à 110 ms (différence 35 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (4.4 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/parcours` — écran différent à la même position après rechargement (31.5 %), voir comparaisons/rechargement-parcours-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/portraits` — écran différent à la même position après rechargement (26.4 %), voir comparaisons/rechargement-portraits-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/` — 3 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

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
- Ouverture / (1366×768) : 2680 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2605 ms depuis le premier octet
- Ouverture /demo-et-voix (1366×768) : 2557 ms depuis le premier octet
- Ouverture /parcours (1366×768) : 2544 ms depuis le premier octet
- Ouverture /portraits (1366×768) : 2564 ms depuis le premier octet
- Ouverture / (390×844) : 2611 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2552 ms depuis le premier octet
- Ouverture /demo-et-voix (390×844) : 2589 ms depuis le premier octet
- Ouverture /parcours (390×844) : 2540 ms depuis le premier octet
- Ouverture /portraits (390×844) : 2635 ms depuis le premier octet
- Bords de l’écran : 467 images d’intro, 38 de voile et 190 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /demo-et-voix : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Tient dans l'écran /portraits : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 130, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /parcours 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /portraits 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /demo-et-voix 390×844 (doigt) : 0 % d'images lentes sur 1410, tâche la plus longue 0 ms
- Fluidité /parcours 390×844 (doigt) : 0 % d'images lentes sur 1399, tâche la plus longue 0 ms
- Fluidité /portraits 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 0.61 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /demo-et-voix : 0.37 s de calcul au chargement (téléphone ralenti).
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
node _audit/audit.mjs --pages=/,/404,/contact,/demo-et-voix,/parcours,/portraits --seulement=fichiers,mesures,fluidite
```
