'use strict'

import express from 'express';
import bodyParser from 'body-parser';
import searchBarsByName from './utils/searchBarsByName';
import getProductById from './utils/getProductById';
import sortBarsByNameAscending from './utils/sortBarsByNameAscending';
import sortRoundsByDateTimeDescending from './utils/sortRoundsByDateTimeDescending';
import bars from './data/bars';
import products from './data/products';
import barsProducts from './data/barsProducts';
import rounds from './data/rounds';
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
  const barId = req.params.id;
  const bar = bars.find((bar) => bar.id === barId);
  
  if (!bar) return res.status(404).send('Not found');
  
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
  const roundId = req.params.id;
  const round = rounds.find((round) => round.id === roundId);

  if (!round) return res.status(404).send('Not found');
  
  let roundCopy = {...round};

  round.products = round.products.map((roundProduct) => {
    const product = products.find((product) => product.id === roundProduct.id);
    
    return {
      ...product,
      priceInPence: roundProduct.priceInPence
    };
  }); // Yuck !!!

  return res.json(round);
});

app.post('/rounds', (req, res) => {
  const lastAddedRound = rounds[rounds.length - 1];
  let round = {...req.body};
  round.id = (lastAddedRound ? parseInt(lastAddedRound.id) + 1 : 1).toString();
  rounds.push(round);
  return res.json(round);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});