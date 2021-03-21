import { Selector, ClientFunction } from 'testcafe';


fixture`UserRole 2`
    .page('https://www.globalsqa.com/demo-site/draganddrop/')
    .before(async ctx => {
        console.log('before test 2')
    })
    .beforeEach(async t => {
        console.log('before each test 2')
    })
    .after(async ctx => {
        console.log('after test 2')
    })

test('Drag and Drop test 2', async t => { 
    console.log('test 2')
})