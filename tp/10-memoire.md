# TP10 — Mémoire (25 min, approfondissement)

**Objectif** : la conversation survit au rechargement, et un bouton l'efface.

**Fichiers** : `atelier/public/js/app.js`, `atelier/public/index.html`.

## Étapes

1. À chaque changement de `historique`, enregistrez-le : `localStorage.setItem('capweb.historique', JSON.stringify(historique))`.
2. Au démarrage, relisez la clé. Si elle existe, `JSON.parse` **dans un `try/catch`**, remplissez `historique` et affichez. Valeur abîmée : conversation vide et statut qui l'explique, sans plantage.
3. Dans `index.html`, sous le formulaire : `<button type="button" id="effacer">Effacer la conversation</button>`. Au clic : `confirm(…)`, puis `historique.length = 0`, `localStorage.removeItem('capweb.historique')` et nouvel affichage.

## Vérifier

- F5 garde la conversation.
- Une valeur abîmée ne casse rien (F12 → Application → Local Storage : modifiez la valeur, rechargez).
- « Effacer » vide tout, y compris après F5.

**Dans le suivi** : la conversation apparaît-elle dans un autre onglet ? En navigation privée ? Sur http://localhost:3000 au lieu de http://127.0.0.1:3000 ? Prédisez, puis vérifiez.

Suivant : [TP11](11-premier-test.md)
