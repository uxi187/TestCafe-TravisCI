import { Selector, ClientFunction } from 'testcafe';


fixture`UserRole 2`
    .page('https://www.globalsqa.com/demo-site/draganddrop/')
    .before(async ctx => {
        console.log('before test 4')
    })
    .beforeEach(async t => {
        console.log('before each test 4')
        await t
            .maximizeWindow()
            //.switchToIframe(Selector('.demo-frame.lazyloaded'))
    })
    .after(async ctx => {
        console.log('after test 4')
    })

test('Drag and Drop test 4', async t => {
    console.log('test 4')
    await t.expect(Selector('.resp-tabs-list ').visible).ok()
})