---
title: Space Pirates Roadmap
date: 2021-11-07
description: The roadmap for Space Pirates.
author: Christofer Padilla
type: post
tags: ["Space Pirates"]
---

# {{ $page.title }}

Below is an overview of the roadmap I have planned so far for the Space Pirates game.

<Timeline :events="[
{title:'Design the Game',
  subtitle: 'Phase 1',
  summary:'Most of the time spent on this project will be during the initial design phase of the game. Since the game will be deployed as a collection of smart contracts on a blockchain, the rules of the game must be designed precisely and entirely before the game can be prototyped.'},
{title:'Prototyping',
  subtitle: 'Phase 2',
  summary:'During this phase, smart contracts can be deployed to the blockchain and prototyping of the design and iteration testing can begin. Additionally, a white paper will be created defining the game.'},
{title:'Create a Client for the Game',
  subtitle: 'Phase 3',
  summary:'Once a prototype of the game has been completed and the smart contracts have been created, I\'ll create a web-based client to interact with the smart contracts as a player might. The client will be the core game experience of space pirates, at least initially.'},
{title:'Beta Testing',
  subtitle: 'Phase 4',
  summary:'After the smart contracts have been deployed but especially once the client is finished, beta testing can be done to refine values and to ensure there aren\'t any bugs in the client.'},
{title:'Marketing',
  subtitle: 'Phase 5',
  summary:'Pretty self explanitory. During this phase, most of the work for the game should be done so marketing the game to deliver a successful launch of the game will be top priority.'},
{title:'Game Launch',
  subtitle: 'Phase 6',
  summary:'Finally, the game will launch!'},
{title:'Other Game Clients',
  subtitle: 'Phase 7',
  summary:'Once the game is live, other clients can be built on top of the main game on the blockchain to deliver a stylized game experience depending on community preferences. The web-based client will be the official client, but I have plans for a terminal and retro 3D game as well.'}
]"/>

I don't have any specific deadlines for each of these phases, although I did mention it was [one of my goals](/blog/2021/1/1/2021_New_Year's_Resolution.md) to create a working prototype of the game by the end of the year. It is currently November, so I don't think I'll be achieving that goal, but I'm a little lenient on myself for that considering I [acheived](/blog/2021/10/1/Life-Update-Seattle.md) another life-long goal of mine anyway.

I think setting a deadline for myself isn't very necessary 1. becauase I'm under no obligation to anyone to complete this game (especially since I intend for it to be a free game) and 2. I want to take as much time as I need to ensure the quality of this game is exceptional. Imposing a deadline for myself, I feel, would subconsciously affect the time I spend and in turn, the quality of the game.

## Phase 1

As I mentioned, designing the game will take a large amount of time and effort in order to get everything right.

To break it down, lets consider all the aspects of the game that need to be designed in order to completely describe the game.

**Resources**

First, I need to identify all the resourcese that are available in the game. For example, things  like money, raw resources (commodities), refined goods (such as metals) and end products, like weapons and ship systems and modifications.

Once I have those established, it basically defines the "pieces" that will be on the board. From there I can also determine if I want any of those resources to be unique and if I should turn them into NFT's. Things like NPC characters, perhaps are what I'm considering as candidates for non-fungibility. This decision spawns a whole other discussion on the logistics of minting NFT's, but that kind of falls under the next aspect of the game.

**Resource Inflation Curve**

Next, I need to determine how exactly each resource is spawned. Take, for example, an unrefined mineral that is found in asteroids. Perhaps this can be refined into the fuel for spaceships. What happens when a player completely mines out an asteroid? Does the asteroid respawn?

There are a lot of implications to the answer of this scenario that need to be considered since the game is run on the blockchain. If the supply of fuel for ships is bottlenecked by the respawn rate of asteroids, what should the respawn rate be in order to prevent a shortage of such a vital resource and prevent the game from grinding to a halt?

Additionally, if fuel is a necessary component for space travel (and travel to the asteroids containg said mineral) should there be an initial supply of fuel available for purchase at the games genesis? If so, how much should there be?

Alternatively, lets say there is no respawn rate of the mineral required for fuel. All the minerals of that resource that will ever exist in the game do as at the start of the game. Does this mean the game will inevitably cease to function when the well dries up?

These considerations apply to all the resources, including the currency that is used in game. Should new players start with some "cash"? But if they do, how do you prevent this mechanic from being abused? How then is "new" cash mined (or minted)? Is it inflationary or deflationary?

When it comes to the in game currency, I'd like to take my inspiration from [Bitcoin](https://bitcoin.org/bitcoin.pdf), in the sense that it defines the properties of hard money. In terms of the other in game mechanics, I'd like to stay as true to science as possible, namely in that matter cannot be created or destroyed. Essentially, this will spell out a [cold death](https://en.wikipedia.org/wiki/Heat_death_of_the_universe) for the game in the long run, but perhaps I can make it a long time and a worthwhile. For example, all bitcoin will be mined after 120 years, so maybe I can have the game run for a similar amount of [time](/blog/2021/3/14/Time.md). The difference, though, is that bitcoin can continue to operate indefinitely because each bitcoin can be subdivided. That might not be the case with "matter" as it relates to my game.

The point being that these "curves" need to be considered with the intended longevity of the game. Finite or [infinite](/blog/2021/1/8/The_Eternal_War_Machine.md)?

**The Scoreboard at The End of Time**

If the end state of the game is essentially heat-death, what is the point of it? I could smile and say _it's about the journey_, and while I would be right, I'm sure there are a lot of people who would roll their eyes and journey elsewhere.

There has to be an incentive for the player to care about their actions in the game. One of the most gloriously motivating features utilized in games both [old](https://en.wikipedia.org/wiki/Space_Invaders#Legacy) and [new](https://devildaggers.info/Leaderboard) is the High Score Board.

What if at the final state of the game, all that was left would be a high score board, immortalizing all the players who reached the top.

The question then would be, _okay; how do I get points?_

I need to be very careful in how deciding how points are awarded (if I go this route) because depending on the activity the points reward, it will clearly incentivize players to do that activity, for better or worse.

**Crafting Tree**

Once all of the base resources have been identified, I can then start identifying what items refine into, what they can be combined to produce and in turn, the final products that can be achieved through different steps of refinement and combination.

Defining these combinations should create a heirarchical relationship between commodities and the products they produce, aka. a crafting tree.

<figure>
  <img
  src="/images/techtree.png">
  <figcaption>An example of a tech tree from the game EVE Online.</figcaption>
</figure>

**Player Actions**

Essentially every action in the game will be a call and an execution of a smart contract. If you think of the game as a state machine, every call to a smart contract is a potential transition of a state stored on the blockchain. Therefore, I need to clearly define every action that is possible in the game and then create a smart contract for it.

Some examples include carfting, exploration, running planetary governments, combat, etc.

**Player Stats**

Once I've defined what the players can _do_, I can then introduce factors that contribute to the success or failure of those actions via player stats and skills. One of the most widely used core mechanics of any kind of RPG is that of the skill checks with or against player stats, such as the ones used in [Dungeons & Dragons](/pdf/DnD%20Character%20Sheet.pdf).

<figure>
<object data="/pdf/KOTORI_Manual.pdf#page=16" type="application/pdf" width="100%" height="600px">
<div class="warning">
<b>Warning:</b> This browser does not support PDFs. Please download the PDF to view it: <a href="/pdf/Gmail%20-%20spacepirates.net%20Inquiry.pdf">Download PDF</a>.
</div>
</object>
<figcaption>I remember reading through the manual of one of my favorite games on the OG Xbox and realizing how the mechanics of it were almost exactly the same as those used in D&D.</figcaption>
</figure>

Essentially, the player stats (Charisma, Dexterity, Wisdom, etc.) will contribute to contribute to the success or failure of relevant actions taken by the player (or NPC). Once I come up with these core attributes (they're gonna be the same as the ones in D&D) then I can come up with the skills that use these attributes.

From there, I think I'm going to have it so that skills can be leveled up, which implies a skill tree for leveling up in. I want there to be some kind of tradeoff (most likely time devoted, similar to how EVE Online works) between which skills are chosen and the benefits gained from it. There needs to be some kind of opportunity cost for teching into a skill. If I end up making it so the game reaches an end-game state, then I might make it impossible to level every skill before the end of the game occurs.

**States in the State Machine**

Finally, once all of these components of the game have been defined, I can derive the states that will be possible in the game. From here, it should be a simple matter to draft up the smart contracts that will represent those states in the game.


## Phase 2

Phase 2 will involve actually implementing the game. The smart contracts are the most important part of the game, so creating these will present a minimum viable product to test with. From here, this prototype may reveal unkown elements of the game that may influence it's direction, so this is an important part.

I'm also planning on drafting a white paper that describes the game in theory, agnostic from the blockchain it's actually implemented on.

## Phase 3

The third phase will involve creating a browser-client to play the game with. Up until this point, the game will have mostly existed on the blockchain as smart contracts, only being interfaced with directly, most likely from the command line.

The goal of the web-based client will be to have an official client which can be used to demo the game and enable generally access to the underlying game running on the blockchain.

## Phase 4

The purpose of the beta testing phase will be to mostly refine values, fix client bugs and run simulations to see if the game is scaleable into the future. Opening up the game to be beta-tested as well will hopefully reveal any issues present with the game as far as supply and demand is concerned.

## Phase 5

After the beta-testing phase, hopefully the game is ready to market. This means promoting it on social media for the purpose of generating enough interest in the game to populate it with players on release. Depending on how I decide to do NFT's in the game, this could also be an important period during which I can drum up hype for the NFT's (to sell, possibly) in order to hopefully transition that hype into the game itself.

I also have some ideas for creating a Kickstarter or some other form of crowd-funding to raise funds needed to hire (mostly) artists and music for the game. I admit, I've had my sights set on [Colin Stetson](https://www.colinstetson.com/) creating music for this game for a long time. I even have an old playlist to prove it.

<iframe src="https://open.spotify.com/embed/playlist/4yUS7bBsxZy35u47ViumU8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

I'm pretty sure Colin Stetson is not within my budget currently, but maybe by the time I have a finished product ready to market, I could recruit his talent.

During this time, finishing touches and refinements will continue to take place until the game is ready to launch.

## Phase 6

Finally! The game launches. [My lifelong dream](/blog/2021/1/3/The_Origins_of_Space_Pirates.md) of creating the Space Pirates game will be complete!

## Phase 7

Now that the game is completed, I can start working on alternative clients for the game. So far, I have two ideas for alternative clients. One would be a retro 3D game, akin to Star Wars: Dark Forces II.

![Dark Forces II](/images/darkforcesII.jpg)

The other would be a text based game played in the terminal. I recently came across [this](https://twitter.com/jamsus11) guy's twitter who is working on his own game inspired by old school rpgs, and I found his style endearing and very similar to what I would like do for this terminal client.

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">and the title was done, a bit more minima-mystic <a href="https://twitter.com/hashtag/syldhur?src=hash&amp;ref_src=twsrc%5Etfw">#syldhur</a> <a href="https://twitter.com/hashtag/indiegamedev?src=hash&amp;ref_src=twsrc%5Etfw">#indiegamedev</a> <a href="https://twitter.com/hashtag/gamedevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#gamedevelopment</a> <a href="https://twitter.com/hashtag/roguelike?src=hash&amp;ref_src=twsrc%5Etfw">#roguelike</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://twitter.com/hashtag/indiegames?src=hash&amp;ref_src=twsrc%5Etfw">#indiegames</a> <a href="https://twitter.com/hashtag/GameMaker?src=hash&amp;ref_src=twsrc%5Etfw">#GameMaker</a> <a href="https://t.co/73o4XvnMCl">pic.twitter.com/73o4XvnMCl</a></p>&mdash; Andrea Magnelli (@jamsus11) <a href="https://twitter.com/jamsus11/status/1362798632311881729?ref_src=twsrc%5Etfw">February 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

For the terminal client, I think it would look something like this:

![Ascii Sector](/images/AsciiSector.png)

But that's a very long ways away. Right now, I'm actually glad I wrote down all the thoughts that were in my head regarding my plans for this game because now I have a concrete road map to follow, which really helps direct my focus.

<TagLinks />

<Comments />
