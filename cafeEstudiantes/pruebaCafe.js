import { Selector } from 'testcafe';



fixture('Getting Started')
    .page('https://github.com/BrizuelaAvalosHIram/pruebaCafe/blob/main/cafeEstudiantes/index.html')
    

test('My first test', async t => {
    await t
        .typeText("#name", "John Smith")
        .typeText("#cuenta", "1234567890")
        .typeText("#contrasena", "hola")
        .click("#submit-button")
        
});
