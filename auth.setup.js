const { chromium } = require('@playwright/test');

(async () => {
    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    // IMPORTANT: same domain as test
    await page.goto('https://flam-avatar-qa-dash.vercel.app/auth/login');

    console.log('Login manually with Google');

    await page.waitForURL('**/dashboard/home');

    await context.storageState({
        path: 'auth.json'
    });

    console.log('Auth saved successfully');

    await browser.close();
})();