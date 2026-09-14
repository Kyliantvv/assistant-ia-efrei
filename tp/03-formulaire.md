# TP03 — Ajouter le formulaire (35 min estimées)

Objectif concret : permettre d'écrire un message et de l'envoyer au clavier, avec un statut visible, sans réponse automatique pour l'instant.

Fichiers : [../atelier/public/index.html](../atelier/public/index.html) à compléter, [../fournitures/formulaire/app.js](../fournitures/formulaire/app.js) à recopier vers [../atelier/public/js/app.js](../atelier/public/js/app.js). Garde `ul#messages`, `p#status` et `span#version` déjà en place.

Comportement fourni : le gestionnaire recopié intercepte l'envoi et affiche un statut, sans créer de conversation ni appeler de service d’IA. Une requête locale sert uniquement à afficher la version du serveur. La vraie discussion viendra plus tard. Tu travailles seulement l'envoi accessible.

## Consignes

1. Dans la section Discussion, après la liste, ajoute un `form#chat-form` vide pour l'instant.
2. Dans ce formulaire, ajoute un `label` avec `for="message"` et texte Votre message.
3. Ajoute un `textarea#message` avec `name="message"`, `rows="3"`, `required` et `maxlength="280"`.
4. Ajoute un bouton `type="submit"` avec texte Envoyer.
5. Recopie maintenant le contenu de `fournitures/formulaire/app.js` vers `atelier/public/js/app.js` avec ton éditeur : ouvre le fichier source, sélectionne tout, copie, ouvre le fichier destination, remplace tout, sauvegarde. Même méthode sur Windows, macOS et Linux, sans commande imposée.
6. Recharge `http://127.0.0.1:3000`, saisis « Bonjour », teste Entrée dans le champ, puis Tab vers Envoyer et Entrée pour soumettre. Vérifie le texte « Interface prête ; les réponses arrivent au J2. » dans le statut.

## Question prédiction

Avant de tester, prédis : que fait Entrée quand tu es dans le champ multiligne ? Note ton hypothèse puis vérifie.

## Contrôle de passage

Formulaire avec étiquette cliquable, champ requis limité à 280, bouton d'envoi, JS fourni recopié à cette étape, statut mis à jour à l'envoi, liste et version toujours présentes. Quand ces critères sont remplis, prends la pause de 10 minutes prévue, puis passe au TP04.

## Indices progressifs

<details><summary>Indice 1 — étiquette</summary>Clique le texte Votre message : le curseur doit arriver dans le champ. Sinon vérifie `for` et `id`.</details>
<details><summary>Indice 2 — envoi</summary>Si rien ne s'affiche, vérifie que le script module est toujours lié et que tu as bien sauvegardé les deux fichiers.</details>

Note utile : `required` ne bloque pas un message avec seulement des espaces. La vérification avec `trim()` sera étudiée plus tard, sans correctif JS ici.

## Défi facultatif

Si tu finis vite, teste un message vide, un message d'espaces et un message long, et note les différences dans suivi.

## Liens

Précédent : [TP02](02-html.md) — Suivant : [TP04](04-responsive.md) — Suivi : [suivi](../suivi.md) — Mémo : [aide-mémoire](../ressources/aide-memoire.md)
