//#3 · Inside Ethereum Transactions
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)
const account = "0x0d47028DB2fb6A45B59Bc481eDac0948702eC619"
const Pkey1 = "f40ea6a96bf9cded036240c08be5a89aec1c373d47ec903aa1a445f4710d0afd";
const accountTo = "0x51FDe1166c3999009FA2377E85918ADbF621cD65"
const PrivateKey1 = Buffer.from(Pkey1 , "hex");

const runtransaction = async () => {
     const txCount = await web3.eth.getTransactionCount(account)
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: accountTo,
            value: web3.utils.toHex(web3.utils.toWei('1' , 'ether')),
            gasLimit: web3.utils.toHex(21000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10' , 'gwei'))
        }
        const tx = new Tx.Transaction(txObject, { chain: "ropsten"});
        tx.sign(PrivateKey1)

        const serilizedTx = tx.serialize();
        const raw = '0x' + serilizedTx.toString('hex')

        const signtx = await web3.eth.sendSignedTransaction(raw)
        console.log("Transaction" , signtx);
    
}

runtransaction();