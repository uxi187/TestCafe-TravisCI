
export const config = {
    BASE_URL:        `${Cypress.env("jiraAPI")}`,
    CLOUD_BASE_URL:  `${Cypress.env("jiraCloud")}`,
    CLOUD_LOGIN_URL: `${Cypress.env("jiraLoginURL")}`,
    JIRA_CLIENT_ID:  `${Cypress.env("jiraClientId")}`,
    JIRA_USER_ID:    `${Cypress.env("jiraUSerId")}`,
    JIRA_PROJECT_ID:  `${Cypress.env("jiraProjectId")}`,
    JIRA_WELCOME_URL: `${Cypress.env("jiraWelcomeURL")}`,
    JIRA_SHARED_SECRET:      `${Cypress.env("jiraSharedSecret")}`
}