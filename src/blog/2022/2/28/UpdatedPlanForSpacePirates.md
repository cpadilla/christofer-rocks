---
title: Updated Plan for Space Pirates
date: 2022-02-28
description: A few points worth mentioning on the development of Space Pirates.
author: Christofer Padilla
image: https://christofer.rocks/images/lightningnetwork.jpeg
type: post
tags: ["SpacePirates", "Blockchain"]
---

# {{ $page.title }}

<figure>
  <img
  src="/images/lightningnetwork.jpeg"
  alt="The Lighting Network">
  <figcaption>You can find other cool visualisations of The Lightning Network <a href="https://gist.github.com/bretton/798ec38165ffabc719d91e0f4f67552d">here</a>.</figcaption>
</figure>

Despite all my research into [designing a blockchain from the ground up](/blog/2021/11/17/Blockchain-Design.md), I have realized that I still wont be able to overcome one of the fundamental problems with starting a new blockchain, and that is incentivizing the miners (or stakers) to produce blocks on your chain. I came to this conclusion partly because of my belief that Bitcoin is the only useful application for a blockchain.

<iframe id="reddit-embed" src="https://www.redditmedia.com/r/changemyview/comments/s17flp/cmv_i_dont_believe_that_blockchain_technology/hs9eeqs/?depth=1&amp;showmore=false&amp;embed=true&amp;showmedia=false" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" height="356" width="640" scrolling="no"></iframe>

With this realization, I had to admit to myself that if I tried starting a blockchain from the ground up, it was most likely doomed to fail because of this incentivization problem. Why spend hard-earned time and resource mining on a blockchain that is inherently inferior to Bitcoin? That is my belief, at least and it turned out to be justified because Bitcoin provides all the same tools I would need from another blockchain already; that is beauty of Bitcoin development: it's ongoing.

## The Lightning Network

One of the common complaints about Bitcoin as compared to other cryptos is that it doesn't scale well, meaning it does not have a very high transactions per second. If you were looking just at the base layer, you'd be right. It's transactions are slower when compared against some other blockchains. However, The Lightning Network fixes this by building on the "Layer 2" network of Bitcoin. You can think of it like email: email is a protocl that rests on top of the main technology of the internet. Just so, The Lightning Network rests on top of Bitcoin as it's own protocol and provides near instantatneous speeds for transactions.

<div class="resp-container">
  <iframe class="resp-iframe" width="640" height="360" src="https://www.youtube.com/embed/rrr_zPmEiME" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Colored Bits

Lastly, I stumlbed upon an article talking about the potential for a technique called [Colored Bits](https://en.bitcoin.it/wiki/Colored_Coins), which essentially lets you use the metadata of a bit to "color" it for a specific purpose.

Between these two technologies on the Bitcoin blockchain, I think it's enough to satisfy most of my requirements for the game. So, moving forward, I'm going to be developing [Space Pirates](/tags/#Space-Pirates) on the Bitcoin blockchain.

<TagLinks />

<Comments />
