import { writable } from 'svelte/store'


const wallet = writable({})

function handleAccountsChanged(accounts) {
  const address = accounts[0];
  wallet.update(w => Object.assign(w, {
    address
  }))      
}

if (typeof ethereum !== 'undefined') {
  ethereum.on('accountsChanged', handleAccountsChanged)
}

wallet.connect = function() {
  if (typeof ethereum !== 'undefined') {
    ethereum.request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch(function() {

    }) 
  }
  else {
   // user doesnt have metamask. what to do what to, aaah panic.
  }
}


export default wallet