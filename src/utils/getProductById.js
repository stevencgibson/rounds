'use strict';

// Yuck!!!
// export default function getProductById(products, barsProducts, productId, barId) {
//   let product = products.find((product) => product.id == productId);
//   product.priceInPence = barsProducts.find((barsProduct) => barsProduct.productId == productId && barsProduct.barId === barId).priceInPence;
//   return product;
// }

module.exports = function getProductById(products, barsProducts, productId, barId) {
  let product = products.find((product) => product.id == productId);
  product.priceInPence = barsProducts.find((barsProduct) => barsProduct.productId == productId && barsProduct.barId === barId).priceInPence;
  return product;
}