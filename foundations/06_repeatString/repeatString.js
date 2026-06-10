const repeatString = function(string, numTimes) {
    let repeatedString = "";
    
    if (numTimes < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < numTimes; i++) {
            repeatedString += string;
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
