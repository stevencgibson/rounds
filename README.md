# Rounds

https://gist.github.com/roryf/624e7bc97e5ef0a3c266df2375da43ba


## Requires

- Node 8.5.0


## Getting started

```
yarn install
yarn run dev // run the app (port 8080) and API (port 3000) on localhost
yarn test // run unit tests
```


## API

### GET /bars

Response body:

```
{
  "data": [{
    "id": "1",
    "name": "Bloc",
    "lat": null,
    "long": null,
    "imageUrl": "http://localhost:8080/images/bar-logos/bloc-logo.png"
  }, {
    "id": "2",
    "name": "Slouch",
    "lat": null,
    "long": null,
    "imageUrl": "http://localhost:8080/images/bar-logos/slouch-logo.png"
  }...]
}
```


### GET /bars?sortBy=name&direction=ascending

Response body:

```
{
  "data": [{
    "id": "2",
    "name": "Slouch",
    "lat": null,
    "long": null,
    "imageUrl": "http://localhost:8080/images/bar-logos/slouch-logo.png"
  }, {
    "id": "1",
    "name": "Bloc",
    "lat": null,
    "long": null,
    "imageUrl": "http://localhost:8080/images/bar-logos/bloc-logo.png"
  }...]
}
```


### GET /bars/:id

Response body:

```
{
  "id": "1",
  "name": "Bloc",
  "imageUrl": "http://localhost:8080/images/bar-logos/bloc-logo.png",
  "products": [{
    "id": "1",
    "name": "Beer",
    "imageUrl": null,
    "priceInPence": 400
  }...]
}
```


### GET /rounds

Response body:

```
{
  "data": [{
    "id": "1",
    "barId": "1",
    "orderedAt": "2017-10-25T19:49:18.208Z",
    "products": [{
      "id": "1",
      "priceInPence": 414
    }, {
      "id": "1",
      "priceInPence": 414
    }...]
  }, {
    "id": "2",
    "barId": "1",
    "orderedAt": "2017-10-30T19:49:18.208Z",
    "products": [{
      "id": "1",
      "priceInPence": 414
    }...]
  }...]
}
```


### GET /rounds?sortBy=datetime&direction=descending

Response body:

```
{
  "data": [{
    "id": "2",
    "barId": "1",
    "orderedAt": "2017-10-30T19:49:18.208Z",
    "products": [{
      "id": "1",
      "priceInPence": 414
    }...]
  }, {
    "id": "1",
    "barId": "1",
    "orderedAt": "2017-10-25T19:49:18.208Z",
    "products": [{
      "id": "1",
      "priceInPence": 414
    }, {
      "id": "1",
      "priceInPence": 414
    }...]
  }...]
}
```


### GET /rounds/:id

Response body:

```
{
  "id": "1",
  "barId": "1",
  "orderedAt": "2017-11-07T20:59:42.166Z",
  "products": [{
    "id": "1",
    "name": "Beer",
    "imageUrl": null,
    "priceInPence": 414
  }, {
    "id": "1",
    "name": "Beer",
    "imageUrl": null,
    "priceInPence": 414
  }, {
    "id": "1",
    "name": "Beer",
    "imageUrl": null,
    "priceInPence": 414
  }...]
}
```


### POST /rounds

Request body:

```
{
  "barId": "1",
  "orderedAt": "2017-11-07T20:59:42.166Z",
  "products": [{
    "id": "1",
    "priceInPence": 414
  }, {
    "id": "1",
    "priceInPence": 414
  }, {
    "id": "2",
    "priceInPence": 300
  }...]
}
```

Response body:

```
{
  "id": "1",
  "barId": "1",
  "orderedAt": "2017-11-07T20:59:42.166Z",
  "products": [{
    "id": "1",
    "priceInPence": 414
  }, {
    "id": "1",
    "priceInPence": 414
  }, {
    "id": "2",
    "priceInPence": 300
  }...]
}
```