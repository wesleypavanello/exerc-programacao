/* Pesquisa utilizada como referência para a questão:
https://www.geeksforgeeks.org/encrypt-the-given-string-with-the-following-operations/  */

var MAX = 26;

// Function to return the encrypted string
function funcEncryptStr(str, n, x) {

    // Reduce x because rotation of
    // length 26 is unnecessary
    x = x % MAX;

    // Calculate the frequency of characters
    var freq = Array(MAX).fill(0);

    for (var i = 0; i < n; i++) {
        freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (var i = 0; i < n; i++) {

        // If the frequency of current character
        // is even then increment it by x
        if (freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] % 2 == 0) {
            var pos = (str[i].charCodeAt(0) - 'a'.charCodeAt(0) + x) % MAX;
            str[i] = String.fromCharCode(pos + 'a'.charCodeAt(0));
        }

        // Else decrement it by x
        else {
            var pos = (str[i].charCodeAt(0) - 'a'.charCodeAt(0) - x);

            if (pos < 0) {
                pos += MAX;
            }

            str[i] = String.fromCharCode(pos + 'a'.charCodeAt(0));
        }
        console.log(str, n, x);
    }

    // Return the count
    return str;
}

function printarString(str, n, x) {
    var s = "abcda";
    var n = s.length;
    var x = 3;
    return funcEncryptStr(str, n, x);
}

module.exports = { printarString };