'use strict';

import formatOrderDateTime from '../../../src/utils/formatOrderDateTime';
import MockDate from 'MockDate';

describe('formatOrderDateTime', () => {
  beforeEach(() => {
    MockDate.set('2017-11-05T11:49:18.208Z');
  });
  
  afterEach(() => {
    MockDate.reset();
  });
  
  it('returns an order from today as "Today at h:mm A"', () => {
    expect(formatOrderDateTime('2017-11-05T11:49:18.208Z')).toEqual('Today at 11:49 AM');
  });

  it('returns an order from 6 days ago as "Last DDDD MMMM at h:mm A"', () => {
    expect(formatOrderDateTime('2017-10-30T11:49:18.208Z')).toEqual('Last Monday at 11:49 AM');
  });

  it('returns an order from 7 days ago as "Do MMMM at h:mm A"', () => {
    expect(formatOrderDateTime('2017-10-29T11:49:18.208Z')).toEqual('29th October at 11:49 AM');
  });
});