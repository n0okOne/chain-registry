import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dydxtestnet',
  assets: [
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom: 'adydx',
          exponent: 0
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      base: 'adydx',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      coingecko_id: 'dydx',
      traces: [
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          provider: 'Dydx'
        }
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    }
  ]
};
export default info;
