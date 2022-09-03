const leapYears = function(a) {
    if (a % 4 === 0) {
        if (a % 100 === 0){
            if (a % 400 == 0){
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else{
        return false;
    }
};

console.log(leapYears(1996));


// Do not edit below this line
module.exports = leapYears;
