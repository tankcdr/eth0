pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address[] public players;
    address public lastWinner;
    
    constructor()  {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > 10000 wei);
        players.push(msg.sender);
    }
    
    function pickWinner() public payable restricted {
        uint index = random() % players.length;
        address payable winner = payable(players[index]);
        winner.transfer(address(this).balance); 
        lastWinner = winner;
        players = new address[](0);
    }
    
    function random() private view returns(uint)  {
        return uint(
           keccak256(
               abi.encodePacked(
                   block.difficulty,block.timestamp,players)));
    }
    
    function getPlayers() public view returns(address[] memory) {
        return players;
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
