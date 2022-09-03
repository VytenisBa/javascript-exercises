const repeatString = function(a, b) {
    if(b < 0){
        return 'ERROR';
    }
    return a.repeat(b);
};
console.log(repeatString('hey', -1));


// Do not edit below this line
module.exports = repeatString;
