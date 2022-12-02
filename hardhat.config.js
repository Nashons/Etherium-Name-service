// require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();
// const ALCHEMY_API_KEY_URL="https://eth-goerli.g.alchemy.com/v2/Mv3exhvPWI4qmFCW7eieO9PEzgyhasT8"

// const PRIVATE_KEY = process.env.PRIVATE_KEY;

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     velas_testnet: {
//       url: "https://explorer.testnet.velas.com/rpc",
//       accounts: [PRIVATE_KEY],
//     },
    // goerli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/Mv3exhvPWI4qmFCW7eieO9PEzgyhasT8",
    //   accounts: [`${PRIVATE_KEY}`],
    // },
    // etherscan: {
    //   // Your API key for Etherscan
    //   // Obtain one at https://etherscan.io/
    //   apiKey:"QKKCJSM8RICP9FHHRVHHGZGWC8PV572SC6",
    // },
//   },
// };

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
   
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey:"QKKCJSM8RICP9FHHRVHHGZGWC8PV572SC6",
  },
}