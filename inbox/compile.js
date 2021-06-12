const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts', 'Inbox.sol');
const src = fs.readFileSync(inboxPath, 'utf8');

const input = {
    language: "Solidity",
    sources: {
      "inbox": {
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
module.exports = compiledThings.contracts["inbox"]["Inbox"]

