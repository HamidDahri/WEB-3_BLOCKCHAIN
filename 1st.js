//check balance 
const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/d6a9309e56434ed79461631225732e9b"
const web3 = new Web3(rpcURL)
const account = "0x0d47028DB2fb6A45B59Bc481eDac0948702eC619"

const asyncBalanceCheck = async () => {
    const balance = await web3.eth.getBalance(account);
    const balance1 = web3.utils.fromWei(balance , 'ether')
    console.log(balance1);
} 

asyncBalanceCheck()