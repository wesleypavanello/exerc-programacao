const { printarString } = require('../src/questao_6')


describe('Questão 6', () => {
    test('Verifica se o parâmetro é um valor numérico', () => {
        expect(typeof printarString('abcda')).toBe('string');
    });


});