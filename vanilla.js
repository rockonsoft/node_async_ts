const ccxt = require('ccxt');

let printSupportedExchanges = function () {
    console.log(`Supported exchanges :${ccxt.exchanges.join (', ')}`)
}

printSupportedExchanges();
