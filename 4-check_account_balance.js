const { Wallet, CoinType } = require('@iota/sdk');
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

async function checkAccountBalance() {
  const wallet = new Wallet(walletOptions);

  await wallet.setStrongholdPassword(process.env.STRONGHOLD_PASSWORD);

  const account = await wallet.getAccount('nangroup');

  const _syncBalance = await account.sync();

  const balance = await account.getBalance();
  console.log('Balance', balance);
}

checkAccountBalance().catch(console.error);