const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const util = require('util')

const provider = new HDWalletProvider(process.env.RINKEBY_SECRET, process.env.RINKEBY_URL);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({data: compiledFactory.evm.bytecode.object})
        .send({gas: '2000000', from: accounts[0]});

    console.log(util.inspect(compiledFactory.abi, {showHidden: false, depth: null}));
    console.log("contract deployed to", result.options.address);
};

deploy();