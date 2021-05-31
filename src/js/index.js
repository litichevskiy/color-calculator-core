import Calculator from './modules/Calculator/index';

const price = require('../../colors-data/price.json');
const colorsFun = require('../../colors-data/colors-fan.json');
const { structure } = colorsFun.items[0];

Calculator.calculate({ structure, price })
.then( price => console.log( price ))
.catch( er => console.error( er ));