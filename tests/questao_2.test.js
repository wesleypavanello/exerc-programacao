const { validadorSenha } = require('../src/questao_2')


describe('Questão 2', () => {

  describe('Verifica se o campo senha está nulo ou vazio', () => {
    test('Se o campo senha estiver nulo', () => {
      expect(validadorSenha()).toBe('O campo senha é obrigatório');
    });
    test('Se o campo senha estiver vazio', () => {
      expect(validadorSenha('')).toBe('O campo senha é obrigatório');
    });
  });

  describe('Retorna a quantidade de caracteres que faltam caso a senha for menor que 6', () => {
    test('Retorna 3 quando o comprimento da senha for 3', () => {
      expect(validadorSenha('abc')).toBe(`Falta(m) 3 caracter(es) para que sua senha seja segura.`);
    });
    test('Retorna 1 quando o comprimento da senha for 5', () => {
      expect(validadorSenha('abcge')).toBe(`Falta(m) 1 caracter(es) para que sua senha seja segura.`);
    });
    test('Retorna 2 quando o comprimento da senha for 4', () => {
      expect(validadorSenha('a@p1')).toBe(`Falta(m) 2 caracter(es) para que sua senha seja segura.`);
    });
  });

  describe('Verifica se a senha respeita os requisitos de segurança', () => {
    test('Retorna erro quando a senha não tiver um dígito numérico', () => {
      expect(validadorSenha('d@pGegfhi')).toBe(`Consulte os critérios para criar uma senha forte.`);
    });
    test('Retorna erro quando a senha não tiver uma letra maiúscula', () => {
      expect(validadorSenha('l$pgba1kq')).toBe(`Consulte os critérios para criar uma senha forte.`);
    });
    test('Retorna erro quando a senha não tiver uma letra minúscula', () => {
      expect(validadorSenha('P@AWEM5J1')).toBe(`Consulte os critérios para criar uma senha forte.`);
    });
    test('Retorna erro quando a senha não tiver um caracter especial', () => {
      expect(validadorSenha('Agpropmzd')).toBe(`Consulte os critérios para criar uma senha forte.`);
    });
  });

  describe('verifica se retorna a mensagem de sucesso caso a senha seja segura', () => {
    test('Retorna "senha forte" caso a senha atenda a todos os critérios de segurança', () => {
      expect(validadorSenha('C@pGem1ni')).toBe(`Senha forte`);
    });
  })
})
