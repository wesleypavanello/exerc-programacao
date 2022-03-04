const { printarString } = require('../src/questao_6')

// Não houve validação quanto ao tipo de dados
describe('Questão 6', () => {
    test('Verifica se o parâmetro é um valor numérico', () => {
        expect(typeof printarString(["bom dia"])).toEqual("string");
    });


});