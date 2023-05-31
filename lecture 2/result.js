// How to import a commonjs module ?

// const arithmaticModule = require('./arithmatic');

import * as arithmeticModule from './arithmetic.js';

console.log(arithmeticModule.sum(10, 20));
// console.log(arithmaticModule.num);
