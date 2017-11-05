'use strict';

import formatPenceAsPounds from '../../../src/utils/formatPenceAsPounds';

describe('formatPenceAsPounds', () => {
  it('formats 0 as £0', () => {
    expect(formatPenceAsPounds(0)).toEqual('£0');
  });
  
  it('formats 475 as £4.75', () => {
    expect(formatPenceAsPounds(475)).toEqual('£4.75');
  });
});