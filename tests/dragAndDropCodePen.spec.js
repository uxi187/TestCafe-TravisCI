import { Selector, ClientFunction } from 'testcafe';
import * as user from '../__constants__/users'
import { iframe1 } from '../__constants__/elements'
import { userPedro } from '../roles'
import { dragAndDrop } from '../helpers'

const easyKadWelcomeUrl = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/board-list?ac.projectId=10012';
const dashboardURL = 'https://easykad-dev.atlassian.net/plugins/servlet/ac/easykad/kanban-board?ac.did=6022f4ea33a9f42bf0148eef&ac.projectId=10012';

const watchState = ClientFunction(() => {
    const dragOverHandler = () => {
        window.actualText = getDropzone().innerText;
        window.removeEventListener('dragover', dragOverHandler);
    };

    window.addEventListener('dragover', dragOverHandler);
});

fixture`UserRole`
    .page('https://www.globalsqa.com/demo-site/draganddrop/')



test('Drag and Drop test', async t => {
    // Test code
    const draggable = Selector('img').withAttribute('alt', 'The peaks of High Tatras');
    const droppable = Selector('#trash');


    await t
        .maximizeWindow()
        .switchToIframe('.demo-frame.lazyloaded')
        .expect(droppable.visible).ok()
        .expect(draggable.visible).ok()
        .dragToElement(draggable, droppable, { speed: 0.4 });
    await t.wait(10000)
    //.dragToElement(draggable, droppable)
    //await watchState.with({ dependencies: { getDropzone: droppable } })();
    // await t
    //.dragToElement(draggable, droppable);
    // dragAndDrop(draggable, droppable);
    //console.log(await t.eval(() => window.actualText));
});