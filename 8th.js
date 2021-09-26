//#8 · Web3.js Utilities
const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)

const util = async () => {
   var gasPrice = await web3.eth.getGasPrice();
   const gas = gasPrice.toString();
   const gasPriceEth =  web3.utils.fromWei(gas , 'ether');
   console.log(gasPriceEth);

   const a =  web3.utils.sha3('Hamid Mustafa Dahri');
   console.log(a);

   const b = web3.utils.keccak256("Hamid Mustafa Dahri")
   console.log(b);
   
   const c =  web3.utils.randomHex(32);
   console.log(c);
}

util();