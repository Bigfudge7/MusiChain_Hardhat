require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

//const GOERLI_URL = process.env.GOERLI_URL;
//const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",
  networks: {
  /*  goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },*/
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url:"http://127.0.0.1:7545",
      accounts:[
        '0xdbcdcd461beb9543153ea85a21493d060b2d782f9eb4bd50f2f2fbabb773e114',
      ],
    }
  },
};
