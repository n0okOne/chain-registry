import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-195',
      connection_id: 'connection-128'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-30',
      connection_id: 'connection-18'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-106',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
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
      chain_name: 'stargaze',
      client_id: '07-tendermint-337',
      connection_id: 'connection-275'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-405',
      connection_id: 'connection-408'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-266',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-324',
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
