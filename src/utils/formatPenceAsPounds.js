'use strict';

export default function formatPenceAsPounds(pence) {
  return pence ? `£${(pence / 100).toFixed(2)}` : '£0';
}