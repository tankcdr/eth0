pragma solidity ^0.8.0;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = address(new Campaign(minimum, msg.sender));
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address=>bool) voters;
    }
    
    address public manager;
    uint  public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    uint public numRequests;
    mapping (uint => Request) public requests;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator) {
        manager =creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable  {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    //to do: emit an event when created to return the requestId
    function createRequest(string calldata description, uint value, address recipient)  
    public restricted   {
        uint requestId = numRequests++;
        Request storage r = requests[requestId];
        r.description = description;
        r.value = value;
        r.recipient = recipient;
        r.complete = false;
        r.approvalCount = 0;
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.voters[msg.sender]);
        
        request.voters[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(0 <= index);
        require(index < numRequests);
        require(!request.complete);
        require(request.approvalCount > (approversCount/2));
        
        address payable recipient = payable(request.recipient);
        recipient.transfer(request.value);
        request.complete = true;
        
    }
}