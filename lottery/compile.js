const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname,'contracts', 'Lottery.sol');
const src = fs.readFileSync(lotteryPath, 'utf8');

const input = {
    language: "Solidity",
    sources: {
      "lottery": {
        content: src,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  
const compiledThings = JSON.parse(solc.compile(JSON.stringify(input)));
//console.log(compiledThings.contracts["inbox"]);
module.exports = compiledThings.contracts["lottery"]["Lottery"]

