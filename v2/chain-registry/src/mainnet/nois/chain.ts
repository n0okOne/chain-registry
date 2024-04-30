import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nois',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://nois.network',
  prettyName: 'Nois',
  chainId: 'nois-1',
  bech32Prefix: 'nois',
  daemonName: 'noisd',
  nodeHome: '$HOME/.noisd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unois',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.05,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unois'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'v0.45.15',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.31.0'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
      theme: {
        primaryColorHex: '#0C0914'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://nois-rpc.nysa.network',
        provider: 'nysa.network'
      },
      {
        address: 'https://nois.rpc.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://nois-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-nois.mib.tech/',
        provider: 'MadeInBlock'
      },
      {
        address: 'https://m-nois.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'http://nois.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-nois.ezstaking.dev',
        provider: 'EZStaking'
      },
      {
        address: 'https://nois-mainnet-rpc.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://rpc-nois.d-stake.xyz',
        provider: 'D-Stake'
      },
      {
        address: 'https://rpc-nois.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://nois-mainnet-rpc.autostake.com',
        provider: 'AutoStake'
      },
      {
        address: 'https://nois-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://nois-rpc.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://nois.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.nois.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://nois-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.nois.cumulo.org.es',
        provider: 'Cumulo'
      }
    ],
    grpc: [
      {
        address: 'https://nois-grpc.nysa.network',
        provider: 'nysa.network'
      },
      {
        address: 'nois.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'https://nois-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://grpc.noismain.mcbnode.online',
        provider: 'mcbnode'
      },
      {
        address: 'http://nois.grpc.m.stavr.tech:191',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'nois-mainnet-grpc.itrocket.net:36090',
        provider: 'itrocket'
      },
      {
        address: 'nois-mainnet-grpc.itrocket.net:36090',
        provider: 'itrocket'
      },
      {
        address: 'https://grpc.nois.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-nois.d-stake.xyz',
        provider: 'D-Stake'
      },
      {
        address: 'https://grpc.nois.hexnodes.co',
        provider: 'HexNodes'
      },
      {
        address: 'https://grpc-nois.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://nois-testnet-grpc.autostake.com',
        provider: 'AutoStake'
      },
      {
        address: 'nois-grpc.polkachu.com:17390',
        provider: 'Polkachu'
      },
      {
        address: 'https://nois-grpc.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'nois.grpc.kjnodes.com:15190',
        provider: 'kjnodes'
      },
      {
        address: 'grpc.nois.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'nois-grpc.stakeandrelax.net:17390',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc.nois.cumulo.org.es:443',
        provider: 'Cumulo'
      }
    ],
    rest: [
      {
        address: 'https://m-nois.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://nois-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lcd-nois.ezstaking.dev',
        provider: 'EZStaking'
      },
      {
        address: 'https://lcd-nois.mib.tech/',
        provider: 'MadeInBlock'
      },
      {
        address: 'https://nois.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://nois-mainnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://api-nois.d-stake.xyz',
        provider: 'D-Stake'
      },
      {
        address: 'https://api-nois.sr20de.xyz',
        provider: 'SR20DE'
      },
      {
        address: 'https://nois-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://nois-rest.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://nois.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api.nois.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://nois-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://api.nois.cumulo.org.es',
        provider: 'Cumulo'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/nois',
      txPage: 'https://ezstaking.app/nois/txs/${txHash}',
      accountPage: 'https://ezstaking.app/nois/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/nois-mainnet',
      txPage: 'https://explorer.stavr.tech/nois-mainnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/nois-mainnet/account/${accountAddress}'
    },
    {
      kind: 'BccNodes',
      url: 'https://explorer.stavr.tech/nois-mainnet',
      txPage: 'https://explorer.bccnodes.com/nois-M/txs/${txHash}',
      accountPage: 'https://explorer.bccnodes.com/nois-M/account/${accountAddress}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://nois.explorers.guru',
      txPage: 'https://nois.explorers.guru/transaction/${txHash}',
      accountPage: 'https://nois.explorers.guru/account/${accountAddress}'
    }
  ],
  keywords: [
    'nois',
    'randomness',
    'drand',
    'wasm'
  ]
};
export default info;