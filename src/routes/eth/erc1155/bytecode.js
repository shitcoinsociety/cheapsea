import fs from 'fs'
import solc from 'solc'

const content = fs.readFileSync('src/contracts/erc1155.sol.template').toString()

export function get(req, res, next) {
  const c = compile(content.replace('%NAME%', req.query.name.replace(/\W/g, '')).replace('%OWNER%', req.query.owner.replace(/\W/g, '')))
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