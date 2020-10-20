let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')

console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log(sym2 === sym3); // false

let symObj = Object(sym2)
console.log( typeof symObj );   // "object"
console.log( symObj );   // Symbol {Symbol(foo)}


typeof Symbol() === 'symbol' // true
typeof Symbol('foo') === 'symbol' // true
typeof Symbol.iterator === 'symbol' // true