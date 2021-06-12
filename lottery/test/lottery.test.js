const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

let accounts;
let lottery;

beforeEach(async() => {
    // get  a list of all accounts
    accounts = await web3.eth.getAccounts();
    //use one of those account to deploy contract
    lottery = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object})
        .send({ from: accounts[0], gas: '1000000'});
});

describe("Lottery Contract", () => {
    it('deploys a contract', () => {
        //is address an options property
        assert.ok(lottery.options.address);
    });

    it('allows one account to enter', async () => {
        const message = await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.strictEqual(accounts[0],players[0]);
        assert.strictEqual(1, players.length);
    });

    it('allows multiple accounts to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.strictEqual(accounts[0],players[0]);
        assert.strictEqual(accounts[1],players[1]);
        assert.strictEqual(accounts[2],players[2]);
        assert.strictEqual(3, players.length);
    });

    it('requires a minimu amount of ether to enter', async () => {
        try {
            await lottery.methods.enter().send({
                from: accounts[0],
                value: web3.utils.toWei('0.0001', 'ether')
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('only manager can call pickwinner', async () => {
        try {
            await lottery.methods.pickWinner().send({
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('sends money to winner and resets player array', async () => {

        await lottery.methods.enter().send({
            from: accounts[0],
            value: Web3.utils.toWei('2','ether')
        });

        const initialBalance = await web3.eth.getBalance(accounts[0]);

        await lottery.methods.pickWinner().send({
            from: accounts[0]
        });

        const currentBalance = await web3.eth.getBalance(accounts[0]);
        const difference = currentBalance - initialBalance;
        assert(difference>web3.utils.toWei('1.8','ether'));
    });
});