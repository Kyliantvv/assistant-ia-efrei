# TP02 — Structurer la page en HTML (35 min estimées)

Objectif concret : transformer la page de départ en structure Cap Web lisible au clavier et aux lecteurs d'écran, sans toucher au style final.

Fichier à modifier : [../atelier/public/index.html](../atelier/public/index.html). Garde en repère [../atelier/public/js/app.js](../atelier/public/js/app.js) et [../atelier/public/styles.css](../atelier/public/styles.css) sans les modifier ici.

Point de départ : `main` avec `h1` Cap Web et `p#status` déjà présents, avec `lang="fr"`, `charset`, `title`, `viewport`, lien style et script module déjà en place. Pas encore de `header`, `footer`, `section`, `form` ni liste. Le CSS règle seulement police et marge. Le JS affiche juste le statut de départ.

Dans ce projet, un seul `h1` par page par convention, ce n'est pas une règle universelle.

Cible à construire, sans copier de page complète :

## Consignes

1. Ajoute un `header` en haut avec le `h1` Cap Web existant déplacé dedans, sans créer de second `h1`.
2. Dans `main`, ajoute une `section` liée à son titre par `aria-labelledby="titre-chat"`, avec un `h2` id `titre-chat` texte Discussion.
3. Dans cette section, ajoute une liste vide `ul#messages` avec `aria-label="Messages"` et `aria-live="polite"`, pour les futurs messages.
4. Conserve l'unique `p#status` avec `role="status"` pour les annonces, sans le dupliquer.
5. Ajoute un `footer` avec un `span#version` contenant un texte d'attente pour la version.
6. Garde le script module vers `app.js` et recharge la page pour vérifier les titres. Inspecte les repères et les noms dans l’arbre d’accessibilité des outils du navigateur ; la touche Tab ne parcourt pas les titres ordinaires.

## Question prédiction

Avant de coder, prédis : si tu remplaces `main` par `div`, quels changements attends-tu dans le rendu et dans les repères d’accessibilité ? Note ton hypothèse dans [suivi](../suivi.md).

## Contrôle de passage

Un seul `h1` dans `header`, `section` liée à son `h2`, liste vide présente, `status` unique conservé, `version` en attente dans `footer`, script module gardé, page affichable. Passe au suivant sans attendre quand c'est bon.

## Indices progressifs

<details><summary>Indice 1 — ordre</summary>Place `header`, `main` puis `footer` comme enfants directs de `body`, et vérifie l'ordre visuel des titres.</details>
<details><summary>Indice 2 — liste et statut</summary>Une liste vide n’a pas de message à annoncer. Vérifie sa présence dans le HTML, son nom et l’unicité de l’identifiant `status` ; les mises à jour seront utiles ensuite.</details>

## Défi facultatif

Si tu finis vite, compare l’ordre des titres dans le HTML et dans l’arbre d’accessibilité. Justifie une balise choisie dans le suivi.

## Liens

Précédent : [TP01](01-demarrer.md) — Suivant : [TP03](03-formulaire.md) — Suivi : [suivi](../suivi.md) — Mémo : [aide-mémoire](../ressources/aide-memoire.md)
