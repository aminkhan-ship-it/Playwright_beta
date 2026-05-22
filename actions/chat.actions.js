const { expect } = require('@playwright/test');

const locators =
require('../locators/chat.locators');

class ChatActions {

    constructor(page) {
        this.page = page;
    }

    async openDashboard() {

        await this.page.goto(
            'https://flam-avatar-qa-dash.vercel.app/dashboard/home',
            {
                waitUntil: 'networkidle'
            }
        );

        await expect(
            this.page.getByRole('heading', {
                name: /Start Building Your AI Character/i
            })
        ).toBeVisible({
            timeout: 120000
        });
    }

    async clickCreateButton() {

        const createButton =
            this.page.getByRole('button', {
                name: 'Create'
            }).first();

        await expect(createButton)
            .toBeVisible({
                timeout: 60000
            });

        await createButton.click();
    }

    // ------------------------------------------------------------
    // ENGLISH PROJECT
    // ------------------------------------------------------------

    async createChatEnglishProject(projectName) {

        await expect(
            this.page.getByText(
                'Create New Project'
            )
        ).toBeVisible({
            timeout: 60000
        });

        // Project Name
        await this.page.locator(
            locators.projectNameInput
        ).fill(projectName);

        // Select Chat
        await this.page.getByRole('button', {
            name: /^Chat$/
        }).click();

        // Language Dropdown
        await this.page.locator(
            locators.languageDropdown
        ).click();

        // Select English
        await this.page.getByRole('option', {
            name: 'English'
        }).click();

        // Create Project
        const createProjectButton =
            this.page.locator(
                locators.createProjectButton
            );

        await expect(createProjectButton)
            .toBeEnabled({
                timeout: 60000
            });

        await createProjectButton.click();
    }

    // ------------------------------------------------------------
    // HINDI PROJECT
    // ------------------------------------------------------------

    async createChatHindiProject(projectName) {

        await expect(
            this.page.getByText(
                'Create New Project'
            )
        ).toBeVisible({
            timeout: 60000
        });

        // Project Name
        await this.page.locator(
            locators.projectNameInput
        ).fill(projectName);

        // Select Chat
        await this.page.getByRole('button', {
            name: /^Chat$/
        }).click();

        // Language Dropdown
        await this.page.locator(
            locators.languageDropdown
        ).click();

        // Select Hindi
        await this.page.getByRole('option', {
            name: 'Hindi'
        }).click();

        // Create Project
        const createProjectButton =
            this.page.locator(
                locators.createProjectButton
            );

        await expect(createProjectButton)
            .toBeEnabled({
                timeout: 60000
            });

        await createProjectButton.click();
    }

    // ------------------------------------------------------------
    // FILL DETAILS
    // ------------------------------------------------------------

    async fillChatDetails() {

        // Agent Name
        await this.page.locator(
            locators.agentNameInput
        ).fill('Amin Khan');

        // Agent Identity
        await this.page.locator(
            'textarea'
        ).first().fill(
            'I am Amin Khan AI Chat Assistant'
        );
    }

    // ------------------------------------------------------------
    // KNOWLEDGE SOURCE
    // ------------------------------------------------------------

    async selectKnowledgeBank() {

        await this.page.locator(
            locators.knowledgeSourceDropdown
        ).click();

        await this.page.locator(
            locators.knowledgeBankOption
        ).last().click();
    }

    async selectAIModel() {

        await this.page.locator(
            locators.knowledgeSourceDropdown
        ).click();

        await this.page.locator(
            locators.aiModelOption
        ).last().click();
    }

    // ------------------------------------------------------------
    // AGENT INSTRUCTIONS
    // ------------------------------------------------------------

    async fillAgentInstructions() {

        await this.page.locator(
            locators.agentInstructionsTextarea
        ).fill(
            'Answer only AI and automation related questions.'
        );
    }

    // ------------------------------------------------------------
    // FILE UPLOAD
    // ------------------------------------------------------------

    async uploadKnowledgeBank(fileName = 'flam (1).pdf') {

        await this.page.locator(
            locators.knowledgeBankUpload
        ).setInputFiles(
            `/Users/mohammedaminkhanj/Downloads/${fileName}`
        );
    }

    // ------------------------------------------------------------
    // GENERATE
    // ------------------------------------------------------------

    async clickGenerate() {

        const generateButton =
            this.page.getByRole('button', {
                name: /^Generate$/
            });

        await expect(generateButton)
            .toBeEnabled({
                timeout: 300000
            });

        await generateButton.click();
    }

    async clickProceed() {

        const proceedButton =
            this.page.getByRole('button', {
                name: /^Proceed$/
            });

        await expect(proceedButton)
            .toBeVisible({
                timeout: 300000
            });

        await proceedButton.click();
    }

    async verifyGenerating() {

        await expect(
            this.page.getByText(
                /Generating your project/i
            )
        ).toBeVisible({
            timeout: 300000
        });
    }
}

module.exports = {
    ChatActions
};