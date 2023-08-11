const { test, expect } = require('@playwright/test');

test('Check add movie page', async ({ page }) => {
    await page.goto('https://philipkolarov-movies.onrender.com/');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  