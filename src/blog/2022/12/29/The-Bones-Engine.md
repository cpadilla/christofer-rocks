---
title: The Bones Engine
date: 2021-20-29
description: I've decided to build a traditional game engine.
author: Christofer Padilla
image: /images/vulkan.jpg
type: post
tags: ["Space Pirates"]
---

# {{ $page.title }}

<figure>
  <img
  src="/images/solid-tears.jpeg"
  alt="Solid Tears ~">
  <figcaption><a href="https://twitter.com/andrea_chiampo">@andrea_chiampo</a></figcaption>
</figure>

It's been a while since I've provided a [Space Pirates](/tags/#Space-Pirates) update. [Life](/blog/2022/12/20/2022-Summarized.md) got in the way.

I decided to pivot away from a [blockchain](/blog/2022/2/28/UpdatedPlanForSpacePirates.md) based game in favor of a more traditional style of game. One where I have complete creative control and am not confined by the limitations of a blockchain.

In the many times that I've previously attempted to begin creating the Space Pirates game, I've usually made the distinction of separating the engine out from the game. I last did this in [C++ using OpenGL](https://rockzombie2.visualstudio.com/_git/WarpEngine). I even got pretty far with the engine. All this was done while following the [tutorial](https://learnopengl.com/).

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">Learned how to map material data such as the diffuse and specular lighting into separate texture files. As you can see here, the metal part of the container reflects more light than the wood. Neat! :)<a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://twitter.com/hashtag/gamedevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#gamedevelopment</a> <a href="https://t.co/JF02HHuB9e">pic.twitter.com/JF02HHuB9e</a></p>&mdash; Christofer (@rockzombie2) <a href="https://twitter.com/rockzombie2/status/1046643787034955777?ref_src=twsrc%5Etfw">October 1, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I've therefore decided to stay true to my original vision and create a custom game engine using Vulkan instead of OpenGL, since it's the newer API. I've basically been following the same steps as I did last time, where I'm creating the game engine initially by following a [Vulkan tutorial](https://vulkan-tutorial.com/).

![Vulkan](/images/vulkan.jpg)

I've already begun separating out the game engine from the base game. I'm hosting the code under my [CITY PLANNERS](https://github.com/cityplanners) github repository, as that is the studio I want to publish the game under. The base game is [Space Pirates](https://github.com/cityplanners/space-pirates) and it uses the [Bones Engine](https://github.com/cityplanners/bones-engine).

<figure>
    <video width="640" height="360" autoplay loop muted>
      <source src="/videos/cityplanners.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
<figcaption><a href="https://www.instagram.com/skyroor/">@Skyroor</a></figcaption>
</figure>

I decded to change the name from Warp Engine to Bones Engine because I think of bones as the framework that provides locomotion to our systems. Thus, I want a bones framework animating the life behind the pixels that are rendered to the screen. It's a working title and I reserve the right to rename it again at a later date, but I like it so far.

You can follow my game development progress live on [Twitch](https://twitch.tv/rockzombie2)!

<TagLinks />

<Comments />
