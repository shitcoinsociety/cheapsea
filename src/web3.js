import Fortmatic from 'fortmatic'
import Web3 from 'web3'

let provider = 'https://node.cheapeth.org/rpc';

//
// if (typeof ethereum !== 'undefined') {
//   provider = ethereum
// }
// else if (typeof window !== 'undefined') {
//   provider = new Fortmatic('pk_live_5CA8F3F01358BF06', {
//     rpcUrl: 'http://node.cheapeth.org/rpc',
//     chainId: 777
//   }).getProvider()
// }

const web3 = new Web3(provider)

function connectMetamask() {
  ethereum.send('eth_requestAccounts')
  .then(function() {
    
  })
  .catch(function() {
    
  })
}


export default web3