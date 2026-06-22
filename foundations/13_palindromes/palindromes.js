const palindromes = function (string) {
    let cleanedString = string.replaceAll(" ", "").replaceAll(/[.,!]/g, "").toLowerCase();
    console.log(cleanedString);
    for (let i = 0; i < Math.floor((cleanedString.length / 2)); i++) {
        if (cleanedString[i] != cleanedString[cleanedString.length - 1 - i]) {
            console.log(i);
            console.log(cleanedString[i]);
            console.log(cleanedString[cleanedString.length - 1 -i]);
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
