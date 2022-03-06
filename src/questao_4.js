/* Pesquisa utilizada como referência para a questão:
https://acervolima.com/encontre-a-mediana-na-array-ordenada-por-linha/ */

function funcMediana(vet) {
    var j = 0;
    var i = 0;
    var t = 0;
    // Ordenação do vetor para o valor de maior indice (bubble sort)
    for (i = 0; i < vet.length; i++) {
        for (j = i + 1; j < vet.length; j++) {
            if (vet[i] > vet[j]) {
                t = vet[i];
                vet[i] = vet[j];
                vet[j] = t;
            }
        }
    }

    // Mediana é o numero central do vetor após ordenado
    // inicializamos as variaveis e convertemos o objeto tipo string do vetor
    // e foi realizada a operação da mediana 
    var mediana = 0;
    var meio = 0;
    meio = parseInt(vet.length / 2);
    mediana = vet[meio];
    console.log(mediana);
    return mediana;
}

function printarMediana(vet) {
    var vet = [9, 2, 1, 4, 6];
    return funcMediana(vet);
}

module.exports = { printarMediana };