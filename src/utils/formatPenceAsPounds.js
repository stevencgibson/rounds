'use strict';

export default function formatPenceAsPounds(pence) {
  return `£${(pence / 100).toFixed(2)}`;
}