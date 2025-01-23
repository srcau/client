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

async function sendTokens() {
  const wallet = new Wallet(walletOptions);

  await wallet.setStrongholdPassword(process.env.STRONGHOLD_PASSWORD);

  const account = await wallet.getAccount('nangroup');

  await account.sync();

  const amount = '3000000'; 
  const address = 'rms1qp0lrt3434hpy4r3r0g5z2f60ggulurtm3g2ctdakflhr6qkwryh5nff6zh';

  const transaction = await account.send(amount, address, {
    allowMicroAmount: true,
  });

  console.log(`Transaction sent: ${transaction.transactionId}`);

  const blockId = await account.retryTransactionUntilIncluded(
    transaction.transactionId,
  );

  console.log(`Block sent: ${process.env.EXPLORER_URL}/block/${blockId}`);
}

sendTokens().catch(console.error);