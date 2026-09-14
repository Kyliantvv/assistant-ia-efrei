# TP04 — Rendre la page responsive (40 min estimées)

Objectif concret : garder la page lisible à 360 px comme à 1280 px, sans défilement horizontal, avec champ et bouton toujours visibles.

Fichier à modifier : [../atelier/public/styles.css](../atelier/public/styles.css). Ne touche pas au HTML du TP03 sauf pour un test temporaire décrit plus bas. Garde en tête le point de départ : police et marge de 2 rem, zone centrale limitée, pas encore de mise en page souple finale.

## Consignes

1. Applique la boîte prévisible à tous les éléments pour que bordure et remplissage restent dans la largeur déclarée.
2. Donne à `header`, `main` et `footer` une largeur souple de 100 % avec un maximum autour de 760 px et un remplissage latéral, en remettant la marge du `body` à zéro pour éviter de cumuler les marges. Centre les conteneurs à l’aide de marges automatiques.
3. Mets le formulaire en colonne avec Flexbox pour que le champ et le bouton restent entiers et visibles.
4. Ajoute des espacements lisibles et un focus bien visible au clavier.
5. Pour les mots très longs dans la liste, ajoute un test temporaire à la main dans un `li`, recharge à 360 px et à 1280 px, vérifie l'absence de défilement horizontal, puis retire ce `li` pour revenir à une liste vide.
6. Vérifie à 360 px et à 1280 px : aucun défilement horizontal, champ entier, bouton visible, textes lisibles sans débordement.

## Question prédiction

Avant de toucher le CSS, prédis : que se passe-t-il si un mot de 60 lettres arrive dans un conteneur étroit sans règle de césure ? Note puis vérifie.

## Contrôle de passage

Page sans défilement horizontal à 360 et 1280 px, champ et bouton entiers et visibles, focus visible, liste de nouveau vide après test, sans `overflow hidden` pour masquer un débordement. Passe au suivant sans attendre quand c'est bon.

## Indices progressifs

<details><summary>Indice 1 — boîte</summary>Si un bloc avec bordure dépasse, vérifie d'abord le calcul de boîte avant de changer les largeurs.</details>
<details><summary>Indice 2 — largeur</summary>Si la page défile à 360 px, cherche l'élément trop large en réduisant la fenêtre pas à pas.</details>

Ne masque jamais un débordement avec un `overflow hidden` global, corrige la largeur à la source.

## Défi facultatif

Si tu finis vite, redimensionne lentement de 1280 à 360 px et note à quelle largeur un ajustement devient utile.

## Liens

Précédent : [TP03](03-formulaire.md) — Suivant : [TP05](05-bilan.md) — Suivi : [suivi](../suivi.md) — Mémo : [aide-mémoire](../ressources/aide-memoire.md)
