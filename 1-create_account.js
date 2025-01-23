const { Wallet, CoinType, Utils } = require('@iota/sdk');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const walletOptions = {
  storagePath: process.env.WALLET_DB_PATH,
  clientOptions: {
    nodes: [process.env.NODE_URL],
  },
  coinType: CoinType.Shimmer,
  secretManager: {
    stronghold: {
      snapshotPath: process.env.STRONGHOLD_SNAPSHOT_PATH,
      password: process.env.STRONGHOLD_PASSWORD,
    },
  },
};

async function createAccount() {
  const wallet = new Wallet(walletOptions);

  // Generate and store a new mnemonic in the Stronghold vault
  const mnemonic = Utils.generateMnemonic();
  await wallet.storeMnemonic(mnemonic);

  const account = await wallet.createAccount({
    alias: 'nangroup'
  });
  console.log('Account created:', account);
}

createAccount().catch(console.error);