const reverseString = function(string) {
    let reversedString = "";
    
    for (let i = 0; i < string.length; i++) {
        reversedString = string[i] + reversedString
    }

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
