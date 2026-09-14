# Suivi J1 — Cap Web

Note ton avancée après chaque TP. Reste factuel, sans données personnelles. Ce fichier te sert pour la capsule et le bilan.

## TP00 — Diagnostic

- Hypothèse :
- Action :
- Résultat :
- Point non compris :

## TP01 — Démarrer

- Hypothèse : Node >= 24.20 requis ; `npm start` suffit sans `npm ci`. Prédiction : si le serveur tourne mais que le JS ne charge pas, la page affiche le h1 « Cap Web » et le paragraphe « Le serveur fonctionne… », mais `p#status` reste vide (pas de « Votre point de départ est prêt. »).
- Action : branche `travail/kyliantvv/j1` créée, serveur lancé depuis `atelier`, page ouverte sur http://127.0.0.1:3000. Repérage dans `atelier/public/index.html` : `<main>` contient `<h1>Cap Web</h1>`, un `<p>` d'intro et `<p id="status" role="status">` vide, rempli par `js/app.js` (module chargé en fin de body).
- Résultat : serveur prêt, `/` et `/js/app.js` répondent 200. Statut de départ affiché : « Votre point de départ est prêt. ». Prédiction vérifiée : `app.js` ne fait que remplir `#status`, donc sans JS ce paragraphe reste vide.
- Point non compris :
- Défi : `diagnostic/index.html` utilise les titres selon leur taille plutôt que leur sens (h3 pour les infos, h4 pour le formulaire), utilise des `div` de mise en page et des placeholders comme exemples ; `atelier/public/index.html` est minimal, structuré par `main`, avec zone `role="status"` et JS en module. Utile TP02 : garder une hiérarchie de titres logique.

## TP02 — HTML

- Hypothèse : remplacer `main` par `div` ne change rien au rendu visuel (les deux sont des blocs sans style par défaut), mais le repère « main » disparaît de l'arbre d'accessibilité : un lecteur d'écran ne peut plus sauter directement au contenu principal.
- Action : dans `atelier/public/index.html`, `h1` Cap Web déplacé dans un `header` ; dans `main`, ajout d'une `section aria-labelledby="titre-chat"` avec `h2#titre-chat` « Discussion » et `ul#messages` vide (`aria-label="Messages"`, `aria-live="polite"`) ; `p#status role="status"` conservé une seule fois ; `footer` avec `span#version` « en attente… » ; script module vers `app.js` gardé. CSS et JS non modifiés.
- Résultat : page servie en 200, un seul `h1`, un seul `#status`. À vérifier dans le navigateur : titres, repères banner / main / region « Discussion » / contentinfo dans l'arbre d'accessibilité.
- Point non compris :
- Défi : ordre des titres identique dans le HTML et l'arbre (h1 Cap Web puis h2 Discussion). Balise justifiée : `section` + `aria-labelledby` devient une région nommée « Discussion », donc un repère navigable ; sans nom, une `section` n'est pas exposée comme repère.

## TP03 — Formulaire

- Hypothèse : dans un `textarea`, Entrée insère un retour à la ligne et n'envoie pas le formulaire (contrairement à un `input` d'une ligne). Pour envoyer au clavier : Tab jusqu'à Envoyer puis Entrée.
- Action : dans la section Discussion, après `ul#messages`, ajout de `form#chat-form` avec `label for="message"` « Votre message », `textarea#message` (`name="message"`, `rows="3"`, `required`, `maxlength="280"`) et `button type="submit"` « Envoyer ». Contenu de `fournitures/formulaire/app.js` recopié dans `atelier/public/js/app.js` (identique, vérifié avec `diff`). Footer ajusté en « Cap Web — version en attente… » car le JS remplace le span par « version dev ».
- Résultat : page servie en 200, `/version.json` renvoie `{"version":"dev"}`. À vérifier au navigateur : clic sur l'étiquette place le curseur, Entrée dans le champ, envoi via Tab + Entrée, statut « Interface prête ; les réponses arrivent au J2. ».
- Point non compris :
- Défi (hypothèses à vérifier) : message vide bloqué par `required` avec bulle du navigateur, statut inchangé ; message d'espaces accepté par `required` donc statut mis à jour (d'où le futur `trim()`) ; message long coupé à 280 caractères à la saisie ou au collage.

## TP04 — Responsive

- Hypothèse :
- Action :
- Résultat :
- Point non compris, test 360 / 1280 :

## Commandes essayées

Note chaque commande avec son dossier de lancement et son résultat exact. Exemple d'état local, depuis la racine étudiante :

```sh
# depuis RACINE_ETUDIANT
git status
git diff
```

Mes essais :

- Dossier : racine → `node --version` : `v26.8.1`
- Dossier : racine → `git switch -c travail/kyliantvv/j1` : `Switched to a new branch 'travail/kyliantvv/j1'`
- Dossier : `atelier` → `npm start` : `Cap Web prêt sur http://127.0.0.1:3000/`
- Dossier : `atelier` → `npm start` (relance après arrêt du serveur pour manque de mémoire) : `Cap Web prêt sur http://127.0.0.1:3000/`
- Problème exact si blocage : aucun (port 3000 libre, pas d'EADDRINUSE)

Si Node ou Git bloque, note le message exact et continue en local sans attendre. Le double-clic sur `diagnostic/index.html` ne remplace pas le serveur pour les modules et l'envoi du TP03.

## Auto-revue finale

- Ce qui s'affiche bien :
- Ce qui reste fragile au clavier ou à 360 px :
- Ce que je veux revoir en capsule :

## Rappel Git prudent

Git reste optionnel le matin. Vérifie l'état local, ne valide que des fichiers nommés un par un et seulement si Git est configuré. Reste en local ou en ZIP sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion requise le matin.

## Liens

- [README](README.md)
- [TP00](tp/00-diagnostic.md)
- [TP05](tp/05-bilan.md)
- [Aide-mémoire](ressources/aide-memoire.md)
