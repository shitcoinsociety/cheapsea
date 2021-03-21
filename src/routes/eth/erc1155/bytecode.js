import fs from 'fs'
import path from 'path'
import solc from 'solc'

const contract = `
// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract %NAME% is ERC1155, Ownable {
    constructor() ERC1155("https://cheapsea.io/tokens/%OWNER%/{id}.json") {}

    function mint(address account, uint256 id, uint256 amount, bytes memory data) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public onlyOwner {
         _mintBatch(to, ids, amounts, data);
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

}
`

export function get(req, res, next) {
  const c = compile(contract.replace('%NAME%', req.query.name.replace(/\W/g, '')).replace('%OWNER%', req.query.owner.replace(/\W/g, '')))
  const bytecodes = {}
  for (var contractName in c) {
    bytecodes[contractName] =  c[contractName].evm.bytecode.object
  }
  res.end(JSON.stringify(bytecodes))
}


function compile(src) {
  var input = {
    language: 'Solidity',
    sources: {
      'erc1155.sol': {
        content: src
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  // New syntax (supported from 0.5.12, mandatory from 0.6.0)
  var output = JSON.parse(
    solc.compile(JSON.stringify(input), { import: findImports })
  );
 console.log(output)
  // `output` here contains the JSON output as specified in the documentation
 return output.contracts['erc1155.sol']
}

function findImports(path) {
  const importContents = fs.readFileSync('node_modules/'+path).toString()
  return {
    contents: importContents
  };

}