const removeFromArray = function(array, targets) {
    //create an array to store all target values to be removed
    let removedArray = [];

    //create loop that puts all the arguments after 'target' into an array
    for (i = 1; i < arguments.length; i++) {
        removedArray.push(arguments[i]);
    };
    
    const filteredArray = array.filter(item => !removedArray.includes(item));
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
