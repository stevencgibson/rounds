'use strict';

import sortRoundsByDateTimeDescending from '../../../src/utils/sortRoundsByDateTimeDescending';

describe('sortRoundsByDateTimeDescending', () => {
  it('returns rounds on different dates ordered by date descending', () => {
    let rounds = [{
      id: 1,
      barId: 1,
      orderedAt: '2017-10-30T19:49:18.208Z',
      products: []
    }, {
      id: 2,
      barId: 1,
      orderedAt: '2017-10-31T19:49:18.208Z',
      products: []
    }];
    
    rounds.sort(sortRoundsByDateTimeDescending);
    
    expect(rounds[0].orderedAt).toEqual('2017-10-31T19:49:18.208Z');
    expect(rounds[1].orderedAt).toEqual('2017-10-30T19:49:18.208Z');
  });
  
  it('returns rounds on the same date ordered by time descending', () => {
    let rounds = [{
      id: 1,
      barId: 1,
      orderedAt: '2017-10-31T19:49:18.208Z',
      products: []
    }, {
      id: 2,
      barId: 1,
      orderedAt: '2017-10-31T20:49:18.208Z',
      products: []
    }];
    
    rounds.sort(sortRoundsByDateTimeDescending);
    
    expect(rounds[0].orderedAt).toEqual('2017-10-31T20:49:18.208Z');
    expect(rounds[1].orderedAt).toEqual('2017-10-31T19:49:18.208Z');
  });
});