# Démarrage J1 — Cap Web

Dès ton arrivée : ouvre [TP00 — Diagnostic](tp/00-diagnostic.md) et lance son chrono de 30 minutes.

Tu travailles sur Cap Web, une mini-discussion en HTML, CSS et JavaScript natifs, avec un petit serveur Node en modules ESM, sans framework ni bundler. Objectif du matin : structurer la page, ajouter un formulaire utilisable au clavier, puis stabiliser la mise en page sur mobile et bureau.

Travaille dans l'ordre des TP. Chaque TP donne son objectif et ses critères de passage. Quand tes critères sont remplis, passe au suivant sans attendre. De courts points collectifs partiront de vos essais. Chaque TP comprend des indices et un défi facultatif ; si un problème persiste, note-le et prépare ce que tu peux faire à l’étape suivante.

Après le diagnostic, tu peux utiliser [l'aide-mémoire](ressources/aide-memoire.md), les documentations officielles et l’entraide, en expliquant vos choix. Pendant le diagnostic, reste en individuel strict, sans IA ni doc.

## Parcours — environ trois heures, pause comprise

| Étape | Durée |
|---|---|
| [TP00 — Diagnostic](tp/00-diagnostic.md) | 30 min chrono |
| [TP01 — Démarrer](tp/01-demarrer.md) | 15 min estimées |
| [TP02 — HTML](tp/02-html.md) | 35 min estimées |
| [TP03 — Formulaire](tp/03-formulaire.md) | 35 min estimées |
| Pause | 10 min |
| [TP04 — Responsive](tp/04-responsive.md) | 40 min estimées |
| [TP05 — Bilan](tp/05-bilan.md) | 15 min estimées |

Note ton avancée dans [suivi.md](suivi.md).

## Récupérer et lancer

Si Git n'est pas installé, télécharge le ZIP depuis Code puis Download ZIP, extrais-le et ouvre ce README. Si Git est disponible, clone l'URL fournie par le formateur puis crée ta branche de travail comme expliqué au TP01. Pré-requis serveur : Node 24.20 minimum. Aucune installation supplémentaire n'est requise pour démarrer.

```sh
# depuis RACINE_ETUDIANT
cd atelier
npm start
```

Ouvre ensuite `http://127.0.0.1:3000` et vérifie l'affichage de départ.

Si Node ou Git bloque, ouvre `diagnostic/index.html` par double-clic pour faire le diagnostic sans serveur. Après les 30 minutes, sauvegarde le diagnostic. Si le problème persiste, note-le dans `suivi.md` et avance sur le HTML/CSS du TP02 ; la soumission JavaScript du TP03 devra être vérifiée avec le serveur.

Vérification facultative plus tard, depuis `atelier` :

```sh
# depuis atelier
npm test
```

Ce test lance 9 tests serveur, il ne valide pas ton HTML. Cette vérification technique est facultative au démarrage ; les critères des TP restent à contrôler.
