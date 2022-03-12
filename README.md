## :writing_hand: Exercícios de Programação </h1>

Este repositório é destinado à realização de questões e tem como o objetivo testar os conhecimentos de lógica de programação.

---

## :rocket:	Tecnologias

Para a realização dos exercícios:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Jest](https://jestjs.io/pt-BR/)
- [Node.js](https://nodejs.org/en/)
- [VS Code](https://code.visualstudio.com/)

---

## :hammer_and_wrench: Instalação e Testes
Para instalação das dependências necessárias e do ambiente de execução NodeJS utilize o seguinte comando:

```sh
npm install or yarn install 
```

Para executar todos os testes utilize o seguinte comando : 

```sh
npm test or yarn test
```

Caso queira executar só um arquivo de test use o seguinte comando, considerando que quer testar o arquivo `tests/questao_1.test.js`:
```sh
npm test or yarn test tests/questao_1.test.js
```
## :grey_question: Questões
#### Segue abaixo instruções para execução dos questionarios:

><h3>Questão 01 - Escadas: </h3>
>
Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
```
Saida:
     *
    **
   ***
  ****
 *****
******
```

><h3>Questão 02 - Senha:</h3>
>
Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.
```
Entrada: 
Ya3

Saida: 
3
Sugestão: Ya3#qb
Sua senha é fraca veja a sugestão para uma senha forte.
```

><h3>Questão 03 - Anagrama:</h3>
>
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.
```
Entrada: 
[ovo]

Saida:
2
```

><h3>Questão 04 - Mediana:</h3>
>
A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.
```
Entrada: 
arr: [9, 2, 1, 4, 6]

Saida:
4
```

><h3>Questão 05 - Vetor Elementos Pares:</h3>
>
Dado um vetor de inteiros n e um inteiro qualquer x. Construa um algoritmo que determine o número de elementos pares do vetor que tem uma diferença igual ao valor de x.
```
Entrada: 
n: [1, 5, 3, 4, 2]

Saida:
3
```

><h3>Questão 06 - Texto Encriptado:</h3>
>
Um texto precisa ser encriptado usando o seguinte esquema. Primeiro, os espaços são removidos do texto. Então, os caracteres são escritos em um grid, no qual as linhas e colunas tem as seguintes regras:
<div align="center">√T<=linha<=coluna<=√T</div>

* Considere T, como o tamanho do texto.
* Se certifique de que linhas x colunas >= .
* Se múltiplos grids satisfazem as condições, escolha aquele com a menor área.

Escreva um algoritmo que ao receber uma string s, mostre a mensagem encriptada de acordo com as regras descritas.

```
Entrada: 
s = tenha um bom dia
    
Saida:
taoa eum nmd hbi
```

<div align="center">

### Okay! :thumbsup:	
  
</div>
