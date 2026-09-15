import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
/* global localStorage -- callbacks exécutés dans la page */

async function pageNeuve(page) {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
}

async function envoyer(page, texte) {
  await page.locator('#message').fill(texte);
  await page.getByRole('button', { name: 'Envoyer' }).click();
}

const lignes = (page) => page.locator('#messages li');

test('salut : mon message puis la réponse de Cap Web', async ({ page }) => {
  const erreurs = [];
  page.on('pageerror', (e) => erreurs.push(e.message));
  await pageNeuve(page);
  await envoyer(page, 'salut');
  await expect(lignes(page)).toHaveCount(2);
  await expect(lignes(page).nth(0)).toHaveText('Vous : salut');
  await expect(lignes(page).nth(1)).toContainText('trier vos déchets');
  expect(erreurs).toHaveLength(0);
});

test('Cap Web réfléchit : statut et bouton bloqué pendant l’attente', async ({ page }) => {
  await pageNeuve(page);
  await envoyer(page, 'verre');
  await expect(lignes(page)).toHaveCount(1);
  await expect(page.locator('#status')).toHaveText('Cap Web écrit…');
  await expect(page.getByRole('button', { name: 'Envoyer' })).toBeDisabled();
  await expect(lignes(page)).toHaveCount(2);
  await expect(lignes(page).nth(1)).toContainText('colonne à verre');
  await expect(page.getByRole('button', { name: 'Envoyer' })).toBeEnabled();
});

test('/compte puis /effacer', async ({ page }) => {
  await pageNeuve(page);
  await envoyer(page, 'pile');
  await expect(lignes(page)).toHaveCount(2);
  await envoyer(page, '/compte');
  await expect(lignes(page).nth(3)).toContainText('2 messages');
  await envoyer(page, '/effacer');
  await expect(lignes(page)).toHaveCount(0);
  await page.reload();
  await expect(lignes(page)).toHaveCount(0);
});

test('le thème sombre est mémorisé', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await pageNeuve(page);
  await page.getByRole('button', { name: 'Thème sombre' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: 'Thème clair' })).toHaveAttribute('aria-pressed', 'true');
});

test('exporter télécharge la conversation en .txt', async ({ page }) => {
  await pageNeuve(page);
  await envoyer(page, 'carton');
  await expect(lignes(page)).toHaveCount(2);
  const [telechargement] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Exporter en .txt' }).click()
  ]);
  expect(telechargement.suggestedFilename()).toBe('conversation-cap-web.txt');
});

for (const theme of ['light', 'dark']) {
  test(`aucune violation d’accessibilité (thème ${theme})`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme });
    await pageNeuve(page);
    await envoyer(page, 'compost');
    await expect(lignes(page)).toHaveCount(2);
    const resultat = await new AxeBuilder({ page }).analyze();
    expect(resultat.violations).toEqual([]);
  });
}
