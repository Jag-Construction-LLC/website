
/** @type {import('playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: './tests',
    timeout: 30 * 1000,
    use: {
        headless: true,
        baseURL: 'http://localhost:3000',
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-support', open: 'never'}]
    ],
};

module.exports = config