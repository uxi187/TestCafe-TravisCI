import { Selector, ClientFunction } from 'testcafe';
import * as user from '../../__constants__/users'
import { iframe1 } from '../../__constants__/elements'
import { userPedro } from '../../roles'
import * as api from '../../requests/api_commands'
import { a } from '../../axiosConfg'

const easyKadWelcomeUrl = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/board-list?ac.projectId=10012'

fixture`Dashboard`
    .beforeEach(async t => {
        const a1 = await api.apiCreateDashboardAndGetColumns({ dashboardName: "Milan16" });
        console.log(JSON.stringify(a1))
        await t
            .useRole(userPedro)
            .navigateTo(easyKadWelcomeUrl)
            .switchToIframe(iframe1.easyKadIframe)
    })

test('Create Dashboard', async t => {
    // Test code
    const kanbanBoarList = Selector('h1');
    const reduxState = ClientFunction(() => {
        return window.store.getState();
    });
    await t

        .expect(kanbanBoarList.visible).ok()
        .expect(kanbanBoarList.innerText).contains('EasyKAD™ Kanban Boards List');
    console.log(JSON.stringify(reduxState))
});