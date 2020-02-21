const fetch = require('node-fetch');

const CUBIC_WEIGHT_CONVERSION_FACTOR = 250;
const CATEGORY = 'Air Conditioners';
const BASE_URL = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com';

const calculateCubicWeightPerPage = (products) => {
  return products
    .filter(product => product.category === CATEGORY)
    .reduce(([weight, num], product) => {
      const cubicWeight = (product.size.width / 100 * product.size.length / 100 * product.size.height / 100) * CUBIC_WEIGHT_CONVERSION_FACTOR;
      return [weight + cubicWeight, num + 1];
    }, [0, 0]);
};

/**
 * Function that returns a promise which resolves to the average cubic weight of air conditioners
 * @function calcAvgCubicWeight
 * @returns {Promise} Promise object representing the average cubic weight of the air conditioners
 */
const calcAvgCubicWeight = async () => {
  let totalAirCons = 0;
  let totalCubicWeight = 0;
  let nextPath = '/api/products/1';

  while (nextPath) {
    const response = await fetch(`${BASE_URL}${nextPath}`);
    const json = await response.json();
    nextPath = json.next;
    const products = json.objects;
    const [cubicWeightThisPage, numAirConsThisPage] = calculateCubicWeightPerPage(products);
    totalCubicWeight += cubicWeightThisPage;
    totalAirCons += numAirConsThisPage;
  }
  return avgCubicWeight = totalCubicWeight / totalAirCons;
};

module.exports = {
  calculateCubicWeightPerPage : calculateCubicWeightPerPage,
  calcAvgCubicWeight : calcAvgCubicWeight
};