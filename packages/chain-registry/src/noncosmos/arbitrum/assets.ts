import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'arbitrum',
  assets: [
    {
      description: 'The governance token of Arbitrum',
      extended_description: 'Arbitrum is a Layer 2 scaling solution for Ethereum, enhancing transaction speed and reducing costs. Built to support smart contracts and decentralized applications (dApps), Arbitrum aims to improve scalability while maintaining compatibility with Ethereum\'s ecosystem.',
      type_asset: 'erc20',
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      denom_units: [{
          denom: '0x912CE59144191C1204E64559FE8253a0e49E6548',
          exponent: 0,
          aliases: ['arb-wei']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      base: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      coingecko_id: 'arbitrum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primary_color_hex: '#253545'
          }
        }]
    },
    {
      description: 'wETH is \'wrapped ETH\'',
      type_asset: 'erc20',
      denom_units: [{
          denom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      base: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      display: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Arbitrum Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      type_asset: 'erc20',
      denom_units: [{
          denom: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
          exponent: 0
        }],
      address: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      base: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      display: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      name: 'cGLP',
      symbol: 'cGLP'
    },
    {
      description: 'USDC issued on Arbitrum.',
      type_asset: 'erc20',
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      denom_units: [{
          denom: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        }],
      coingecko_id: 'usd-coin',
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'This is a bridged USDC token deployed by Arbitrum Foundation.',
      type_asset: 'erc20',
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      denom_units: [{
          denom: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      name: 'Bridged USDC',
      display: 'usdc',
      symbol: 'USDC.e',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Arbitrum Bridge'
        }],
      coingecko_id: 'usd-coin-ethereum-bridged',
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }]
    }
  ]
};
export default info;