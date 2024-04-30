import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bitsong',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://bitsong.io/',
  prettyName: 'BitSong',
  chainId: 'bitsong-2b',
  bech32Prefix: 'bitsong',
  slip44: 639,
  daemonName: 'bitsongd',
  nodeHome: '$HOME/.bitsongd',
  codebase: {
    cosmosSdkVersion: 'v0.45.16',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.33.0'
  },
  fees: {
    feeTokens: [{
        denom: 'ubtsg',
        fixedMinGasPrice: 0,
        lowGasPrice: 3,
        averageGasPrice: 10,
        highGasPrice: 20
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubtsg'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
  },
  description: 'Artists, Fans, Managers and Labels in One Single Holistic Ecosystem: $BTSG. Earn real-time royalties, discover exclusive content, mint and trade Fantokens, buy & sell NFTs.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-bitsong-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.explorebitsong.com',
        provider: 'stake.systems'
      },
      {
        address: 'https://bitsong-rpc.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://rpc.bitsong.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.bitsong.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'https://bitsong-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-bitsong.starsquid.io',
        provider: 'Starsquid'
      },
      {
        address: 'https://rpc-bitsong.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'http://bitsong.statesync.nodersteam.com:11657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc.bitsong.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://bitsong.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://bitsong-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://rpc.bitsong.mathnodes.com',
        provider: 'MathNodes'
      },
      {
        address: 'https://bitsong-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api-bitsong-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://lcd.explorebitsong.com/',
        provider: 'stake.systems'
      },
      {
        address: 'https://bitsong-api.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://api.bitsong.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'http://bitsong.api.nodersteam.com:11017',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://bitsong-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-bitsong.starsquid.io',
        provider: 'Starsquid'
      },
      {
        address: 'https://rest-bitsong.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://api.bitsong.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://bitsong.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://bitsong-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://api.bitsong.mathnodes.com',
        provider: 'MathNodes'
      },
      {
        address: 'https://bitsong-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://bitsong.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc-bitsong-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'bitsong-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'bitsong.grpc.nodersteam.com:9111/',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc.bitsong.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'bitsong-grpc.panthea.eu:16750',
        provider: 'Panthea EU'
      },
      {
        address: 'grpc.bitsong.mathnodes.com:9092',
        provider: 'MathNodes'
      },
      {
        address: 'bitsong-grpc.noders.services:20090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/bitsong',
      txPage: 'https://ezstaking.app/bitsong/txs/${txHash}',
      accountPage: 'https://ezstaking.app/bitsong/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bitsong',
      txPage: 'https://ping.pub/bitsong/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitsong',
      txPage: 'https://www.mintscan.io/bitsong/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/bitsong/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitsong',
      txPage: 'https://atomscan.com/bitsong/transactions/${txHash}',
      accountPage: 'https://atomscan.com/bitsong/accounts/${accountAddress}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblok.space/bitsong',
      txPage: 'https://explorer.safeblock.space/bitsong/tx/${txHash}',
      accountPage: 'https://explorer.safeblock.space/bitsong/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Bitsong',
      txPage: 'https://explorer.stavr.tech/Bitsong/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Bitsong/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
    }]
};
export default info;