/* Pesquisa utilizada como referência para a questão:
https://www.geeksforgeeks.org/encrypt-the-given-string-with-the-following-operations/
https://pt.stackoverflow.com/questions/205872/separar-um-array-em-grupos  */

// Entrada string encriptada
function funcEncryptStr() {
    let string = "";
    let array = [];
    string = 'tenha um bom dia';
    array = string.split(""); // separar string
    for (let i = 0; i < array.length; i++) {
        // retirar espaço
        if (array[i] === " ") {
            array.splice(i, 1);
        }
    }
    // Chamada da função de dividir array
    dividirArray(array);
    console.log(string);
}

function dividirArray(arr) {
    let n = Math.ceil(Math.sqrt(arr.length));
    separar(arr, n);
}

// Separação do array em grupos
function separar(base, maximo) {
    let resultado = [[]];
    let grupo = 0;
    for (let indice = 0; indice < base.length; indice++) {
        if (resultado[grupo] === undefined) {
            resultado[grupo] = [];
        }
        resultado[grupo].push(base[indice]);
        if ((indice + 1) % maximo === 0) {
            grupo = grupo + 1;
        }
    }
    exibirString(transporArray(resultado));
}
// Método Object.keys
function transporArray(a) {
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) {
            return r[c];
        });
    });
}

// Retorna a string encriptada
function exibirString(arr) { //
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += " " + arr[i];
    }
    let novaString = "";
    novaString = string.replace(/,/g, '');
    nova = novaString;
    console.log(nova);
    return nova;

}

// Apenas para chamar a função para test
// função sem retorno não tem validação de dados
function printarString() {
    return funcEncryptStr();
}

module.exports = { printarString };