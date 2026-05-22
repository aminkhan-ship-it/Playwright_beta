const { test, expect } =
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

//
// ============================================================
// KNOWLEDGE BANK FLOW WITH IDENTITY
// ============================================================
//

test(
'TC_AVATAR_01 : Default Avatar + KB + Identity (English)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createEnglishProject(
        `Avatar Project ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithIdentity();

    await avatar.selectKnowledgeBank();

    await avatar.uploadKnowledgeBank();

    await avatar.clickGenerate();

    await avatar.verifyGenerating();
});

test(
'TC_AVATAR_02 : New Avatar + KB + Identity (English)',
async ({ page }) => {

    test.setTimeout(600000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createEnglishProject(
        `Avatar Project ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithIdentity();

    await avatar.selectKnowledgeBank();

    await avatar.uploadKnowledgeBank();

    await avatar.clickCustomize();

    await avatar.createNewAvatar();

    await avatar.fillAvatarDetails();

    await avatar.uploadAvatarVideos();

    await avatar.addVoice();

    await avatar.previewVoice();

    await avatar.createAvatar();

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();

    await avatar.verifyGenerating();
});

test(
'TC_AVATAR_03 : Existing Avatar + KB + Identity (English)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createEnglishProject(
        `Existing Avatar ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithIdentity();

    await avatar.selectKnowledgeBank();

    await avatar.uploadKnowledgeBank();

    await avatar.clickCustomize();

    await expect(
        page.getByText('Select Avatar')
    ).toBeVisible({
        timeout: 120000
    });

    const selectedAvatar =
        page.locator(
            '//img[@alt="doctor"]'
        );

    await expect(selectedAvatar)
        .toBeVisible({
            timeout: 120000
        });

    await selectedAvatar.click({
        force: true
    });

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();

    await avatar.verifyGenerating();
});

//
// ============================================================
// KNOWLEDGE BANK FLOW WITHOUT IDENTITY
// ============================================================
//

test(
'TC_AVATAR_04 : Default Avatar + KB + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createHindiProject(
        `Avatar Hindi ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithoutIdentity();

    await avatar.selectKnowledgeBank();

    await avatar.uploadKnowledgeBank();

    await avatar.clickGenerate();

    await avatar.verifyGenerating();
});

test(
'TC_AVATAR_05 : New Avatar + KB + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(600000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createHindiProject(
        `Avatar Hindi ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithoutIdentity();

    await avatar.selectKnowledgeBank();

    await avatar.uploadKnowledgeBank();

    await avatar.clickCustomize();

    await avatar.createNewAvatar();

    await avatar.fillAvatarDetails();

    await avatar.uploadAvatarVideos();

    await avatar.addVoice();

    await avatar.previewVoice();

    await avatar.createAvatar();

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();

    await avatar.verifyGenerating();
});

test(
'TC_AVATAR_06 : Existing Avatar + KB + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createHindiProject(
        `Existing Avatar ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithoutIdentity();

    await avatar.selectKnowledgeBank();

    await avatar.uploadKnowledgeBank();

    await avatar.clickCustomize();

    const selectedAvatar =
        page.locator(
            '//img[@alt="doctor"]'
        );

    await expect(selectedAvatar)
        .toBeVisible({
            timeout: 120000
        });

    await selectedAvatar.click({
        force: true
    });

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();
    await page.waitForTimeout(3000);

    //await avatar.verifyGenerating();
});

//
// ============================================================
// AI MODEL FLOW WITH IDENTITY
// ============================================================
//

test(
'TC_AVATAR_07 : Default Avatar + AI Model + Identity (English)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createEnglishProject(
        `AI Avatar ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithIdentity();

    await avatar.selectAIModel();

    await avatar.fillAgentInstructions();

    await avatar.clickGenerate();
     await page.waitForTimeout(3000);

   // await avatar.verifyGenerating();
});

test(
'TC_AVATAR_08 : New Avatar + AI Model + Identity (English)',
async ({ page }) => {

    test.setTimeout(600000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createEnglishProject(
        `AI Avatar ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithIdentity();

    await avatar.selectAIModel();

    await avatar.fillAgentInstructions();

    await avatar.clickCustomize();

    await avatar.createNewAvatar();

    await avatar.fillAvatarDetails();

    await avatar.uploadAvatarVideos();

    await avatar.addVoice();

    await avatar.previewVoice();

    await avatar.createAvatar();

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();
 await page.waitForTimeout(3000);
});

test(
'TC_AVATAR_09 : Existing Avatar + AI Model + Identity (English)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createEnglishProject(
        `AI Existing ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithIdentity();

    await avatar.selectAIModel();

    await avatar.fillAgentInstructions();

    await avatar.clickCustomize();

    const selectedAvatar =
        page.locator(
            '//img[@alt="doctor"]'
        );

    await selectedAvatar.click({
        force: true
    });

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();
 await page.waitForTimeout(3000);
});

//
// ============================================================
// AI MODEL FLOW WITHOUT IDENTITY
// ============================================================
//

test(
'TC_AVATAR_10 : Default Avatar + AI Model + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createHindiProject(
        `AI Hindi ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithoutIdentity();

    await avatar.selectAIModel();

    await avatar.clickGenerate();
 await page.waitForTimeout(3000);
});

test(
'TC_AVATAR_11 : New Avatar + AI Model + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(600000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createHindiProject(
        `AI Hindi ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithoutIdentity();

    await avatar.selectAIModel();

    await avatar.clickCustomize();

    await avatar.createNewAvatar();

    await avatar.fillAvatarDetails();

    await avatar.uploadAvatarVideos();

    await avatar.addVoice();

    await avatar.previewVoice();

    await avatar.createAvatar();

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();

        await page.waitForTimeout(3000);
});

test(
'TC_AVATAR_12 : Existing Avatar + AI Model + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const avatar =
        new AvatarActions(page);

    await avatar.openDashboard();

    await avatar.createHindiProject(
        `AI Existing ${Date.now()}`
    );

    await avatar.fillAgentDetailsWithoutIdentity();

    await avatar.selectAIModel();

    await avatar.clickCustomize();

    const selectedAvatar =
        page.locator(
            '//img[@alt="doctor"]'
        );

    await selectedAvatar.click({
        force: true
    });

    await page.waitForTimeout(5000);

    await avatar.clickNext();

    await avatar.clickGenerate();

    await page.waitForTimeout(3000);
});

});