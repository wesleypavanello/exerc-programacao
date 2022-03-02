const { printarTriangulo } = require('../src/questao_1');

describe('Questão 1', () => {
    // Verifica se é um número
    /* test('Verifica se o parâmetro é um valor numérico', () => {
        expect(typeof printarTriangulo('6')).toBe('number');
    }); */
    test('Verifica se a função retorna uma string', () => {
        expect(typeof printarTriangulo(6)).toBe('string');
    });
});