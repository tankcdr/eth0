const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

const initialMessage = 'Hi Chris!'
let accounts;
let inbox;

beforeEach(async() => {
    // get  a list of all accounts
    accounts = await web3.eth.getAccounts();
    //use one of those account to deploy contract
    inbox = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments: [initialMessage]})
        .send({ from: accounts[0], gas: '1000000'});
});

describe("Inbox", () => {
    it('deploys a contract', () => {
        //is address an options property
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.strictEqual(message,initialMessage);
    });

    it('can set message', async () => {
        const initMessage = 'Hi Christopher';
        await inbox.methods.setMessage(initMessage).send({
            from: accounts[0]
        });
        const message = await inbox.methods.message().call();
        assert.strictEqual(message,initMessage);
    });
});