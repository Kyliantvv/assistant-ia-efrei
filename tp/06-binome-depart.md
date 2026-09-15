# TP06 — Binôme et départ (15 min)

**Objectif** : un binôme, un atelier qui démarre, une première sauvegarde.

## Étapes

1. Formez le binôme. Décidez qui tape en premier et notez l'heure du prochain échange.
2. Gardez l'atelier le plus avancé des deux : sa page doit afficher le formulaire. Aucun des deux ? Utilisez l'atelier de reprise (voir [APRES-MIDI-J1.md](../APRES-MIDI-J1.md)).
3. Ouvrez `atelier/public/js/app.js`. S'il ne contient pas `addEventListener('submit'`, remplacez son contenu par celui de `fournitures/formulaire/app.js`.
4. Depuis le dossier `atelier` : `npm start`, puis ouvrez http://127.0.0.1:3000. Envoyez un message : le statut change, la liste reste vide. C'est normal.
5. Sauvegardez avec Git, depuis la racine (le dossier qui contient `README.md`) :

   ```sh
   git init -b main
   git add -- atelier
   git commit -m "Après-midi : point de départ"
   ```

   Sautez `git init` si `git status` fonctionne déjà. Pas de Git sur la machine ? Notez-le dans le suivi et continuez.

## Vérifier

- La page s'affiche avec le formulaire, aucune erreur dans la console (F12). Un 404 sur `favicon.ico` est normal : l'atelier n'a pas d'icône.
- `git log --oneline` affiche votre commit.

## Indices

<details><summary>« Please tell me who you are »</summary>

Git ne connaît pas encore votre nom. Depuis la racine :

```sh
git config user.name "Prénom Nom"
git config user.email "vous@exemple.fr"
```

Puis relancez le `git commit`.
</details>
<details><summary>« EADDRINUSE »</summary>Un serveur tourne déjà : retrouvez son terminal et arrêtez-le avec Ctrl+C.</details>

**Dans le suivi** : quelle ligne de `app.js` empêche la page de se recharger à l'envoi ?

Suivant : [TP07](07-afficher-message.md)
