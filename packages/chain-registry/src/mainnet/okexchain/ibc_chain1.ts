import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-100',
      connection_id: 'connection-44'
    },
    chain_2: {
      chain_name: 'vidulum',
      client_id: '07-tendermint-5',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
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
