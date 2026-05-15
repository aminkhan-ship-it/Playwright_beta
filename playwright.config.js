// @ts-check

const config = {

    testDir: './tests',

    timeout: 300000,

    expect: {
        timeout: 30000
    },

    reporter: 'html',

    fullyParallel: false,

    workers: 1,

    use: {

        headless: false,

        browserName: 'chromium',

        trace: 'on-first-retry',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure'
    }
};

module.exports = config;