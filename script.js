const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TDB6EPSUXT6RFLQMJDWPVO5E7TJN2AW3KLEEO6A")
console.log("Oh Yeah!! Symbol")
console.log(`Your Address : ${address.plain()}`)
