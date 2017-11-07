'use strict';

export default function findUniqueProducts(products) {
  const uniqueProductIds = [...new Set(products.map((product) => product.id))];
  let uniqueProducts = [];
  
  uniqueProductIds.forEach((uniqueProductId) => {
    const isAlreadyAdded = uniqueProducts.find((uniqueProduct) => uniqueProduct.id === uniqueProductId);
    if (isAlreadyAdded) return;
    uniqueProducts.push(products.find((product) => product.id === uniqueProductId));
  });
  
  return uniqueProducts;
}