import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cryptoorgchain',
  assets: [
    {
      description:
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom: 'basecro',
          exponent: 0
        },
        {
          denom: 'cro',
          exponent: 8
        }
      ],
      base: 'basecro',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingecko_id: 'crypto-com-chain',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png'
        }
      ],
      socials: {
        webiste: 'https://cronos.org/',
        twitter: 'https://twitter.com/cronos_chain'
      }
    },
    {
      description: 'Synthetic XLM pegged 1:1 by Crypto.com',
      denom_units: [
        {
          denom: 'baseXLM',
          exponent: 0,
          aliases: ['stroop']
        },
        {
          denom: 'lumen',
          exponent: 7
        }
      ],
      base: 'baseXLM',
      name: 'Lumen (XLM) pegged token',
      display: 'lumen',
      symbol: 'XLM',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'stellar',
            base_denom: 'stroop'
          },
          provider: 'Crypto.com'
        }
      ]
    },
    {
      description:
        'The native token of Stellar network, transferred via Solo Machine.',
      denom_units: [
        {
          denom:
            'ibc/34A1D4BF5FFCDB912F64FE71D54426D56970F873F1279983B69C713B3A62D10D',
          exponent: 0,
          aliases: ['stroop']
        },
        {
          denom: 'lumen',
          exponent: 7
        }
      ],
      base: 'ibc/34A1D4BF5FFCDB912F64FE71D54426D56970F873F1279983B69C713B3A62D10D',
      name: 'Lumen (Solo Machine)',
      display: 'lumen',
      symbol: 'XLM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cryptoorgchain',
            base_denom: 'baseXLM',
            channel_id: 'channel-JEnb'
          },
          chain: {
            channel_id: 'channel-46',
            path: 'transfer/channel-46/baseXLM'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stellar',
            base_denom: 'stroop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      }
    }
  ]
};
export default info;
