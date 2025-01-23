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

async function getAddress() {
  const wallet = new Wallet(walletOptions);

  await wallet.setStrongholdPassword(process.env.STRONGHOLD_PASSWORD);

  const account = await wallet.getAccount('nangroup');

  // Generate a new address
  const address = (await account.generateEd25519Addresses(1))[0];

  console.log(`Generated address:`, address.address);
}

getAddress().catch(console.error);