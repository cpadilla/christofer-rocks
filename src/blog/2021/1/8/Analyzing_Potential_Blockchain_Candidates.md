---
title: Analyzing Potential Blockchain Candidates
date: Day, Month date, year
description: Analyzing various blockchains as candidates to develop on.
author: Christofer Padilla
type: article
tags: ["Space Pirates", "Blockchain", "Analysis"]
---

# Analyzing Potential Blockchain Candidates

<div class="info"><b>Note:</b> This article is a work in progress.</div>

![Blockchain](/images/blockchain.png)

So far, I've already created a [database diagram](./The_Eternal_War_Machine.md) of the [Space Pirates](/tags/#Space-Pirates) game. The next step in the development of the game is to decide on a blockchain to use to launch Space Pirates as a dApp on.

This is my analysis of the following blockchains I'm considering:

<ul style="columns:4">
<li><a href="#eosio">EOSIO</a></li>
<li><a href="#ethereum">Ethereum</a></li>
<li><a href="#neo">NEO</a></li>
<li>Tron</li>
<li>WAX</li>
<li>Stellar</li>
<li>Tezos</li>
<li>Custom Blockchain</li>
</ul>

[[toc]]

# Questions to Keep in Mind During Analysis

Before we begin, here are some questions we want to keep in mind when evaluating a specific blockchain:

* What is the development status of a platform?
* What type of Blockchain do you require?
* What Languages does the platform support?
* How popular is the platform?
* What Blockchain Consensus Protocol does the platform use to achieve consensus?
* Does the platform support Smart Contracts Functionality?
* What kind of scalability does your solution need?

These are all great questions we will answer in our analysis.

# Decentralized Applications

First of all, a dApp is a decentralized application. According to [Ethereum's documentation](https://ethereum.org/en/developers/docs/dapps/), a dapp has its backend code running on a decentralized peer-to-peer network, unlike a traditional app, whose backend code runs on centralized servers.

A dapp can have frontend code and user interfaces written in any language (just like an app) that can make calls to its backend. Furthermore, its frontend can be hosted on decentralized storage such as [IPFS](https://ipfs.io/).

## Properties of a dApp

dApps are:

* **Decentralized** that makes them independent, and no one controls them.
* **Deterministic** i.e., they perform the same function irrespective of the environment they are executed.
* **Turing complete**, which means given the required resources, the dapp can perform any action.
* **Isolated**, which means they are executed in a virtual environment so that if the smart contract happens to have a bug, it won’t hamper the normal functioning of the blockchain network.

## Benefits of dApp Development

* **Zero downtime** – once the smart contract at the core of an app is deployed and on the blockchain, the network as a whole will always be able to serve clients looking to interact with the contract. Malicious actors therefore cannot launch denial-of-service attacks targeted towards individual dapps.
* **Privacy** – you don’t need to provide real-world identity to deploy or interact with a dapp.
* **Resistance to censorship** – no single entity on the network can block users from submitting transactions, deploying dapps, or reading data from the blockchain.
* **Complete data integrity** – data stored on the blockchain is immutable and indisputable, thanks to cryptographic primitives. Malicious actors cannot forge transactions or other data that has already been made public.
* **Trustless computation/verifiable behavior** – smart contracts can be analyzed and are guaranteed to execute in predictable ways, without the need to trust a central authority. This is not true in traditional models; for example, when we use online banking systems, we have to trust that financial institutions will not misuse our financial data, tamper with records, or get hacked.

## Implications of dApp Development
* **Maintenance** – dapps can be harder to maintain because code and data published to the blockchain is harder to modify. It’s hard for developers to make updates to their dapps (or the underlying data stored by a dapp) once they are deployed - even if bugs or security risks are identified in an old version.
* **Performance overhead** – there is a huge performance overhead, and scaling is really hard. To achieve the level of security, integrity, transparency, and reliability that Ethereum aspires to, every node runs and stores every transaction. On top of this, proof-of-work takes time as well. A back-of-the-envelope calculation puts the overhead at something like 1,000,000x that of standard computation currently.
* **Network congestion** – at least in the current model (of Ethereum), if one dapp is using too many computational resources, the entire network gets backed up. Currently, the network is only able to process about 10 transactions per second; if transactions are being sent in faster than this, the pool of unconfirmed transactions can quickly balloon.
* **User experience** – it may be harder to engineer user-friendly experiences: The average end user might find it too difficult to set up a tool stack necessary to interact with the blockchain in a truly secure fashion.
* **Centralization** – User-friendly and developer-friendly solutions built on top of the base layer of a blockchain might end up looking like centralized services anyways: for example, such services may store keys or other sensitive information server-side, serve a frontend using a centralized server, or run important business logic on a centralized server before writing to the blockchain. This eliminates many (if not all) of the advantages of blockchain over the traditional model.

# Concensus Algorithms

It's worth looking at some of the underlying concensus algorithms which govern a blockhain first, before we look at specific blockchains. This will help classify blockchains to an extent.

The two best known concensus algorithms as well as the two most commonly used in the context of cryptocurrencies is Proof-of-Work (PoW) and Proof-of-Stake (PoS). By understanding these algorithms, it may help us understand some of the nuances of blockchains that use another form of consensus.

A concensus algorithm is necessary for a cryptocurrency to prevent the common flaw of digital currencies known as [double-spending](https://en.wikipedia.org/wiki/Double-spending).

![An example of double spending](/images/doublespending.jpg)

## Proof-of-work

[Proof-of-work](https://en.wikipedia.org/wiki/Proof_of_work) (PoW) is a form of cryptographic [zero-knowledge](https://en.wikipedia.org/wiki/Zero-knowledge_proof) proof in which one party (the prover) proves to others (the verifiers) that a certain amount of computational effort has been expended for some purpose. It is the concensus algorithm popularized by Bitcoin.

There are many great videos on YouTube that explain the Proof-of-Work algorithm well, but I found YouTuber *[nang](https://www.youtube.com/user/angrocket)* to have one of the best explanations that visualizes the concept of zero-knowledge proof.

<iframe width="640" height="360" src="https://www.youtube.com/embed/malwhCwEosk?start=282&end=337" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Much like a student shows his answer on a math quiz is correct by showing his work, Proof-of-Work concensus *works* because the proof that blocks are valid comes from the computationally expensive work the CPUs do to solve hashes.

In order for a block producer to double-spend, not only would they have to recompute the hashes for every other block broadcasted on the network, they would also have to outproduce every other node. The majority decision is represented by the longest chain, which has the greatest proof-of-work effort invested in it. If a majority of CPU power is controlled by honest nodes, the honest chain will grow the fastest and outpace any competing chains.

The downside to this is the vast amount of computing resources that the PoW mechanism requires. This consumes a significant amount of electricity. Indeed, Bitcoin's energy consumption can [power an entire country](https://www.forbes.com/sites/shermanlee/2018/04/19/bitcoins-energy-consumption-can-power-an-entire-country-but-eos-is-trying-to-fix-that).

However, there is no alternative design known that could replace Proof-of-Work but keeps its desirable attributes such as:

* permissionless mining
* fair distribution of coins
* security against many known attacks
* bootstrappability of new nodes in a hostile environment
* graceful degradation and recovery even in the face of a successful attack or network failure
* unforgeable and statically verifiable costliness

## Proof-of-Stake

What is [Proof-of-Stake](https://en.wikipedia.org/wiki/Proof_of_stake)?

> With the advent of modern cryptography, the idea that information can be physically real — and valuable — has moved from the dingy halls of philosophy departments to the concrete world of business. We are all familiar with the economic activity enabled by secure communication: negotiations, contracts, transactions, sales and commands can be sent on the public Internet with no fear of forgery or interception. We are also familiar with the financial consequences when secret data is lost or stolen.
>
> Since the advent of cryptographic currency in January 2009 [3] this notion of valuable information has been made concrete. It is possible to hold and exchange a fungible store of value, using public communication media, with cryptographic rather than physical security preventing fraud or theft. Rather than saying “this encryption key is worth $10,000 because that’s what it will cost us if its encrypted data is exposed” one can say “this key is worth $10,000 but can be broken up, sending only $20 of it to another party while keeping the rest”.
>
> With this context, proof-of-stake is a simple idea. A proof of stake is a cryptographic proof of ownership. With cryptocurrencies, it is possible for a proof-of-stake to not only prove ownership of a precise amount of currency, but also prove that this currency satisfies some property (say, it is locked and unspendable until some contract is satisfied).
>
> In particular, proven stake in a scarce and experimental cryptocurrency can be considered a proof of vested interest in the project’s success. By proving stake which is time-locked, it can be used to prove interest in the project’s continued (and sustainable) existence.

In PoS-based cryptocurrencies the creator of the next block is chosen via various combinations of random selection and wealth or age (i.e., the stake). It depends on the specific blockchain implementation. Selection by account balance would result in (undesirable) centralization, as the single richest member would have a permanent advantage. Thus, several different methods of selection have been devised.

In general, block producers (determined by whatever means) stake some amount of their coin as collatoral while they produce blocks. The idea is that should the get caught double-spending, they lose their staked coins. Theoretically, this should prevent (or at least discourage) nefarious block producers from double-spending because the amount of coins they stand to gain from doing so would be less than the amount they have staked.

In Proof-of-Work blockchains, miners "vote" on valid transactions with their CPU power; the more of it you have, the larger influence your "vote" has. In a Proof-of-Stake blockchain, stakeholders vote with their money instead.

Some people ([including Ethereum founder Vitalik Buterin](https://blog.ethereum.org/2014/07/05/stake/))have found criticism of the Proof-of-Stake algorithm, even going so far as to say that concensus using such methods are [impossible](https://download.wpsoftware.net/bitcoin/pos.pdf).

One issue that can arise is the "nothing-at-stake" problem, wherein block generators have nothing to lose by voting for multiple blockchain histories, thereby preventing consensus from being achieved. Because unlike in proof-of-work systems, there is little cost to working on several chains.

There have been [some attempts](https://en.wikipedia.org/wiki/Proof_of_stake#Criticism) to fix these problems, however.

To his credit, Vitalik points out the three main advantages of Proof-of-Stake as well:

1. It does not waste any significant amount of electicity. Sure, there is a need for stakeholders to keep trying to produce blocks, but no one gains any benefit from making more than one attempt per account per second; hence, the electricity expenditure is comparable to any other non-wasteful internet protocol (eg. BitTorrent)
2. It can arguably provide a much higher level of security. In proof of work, assuming a liquid market for computing power the cost of launching a 51% attack is equal to the cost of the computing power of the network over the course of two hours - an amount that, by standard economic principles, is roughly equal to the total sum of block rewards and transaction fees provided in two hours. In proof of stake, the threshold is theoretically much higher: 51% of the entire supply of the currency.
3. Depending on the precise algorithm in question it can potentially allow for much faster blockchains (eg. NXT has one block every few seconds, compared to one per minute for Ethereum and one per ten minutes for Bitcoin)

# Blockchains

## EOSIO

![EOSIO](/images/eosio.png)

### Info

* White-paper: [https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md](https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md)
* Code: [https://github.com/EOSIO/eos](https://github.com/EOSIO/eos)
* Concensus Algorithm: [Delegated Proof of Stake](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper)
* Smart contract langauge: [C++](https://developers.eos.io/welcome/v2.0/overview/technical_features)
* Documentation: [https://developers.eos.io/welcome/latest/overview/index](https://developers.eos.io/welcome/latest/overview/index)

Before we begin, we should clarify the difference between EOS and EOSIO.

**EOSIO software**

> A free, open-source software that can deploy highly customizable blockchains on which developers and entrepreneurs can run high-performing blockchain applications.

**EOS blockchain**

> A deployed blockchain powered by the EOSIO software.

### Advantages

#### Delegated Proof of Stake

Before getting into some of the other advantages of EOSIO, we should first examine the concensus algorithm and it's advantages.

Natasha Prayag of [eToro](https://www.etoro.com/en-us/) wrote a great article on the differences between [DPoS vs PoS](https://www.etoro.com/news-and-analysis/market-insights/dpos-vs-pos-winner-takes-all).

> In order to truly determine who comes out on top in DPoS vs PoS: winner takes all, we first need to examine some of the advantages and disadvantages of each system. So, what are some of the advantages of the Proof of Stake System?
> 
> * Stakers receive coins as a reward for contributing to the network.
> * Blockchain consensus is reached digitally.
> * Users can contribute just by staking coins in their wallet. 
> * Users don’t need to build massive mining operations, rather they can earn rewards simply for holding and staking a coin. 
> * PoS is more environmentally friendly than PoW
> 
> Some advantages of the Delegated Proof of Stake system:
> 
> * DPoS allows for block producers to validate transactions in seconds – providing faster transactions than PoS and PoW.
> * Delegates are elected through a democratic voting system, so each token holder has a say. 
> * Security: voters can immediately detect malice on the part of a delegate, and that delegate can then be voted out of the system.
> * DPoS is even more energy efficient than PoS and uses less hardware.
> * Block producers, or Delegates, can be voted out of the system at any point – so they’re forced to be on their best behavior.

Very succinct. So as far as I'm concerned, the advantages of DPoS are:

* Fast(er than PoS and PoW)
* Secure

Neat. But what about the advantages of building a dApp on EOSIO?

Well here we have it, [straight from the horses mouth](https://block.one/news/four-reasons-why-developers-and-enterprises-are-looking-at-the-eosio-blockchain-protocol/):

1. It's scalable.
2. It's fast.
3. It's virtually free.
4. It's green.

So this might be a little biased, seeing as this was written by [block.one](https://block.one/) (the company that created EOS) shortly after EOSIO's inception.

#### Scalability

One bold claim of there's was that EOSIO is the most used blockchain software in the world. Which actually still seems to be [true](https://blocktivity.info/), at least according to daily activity.

![blocktivity.info](/images/blocktivity.png)

This is probably because not only is EOSIO fast, enabling it to process many transactions, but it's also scalable, which I'm sure is something a lot of dApp developers look for in a blockchain.

EOSIO was designed for scale from the ground up and is the first to use WebAssembly, which has some of the fastest and highest execution speed. This means development is done in C++, which is a language I have familiarity with. So another advantage is that I don't have to learn a new language for programming smart contracts in.

#### Operating Costs

Another claim is that it's "virtually free". Notice the implied asterisk. The reason why it's "virtually free" is because, unlike other first-generation blockchains apps where the user has to pay a fee per transaction, the cost is relayed to the developer and is more akin to the cost of maintaining a server. The way this works is that the developer is allowed network resources ([RAM](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram), [CPU](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu) and [NET](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net)) proportional to the amount of EOS tokens they stake.

#### Flexibility

One of the most appealing aspects of EOSIO is that it is not just a blockchain, but a blockchain *software*. This means I can customize just about every aspect of it. Indeed, it is much like a free and open-source operating system.

In this case, the operating system is a collection of smart contracts. These system contracts are defined in the `eosio.contracts` library and encapsulate the base functionality for an EOSIO based blockchain.

* [eosio.bios](https://developers.eos.io/manuals/eosio.contracts/latest/action-reference/eosio.bios/index)
* [eosio.system](https://developers.eos.io/manuals/eosio.contracts/latest/action-reference/eosio.system/index)
* [eosio.msig](https://developers.eos.io/manuals/eosio.contracts/latest/action-reference/eosio.msig/index)
* [eosio.token](https://developers.eos.io/manuals/eosio.contracts/latest/action-reference/eosio.token/index)
* [eosio.wrap](https://developers.eos.io/manuals/eosio.contracts/latest/action-reference/eosio.wrap/index)

### Downsides

First of all, I would like to credit [Jack Tanner](https://theblockstalk.medium.com/the-8-worst-issues-and-best-features-of-the-eos-blockchain-4b4f3157eb7f) for providing an excellent write up on most of the issues I've found with EOSIO. Many of the following points I realized because of his article.

#### Operating Costs

With EOSIO being "virtually free", the one obvious downside is that the cost of running the dApp falls to me, the developer. I still see this as an advantage, however, since it makes the game free to play for the users.

Another downside Jack pointed out is that the cost of RAM changes without altering the supply or demand of RAM. To elaborate, the price of RAM is set by a Bancor-like algorithm that has several inputs including the current supply of RAM and demand for RAM. It has no knowledge and does not consider the $ cost of EOS. While this is a fair point, currently, EOS is [pretty cheap](https://cryptowat.ch/charts/KRAKEN:EOS-USD) right now. Plus, because the price of RAM *is* calculated by supply and demand, it does seem like the price is set fairly in terms of EOS tokens.

#### Centralization

One other major concern with EOSIO has been fear that it may be too centralized. Most of the concerns outlined in [this](https://www.coindesk.com/everyones-worst-fears-about-eos-are-proving-true) article are that on EOS, 21 nodes have all the power over the chain, with [most of them located in China](https://www.eos-radar.com/).

Once again, [Jack points out](https://theblockstalk.medium.com/the-8-worst-issues-and-best-features-of-the-eos-blockchain-4b4f3157eb7f#06ea) that protocol upgrades only need 15 block producers to approve. This includes changes to the token, how contracts and accounts are managed, voting and election of BPs and more. When protocal upgrades are approved, nodes that have not upgraded their software will stop syncing.

These centralization concerns are valid and could develop an unhealthy [meta-game](https://en.wikipedia.org/wiki/Metagaming) in the future.

However, this means that upgrades to governance (soft forks) and protocols (hard forks) are not only possible, but are done in a transparent manner so detection of a malicious attack can be detected immediately.

### Final Thoughts

EOSIO seems like a strong candidate for developing the Space Pirates game because of it's high transaction speed and ability to customize each component of the blockchain.

The only thing I still haven't determined is if creating a new blockchain will be run on the EOS blockchain. If so, I'll have to share resources with every other dApp running on EOS main-net. If not, then does that mean that the network will start off with just one node (my own)? If that's the case, it might jeopardize the entire network if it's dependant on one node.

How would I incentivize people to run their own nodes? And would that be too high of a barrier-to-entry just to play a game?

These are things I haven't really found an answer to yet and will probably have to investigate further if I decide to use EOSIO.

### Tutorials

* [https://battles.eos.io/](https://battles.eos.io/)

### References

* [Learnings from building my first dapp on EOS blockchain](https://cmichel.io/releasing-my-first-eos-dapp/)
* [Crypto Dynasty White Paper 2.0](https://cryptodynasty.one/download/CryptoDynastyWhitePaper2.0_EN.pdf)

## Ethereum

![Ethereum](/images/Ethereum.png)

### Info

* White-paper: [https://ethereum.org/en/whitepaper/](https://ethereum.org/en/whitepaper/)
* Code: [https://github.com/ethereum/go-ethereum](https://github.com/ethereum/go-ethereum)
* Concensus Algorithm: Currently, [Proof-of-Work](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/), eventually [Proof of stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos)
* Smart contract language: [Solidity](https://ethereum.org/en/developers/docs/smart-contracts/languages/#solidity) and [Vyper](https://ethereum.org/en/developers/docs/smart-contracts/languages/#vyper) most common
* Documentation: [https://ethereum.org/en/developers/docs/](https://ethereum.org/en/developers/docs/)

### Advantages

Despite the growth of alternative blockchain networks, decentralized applications (dApps) exist almost exclusively on the Ethereum blockchain. The Ethereum Virtual Machine (EVM) is the primary driver of this trend because it allows developers to launch any dApp regardless of the underlying coding language while using Solidity for coding smart contracts. This network architecture eliminates the need to develop an entirely new blockchain for every dApp. 

One of the big advantages of the Ethereum blockchain is it benefits from the network effect. With a community of highly skilled developers, there are a lot of tool and crucial extension documentation to help other developers get started. The increasing number of developers utilizing these solutions has perpetuated the development of better tools, better code, better platforms, and ultimately, better dApps.

On the Ethereum network, dApps can use a native token that adheres to the [ERC-20](https://github.com/ethereum/EIPs/issues/20) in order to monetize assets in the dApp. The ERC-20 standard enables the frictionless exchange of these crypto assets.

To interact with smart contract instances on the blockchain, we can utilize a javascript library called [web3](https://github.com/ChainSafe/web3.js).

With web3, we can submit four types of transactions:
1. Send ethers from one *external account* to another *external account* (like a Bitcoin transaction)
2. Send a “blank” transaction to *deploy a smart contract* (becomes a contract account)
3. Send ethers from an *external account* to a *contract account*
4. Send a transaction to *execute a method* within the contract account (to update or retrieve the contract state, or call other contracts)

Calls that simply retrieve data from the blockchain or contract are “instant” and free. We can return any values we want from these calls.

Another nice benefit is that functions can emit **events** which web3 can *watch* for using the transaction hash. We can also throw exceptions to handle errors. A thrown exception will always revert the state.

### Downsides

Ethereum is unable to access real time data from outside the blockchain. Developers need to rely on trusted third party data providers, called oracles, to provide smart contracts with outside information like weather, random numbers, or currency values.

You are also tied to paying for your transactions by the operation with gas that translates into Ethereum’s ether. As a result, using the current version of Solidity, you could very feasibly find yourself hitting a transaction limit if the computation you intend to perform is too expensive (like verifying checkmate in a game of chess). As a result, on-chain computations because become costly in terms of money and network bandwidth.

To elaborate, transactions and calls are executed by the EVM as opcodes, which equate to gas. Transactions that *update* the blockchain or contract state require *payment* of ethers. These will take *time*.

<div class="warning"><b>Tip:</b> Because nodes compete to mine the next block, function calls are executed redundantly across the network. To offset this waste of computing resources, a best practice is to perform as many calculations <i>off-chain</i> as possible.</div>

Ethereum also uses Solidity as it's most common smart-contract langauge. This means I would have to spend more time learning this langauge.

### Sidechain

The Matic Network Sidechain offers a "layer 2" scalability solution for Ethereum, similar to Bitcoin's [Lightning network](https://en.wikipedia.org/wiki/Lightning_Network).

* [Matic Network Sidechain](https://matic.network/)
  - https://medium.com/matic-network/what-is-matic-network-466a2c493ae1

### Tutorials

* [Ethereum Tutorials](https://ethereum.org/en/developers/tutorials/)
* [Remix, an online Ethereum editor](https://remix.ethereum.org/)

### References

* [Are most dApps built on ETH?](https://www.gemini.com/cryptopedia/dapps-ethereum-decentralized-application)
* [ERC-20 Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
* [A Complete Mental Model for Ethereum dApp Development](https://medium.com/heartbankacademy/a-complete-mental-model-for-ethereum-dapp-development-5ce08598ed0a)

## NEO

![NEO](/images/neo.svg)

### Info

* White-paper: [https://docs.neo.org/docs/en-us/basic/whitepaper.html](https://docs.neo.org/docs/en-us/basic/whitepaper.html)
* Code: [https://github.com/neo-project/neo](https://github.com/neo-project/neo)
* Concensus Algorithm: [Delegated Byzantine Fault Tolerant](https://docs.neo.org/docs/en-us/basic/whitepaper.html#consensus-mechanism-dbft)
* Smart contract langauge: [C#, any\*](https://docs.neo.org/docs/en-us/sc/gettingstarted/introduction.html#write-smart-contracts-in-any-language)
* Documentation: [https://docs.neo.org/docs/en-us/index.html](https://docs.neo.org/docs/en-us/index.html)

### Advantages

### Downsides

## Tron

### Info

* Concensus Algorithm: 
* Code: 
* White-paper: 

### Advantages

### Downsides

## WAX

### Info

* Concensus Algorithm: 
* Code: 
* White-paper: 

### Advantages

* [Why dApps are moving to WAX from EOS](https://www.globenewswire.com/news-release/2019/12/11/1959391/0/en/Here-s-Why-dApps-Are-Moving-to-WAX-and-Leaving-EOS.html).

### Downsides

## Stellar

### Info

* Concensus Algorithm: 
* Code: 
* White-paper: 

### Advantages

### Downsides

## Tezos

### Info

* Consensus Algorithm: [Proof-of-stake](https://en.wikipedia.org/wiki/Proof_of_stake).

* Code: [https://gitlab.com/tezos/tezos](https://gitlab.com/tezos/tezos)

* White-paper: [https://tezos.com/static/white_paper-2dc8c02267a8fb86bd67a108199441bf.pdf](https://tezos.com/static/white_paper-2dc8c02267a8fb86bd67a108199441bf.pdf)

### Advantages

### Downsides

## Custom Blockchain

### Info

* Concensus Algorithm: 
* Code: 
* White-paper: 

### Advantages

### Downsides

# Conclusion

In conclusion, I have no idea which one I want to use xD

<TagLinks />

<Comments />

