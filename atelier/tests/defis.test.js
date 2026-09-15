import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { replyTo, readCommand, replyToCommand } from '../public/js/brain.js';

describe('Défi : plus souple', () => {
  it('reconnaît le mot dans une phrase', () => {
    assert.equal(replyTo('Bonjour à tous'), replyTo('bonjour'));
    assert.equal(replyTo('où jeter une bouteille en verre ?'), replyTo('verre'));
  });

  it('reconnaît les synonymes, pluriels et accents', () => {
    assert.equal(replyTo('mes vieilles batteries'), replyTo('pile'));
    assert.equal(replyTo('Épluchures'), replyTo('compost'));
    assert.equal(replyTo('des bocaux'), replyTo('verre'));
  });

  it('ne confond pas « tester » avec « test »', () => {
    assert.notEqual(replyTo('je veux tester'), replyTo('test'));
  });

  it('fait passer le déchet avant la politesse', () => {
    assert.equal(replyTo('salut, et les piles ?'), replyTo('pile'));
  });
});

describe('Défi : commandes', () => {
  it('lit une commande, ignore un message normal', () => {
    assert.equal(readCommand(' /Compte '), 'compte');
    assert.equal(readCommand('salut'), null);
  });

  it('/aide liste les trois commandes', () => {
    const reponse = replyToCommand('aide', 0);
    for (const commande of ['/aide', '/effacer', '/compte']) {
      assert.ok(reponse.includes(commande));
    }
  });

  it('/compte donne le nombre de messages', () => {
    assert.match(replyToCommand('compte', 4), /4 messages/);
    assert.match(replyToCommand('compte', 1), /1 message\./);
  });

  it('une commande inconnue renvoie vers /aide', () => {
    assert.match(replyToCommand('danse', 0), /inconnue.*\/aide/);
  });
});
