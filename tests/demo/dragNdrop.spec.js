import { Selector, ClientFunction } from 'testcafe';
import * as user from '../../__constants__/users'
import { iframe1 } from '../../__constants__/elements'
import { userPedro } from '../../roles'
import { generateJiraProjectKey, generateJiraProjectName } from '../../helpers'
import { apiMoveIssue, apiBroadcastActionWebsocket } from '../../requests/api_commands'
import { apiCreateJiraProject, apiDeleteJiraProject } from '../../requests/api_jira_commands'


const dashboardURL = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/kanban-board?ac.did=602edf9c8c7c11085e21fee2&ac.projectId=10012';
const jiraProjectKey = generateJiraProjectKey();
const jiraProjectName = generateJiraProjectName();

fixture`UserRole`
    .before(async ctx => {
        console.log('jiraProjectKey ' + jiraProjectKey)
        console.log('jiraProjectName ' + jiraProjectName)
        const project = await apiCreateJiraProject(jiraProjectKey, jiraProjectName);
        ctx.projectKey = project.projectKey;
        console.log('ProjectKey ' + ctx.projectKey)
    })
    .beforeEach(async t => {
        await t
            .useRole(userPedro)
            .navigateTo(dashboardURL)
            .switchToIframe(iframe1.easyKadIframe)
    })
    .after(async ctx => {
        await apiDeleteJiraProject(ctx.projectKey);
    });

test('Drag and Drop test', async t => {
    // Test code
    //const draggable = Selector('[data-test-id="kad-card-summary"]').withText('SUMMARY 38916');
    const draggable = Selector('.smooth-dnd-draggable-wrapper').find('[data-id="603c1281fc2d25bbca170abb"]')
    const droppable = Selector('.body-template[id="603c127e92458a000122cae5"] ');

    await t
        //.expect(droppable.visible).ok()
        .expect(draggable.visible).ok();
    //await apiMoveIssue();
    //await apiBroadcastActionWebsocket("REFRESH_CARDS");
    //.click(draggable, { modifiers: { shift: true } })
    // await t
    //     .drag(draggable, -742, 29, {
    //         offsetX: 70,
    //         offsetY: 4,
    //         modifiers: {
    //             ctrl: true
    //         },
    //     })
    //dragAndDrop(draggable, droppable);
    await t.dragToElement(draggable, droppable, { speed: 0.2 });
    await t.wait(10000)
    //.dragToElement(draggable, droppable)
    //await watchState.with({ dependencies: { getDropzone: droppable } })();
    // await t
    //.dragToElement(draggable, droppable);
    // dragAndDrop(draggable, droppable);
    //console.log(await t.eval(() => window.actualText));
});