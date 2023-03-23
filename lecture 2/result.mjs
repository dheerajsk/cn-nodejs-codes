// How to import a commonjs module ?

// const arithmaticModule = require('./arithmatic');

import * as arithmaticModule from './arithmatic.mjs';

console.log(arithmaticModule.sum(10, 20));
// console.log(arithmaticModule.num);
