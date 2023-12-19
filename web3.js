const { Web3 } = require("web3");
// console.log(Web3);

// const URL = process.env.INFURA_API_KEY;
// const URL = "https://mainnet.infura.io/v3/d3126bf5770f4bd4bd38c46470cbbfb3";

// const web3 = new Web3(URL);

// const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";
// let balance = 0;
// balance = web3.eth.getBalance(address).then(console.log);
// balance = web3.utils.fromWei(address, "ether");

// console.log(balance);
// console.log(web3);
// testing with ganache
const web3 = new Web3("HTTP://127.0.0.1:7545");
// console.log(web3);
web3.eth
  .getBalance("0x8E7cc7BeF5Ec235AdC8E3EbD1dc46163a8f06Ca5")
  .then(console.log);
// let eth = web3.utils.fromWei(
//   "0x45cc5dec9fbd06e308eb9466708b5c02e8a0383b",
//   "ether"
// );

// console.log(eth);
