'use strict';

import sortBarsByNameAscending from '../../../src/utils/sortBarsByNameAscending';

describe('sortBarsByNameAscending', () => {
  it('returns bars sorted ascending by their name', () => {
    let bars = [{
      id: 2,
      name: 'Slouch',
    	lat: null,
    	long: null,
    	imageUrl: null
    }, {
      id: 3,
      name: 'The Old Hairdressers',
    	lat: null,
    	long: null,
    	imageUrl: null
    }, {
      id: 5,
      name: 'Bar Soba',
    	lat: null,
    	long: null,
    	imageUrl: null
    }];
    
    bars.sort(sortBarsByNameAscending);
    
    expect(bars[0].name).toEqual('Bar Soba');
    expect(bars[1].name).toEqual('Slouch');
    expect(bars[2].name).toEqual('The Old Hairdressers');
  });
});