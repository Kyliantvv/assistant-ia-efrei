# Diagnostic d'entrée — Inscription à un atelier (30 minutes)

Contexte concret : une petite page d'inscription à un atelier web associatif du samedi matin. Vous reprenez une page existante qui s'affiche mais comporte des défauts.

Durée : 30 minutes, sans IA ni documentation. Travail individuel.

Fichiers fournis : `index.html`, `styles.css`, `reponses.js`.

Cadre technique : tout est local dans le navigateur, sans serveur. N'ajoutez aucun import de module dans la page. La page doit afficher un contenu lisible même sans JavaScript. Le fichier `reponses.js` se corrige en éditeur et sera testé séparément avec Node, ne l'importez pas dans `index.html`.

## Tâche 1 — HTML dans `index.html`

1. Corrigez la structure : la page doit utiliser un élément `main`, un seul titre principal en premier, puis des titres de section dans l'ordre, sans saut de niveau.
2. Corrigez le formulaire `form-inscription` : chaque champ `nom` et `courriel` doit avoir une étiquette associée cliquable, et l'action `S'inscrire` doit être un vrai bouton utilisable au clavier (Tab puis Entrée).
3. Vérifiez à l'œil et au clavier : ordre visuel logique des titres, clic sur l'étiquette qui donne le focus au champ, parcours complet au clavier jusqu'au bouton.

## Tâche 2 — CSS dans `styles.css`

1. Corrigez l'effet de cascade et de boîte : les étiquettes doivent rester lisibles avec leur couleur prévue, et les blocs avec bordure et remplissage ne doivent pas dépasser leur conteneur.
2. Corrigez la largeur souple : à 360 px de large environ, la page ne doit montrer aucun défilement horizontal, textes et champs restent lisibles sans débordement.
3. Vérifiez en redimensionnant la fenêtre et en rechargeant la page.

## Tâche 3 — JS dans `reponses.js`

Complétez les deux fonctions exportées, sans modifier leurs signatures :

- `estValide(texte)` retourne un booléen : vrai si `texte` est une chaîne dont la longueur après `trim()` est entre 3 et 40 inclus, faux sinon. Exemples contexte inscription : `"Léa"` attendu vrai, `"  AB  "` attendu faux, `""` attendu faux, valeur non chaîne attendu faux.
- `extraireActifs(elements)` retourne un nouveau tableau de noms : pour chaque élément objet avec `active === true` strict et `name` chaîne non vide après `trim()`, garder le nom trimmé. Ne pas modifier le tableau ni les objets d'origine. Retourner `[]` si l'entrée n'est pas un tableau. Exemple : `[{name:"Aïcha",active:true},{name:"",active:true},{name:"Bob",active:false}]` attendu `["Aïcha"]`.

Les deux fonctions retournent volontairement `false` et `[]` en starter incomplet. Testez à la main dans votre tête avec un cas normal, un cas limite (3 et 40 caractères, espaces autour) et un cas d'erreur.

## Critères observés

- H1 : structure avec titres et zone principale.
- H2 : étiquettes, bouton et usage au clavier.
- C1 : cascade et boîte comprises.
- C2 : largeur souple sans débordement.
- J1 : fonction de validation.
- J2 : parcours de tableau.

Rendu : les trois fichiers modifiés, page toujours affichable en double-clic. Pas de score automatique.