import { Selector } from 'testcafe';


fixture('Getting Started')
    .page('http://amigohealth.org/control/hiramcafe/')
    

test('My first test', async t => {
    await t
        .wait(1000)
        .typeText("#developer-name", "John Smith")
        .click("#submit-button")
        
});
