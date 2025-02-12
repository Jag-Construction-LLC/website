
const { test, expect } = require('@playwright/test');

test('Homepage loads and displays key content', async ({ page }) => {

  await page.goto('/'); 
  await expect(page).toHaveTitle(/Jag Construction/i);

  // const heroHeading = page.locator('section.relative.h-screen h1');
  // await expect(heroHeading).toHaveText(/FULL SERVICE CONSTRUCTION/i);

  // const introText = page.locator('section.relative.h-screen p');
  // await expect(introText).toContainText(/Building dreams from the ground up/i);

  // const learnMoreLink = page.locator('section.relative.h-screen a', { hasText: 'Learn More' });
  // await expect(learnMoreLink).toBeVisible();
  // await expect(learnMoreLink).toHaveAttribute('href', '/#about');

  const aboutSection = page.locator('#about');
  await expect(aboutSection).toBeVisible();

  const servicesSection = page.locator('#services');
  await expect(servicesSection).toBeVisible();

  const contactSection = page.locator('#contact');
  await expect(contactSection).toBeVisible();
});
