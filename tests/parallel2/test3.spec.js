import { Selector, ClientFunction } from 'testcafe';

fixture`UserRole1`
    .page('https://www.globalsqa.com/demo-site/draganddrop/')
    .before(async ctx => {
        console.log('before test 6')
    })
    .beforeEach(async t => {
        console.log('before each test 6')
        await t
            .maximizeWindow()
            .switchToIframe(Selector('.demo-frame.lazyloaded'))
    })
    .after(async ctx => {
        console.log('after test 6')
    })


test('Drag and Drop test 6', async t => {
    console.log('test 6')
    await t.expect(Selector('#trash').visible).ok()
})

test('Drag and Drop test 5', async t => {
    console.log('test 5')
    await t.expect(Selector('#gallery').visible).ok()
})