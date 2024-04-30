import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ununifi',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://ununifi.io/',
  prettyName: 'UnUniFi',
  chainId: 'ununifi-beta-v1',
  bech32Prefix: 'ununifi',
  daemonName: 'ununifid',
  nodeHome: '$HOME/.ununifi',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uguu',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uguu'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'ununifi/cosmos-sdk v0.47.3-custom-bank-1',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.40.1'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://a.lcd.ununifi.cauchye.net:26657',
        provider: 'CauchyE'
      },
      {
        address: 'https://rpc.ununifi.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://ununifi-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ununifi-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ununifi-rpc.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    rest: [
      {
        address: 'https://a.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE'
      },
      {
        address: 'https://b.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE'
      },
      {
        address: 'https://api.ununifi.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://ununifi-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ununifi-api.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    grpc: [
      {
        address: 'a.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE'
      },
      {
        address: 'b.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE'
      },
      {
        address: 'ununifi-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.ununifi.nodestake.top:9090',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-ununifi.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://ununifi-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'ununifi-grpc.genznodes.dev:54090',
        provider: 'genznodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'UnUniFi Explorer',
      url: 'https://ununifi.io/explorer',
      txPage: 'https://ununifi.io/explorer/txs/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/ununifi',
      txPage: 'https://explorer.nodestake.top/ununifi/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/Ununifi',
      txPage: 'https://exp.nodeist.net/Ununifi/tx/${txHash}'
    }
  ],
  keywords: [
    'staking',
    'wasm',
    'assets',
    'nft'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
    }]
};
export default info;