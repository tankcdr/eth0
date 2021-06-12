const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');
const util = require('util')



const provider = new HDWalletProvider(process.env.RINKEBY_SECRET, process.env.RINKEBY_URL);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object})
        .send({gas: '1000000', from: accounts[0]});

    console.log(util.inspect(abi, {showHidden: false, depth: null}));
    console.log("contract deployed to", result.options.address);
};

deploy();