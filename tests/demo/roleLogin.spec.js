import { Selector } from 'testcafe';
import * as user from '../../__constants__/users'
import { iframe1 } from '../../__constants__/elements'
import { userPedro } from '../../roles'

const easyKadWelcomeUrl = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/board-list?ac.projectId=10012'

fixture`UserRole`
    .beforeEach(async t => {
        await t
            .useRole(userPedro)
            .navigateTo(easyKadWelcomeUrl)
            .switchToIframe(iframe1.easyKadIframe)
    })

test('My first test', async t => {
    // Test code
    const kanbanBoarList = Selector('h1');
    await t

        .expect(kanbanBoarList.visible).ok()
        .expect(kanbanBoarList.innerText).contains('EasyKAD™ Kanban Boards List');
});

test('My second test', async t => {
    // Test code
    const kanbanBoarList = Selector('h1');
    await t
        // .navigateTo(easyKadWelcomeUrl)
        // .switchToIframe(iframe1.easyKadIframe)
        .expect(kanbanBoarList.visible).ok()
        .expect(kanbanBoarList.innerText).contains('EasyKAD™ Kanban Boards List');
});