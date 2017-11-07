'use strict';

import findUniqueProducts from '../../../src/utils/findUniqueProducts';

describe('findUniqueProducts', () => {
  it('returns an array of products with unique IDs', () => {
    const products = [{
      id: '1',
      name: 'Beer',
      imageUrl: null,
      priceInPence: 414
    }, {
      id: '1',
      name: 'Beer',
      imageUrl: null,
      priceInPence: 414
    }];
    
    const uniqueProducts = findUniqueProducts(products);
    
    expect(uniqueProducts.length).toEqual(1);
  });
  
  it('returns an array of products with unique IDs', () => {
    const products = [{
      id: '1',
      name: 'Beer',
      imageUrl: null,
      priceInPence: 414
    }, {
      id: '1',
      name: 'Beer',
      imageUrl: null,
      priceInPence: 414
    }];
    
    const uniqueProducts = findUniqueProducts(products);
    
    expect(uniqueProducts[0].name).toEqual('Beer');
  });
  
  it('returns an empty array if no unique products are found', () => {
    const uniqueProducts = findUniqueProducts([]);
    
    expect(uniqueProducts.length).toEqual(0);
  });
});