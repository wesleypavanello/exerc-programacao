/* Pesquisa utilizada como referência para a questão:
https://acervolima.com/contar-o-numero-de-elementos-pares-e-impares-em-uma-array/ */

function funcParesDeDiferenca(arr, arr_size) {
    let par_count = 0;
    let impar_count = 0;

    // laço para ler os valores da matriz
    for (let i = 0; i < arr_size; i++) {

        // verifica se é um número ímpar ou par para contagem
        // divisivel por 2
        if (arr[i] & 1 == 1)
            impar_count++;
        else
            par_count++;
    }
    console.log(impar_count);
    return impar_count;
}

function printarParesExistentes(arr, n) {
    var arr = [1, 5, 3, 4, 2];
    var n = arr.length;
    return funcParesDeDiferenca(arr, n);

}


module.exports = { printarParesExistentes };