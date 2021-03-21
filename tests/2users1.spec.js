import { Selector, ClientFunction } from 'testcafe';
import { iframe1 } from '../__constants__/elements'
import { userPedro, userKirsten } from '../roles'
import { dragAndDrop } from '../helpers'
import { apiMoveIssue, apiBroadcastActionWebsocket } from '../requests/api_commands'
import { apiCreateJiraProject, apiDeleteJiraProject } from '../requests/api_jira_commands'
import { login } from '../helpers'
import * as user from '../__constants__/users'

import {setEnvironment} from '../environments'
const env = setEnvironment();

let initialWindow = {};
let window2 = {};

//const dashboardURL = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/kanban-board?ac.did=6022f3567ec33808318d3141&ac.projectId=10012';
const dashboardURL = 'https://easykad-test.atlassian.net/plugins/servlet/ac/easykad/kanban-board?ac.did=6023079294b6ae05cec783d8&ac.projectId=10003';


// fixture
//     `Browser windows`
//     .page(JIRA_WELCOME_URL)

// test
//     ('2 Users test', async t => {
//         // Test code
//         const draggable = Selector('[data-test-id="kad-card-summary"]').withText('SUMMARY 44658');
//         const initialWindow = await t.getCurrentWindow();
//         const window2 = await t.openWindow(JIRA_WELCOME_URL)

//         await t.switchToWindow(initialWindow);
//         await login(user.PEDRO)
//         // await t
//         //.useRole(userPedro)
//         //.navigateTo(dashboardURL)
//         await t.switchToWindow(window2);
//         await login(user.KIRSTEN)
//         //await t
//         //.useRole(userKirsten)
//         //.navigateTo(dashboardURL)
//         await t.switchToWindow(initialWindow).navigateTo(dashboardURL)
//         await t.switchToWindow(window2).navigateTo(dashboardURL)

//         // await t.switchToWindow(initialWindow).switchToIframe(iframe1.easyKadIframe);
//         // await t.expect(draggable.visible).ok();
//         // await apiMoveIssue();
//         // await apiBroadcastActionWebsocket("REFRESH_CARDS");
//         // console.log('User Pedro has element visible')

//         // await t.switchToWindow(window2).switchToIframe(iframe1.easyKadIframe);
//         // await t.expect(draggable.visible).ok();
//         // console.log('User Kirsten has element visible')
//         await t.wait(10000)
//     });

fixture`Browser windows`
    .meta('browser', 'chrome')
    .page(`${env.JIRA_LOGIN_URL}`)
    .beforeEach(async t => {
        initialWindow = await t.getCurrentWindow();
        window2 = await t.openWindow(`${env.JIRA_LOGIN_URL}`)

        await t.switchToWindow(initialWindow);
        await t
            .useRole(userPedro)
            .navigateTo(dashboardURL)
        await t.switchToWindow(window2);
        await t
            .useRole(userKirsten)
            .navigateTo(dashboardURL)
    })

test
    ('2 Users test', async t => {
        // Test code
        const draggable = Selector('[data-test-id="kad-card-summary"]').withText('SUMMARY 4071');

        await t.switchToWindow(initialWindow).switchToIframe(iframe1.easyKadIframe);
        await t.expect(draggable.visible).ok();
        await apiMoveIssue();
        await apiBroadcastActionWebsocket("REFRESH_CARDS");
        console.log('User Pedro has element visible')

        await t.switchToWindow(window2).switchToIframe(iframe1.easyKadIframe);
        await t.expect(draggable.visible).ok();
        console.log('User Kirsten has element visible')
        await t.wait(10000)
    });