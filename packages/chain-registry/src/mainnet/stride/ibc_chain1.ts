import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stride',
      client_id: '07-tendermint-51',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-87',
      connection_id: 'connection-72'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-52',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
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
      chain_name: 'stride',
      client_id: '07-tendermint-32',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-64',
      connection_id: 'connection-45'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  }
];
export default info;
