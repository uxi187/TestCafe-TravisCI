import { Selector, ClientFunction } from 'testcafe';
import * as user from '../__constants__/users'
import { iframe1 } from '../__constants__/elements'
import { userPedro, userKirsten } from '../roles'
import { dragAndDrop } from '../helpers'
import { apiMoveIssue, apiBroadcastActionWebsocket } from '../requests/api_commands'
import { apiCreateJiraProject, apiDeleteJiraProject } from '../requests/api_jira_commands'

const easyKadWelcomeUrl = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/board-list?ac.projectId=10012';
const dashboardURL = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/kanban-board?ac.did=6022f3567ec33808318d3141&ac.projectId=10012';
const jiraProjectKey = 'MS0005';
const jiraProjectName = 'Milan TestCafe5';

const JIRA_WELCOME_URL = 'https://id.atlassian.com/login?continue=https%3A%2F%2Feasykad-dev.atlassian.net%2Flogin%3FredirectCount%3D1%26application%3Djira&application=jira';

const cookieCleaner = ClientFunction(() => {
    return document.cookie.split(";").reduce(function (acc, cookie) {
        const eqPos = cookie.indexOf("=");
        const cleanCookie = `${cookie.substr(0, eqPos)}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        return `${acc}${cleanCookie}`;
    }, "");
})

fixtures
    `Browser windows`
    .page(JIRA_WELCOME_URL);

test
    ('2 Users test', async t => {
        // Test code
        const draggable = Selector('[data-test-id="kad-card-summary"]').withText('SUMMARY 44658');
        //const draggable = Selector('.smooth-dnd-draggable-wrapper').find('[data-id="6022f4f0721df2d8a1f50ff8"]')
        const droppable = Selector('.body-template[id="6022f4ecd1efce782edc52d6"] ');

        const jiraUserName = Selector('input[id="username"]');
        const jiraPassword = Selector('input[id="password"]');
        const submit = Selector('button[id="login-submit"]');
        const postLoginSelector = Selector('a[href^="/browse/"]');

        const initialWindow = await t.getCurrentWindow();
            //.maximizeWindow();
        const window2 = await t.openWindow(JIRA_WELCOME_URL);

        await t.switchToWindow(initialWindow);
        await t
            .typeText(jiraUserName, user.PEDRO.username)
            .click(submit)
            .typeText(jiraPassword, user.PEDRO.password)
            .click(submit)
            .expect(postLoginSelector.visible).ok()

        await t.switchToWindow(window2);
        await t
            .typeText(jiraUserName, user.KIRSTEN.username)
            .click(submit)
            .typeText(jiraPassword, user.KIRSTEN.password)
            .click(submit)
            .expect(postLoginSelector.visible).ok()


        await t
            //.expect(droppable.visible).ok()
            .expect(draggable.visible).ok();

        await t.wait(10000)
    });