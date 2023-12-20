let { Web3, utils } = require("web3");

// connecting with ganache
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// finding acc details
// defaults to wei
// web3.eth.getBalance("0xB05916a8bE036353f05068565C52AfFfA8D3A435").then(console.log);

// web3 provides utils to convert it into ether or other equivalents
// web3.eth
//   .getBalance("0xB05916a8bE036353f05068565C52AfFfA8D3A435")
//   .then((result) => console.log(web3.utils.fromWei(result, "ether")));

// transfer eth from one acc to another
web3.eth.sendTransaction({
  from: "0x2B9FaBfcBD673a677C7f6d41D93B069dee1200A9",
  to: "0xB3c6C39c3E921d3e922DBAFF030EcEbF16514e4D",
  value: web3.utils.toWei("10", "ether"),
});
