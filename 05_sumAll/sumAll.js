const sumAll = function(x, y) {
    
    //return error if negative numbers or if input isn't a number:
    if(x < 0 || y < 0 || typeof x != 'number' || typeof y != 'number') {      
        return "ERROR"
    } else {

    //Assign smallest number to num1 and largest number to num2
        const int1 = (x<=y) ? x : y;
        const int2 = (int1 === x) ? y : x;

        let intSum = 0;
    
    //Create loop to add all numbers within range:    
        for (i=int1; i<=int2; i++) {
            intSum += i;
        };

        return intSum;
    };
}

// Do not edit below this line
module.exports = sumAll;
