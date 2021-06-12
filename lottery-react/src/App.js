import './App.css';
import React from "react";
import web3 from './web3';
import lottery from "./lottery";

class App extends React.Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: '',
    lastWinner: ''
  }

   async componentDidMount() {
    const manager =  await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    const lastWinner = await lottery.methods.lastWinner().call();
 
  
    this.setState({manager, players, balance, lastWinner});
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'waiting on transaction success...'});

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value,'ether')
    })

    this.setState({message: 'you have been entered!'});
  }

  onClick = async (event) => {
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'waiting on transaction success...'});

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    this.setState({message: 'A winner has been picked!'});
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p> this contract is manager by {this.state.manager} <br/>
            there are currently {this.state.players.length} people entered<br/>
            competing to win {web3.utils.fromWei(this.state.balance, 'ether')} <br /> ether
            the last winner is: {this.state.lastWinner}
        </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4> Want to try your luck?</h4>
          <div>
            <label>amount of ether to enter</label>
            <input 
             value={this.state.value}
             onChange={event=>this.setState({ value: event.target.value })}>
            </input>
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4> ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>

        <hr />

        <h3>{this.state.message}</h3>

      </div>
    );
  }
}
export default App;
