// Cerveau de Cap Web, assistant tri et recyclage : valide et répond, sans jamais toucher au DOM.

const LONGUEUR_MAX = 280;

const BONJOUR = 'Bonjour ! Je vous aide à trier vos déchets. Écrivez « aide ».';

// Règles : mot connu -> réponse dédiée.
const REPONSES = {
  salut: BONJOUR,
  bonjour: BONJOUR,
  aide: 'Je connais « salut », « aide », « test » et ces déchets : plastique, verre, papier, carton, pile, compost.',
  test: 'Test reçu, le centre de tri est ouvert.',
  plastique: 'Bouteilles, flacons, pots et films en plastique : bac jaune, bien vidés. Inutile de les laver.',
  verre: 'Bouteilles, pots et bocaux en verre : colonne à verre, sans bouchon ni couvercle. La vaisselle et les vitres n’y vont pas.',
  papier: 'Journaux, prospectus, enveloppes : bac jaune ou bac à papier selon votre commune.',
  carton: 'Cartons et briques alimentaires : bac jaune, bien aplatis. Les gros cartons vont en déchetterie.',
  pile: 'Piles et batteries : jamais à la poubelle. Déposez-les dans un bac de collecte en magasin ou en déchetterie.',
  compost: 'Épluchures, restes de repas et marc de café : composteur ou bac à biodéchets.'
};

const REPLI = 'Je ne connais pas encore ce déchet. Écrivez « aide » pour voir la liste.';

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

export function replyTo(message) {
  const cle = String(message).trim().toLowerCase();
  // Object.hasOwn évite de répondre à « constructor » ou « toString ».
  return Object.hasOwn(REPONSES, cle) ? REPONSES[cle] : REPLI;
}
