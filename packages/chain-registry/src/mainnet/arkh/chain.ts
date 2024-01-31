import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'arkh',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://arkhadian.com/',
  pretty_name: 'Arkhadian',
  chain_id: 'arkh',
  bech32_prefix: 'arkh',
  daemon_name: 'arkhd',
  node_home: '$HOME/.arkh',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'arkh',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'arkh'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://asc-dataseed.arkhadian.com/',
        provider: 'arkhnetwork'
      },
      {
        address: 'https://rpc.arkh.nodestake.top',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://asc-blockchain-api.arkhadian.com/',
        provider: 'arkhnetwork'
      },
      {
        address: 'https://api.arkh.nodestake.top',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'grpc.arkh.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc.arkh.nodexcapital.com:443',
        provider: 'NodeX Validator'
      }
    ]
  },
  explorers: [
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/arkh',
      tx_page: 'https://explorer.nodestake.top/arkh/tx/${txHash}'
    },
    {
      kind: 'Kynraze Explorer',
      url: 'https://explorer.kynraze.com/arkhadian',
      tx_page: 'https://explorer.kynraze.com/arkhadian/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/arkhadian',
      tx_page: 'https://explorer.nodexcapital.com/arkhadian/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
    }
  ]
};
export default info;