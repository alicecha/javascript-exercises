const leapYears = function(year) {
    //leap year if divisible by 400 or divisible by 4 but not by 100:
    return (year % 400 === 0 || (year % 4 === 0 & year % 100 !== 0)) ? true : false;
}

// Do not edit below this line
module.exports = leapYears;

//Leap years are years divisible by four (like 1984 and 2004).
//However, years divisible by 100 are not leap years (such as 1800 and 1900)
//unless they are divisible by 400 (like 1600 and 2000, which were in fact
//leap years). (Yes, it's all pretty confusing)