# Plans — Sarah Chaperon · direction « La planche-contact » · v1

## Plan du site
| Page | Ouverture (composition · objet · mouvement) | Signature après l'ouverture |
|---|---|---|
| Accueil `/` (plan galerie) | Table lumineuse claire, planche-contact de 12 portraits + compte-fils · cercle au crayon gras sur le portrait choisi · l'intro allume la table, les vignettes s'exposent une à une, le cercle se trace, le nom glisse sur le portrait entouré | plongée dans le portrait entouré ; planche qui se recompose par photographe |
| Parcours `/parcours` | Fond noir de plateau (Grok « plateau »), très grand titre à gauche, poursuite qui s'allume sur le plancher · halo qui suit le pointeur | frise des tournages 1991 → 2024 et liste de théâtre filtrable (théâtre, tournages, jeune public) ; dates triées à venir / passées |
| Portraits `/portraits` | Fond noir de studio, un portrait plein cadre en tirage qui se révèle (révélateur) · bac de développement | planche complète, filtres par photographe, visionneuse avec crédit et lien propre à chaque photo |
| Démo & voix `/demo-et-voix` | Salle de projection (Grok), l'écran s'allume et reçoit la bande-démo · faisceau du projecteur qui suit le pointeur | 4 extraits de voix dont « En mai » (Victor Hugo), visuel qui suit la voix |
| Contact `/contact` | Ouverture compacte : téléphone en très grand, e-mail, bandeau coulisses | formulaire simulé : le message devient un tirage glissé dans la pochette, tampon « Reçu » |
| 404 | Chaise seule dans la lumière (Grok) · « Cette prise n'existe pas » | |

Retirées du menu en v1 : Spectacles (photos et vidéos Cie PILE : reprises en section de Parcours).

## Grille wouahou
1. Manipuler : le compte-fils qu'on attrape et qu'on promène sur la planche (souris, doigt), avec élan ; il grossit et révèle le photographe ; au clic, le cercle au crayon gras se trace. `data-grille="manipuler"`.
2. Intro → page : le nom de l'intro glisse jusqu'au portrait entouré (`data-iris-centre`), `versObjet`.
3. Voile : `formeVoile: "iris"`, dessiné en diaphragme à lamelles depuis le clic, s'ouvre sur l'objet d'ouverture suivant.
4. Fil : le trait de crayon gras rouge qui entoure, à chaque section et chaque page, ce qu'il faut regarder (la date, le bouton lecture, le téléphone). `data-grille="fil"`.
5. Titre fabriqué : les grands titres se révèlent comme un tirage dans le bac (blanc → gris → noir, légère netteté), un seul mot en italique rouge écrit au crayon. `data-grille="typo"`.
6. Scène du métier : « La plongée » épinglée : le portrait entouré grandit jusqu'au plein cadre, on traverse l'image et on arrive sur la section suivante. `data-grille="scene"`.
7. Retour physique : à l'envoi, le message devient un tirage qui file dans la pochette de l'en-tête, tamponné « Reçu ». `data-grille="retour"`.
8. Familles modernes de l'accueil : plongee (signature), lumiere-pointeur (lumière de la table sous le compte-fils), recomposition (planche par photographe). Pages : Parcours lumiere-pointeur (poursuite), Portraits recomposition, Démo & voix lumiere-pointeur (faisceau) + plongee vers l'écran.

## Accueil, section par section (8 écrans)
1. Ouverture « La planche » : compte-fils, cercle, nom ; info clé « Prochainement : Les voix de l'eau, décembre ».
2. La plongée (épinglée) : le portrait au rire grandit, texte « Comédienne depuis 1991 : théâtre, tournages, voix ».
3. Le jeu : bande-démo 2024, bouton lecture entouré au crayon.
4. Le parcours en chiffres réels : 70, 35, 29, 24, 11 représentations (Pat'mouille, Le caddie sucré, Envole-toi Papillon, Yerma, Roméo et Juliette), comptés au défilement.
5. Ses visages : planche qui se recompose par photographe (Roka, Bouillard, Ana Slk, Robin, Fougereux).
6. La voix : « En mai » de Victor Hugo et 3 extraits, visuel qui suit la voix (studio Grok).
7. Actualité : Les voix de l'eau (décembre, à venir), puis les dates passées de 2026 barrées.
8. Appel : téléphone et e-mail en grand, cercle rouge.

## Intro (moins de 3 s)
- 0,5 s : salle sombre, la table lumineuse s'allume (lumière qui monte du centre).
- 1 s : les 12 vignettes apparaissent l'une après l'autre comme exposées (gris → image).
- 2 s : le crayon trace le cercle rouge autour du portrait au rire ; le nom « Sarah Chaperon » se révèle.
- 3 s : le nom glisse dans le titre, le compte-fils se pose sur le portrait entouré, la page est prête.

## Effets propres (data-effet)
planche, compte-fils, cercle-crayon, plongee-portrait, revelateur, poursuite, faisceau, pochette-recu.
