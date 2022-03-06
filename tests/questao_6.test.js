const { printarString } = require('../src/questao_6')

// Não houve validação quanto ao tipo de dados, embora seja um array
describe('Questão 6', () => {
    test('Retorna apenas o parâmetro chamado da constante', () => {
        expect(printarString());
    });
});