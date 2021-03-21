import { Selector } from 'testcafe';
import * as user from '../__constants__/users'
import { iframe1 } from '../__constants__/elements'
import {setEnvironment} from '../environments'
const env = setEnvironment();
console.log(env)

fixture `Getting Started`
    .page `${env.JIRA_LOGIN_URL}`;

test('My first test', async t => {
    // Test code
    const jiraUserName = Selector('input[id="username"]');
    const jiraPassword = Selector('input[id="password"]');
    const submit = Selector('button[id="login-submit"]');
    const postLoginSelector = Selector('a[href^="/browse/"]');
    const kanbanBoarList = Selector('h1');

    await t
        .maximizeWindow()
        .typeText(jiraUserName, user.PEDRO.username)
        .click(submit)
        .typeText(jiraPassword, user.PEDRO.password)
        .click(submit)
        .expect(postLoginSelector.visible).ok()
        .navigateTo(`${env.JIRA_WELCOME_URL}`)
        .switchToIframe(iframe1.easyKadIframe)
        .expect(kanbanBoarList.visible).ok()
        .expect(kanbanBoarList.innerText).contains('EasyKAD™ Kanban Boards List');
});