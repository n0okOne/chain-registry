import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'optimism',
  assets: [
    {
      description: 'The governance token of Optimism',
      type_asset: 'erc20',
      address: '0x4200000000000000000000000000000000000042',
      denom_units: [{
          denom: '0x4200000000000000000000000000000000000042',
          exponent: 0
        }, {
          denom: 'op',
          exponent: 18
        }],
      base: '0x4200000000000000000000000000000000000042',
      name: 'Optimism',
      display: 'op',
      symbol: 'OP',
      coingecko_id: 'optimism',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png',
          theme: {
            primary_color_hex: '#fc0424'
          }
        }]
    },
    {
      type_asset: 'evm-base',
      denom_units: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18
        }],
      base: 'wei',
      display: 'eth',
      name: 'Ether',
      symbol: 'ETH',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Optimism'
        }]
    },
    {
      description: 'USDC issued on Optimism.',
      type_asset: 'erc20',
      address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      denom_units: [{
          denom: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
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
      description: 'USDC Bridged from Ethereum via Optimism Bridge.',
      type_asset: 'erc20',
      address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      denom_units: [{
          denom: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      name: 'Bridged USDC',
      display: 'usdc',
      symbol: 'USDC.e',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Optimism Bridge'
        }],
      coingecko_id: 'bridged-usd-coin-optimism',
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