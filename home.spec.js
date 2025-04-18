
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

test('Jag jaguar company logo image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Jag Jaguar Logo"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Jag text company logo image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Jag Text Logo"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Home hero image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Home Background Image"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('About hero image loads successfully', async ({ page }) => {
    await page.goto('/#about');
    const testImage = page.locator('img[alt="About Background Image"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('USA logo image loads successfully', async ({ page }) => {
    await page.goto('/#about');
    const testImage = page.locator('img[alt="USA Logo"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Contact hero image loads successfully', async ({ page }) => {
    await page.goto('/#services');
    const testImage = page.locator('img[alt="Contact Background Image"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Estimation image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Estimation"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Full service construction image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Full Service Construction"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Free consultation image loads successfully', async ({ page }) => {
    await page.goto('/');
    const testImage = page.locator('img[alt="Free Consultation"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Official JAG logo image loads successfully', async ({ page }) => {
    await page.goto('/#about');
    const testImage = page.locator('img[alt="JAG Logo"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});

test('Army logo image loads successfully', async ({ page }) => {
    await page.goto('/#about');
    const testImage = page.locator('img[alt="Army Logo"]');
    await testImage.scrollIntoViewIfNeeded();
    await expect(testImage).toBeVisible();
    const bbox = await testImage.boundingBox();
    expect(bbox.width).toBeGreaterThan(0);
    expect(bbox.height).toBeGreaterThan(0);
});