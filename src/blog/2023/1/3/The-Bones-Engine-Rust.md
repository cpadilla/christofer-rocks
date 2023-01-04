---
title: "The Bones Engine: Rust"
date: 2023-01-03
description: After exploring rust for a bit, I've decided to go all in.
author: Christofer Padilla
image: images/zero-to-production.png
type: post
tags: ["Space Pirates", "Programming"]
---

# {{ $page.title }}

<figure>
  <img
  src="/images/zero-to-production.png"
  alt="Photo credit to From Zero to Production in Rust.">
  <figcaption>The Bones engine running on Rust.</figcaption>
</figure>

I've been using Rust recently. I had a co-worker who always mentioned wanting to learn Rust and I finally had the opportunity to do so with my most recent project of building my [Twitch bot](https://github.com/cpadilla/rockzombot2) in Rust.

Initially, I ran into issues with the borrow checker, simply trying to wrap my head around this [new type of memory management](https://youtu.be/VFIOSWy93H0?t=41). I was also a bit conflicted in using it when I recently rediscovered a [streamer](https://www.twitch.tv/rwxrob) I like who had some [strong opinions](https://www.twitch.tv/rwxrob/about) on using Rust instead of Go.

Despite this, I actually really like the Rust programming language. I appreciate the effort it puts into eliminating certain classes of mistakes you can make with it. I also really like it's crate ecosystem.

## Cross-Platform Compatible

I started mulling over the idea of re-writing what little there currently is of my own [game engine](/blog/2022/12/29/The-Bones-Engine.md) in Rust.

Once I started looking into it a bit more, I realized it would solve some of the issue I'd been having with cross-platform compatibility. For starters, I wouldn't have to deal with CMake anymore, which has been somewhat of a drag on my whole learning curve. I was also having issues linking libraries in C++ on Windows because Windows has to be a special little snowflake and can't adhere to [Unix](https://en.wikipedia.org/wiki/Unix-like) standards (it's a Windows NT based operating system).

These don't seem to be issues with Rust; Rust is cross-platform compatible, so there is no need for a special make system. I believe I can also convert the Bones Engine from it's current form as a library and package it as a crate.

## Vulkan Tutorial

Finally, I found a [tutorial for Vulkan in Rust](https://kylemayes.github.io/vulkanalia/) which is pretty much a copy of the [Vulkan tutorial](https://vulkan-tutorial.com/) I was following in C++.

This means I can pretty much mirror the work that I've done so far in C++ in Rust by following the tutorial.

I think the best way for me to learn a language is through practical application; Writing my game engine in Rust will allow me to learn Vulkan and Rust at the same time out of necessity. There are even some existing game engines in Rust that I can look at to learn from how a game engine might look.

## Community

Because Rust is relatively new (it's been around for 10 years now) it has a smaller dev community supporting it. I've personally come across crates with outdated example code or code that just is straight up bugged. Working through these proved to be a valuable learning experience, however, and made me appreciate how most of the errors I encountered were compiler errors.

Probably the most important reason for why I'm choosing to use Rust for my game engine is because it's fun! I haven't felt excited about learning a slick new language in a long time. It also has a [cute little mascot](https://rustacean.net/)!

All of these reason are why I'll be writing the Bones Engine in Rust going forward.

<TagLinks />

<Comments />
