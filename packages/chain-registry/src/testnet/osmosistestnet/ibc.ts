import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akashtestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1271',
      connection_id: 'connection-1171'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4171',
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
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-77',
      connection_id: 'connection-73'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1195',
      connection_id: 'connection-1101'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-58',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3938',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-685',
      connection_id: 'connection-538'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1270',
      connection_id: 'connection-1169'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-339',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4170',
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
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-118',
      connection_id: 'connection-98'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1445',
      connection_id: 'connection-1350'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4370',
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
      chain_name: 'chain4energytestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-104',
      connection_id: 'connection-122'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-111',
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
      chain_name: 'composabletestnet',
      client_id: '07-tendermint-23',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-273',
      connection_id: 'connection-237'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-329',
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
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2528',
      connection_id: 'connection-2886'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1262',
      connection_id: 'connection-1157'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3306',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4156',
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
      chain_name: 'doravotatestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-611'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1260',
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
      chain_name: 'empowertestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-146',
      connection_id: 'connection-157'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-155',
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
      chain_name: 'entrypointtestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-930',
      connection_id: 'connection-840'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1543',
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
      chain_name: 'impacthubtestnet',
      client_id: '07-tendermint-53',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1010',
      connection_id: 'connection-911'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1637',
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
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-189',
      connection_id: 'connection-180'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1273',
      connection_id: 'connection-1173'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-129',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4174',
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
      chain_name: 'kyvetestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
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
      chain_name: 'likecointestnet',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1431',
      connection_id: 'connection-1336'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4357',
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
      chain_name: 'marstestnet',
      client_id: '07-tendermint-31',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1269',
      connection_id: 'connection-1167'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4168',
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
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-133',
      connection_id: 'connection-123'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1272',
      connection_id: 'connection-1172'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-196',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4172',
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
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-42',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1374',
      connection_id: 'connection-1275'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4280',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nolustestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-102',
      connection_id: 'connection-120'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-110',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-595',
      connection_id: 'connection-529'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1037',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
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
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-19',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'quicksilvertestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1448',
      connection_id: 'connection-1552'
    },
    chain_2: {
      chain_name: 'sagatestnet',
      client_id: '07-tendermint-26',
      connection_id: 'connection-21'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4946',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-965',
      connection_id: 'connection-865'
    },
    chain_2: {
      chain_name: 'sgetestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1568',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1274',
      connection_id: 'connection-1175'
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-621',
      connection_id: 'connection-633'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4175',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-638',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1474',
      connection_id: 'connection-1380'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-22',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4410',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  }
];
export default info;
