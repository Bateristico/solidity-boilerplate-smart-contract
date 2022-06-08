const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
// const { MNEMONIC } = process.env

// console.log(MNEMONIC)
const provider = new HDWalletProvider(
    '',
    'https://rinkeby.infura.io/v3/921cce4cd8e845868fe15e4f6c3e0e96'
);

const web3 = new Web3(provider);

const deploy = async () => { 
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop()
}



deploy()