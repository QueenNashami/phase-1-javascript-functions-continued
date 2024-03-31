// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, let's ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun('learn code'));





const mondayWork = function (activity = 'go to the office') {
    return `This Monday, let's go to the office!`;
};

// Define wrapAdjective function
function wrapAdjective(flair = '*') {
    return function (adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    };
}


