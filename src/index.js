const fetch = require('node-fetch');

const CUBIC_WEIGHT_CONVERSION_FACTOR = 250;

const calcAvgCubicWeight = async () => {
  let totalAirCons = 0;
  let totalCubicWeight = 0;
  let nextPath = '/api/products/1';

  while (nextPath) {
    const response = await fetch(`http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com${nextPath}`);
    const json = await response.json();
    nextPath = json.next;
    const itemsArray = json.objects;
    const airConItems = itemsArray.filter(item => item.category === 'Air Conditioners');
    if (airConItems.length) {
      totalAirCons += airConItems.length;
      const cubicWeightThisPage = airConItems.reduce((acc, item) => {
        const cubicWeight = (item.size.width / 100 * item.size.length / 100 * item.size.height / 100) * CUBIC_WEIGHT_CONVERSION_FACTOR;
        return acc + cubicWeight;
      }, 0);
      totalCubicWeight += cubicWeightThisPage;
    }
  }
  return avgCubicWeight = totalCubicWeight / totalAirCons;
};

calcAvgCubicWeight()
  .then(result => console.log('Average cubic weight in kg :', result));
