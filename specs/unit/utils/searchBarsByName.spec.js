'use strict';

import searchBarsByName from '../../../src/utils/searchBarsByName';

describe('searchBarsByName', () => {
  it('returns a bar if its name contains a given string', () => {
    const bars = [{
      id: 1,
      name: 'Bloc',
    	lat: null,
    	long: null,
    	imageUrl: null
    }];
    
    const barsFound = bars.filter(searchBarsByName('lo'));
    
    expect(barsFound.length).toEqual(1);
  });
  
  it('returns no bar if its name doesnt contain a given string', () => {
    const bars = [{
      id: 1,
      name: 'Bloc',
    	lat: null,
    	long: null,
    	imageUrl: null
    }];
    
    const barsFound = bars.filter(searchBarsByName('abc'));
    
    expect(barsFound.length).toEqual(0);
  });
});