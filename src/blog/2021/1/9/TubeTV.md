---
title: TubeTV
date: Saturday, January 9, 2021
description: How I turned an old tube TV into another workspace.
author: Christofer Padilla
type: article
tags: ["Computer Science", "Raspberry Pi", "Memories"]
---

# TubeTV

I recently found myself in posession of an old tube TV. [You know what kind I'm talking about.](https://en.wikipedia.org/wiki/Cathode-ray_tube)

<figure>
  <img
  src="/images/boobtube.jpg"
  alt="The boob-tube.">
  <figcaption><a href="https://www.reddit.com/r/retrogaming/comments/9f3lk9/just_scored_a_free_27_inch_crt_shes_a_bit_dusty/">Someone else</a> who scored a similar TV.</figcaption>
</figure>

I couldn't figure out what model it was, since if there was a sticker on the back revealing that information, it had long since peeled off and/or faded away into obscurity. It's a Mitsubishi similar to the one shown above.

I found it lying in front of someone's yard. Coincidentally, I was actually on my way to pick up an entertainment center. I've been picking up a lot of used furniture to furnish my apartment lately. I also recently acquired a [rug](/blog/2021/1/8/The_Eternal_War_Machine.md).

![$20 bucks!](/images/entertainmentcenter.jpg)

I copped that for $20 bucks! What a bargain!

The TV was free, not only as it was just sitting there, but because it had a black garbage bag duck-tapped over it and a piece of paper taped to the front of it that declared *FREE TV! IT WORKS!*

I was feelin' mighty appreciative at this point in my life so I was eternally grateful to be blessed with another TV in my house, as I figured I could use it upstairs or do something fun with it.

Besides, it had that *nostalgia* factor to it that I couldn't resist.

Funny enough, the TV now sits on the entertainment center I picked up.

## The idea of the TubeTV

I figured out right quick what that *something fun* I was going to do with it was!

As I was organizing my apartment, I pulled out of the closet an extra keyboard that I had lying around and placed it on top of the TV. It fit the vibe.

<figure>
  <img
  src="/images/unicompultraclassicmodelmblack.jpg"
  alt="The Unicomp Ultra Classic Model M in black.">
  <figcaption>Praised by computer enthusiasts and frequent typists alike due to their durability and consistency, and the tactile and auditory feedback they provide.</figcaption>
</figure>

That keyboard is an [IBM Model M](https://en.wikipedia.org/wiki/Model_M_keyboard), made famous for it's unique [buckling spring](https://en.wikipedia.org/wiki/Buckling_spring) keys. Or at least the [closest](https://www.pckeyboard.com/) thing to it. There's a [long history](https://www.youtube.com/watch?v=-A-vRZth7SI) to it.

Anyway, I realized with all the blog posts I've been writing, it would be nice to be able to use this keyboard again. Why, I could even hook it up to the ol' TubeTV to complete the nostalgic vibe I had going on!

I threw away my old laptop when I moved, unfortunately, so I didn't have something I could hook up to the TV. I held onto my old laptop for so long because I loved the keyboard on it. (You'll notice a theme here.) It was also my first laptop, so it had extra sentimental value as well.

![The HP Pavilion dv9000](/images/hppaviliondv9000.jpg)

Alas, this could finally be the good excuse I needed to buy a [Raspberry Pi](https://www.raspberrypi.org/)!

Since most of my blog posts are created by writing [markdown files](https://www.markdownguide.org/cheat-sheet/) locally and then commiting them with [git](https://git-scm.com/), I figured I could cobble together a simple writing workstation that would fit my needs. It might even prove to be a more distraction-free environment I could focus with!

## Assembly Instructions

A Raspberry Pi recipe:

    1x Raspberry Pi
    1x Model M keyboard
    1x RCA adapter

Okay, I know that much at least. But I'm not sure what Raspbery Pi unit specifically I should get. Let's review my requirements to find one that fits my needs:

* Wifi connection
* USB port
* Able to connect to an RCA adapter
* Able to plug into a wall outlet
* SD card memory

OK. A quick google search led me to [this](https://www.raspberrypi.org/forums/viewtopic.php?t=165943) article, which tells me what I'm looking for is an [A/V Composite cable](https://thepihut.com/products/av-composite-cable-3-5mm-to-3-x-rca-3m). The new Raspberry Pi models use a [4-pole Audio Jack](https://www.raspberrypi-spy.co.uk/2014/07/raspberry-pi-model-b-3-5mm-audiovideo-jack), which carries both audio and video signals. It’s similar to sockets found on other multimedia devices such as iPods, MP3 players and smartphones.

Perfect. I'll buy one. $9 bucks.

Awesome. Now I know that I can just get the newest [Raspberry Pi 4](https://makerbright.com/raspberry-pi-4-8gb.html) and rest assured it will come compatible with my RCA cable.

Add on a few bells and whistles and BOOM! $120 bucks. I'll swing that.

![Bells and whistles](/images/bling.png)

So for about $130, I can have a cheap PC and a new work environment. Sold.

Between my art project and fun money, it falls within my [budget](https://www.youneedabudget.com/) for this month, too.

That's that! I'll post an update picture when it all arrives and I have it set up.

## 1/20/2021 UPDATE

![It has arrived!](/images/raspberrypi-snap.jpg)

Once it arrived, I realized very quickly that I had neither a micro HDMI cable nor the patience for my RCA cable to arrive to connect my device to a display.

A quick google search and I found an [HDMI to RCA converter](https://www.walmart.com/ip/onn-HDMI-to-Composite-AV-Adapter/438464292) at my local walmart.

A quick trip over there and I ended up finding everything I needed. I walked out with the converter, a [micro HDMI to HDMI](https://www.walmart.com/ip/onn-Mini-and-Micro-HDMI-to-HDMI-Adapter-Black/881189922) cable, and an extra HDMI and RCA cable.

I was stoked.

I rushed home to finish baking my Pi. Once I had it assembled, I realized I overlooked one important detail: I didn't have enough outlets. I already had my TV and record player hooked up to the only outlet on the wall.

I went upstairs and played tetris with my PC cables to try and salvage the only other power strip in the house I could spare. I realized one of the outlets I had previously assumed was broken was in fact powered by a light switch. Great! I plugged in my lamp to it and it freed up an outlet. Rearranging my modem and router on the floor, I was able to plug them into a separate outlet.

Awesome. I now had a free power strip. I ran downstairs and plugged in all the pieces: HDMI to RCA converter plugged into my Pi as a power source, micro HDMI to HDMI adapter cable connected to my Pi, the extra HDMI cable I bought connecting the adapter cable to the converter and finally, the RCA cable to the TV.

BOOM. It worked instantly.

<video width="360" height="640" controls>
  <source src="/videos/vibes.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

I was very pleased with my new set up. I spent the next few hours messing around with the display settings.

The SD card I bought that came with the Raspberry Pi contained the [NOOBS](https://www.raspberrypi.org/downloads/noobs/) software preloaded on it. This booted up the [Raspberry Pi OS](https://www.raspberrypi.org/software/), which seemed to be a flavor of [Debian](https://en.wikipedia.org/wiki/Debian).

I had previously used a Debian system with one of the first linux operating systems I used on my HP Pavilion dv9000: [CrunchBang](https://web.archive.org/web/20140131092254/http://crunchbang.org/). Support for it was eventually dropped by the developer in favor of using vanilla Debian, but it was a personal favorite of mine for a long time.

Good times.

I'll keep the Raspberry Pi OS for now out of convenience, at least try until I switch the [window manager](https://en.wikipedia.org/wiki/Window_manager) to [my version](https://github.com/cpadilla/dwm) of [dwm](https://dwm.suckless.org/).

I'm very happy with my new setup and I think I'll keep the screensaver on during the day for aesthetics.

![Pacman xscreensaver](/images/screensaver.jpg)

<TagLinks />

<Comments />
