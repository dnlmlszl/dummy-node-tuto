// Modules 

// we execute one File, but can use more modules in it

// CommonJS very file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// const secret = 'Super Secret'
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }
const { john, peter } = require('./4-first-module-names')
// const names = require('./4-first-module-names')
const sayHi = require('./5-second-module-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')     // => if we have an invoked function in module, we can import this way

console.log(data)

// console.log(names)

sayHi('Béla')
sayHi(john)
// sayHi(names.john)
sayHi(peter)
// sayHi(names.peter)

