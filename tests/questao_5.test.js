const { printarParesExistentes } = require('../src/questao_5')


describe('Questão 5', () => {
    test('Verifica se o parâmetro é um valor numérico', () => {
        expect(typeof printarParesExistentes(['1', '5', '3', '4', '2'])).toBe('number');
    });

    test('Verifica se o array equivale aos valores pares informado', () => {
        expect(printarParesExistentes([1, 5, 3, 4, 2])).toEqual(3);
    });
});