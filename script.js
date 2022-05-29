const symbol = require('/node_modules/symbol-sdk')

//コンソールに表示
const address = symbol.Address.createFromRawAddress("TAD7Q3FEN5CZRZFE3WX6TWEESATVTMJDS2ETVTY")
console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

//アドレス表示
const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

//シンボルテストネット設定値
const GENERATION_HASH = '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
const EPOCH = 1637848847
const XYM_ID = '3A8416DB2D53B6C8'
const NODE_URL = 'https://sym-test.opening-line.jp:3001'
const NET_TYPE = symbol.NetworkType.TEST_NET
