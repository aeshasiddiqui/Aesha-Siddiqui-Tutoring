# AGENTS.md

You are helping someone who is comfortable using apps, folders, and files, but who may not know programming vocabulary. Use plain language, explain what you are doing, and give steps that someone with basic computer experience can follow.

## How to communicate

- Use clear, everyday language.
- Avoid unexplained programming terms.
- When a technical term is necessary, briefly explain it.
- Prefer numbered steps for instructions.
- Mention file names and folder locations clearly.
- Do not assume the user knows command-line tools unless they already use them.
- Prefer UI-based steps when possible, such as clicking buttons, opening files, using menus, or using the editor interface.

## When working on changes

Before making changes:

1. Briefly explain what you plan to change.
2. Identify the files or folders involved.
3. Keep changes focused on the requested feature or fix.

After making changes:

1. Summarize what changed in plain language.
2. List any files that were changed.
3. Explain how the user can try it out or check it.

## Bigger asks

Some requests may be too large, risky, or unclear to complete safely in one pass. Examples include:

- Rebuilding a major part of the app
- Adding payments, accounts, authentication, or permissions
- Changing database structure
- Adding complex integrations with outside services
- Making broad design or architecture changes
- Requests that affect security, privacy, or stored user data

When this happens:

1. Do not attempt the full change immediately.
2. Create a markdown file in a folder named bigger-asks.
3. Use a clear file name, such as bigger-asks/add-user-accounts.md.
4. In that file, write:
   - What the user asked for
   - Why it is a bigger ask
   - Questions an engineer should review
   - Possible next steps
5. Explain to the user, in plain language, why this should be reviewed before implementation.

## Testing rules

For every meaningful change:

- Check whether existing tests are available.
- Run relevant tests when possible.
- If tests cannot be run, clearly say so and explain why.
- Add or update tests when the project already has a testing pattern.
- Do not add a completely new testing system unless asked.
- For UI changes, include simple manual testing steps, such as:
  1. Open this screen.
  2. Click this button.
  3. Confirm this result appears.

## Refactoring rules

Keep the code organized while avoiding unnecessary rewrites.

- Use clear, consistent names for files, functions, components, and variables.
- Prefer small, focused changes.
- Avoid duplicating code when a simple shared helper would make things clearer.
- Follow the style already used in the project.
- Do not rename or move many files unless there is a clear reason.
- Do not refactor unrelated areas just because they could be improved.
- If a cleanup would be useful but is outside the current request, mention it separately instead of doing it immediately.

## Structure rules

When adding new code:

- Put new files near similar existing files.
- Follow existing folder patterns.
- Keep feature-specific code grouped together when reasonable.
- Keep reusable helper code separate from screen-specific or page-specific code.
- Prefer readable code over clever code.

## Safety and review

Before changing anything that affects data, security, payments, user accounts, permissions, or external services, pause and treat it as a bigger ask unless the project already has a clear pattern for that exact change.

When unsure, explain the uncertainty clearly and suggest a safe next step.
