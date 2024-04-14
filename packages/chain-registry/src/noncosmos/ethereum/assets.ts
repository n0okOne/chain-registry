import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'ethereum',
  assets: [
    {
      description: 'Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It\'s the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.',
      denom_units: [
        {
          denom: 'wei',
          exponent: 0
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ether']
        }
      ],
      type_asset: 'evm-base',
      base: 'wei',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      coingecko_id: 'ethereum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }]
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      type_asset: 'erc20',
      address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      denom_units: [{
          denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
          exponent: 0,
          aliases: ['aave-wei']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      base: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      coingecko_id: 'aave',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }]
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      type_asset: 'erc20',
      address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      denom_units: [{
          denom: '0x4d224452801aced8b2f0aebe155379bb5d594381',
          exponent: 0,
          aliases: ['ape-wei']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      base: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      coingecko_id: 'apecoin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }]
    },
    {
      description: 'Axie Infinity is a Pokémon-inspired digital pet universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).',
      type_asset: 'erc20',
      address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      denom_units: [{
          denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
          exponent: 0,
          aliases: ['axs-wei']
        }, {
          denom: 'axs',
          exponent: 18
        }],
      base: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      coingecko_id: 'axie-infinity',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      type_asset: 'erc20',
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denom_units: [{
          denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      base: '0x6b175474e89094c44da98b954eedeac495271d0f',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      coingecko_id: 'dai',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'sDAI is a liquid representation of DAI deposited in the Dai savings rate contract.',
      type_asset: 'erc20',
      address: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      denom_units: [{
          denom: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
          exponent: 0,
          aliases: ['sdai-wei']
        }, {
          denom: 'sdai',
          exponent: 18
        }],
      base: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      name: 'Savings Dai',
      display: 'sdai',
      symbol: 'sDAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'MakerDAO'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
      },
      coingecko_id: 'dai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      type_asset: 'erc20',
      address: '0x853d955acef822db058eb8505911ed77f175b99e',
      denom_units: [{
          denom: '0x853d955acef822db058eb8505911ed77f175b99e',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      base: '0x853d955acef822db058eb8505911ed77f175b99e',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Frax Protocol'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      coingecko_id: 'frax',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      type_asset: 'erc20',
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      denom_units: [{
          denom: '0x514910771af9ca656af840dff83e8264ecf986ca',
          exponent: 0,
          aliases: ['link-wei']
        }, {
          denom: 'link',
          exponent: 18
        }],
      base: '0x514910771af9ca656af840dff83e8264ecf986ca',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      coingecko_id: 'chainlink',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }]
    },
    {
      description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      type_asset: 'erc20',
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      denom_units: [{
          denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
          exponent: 0,
          aliases: ['mkr-wei']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      base: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      coingecko_id: 'maker',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }]
    },
    {
      description: 'RAI is a non-pegged, ETH-backed stable asset. It is useful as more \'stable\' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.',
      type_asset: 'erc20',
      address: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
      denom_units: [{
          denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
          exponent: 0,
          aliases: ['rai-wei']
        }, {
          denom: 'rai',
          exponent: 18
        }],
      base: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'RAI Finance'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      coingecko_id: 'rai',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      type_asset: 'erc20',
      address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      denom_units: [{
          denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
          exponent: 0,
          aliases: ['shib-wei']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      base: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      coingecko_id: 'shiba-inu',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }]
    },
    {
      description: 'stETH is a token that represents staked ether in Lido, combining the value of initial deposit + staking rewards. stETH tokens are pegged 1:1 to the ETH staked with Lido and can be used as one would use ether, allowing users to earn Eth2 staking rewards whilst benefiting from Defi yields.',
      type_asset: 'erc20',
      address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      denom_units: [{
          denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
          exponent: 0,
          aliases: ['steth-wei']
        }, {
          denom: 'steth',
          exponent: 18
        }],
      base: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Lido'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      coingecko_id: 'staked-ether',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }]
    },
    {
      description: 'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      type_asset: 'erc20',
      address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      denom_units: [{
          denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          exponent: 0,
          aliases: ['wsteth-wei']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      base: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        }],
      coingecko_id: 'wrapped-steth',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'Frax Ether is a liquid ETH staking derivative designed to uniquely leverage the Frax Finance ecosystem. frxETH acts as a stablecoin loosely pegged to ETH, leveraging Frax\'s winning playbook on stablecoins and onboarding ETH into the Frax ecosystem.',
      type_asset: 'erc20',
      address: '0x5e8422345238f34275888049021821e8e08caa1f',
      denom_units: [{
          denom: '0x5e8422345238f34275888049021821e8e08caa1f',
          exponent: 0,
          aliases: ['frxeth-wei']
        }, {
          denom: 'frxeth',
          exponent: 18
        }],
      base: '0x5e8422345238f34275888049021821e8e08caa1f',
      name: 'Frax Ether',
      display: 'frxeth',
      symbol: 'frxETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Frax'
        }],
      coingecko_id: 'frax-ether',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
      }
    },
    {
      description: 'sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one becomes eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.',
      type_asset: 'erc20',
      address: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denom_units: [{
          denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      base: '0xac3e018457b222d93114458476f3e3416abbe38f',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      coingecko_id: 'staked-frax-ether',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      description: 'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      type_asset: 'erc20',
      address: '0xae78736cd615f374d3085123a210448e74fc6393',
      denom_units: [{
          denom: '0xae78736cd615f374d3085123a210448e74fc6393',
          exponent: 0,
          aliases: ['reth-wei']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      base: '0xae78736cd615f374d3085123a210448e74fc6393',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Rocket Pool'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      coingecko_id: 'rocket-pool-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }]
    },
    {
      description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      type_asset: 'erc20',
      address: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
      denom_units: [{
          denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
          exponent: 0,
          aliases: ['cbeth-wei']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      base: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Coinbase'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      coingecko_id: 'coinbase-wrapped-staked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }]
    },
    {
      description: 'UNI token served as governance token for Uniswap protocol with 1 billion UNI have been minted at genesis. 60% of the UNI genesis supply is allocated to Uniswap community members and remaining for team, investors and advisors.',
      type_asset: 'erc20',
      address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      denom_units: [{
          denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
          exponent: 0,
          aliases: ['uni-wei']
        }, {
          denom: 'uni',
          exponent: 18
        }],
      base: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      coingecko_id: 'uniswap',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      type_asset: 'erc20',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      denom_units: [{
          denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingecko_id: 'usd-coin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      type_asset: 'erc20',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denom_units: [{
          denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      coingecko_id: 'tether',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }]
    },
    {
      description: 'Wrapped Bitcoin (WBTC) is an ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
      type_asset: 'erc20',
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denom_units: [{
          denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      base: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      coingecko_id: 'wrapped-bitcoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }]
    },
    {
      description: 'wETH is \'wrapped ETH\'',
      type_asset: 'erc20',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      denom_units: [{
          denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      coingecko_id: 'weth',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'Chain is a cloud blockchain protocol that enables organizations to build better financial services from the ground up powered by Sequence and Chain Core.',
      type_asset: 'erc20',
      address: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      denom_units: [{
          denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
          exponent: 0,
          aliases: ['xcn-wei']
        }, {
          denom: 'xcn',
          exponent: 18
        }],
      base: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      coingecko_id: 'chain-2',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }]
    },
    {
      description: 'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      type_asset: 'erc20',
      address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      denom_units: [{
          denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
          exponent: 0,
          aliases: ['busd-wei']
        }, {
          denom: 'busd',
          exponent: 18
        }],
      base: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Binance'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      coingecko_id: 'binance-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        }]
    },
    {
      description: '',
      type_asset: 'erc20',
      address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      denom_units: [{
          denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
          exponent: 0,
          aliases: ['pepe-wei']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      base: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      coingecko_id: 'pepe',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }]
    },
    {
      description: 'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      type_asset: 'erc20',
      address: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
      denom_units: [{
          denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
          exponent: 0
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      base: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Seven Seas & DeFine Logic Labs'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      coingecko_id: 'yieldeth-sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }]
    },
    {
      description: 'TBTC replaces centralized intermediaries with a randomly selected group of nodes on the Threshold Network. This group of independent nodes works together to secure your deposited Bitcoin through threshold cryptography. TBTC allows anyone to use Bitcoin in the expanding DeFi and Web3 universe.',
      denom_units: [{
          denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
          exponent: 0,
          aliases: []
        }, {
          denom: 'tBTC',
          exponent: 18,
          aliases: []
        }],
      type_asset: 'erc20',
      address: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      base: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      display: 'tBTC',
      name: 'tBTC v2',
      symbol: 'tBTC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Threshold Network'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
      },
      coingecko_id: 'tbtc',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denom_units: [{
          denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          exponent: 0,
          aliases: []
        }, {
          denom: 'pstake',
          exponent: 18,
          aliases: []
        }],
      type_asset: 'erc20',
      address: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      base: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      display: 'pstake',
      name: 'pSTAKE Finance',
      symbol: 'PSTAKE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          provider: 'Persistence'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      coingecko_id: 'pstake-finance',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }]
    },
    {
      description: 'The OCC token acts as the fuel for the OccamRazer launchpad and it is indirectly used as well on the DAO governance layer.',
      type_asset: 'erc20',
      address: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      denom_units: [{
          denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
          exponent: 0,
          aliases: []
        }, {
          denom: 'occ',
          exponent: 18
        }],
      base: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      name: 'OccamFi',
      display: 'occ',
      symbol: 'OCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      coingecko_id: 'occamfi',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
        }]
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      type_asset: 'erc20',
      address: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      denom_units: [{
          denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          exponent: 0,
          aliases: []
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      coingecko_id: 'page',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }]
    },
    {
      description: 'Gelotto blends gaming, DEFI, and fun Dapps in a unique Web3 ecosystem. Join us to become part of the house, earning from all Gelotto products. Our main goal? To bring the masses into Web3 with open, accessible, and enjoyable Dapps.',
      type_asset: 'erc20',
      address: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      denom_units: [{
          denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
          exponent: 0,
          aliases: []
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          },
          provider: 'Gelotto'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }]
    },
    {
      description: '',
      type_asset: 'erc20',
      address: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      denom_units: [{
          denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
          exponent: 0,
          aliases: []
        }, {
          denom: 'ox',
          exponent: 18
        }],
      base: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      name: 'Open Exchange Token',
      display: 'ox',
      symbol: 'OX',
      coingecko_id: 'open-exchange-token',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }]
    },
    {
      description: 'BEAST: Battle, Breed, and Customize unique creatures powered by Ethereum & Cosmos',
      extended_description: 'A monster breeding & battling game with a twist. Each game interaction burns $BEAST tokens, adding a strategic depth to breeding, battling, and customization. Dive into a world where every move counts!',
      type_asset: 'erc20',
      address: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      denom_units: [{
          denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
          exponent: 0,
          aliases: []
        }, {
          denom: 'beast',
          exponent: 6
        }],
      base: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
        }]
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      type_asset: 'erc20',
      address: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      denom_units: [{
          denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          exponent: 0,
          aliases: []
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      base: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      coingecko_id: 'pundi-x-2',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png'
        }]
    },
    {
      description: 'Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins.',
      type_asset: 'erc20',
      address: '0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32',
      denom_units: [{
          denom: '0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32',
          exponent: 0,
          aliases: ['sfrax-wei']
        }, {
          denom: 'sfrax',
          exponent: 18
        }],
      base: '0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32',
      name: 'Staked FRAX',
      display: 'sfrax',
      symbol: 'sFRAX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Frax'
        }],
      coingecko_id: 'staked-frax',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
      }
    },
    {
      description: 'FXS is the value accrual and governance token of the entire Frax ecosystem. Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC.',
      type_asset: 'erc20',
      address: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
      denom_units: [{
          denom: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
          exponent: 0,
          aliases: ['fxs-wei']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      base: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
      name: 'Frax Share',
      display: 'fxs',
      symbol: 'FXS',
      coingecko_id: 'frax-share',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
      }
    },
    {
      description: 'PAX Gold (PAXG) tokens each represent one fine troy ounce of an LBMA-certified, London Good Delivery physical gold bar, secured in Brink’s vaults.',
      type_asset: 'erc20',
      address: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      denom_units: [{
          denom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
          exponent: 0,
          aliases: ['paxg-wei']
        }, {
          denom: 'paxg',
          exponent: 18
        }],
      base: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      name: 'Paxos Gold',
      display: 'paxg',
      symbol: 'PAXG',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'comex',
            base_denom: 'XAU'
          },
          provider: 'Paxos'
        }],
      coingecko_id: 'pax-gold',
      socials: {
        webiste: 'https://www.paxos.com/paxgold/',
        twitter: 'https://twitter.com/paxosglobal'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
      }
    }
  ]
};
export default info;