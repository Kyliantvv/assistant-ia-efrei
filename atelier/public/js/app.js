const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');

// Envoi : on affiche le message dans la liste, sans recharger la page.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const texte = champ.value.trim();
  if (texte === '') {
    statut.textContent = 'Le message ne doit pas être vide.';
    champ.focus();
    return;
  }

  // textContent : le texte reste du texte, jamais du HTML.
  const li = document.createElement('li');
  li.textContent = `Vous : ${texte}`;
  liste.append(li);

  champ.value = '';
  statut.textContent = '';
  champ.focus();
});

// Version du serveur local, échec discret si indisponible.
fetch('/version.json', { headers: { accept: 'application/json' } })
  .then((reponse) => (reponse.ok ? reponse.json() : null))
  .then((donnees) => {
    if (donnees && typeof donnees.version === 'string' && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
    }
  })
  .catch(() => {});
