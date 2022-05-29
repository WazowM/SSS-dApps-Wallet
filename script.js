const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TAD7Q3FEN5CZRZFE3WX6TWEESATVTMJDS2ETVTY")
console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)
