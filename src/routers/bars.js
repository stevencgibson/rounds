// 'use strict';
// 
// const express = require('express')
// const bars = require('../data/bars')
// const products = require('../data/products')
// const barsProducts = require('../data/barsProducts')
// const router = express.Router()
// 
// router.get('/', (req, res) => {
//   const searchTerm = req.query.searchTerm;
//   
//   res.json({
//     results: searchTerm ? searchBarsByName(searchTerm) : bars
//   })
// })
// 
// router.get('/:id', (req, res) => {
//   const bar = getBarById(req.params.id);
//   const barProducts = getBarProducts(req.params.id);
//   const products = barProducts.map((barProducts) => getProductById(barProducts.productId, bar.id));
//   
//   res.json({
//     id: bar.id,
//     name: bar.name,
//     imageUrl: bar.imageUrl,
//     products: products
//   })
// })
// 
// function searchBarsByName(searchTerm) {
//   return bars.filter((bar) => bar.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }
// 
// function getBarById(id) {
//   return bars.find((bar) => bar.id == id);
// }
// 
// function getBarProducts(barId) {
//   return barsProducts.filter((barsProduct) => barsProduct.barId == barId);
// }
// 
// // Yuck!!!
// function getProductById(productId, barId) {
//   let product = products.find((product) => product.id == productId);
//   product.priceInPence = barsProducts.find((barsProduct) => barsProduct.productId == productId && barsProduct.barId === barId).priceInPence;
//   return product;
// }
// 
// module.exports = router