const ftoc = function(fah) {
  let cel= ((fah - 32) * 5/9).toFixed(1);
  let celNum = parseFloat(cel);
  return celNum;
};


const ctof = function(cel) {
  let fah= (cel * 9/5 + 32).toFixed(1);
  let fahNum = parseFloat(fah);
  return fahNum;
};

console.log(ctof(-10))


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
