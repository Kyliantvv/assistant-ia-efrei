# TP08 — Un cerveau à règles (35 min)

**Objectif** : Cap Web répond à « salut », « aide » et « test ».

**Fichiers** : créer `atelier/public/js/brain.js` ; modifier `app.js` et `atelier/server/app.js`.

## Étapes

1. Créez `brain.js` avec deux fonctions exportées (`export function`), **sans aucun `document`** :
   - `validateMessage(raw)` renvoie `{ ok: false, error: '…' }` si `raw` n'est pas une chaîne, est vide après `trim()` ou dépasse 280 caractères ; sinon `{ ok: true, value: … }` avec le texte nettoyé.
   - `replyTo(message)` renvoie une réponse pour « salut » ou « bonjour », une pour « aide », une pour « test », quelles que soient les majuscules et les espaces autour ; sinon une réponse de repli. Les textes sont libres.
2. Le serveur n'envoie que les fichiers d'une **liste blanche**. Dans `server/app.js`, ajoutez une ligne **juste au-dessus** de celle de `app.js`, dans `FICHIERS` puis dans `TYPES` :

   ```js
   '/js/brain.js': 'js/brain.js',
   ```

   ```js
   'js/brain.js': 'text/javascript; charset=utf-8',
   ```

   Redémarrez le serveur (Ctrl+C puis `npm start`).
3. En première ligne de `app.js` : `import { validateMessage, replyTo } from './brain.js';`
4. Remplacez votre vérification du TP07 par `validateMessage`. Après le `li` de l'utilisateur, ajoutez un `li` « Cap Web : » suivi de `replyTo(value)`.

## Vérifier

- « salut », « BONJOUR », « aide » et « test » ont chacun leur réponse ; une phrase inconnue reçoit le repli.
- Le message vide est toujours refusé.
- http://127.0.0.1:3000/js/brain.js affiche votre code.
- Aucune erreur dans la console, à part le 404 sur `favicon.ico`.

## Indices

<details><summary>La page se recharge (l'adresse finit par « ?message=… »)</summary>`app.js` n'a pas pu charger `brain.js` : l'onglet Réseau montre un 404. La ligne manque dans la liste blanche, ou le serveur n'a pas été redémarré. Une virgule oubliée empêche le serveur de démarrer : lisez le terminal.</details>
<details><summary>« does not provide an export named »</summary>Le nom importé dans `app.js` doit être exactement le nom exporté dans `brain.js`.</details>

**Défi** : ranger les règles dans un objet, et faire lister les mots connus par la réponse « aide ».

**Dans le suivi** : pourquoi `brain.js` ne doit-il pas utiliser `document` ? Que risquerait-on si le serveur envoyait tous les fichiers du dossier ?

Suivant : [TP09](09-modules.md)
