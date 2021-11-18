---
title: Designing a Blockchain from the Ground Up
date: 2021-11-17
description: After researching blockchains, I decided to attempt to design one from the ground up for Space Pirates.
author: Christofer Padilla
type: post
tags: ["Space Pirates", "Blockchain", "Analysis"]
---

# {{ $page.title }}

![Blockchain](/images/blockchain.jpeg)

I [previously](/blog/2021/1/8/Analyzing_Potential_Blockchain_Candidates.md) had [analyzed](/tags/#Analysis) some blockchains as potential candidates to use for the [Space Pirates](/tags/#Space-Pirates) game. At the time, I was mostly convinced that EOS would be the best blockchain for me to use. However, since then I've identified certain requirements that I want for the game that has made me re-evaluate this decision out of necessity.

So far, the requirements I have for this game include:

* An in-game currency with the same properties that make bitcoin a [sound](https://saifedean.com/thebitcoinstandard/) currency, namely, that it has:
    * durability
    * portability
    * divisibility
    * uniformity
    * limited supply
    * and acceptability.<sup>[<a href="https://www.stlouisfed.org/education/economic-lowdown-podcast-series/episode-9-functions-of-money">1</a>]</sup>
* I don't want the in game currency to be monopolized by the "miners" of the blockchain, meaning ideally, everyone has a fair chance of acquiring in game currency through their actions in the game (or "on-chain"). This means that the currency is not "mined" by the "miners" of the blockchain, but they players.
* At the same time, there should be some incentive for "miners" to contribute to the network. Therefore, some in-game incentive is required, ideally not in the form of currency directly (minted).
* Like bitcoin, the blockchain should be completely decentralized.

After I had made the realization that these were the requirements I wanted to have in my game, I started thinking abount the in-game currency, especially how it would be minted. This led me to re-consider creating my own blockchain.

## _Why not use an existing blockchain?_

First I had to come to terms with the blockchain I had chosen. EOS was ideal for it's high transactions-per-second. However, it achieves this at the expense of it's decentralization. One of the downsides of [DPoS](https://en.bitcoinwiki.org/wiki/DPoS) systems is that they are vulnerable to centralization as a number of witnesses is strictly limited.

I also realized I could have the in-game currency be distributed in game, as I wanted, in EOS, without having to worry about compensating miners (or "witnesses" in EOS's case) by having the game run on the EOS main net. However, this would then create a disconnect between the in-game ecosystem and the EOS ecosystem that the game runs on; the game would be at the mercy of the sustainability of the blockchain, with no direct incentives offered to the witnesses who run the blockchain the game depends on.

I realized the blockchain I chose for the game would be tied more closely to the "miners" incentives than I had initially considered.

## _Why not use a sidechain on an existing blockchain?_

In doing some research into the technology some existing decentralized games ran on, I found one called [Axie Infinity](https://axieinfinity.com/).

I watched some footage of the game and it played like on old school turn-based rpg that, surprisingly, seemed to run pretty smoothly. I understood it ran on the Ethereum network, but what I didn't understand was how it seemed to get around all the gas fees. As I understood it, the game would exist as a collection of smart contracts, with every call to such a contract requiring an gas fee to be paid.

Clearly, it didn't seem that the players were paying such fees. Were the game developers fronting all the costs, then? That was the case for EOS, I knew, from my previous research, but I couldn't find a straight answer to this question for this game.

Just kidding, [I found the answer](https://medium.com/@FPG_Odin/extended-q-a-of-axie-infinity-sidechain-announcement-b4c5dfc899c9).

This made me consider possibly using an existing blockchain for settling transactions and a sidechain for actually handling all of the micro-transactions (not those kind) of the game.

I quickly dismissed this idea because of the disconnect reason I mentioned previously.

## Designing a Blockchain from the Ground Up

Therefore, I decided it was time to seriously consider designing my own blockchain specifically for the game.

I started consuming content, learning about the different types of blockchains, which are mostly distinguished by the consensus algorithms they use.

<div class="resp-container">
  <iframe class="resp-iframe" width="640" height="360" src="https://www.youtube.com/embed/mBdrvfytLDQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

I found this video very enlightening, especially because it put me on to [Proof of Space](https://en.wikipedia.org/wiki/Proof_of_space). I personally think Proof of Work is pretty secure, especially given it's track record, but it is very expensive to mine. From what I understoon from the video, Proof of Space is essentially Proof of Work, except the work can be done before-hand, stored on a hard drive and used in the future. The cost is comparable to Proof of Work, except rather than paying with electricity, you pay with storage.

I started looking some of the research papers on the subject, such as the [paper](/pdf/Proofs%20of%20Space.pdf) on Proof of Space, as well as a specific implementation of it, called [Space Mint](https://dci.mit.edu/research/2019/3/20/spacemint-a-cryptocurrency-based-on-proofs-of-space).

<object data="/pdf/spacemint.pdf" type="application/pdf" width="100%" height="600px">
<div class="warning">
<b>Warning:</b> This browser does not support PDFs. Please download the PDF to view it: <a href="/pdf/spacemint.pdf">Download PDF</a>.
</div>
</object>

Curiously, it seems to have just... died. No clear cause of death, either. Doing some more digging, it seemed like it paved the way for some of the same authors to develop Proof of Space-Time, which they used for their Chia coin (which I quickly realized was a complete scam after reading the ["whitepaper"](https://www.chia.net/whitepaper/)).

I asked a crypto slack channel at work if anyone had any idea as to why Proof of Space seemed to be so... unpopular. Someone mentioned that if it was supposed to be more "green", then Proof of Stake was simply "greener", since it didn't rely on having to use so many hard drives.

From what I gathered, it seemed to me that there wasn't anything particularly wrong with Proof of Space and it could work better for my needs as a blockchain, given that it evens the playing field for miners, as it allows anyone with access to a hard drive the chance to mine the next block.

So that's what I've decided to go with for now and try to design a blockchain that uses the Proof of Space algorithm for consensus. However, I think rather than rewarding miners with in-game currency (which will be mined in-game), I would reward miners with other in-game incentives, namely discover of new systems, or galaxies, in the in-game universe.

I figure the way this could work is by expanding the known universe with new galaxies every 210,000 blocks or so, in the same fashion that bitcoin block rewards halve. Then reward miners with the credit for discovering wormholes, which enable instantaneous travel between random galaxies. The reward for the miner is that anyone travelling through these gates would pay a fee to the "discoverer". This should hopefully act the same as the transaction fees that are paid to miners typically on a cryptocurrency blockchain like bitcoin.

Next, I'll tackle designing this concept technically, possibly as a prototype in C or some Rust with the help of [this guy](https://youtu.be/malwhCwEosk).

<TagLinks />

<Comments />
