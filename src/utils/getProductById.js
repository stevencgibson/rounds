'use strict';

/* TODO
  - gets the full detail for each product available at a given bar
  - we want product id, name, imageUrl, priceInPence
  - find a cleaner way to do this as this is unreadable
*/
export default function getProductById(products, barsProducts, productId, barId) {
  let product = products.find((product) => product.id === productId);
  product.priceInPence = barsProducts.find((barsProduct) => barsProduct.productId === productId && barsProduct.barId === barId).priceInPence;
  return product;
}