import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Clocks101',
  tokenName: 'CLocks 101',
  tokenSymbol: 'C101',
  hiddenMetadataUri: 'ipfs://QmV3G5smxG8zrzZNjevEz7v4KQ7KXUXzdJJvCBJaam8zhk/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.025,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.035,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.055,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x9C8d46c9f987a2b5d00b07851Db52c8B80e5CF92",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
