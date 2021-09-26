//#7 · Inspecting Blocks with Web3.js
const Web3 = require('web3')
const Hamid = require('./Hamid.json')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)

const inspectblock = async () => {
     const latestblocknumber = await web3.eth.getBlockNumber();
     console.log("The latest block number Hamid",latestblocknumber);
     const latestblock = await web3.eth.getBlock('latest');
     
     console.log("The latest block Hamid" , latestblock);

     const latest =  await web3.eth.getBlockNumber()
     for (let i = 0; i < 10; i++) {
        const check = await web3.eth.getBlock(latest - i)
        console.log("Number Hamid"+i , check);
      }
      const hash = '0xcfbb949e9f7b5bf076b17e35d3dd8da828d4963561ff48e144829098e7e6772f'
     const check1 = await  web3.eth.getTransactionFromBlock(hash, 11110561)
     console.log(check1);
}

inspectblock();