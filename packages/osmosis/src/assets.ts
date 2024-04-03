import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom: 'uosmo',
          exponent: 0
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      }
    },
    {
      denom_units: [
        {
          denom: 'uion',
          exponent: 0
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'uion',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }
      ],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      }
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uusdc'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ]
    },
    {
      description:
        "Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It's the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.",
      denom_units: [
        {
          denom:
            'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
          exponent: 0,
          aliases: ['weth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
      name: 'Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'weth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/weth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [
        {
          denom:
            'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wbtc-satoshi'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      ]
    },
    {
      description: "Tether's USD stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
          exponent: 0,
          aliases: ['uusdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
      name: 'Tether USD (Axelar)',
      display: 'usdt',
      symbol: 'USDT.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdt',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uusdt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg'
        }
      ]
    },
    {
      description:
        'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      denom_units: [
        {
          denom:
            'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
          exponent: 0,
          aliases: ['dai-wei']
        },
        {
          denom: 'dai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'dai-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/dai-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      ]
    },
    {
      description:
        'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      denom_units: [
        {
          denom:
            'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
          exponent: 0,
          aliases: ['busd-wei']
        },
        {
          denom: 'busd',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'busd-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/busd-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-141'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uatom'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ]
    },
    {
      description:
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom:
            'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
          exponent: 0,
          aliases: ['basecro']
        },
        {
          denom: 'cro',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-5',
            path: 'transfer/channel-5/basecro'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }
      ]
    },
    {
      description:
        'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denom_units: [
        {
          denom:
            'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: 'wei'
          },
          chain: {
            contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wbnb-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wbnb-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }
      ]
    },
    {
      description:
        'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denom_units: [
        {
          denom:
            'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'MATIC',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'polygon',
            base_denom: 'wei'
          },
          provider: 'Polygon'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polygon',
            base_denom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wmatic-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wmatic-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
        }
      ]
    },
    {
      description:
        'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denom_units: [
        {
          denom:
            'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'avalanche',
            base_denom: 'wei'
          },
          provider: 'Avalanche'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'avalanche',
            base_denom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wavax-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wavax-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        }
      ]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
          exponent: 0,
          aliases: ['microluna', 'uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'uluna',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-72',
            path: 'transfer/channel-72/uluna'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
          exponent: 0,
          aliases: ['ujuno']
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'ujuno',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/ujuno'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }
      ]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [
        {
          denom:
            'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
          exponent: 0,
          aliases: ['dot-planck']
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
      name: 'Wrapped Polkadot (Axelar)',
      display: 'dot',
      symbol: 'DOT.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'moonbeam',
            base_denom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'dot-planck',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/dot-planck'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom:
            'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
          exponent: 0,
          aliases: ['aevmos']
        },
        {
          denom: 'evmos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'aevmos',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-204',
            path: 'transfer/channel-204/aevmos'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Kava',
      denom_units: [
        {
          denom:
            'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
          exponent: 0,
          aliases: ['ukava']
        },
        {
          denom: 'kava',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'ukava',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/ukava'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }
      ]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
          exponent: 0,
          aliases: ['uscrt']
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'uscrt',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-88',
            path: 'transfer/channel-88/uscrt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }
      ]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
          exponent: 0,
          aliases: ['microusd', 'uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'uusd',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-72',
            path: 'transfer/channel-72/uusd'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
          exponent: 0,
          aliases: ['ustars']
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/ustars'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }
      ]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [
        {
          denom:
            'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
          exponent: 0,
          aliases: ['uhuahua']
        },
        {
          denom: 'huahua',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/uhuahua'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }
      ]
    },
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom:
            'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
          exponent: 0,
          aliases: ['uxprt']
        },
        {
          denom: 'xprt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/uxprt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }
      ]
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denom_units: [
        {
          denom:
            'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
          exponent: 0,
          aliases: [
            'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
          ]
        },
        {
          denom: 'pstake',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          provider: 'Persistence'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            channel_id: 'channel-24'
          },
          chain: {
            channel_id: 'channel-38',
            path: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom:
              'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }
      ],
      keywords: ['canon']
    },
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
          exponent: 0,
          aliases: ['uakt']
        },
        {
          denom: 'akt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'akash',
            base_denom: 'uakt',
            channel_id: 'channel-9'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uakt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }
      ]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [
        {
          denom:
            'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
          exponent: 0,
          aliases: ['uregen']
        },
        {
          denom: 'regen',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'regen',
            base_denom: 'uregen',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/uregen'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }
      ]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [
        {
          denom:
            'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
          exponent: 0,
          aliases: ['udvpn']
        },
        {
          denom: 'dvpn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'sentinel',
            base_denom: 'udvpn',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/udvpn'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }
      ]
    },
    {
      description:
        'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [
        {
          denom:
            'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
          exponent: 0,
          aliases: ['uiris']
        },
        {
          denom: 'iris',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'irisnet',
            base_denom: 'uiris',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-6',
            path: 'transfer/channel-6/uiris'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        }
      ]
    },
    {
      description:
        'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [
        {
          denom:
            'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
          exponent: 0,
          aliases: ['uiov']
        },
        {
          denom: 'iov',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'starname',
            base_denom: 'uiov',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/uiov'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }
      ]
    },
    {
      description:
        'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [
        {
          denom:
            'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
          exponent: 0,
          aliases: ['ungm']
        },
        {
          denom: 'ngm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'emoney',
            base_denom: 'ungm',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-37',
            path: 'transfer/channel-37/ungm'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }
      ]
    },
    {
      description:
        'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
          exponent: 0,
          aliases: ['eeur']
        },
        {
          denom: 'eur',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'emoney',
            base_denom: 'eeur',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-37',
            path: 'transfer/channel-37/eeur'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }
      ]
    },
    {
      description:
        'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [
        {
          denom:
            'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
          exponent: 0,
          aliases: ['nanolike']
        },
        {
          denom: 'like',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'likecoin',
            base_denom: 'nanolike',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-53',
            path: 'transfer/channel-53/nanolike'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }
      ]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom:
            'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
          exponent: 0,
          aliases: ['uixo']
        },
        {
          denom: 'ixo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'impacthub',
            base_denom: 'uixo',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-38',
            path: 'transfer/channel-38/uixo'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }
      ]
    },
    {
      description:
        'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [
        {
          denom:
            'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
          exponent: 0,
          aliases: ['ubcna']
        },
        {
          denom: 'bcna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bitcanna',
            base_denom: 'ubcna',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-51',
            path: 'transfer/channel-51/ubcna'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }
      ]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [
        {
          denom:
            'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
          exponent: 0,
          aliases: ['ubtsg']
        },
        {
          denom: 'btsg',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bitsong',
            base_denom: 'ubtsg',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-73',
            path: 'transfer/channel-73/ubtsg'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }
      ]
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [
        {
          denom:
            'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
          exponent: 0,
          aliases: ['uxki']
        },
        {
          denom: 'xki',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kichain',
            base_denom: 'uxki',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-77',
            path: 'transfer/channel-77/uxki'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }
      ]
    },
    {
      description:
        'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [
        {
          denom:
            'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
          exponent: 0,
          aliases: ['umed']
        },
        {
          denom: 'med',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'panacea',
            base_denom: 'umed',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-82',
            path: 'transfer/channel-82/umed'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        }
      ]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
          exponent: 0,
          aliases: ['boot']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      name: 'bostrom',
      display:
        'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'boot',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/boot'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }
      ]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
          exponent: 0,
          aliases: ['ucmdx']
        },
        {
          denom: 'cmdx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'comdex',
            base_denom: 'ucmdx',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/ucmdx'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }
      ]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [
        {
          denom:
            'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
          exponent: 0,
          aliases: ['ncheq']
        },
        {
          denom: 'cheq',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cheqd',
            base_denom: 'ncheq',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-108',
            path: 'transfer/channel-108/ncheq'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        }
      ]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [
        {
          denom:
            'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
          exponent: 0,
          aliases: ['ulum']
        },
        {
          denom: 'lum',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'lumnetwork',
            base_denom: 'ulum',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-115',
            path: 'transfer/channel-115/ulum'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }
      ]
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom:
            'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
          exponent: 0,
          aliases: ['uvdl']
        },
        {
          denom: 'vdl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'vidulum',
            base_denom: 'uvdl',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-124',
            path: 'transfer/channel-124/uvdl'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }
      ]
    },
    {
      description: 'The native token of Desmos',
      denom_units: [
        {
          denom:
            'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
          exponent: 0,
          aliases: ['udsm']
        },
        {
          denom: 'dsm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'desmos',
            base_denom: 'udsm',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-135',
            path: 'transfer/channel-135/udsm'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        }
      ]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [
        {
          denom:
            'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
          exponent: 0,
          aliases: ['udig']
        },
        {
          denom: 'dig',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dig',
            base_denom: 'udig',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-128',
            path: 'transfer/channel-128/udig'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom:
            'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
          exponent: 0,
          aliases: ['microsomm', 'usomm']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'sommelier',
            base_denom: 'usomm',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-165',
            path: 'transfer/channel-165/usomm'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }
      ]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [
        {
          denom:
            'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
          exponent: 0,
          aliases: ['uband']
        },
        {
          denom: 'band',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bandchain',
            base_denom: 'uband',
            channel_id: 'channel-83'
          },
          chain: {
            channel_id: 'channel-148',
            path: 'transfer/channel-148/uband'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }
      ]
    },
    {
      description: 'The native token of Konstellation Network',
      denom_units: [
        {
          denom:
            'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
          exponent: 0,
          aliases: ['udarc']
        },
        {
          denom: 'darc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'konstellation',
            base_denom: 'udarc',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-171',
            path: 'transfer/channel-171/udarc'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
        }
      ]
    },
    {
      description: 'The native token of Umee',
      denom_units: [
        {
          denom:
            'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
          exponent: 0,
          aliases: ['uumee']
        },
        {
          denom: 'umee',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'umee',
            base_denom: 'uumee',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-184',
            path: 'transfer/channel-184/uumee'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }
      ]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [
        {
          denom:
            'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
          exponent: 0,
          aliases: ['ugraviton']
        },
        {
          denom: 'graviton',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'ugraviton',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/ugraviton'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        }
      ]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [
        {
          denom:
            'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
          exponent: 0,
          aliases: ['udec']
        },
        {
          denom: 'dec',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'decentr',
            base_denom: 'udec',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-181',
            path: 'transfer/channel-181/udec'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
          exponent: 0,
          aliases: [
            'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          ]
        },
        {
          denom: 'marble',
          exponent: 3
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
        }
      ]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [
        {
          denom:
            'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
          exponent: 0,
          aliases: ['swth']
        },
        {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'carbon',
            base_denom: 'swth',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-188',
            path: 'transfer/channel-188/swth'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }
      ]
    },
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [
        {
          denom:
            'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
          exponent: 0,
          aliases: ['ucrbrus']
        },
        {
          denom: 'crbrus',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cerberus',
            base_denom: 'ucrbrus',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-212',
            path: 'transfer/channel-212/ucrbrus'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [
        {
          denom:
            'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
          exponent: 0,
          aliases: ['afet']
        },
        {
          denom: 'fet',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'fetchhub',
            base_denom: 'afet',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-229',
            path: 'transfer/channel-229/afet'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }
      ]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [
        {
          denom:
            'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
          exponent: 0,
          aliases: ['umntl']
        },
        {
          denom: 'mntl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'assetmantle',
            base_denom: 'umntl',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-232',
            path: 'transfer/channel-232/umntl'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: [
            'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          ]
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
        }
      ]
    },
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
          exponent: 0,
          aliases: ['inj']
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'inj',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/inj'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom:
            'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
          exponent: 0,
          aliases: ['microkrw', 'ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'terra',
            base_denom: 'ukrw',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-72',
            path: 'transfer/channel-72/ukrw'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }
      ]
    },
    {
      description:
        'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [
        {
          denom:
            'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
          exponent: 0,
          aliases: ['utick']
        },
        {
          denom: 'tick',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'microtick',
            base_denom: 'utick',
            channel_id: 'channel-16'
          },
          chain: {
            channel_id: 'channel-39',
            path: 'transfer/channel-39/utick'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
          exponent: 0,
          aliases: ['rowan']
        },
        {
          denom: 'ROWAN',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'sifchain',
            base_denom: 'rowan',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-47',
            path: 'transfer/channel-47/rowan'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Shentu',
      denom_units: [
        {
          denom:
            'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
          exponent: 0,
          aliases: ['uctk']
        },
        {
          denom: 'ctk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'shentu',
            base_denom: 'uctk',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-146',
            path: 'transfer/channel-146/uctk'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
        }
      ]
    },
    {
      description:
        'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      denom_units: [
        {
          denom:
            'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
          exponent: 0,
          aliases: [
            'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          ]
        },
        {
          denom: 'hope',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
        }
      ]
    },
    {
      description:
        'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      denom_units: [
        {
          denom:
            'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
          exponent: 0,
          aliases: [
            'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          ]
        },
        {
          denom: 'rac',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
      name: 'Racoon',
      display: 'rac',
      symbol: 'juno.RAC',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
        }
      ]
    },
    {
      description:
        'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      denom_units: [
        {
          denom:
            'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
          exponent: 0,
          aliases: ['frax-wei']
        },
        {
          denom: 'frax',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'frax-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/frax-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge WBTC',
      denom_units: [
        {
          denom:
            'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
          exponent: 0,
          aliases: ['gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599']
        },
        {
          denom: 'gwbtc',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.grv',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [
        {
          denom:
            'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
          exponent: 0,
          aliases: ['gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2']
        },
        {
          denom: 'gweth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'WETH.grv',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [
        {
          denom:
            'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
          exponent: 0,
          aliases: ['gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']
        },
        {
          denom: 'gusdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
      name: 'USD Coin (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [
        {
          denom:
            'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
          exponent: 0,
          aliases: ['gravity0x6B175474E89094C44Da98b954EedeAC495271d0F']
        },
        {
          denom: 'gdai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x6B175474E89094C44Da98b954EedeAC495271d0F'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
        }
      ]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [
        {
          denom:
            'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
          exponent: 0,
          aliases: ['gravity0xdAC17F958D2ee523a2206206994597C13D831ec7']
        },
        {
          denom: 'gusdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg'
        }
      ]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
          exponent: 0,
          aliases: [
            'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          ]
        },
        {
          denom: 'block',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
        }
      ]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [
        {
          denom:
            'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
          exponent: 0,
          aliases: ['nhash']
        },
        {
          denom: 'hash',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'provenance',
            base_denom: 'nhash',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-222',
            path: 'transfer/channel-222/nhash'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }
      ]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denom_units: [
        {
          denom:
            'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
          exponent: 0,
          aliases: ['uglx']
        },
        {
          denom: 'glx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'galaxy',
            base_denom: 'uglx',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-236',
            path: 'transfer/channel-236/uglx'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
        }
      ]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      denom_units: [
        {
          denom:
            'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
          exponent: 0,
          aliases: [
            'dhk',
            'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          ]
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
        }
      ]
    },
    {
      description: 'Token governance for Junoswap',
      denom_units: [
        {
          denom:
            'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
          exponent: 0,
          aliases: [
            'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          ]
        },
        {
          denom: 'raw',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
        }
      ]
    },
    {
      description:
        'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [
        {
          denom:
            'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
          exponent: 0,
          aliases: ['umeme']
        },
        {
          denom: 'meme',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'meme',
            base_denom: 'umeme',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-238',
            path: 'transfer/channel-238/umeme'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
        }
      ]
    },
    {
      description:
        'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      denom_units: [
        {
          denom:
            'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
          exponent: 0,
          aliases: [
            'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          ]
        },
        {
          denom: 'asvt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
        }
      ]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      denom_units: [
        {
          denom:
            'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
          exponent: 0,
          aliases: [
            'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          ]
        },
        {
          denom: 'joe',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
        }
      ]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom:
            'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'luna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-251',
            path: 'transfer/channel-251/uluna'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }
      ]
    },
    {
      description: 'Native token of Rizon Chain',
      denom_units: [
        {
          denom:
            'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
          exponent: 0,
          aliases: ['uatolo']
        },
        {
          denom: 'atolo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'rizon',
            base_denom: 'uatolo',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-221',
            path: 'transfer/channel-221/uatolo'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }
      ]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [
        {
          denom:
            'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
          exponent: 0,
          aliases: ['hard']
        },
        {
          denom: 'HARD',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'hard',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/hard'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }
      ]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [
        {
          denom:
            'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
          exponent: 0,
          aliases: ['swp']
        },
        {
          denom: 'SWP',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'swp',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/swp'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }
      ]
    },
    {
      description:
        'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      denom_units: [
        {
          denom:
            'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
          exponent: 0,
          aliases: ['link-wei']
        },
        {
          denom: 'link',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'link-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/link-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }
      ]
    },
    {
      description:
        'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [
        {
          denom:
            'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
          exponent: 0,
          aliases: ['el1']
        },
        {
          denom: 'l1',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'genesisl1',
            base_denom: 'el1',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-253',
            path: 'transfer/channel-253/el1'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description:
        'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      denom_units: [
        {
          denom:
            'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
          exponent: 0,
          aliases: ['aave-wei']
        },
        {
          denom: 'aave',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'aave-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/aave-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      denom_units: [
        {
          denom:
            'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
          exponent: 0,
          aliases: ['ape-wei']
        },
        {
          denom: 'ape',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'ape-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/ape-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      denom_units: [
        {
          denom:
            'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
          exponent: 0,
          aliases: ['mkr-wei']
        },
        {
          denom: 'mkr',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'mkr-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/mkr-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }
      ]
    },
    {
      description:
        "RAI is a non-pegged, ETH-backed stable asset. It is useful as more 'stable' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.",
      denom_units: [
        {
          denom:
            'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
          exponent: 0,
          aliases: ['rai-wei']
        },
        {
          denom: 'rai',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'RAI Finance'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'rai-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/rai-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      denom_units: [
        {
          denom:
            'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
          exponent: 0,
          aliases: ['shib-wei']
        },
        {
          denom: 'shib',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'shib-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/shib-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The native staking and governance token of the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
          exponent: 0,
          aliases: ['ukuji']
        },
        {
          denom: 'kuji',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom: 'ukuji',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/ukuji'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }
      ]
    },
    {
      description: 'The native token of Tgrade',
      denom_units: [
        {
          denom:
            'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
          exponent: 0,
          aliases: ['utgd']
        },
        {
          denom: 'tgd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'tgrade',
            base_denom: 'utgd',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-263',
            path: 'transfer/channel-263/utgd'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
        }
      ]
    },
    {
      description:
        'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denom_units: [
        {
          denom:
            'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
          exponent: 0,
          aliases: ['aechelon']
        },
        {
          denom: 'echelon',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'echelon',
            base_denom: 'aechelon',
            channel_id: 'channel-11'
          },
          chain: {
            channel_id: 'channel-403',
            path: 'transfer/channel-403/aechelon'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }
      ]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
          exponent: 0,
          aliases: ['loki']
        },
        {
          denom: 'odin',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'odin',
            base_denom: 'loki',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-258',
            path: 'transfer/channel-258/loki'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
          exponent: 0,
          aliases: ['mGeo']
        },
        {
          denom: 'geo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'odin',
            base_denom: 'mGeo',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-258',
            path: 'transfer/channel-258/mGeo'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [
        {
          denom:
            'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
          exponent: 0,
          aliases: ['mO9W']
        },
        {
          denom: 'O9W',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'odin',
            base_denom: 'mO9W',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-258',
            path: 'transfer/channel-258/mO9W'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      denom_units: [
        {
          denom:
            'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
          exponent: 0,
          aliases: [
            'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          ]
        },
        {
          denom: 'lvn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
      name: 'LVN',
      display: 'lvn',
      symbol: 'kichain.LVN',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'kichain',
            base_denom:
              'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
            port: 'wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha',
            channel_id: 'channel-18'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-261',
            path: 'transfer/channel-261/cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
        }
      ]
    },
    {
      description:
        'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denom_units: [
        {
          denom:
            'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'moonbeam',
            base_denom: 'Wei'
          },
          provider: 'Moonbeam'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'moonbeam',
            base_denom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wglmr-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wglmr-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
      ]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      denom_units: [
        {
          denom:
            'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
          exponent: 0,
          aliases: [
            'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          ]
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      ]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      denom_units: [
        {
          denom:
            'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
          exponent: 0,
          aliases: [
            'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          ]
        },
        {
          denom: 'gkey',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
        }
      ]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
          exponent: 0,
          aliases: ['ucre']
        },
        {
          denom: 'cre',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'crescent',
            base_denom: 'ucre',
            channel_id: 'channel-9'
          },
          chain: {
            channel_id: 'channel-297',
            path: 'transfer/channel-297/ucre'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }
      ]
    },
    {
      description: 'The native token of LumenX Network',
      denom_units: [
        {
          denom:
            'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
          exponent: 0,
          aliases: ['ulumen']
        },
        {
          denom: 'lumen',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'lumenx',
            base_denom: 'ulumen',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-286',
            path: 'transfer/channel-286/ulumen'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [
        {
          denom:
            'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
          exponent: 0,
          aliases: ['orai']
        },
        {
          denom: 'ORAI',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'oraichain',
            base_denom: 'orai',
            channel_id: 'channel-13'
          },
          chain: {
            channel_id: 'channel-216',
            path: 'transfer/channel-216/orai'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
        }
      ]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denom_units: [
        {
          denom:
            'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
          exponent: 0,
          aliases: ['attocudos', 'acudos']
        },
        {
          denom: 'cudos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cudos',
            base_denom: 'acudos',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-298',
            path: 'transfer/channel-298/acudos'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        }
      ]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [
        {
          denom:
            'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
          exponent: 0,
          aliases: ['usdx']
        },
        {
          denom: 'USDX',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'usdx',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/usdx'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }
      ]
    },
    {
      description:
        'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denom_units: [
        {
          denom:
            'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
          exponent: 0,
          aliases: ['ubld']
        },
        {
          denom: 'bld',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'agoric',
            base_denom: 'ubld',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-320',
            path: 'transfer/channel-320/ubld'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }
      ]
    },
    {
      description:
        'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [
        {
          denom:
            'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
          exponent: 0,
          aliases: ['uist']
        },
        {
          denom: 'ist',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'agoric',
            base_denom: 'uist',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-320',
            path: 'transfer/channel-320/uist'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }
      ]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      denom_units: [
        {
          denom:
            'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
          exponent: 0,
          aliases: [
            'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          ]
        },
        {
          denom: 'sejuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
        }
      ]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      denom_units: [
        {
          denom:
            'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
          exponent: 0,
          aliases: [
            'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          ]
        },
        {
          denom: 'bjuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
          exponent: 0,
          aliases: ['ustrd']
        },
        {
          denom: 'strd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'ustrd',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/ustrd'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
          exponent: 0,
          aliases: ['stuatom']
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuatom',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuatom'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
          exponent: 0,
          aliases: ['stustars']
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stustars',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stustars'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }
      ]
    },
    {
      description:
        'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      denom_units: [
        {
          denom:
            'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
          exponent: 0,
          aliases: [
            'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          ]
        },
        {
          denom: 'solar',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
        }
      ]
    },
    {
      description: 'StakeEasy governance token',
      denom_units: [
        {
          denom:
            'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
          exponent: 0,
          aliases: [
            'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          ]
        },
        {
          denom: 'seasy',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
        }
      ]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uaxl',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uaxl'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      ]
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [
        {
          denom:
            'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
          exponent: 0,
          aliases: ['arebus']
        },
        {
          denom: 'rebus',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'rebus',
            base_denom: 'arebus',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-355',
            path: 'transfer/channel-355/arebus'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }
      ]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [
        {
          denom:
            'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
          exponent: 0,
          aliases: ['utori']
        },
        {
          denom: 'tori',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'teritori',
            base_denom: 'utori',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-362',
            path: 'transfer/channel-362/utori'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'teritori',
            base_denom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
          exponent: 0,
          aliases: ['stujuno']
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'ujuno'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stujuno',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stujuno'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
          exponent: 0,
          aliases: ['stuosmo']
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuosmo',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuosmo'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
          exponent: 0,
          aliases: [
            'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          ]
        },
        {
          denom: 'muse',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
        }
      ]
    },
    {
      description: 'The native token of Lambda',
      denom_units: [
        {
          denom:
            'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
          exponent: 0,
          aliases: ['ulamb']
        },
        {
          denom: 'lamb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'lambda',
            base_denom: 'ulamb',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-378',
            path: 'transfer/channel-378/ulamb'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        }
      ]
    },
    {
      description:
        'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [
        {
          denom:
            'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
          exponent: 0,
          aliases: [
            'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk'
          ]
        },
        {
          denom: 'usk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom:
              'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        }
      ]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [
        {
          denom:
            'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
          exponent: 0,
          aliases: ['nund']
        },
        {
          denom: 'FUND',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'unification',
            base_denom: 'nund',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-382',
            path: 'transfer/channel-382/nund'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [
        {
          denom:
            'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
          exponent: 0,
          aliases: ['ujkl']
        },
        {
          denom: 'jkl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'jackal',
            base_denom: 'ujkl',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-412',
            path: 'transfer/channel-412/ujkl'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        },
        {
          denom: 'alter',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        },
        {
          denom: 'butt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        },
        {
          denom: 'sienna',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }
      ]
    },
    {
      description:
        'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        },
        {
          denom: 'stkd-scrt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }
      ]
    },
    {
      description: 'BeeZee native blockchain',
      denom_units: [
        {
          denom:
            'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
          exponent: 0,
          aliases: ['ubze']
        },
        {
          denom: 'bze',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'beezee',
            base_denom: 'ubze',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-340',
            path: 'transfer/channel-340/ubze'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
          exponent: 0,
          aliases: [
            'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          ]
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
      name: 'Fanfury',
      display: 'fury',
      symbol: 'FURY',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Acrechain',
      denom_units: [
        {
          denom:
            'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
          exponent: 0,
          aliases: ['aacre']
        },
        {
          denom: 'acre',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'acrechain',
            base_denom: 'aacre',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/aacre'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }
      ]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
          exponent: 0,
          aliases: ['ucmst']
        },
        {
          denom: 'cmst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'comdex',
            base_denom: 'ucmst',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/ucmst'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Imversed',
      denom_units: [
        {
          denom:
            'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
          exponent: 0,
          aliases: ['aimv']
        },
        {
          denom: 'imv',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'imversed',
            base_denom: 'aimv',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-517',
            path: 'transfer/channel-517/aimv'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
        }
      ]
    },
    {
      description: 'The native token of Medas Digital Network',
      denom_units: [
        {
          denom:
            'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
          exponent: 0,
          aliases: ['umedas']
        },
        {
          denom: 'medas',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'medasdigital',
            base_denom: 'umedas',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-519',
            path: 'transfer/channel-519/umedas'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        }
      ],
      keywords: ['medas']
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
          exponent: 0,
          aliases: [
            'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          ]
        },
        {
          denom: 'phmn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        },
        {
          denom: 'amber',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }
      ]
    },
    {
      description: 'The native token of Onomy Protocol',
      denom_units: [
        {
          denom:
            'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
          exponent: 0,
          aliases: ['anom']
        },
        {
          denom: 'nom',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'onomy',
            base_denom: 'anom',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-525',
            path: 'transfer/channel-525/anom'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
        }
      ],
      keywords: ['dex', 'stablecoin', 'bridge', 'staking']
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
          exponent: 0,
          aliases: ['stk/uatom']
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/stk/uatom'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Dyson Protocol',
      denom_units: [
        {
          denom:
            'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
          exponent: 0,
          aliases: ['dys']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      name: 'Dyson Protocol',
      display:
        'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dyson',
            base_denom: 'dys',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-526',
            path: 'transfer/channel-526/dys'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
        }
      ]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      denom_units: [
        {
          denom:
            'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
          exponent: 0,
          aliases: [
            'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          ]
        },
        {
          denom: 'hopers',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
        }
      ]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [
        {
          denom:
            'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        },
        {
          denom: 'arusd',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'acrechain',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Planq Network',
      denom_units: [
        {
          denom:
            'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
          exponent: 0,
          aliases: ['aplanq']
        },
        {
          denom: 'planq',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'planq',
            base_denom: 'aplanq',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-492',
            path: 'transfer/channel-492/aplanq'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }
      ]
    },
    {
      description:
        "Fantom's native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.",
      denom_units: [
        {
          denom:
            'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'fantom',
            base_denom: 'wei'
          },
          chain: {
            contract: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Fantom'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'fantom',
            base_denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wftm-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wftm-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }
      ]
    },
    {
      description:
        'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [
        {
          denom:
            'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
          exponent: 0,
          aliases: ['acanto']
        },
        {
          denom: 'canto',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'canto',
            base_denom: 'acanto',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-550',
            path: 'transfer/channel-550/acanto'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [
        {
          denom:
            'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
          exponent: 0,
          aliases: ['uqstars']
        },
        {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          provider: 'Quicksilver'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqstars',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqstars'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        }
      ]
    },
    {
      description: 'WYND DAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
          exponent: 0,
          aliases: [
            'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          ]
        },
        {
          denom: 'wynd',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
          exponent: 0,
          aliases: ['polygon-uusdc']
        },
        {
          denom: 'polygon-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
      name: 'USD Coin (Polygon)',
      display: 'polygon-usdc',
      symbol: 'polygon.USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polygon',
            base_denom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'polygon-uusdc',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/polygon-uusdc'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'avalanche',
            base_denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'avalanche-uusdc',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/avalanche-uusdc'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
        }
      ]
    },
    {
      description: 'Mars protocol token',
      denom_units: [
        {
          denom:
            'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
          exponent: 0,
          aliases: ['umars']
        },
        {
          denom: 'mars',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
      name: 'Mars Hub',
      display: 'mars',
      symbol: 'MARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'mars',
            base_denom: 'umars',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-557',
            path: 'transfer/channel-557/umars'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }
      ]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [
        {
          denom:
            'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        },
        {
          denom: 'cnto',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'acrechain',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/erc20/0xAE6D3334989a22A65228732446731438672418F2'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
          exponent: 0,
          aliases: ['stuluna']
        },
        {
          denom: 'stluna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuluna',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuluna'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
          exponent: 0,
          aliases: ['staevmos']
        },
        {
          denom: 'stevmos',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'uaevmos'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'staevmos',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/staevmos'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }
      ]
    },
    {
      description: 'nRide Token',
      denom_units: [
        {
          denom:
            'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
          exponent: 0,
          aliases: [
            'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          ]
        },
        {
          denom: 'nride',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
        }
      ]
    },
    {
      description: 'The native staking token of 8ball.',
      denom_units: [
        {
          denom:
            'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
          exponent: 0,
          aliases: ['uebl']
        },
        {
          denom: 'ebl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: '8ball',
            base_denom: 'uebl',
            channel_id: 'channel-16'
          },
          chain: {
            channel_id: 'channel-641',
            path: 'transfer/channel-641/uebl'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denom_units: [
        {
          denom:
            'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
          exponent: 0,
          aliases: ['uqatom']
        },
        {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'Quicksilver'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqatom',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqatom'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        }
      ]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom:
            'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
          exponent: 0,
          aliases: ['uharbor']
        },
        {
          denom: 'harbor',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'comdex',
            base_denom: 'uharbor',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-87',
            path: 'transfer/channel-87/uharbor'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denom_units: [
        {
          denom:
            'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
          exponent: 0,
          aliases: ['uqregen']
        },
        {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'regen',
            base_denom: 'uregen'
          },
          provider: 'Quicksilver'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqregen',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqregen'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        }
      ]
    },
    {
      description:
        'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      denom_units: [
        {
          denom:
            'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
          exponent: 0,
          aliases: [
            'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          ]
        },
        {
          denom: 'fox',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
        }
      ]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [
        {
          denom:
            'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
          exponent: 0,
          aliases: ['uqck']
        },
        {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqck',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqck'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }
      ]
    },
    {
      description: 'The native token of Arkhadian',
      denom_units: [
        {
          denom:
            'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
          exponent: 0,
          aliases: ['arkh']
        },
        {
          denom: 'ARKH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'arkh',
            base_denom: 'arkh',
            channel_id: 'channel-12'
          },
          chain: {
            channel_id: 'channel-648',
            path: 'transfer/channel-648/arkh'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
          exponent: 0,
          aliases: ['uqosmo']
        },
        {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'Quicksilver'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqosmo',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqosmo'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        }
      ]
    },
    {
      description:
        'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [
        {
          denom:
            'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
          exponent: 0,
          aliases: ['microfrienzies', 'ufrienzies']
        },
        {
          denom: 'frienzies',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'ufrienzies',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/ufrienzies'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }
      ]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom:
            'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
          exponent: 0,
          aliases: ['uwhale']
        },
        {
          denom: 'whale',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'uwhale',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/uwhale'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }
      ]
    },
    {
      description: 'Evmos Guardians governance token.',
      denom_units: [
        {
          denom:
            'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
          exponent: 0,
          aliases: [
            'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          ]
        },
        {
          denom: 'grdn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
        }
      ]
    },
    {
      description: 'Mini Punks Token',
      denom_units: [
        {
          denom:
            'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
          exponent: 0,
          aliases: [
            'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          ]
        },
        {
          denom: 'mnpu',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
        }
      ]
    },
    {
      description: 'Shiba Cosmos',
      denom_units: [
        {
          denom:
            'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
          exponent: 0,
          aliases: [
            'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          ]
        },
        {
          denom: 'shibac',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
        }
      ]
    },
    {
      description: 'Sikoba Governance Token',
      denom_units: [
        {
          denom:
            'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
          exponent: 0,
          aliases: [
            'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          ]
        },
        {
          denom: 'sikoba',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
        }
      ]
    },
    {
      description:
        'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [
        {
          denom:
            'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        },
        {
          denom: 'nct',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'regen',
            base_denom: 'eco.uC.NCT',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/eco.uC.NCT'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }
      ]
    },
    {
      description: 'Celestims',
      denom_units: [
        {
          denom:
            'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
          exponent: 0,
          aliases: [
            'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          ]
        },
        {
          denom: 'clst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
        }
      ]
    },
    {
      description: 'The First Doge on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
          exponent: 0,
          aliases: [
            'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          ]
        },
        {
          denom: 'osdoge',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
        }
      ]
    },
    {
      description: 'Apemos',
      denom_units: [
        {
          denom:
            'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
          exponent: 0,
          aliases: [
            'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          ]
        },
        {
          denom: 'apemos',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
        }
      ]
    },
    {
      description: "Evmos Guardians' Invaders DAO token.",
      denom_units: [
        {
          denom:
            'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
          exponent: 0,
          aliases: [
            'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          ]
        },
        {
          denom: 'invdrs',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
        }
      ]
    },
    {
      description: 'Doge Apr',
      denom_units: [
        {
          denom:
            'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
          exponent: 0,
          aliases: [
            'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          ]
        },
        {
          denom: 'doga',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
        }
      ]
    },
    {
      description: 'Catmos',
      denom_units: [
        {
          denom:
            'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
          exponent: 0,
          aliases: [
            'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          ]
        },
        {
          denom: 'catmos',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
        }
      ]
    },
    {
      description:
        'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      denom_units: [
        {
          denom:
            'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
          exponent: 0,
          aliases: [
            'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          ]
        },
        {
          denom: 'summit',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
        }
      ]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [
        {
          denom:
            'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
          exponent: 0,
          aliases: ['uflix']
        },
        {
          denom: 'flix',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'omniflixhub',
            base_denom: 'uflix',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-199',
            path: 'transfer/channel-199/uflix'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }
      ]
    },
    {
      description: 'Spacer',
      denom_units: [
        {
          denom:
            'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
          exponent: 0,
          aliases: [
            'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          ]
        },
        {
          denom: 'spacer',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
        }
      ]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      denom_units: [
        {
          denom:
            'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
          exponent: 0,
          aliases: [
            'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          ]
        },
        {
          denom: 'light',
          exponent: 9
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
        }
      ]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        },
        {
          denom: 'silk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }
      ]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      denom_units: [
        {
          denom:
            'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
          exponent: 0,
          aliases: [
            'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          ]
        },
        {
          denom: 'mile',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
        }
      ]
    },
    {
      description:
        'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      denom_units: [
        {
          denom:
            'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
          exponent: 0,
          aliases: [
            'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          ]
        },
        {
          denom: 'manna',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
        }
      ]
    },
    {
      description:
        "Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin's model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.",
      denom_units: [
        {
          denom:
            'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
          exponent: 0,
          aliases: ['wfil-wei']
        },
        {
          denom: 'fil',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
      name: 'Filecoin',
      display: 'fil',
      symbol: 'FIL',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'filecoin',
            base_denom: 'attoFIL'
          },
          provider: 'Filecoin'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'filecoin',
            base_denom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wfil-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wfil-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
        }
      ]
    },
    {
      description: 'Void',
      denom_units: [
        {
          denom:
            'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
          exponent: 0,
          aliases: [
            'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          ]
        },
        {
          denom: 'void',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
        }
      ]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [
        {
          denom:
            'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        },
        {
          denom: 'shd',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-476',
            path: 'transfer/channel-476/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }
      ]
    },
    {
      description: 'The native token of Bluzelle',
      denom_units: [
        {
          denom:
            'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
          exponent: 0,
          aliases: ['ubnt']
        },
        {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bluzelle',
            base_denom: 'ubnt',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-763',
            path: 'transfer/channel-763/ubnt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
        }
      ],
      keywords: ['bluzelle', 'game']
    },
    {
      description: 'Native token of Arbitrum',
      denom_units: [
        {
          denom:
            'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
          exponent: 0,
          aliases: ['arb-wei']
        },
        {
          denom: 'arb',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'arb-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/arb-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }
      ]
    },
    {
      description: 'Silica',
      denom_units: [
        {
          denom:
            'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
          exponent: 0,
          aliases: [
            'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          ]
        },
        {
          denom: 'silica',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
        }
      ]
    },
    {
      description: 'Pepec',
      denom_units: [
        {
          denom:
            'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
          exponent: 0,
          aliases: [
            'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          ]
        },
        {
          denom: 'pepec',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
        }
      ]
    },
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
          exponent: 0,
          aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933', 'pepe-wei']
        },
        {
          denom: 'pepe',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'pepe-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/pepe-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
          exponent: 0
        },
        {
          denom: 'ibcx',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }
      ],
      coingecko_id: 'ibc-index'
    },
    {
      description:
        'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      denom_units: [
        {
          denom:
            'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
          exponent: 0,
          aliases: ['0xbe9895146f7af43049ca1c1ae358b0541ea49704', 'cbeth-wei']
        },
        {
          denom: 'cbeth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Coinbase'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'cbeth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/cbeth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }
      ]
    },
    {
      description:
        'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      denom_units: [
        {
          denom:
            'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
          exponent: 0,
          aliases: ['0xae78736cd615f374d3085123a210448e74fc6393', 'reth-wei']
        },
        {
          denom: 'reth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Rocket Pool'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'reth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/reth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }
      ]
    },
    {
      description:
        "sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become's eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.",
      denom_units: [
        {
          denom:
            'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
          exponent: 0,
          aliases: ['0xac3e018457b222d93114458476f3e3416abbe38f', 'sfrxeth-wei']
        },
        {
          denom: 'sfrxeth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'sfrxeth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/sfrxeth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
          exponent: 0,
          aliases: ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0', 'wsteth-wei']
        },
        {
          denom: 'wsteth',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.axl',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wsteth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wsteth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
        }
      ]
    },
    {
      description: 'The native token of Gitopia',
      denom_units: [
        {
          denom:
            'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
          exponent: 0,
          aliases: ['ulore']
        },
        {
          denom: 'LORE',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gitopia',
            base_denom: 'ulore',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-781',
            path: 'transfer/channel-781/ulore'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
        }
      ]
    },
    {
      description:
        'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      denom_units: [
        {
          denom:
            'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
          exponent: 0,
          aliases: [
            'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          ]
        },
        {
          denom: 'roar',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
          exponent: 0,
          aliases: ['stuumee']
        },
        {
          denom: 'stumee',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'umee',
            base_denom: 'uumee'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuumee',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuumee'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
          exponent: 0
        },
        {
          denom: 'stibcx',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
        }
      ]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
          exponent: 0,
          aliases: ['unls']
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nolus',
            base_denom: 'unls',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-783',
            path: 'transfer/channel-783/unls'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      denom_units: [
        {
          denom:
            'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
          exponent: 0,
          aliases: [
            'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          ]
        },
        {
          denom: 'cub',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }
      ]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      denom_units: [
        {
          denom:
            'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
          exponent: 0,
          aliases: [
            'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          ]
        },
        {
          denom: 'blue',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }
      ]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
          exponent: 0,
          aliases: ['untrn']
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'untrn',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/untrn'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }
      ]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      denom_units: [
        {
          denom:
            'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
          exponent: 0,
          aliases: [
            'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          ]
        },
        {
          denom: 'casa',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [
        {
          denom:
            'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
          exponent: 0,
          aliases: ['ppica']
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
      name: 'Composable',
      display: 'pica',
      symbol: 'PICA',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          provider: 'Composable Finance'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom: 'ppica',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/ppica'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }
      ]
    },
    {
      description:
        'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [
        {
          denom:
            'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
          exponent: 0,
          aliases: [
            '4',
            'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9'
          ]
        },
        {
          denom: 'ksm',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'kusama',
            base_denom: 'Planck'
          },
          provider: 'Kusama Parachain'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '4',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/4'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom:
              'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/4'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      ]
    },
    {
      description:
        'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [
        {
          denom:
            'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
          exponent: 0,
          aliases: [
            '79228162514264337593543950342',
            'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366'
          ]
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          provider: 'Polkadot Relay'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composablepolkadot',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-15'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/79228162514264337593543950342'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom:
              'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ]
    },
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom:
            'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
          exponent: 0,
          aliases: ['uqsr']
        },
        {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quasar',
            base_denom: 'uqsr',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-688',
            path: 'transfer/channel-688/uqsr'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'quasar',
            base_denom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
        }
      ]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom:
            'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'archway',
            base_denom: 'aarch',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-1429',
            path: 'transfer/channel-1429/aarch'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [
        {
          denom:
            'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
          exponent: 0,
          aliases: ['umpwr']
        },
        {
          denom: 'mpwr',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'empowerchain',
            base_denom: 'umpwr',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-1411',
            path: 'transfer/channel-1411/umpwr'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        }
      ]
    },
    {
      description:
        'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      denom_units: [
        {
          denom:
            'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
          exponent: 0,
          aliases: [
            'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          ]
        },
        {
          denom: 'watr',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
        }
      ]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [
        {
          denom:
            'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
          exponent: 0,
          aliases: ['ukyve']
        },
        {
          denom: 'kyve',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kyve',
            base_denom: 'ukyve',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-767',
            path: 'transfer/channel-767/ukyve'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }
      ]
    },
    {
      description:
        'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      denom_units: [
        {
          denom:
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      ]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [
        {
          denom:
            'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
          exponent: 0
        },
        {
          denom: 'ampOSMO',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
        }
      ]
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [
        {
          denom:
            'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
          exponent: 0,
          aliases: ['usei']
        },
        {
          denom: 'sei',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'sei',
            base_denom: 'usei',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-782',
            path: 'transfer/channel-782/usei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }
      ]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denom_units: [
        {
          denom:
            'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
          exponent: 0,
          aliases: ['uqsomm']
        },
        {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'sommelier',
            base_denom: 'usomm'
          },
          provider: 'Quicksilver'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilver',
            base_denom: 'uqsomm',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-522',
            path: 'transfer/channel-522/uqsomm'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Passage chain.',
      denom_units: [
        {
          denom:
            'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
          exponent: 0,
          aliases: ['upasg']
        },
        {
          denom: 'pasg',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'passage',
            base_denom: 'upasg',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-2494',
            path: 'transfer/channel-2494/upasg'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
          exponent: 0,
          aliases: ['stusomm']
        },
        {
          denom: 'stsomm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'sommelier',
            base_denom: 'usomm'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stusomm',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stusomm'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }
      ]
    },
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denom_units: [
        {
          denom:
            'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          ]
        },
        {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
      name: 'Solana',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport'
          },
          provider: 'Solana'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }
      ]
    },
    {
      description: 'The Official Bonk Inu token',
      denom_units: [
        {
          denom:
            'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR'
          ]
        },
        {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }
      ]
    },
    {
      description:
        'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [
        {
          denom:
            'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          ]
        },
        {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
      name: 'Tether USD (Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg'
        }
      ]
    },
    {
      description: 'Sui’s native asset is called SUI.',
      denom_units: [
        {
          denom:
            'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh'
          ]
        },
        {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }
      ]
    },
    {
      description:
        'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denom_units: [
        {
          denom:
            'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r'
          ]
        },
        {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            dark_mode: true
          }
        }
      ]
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [
        {
          denom:
            'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
          exponent: 0,
          aliases: [
            'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta'
          ]
        },
        {
          denom: 'mnta',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom:
              'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7:umnta'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
          exponent: 0,
          aliases: ['factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL']
        },
        {
          denom: 'dgl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }
      ]
    },
    {
      description:
        'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [
        {
          denom:
            'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          ]
        },
        {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
      name: 'USD Coin (Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }
      ]
    },
    {
      description:
        'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [
        {
          denom:
            'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
          exponent: 0,
          aliases: [
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          ]
        },
        {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
      name: 'Wrapped Ether (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'wETH.wh',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
        }
      ]
    },
    {
      description:
        'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [
        {
          denom:
            'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/uusdc'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description:
        'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denom_units: [
        {
          denom:
            'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
          exponent: 0,
          aliases: [
            '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
            'yieldeth-wei'
          ]
        },
        {
          denom: 'YieldETH',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Seven Seas & DeFine Logic Labs'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'yieldeth-wei',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/yieldeth-wei'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'yieldeth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }
      ]
    },
    {
      description: 'The native staking token of XPLA.',
      denom_units: [
        {
          denom:
            'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
          exponent: 0,
          aliases: ['axpla']
        },
        {
          denom: 'xpla',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'xpla',
            base_denom: 'axpla',
            channel_id: 'channel-9'
          },
          chain: {
            channel_id: 'channel-1634',
            path: 'transfer/channel-1634/axpla'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
        }
      ]
    },
    {
      description:
        'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [
        {
          denom:
            'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
          exponent: 0,
          aliases: ['factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN']
        },
        {
          denom: 'oin',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'sei',
            base_denom:
              'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-782',
            path: 'transfer/channel-782/factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
        }
      ]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [
        {
          denom:
            'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        },
        {
          denom: 'neok',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-204',
            path: 'transfer/channel-204/erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }
      ]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [
        {
          denom:
            'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
          exponent: 0,
          aliases: ['ario']
        },
        {
          denom: 'rio',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'realio',
            base_denom: 'ario',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-1424',
            path: 'transfer/channel-1424/ario'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }
      ]
    },
    {
      description: "Membrane's CDP-style stablecoin called CDT",
      denom_units: [
        {
          denom:
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          exponent: 0
        },
        {
          denom: 'cdt',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }
      ],
      coingecko_id: 'collateralized-debt-token'
    },
    {
      description: "Membrane's protocol token",
      denom_units: [
        {
          denom:
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          exponent: 0
        },
        {
          denom: 'mbrn',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }
      ],
      coingecko_id: 'membrane'
    },
    {
      description: 'The native token of SGE Network',
      denom_units: [
        {
          denom:
            'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
          exponent: 0,
          aliases: ['usge']
        },
        {
          denom: 'sge',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'sge',
            base_denom: 'usge',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-5485',
            path: 'transfer/channel-5485/usge'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }
      ]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [
        {
          denom:
            'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
          exponent: 0,
          aliases: ['ufis']
        },
        {
          denom: 'fis',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stafihub',
            base_denom: 'ufis',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-5413',
            path: 'transfer/channel-5413/ufis'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }
      ]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [
        {
          denom:
            'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
          exponent: 0,
          aliases: ['uratom']
        },
        {
          denom: 'ratom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'StaFiHub'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stafihub',
            base_denom: 'uratom',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-5413',
            path: 'transfer/channel-5413/uratom'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }
      ]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [
        {
          denom:
            'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust']
        },
        {
          denom: 'strdst',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }
      ]
    },
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [
        {
          denom:
            'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
          exponent: 0,
          aliases: ['peaka']
        },
        {
          denom: 'DORA',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'doravota',
            base_denom: 'peaka',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-2694',
            path: 'transfer/channel-2694/peaka'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }
      ]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom:
            'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
          exponent: 0,
          aliases: ['ucore']
        },
        {
          denom: 'core',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'coreum',
            base_denom: 'ucore',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-2188',
            path: 'transfer/channel-2188/ucore'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }
      ],
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft']
    },
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
          exponent: 0,
          aliases: ['utia']
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-6994',
            path: 'transfer/channel-6994/utia'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      ]
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
          exponent: 0,
          aliases: ['adydx']
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-6787',
            path: 'transfer/channel-6787/adydx'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
        }
      ]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [
        {
          denom:
            'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
          exponent: 0,
          aliases: ['FX']
        },
        {
          denom: 'WFX',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'FX',
            channel_id: 'channel-19'
          },
          chain: {
            channel_id: 'channel-2716',
            path: 'transfer/channel-2716/FX'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }
      ]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
          exponent: 0,
          aliases: ['usat']
        },
        {
          denom: 'nbtc',
          exponent: 14
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Nomic'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'usat',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-6897',
            path: 'transfer/channel-6897/usat'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ]
    },
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
          exponent: 0,
          aliases: ['unois']
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nois',
            base_denom: 'unois',
            channel_id: 'channel-37'
          },
          chain: {
            channel_id: 'channel-8277',
            path: 'transfer/channel-8277/unois'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'nois',
            base_denom: 'unois'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }
      ],
      keywords: ['nois', 'randomness', 'drand', 'wasm']
    },
    {
      description: 'Margined Power Token sqOSMO',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
          exponent: 0
        },
        {
          denom: 'sqosmo',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        }
      ]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [
        {
          denom:
            'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
          exponent: 0,
          aliases: [
            'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk'
          ]
        },
        {
          denom: 'nstk',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom:
              'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh:unstk'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }
      ]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [
        {
          denom:
            'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
          exponent: 0,
          aliases: [
            'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          ]
        },
        {
          denom: 'BRNCH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }
      ]
    },
    {
      description:
        'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      denom_units: [
        {
          denom:
            'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
          exponent: 0,
          aliases: [
            'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          ]
        },
        {
          denom: 'wstETH',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Lido'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom:
              'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ]
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
          exponent: 0
        },
        {
          denom: 'sqatom',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        }
      ]
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
          exponent: 0
        },
        {
          denom: 'sqbtc',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denom_units: [
        {
          denom:
            'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
          exponent: 0,
          aliases: ['uqwoyn']
        },
        {
          denom: 'qwoyn',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'qwoyn',
            base_denom: 'uqwoyn',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-880',
            path: 'transfer/channel-880/uqwoyn'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
        }
      ]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
          exponent: 0,
          aliases: ['hydrogen']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      name: 'Bostrom Hydrogen',
      display:
        'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'hydrogen',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/hydrogen'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }
      ]
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [
        {
          denom:
            'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
          exponent: 0,
          aliases: ['tocyb']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      name: 'Bostrom Tocyb',
      display:
        'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'tocyb',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/tocyb'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }
      ]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
          exponent: 0,
          aliases: ['millivolt']
        },
        {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'millivolt',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/millivolt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
        }
      ]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
          exponent: 0,
          aliases: ['milliampere']
        },
        {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'bostrom',
            base_denom: 'milliampere',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95/milliampere'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
        }
      ]
    },
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [
        {
          denom:
            'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
          exponent: 0,
          aliases: ['usource']
        },
        {
          denom: 'source',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'source',
            base_denom: 'usource',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-8945',
            path: 'transfer/channel-8945/usource'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }
      ]
    },
    {
      description:
        "Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth's oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth's oracle program combines publishers' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth's oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.",
      denom_units: [
        {
          denom:
            'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
          exponent: 0,
          aliases: [
            'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy'
          ]
        },
        {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom:
            'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
          exponent: 0,
          aliases: ['stk/uosmo']
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/stk/uosmo'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }
      ]
    },
    {
      description: 'Levana native token',
      denom_units: [
        {
          denom:
            'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
          exponent: 0
        },
        {
          denom: 'lvn',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png'
        }
      ],
      coingecko_id: 'levana-protocol'
    },
    {
      description: 'Puppy',
      denom_units: [
        {
          denom:
            'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
          exponent: 0,
          aliases: [
            'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef'
          ]
        },
        {
          denom: 'puppy',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom:
              'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-73'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-11348',
            path: 'transfer/channel-11348/cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }
      ],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom:
            'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
          exponent: 0,
          aliases: [
            'unewt',
            'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          ]
        },
        {
          denom: 'newt',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom:
              'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }
      ]
    },
    {
      description: "MilkyWay's liquid staked TIA",
      denom_units: [
        {
          denom:
            'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
          exponent: 0
        },
        {
          denom: 'milkTIA',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'MilkyWay'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
        }
      ],
      coingecko_id: 'milkyway-staked-tia'
    },
    {
      description: 'ASH',
      denom_units: [
        {
          denom:
            'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
          exponent: 0,
          aliases: [
            'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          ]
        },
        {
          denom: 'ASH',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom:
              'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }
      ]
    },
    {
      description: 'RAC',
      denom_units: [
        {
          denom:
            'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
          exponent: 0,
          aliases: [
            'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          ]
        },
        {
          denom: 'RAC',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom:
              'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }
      ]
    },
    {
      description: 'GUPPY',
      denom_units: [
        {
          denom:
            'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
          exponent: 0,
          aliases: [
            'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          ]
        },
        {
          denom: 'GUPPY',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom:
              'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }
      ]
    },
    {
      description:
        'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [
        {
          denom:
            'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
          exponent: 0,
          aliases: ['aISLM']
        },
        {
          denom: 'ISLM',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'haqq',
            base_denom: 'aISLM',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-1575',
            path: 'transfer/channel-1575/aISLM'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }
      ]
    },
    {
      description:
        '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [
        {
          denom:
            'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
          exponent: 0,
          aliases: ['factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism']
        },
        {
          denom: 'autism',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      images: [
        {
          image_sync: {
            chain_name: 'injective',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [
        {
          denom:
            'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
          exponent: 0,
          aliases: ['gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e']
        },
        {
          denom: 'page',
          exponent: 8
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }
      ]
    },
    {
      description: 'PURSE Token',
      denom_units: [
        {
          denom:
            'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
          exponent: 0,
          aliases: ['bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C']
        },
        {
          denom: 'PURSE',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
      name: 'PURSE Token (Function X)',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad'
          },
          provider: 'Function X'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'pundix',
            base_denom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-12618',
            path: 'transfer/channel-12618/bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [
        {
          denom:
            'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
          exponent: 0,
          aliases: ['factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja']
        },
        {
          denom: 'NINJA',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom:
              'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
        }
      ]
    },
    {
      description: 'Kleomedes Token',
      denom_units: [
        {
          denom:
            'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
          exponent: 0,
          aliases: [
            'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          ]
        },
        {
          denom: 'kleo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
        }
      ]
    },
    {
      description: "NYX Token (NYX) is the Nym Network's native token.",
      denom_units: [
        {
          denom:
            'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
          exponent: 0,
          aliases: ['unyx']
        },
        {
          denom: 'nyx',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nyx',
            base_denom: 'unyx',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-15464',
            path: 'transfer/channel-15464/unyx'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        "NYM Token (NYM) is the Nym Network's native utility token, used as the primary means to incentivize mixnet node operators.",
      denom_units: [
        {
          denom:
            'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
          exponent: 0,
          aliases: ['unym']
        },
        {
          denom: 'nym',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nyx',
            base_denom: 'unym',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-15464',
            path: 'transfer/channel-15464/unym'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
        }
      ]
    },
    {
      description: 'has a hat',
      denom_units: [
        {
          denom:
            'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
          exponent: 0,
          aliases: [
            'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          ]
        },
        {
          denom: 'achihuahuawifhat',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom:
              'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
        }
      ]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [
        {
          denom:
            'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
          exponent: 0,
          aliases: [
            'ucircus',
            'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          ]
        },
        {
          denom: 'circus',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom:
              'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }
      ]
    },
    {
      description:
        'Governance and utility token for the Junø Apes NFT platform on Juno',
      denom_units: [
        {
          denom:
            'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
          exponent: 0,
          aliases: [
            'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          ]
        },
        {
          denom: 'jape',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
        }
      ]
    },
    {
      description: 'Woof',
      denom_units: [
        {
          denom:
            'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
          exponent: 0,
          aliases: [
            'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof'
          ]
        },
        {
          denom: 'WOOF',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom:
              'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
        }
      ]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [
        {
          denom:
            'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
          exponent: 0,
          aliases: [
            'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          ]
        },
        {
          denom: 'sneaky',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom:
              'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom:
              'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        },
        {
          denom: 'wbtc',
          exponent: 8
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      base: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'BitGo, Kyber, and Ren'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }
      ]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [
        {
          denom:
            'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
          exponent: 0,
          aliases: [
            'ubad',
            'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          ]
        },
        {
          denom: 'bad',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom:
              'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }
      ]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      denom_units: [
        {
          denom:
            'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
          exponent: 0,
          aliases: [
            'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          ]
        },
        {
          denom: 'sgnl',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channel_id: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-169',
            path: 'transfer/channel-169/cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
        }
      ]
    },
    {
      description:
        "The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It's scientifically anarchic, professionally foolish, and your ticket to the madhouse.",
      denom_units: [
        {
          denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          exponent: 0
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }
      ]
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
          exponent: 0
        },
        {
          denom: 'sqtia',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
        }
      ]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
          exponent: 0,
          aliases: [
            'uapollo',
            'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          ]
        },
        {
          denom: 'apollo',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom:
              'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked DYDX",
      denom_units: [
        {
          denom:
            'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
          exponent: 0,
          aliases: ['stadydx']
        },
        {
          denom: 'stDYDX',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stadydx',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stadydx'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }
      ]
    },
    {
      description: "Stride's liquid staked TIA",
      denom_units: [
        {
          denom:
            'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
          exponent: 0,
          aliases: ['stutia']
        },
        {
          denom: 'stTIA',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stutia',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stutia'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }
      ]
    },
    {
      description: 'GLTO-ERC20 on injective',
      denom_units: [
        {
          denom:
            'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
          exponent: 0,
          aliases: ['peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2']
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'injective.GLTO',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          },
          provider: 'Gelotto'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Peggy'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description:
        'The native governance and staking token of the Dymension Hub',
      denom_units: [
        {
          denom:
            'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
          exponent: 0,
          aliases: ['adym']
        },
        {
          denom: 'dym',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dymension',
            base_denom: 'adym',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-19774',
            path: 'transfer/channel-19774/adym'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }
      ]
    },
    {
      description:
        'Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.',
      denom_units: [
        {
          denom: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
          exponent: 0
        },
        {
          denom: 'RAPTR',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1279xudevmf5cw83vkhglct7jededp86k90k2le',
      base: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
      name: 'RAPTR',
      display: 'RAPTR',
      symbol: 'RAPTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      denom_units: [
        {
          denom:
            'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4'
          }
        }
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      }
    },
    {
      description: 'Sail DAO Token',
      denom_units: [
        {
          denom:
            'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
          exponent: 0
        },
        {
          denom: 'sail',
          exponent: 6
        }
      ],
      base: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
      name: 'Sail',
      display: 'sail',
      symbol: 'SAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
        }
      ]
    },
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom:
            'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
          exponent: 0,
          aliases: ['unom']
        },
        {
          denom: 'nom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
      name: 'Nomic',
      display: 'nom',
      symbol: 'nomic.NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'unom',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-6897',
            path: 'transfer/channel-6897/unom'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      }
    },
    {
      description:
        "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      denom_units: [
        {
          denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
          exponent: 0
        },
        {
          denom: 'BADKID',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8',
      base: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
      name: 'BADKID',
      display: 'BADKID',
      symbol: 'BADKID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }
      ]
    },
    {
      description:
        'The governance and utility token of Yieldmos, the Interchain Automation Protocol',
      denom_units: [
        {
          denom:
            'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
          exponent: 0
        },
        {
          denom: 'ymos',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address:
        'osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy',
      base: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
      name: 'Yieldmos Coin',
      display: 'ymos',
      symbol: 'YMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
        }
      ]
    },
    {
      description: 'The memecoin built for the Celestia community',
      denom_units: [
        {
          denom: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
          exponent: 0
        },
        {
          denom: 'toro',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      address: 'osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z',
      base: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
      name: 'TORO',
      display: 'toro',
      symbol: 'TORO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
        }
      ]
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
          exponent: 0,
          aliases: [
            'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          ]
        },
        {
          denom: 'SHARK',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom:
              'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
        }
      ]
    },
    {
      description: 'BackBone Labs Liquid Staked OSMO',
      denom_units: [
        {
          denom:
            'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
          exponent: 0
        },
        {
          denom: 'bOSMO',
          exponent: 6
        }
      ],
      address:
        'osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv',
      base: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
      name: 'BackBone Labs Liquid Staked OSMO',
      display: 'bOSMO',
      symbol: 'bOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
        }
      ]
    },
    {
      description: 'Memecoin for The International Brane Wave',
      denom_units: [
        {
          denom: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
          exponent: 0,
          aliases: ['brnz']
        }
      ],
      base: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      name: 'Branez',
      display: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      symbol: 'BRNZ',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
      }
    },
    {
      description:
        'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [
        {
          denom:
            'ibc/D3FAF77F5DE21C18413B164751239BA7D521A9D8EA53BFE553AADF338A721480',
          exponent: 0,
          aliases: ['acvnt']
        },
        {
          denom: 'cvnt',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D3FAF77F5DE21C18413B164751239BA7D521A9D8EA53BFE553AADF338A721480',
      name: 'CVN',
      display: 'cvnt',
      symbol: 'CVN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'conscious',
            base_denom: 'acvnt',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-35264',
            path: 'transfer/channel-35264/acvnt'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
        }
      ]
    },
    {
      description: 'LAB - Everything is an Experiment',
      denom_units: [
        {
          denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
          exponent: 0
        },
        {
          denom: 'LAB',
          exponent: 6
        }
      ],
      address: 'osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n',
      base: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
        }
      ]
    },
    {
      description:
        'OnE mEmEcOiN tO cOnNeCt oL ImBeCiles - aNd in Da Cosmos BiNd DeM',
      denom_units: [
        {
          denom: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
          exponent: 0
        },
        {
          denom: 'IBC',
          exponent: 6
        }
      ],
      base: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
      name: 'IBC',
      display: 'IBC',
      symbol: 'IBC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png'
      },
      coingecko_id: '',
      keywords: ['memecoin'],
      socials: {
        webiste: 'https://www.ibcmeme.wtf',
        twitter: 'https://twitter.com/IBCmemecoin'
      }
    },
    {
      description:
        'The native fee, governance and staking token of the Tinkernet Parachain.',
      denom_units: [
        {
          denom:
            'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
          exponent: 0,
          aliases: [
            '2125',
            'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8'
          ]
        },
        {
          denom: 'tnkr',
          exponent: 12
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
      name: 'Tinkernet',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'tinkernet',
            base_denom: 'Planck'
          },
          provider: 'Tinkernet Parachain'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '2125',
            channel_id: 'channel-17'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/2125'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'composable',
            base_denom:
              'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
            channel_id: 'channel-3'
          },
          chain: {
            channel_id: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/2125'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }
      ]
    }
  ]
};
export default assets;
