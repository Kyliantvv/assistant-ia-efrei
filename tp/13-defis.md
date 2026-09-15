# TP13 — Défis (quand tout le reste est fini)

Au choix, dans l'ordre que vous voulez. Chaque défi = une entrée dans le suivi. Règles : vous devez pouvoir expliquer chaque ligne ; chaque nouveau fichier va dans la liste blanche du serveur ; un défi qui touche `brain.js` vient avec son test.

## Cerveau

1. **Commandes** : `/aide` liste les commandes, `/effacer` vide la conversation, `/compte` donne le nombre de messages.
2. **Plus souple** : reconnaître le mot dans une phrase (« bonjour à tous ») et des synonymes. Attention : « tester » contient « test ».
3. **Deux langues** : `/lang en` bascule les réponses en anglais.

## Interface

4. **Cap Web réfléchit** : réponse après une seconde (`setTimeout`), bouton désactivé, statut « Cap Web écrit… ». Que se passe-t-il si on envoie deux messages très vite ?
5. **Thème sombre** : `prefers-color-scheme`, plus un bouton qui mémorise le choix.
6. **Gras sans danger** : `**très**` affiché en gras sans jamais utiliser `innerHTML`.
7. **Exporter** : télécharger la conversation en `.txt`.

## Qualité

8. **Navigateur automatisé** : depuis `atelier`, `npm ci`, `npx playwright install chromium`, puis écrivez `browser/chat.spec.js` (taper « salut », envoyer, vérifier deux messages) et lancez `npm run test:browser`.
9. **Accessibilité mesurée** : un test avec `@axe-core/playwright` qui échoue s'il trouve une violation.
10. **Tout vert** : `npm run verify` (lint, tests, navigateur).
11. **Regard critique (vaut double)** : listez trois améliorations de `app.js` pour un projet qui doit durer un an. Demandez la même chose à une IA et comparez : où a-t-elle raison, où se trompe-t-elle ?

Retour : [APRES-MIDI-J1.md](../APRES-MIDI-J1.md)
