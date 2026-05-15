const { test } =
require('@playwright/test');

const {
    VoiceActions
} = require(
    '../actions/voice.actions'
);

test.use({
    storageState: 'auth.json'
});

test.describe(
'Voice Creation Flow',
() => {

test(
'TC_VOICE_01 : Verify Voice Project Creation Flow',
async ({ page }) => {

    test.setTimeout(300000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceProject(
        `Voice Project ${Date.now()}`
    );

    await voice.fillVoiceDetails();

    await voice.uploadKnowledgeBank();

    await voice.clickGenerate();

    await voice.clickProceed();

    await voice.verifyGenerating();
});
test(
'TC_VOICE_02 : Create project with new voice',
async ({ page }) => {

    test.setTimeout(900000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.createProject(
        `Voice Project ${Date.now()}`
    );

    await voice.fillVoiceDetails();

    await voice.uploadKnowledgeBank();

    await voice.clickCustomize();

    await voice.createNewVoice();

    await voice.clickGenerate();

    await voice.clickProceed();

    await voice.verifyGenerating();
});
});