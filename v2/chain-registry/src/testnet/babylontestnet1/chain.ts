import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'babylontestnet1',
  status: 'killed',
  website: 'https://www.babylonchain.io',
  networkType: 'testnet',
  prettyName: 'Babylon Testnet',
  chainId: 'bbn-test1',
  bech32Prefix: 'bbn',
  daemonName: 'babylond',
  nodeHome: '$HOME/.babylond',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ubbn'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubbn'
      }]
  },
  codebase: {

  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
  },
  apis: {
    rpc: [{
        address: 'rpc.testnet.babylonchain.io:26657',
        provider: 'Babylon foundation'
      }],
    rest: [{
        address: 'rpc.testnet.babylonchain.io:1317',
        provider: 'Babylon foundation'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'babylonscan',
      url: 'https://babylonscan.io'
    }, {
      kind: 'explorers.guru',
      url: 'https://babylon.explorers.guru',
      txPage: 'https://babylon.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
    }],
  slip44: 118
};
export default info;