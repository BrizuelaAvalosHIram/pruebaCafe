import {Selector} from 'testcafe';

fixture('Cafe Estudiantes')


test('My first test', async t => {
    await t
    .typeText('#nombre', 'John Smith')
    .typeNumber('#cuenta', 12345678)
    .typePassword('#contrasena', 'password')
    .click('#submit-button')
    .expect(Selector('#saludo').innerText).eql('¡Bienvenido John Smith! Tu número de cuenta es 12345678.') 
});