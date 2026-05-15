const { expect } = require('@playwright/test');

class VoiceActions {

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

    async createVoiceProject(projectName) {

        // Wait for modal
        await expect(
            this.page.getByText(
                'Create New Project'
            )
        ).toBeVisible({
            timeout: 60000
        });

        // Fill project name
        await this.page.locator(
            'input[placeholder="Enter project name"]'
        ).fill(projectName);

        // Select Voice
        await this.page.getByRole('button', {
            name: /^Voice$/
        }).click();

        // Click Create
        const createProjectButton =
            this.page.locator(
                'form button[type="submit"]'
            );

        await expect(createProjectButton)
            .toBeEnabled({
                timeout: 60000
            });

        await createProjectButton.click();
    }

  async fillVoiceDetails() {

    // Agent Name
    await this.page.locator(
        'input[placeholder="Enter Agent Name"]'
    ).fill('Amin Khan');

    // Agent Identity
    await this.page.locator(
        'textarea'
    ).first().fill(
        'I am Amin Khan AI Voice Assistant'
    );

    // Welcome Message
    await this.page.locator(
        'textarea'
    ).last().fill(
        'Hey there! I am here to help you today.'
    );
}

   async uploadKnowledgeBank() {

    await this.page.locator(
        'input[type="file"]'
    ).setInputFiles(
        '/Users/mohammedaminkhanj/Downloads/flam (1).pdf'
    );
}

   async clickGenerate() {

    const generateButton =
        this.page.getByRole('button', {
            name: /^Generate$/
        });

    // Wait until enabled
    await expect(generateButton)
        .toBeEnabled({
            timeout: 120000
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
                timeout: 120000
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
    async clickCustomize() {

    const customizeButton =
        this.page.getByRole('button', {
            name: 'Customize'
        });

    await expect(customizeButton)
        .toBeEnabled({
            timeout: 120000
        });

    await customizeButton.click();
}
async createProject(projectName) {

    // Click Create Button
    await this.page.getByRole('button', {
        name: 'Create'
    }).first().click();

    // Wait for modal
    await this.page.waitForTimeout(2000);

    // Enter Project Name
    await this.page.locator(
        'input[placeholder="Enter project name"]'
    ).fill(projectName);

    // Select Voice
    await this.page.getByRole('button', {
        name: 'Voice'
    }).click();

    // Click Create
    await this.page.locator(
        'form button[type="submit"]'
    ).click();
}
async createNewVoice() {

    // Wait for customize page
    await expect(
        this.page.getByText('Select Voice')
    ).toBeVisible({
        timeout: 120000
    });

    // Click Create New Voice
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

    // Select Male
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

    // Wait for audio processing
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

    // Wait for Create button enabled
    const createButton =
        this.page.getByRole('button', {
            name: /^Create$/
        }).last();

    await expect(createButton)
        .toBeEnabled({
            timeout: 300000
        });

    // Click Create
    await createButton.click();

    // Wait back to Select Voice page
    await expect(
        this.page.getByText('Select Voice')
    ).toBeVisible({
        timeout: 300000
    });
}
}

module.exports = {
    VoiceActions
};