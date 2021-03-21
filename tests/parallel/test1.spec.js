import { Selector, ClientFunction } from 'testcafe';

fixture`UserRole1`
    .page('https://www.globalsqa.com/demo-site/draganddrop/')
    .before(async ctx => {
        console.log('before test 1')
    })
    .beforeEach(async t => {
        console.log('before each test 1')
    })
    .after(async ctx => {
        console.log('after test 1')
    })


test('Drag and Drop test 1', async t => {
    console.log('test 1')
})

test('Drag and Drop test 3', async t => {
    console.log('test 3')
})