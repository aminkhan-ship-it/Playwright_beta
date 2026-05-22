const { expect } =
require('@playwright/test');

const locators =
require('../locators/avatar.locators');

const filePaths =
require('../utils/filePaths');

class AvatarActions {

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
            timeout: 60000
        });
    }

    async createEnglishProject(projectName) {

        await this.page.locator(
            locators.createButton
        ).first().click();

        await this.page.locator(
            locators.projectNameInput
        ).fill(projectName);

        await this.page.getByRole('button', {
            name: /Avatar/i
        }).click();
         // Open Language Dropdown
            await this.page.locator(
                locators.languageDropdown
            ).click();
           // Select English
   await this.page.getByRole('option', {
    name: 'English'
}).click();

await this.page.locator(
    locators.createProjectButton
).click();
    
   }
      async createHindiProject(projectName) {

        await this.page.locator(
            locators.createButton
        ).first().click();

        await this.page.locator(
            locators.projectNameInput
        ).fill(projectName);

        await this.page.getByRole('button', {
            name: /Avatar/i
        }).click();
         // Open Language Dropdown
            await this.page.locator(
                locators.languageDropdown
            ).click();
           // Select Hindi
   await this.page.getByRole('option', {
    name: 'Hindi'
}).click();

await this.page.locator(
    locators.createProjectButton
).click();
    
   }


    async fillAgentDetails() {

    await this.page.locator(
        locators.agentNameInput
    ).fill('Amin Khan');

    await this.page.getByRole('textbox', {
        name: /What does your agent do/i
    }).fill(
        'Amin Khan AI Assistant'
    );
}

  async uploadKnowledgeBank() {

    await this.page.setInputFiles(
        locators.knowledgeBankInput,
        filePaths.pdfFile
    );

    // Wait for upload to start
    await expect(
        this.page.getByText(/Uploading/i)
    ).toBeVisible({
        timeout: 60000
    });

    // Wait until upload disappears
    await expect(
        this.page.getByText(/Uploading/i)
    ).not.toBeVisible({
        timeout: 300000
    });

    // Wait for Customize button enabled
    const customizeButton =
        this.page.getByRole('button', {
            name: 'Customize',
            exact: true
        });

    await expect(customizeButton)
        .toBeEnabled({
            timeout: 300000
        });
}

 async clickCustomize() {

    const customizeButton =
        this.page.getByRole('button', {
            name: 'Customize',
            exact: true
        });

    await customizeButton.click({
        force: true
    });

    await expect(
        this.page.getByText('Select Avatar')
    ).toBeVisible({
        timeout: 120000
    });
}

async createNewAvatar() {

    // Wait for avatar page
    await expect(
        this.page.getByText('Select Avatar')
    ).toBeVisible({
        timeout: 120000
    });

    const createAvatarCard =
        this.page.locator(
            locators.createNewAvatarButton
        );

    await createAvatarCard.waitFor({
        state: 'visible',
        timeout: 120000
    });

    await createAvatarCard.scrollIntoViewIfNeeded();

    await this.page.waitForTimeout(2000);

    await createAvatarCard.click({
        force: true
    });

    // Wait for drawer
    await expect(
        this.page.locator(
            locators.avatarNameInput
        )
    ).toBeVisible({
        timeout: 120000
    });
}

   async fillAvatarDetails() {

    const avatarName =
        `Amin${Date.now()}`;

    await this.page.locator(
        locators.avatarNameInput
    ).fill(avatarName);

    const fullBodyRadio =
        this.page.getByRole('radio', {
            name: /Half Body/i
        });

    await expect(fullBodyRadio)
        .toBeVisible({
            timeout: 60000
        });

    await fullBodyRadio.check();
}

    async uploadAvatarVideos() {

        const fileInputs =
            this.page.locator(
                'input[type="file"]'
            );

        await fileInputs
            .nth(0)
            .setInputFiles(
                filePaths.voiceVideo
            );

        await fileInputs
            .nth(1)
            .setInputFiles(
                filePaths.silentVideo
            );
    }

    async addVoice() {

        await this.page.locator(
            locators.addNewVoiceButton
        ).click();

        const voiceLabel =
            `Voice${Date.now()}`;

        await this.page.locator(
            locators.voiceLabelInput
        ).fill(voiceLabel);

        await this.page.locator(
            locators.maleRadio
        ).click();

        const fileInputs =
            this.page.locator(
                'input[type="file"]'
            );

        await fileInputs
            .last()
            .setInputFiles(
                filePaths.audioFile
            );
    }

    async previewVoice() {

        const previewButton =
            this.page.getByRole('button', {
                name: /Preview Voice/i
            });

        await expect(previewButton)
            .toBeEnabled({
                timeout: 120000
            });

        await previewButton.click();
    }

    async createAvatar() {

        const createButton =
            this.page.getByRole('button', {
                name: /^Create$/
            }).last();

        await expect(createButton)
            .toBeEnabled({
                timeout: 300000
            });

        await createButton.click();
    }

    async clickNext() {

        const nextButton =
            this.page.locator(
                locators.nextButton
            );

        await expect(nextButton)
            .toBeVisible({
                timeout: 120000
            });

        await nextButton.click({
            force: true
        });
    }

  async clickGenerate() {

    const generateButton =
        this.page.locator(
            locators.generateButton
        );

    await expect(generateButton)
        .toBeEnabled({
            timeout: 120000
        });

    await generateButton.scrollIntoViewIfNeeded();

    await generateButton.click({
        force: true
    });

    // Handle Proceed popup if present
    const proceedButton =
        this.page.getByRole('button', {
            name: /Proceed/i
        });

    if (await proceedButton.isVisible()) {

        await expect(proceedButton)
            .toBeEnabled({
                timeout: 60000
            });

        await proceedButton.click({
            force: true
        });
    }

    // Wait for navigation
    await this.page.waitForLoadState('networkidle');
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









    // ----------------------------------------------------
// FILL DETAILS WITH IDENTITY
// ----------------------------------------------------

async fillAgentDetailsWithIdentity() {

    // Agent Name
    await this.page.locator(
        locators.agentNameInput
    ).fill('Amin Khan');

    // Agent Identity
    await this.page.locator(
        locators.agentIdentityTextarea
    ).fill(
        'Amin Khan AI Assistant'
    );
}

// ----------------------------------------------------
// FILL DETAILS WITHOUT IDENTITY
// ----------------------------------------------------

async fillAgentDetailsWithoutIdentity() {

    // Agent Name
    await this.page.locator(
        locators.agentNameInput
    ).fill('Amin Khan');

    // Keep identity empty
}

// ----------------------------------------------------
// SELECT KNOWLEDGE BANK
// ----------------------------------------------------

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

// ----------------------------------------------------
// SELECT AI MODEL
// ----------------------------------------------------

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

// ----------------------------------------------------
// FILL AGENT INSTRUCTIONS
// ----------------------------------------------------

async fillAgentInstructions() {

    await this.page.locator(
        'textarea'
    ).last().fill(
        'Answer only AI and automation related questions.'
    );
}
   
}

module.exports = {
    AvatarActions
};