const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source =  fs.readFileSync(campaignPath,'utf8');

const input = {
    language: "Solidity",
    sources: {
      "contracts": {
        content: source,
      }
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts.contracts;

fs.ensureDirSync(buildPath);
for(let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract+'.json'),
        output[contract]
    );
}