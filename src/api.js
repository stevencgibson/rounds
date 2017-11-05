'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const searchBarsByName = require('./utils/searchBarsByName');
const getProductById = require('./utils/getProductById');
const sortBarsByNameAscending = require('./utils/sortBarsByNameAscending');
const sortRoundsByDateTimeDescending = require('./utils/sortRoundsByDateTimeDescending');
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
  const isSortByNameAscending = req.query.sortBy === 'name' && req.query.direction === 'ascending';
  const matchingBars = searchTerm ? bars.filter(searchBarsByName(searchTerm)) : bars;
  const matchingBarsSorted = isSortByNameAscending ? matchingBars.slice().sort(sortBarsByNameAscending) : matchingBars;
  
  res.json({
    data: matchingBarsSorted
  });
});

app.get('/bars/:id', (req, res) => {
  const barId = parseInt(req.params.id);
  const bar = bars.find((bar) => bar.id === barId);
  const barProducts = barsProducts.filter((barsProduct) => barsProduct.barId === barId);
  const barProductsDetail = barProducts.map((barProducts) => getProductById(products, barsProducts, barProducts.productId, bar.id));

  res.json({
    id: bar.id,
    name: bar.name,
    imageUrl: bar.imageUrl,
    products: barProductsDetail
  });
});

app.get('/rounds', (req, res) => {
  const isSortByDateTimeDescending = req.query.sortBy === 'datetime' && req.query.direction === 'descending';
  const roundsSorted = isSortByDateTimeDescending ? rounds.slice().sort(sortRoundsByDateTimeDescending) : rounds;

  return res.json({
    data: roundsSorted
  });
});

app.get('/rounds/:id', (req, res) => {
  const roundId = parseInt(req.params.id);
  const round = rounds.filter((round) => round.id === roundId);
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