 const { test } =
require('@playwright/test');

const {
    ChatActions
} = require(
    '../actions/chat.actions'
);

test.use({
    storageState: 'auth.json'
});

test.describe(
'Chat Creation Flow',
() => {

//
// --------------------------------------------------
// TC_CHAT_01
// Hindi + Knowledge Bank
// --------------------------------------------------
//

test(
'TC_CHAT_01 : Verify Chat Project Creation Flow(Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const chat =
        new ChatActions(page);

    await chat.openDashboard();

    await chat.clickCreateButton();

    await chat.createChatHindiProject(
        `Chat Project ${Date.now()}`
    );

    await chat.fillChatDetails();

    await chat.selectKnowledgeBank();

    await chat.uploadKnowledgeBank(
        'flam (1).pdf'
    );

    await chat.clickGenerate();

    await chat.verifyGenerating();
});

//
// --------------------------------------------------
// TC_CHAT_02
// English + Knowledge Bank
// --------------------------------------------------
//

test(
'TC_CHAT_02 : Verify Chat Project Creation Flow(English)',
async ({ page }) => {

    test.setTimeout(300000);

    const chat =
        new ChatActions(page);

    await chat.openDashboard();

    await chat.clickCreateButton();

    await chat.createChatEnglishProject(
        `Chat Project ${Date.now()}`
    );

    await chat.fillChatDetails();

    await chat.selectKnowledgeBank();

    await chat.uploadKnowledgeBank(
        'flam (1).pdf'
    );

    await chat.clickGenerate();

    await chat.verifyGenerating();
});

//
// --------------------------------------------------
// TC_CHAT_03
// English + AI Model + Empty Agent Instructions
// --------------------------------------------------
//

test(
'TC_CHAT_03 : Verify Chat Project Creation using AI Model with Empty Instructions(English)',
async ({ page }) => {

    test.setTimeout(300000);

    const chat =
        new ChatActions(page);

    await chat.openDashboard();

    await chat.clickCreateButton();

    await chat.createChatEnglishProject(
        `Chat AI Model ${Date.now()}`
    );

    await chat.fillChatDetails();

    await chat.selectAIModel();

    // No agent instructions added

    await chat.clickGenerate();
    await page.waitForTimeout(3000);

    //await chat.verifyGenerating();
});
//
// --------------------------------------------------
// TC_CHAT_04
// Hindi + AI Model + Empty Agent Instructions
// --------------------------------------------------
//

test(
'TC_CHAT_04 : Verify Chat Project Creation using AI Model with Empty Instructions(Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const chat =
        new ChatActions(page);

    await chat.openDashboard();

    await chat.clickCreateButton();

    await chat.createChatHindiProject(
        `Chat AI Model ${Date.now()}`
    );

    await chat.fillChatDetails();

    await chat.selectAIModel();

    // No agent instructions added

    await chat.clickGenerate();
    await page.waitForTimeout(3000);

    //await chat.verifyGenerating();
});

//
// --------------------------------------------------
// TC_CHAT_05
// English + AI Model + Agent Instructions
// --------------------------------------------------
//

test(
'TC_CHAT_05 : Verify Chat Project Creation using AI Model with Agent Instructions',
async ({ page }) => {

    test.setTimeout(300000);

    const chat =
        new ChatActions(page);

    await chat.openDashboard();

    await chat.clickCreateButton();

    await chat.createChatEnglishProject(
        `Chat AI Instructions ${Date.now()}`
    );

    await chat.fillChatDetails();

    await chat.selectAIModel();

    await chat.fillAgentInstructions();

    await chat.clickGenerate();
    await page.waitForTimeout(3000);

   // await chat.verifyGenerating();
});
//
// --------------------------------------------------
// TC_CHAT_06
// Hindi + AI Model + Agent Instructions
// --------------------------------------------------
//

test(
'TC_CHAT_06 : Verify Chat Project Creation using AI Model with Agent Instructions(Hindi)',
async ({ page }) => {

    test.setTimeout(300000);

    const chat =
        new ChatActions(page);

    await chat.openDashboard();

    await chat.clickCreateButton();

    await chat.createChatHindiProject(
        `Chat AI Instructions ${Date.now()}`
    );

    await chat.fillChatDetails();

    await chat.selectAIModel();

    await chat.fillAgentInstructions();

    await chat.clickGenerate();
    await page.waitForTimeout(3000);

   // await chat.verifyGenerating();
});
});