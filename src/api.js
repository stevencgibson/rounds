'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const getBarById = require('./utils/getBarById');
const searchBarsByName = require('./utils/searchBarsByName');
const getBarProducts = require('./utils/getBarProducts');
const getRoundById = require('./utils/getRoundById');
const getProductById = require('./utils/getProductById');
const bars = require('./data/bars');
const products = require('./data/products');
const barsProducts = require('./data/barsProducts');
let rounds = require('./data/rounds');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/bars', (req, res) => {
  const searchTerm = req.query.searchTerm;
  
  res.json({
    results: searchTerm ? searchBarsByName(bars, searchTerm) : bars
  });
});

app.get('/bars/:id', (req, res) => {
  const bar = getBarById(bars, req.params.id);
  const barProducts = getBarProducts(barsProducts, req.params.id);
  const productsA = barProducts.map((barProducts) => getProductById(products, barsProducts, barProducts.productId, bar.id));
  
  res.json({
    id: bar.id,
    name: bar.name,
    imageUrl: bar.imageUrl,
    products: productsA
  });
});

app.get('/rounds', (req, res) => {
  return res.json({
    results: rounds
  });
});

app.get('/rounds/:id', (req, res) => {
  const round = getRoundById(rounds, req.params.id);
  if (round) return res.json(round);
  return res.status(404).send('Not found');
});

app.post('/rounds', (req, res) => {
  const lastAddedRound = rounds[rounds.length - 1];
  req.body.id = lastAddedRound ? lastAddedRound.id + 1 : 1; // mutation!!!
  rounds.push(req.body);
  return res.json(req.body);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});