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


let obj = {}

obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';


// Symbols are not enumerable in for...in iterations.
for (let i in obj) {
   console.log(i)  // logs "c" and "d"
}



//----------------------------------

// JSON ignore: Symbol-keyed properties 
console.log( JSON.stringify({[Symbol('foo')]: 'foo'}) );
// '{}'

//----------------------------------

// Symbol use in object
let object = {[sym2]: 1}
console.log( object[sym2] );             // 1
console.log( object[Object(sym2)] );     // still 1

//----------------------------------

let symbolObj = {
    a: 10,
    [sym2] : 20,
    [Symbol('Apple')] : 30,
  // Symbol('Apple')  : 20  <-- not using without square bracket
}

console.log(symbolObj.a); // 10
console.log(symbolObj[sym2]); // 20
console.log(symbolObj[Symbol('Apple')]); // undefined

//----------------------------------

// Global Symbol
let globalSymbol = Symbol.for("name");

// Local Symbol
let localSymbol = Symbol("name");

//----------------------------------

// Global symbols
let symX = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again
let symY = Symbol.for("id");

// the same symbol
console.log( symX === symY ); // true