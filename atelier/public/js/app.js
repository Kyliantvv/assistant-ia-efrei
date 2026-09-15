import { validateMessage, replyTo, readCommand, replyToCommand } from './brain.js';
import { renderMessages } from './view.js';

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const boutonEnvoyer = formulaire.querySelector('button[type="submit"]');
const boutonEffacer = document.querySelector('#effacer');
const boutonExporter = document.querySelector('#exporter');
const boutonTheme = document.querySelector('#theme');

const CLE = 'capweb.historique';
const CLE_THEME = 'capweb.theme';
const DELAI_REPONSE = 1000;

// Conversation : { role: 'user' | 'assistant', text }.
const historique = [];

// Réponse en attente : tant qu'elle existe, on n'accepte pas de nouveau message.
let attente = null;

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

function effacer() {
  // Une réponse encore en route ne doit pas réapparaître après l'effacement.
  clearTimeout(attente);
  attente = null;
  boutonEnvoyer.disabled = false;
  historique.length = 0;
  try {
    localStorage.removeItem(CLE);
  } catch {
    // Stockage indisponible : rien à effacer.
  }
  renderMessages(historique, liste);
  statut.textContent = 'Conversation effacée.';
}

function ajouter(...messages) {
  historique.push(...messages);
  renderMessages(historique, liste);
  enregistrer();
}

// /aide, /compte, /effacer : traités tout de suite, sans délai.
function executerCommande(nom, texte) {
  if (nom === 'effacer') {
    effacer();
    return;
  }
  const nbMessages = historique.length;
  ajouter({ role: 'user', text: texte }, { role: 'assistant', text: replyToCommand(nom, nbMessages) });
  statut.textContent = '';
}

charger();

// Envoi : le message s'affiche tout de suite, Cap Web répond une seconde plus tard.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  if (attente !== null) {
    return;
  }
  const resultat = validateMessage(champ.value);
  if (!resultat.ok) {
    statut.textContent = resultat.error;
    champ.focus();
    return;
  }
  champ.value = '';
  champ.focus();

  const commande = readCommand(resultat.value);
  if (commande !== null) {
    executerCommande(commande, resultat.value);
    return;
  }

  ajouter({ role: 'user', text: resultat.value });
  boutonEnvoyer.disabled = true;
  statut.textContent = 'Cap Web écrit…';
  attente = setTimeout(() => {
    attente = null;
    ajouter({ role: 'assistant', text: replyTo(resultat.value) });
    boutonEnvoyer.disabled = false;
    statut.textContent = '';
  }, DELAI_REPONSE);
});

boutonEffacer.addEventListener('click', () => {
  if (!confirm('Effacer toute la conversation ?')) {
    return;
  }
  effacer();
  champ.focus();
});

// Export : un fichier texte, une ligne par message.
boutonExporter.addEventListener('click', () => {
  if (historique.length === 0) {
    statut.textContent = 'Rien à exporter : la conversation est vide.';
    return;
  }
  const lignes = historique.map((msg) => `${msg.role === 'user' ? 'Vous' : 'Cap Web'} : ${msg.text}`);
  const fichier = new window.Blob([lignes.join('\n') + '\n'], { type: 'text/plain;charset=utf-8' });
  const adresse = URL.createObjectURL(fichier);
  const lien = document.createElement('a');
  lien.href = adresse;
  lien.download = 'conversation-cap-web.txt';
  lien.click();
  URL.revokeObjectURL(adresse);
  statut.textContent = 'Conversation exportée.';
});

// Thème : préférence du système par défaut, choix du bouton mémorisé.
function themeActuel() {
  const choisi = document.documentElement.dataset.theme;
  if (choisi === 'dark' || choisi === 'light') {
    return choisi;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function afficherBoutonTheme() {
  const sombre = themeActuel() === 'dark';
  boutonTheme.setAttribute('aria-pressed', String(sombre));
  boutonTheme.textContent = sombre ? 'Thème clair' : 'Thème sombre';
}

try {
  const theme = localStorage.getItem(CLE_THEME);
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.dataset.theme = theme;
  }
} catch {
  // Stockage indisponible : on suit le système.
}
afficherBoutonTheme();

boutonTheme.addEventListener('click', () => {
  const theme = themeActuel() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(CLE_THEME, theme);
  } catch {
    // Le choix vaut pour cette page seulement.
  }
  afficherBoutonTheme();
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
