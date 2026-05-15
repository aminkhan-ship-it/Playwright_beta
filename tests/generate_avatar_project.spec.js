const { test,expect } =
require('@playwright/test');

const {
    AvatarActions
} = require(
    '../actions/avatar.actions'
);

test.use({
    storageState: 'auth.json'
});

test.describe(
'Avatar Creation Flow',
() => {

    test(
    'TC_AVATAR_01 : Verify Avatar Project Creation Flow using default avatar',
    async ({ page }) => {

        test.setTimeout(300000);

        const avatar =
            new AvatarActions(page);

        await avatar.openDashboard();

        await avatar.createProject(
            `Automation Avatar Project ${Date.now()}`
        );

        await avatar.fillAgentDetails();

        await avatar.uploadKnowledgeBank();

        // Generate directly using default avatar
        await avatar.clickGenerate();

        await avatar.verifyGenerating();
    });

    test(
    'TC_AVATAR_02 : Create project with new avatar and audio',
    async ({ page }) => {

        test.setTimeout(600000);

        const avatar =
            new AvatarActions(page);

        await avatar.openDashboard();

        await avatar.createProject(
            `Avatar Project ${Date.now()}`
        );

        await avatar.fillAgentDetails();

        await avatar.uploadKnowledgeBank();

        await avatar.clickCustomize();

        await avatar.createNewAvatar();

        await avatar.fillAvatarDetails();

        await avatar.uploadAvatarVideos();

        await avatar.addVoice();

        await avatar.previewVoice();

        await avatar.createAvatar();

        // Wait after avatar creation
        await page.waitForTimeout(5000);

        await avatar.clickNext();

        await avatar.clickGenerate();

        await avatar.verifyGenerating();
    });

    test(
    'TC_AVATAR_03 : Create project using existing avatar',
    async ({ page }) => {

        test.setTimeout(300000);

        const avatar =
            new AvatarActions(page);

        await avatar.openDashboard();

        await avatar.createProject(
            `Existing Avatar Project ${Date.now()}`
        );

        await avatar.fillAgentDetails();

        await avatar.uploadKnowledgeBank();

        await avatar.clickCustomize();

// Wait for Select Avatar page
await expect(
    page.getByText('Select Avatar')
).toBeVisible({
    timeout: 120000
});

// Wait for avatar loading to finish
await expect(
    page.getByText('Loading avatars...')
).not.toBeVisible({
    timeout: 300000
});

// Select specific avatar
const selectedAvatar = page.locator(
    '//img[@alt="Amin1778235330046"]'
);

// Ensure visible
await expect(selectedAvatar)
    .toBeVisible({
        timeout: 120000
    });

// Scroll into view
await selectedAvatar.scrollIntoViewIfNeeded();

// Click avatar
await selectedAvatar.click({
    force: true
});

// Wait for UI update
await page.waitForTimeout(5000);
        await avatar.clickNext();

        await avatar.clickGenerate();

        await avatar.verifyGenerating();
    });
});