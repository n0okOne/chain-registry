import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cudostestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Cudos Testnet',
  chainId: 'cudos-testnet-public-3',
  bech32Prefix: 'cudos',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.cudos.org:443/',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:26657',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:26657',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:26657',
        provider: 'cudo'
      }
    ],
    rest: [
      {
        address: 'https://rest.testnet.cudos.org:443',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:1317/',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:1317/',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:1317/',
        provider: 'cudo'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.testnet.cudos.org:433',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:9090',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:9090',
        provider: 'cudo'
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:9090',
        provider: 'cudo'
      }
    ]
  },
  explorers: [{
      kind: 'bigdipper-testnet',
      url: 'https://explorer.testnet.cudos.org/',
      txPage: 'https://explorer.testnet.cudos.org/transactions/${txHash}',
      accountPage: 'https://explorer.testnet.cudos.org/accounts/${accountAddress}'
    }]
};
export default info;