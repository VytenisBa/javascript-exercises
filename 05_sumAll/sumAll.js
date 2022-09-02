const sumAll = function(a, b) {
    let allNum = [];
    let sum = 0;
    if (a <=0 || b <= 0 && typeof(a)!= 'number' || typeof(b) != 'number'){
        return 'ERROR'
    }
    if (a > b){
        for (let i = b; i <= a; i++){
            allNum.push(i);
        }
    }
    for (let i = a; i <= b; i++){
        allNum.push(i);
    }
    for (let i = 0; i < allNum.length; i++){
        sum += allNum[i];
    }
    return sum;
};
console.log(sumAll(10, [90, 1]));


// Do not edit below this line
module.exports = sumAll;
