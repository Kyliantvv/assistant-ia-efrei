import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';

describe('validateMessage', () => {
  it('refuse une chaîne vide', () => {
    assert.equal(validateMessage('   ').ok, false);
  });

  it('accepte «  salut  » et nettoie les espaces', () => {
    assert.deepEqual(validateMessage('  salut  '), { ok: true, value: 'salut' });
  });

  it('accepte 280 caractères mais refuse 281', () => {
    assert.equal(validateMessage('a'.repeat(280)).ok, true);
    assert.equal(validateMessage('a'.repeat(281)).ok, false);
  });
});

describe('replyTo', () => {
  it('répond pareil quelles que soient les majuscules', () => {
    assert.equal(replyTo('SALUT'), replyTo('salut'));
  });

  it('donne à une phrase inconnue une réponse différente de « aide »', () => {
    const reponse = replyTo('quelle heure est-il ?');
    assert.equal(typeof reponse, 'string');
    assert.notEqual(reponse, replyTo('aide'));
  });
});
