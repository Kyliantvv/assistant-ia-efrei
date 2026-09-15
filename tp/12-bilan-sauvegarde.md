# TP12 — Bilan et sauvegarde (25 min, pour tous)

**Objectif** : un suivi complet, un travail sauvegardé, un dépôt prêt pour demain.

## Étapes

1. **Suivi (chacun, 12 min)** : complétez [suivi-apres-midi.md](../suivi-apres-midi.md) avec vos mots, y compris pour les TP inachevés.
2. **Épreuve de l'explication (5 min)** : éditeur fermé, expliquez `app.js` à votre binôme, ligne par ligne ; il note ce que vous n'avez pas su expliquer. Puis inversez avec `brain.js`.
3. **Sauvegarde (binôme)**, depuis la racine :

   ```sh
   git add -- atelier
   git commit -m "J1 : Cap Web répond"
   ```

4. **GitHub (recommandé, c'est le point de départ de demain)** : sur github.com, *New repository*, nom `cap-web`, **Private**, sans README. Copiez les commandes affichées sous « …or push an existing repository from the command line » et lancez-les depuis la racine. Ajoutez votre binôme dans *Settings → Collaborators*.
5. **Remise** : chacun dépose `suivi-apres-midi.md` sur Teams. Le binôme dépose l'adresse du dépôt, ou un ZIP de `atelier` sans `node_modules`, et vérifie que son thème est bien inscrit dans le fichier de choix des thèmes.

## Vérifier

- Sur github.com, `atelier/public/js/brain.js` est visible (si vous l'avez créé).
- Votre suivi est déposé, à votre nom.

## Indices

<details><summary>GitHub refuse le mot de passe</summary>Utilisez la fenêtre de connexion qui s'ouvre, ou un jeton : Settings → Developer settings → Personal access tokens, à coller à la place du mot de passe.</details>
<details><summary>« src refspec main does not match any »</summary>Aucun commit n'existe encore, ou la branche porte un autre nom : `git branch` l'affiche.</details>

Suivant : [TP13 — Défis](13-defis.md)
