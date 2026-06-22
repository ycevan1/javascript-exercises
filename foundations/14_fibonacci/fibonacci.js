const fibonacci = function(num) {
    let fibNum1 = 1;
    let fibNum2 = 1;

    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (num < 0) {
        return "OOPS";
    }

    for (let i = 2; i < num; i++) {
        temp = fibNum2;
        fibNum2 = fibNum1 + fibNum2;
        fibNum1 = temp;
    }

    return fibNum2;
};

// Do not edit below this line
module.exports = fibonacci;
