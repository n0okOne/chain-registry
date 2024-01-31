import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'coss',
  assets: [
    {
      description: 'The native staking and governance token of the COSS.',
      denom_units: [
        {
          denom: 'ucgas',
          exponent: 0
        },
        {
          denom: 'cgas',
          exponent: 6
        }
      ],
      base: 'ucgas',
      name: 'CGAS',
      display: 'cgas',
      symbol: 'CGAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.svg'
        }
      ]
    },
    {
      description: 'The inscription token of the COSS.',
      denom_units: [
        {
          denom: 'ucoss',
          exponent: 0
        },
        {
          denom: 'coss',
          exponent: 6
        }
      ],
      base: 'ucoss',
      name: 'COSS',
      display: 'coss',
      symbol: 'COSS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg'
        }
      ]
    }
  ]
};
export default info;