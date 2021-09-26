//#6 · Smart Contract Events with Web3.js
const Web3 = require('web3')
const Hamid = require('./Hamid.json')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)
const Pkey1 = "f40ea6a96bf9cded036240c08be5a89aec1c373d47ec903aa1a445f4710d0afd";
const contractAddres = "0x36Ae59b64eF3D347B29E34de8cb75989Df05FD1e";
const contractAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "AgeCaller",
        "type": "event"
    },
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

const eventcall = async () => {
     const contract = new web3.eth.Contract(contractAbi , contractAddres);

     const events = await contract.getPastEvents(
         "AgeCaller",
         {
             fromBlock:0,
             toBlock: "latest"
         }
     );

     console.log(events);
}

eventcall();