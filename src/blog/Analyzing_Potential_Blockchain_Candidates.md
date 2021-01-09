---
title: Analyzing Potential Blockchain Candidates
date: Day, Month date, year
description: Analyzing various blockchains as candidates to develop on.
author: Christofer Padilla
type: article
tags: ["Space Pirates", "Blockchain", "Analysis"]
---

# Analyzing Potential Blockchain Candidates

So far, I've already created a [database diagram](./The_Eternal_War_Machine.md) of the [Space Pirates](/tags.md#Space%20Pirates) game. The next step in the development of the game is to decide on a blockchain to use to launch Space Pirates as a dApp on.

This is my analysis of the following blockchains I'm considering:

* EOSIO
* Ethereum
* NEO
* Stellar
* Tezos
* NXT?
* Custom Blockchain

Before we begin, here are some questions we want to keep in mind when evaluating a specific blockchain:

* What is the development status of a platform?
* What type of Blockchain do you require?
* What Languages does the platform support?
* How popular is the platform?
* What Blockchain Consensus Protocol does the platform use to achieve consensus?
* Does the platform support Smart Contracts Functionality?
* What kind of scalability does your solution need?

These are all great questions we will answer in our analysis.

## Concensus Algorithms

It's worth looking at some of the underlying concensus algorithms which govern a blockhain first, before we look at specific blockchains. This will help classify blockchains to an extent.

The two best known concensus algorithms as well as the two most commonly used in the context of cryptocurrencies is Proof-of-Work (PoW) and Proof-of-Stake (PoS). By understanding these algorithms, it may help us understand some of the nuances of blockchains that use another form of consensus.

A concensus algorithm is necessary for a cryptocurrency to prevent the common flaw of digital currencies known as [double-spending](https://en.wikipedia.org/wiki/Double-spending).

![An example of double spending](/images/doublespending.jpg)

### [Proof-of-work](https://en.wikipedia.org/wiki/Proof_of_work)

Proof-of-work (PoW) is a form of cryptographic [zero-knowledge](https://en.wikipedia.org/wiki/Zero-knowledge_proof) proof in which one party (the prover) proves to others (the verifiers) that a certain amount of computational effort has been expended for some purpose. It is the concensus algorithm popularized by Bitcoin.

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

### [Proof-of-Stake](https://en.wikipedia.org/wiki/Proof_of_stake)

What is Proof-of-Stake?

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

## Blockchains

### EOSIO

#### Info
* Concensus Algorithm: 
* Code: 
* White-paper: 

#### Advantages

#### Downsides

### Ethereum

#### Info
* Concensus Algorithm: 
* Code: 
* White-paper: 

#### Advantages

#### Downsides

Ethereum is unable to access real time data from outside the blockchain. Developers need to rely on trusted third party data providers, called oracles, to provide smart contracts with outside information like weather, random numbers, or currency values.

You are also tied to paying for your transactions by the operation with gas that translates into Ethereum’s ether. As a result, using the current version of Solidity, you could very feasibly find yourself hitting a transaction limit if the computation you intend to perform is too expensive (like verifying checkmate in a game of chess). As a result, on-chain computations because become costly in terms of money and network bandwidth.

### NEO

#### Info
* Concensus Algorithm: 
* Code: 
* White-paper: 

#### Advantages

#### Downsides

### Stellar

#### Info
* Concensus Algorithm: 
* Code: 
* White-paper: 

#### Advantages

#### Downsides

### Tezos

#### Info
* Consensus Algorithm: [Proof-of-stake](https://en.wikipedia.org/wiki/Proof_of_stake).

* Code: [https://gitlab.com/tezos/tezos](https://gitlab.com/tezos/tezos)

* White-paper: [https://tezos.com/static/white_paper-2dc8c02267a8fb86bd67a108199441bf.pdf](https://tezos.com/static/white_paper-2dc8c02267a8fb86bd67a108199441bf.pdf)

#### Advantages

#### Downsides

### Custom Blockchain

#### Info
* Concensus Algorithm: 
* Code: 
* White-paper: 

#### Advantages

#### Downsides

<TagLinks />

<Comments />
