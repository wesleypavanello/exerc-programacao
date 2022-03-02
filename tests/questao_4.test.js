const { printarMediana } = require('../src/questao_4')


describe('Questão 4', () => {
    test('Verifica se o parâmetro é um valor numérico', () => {
        expect(typeof printarMediana(['9', '2', '1', '4', '6'])).toBe('number');
    });

    test('Verifica se a mediana equivale ao valor informado', () => {
        expect(printarMediana([9, 2, 1, 4, 6])).toEqual(4);
    });
});