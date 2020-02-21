const {calculateCubicWeightPerPage} = require('./index');

describe('calculateCubicWeightPerPage()', () => {
  it('should filter out products that are not Air Conditioners', () => {
    const products = [
      {
        category: 'Not Air Conditioners',
        size: {
          width: 49.6,
          length: 38.7,
          height: 89
        }
      }
    ];
    expect(calculateCubicWeightPerPage(products)).toEqual([0,0]);
  });

  it('should return total cubic weight and number of products found in Air Conditioners category', () => {
    const products = [
      {
        category: 'Air Conditioners',
        size: {
          width: 100,
          length: 100,
          height: 100
        }
      },
      {
        category: 'Not Air Conditioners',
        size: {
          width: 42.4,
          length: 31,
          height: 82.5
        }
      },
      {
        category: 'Air Conditioners',
        size: {
          width: 200,
          length: 200,
          height: 200
        }
      },
    ];
    const [cubicWeight, productsFound ] = calculateCubicWeightPerPage(products);
    expect(cubicWeight).toBe(2250);
    expect(productsFound).toBe(2);
  })
});


