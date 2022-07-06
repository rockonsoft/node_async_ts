import * as minimist from 'minimist';
import * as ccxt from 'ccxt'


const argv = minimist.default(process.argv.slice(2));



async function ListExchanges(name: string) {
  console.log(`Hello ${name}`);
  console.log(ccxt.exchanges) 
}

async function ListUSDC(symbol:string, exhanges:string[]) {

}

async function ListSymbolsForExchanges(exchangeName:string){
  const CCXT = ccxt as any; // Hack!

  let exchangeFound = CCXT.exchanges.indexOf (exchangeName) > -1
  if (exchangeFound) {
    let exchange:ccxt.Exchange = new CCXT[exchangeName];
  let markets = await exchange.loadMarkets ()

  Object.values (markets).forEach (market => console.log (`id:${market.id} symbol:${market.symbol}`))

  }

}

async function FetchTickerForExchange(exchangeName:string, symbol:string){
  // symbol = base currenc vs. quote currency ETH/USDC - base:ETH:quoteUSDC
  const CCXT = ccxt as any; // Hack!

  let exchangeFound = CCXT.exchanges.indexOf (exchangeName) > -1
  if (exchangeFound) {
    let exchange:ccxt.Exchange = new CCXT[exchangeName];
  
    const ticker = await exchange.fetchTicker(symbol);
    console.log(`${symbol}:ASK:${ticker.ask} BID:${ticker.bid} Base Volume:${ticker.bid} close:${ticker.close} close:${ticker.last}`);
  }

}

async function GetUSDCZAR(){
  const CCXT = ccxt as any; // Hack!
  const exchangeName = 'luno';
  let exchangeFound = CCXT.exchanges.indexOf (exchangeName) > -1
  if (exchangeFound) {
    let exchange:ccxt.Exchange = new CCXT[exchangeName];
  
    const ethUsdc = await exchange.fetchTicker('ETH/USDC');
    console.log(`ETH/USDC =>ASK:${ethUsdc.ask} BID:${ethUsdc.bid} Base Volume:${ethUsdc.bid} close:${ethUsdc.close} last:${ethUsdc.last}`);
    const ethZar = await exchange.fetchTicker('ETH/ZAR');
    console.log(`ETH/ZAR =>ASK:${ethZar.ask} BID:${ethZar.bid} Base Volume:${ethZar.bid} close:${ethZar.close} last:${ethZar.last}`);

    console.log(`USDC/ZAR => ASK:${ethZar.ask/ethUsdc.ask} BID:${ethZar.bid/ethUsdc.bid} close:${ethZar.close/ethUsdc.close} last:${ethZar.last/ethUsdc.last}`);

  }

}

if (argv.exchanges) {
  ListExchanges(argv.name).then(() => {
    console.log('Utility completed.');
  });
}

if (argv.list_symbols) {
  ListSymbolsForExchanges(argv.exchange).then(() => {
    console.log('Utility completed.');
  });
}

//fetch ticker
if (argv.fetch_ticker) {
  FetchTickerForExchange(argv.exchange, argv.fetch_ticker).then(() => {
    console.log('Utility completed.');
  });
}

if (argv.fetch_usdc_zar) {
  GetUSDCZAR().then(() => {
    console.log('Utility completed.');
  });
}

if (argv.help) {
  console.log('Usage:');
  console.log('--exchanges, Prints all the exchanges.');
  console.log('--name, Prints the name specified.');
  console.log('--help, Prints the usage documentation.');
}
