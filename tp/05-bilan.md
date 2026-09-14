# TP05 — Faire le bilan (15 min estimées)

Objectif concret : garder une trace utile de ta matinée et préparer les capsules à partir de ton travail.

Fichier à remplir : [../suivi.md](../suivi.md). Relis aussi [../atelier/public/index.html](../atelier/public/index.html) pour vérifier ton état final.

## Consignes

1. Ouvre `suivi.md` et complète sans données personnelles : pour chaque TP, note ton hypothèse, ton action, ton résultat et un point non compris.
2. Liste les commandes essayées en précisant depuis quel dossier tu les as lancées, avec l'erreur exacte si un outil a bloqué.
3. Fais ton auto-revue : qu'est-ce qui s'affiche bien, qu'est-ce qui reste fragile à 360 px ou au clavier, que veux-tu revoir en capsule ?
4. Git reste optionnel. Vérifie seulement l'état et les différences, puis ne valide que des fichiers nommés un par un et seulement si Git est configuré. Ne fais ni ajout global ni envoi vers un dépôt commun sans droits, et n'invente aucune adresse de dépôt.
5. Reste en local ou en ZIP pour le matin, sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion n'est requise le matin.

## Question prédiction

Avant de relire ton suivi, prédis : quel TP demandera le plus de retravail demain ? Note puis compare avec tes notes.

## Contrôle de passage

Suivi rempli avec hypothèses, actions, résultats, points non compris et commandes, auto-revue écrite, état local vérifié sans envoi imposé. Tu as terminé le bloc autonome du matin ; signale les points restant à vérifier.

## Indices progressifs

<details><summary>Indice 1 — suivi utile</summary>Une ligne par TP suffit si elle dit ce que tu as essayé et ce que tu n'as pas compris.</details>
<details><summary>Indice 2 — Git prudent</summary>En cas de doute sur les droits, note ton état local et attends la consigne du formateur.</details>

Pour voir l'état local, depuis la racine étudiante :

```sh
# depuis RACINE_ETUDIANT
git status
git diff
```

Si Git est déjà configuré dans ta copie, tu peux enregistrer le travail terminé. Depuis la racine du projet, après lecture du diff :

```sh
git add -- atelier/public/index.html atelier/public/styles.css atelier/public/js/app.js suivi.md
git commit -m "J1 : structurer une interface accessible"
```

Garde les fichiers du diagnostic pour la remise indiquée par le formateur. Aucun push n’est nécessaire pour continuer ce matin.

## Défi facultatif

Si tu as du temps, relis ta page au clavier une dernière fois et note une amélioration possible pour demain.

## Liens

Précédent : [TP04](04-responsive.md) — Suivant : aucun, fin du matin — Suivi : [suivi](../suivi.md) — Mémo : [aide-mémoire](../ressources/aide-memoire.md)
