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

- Hypothèse : un mot de 60 lettres sans règle de césure ne peut pas passer à la ligne, il dépasse du conteneur étroit et crée un défilement horizontal à 360 px.
- Action : dans `atelier/public/styles.css` uniquement : `box-sizing: border-box` pour tous les éléments ; `margin: 0` sur `body` ; `header`, `main`, `footer` en `width: 100%`, `max-width: 760px`, `margin-inline: auto`, `padding: 1rem` ; `#chat-form` en Flexbox colonne avec `gap` ; `textarea` à 100 % ; `overflow-wrap: anywhere` sur `#messages li` ; `:focus-visible` avec contour de 3 px ; tailles de titres plus marquées (h1 2.25rem, h2 1.5rem). Aucun `overflow: hidden`.
- Résultat : test temporaire avec un `li` contenant un mot de 60 lettres, captures à 360 px et 1280 px : le mot passe à la ligne, champ entier, bouton visible, pas de débordement. `li` retiré ensuite, liste de nouveau vide.
- Point non compris, test 360 / 1280 : captures faites en navigateur headless ; focus clavier et redimensionnement lent restent à vérifier à la main. Remarque : la première capture avec Chrome normal à 360 px était fausse (largeur minimale de fenêtre imposée), refaite avec chrome-headless-shell.

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
- Dossier : `atelier` → `curl` sur `/`, `/js/app.js`, `/version.json` : `200`, `200`, `{"version":"dev"}`
- Dossier : racine → `diff fournitures/formulaire/app.js atelier/public/js/app.js` : aucune différence
- Dossier : racine → captures headless à 360 et 1280 px (TP04) : Chrome normal donne une capture fausse à 360 px (largeur minimale), `chrome-headless-shell` donne un rendu correct
- Dossier : racine → `git status` (TP05) : `On branch 04-responsive`, `nothing to commit, working tree clean` ; travail déjà validé en commits `02-html`, `03-formulaire`, `04-responsive`
- Problème exact si blocage : aucun (port 3000 libre, pas d'EADDRINUSE). Une fois : serveur en arrière-plan arrêté par le système pour manque de mémoire, relancé sans erreur.

Si Node ou Git bloque, note le message exact et continue en local sans attendre. Le double-clic sur `diagnostic/index.html` ne remplace pas le serveur pour les modules et l'envoi du TP03.

## Auto-revue finale

- Prédiction TP05 : le TP03 demandera le plus de retravail demain (vraie discussion au J2, messages d'espaces encore acceptés, statut à brancher sur de vraies réponses). Comparaison avec les notes : c'est aussi le TP avec le plus de points « à vérifier au navigateur ».
- Ce qui s'affiche bien : structure `header` / `main` / `section` / `footer`, un seul `h1`, formulaire avec étiquette, champ et bouton entiers à 360 et 1280 px, mot long qui passe à la ligne, version « dev » affichée en bas.
- Ce qui reste fragile au clavier ou à 360 px : un message composé seulement d'espaces passe `required` ; `p#status` est au-dessus de la section, loin du bouton Envoyer, donc à 360 px on peut ne pas voir le statut changer après l'envoi ; grand espace vertical entre `header` et `main` (remplissages cumulés) ; focus visible et arbre d'accessibilité encore à vérifier à la main.
- Ce que je veux revoir en capsule : `aria-live` et `role="status"` (quand l'annonce est lue), `aria-labelledby` vs `aria-label`, `overflow-wrap: anywhere` vs `word-break`, `trim()` pour refuser les messages vides.
- Défi, amélioration pour demain : rapprocher `p#status` du formulaire (juste après le bouton) pour que l'annonce soit visible là où l'on vient d'agir.

## Rappel Git prudent

Git reste optionnel le matin. Vérifie l'état local, ne valide que des fichiers nommés un par un et seulement si Git est configuré. Reste en local ou en ZIP sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion requise le matin.

## Liens

- [README](README.md)
- [TP00](tp/00-diagnostic.md)
- [TP05](tp/05-bilan.md)
- [Aide-mémoire](ressources/aide-memoire.md)
