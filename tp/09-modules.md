# TP09 — Ranger en modules (30 min)

**Objectif** : même comportement, mais trois fichiers aux rôles clairs, et une conversation rangée dans un tableau.

**Fichiers** : créer `atelier/public/js/view.js` ; modifier `app.js` et `server/app.js`.

## Étapes

1. Dans `app.js`, créez `const historique = [];`. Chaque message y sera un objet `{ role: 'user', text: '…' }` ou `{ role: 'assistant', text: '…' }`.
2. Créez `view.js` avec `export function renderMessages(messages, container)` : un `li` par message (« Vous : » ou « Cap Web : », toujours `textContent`), puis `container.replaceChildren(...lignes)`.
3. Ajoutez `view.js` à la liste blanche du serveur, comme `brain.js` (une ligne au-dessus de celle de `app.js`, dans `FICHIERS` et `TYPES`), et redémarrez.
4. Dans `app.js` : importez `renderMessages`. Après validation, ajoutez les deux messages à `historique`, puis appelez `renderMessages(historique, liste)`. Supprimez les `createElement` de `app.js`.

## Vérifier

- Le comportement est identique au TP08.
- `app.js` ne contient plus de `createElement`, `brain.js` pas de `document`, `view.js` aucune règle de réponse.

## Indice

<details><summary>La forme de renderMessages</summary>

```js
export function renderMessages(messages, container) {
  const lignes = messages.map((msg) => {
    const li = document.createElement('li');
    // étiquette selon msg.role, puis textContent
    return li;
  });
  container.replaceChildren(...lignes);
}
```

</details>

**Défi** : messages de l'utilisateur à droite, Cap Web à gauche (`li.dataset.role` et CSS), vérifié à 360 px.

**Dans le suivi** : le rôle de chaque fichier, en une phrase chacun.

Suivant : [TP10](10-memoire.md)
