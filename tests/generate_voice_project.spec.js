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

//
// ============================================================
// KNOWLEDGE BANK FLOW 
// ============================================================
//

test(
'TC_VOICE_01 : Default Voice + KB  (English)',
async ({ page }) => {

    test.setTimeout(300000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceEnglishProject(
        `Voice Project ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithIdentity();

    await voice.selectKnowledgeBank();

    await voice.uploadKnowledgeBank();

    await voice.clickGenerate();

    await voice.clickProceed();

    await voice.verifyGenerating();
});

test(
'TC_VOICE_02 : New Voice + KB  (English)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceEnglishProject(
        `Voice Project ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithIdentity();

    await voice.selectKnowledgeBank();

    await voice.uploadKnowledgeBank();

    await voice.clickCustomize();

    await voice.createNewVoice();

    await voice.clickGenerate();

    await voice.verifyGenerating();
});

test(
'TC_VOICE_03 : Existing Voice + KB (English)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceEnglishProject(
        `Voice Existing ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithIdentity();

    await voice.selectKnowledgeBank();

    await voice.uploadKnowledgeBank();

    await voice.clickCustomize();

    await voice.selectExistingVoice();

    await voice.clickGenerateFinal();
        await voice.page.waitForTimeout(3000);
});

//
// ============================================================
// KNOWLEDGE BANK FLOW WITHOUT IDENTITY
// ============================================================
//

test(
'TC_VOICE_04 : Default Voice + KB  (Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceHindiProject(
        `Voice Project ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithoutIdentity();

    await voice.selectKnowledgeBank();

    await voice.uploadKnowledgeBank();

    await voice.clickGenerate();

    await voice.clickProceed();

    await voice.verifyGenerating();
});

test(
'TC_VOICE_05 : New Voice + KB  (Hindi)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceHindiProject(
        `Voice Project ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithoutIdentity();

    await voice.selectKnowledgeBank();

    await voice.uploadKnowledgeBank();

    await voice.clickCustomize();

    await voice.createNewVoice();

    await voice.clickGenerate();

    await voice.verifyGenerating();
});

test(
'TC_VOICE_06 : Existing Voice + KB  (Hindi)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceHindiProject(
        `Voice Existing ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithoutIdentity();

    await voice.selectKnowledgeBank();

    await voice.uploadKnowledgeBank();

    await voice.clickCustomize();

    await voice.selectExistingVoice();

    await voice.clickGenerateFinal();
        await voice.page.waitForTimeout(3000);
});

//
// ============================================================
// AI MODEL FLOW WITH IDENTITY
// ============================================================
//

test(
'TC_VOICE_07 : Default Voice + AI Model + Identity (English)',
async ({ page }) => {

    test.setTimeout(300000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceEnglishProject(
        `AI Voice ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithIdentity();

    await voice.selectAIModel();

    await voice.fillAgentInstructions();

    await voice.clickGenerate();

    
    await voice.clickProceed();
    await voice.page.waitForTimeout(3000);
    
});

test(
'TC_VOICE_08 : New Voice + AI Model + Identity (English)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceEnglishProject(
        `AI Voice ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithIdentity();

    await voice.selectAIModel();

    await voice.fillAgentInstructions();

    await voice.clickCustomize();

    await voice.createNewVoice();

    await voice.clickGenerate();
    await voice.page.waitForTimeout(3000);

});

test(
'TC_VOICE_09 : Existing Voice + AI Model + Identity (English)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceEnglishProject(
        `AI Existing ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithIdentity();

    await voice.selectAIModel();

    await voice.fillAgentInstructions();

    await voice.clickCustomize();

    await voice.selectExistingVoice();

    await voice.clickGenerateFinalAI();
        await voice.page.waitForTimeout(3000);
});

//
// ============================================================
// AI MODEL FLOW WITHOUT IDENTITY
// ============================================================
//

test(
'TC_VOICE_10 : Default Voice + AI Model + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceHindiProject(
        `AI Voice ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithoutIdentity();

    await voice.selectAIModel();

    await voice.clickGenerate();

    await voice.clickProceed();
    await voice.page.waitForTimeout(3000);


  
});

test(
'TC_VOICE_11 : New Voice + AI Model + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceHindiProject(
        `AI Voice ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithoutIdentity();

    await voice.selectAIModel();

    await voice.clickCustomize();

    await voice.createNewVoice();

    await voice.clickGenerate();
        await voice.page.waitForTimeout(3000);


});

test(
'TC_VOICE_12 : Existing Voice + AI Model + No Identity (Hindi)',
async ({ page }) => {

    test.setTimeout(600000);

    const voice =
        new VoiceActions(page);

    await voice.openDashboard();

    await voice.clickCreateButton();

    await voice.createVoiceHindiProject(
        `AI Existing ${Date.now()}`
    );

    await voice.fillVoiceDetailsWithoutIdentity();

    await voice.selectAIModel();

    await voice.clickCustomize();

    await voice.selectExistingVoice();

    await voice.clickGenerateFinalAI();
        await voice.page.waitForTimeout(3000);
});

});