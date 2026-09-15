// Cerveau de Cap Web : valide et répond, sans jamais toucher au DOM.

const LONGUEUR_MAX = 280;

// Règles : mot connu -> réponse dédiée.
const REPONSES = {
  salut: 'Bonjour ! Écrivez « aide ».',
  bonjour: 'Bonjour ! Écrivez « aide ».',
  aide: 'Je connais « salut », « aide », « test ».',
  test: 'Test reçu, tout fonctionne.'
};

const REPLI = 'Je ne connais que trois mots.';

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
