const {calcAvgCubicWeight} = require('./calculate');

calcAvgCubicWeight()
  .then(avgCubicWeight => console.log(`Average cubic weight is: ${avgCubicWeight.toFixed(2)}kg`));