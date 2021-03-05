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

function encode(fun, paramValues) {
  const paramTypes = fun.split('(')[1].replace(')','').split(',')
  return web3.eth.abi.encodeParameters(paramTypes, paramValues)
}

web3.get = async function(to, fun, type, ...params) {
  const sig = web3.utils.sha3(fun).slice(0,10)
  let data = encode(fun, params).replace('0x', sig)
  const result = await web3.eth.call({to, data})
  return web3.eth.abi.decodeParameter(type, result)
}

web3.getString = function(to, fun, ...params) {
  return web3.get(to, fun, 'string', ...params);
}

web3.getAddress = function(to, fun, ...params) {
  return web3.get(to, fun, 'address', ...params);
}


export default web3