const reverseString = function(string) {

    const stringLength = string.length;
    let reversedString = "";

    for(i=stringLength-1; i>=0; i--) {
        reversedString += string.charAt(i);
    };
    console.log(reversedString);
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
