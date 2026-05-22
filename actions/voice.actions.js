const { expect } = require('@playwright/test');

const locators =
require('../locators/voice.locators');

class VoiceActions {

    constructor(page) {
        this.page = page;
    }

    // ------------------------------------------------------------
    // OPEN DASHBOARD
    // ------------------------------------------------------------

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

    // ------------------------------------------------------------
    // CLICK CREATE BUTTON
    // ------------------------------------------------------------

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
    // CREATE ENGLISH VOICE PROJECT
    // ------------------------------------------------------------

    async createVoiceEnglishProject(projectName) {

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

        // Select Voice
        await this.page.getByRole('button', {
            name: /^Voice$/
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
    // CREATE HINDI VOICE PROJECT
    // ------------------------------------------------------------

    async createVoiceHindiProject(projectName) {

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

        // Select Voice
        await this.page.getByRole('button', {
            name: /^Voice$/
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
    // FILL DETAILS WITH IDENTITY
    // ------------------------------------------------------------

    async fillVoiceDetailsWithIdentity() {

        // Agent Name
        await this.page.locator(
            locators.agentNameInput
        ).fill(
            'Amin Khan'
        );

        // Agent Identity
        await this.page.locator(
            locators.agentIdentityTextarea
        ).fill(
            'I am Amin Khan AI Voice Assistant'
        );

        // Welcome Message
        await this.page.locator(
            locators.welcomeMessageTextarea
        ).fill(
            'Hey there! I am here to help you today.'
        );
    }

    // ------------------------------------------------------------
    // FILL DETAILS WITHOUT IDENTITY
    // ------------------------------------------------------------

    async fillVoiceDetailsWithoutIdentity() {

        // Agent Name
        await this.page.locator(
            locators.agentNameInput
        ).fill(
            'Amin Khan'
        );

        // Welcome Message
        await this.page.locator(
            locators.welcomeMessageTextarea
        ).fill(
            'Hey there! I am here to help you today.'
        );
    }

    // ------------------------------------------------------------
    // SELECT KNOWLEDGE BANK
    // ------------------------------------------------------------

    async selectKnowledgeBank() {

    // Open dropdown
    await this.page.locator(
        'button[role="combobox"]'
    ).nth(1).click();

    // Select Knowledge Bank
    await this.page.getByText(
        'Knowledge Bank',
        { exact: true }
    ).last().click();
}

    // ------------------------------------------------------------
    // SELECT AI MODEL
    // ------------------------------------------------------------

 async selectAIModel() {

    // Open dropdown
    await this.page.locator(
        'button[role="combobox"]'
    ).nth(1).click();

    // Select AI Model
    await this.page.getByText(
        'AI Model',
        { exact: true }
    ).last().click();
}

    // ------------------------------------------------------------
    // FILL AGENT INSTRUCTIONS
    // ------------------------------------------------------------

    async fillAgentInstructions() {

        await this.page.locator(
            locators.agentInstructionTextarea
        ).fill(
            'Answer only AI and automation related questions.'
        );
    }

    // ------------------------------------------------------------
    // UPLOAD KNOWLEDGE BANK
    // ------------------------------------------------------------

    async uploadKnowledgeBank() {

        const fileInput =
            this.page.locator(
                locators.knowledgeBankUpload
            ).last();

        await fileInput.setInputFiles(
            '/Users/mohammedaminkhanj/Downloads/flam (1).pdf'
        );

        // Wait until Customize button enabled
        await expect(
            this.page.getByRole('button', {
                name: /^Customize$/,
                exact: true
            })
        ).toBeEnabled({
            timeout: 120000
        });
    }

    // ------------------------------------------------------------
    // CLICK GENERATE
    // ------------------------------------------------------------

    async clickGenerate() {

        const generateButton =
            this.page.getByRole('button', {
                name: /^Generate$/
            });

        await expect(generateButton)
            .toBeEnabled({
                timeout: 120000
            });

        await generateButton.click();
    }

    // ------------------------------------------------------------
    // CLICK PROCEED
    // ------------------------------------------------------------

    async clickProceed() {

        const proceedButton =
            this.page.getByRole('button', {
                name: /^Proceed$/
            });

        await expect(proceedButton)
            .toBeVisible({
                timeout: 120000
            });

        await proceedButton.click();
    }

    // ------------------------------------------------------------
    // VERIFY GENERATING
    // ------------------------------------------------------------

    async verifyGenerating() {

        await expect(
            this.page.getByText(
                /Generating your project/i
            )
        ).toBeVisible({
            timeout: 300000
        });
    }

    // ------------------------------------------------------------
    // CLICK CUSTOMIZE
    // ------------------------------------------------------------

    async clickCustomize() {

        const customizeButton =
            this.page.getByRole('button', {
                name: 'Customize',
                exact: true
            });

        await expect(customizeButton)
            .toBeVisible({
                timeout: 300000
            });

        await expect(customizeButton)
            .toBeEnabled({
                timeout: 300000
            });

        await customizeButton
            .scrollIntoViewIfNeeded();

        await this.page.waitForTimeout(3000);

        await customizeButton.click({
            force: true
        });

        await expect(
            this.page.getByText(
                'Select Voice'
            )
        ).toBeVisible({
            timeout: 300000
        });
    }

    // ------------------------------------------------------------
    // CREATE NEW VOICE
    // ------------------------------------------------------------

    async createNewVoice() {

        await expect(
            this.page.getByText('Select Voice')
        ).toBeVisible({
            timeout: 120000
        });

        // Create New Voice
        await this.page.locator(
            'text=Create New Voice'
        ).click();

        // Wait for drawer
        await expect(
            this.page.getByText(
                'Create Your Voice Clone'
            )
        ).toBeVisible({
            timeout: 120000
        });

        // Voice Label
        await this.page.locator(
            'input[placeholder="Enter voice label"]'
        ).fill(
            `Voice${Date.now()}`
        );

        // Male
        await this.page.locator(
            '#male'
        ).click();

        // Upload Audio
        const fileInput =
            this.page.locator(
                'input[type="file"]'
            ).first();

        await fileInput.setInputFiles(
            '/Users/mohammedaminkhanj/Downloads/Audio (1).mp3'
        );

        // Wait Audio Output
        await expect(
            this.page.getByText(
                /Audio Output/i
            )
        ).toBeVisible({
            timeout: 300000
        });

        // Preview Voice
        const previewButton =
            this.page.getByRole('button', {
                name: /Preview Voice/i
            });

        await expect(previewButton)
            .toBeEnabled({
                timeout: 300000
            });

        await previewButton.click();

        // Create Button
        const createButton =
            this.page.getByRole('button', {
                name: /^Create$/
            }).last();

        await expect(createButton)
            .toBeEnabled({
                timeout: 300000
            });

        await createButton.click();

        // Back to Select Voice
        await expect(
            this.page.getByText('Select Voice')
        ).toBeVisible({
            timeout: 300000
        });
    }

    // ------------------------------------------------------------
    // SELECT EXISTING VOICE
    // ------------------------------------------------------------

    async selectExistingVoice() {

        await expect(
            this.page.getByText('Select Voice')
        ).toBeVisible({
            timeout: 300000
        });

        await this.page.waitForTimeout(5000);

        const existingVoiceCard =
            this.page.locator(
                'div.w-\\[212px\\].h-\\[212px\\].relative.aspect-square'
            ).first();

        await expect(existingVoiceCard)
            .toBeVisible({
                timeout: 300000
            });

        await existingVoiceCard
            .scrollIntoViewIfNeeded();

        await existingVoiceCard.click();

        await this.page.waitForTimeout(3000);
    }

    // ------------------------------------------------------------
    // FINAL GENERATE
    // ------------------------------------------------------------

    async clickGenerateFinal() {

        const generateButton =
            this.page.getByRole('button', {
                name: 'Generate',
                exact: true
            });

        await expect(generateButton)
            .toBeEnabled({
                timeout: 300000
            });

        await generateButton.click();

        await expect(
            this.page.getByText(
                'Generating your project'
            )
        ).toBeVisible({
            timeout: 300000
        });
    }
    async clickGenerateFinalAI() {

        const generateButton =
            this.page.getByRole('button', {
                name: 'Generate',
                exact: true
            });

        await expect(generateButton)
            .toBeEnabled({
                timeout: 300000
            });

        await generateButton.click();

    }
}

module.exports = {
    VoiceActions
};