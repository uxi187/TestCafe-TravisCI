import { Selector, t } from 'testcafe';
import * as user from '../__constants__/users'
import { iframe1 } from '../__constants__/elements'
import { userPedro } from '../roles'

import { selectors as slider } from '../Pages/Slider/selectors'
import { selectors as el } from '../Pages/Dashboard/selectors'

const dashboardURL = 'https://easykad-test.atlassian.net/plugins/servlet/ac/easykad/kanban-board?ac.did=6023079294b6ae05cec783d8&ac.projectId=10003';

const columns = ["COLUMN A", "COLUMN B", "COLUMN C", "COLUMN D", "COLUMN E"]

export async function createColumn(columnName, columnAction) {
    const createColumnPosition =
        Selector(el.column.title)
            .withText(columnName)
            .parent('.column-header')
            .find(columnAction)
    await t
        .click(createColumnPosition)
}

export async function clickColumnSettings(columnName) {
    const columnSettingsButton =
        Selector(el.column.title)
            .withText(columnName)
            .parent('.column-header')
            .find('button#column-settings')
    await t
        .click(columnSettingsButton)
}

fixture`EditDashboard`
    .beforeEach(async t => {
        await t
            .useRole(userPedro)
            .navigateTo(dashboardURL)
            .switchToIframe(iframe1.easyKadIframe)
    })

test('Create column and subcolumns', async t => {
    // Test code
    await t
        .expect(Selector(slider.editBoard, { timeout: 8000 }).visible).ok()
        .click(Selector(slider.editBoard))
    // for (var i = 0; i < columns.length; i++)
    //     await createColumn(columns[i], el.column.addLeft)
    await createColumn("COLUMN D", el.column.addRight)
    await clickColumnSettings("NEW COLUMN")
    await createColumn("NEW COLUMN", el.column.addBellow)
    await createColumn("NEW SUB-COLUMN 1", el.column.addLeft)

    await t
        .wait(5000)
});