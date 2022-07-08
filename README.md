# PRODUCT API - [Kuehne+Nagel]

NodeJS-based Product API in JavaScript, using Express framework and ES6 language features.

## Setup Guide

### Run Locally

1. Install dependencies
    - ```yarn```

2. Run the API
    - ```yarn start```

### Run With Docker

1. Build the image
    - ```docker build -t productApi .```

2. Run the Docker image
    - ```docker run -t productApi```

## Tests

you can run unit tests using the below command

```yarn test```

## Swagger Documentation

After you successfully run the project you can see the Sragger document.

Swagger URL : http://localhost:5000/api-docs

## Assumptions

1. DB file doesn't contains duplicate data.
2. from and to dates are given as ```YYYY-MM-DD``` format.
