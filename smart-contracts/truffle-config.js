const env = process.env;
if (env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const HDWalletProvider = require('@truffle/hdwallet-provider');


module.exports = {
  compilers: {
    solc: {
      version: "0.6.1",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    rinkeby: {
      provider: new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/", 0, 10),
      network_id: 4,
      skipDryRun: true
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/a3f4d001c1fc4a359ea70dd27fd9cb51", 0, 10),
      network_id: 42,
      gas: 6000000,
      gasPrice: 1000000000,
      skipDryRun: true
    },
  }
};

