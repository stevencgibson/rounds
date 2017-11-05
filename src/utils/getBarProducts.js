'use strict';

// export default function getBarProducts(barsProducts, barId) {
//   return barsProducts.filter((barsProduct) => barsProduct.barId == barId);
// }

module.exports = function getBarProducts(barsProducts, barId) {
  return barsProducts.filter((barsProduct) => barsProduct.barId == barId);
}