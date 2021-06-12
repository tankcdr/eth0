import web3 from './web3';

const address = '0xb6c40cf272264737AaB35347FA11d63dCBfd2Ec8';

const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
    constant: undefined,
    payable: undefined,
    signature: 'constructor'
  },
  {
    inputs: [],
    name: 'enter',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    constant: undefined,
    payable: true,
    signature: '0xe97dcb62'
  },
  {
    inputs: [],
    name: 'getPlayers',
    outputs: [ { internalType: 'address[]', name: '', type: 'address[]' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x8b5b9ccc'
  },
  {
    inputs: [],
    name: 'lastWinner',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xfe188184'
  },
  {
    inputs: [],
    name: 'manager',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x481c6a75'
  },
  {
    inputs: [],
    name: 'pickWinner',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    constant: undefined,
    payable: true,
    signature: '0x5d495aea'
  },
  {
    inputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    name: 'players',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xf71d96cb'
  }
];

export default new web3.eth.Contract(abi, address);