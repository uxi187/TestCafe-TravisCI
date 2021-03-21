import minimist from 'minimist';

// get the options --env=xxx --user=yyy from the command line
export function setEnvironment() {
    const args = minimist(process.argv.slice(2));
    switch (args.env) {
        case 'dev':
            return devEnv;
        case 'test':
            return testEnv;
        case 'prod':
            // code block
            break;
        default:
            // code block
            throw new Error('ERROR: Specified environment does not exist!');
    }
}

const devEnv = {
    BASE_URL: 'https://easykad-dev.atlassian.net',
    JIRA_API: "https://dev.easykad.net",
    JIRA_WELCOME_URL: "/plugins/servlet/ac/easykad/board-list?ac.projectId=10012",
    JIRA_CLIENT_ID: "ef042478-e10f-386b-9931-21cfeeb1f9d4",
    JIRA_PROJECT_ID: "10012",
    JIRA_LOGIN_URL: "https://id.atlassian.com/login?continue=https%3A%2F%2Feasykad-dev.atlassian.net%2Flogin%3FredirectCount%3D1%26application%3Djira&application=jira",
    JIRA_USERNAME: "Jira-deploy@becciwatson.com.au",
    JIRA_USER_ID: "5e83b8810716a60c1ba30dfe",
    JIRA_PASSWORD: process.env.JIRA_PASSWORD,
    JIRA_USER_TOKEN: process.env.JIRA_USER_TOKEN,
    JIRA_SHARED_SECRET: process.env.JIRA_SHARED_SECRET_DEV
}

const testEnv = {
    BASE_URL: 'https://easykad-test.atlassian.net',
    JIRA_API: "https://test.easykad.net",
    JIRA_WELCOME_URL: "/plugins/servlet/ac/easykad/board-list?ac.projectId=10003",
    JIRA_CLIENT_ID: "e3a32608-f154-3801-99e4-00347c58f2cb",
    JIRA_PROJECT_ID: "10003",
    JIRA_LOGIN_URL: "https://id.atlassian.com/login?continue=https%3A%2F%2Feasykad-test.atlassian.net%2Flogin%3FredirectCount%3D1%26application%3Djira&application=jira",
    JIRA_USERNAME: "Jira-deploy@becciwatson.com.au",
    JIRA_USER_ID: "5e83b8810716a60c1ba30dfe",
    JIRA_PASSWORD: process.env.NPM_TOKEN,
    JIRA_USER_TOKEN: process.env.JIRA_USER_TOKEN,
    JIRA_SHARED_SECRET: process.env.JIRA_SHARED_SECRET_TEST
}