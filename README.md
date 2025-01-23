# IOTA Wallet and Token Transfer

This repository contains scripts to create an IOTA wallet, generate addresses, check account balance, and send tokens using the IOTA SDK.

## Prerequisites

-   Node.js installed on your machine (version 16 or higher recommended).
-   npm (Node Package Manager).

## Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/srcau/client
    cd client
    ```

2.  **Install dependencies:**

    ```sh
    npm i
    ```

3.  **Create a [.env](https://github.com/srcau/client/blob/main/.env) file:**

    Use the existing [.env](https://github.com/srcau/client/blob/main/.env) file in the project directory or create a new file by adding the following content, replacing the placeholders with your actual values. Make sure to keep your Stronghold password secure.
    ```env
    WALLET_DB_PATH=./wallet-db
    NODE_URL=https://api.testnet.shimmer.network
    STRONGHOLD_SNAPSHOT_PATH=./wallet.stronghold
    STRONGHOLD_PASSWORD=your_stronghold_password
    EXPLORER_URL=https://explorer.shimmer.network/testnet
    ```
    *   `WALLET_DB_PATH`: Path to store wallet database.
    *   `NODE_URL`: URL of the IOTA/Shimmer node you are connecting to.
    *   `STRONGHOLD_SNAPSHOT_PATH`: Path to your Stronghold snapshot file.
    *   `STRONGHOLD_PASSWORD`: Password to protect your Stronghold.
    *  `EXPLORER_URL`: URL of the block explorer you are using.

## Running the Scripts

This project includes several scripts that perform different actions related to IOTA/Shimmer wallets.

### 1. [Script to Create an Account](https://github.com/srcau/client/blob/main/1-create_account.js)

*   Run the following command to create a new IOTA account:

    ```sh
    node 1-create_account.js
    ```

    **Output (example):**
    ```
    Account created: Account {
      meta: {
        index: 0,
        coinType: 4219,
        alias: 'nangroup',
        publicAddresses: [ [Object] ],
        internalAddresses: [],
        addressesWithUnspentOutputs: [],
        outputs: {},
        lockedOutputs: [],
        unspentOutputs: {},
        transactions: {},
        pendingTransactions: [],
        incomingTransactions: {},
        nativeTokenFoundries: {}
      },
      methodHandler: WalletMethodHandler { methodHandler: [External: 125004520] }
    }
    ```
    *This script will generate a new account and output information about it.*

### 2. [Script to Generate Sender Address](https://github.com/srcau/client/blob/main/2-sender_address.js)

*   Run this command to generate a new receiving address for your account:

    ```sh
    node 2-sender_address.js
    ```
    **Output (example):**
    ```
    Generated address: rms1qq96uwldt0gyt37pkdtu60hr33h8gaelsk5h8n6tt6ehl6cfqwnvkyme6fn
    ```
    *This script will output the generated IOTA address. Note this down, as it will be used for the next step.*

### 3. [Link to Get Funds from Shimmer Faucet](https://faucet.testnet.shimmer.network/)

*   Before proceeding, you need to fund your generated address with testnet tokens from the Shimmer Faucet.
*   Visit the [Shimmer Faucet](https://faucet.testnet.shimmer.network/) and request funds for the address you generated in step 2. This is essential to have a balance for performing transactions.

### 4. [Script to Check Account Ballance](https://github.com/srcau/client/blob/main/4-check_account_balance.js)

*   Run the following command to check the account balance:

    ```sh
    node 4-check_account_balance.js
    ```

    **Output (example):**
    ```
    Balance {
      baseCoin: { total: 1000000000n, available: 1000000000n, votingPower: '0' },
      requiredStorageDeposit: { basic: 42600n, alias: 0n, foundry: 0n, nft: 0n },
      nativeTokens: [],
      aliases: [],
      foundries: [],
      nfts: [],
      potentiallyLockedOutputs: {}
    }
    ```
    *This script will output the balance of your IOTA account.*

### 5. [Script to Send Tokens](https://github.com/srcau/client/blob/main/5-send_tokens.js)

*   Run the following command to send tokens:

    ```sh
    node 5-send_tokens.js
    ```

    **Output (example):**
    ```
    Transaction sent: 0xbed68a08ee2cc0d0779a7ca47a0e47494f5e6f76c8fa38ba6e759bed2def0720
    Block sent: https://explorer.shimmer.network/testnet/block/0x1b55fcadfaf442265820609cc463b3c34e7e912ae72799c151a7267ddfa2c097
    ```
    *This script will send tokens from your IOTA account to the specified address and output the transaction details.*

## Notes

-   Make sure you replace all placeholder values in the [.env](https://github.com/srcau/client/blob/main/.env) file with your actual details.
-   Funding your address using the Shimmer Faucet is required to proceed with balance checks and sending transactions.
-  Remember to keep your Stronghold password secure, as it is used to secure your wallet.
- The scripts provided in this repository use a hardcoded receiver address of mine. You can modify the [5-send_tokens.js](https://github.com/srcau/client/blob/main/5-send_tokens.js) file to send tokens to the address of your choice.