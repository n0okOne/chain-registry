import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-170',
      connection_id: 'connection-178'
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-16',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-877',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-198',
          port_id:
            'wasm.juno1pjpntyvkxeuxd709jlupuea3xzxlzsfq574kqefv77fr2kcg4mcqvwqedq'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-682',
      connection_id: 'connection-774'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1268',
      connection_id: 'connection-1166'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-811',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4167',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-135',
      connection_id: 'connection-151'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-4413',
      connection_id: 'connection-3814'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-140',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3316',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  }
];
export default info;
