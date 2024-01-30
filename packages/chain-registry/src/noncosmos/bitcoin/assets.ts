import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'bitcoin',
  assets: [
    {
      description: 'Bitcoin',
      denom_units: [
        {
          denom: 'sat',
          exponent: 0
        },
        {
          denom: 'btc',
          exponent: 8
        }
      ],
      base: 'sat',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png'
      },
      coingecko_id: 'bitcoin',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png'
        }
      ]
    }
  ]
};
export default info;
