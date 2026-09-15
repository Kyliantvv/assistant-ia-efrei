import { validateMessage, replyTo } from './brain.js';
import { renderMessages } from './view.js';

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const boutonEffacer = document.querySelector('#effacer');

const CLE = 'capweb.historique';

// Conversation : { role: 'user' | 'assistant', text }.
const historique = [];

function estMessage(msg) {
  return (msg?.role === 'user' || msg?.role === 'assistant') && typeof msg.text === 'string';
}

function enregistrer() {
  try {
    localStorage.setItem(CLE, JSON.stringify(historique));
  } catch {
    statut.textContent = 'La conversation ne peut pas être enregistrée.';
  }
}

// Démarrage : on relit la conversation, une valeur abîmée ne casse rien.
function charger() {
  let brut = null;
  try {
    brut = localStorage.getItem(CLE);
  } catch {
    return;
  }
  if (brut === null) {
    return;
  }
  try {
    const donnees = JSON.parse(brut);
    if (!Array.isArray(donnees) || !donnees.every(estMessage)) {
      throw new Error('format inattendu');
    }
    historique.push(...donnees);
  } catch {
    statut.textContent = 'Conversation enregistrée illisible : on repart de zéro.';
  }
  renderMessages(historique, liste);
}

charger();

// Envoi : on range le message et la réponse, puis on redessine.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const resultat = validateMessage(champ.value);
  if (!resultat.ok) {
    statut.textContent = resultat.error;
    champ.focus();
    return;
  }

  historique.push(
    { role: 'user', text: resultat.value },
    { role: 'assistant', text: replyTo(resultat.value) }
  );
  renderMessages(historique, liste);

  champ.value = '';
  statut.textContent = '';
  enregistrer();
  champ.focus();
});

boutonEffacer.addEventListener('click', () => {
  if (!confirm('Effacer toute la conversation ?')) {
    return;
  }
  historique.length = 0;
  try {
    localStorage.removeItem(CLE);
  } catch {
    // Stockage indisponible : rien à effacer.
  }
  renderMessages(historique, liste);
  statut.textContent = 'Conversation effacée.';
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
