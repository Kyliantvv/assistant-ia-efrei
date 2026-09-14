# Atelier J1 — Cap Web

Dossier technique du matin. Toutes les commandes se lancent depuis ce dossier `atelier`. Aucun script du dossier parent n'est requis.

Documents de travail : [README racine](../README.md) et [TP01 démarrer](../tp/01-demarrer.md). Avancez TP par TP avec les critères indiqués.

## Démarrer

Prérequis : Node 24.20 minimum. Serveur Node fourni, modules ES, sans framework ni bundler. Git facultatif pour démarrer.

Depuis la racine étudiante :

```
cd atelier
npm start
```

Aucun `npm ci` requis pour démarrer. Ouvrez ensuite :

```
http://127.0.0.1:3000
```

Si Git est disponible, suivez TP01 pour le clone et la branche de travail. Sinon, utilisez le dossier extrait et ouvrez le README racine.

## Vérifier (facultatif, ne bloque pas les TP)

Depuis `atelier` :

```
npm test
```

9 tests serveur avec Node intégré. Ne valide pas le HTML des TP.

Vérification complète, plus tard uniquement :

```
npm ci
npx playwright install chromium
npm run verify
```

`verify` = lint + tests serveur + 1 test navigateur. Ces contrôles vérifient le socle fourni ; les critères de chaque TP servent à vérifier votre travail HTML/CSS.

## Suite

Retournez au TP en cours après chaque vérification. Notez commandes essayées et résultats dans le [suivi](../suivi.md).
