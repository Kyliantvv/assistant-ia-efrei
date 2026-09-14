# TP01 — Démarrer l'atelier (15 min estimées)

Objectif concret : récupérer le dossier, lancer le serveur Cap Web et afficher la page de départ.

Fichier repère : [../atelier/public/index.html](../atelier/public/index.html). Tu utiliseras ensuite `atelier/public/styles.css`, `atelier/public/js/app.js` et le serveur dans `atelier/server/`.

Point de départ : la page contient déjà `main`, `h1` Cap Web et `p#status`. Pas encore de `header`, `footer`, `section`, `form` ni liste. Le HTML a déjà `lang="fr"`, `charset`, `title`, `viewport`, lien style et script module. Le CSS règle seulement police et marge, pas la version responsive finale. Le JS affiche juste le statut de départ. Serveur fourni en Node 24.20 minimum, modules ESM natifs, sans framework ni bundler.

## Consignes

1. Récupère le dossier. Sans Git : télécharge le ZIP depuis Code puis Download ZIP, extrais-le et ouvre le README. Avec Git : clone le dépôt indiqué dans le message du formateur. Depuis le dossier cloné, exécute `git switch -c travail/mon-login/j1` en remplaçant `mon-login` par ton identifiant.
2. Dans un terminal ouvert à la racine du dossier extrait ou cloné, vérifie `node --version`, puis lance le serveur :

   ```sh
   cd atelier
   npm start
   ```

   Garde ce terminal ouvert. Il n’est pas nécessaire d’exécuter `npm ci` pour lancer la page.
3. Ouvre `http://127.0.0.1:3000` et vérifie l'affichage avec le statut de départ.
4. Ouvre `atelier/public/index.html` en éditeur, repère `main`, `h1` et `p#status`. Ne modifie rien pour l'instant.
5. Note dans [suivi](../suivi.md) ton hypothèse, ton action, ton résultat et les commandes essayées.

## Question prédiction

Avant de lancer, prédis : que doit afficher le navigateur si le serveur tourne mais que le JS ne charge pas ? Note ta réponse puis vérifie.

## Contrôle de passage

Page visible à l’adresse locale avec statut de départ, repérage des trois balises noté, suivi rempli. Si le serveur est encore bloqué après 15 minutes, garde la vérification technique en attente dans le suivi et passe à l’analyse HTML du TP02.

## Indices progressifs

<details><summary>Indice 1 — dossier</summary>Vérifie ta racine avant d'entrer dans `atelier`.</details>
<details><summary>Indice 2 — port occupé</summary>Une erreur « EADDRINUSE » signifie que le port est déjà utilisé. Si c’est ton premier serveur, conserve-le ou arrête-le avec Ctrl+C avant de relancer. Sinon, note l’erreur et demande de l’aide, sans arrêter un processus inconnu.</details>

## Défi facultatif

Si tout démarre vite, compare les deux `index.html` et note une différence utile pour le TP02.

## Vérification outil facultative

Aucun outil de test n'est requis ce matin. Plus tard, le test serveur lance 9 tests sans valider ton HTML :

```sh
# depuis atelier
npm test
```

La vérification complète ajoute lint et navigateur, après installation, à ne pas faire à 09h00 :

```sh
# depuis atelier
npm ci
npx playwright install chromium
npm run verify
```

## Si l’installation est bloquée

Après le diagnostic, garde ses fichiers sauvegardés et avance sur `atelier/public/index.html` et son CSS au TP02. Une ouverture locale permet d’observer le HTML/CSS, mais elle ne remplace pas le serveur pour les modules et la soumission du TP03. Note le message d’erreur exact et les essais dans le suivi. N’importe jamais `diagnostic/reponses.js` dans la page.

## Liens

Précédent : [TP00](00-diagnostic.md) — Suivant : [TP02](02-html.md) — Suivi : [suivi](../suivi.md) — Mémo : [aide-mémoire](../ressources/aide-memoire.md)
