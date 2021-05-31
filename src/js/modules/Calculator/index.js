const WRONG_PARAMETERS = '"structure" and "price" must be Object';
const LITER = 1000; // ml

class Calculator {

  constructor() {}

  static calculate({ structure, price }) {
    return new Promise(( resolve, reject ) => {

      if ( !isObject( structure ) || !isObject( price ) ) reject( WRONG_PARAMETERS );

      const result = Object.entries( structure ).reduce(( acc, [ key, ml ] ) => {

        const value = price[key];

        if( value === undefined ) reject( `price "${key}" can not be "undefined"` );

        acc += value * ( ml * LITER );
        return acc;

      }, 0);

      resolve( result );
    });
  }
};

const isObject = ( obj ) => {
  return typeof obj === 'object' && obj !== null && obj.constructor == Object;
};

export default Calculator;