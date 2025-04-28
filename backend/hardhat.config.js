require("@nomicfoundation/hardhat-toolbox");

require("hardhat-resolc");
require("hardhat-revive-node");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  resolc: {
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
        runs: 400,
      },
      evmVersion: "istanbul",
      compilerPath: "/Users/tsnevan/Downloads/resolc-universal-apple-darwin",
      standardJson: true,
    },
  },
  networks: {
    hardhat: {
      polkavm: true,
    },
  },
};
