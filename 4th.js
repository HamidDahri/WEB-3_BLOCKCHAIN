//#4 · Deploying Smart Contracts with Web3.js
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)
const account = "0x0d47028DB2fb6A45B59Bc481eDac0948702eC619"
const Pkey1 = "f40ea6a96bf9cded036240c08be5a89aec1c373d47ec903aa1a445f4710d0afd";
const PrivateKey1 = Buffer.from(Pkey1 , "hex");
const Hamid = require('./Hamid.json')
const data = Hamid.bytecode;
const dataBuffer = Buffer.from(data , "hex")

const deployContract = async () => {
   const txcount = await web3.eth.getTransactionCount(account);
   const txObject = {
    nonce:    web3.utils.toHex(txcount),
    gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: dataBuffer
  }
  const tx = new Tx.Transaction(txObject, { chain: "ropsten"});
  tx.sign(PrivateKey1)

  const serializedTx = tx.serialize()
  const raw = "0x" + serializedTx.toString('hex')
 
  const txhash = await web3.eth.sendSignedTransaction(raw);
  console.log(txhash);
}

deployContract();



