Create a reusable prompt file
Prompt files encode common tasks as slash commands you can invoke in chat. Create one for a task you perform regularly.

In the Chat view, select Configure Chat (gear icon) > Prompt Files, and then select New prompt file.

Select .github/prompts/ to store the prompt file in your project.

Enter a file name, such as create-component.

Add the following content to the file:

Markdown

---
description: Scaffold a new React component with tests
agent: agent
tools: ['editFiles', 'createFile']
---
Create a new React component based on the user's description.

For each component, generate:
1. The component file in `src/components/`
2. A test file in `src/components/__tests__/`

Follow the conventions in [React guidelines](../instructions/react.instructions.md).
Save the file.

Verify it works: In the Chat view, type /create-component a data table with sorting and filtering and press Enter. Copilot should scaffold the component and test file according to your conventions.
