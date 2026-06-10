const removeFromArray = function(array, ...removedValues) {
    
    for (let value of removedValues) {
        array = array.filter((arrayValue) => arrayValue !== value);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
