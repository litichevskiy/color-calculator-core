import Calculator from './index';

const price = require('../../../../colors-data/price.json');
const colorsFun = require('../../../../colors-data/colors-fan.json');
const { structure } = colorsFun.items[0];

describe('testing method calculate', () => {

  test('expect method will return 72.5', () => {

    return expect( Calculator.calculate({ structure, price }) )
    .resolves.toBe( 72.5 );
  });

  test('method fails with error when "structure" not Object', () => {

    return expect( Calculator.calculate({ structure: null, price }) )
    .rejects.toMatch( /[a-z]+/ig );
  });

  test('method fails with error when "price" not Object', () => {

    return expect( Calculator.calculate({ structure, price: null }) )
    .rejects.toMatch( /[a-z]+/ig );
  });

  test('method fails with error when "price" and "structure" wrong parametrs', () => {

    return expect( Calculator.calculate({ structure: [], price: 10 }) )
    .rejects.toMatch( /[a-z]+/ig );
  });

  test('method fails with error when "price" not contain required "key"', () => {

    const structure = { "a": 0.01, "b": 0.015 };
    const price = { a: 0.5 };

    return expect( Calculator.calculate({ structure, price }) )
    .rejects.toMatch( /[a-z]+/ig );
  });

  test('expect method will return 0 when "structure" is empty Object', () => {

    return expect( Calculator.calculate({ structure: {}, price }) )
    .resolves.toBe( 0 );
  });
});