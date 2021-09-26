//#2 · Read Data from Smart Contracts with Web3.js
const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)
const Hamid = require('./Hamid.json')
const abi = Hamid.abi;
const address = "0xfA458078932C22572fcaaD17CCe5A0b855a508df"

const readcontract = async () => {
    const contract = new web3.eth.Contract(abi, address);
    const totalsupply = await contract.methods.name().call();
     console.log(totalsupply);
}
readcontract();