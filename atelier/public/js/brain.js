// Cerveau de Cap Web, assistant tri et recyclage : valide et répond, sans jamais toucher au DOM.

const LONGUEUR_MAX = 280;

const BONJOUR = 'Bonjour ! Je vous aide à trier vos déchets. Écrivez « aide ».';

// Règles : mot connu -> réponse dédiée.
const REPONSES = {
  salut: BONJOUR,
  bonjour: BONJOUR,
  aide: 'Je connais « salut », « aide », « test » et ces déchets : plastique, verre, papier, carton, pile, compost. Commandes : /aide, /effacer, /compte.',
  test: 'Test reçu, le centre de tri est ouvert.',
  plastique: 'Bouteilles, flacons, pots et films en plastique : bac jaune, bien vidés. Inutile de les laver.',
  verre: 'Bouteilles, pots et bocaux en verre : colonne à verre, sans bouchon ni couvercle. La vaisselle et les vitres n’y vont pas.',
  papier: 'Journaux, prospectus, enveloppes : bac jaune ou bac à papier selon votre commune.',
  carton: 'Cartons et briques alimentaires : bac jaune, bien aplatis. Les gros cartons vont en déchetterie.',
  pile: 'Piles et batteries : jamais à la poubelle. Déposez-les dans un bac de collecte en magasin ou en déchetterie.',
  compost: 'Épluchures, restes de repas et marc de café : composteur ou bac à biodéchets.'
};

// Synonymes : mot de la phrase -> règle.
const SYNONYMES = {
  coucou: 'salut',
  hello: 'salut',
  plastiques: 'plastique',
  flacon: 'plastique',
  flacons: 'plastique',
  bocal: 'verre',
  bocaux: 'verre',
  papiers: 'papier',
  journal: 'papier',
  journaux: 'papier',
  enveloppe: 'papier',
  enveloppes: 'papier',
  cartons: 'carton',
  brique: 'carton',
  briques: 'carton',
  piles: 'pile',
  batterie: 'pile',
  batteries: 'pile',
  epluchure: 'compost',
  epluchures: 'compost',
  biodechets: 'compost'
};

// Quand une phrase contient plusieurs mots connus, le déchet passe avant la politesse.
const PRIORITE = ['plastique', 'verre', 'papier', 'carton', 'pile', 'compost', 'aide', 'test', 'salut', 'bonjour'];

const REPLI = 'Je ne connais pas encore ce déchet. Écrivez « aide » pour voir la liste.';

const COMMANDES = {
  aide: 'Commandes : /aide liste les commandes, /effacer vide la conversation, /compte donne le nombre de messages.'
};

export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être un texte.' };
  }
  const value = raw.trim();
  if (value === '') {
    return { ok: false, error: 'Le message ne doit pas être vide.' };
  }
  if (value.length > LONGUEUR_MAX) {
    return { ok: false, error: `Le message ne doit pas dépasser ${LONGUEUR_MAX} caractères.` };
  }
  return { ok: true, value };
}

// Découpe la phrase en mots, sans majuscules ni accents : « Épluchures ! » -> ['epluchures'].
function mots(message) {
  return String(message)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

export function replyTo(message) {
  // Mots entiers seulement : « tester » ne déclenche pas « test ».
  const regles = new Set(mots(message).map((mot) => SYNONYMES[mot] ?? mot));
  const trouvee = PRIORITE.find((regle) => regles.has(regle));
  return trouvee ? REPONSES[trouvee] : REPLI;
}

// « /Compte » -> 'compte' ; un message normal -> null.
export function readCommand(message) {
  const texte = String(message).trim();
  if (!texte.startsWith('/')) {
    return null;
  }
  return texte.slice(1).trim().toLowerCase();
}

export function replyToCommand(nom, nbMessages) {
  if (nom === 'compte') {
    return nbMessages <= 1 ? `La conversation contient ${nbMessages} message.` : `La conversation contient ${nbMessages} messages.`;
  }
  return COMMANDES[nom] ?? `Commande inconnue : /${nom}. Écrivez /aide.`;
}
