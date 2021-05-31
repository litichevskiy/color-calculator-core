## color-calculator-core



### Installation


```bash
npm install
```

### Build

```bash
npm run dev
```
and open: [localhost:3000](http://localhost:3000/)

### Tests

```bash
npm run test
```

### Usage

```js
import Calculator from './modules/Calculator/index';

const price = {
  "a": 0.5,
  "b": 1.2,
  "c": 0.6,
  "d": 0.75,
};

const structure = {
  "a": 0.01,
  "b": 0.015,
  "c": 0.02,
  "d": 0.03,
};

// structure in ml

Calculator.calculate({ structure, price })
.then( price => console.log( price ))
.catch( er => console.error( er ));
```
