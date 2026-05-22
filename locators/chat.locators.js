module.exports = {

    createButton:
        'button:has-text("Create")',

    projectNameInput:
        'input[placeholder="Enter project name"]',

    chatOption:
        'button:has-text("Chat")',

    createProjectButton:
        'form button[type="submit"]',

    agentNameInput:
        'input[placeholder="Enter Agent Name"]',

    generateButton:
        'button:has-text("Generate")',

    proceedButton:
        'button:has-text("Proceed")',

    languageDropdown:
        'button[role="combobox"]',

    // Knowledge Source Dropdown
    knowledgeSourceDropdown:
        '(//button[@role="combobox"])[2]',

    // Dropdown Options
    knowledgeBankOption:
        'text=Knowledge Bank',

    aiModelOption:
        'text=AI Model',

    // Agent Instructions Textarea
    agentInstructionsTextarea:
        'textarea[placeholder*="Specify what your agent should"]',

    // Upload File
    knowledgeBankUpload:
        'input[type="file"]'
};