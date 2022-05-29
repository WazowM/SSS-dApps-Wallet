const symbol = require('/node_modules/symbol-sdk')

//コンソールに表示
const address = symbol.Address.createFromRawAddress("TAD7Q3FEN5CZRZFE3WX6TWEESATVTMJDS2ETVTY")
console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

//アドレス表示
const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()
