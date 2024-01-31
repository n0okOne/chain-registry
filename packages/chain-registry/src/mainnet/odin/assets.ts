import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'odin',
  assets: [
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [
        {
          denom: 'loki',
          exponent: 0
        },
        {
          denom: 'odin',
          exponent: 6
        }
      ],
      base: 'loki',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      coingecko_id: 'odin-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }
      ]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [
        {
          denom: 'mGeo',
          exponent: 0
        },
        {
          denom: 'geo',
          exponent: 6
        }
      ],
      base: 'mGeo',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }
      ]
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [
        {
          denom: 'mO9W',
          exponent: 0
        },
        {
          denom: 'O9W',
          exponent: 6
        }
      ],
      base: 'mO9W',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }
      ]
    }
  ]
};
export default info;