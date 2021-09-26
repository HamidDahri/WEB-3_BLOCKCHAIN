//#5 · Calling Smart Contract Functions with Web3.js
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)
const account = "0x0d47028DB2fb6A45B59Bc481eDac0948702eC619"
const Pkey1 = "f40ea6a96bf9cded036240c08be5a89aec1c373d47ec903aa1a445f4710d0afd";
const PrivateKey1 = Buffer.from(Pkey1 , "hex");
const address = "0x6D35A0A389fbc9a5549Fc96D71d9A3EB69Db8C01"
const contractAbi = [
    {
        "inputs": [],
        "name": "age",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAge",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            }
        ],
        "name": "setAge",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const callingFunctionContract = async () => {
    try{
        const contract = new web3.eth.Contract(contractAbi, address);
        const txcount = await web3.eth.getTransactionCount(account);
        const txObject = {
            nonce:    web3.utils.toHex(txcount),
            gasLimit: web3.utils.toHex(8000000), // Raise the gas limit to a much higher amount
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            to: address,
            data: contract.methods.setAge(19).encodeABI()
          }
          const tx = new Tx.Transaction(txObject, { chain: "ropsten"});
          tx.sign(PrivateKey1)
          
          const serializeTx = tx.serialize()
          const raw = '0x' + serializeTx.toString('hex')
    
          const txhash = await web3.eth.sendSignedTransaction(raw)
          console.log(txhash);
    } catch(error){
        console.log(error)
    }

}

callingFunctionContract();



