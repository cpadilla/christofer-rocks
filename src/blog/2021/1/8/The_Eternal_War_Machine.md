---
title: The Eternal War Machine
date: Friday, January 8, 2021
description: Territory struggles as eternal state machines.
author: Christofer Padilla
type: article
tags: ["Reflections", "Memories", "Space Pirates", "Blockchain"]
---

# The Eternal War Machine

![War Machine](/images/warmachine.png)

I left the house during my lunch break today to pick up a rug I had bought from a fellow employee across town. I would stop to pick up some bread on my way home, as well.

I waved to my neighbor pulling in to the apartment complex as I walked to my car. He thanked me for returning his mail to him. He used to live at my apartment before moving next door and I still get his mail sometimes.

I hopped in the car and started the engine. NPR starts playing and I tune in to the story unfolding.

> Frank Hartzel is 93, lives outside Philadelphia. These days, sweaters over collared shirts are kind of his thing. 75 years ago though, he didn't have the luxury of a signature look. It was just combat uniforms...

I set my destination in my GPS and pull out of the complex to begin my drive.

> After the war, Frank went to Drexel and MIT. He worked his entire civilian life as a structural engineer, making sure buildings were safe. He's sharp, still talks with the precision of a engineer.

I like the idea of being a structural engineer. Very similar to being an architect, which is what my sister, Melissa, is going to school for. There's something about the way "the precision of an engineer" rings true to me that makes me appreciate the story being told.

As I continue to listen, it becomes apparent that this story is about war. But not just war.

War crimes.

In December 1944, during World War II, Nazi soldiers battled for control of the Belgian town of Chenogne during the Battle of the Bulge. Afterwards, dozens of unarmed German prisoners of war were executed. The American soldiers had orders to [take no prisoners](https://revealnews.org/episodes/take-no-prisoners/), in direct violation of [the Geneva Conventions](https://en.wikipedia.org/wiki/Geneva_Conventions).


I've been watching more movies lately, playing them in the background for ambience as I work from home. Two of them are movies about war. The first, being my new favorite, *The King*, on Netflix about The Battle of Agincourt in 1415 (also immortalized by Shakespeare in *Henry V*). The second being *1917*, based on fragments of stories from World War 1.

The irony in how war, massive events of death by battle, immortalizes those who fought and died in them is not lost on me.

What's interesting to me isn't so much how history is written by the victors, as it is that remnants of the truth live on despite this. The story I was listening to on NPR was a testiment to that.

For [George S. Patton](https://en.wikipedia.org/wiki/George_S._Patton#Battle_of_the_Bulge), the events described in the Battle of the Bulge are remembered not only as a victory, but as a major achievement for him.

And yet the truth lives on in the soldiers who carried out his orders, in the form of haunting regret. This truth is what is uncovered by the investigative journalist. Although the solider may never be free from the guilt of killing POWs, maybe his burden is alleviated in revealing the truth of what happened.

> The Truth Shall Set You Free.
>
> [John 8:32](https://quotes.yourdictionary.com/articles/who-said-and-the-truth-shall-set-you-free.html)

## War as a State Machine

I've been thinking a lot about war and how it's almost always a territory struggle, really. This is made especially clear in the movie, *The King*.

In the context of [Space Pirates](/tags.md#Space%20Pirates), the game I've been working on, it's really a war simulation if territories were squares in space.

Something else I've been interested in very much has been cryptocurrencies and the underlying [blockchain](/tags.md#Blockchain) technology. I really wanted to combine my two interests into this game.

That's when I realized how I could: the blockchain is essentially an incorruptible, decentralized ledger of the truth. In finance, it's used to keep track of the state of wallets by tracking transactions that modify the wallet balances. This is basically a simple finite-state machine.

We then see how some of the other cryptocurrencies like [EOS](https://eos.io/), [NEO](https://neo.org/) and [Ethereum](https://ethereum.org/en/) build on this concept to facilitate the creation of more complex state machines in the form of [dApps](https://dappradar.com/) (decentralized applications) , even so far as to resemble [virtual computers](https://developers.eos.io/welcome/latest/overview/core_concepts/#system-resources). Indeed, Ethereum can execute [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) scripts and the term [Virtual Machine](https://ethereum.org/en/developers/docs/evm/) is thrown around alot in the crypto space.

Since [Satoshi Nakamoto](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) invented the blockchain datastructure, it's now possible to create a record that can not only exist safely in a decentralized form, but can theoretically exist [forever](https://medium.com/@samuel.brooks/blockchain-the-infinite-state-machine-ffc39f32e182)

These are very seductive features a game built as a dApp can have. As a gamer, I don't have to fear my game or my progress in the game will be erased when the game shuts down and as a game developer, my game will live on forever!

One such game (not built on the blockchain but existing as a simple state machine of rules) is [John Conway's Game of Life](https://www.google.com/search?q=john+conway%27s+game+of+life&oq=John+Conway%27s+Game+of+Life)

> The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.

You can see here the [fun](https://www.youtube.com/watch?v=ZhnU-M21z4s) I had when I first discovered this game. Basically, I discovered that there are many different [stable configurations](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns) within the confines of Conway's simulated biology, which I had fun playing with. Interestingly, configurations which travel across the grid are called [spaceships](https://en.wikipedia.org/wiki/Spaceship_(cellular_automaton)).

<iframe width="640" height="360" src="https://www.youtube.com/embed/jdA_iGOkqxw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

So I decided to build a state machine that simulates the mechanics of the Space Pirates game I want to build. If you are aware, a state machine is a simple concept of a graph of nodes representing states that are linked together by transitions between those states.

<figure>
  <img
  src="/images/statemachine.png"
  alt="A simple state machine diagram.">
  <figcaption>A simple state machine diagram.</figcaption>
</figure>

I realized you can model the states of a state machine as a database diagram. So I found [dbdiagram.io](https://dbdiagram.io/home), which facilitates the easy creation of database diagrams.

Here is the database diagram I came up with for Space Pirates:

<details>
  <summary>
    Space Pirates DB Diagram
  </summary>

    //// -- LEVEL 1
    //// -- Tables and References

    // Characters
    Table Account {
      id int [pk]
      email varchar [unique]
      password varchar
    }

    Table Character {
      id int [pk]
      account_id int [ref: > Account.id, note: 'null if NPC']
      inventory_id int [ref: - Inventory.id]
      title title
      HP int
      armor int
      shields int
      sex sex
      species species
      vitality int
      strength int
      speed int
      intelligence int
      charisma int
      wisdom int
      biography varchar
      crew_id int [ref: - CharacterList.id]
      profession profession [note: 'if NPC']
      location location
      location_id int [note: 'references an id of a relevant location. For example, an outpost, facility or ship id.']
      bookmarks_id int [ref: > Sector_List.id]
      x decimal
      y decimal
      hidden boolean
    }

    Table CharacterList {
      id int
      character_id int [ref: - Character.id]
    }

    Table Quarters {
      id int [pk]
      type location
      character_list_id int [ref: - CharacterList.id]
      capacity int
    }

    Table Species {
      type species_type
      modifier_id int [ref: - Modifier.id]
    }

    Table Modifier {
      id int [pk]
      vitality int
      strength int
      speed int
      intelligence int
      charisma int
      wisdom int
      mass int
      hull int
      module_slots int
      weapon_slots int
      subsystems int
      quarters_capacity int
      fighter_bay_capacity int
      cargo_capacity int
      attack int
      armor int
      shield int
    }

    enum species_type {
      Human     [note: 'Humanoid']
      AI        [note: 'Machine']
      Feline    [note: 'Cat-like']
      Apex      [note: 'Ape-like']
      Salarian  [note: 'Squid-like']
      Menal     [note: 'Psychic humanoids']
      Killix    [note: 'Ant-like']
    }

    enum sex {
      Male
      Female
      Asexual
    }

    enum profession {
      Trader
      Mechanic
      Pirate
      Traveler
      Craftsman
      Gunslinger
      Swordsman
    }

    enum title {
      Emperor
      Grand_Inquisitor
      Imperator
      Trooper
      President
      Senator
      Marshal
      Ranger
      High_Lord
      Lord
      Paladin
      Consul
      Member
    }

    Table Bounty {
      id int [pk]
      character_id int [ref: > Character.id]
      amount decimal
      dead_or_alive dead_or_alive
    }

    enum dead_or_alive {
      Dead
      Alive
      Dead_Or_Alive
    }


    // Items
    Table Inventory {
      id int [pk]
      character_id int [ref: - Character.id]
      list_id int [ref: < ItemList.id]
      capacity int
    }

    Table Cargo {
      id int [pk]
      list_id int [ref: < ItemList.id]
      capacity int
    }

    Table ItemList {
      id int
      item_id int [ref: - Item.id]
      quantity int
    }

    Table Item {
      id int [pk]
      character_id int [ref: > Character.id]
      name varchar
      color varchar
      description varchar
      type item_type
      rarity rarity
      mass int
      integrity int
      modifier_id int [ref: - Modifier.id]
    }

    Table Starship {
      id int [pk]
      character_id int [ref: - Character.id]
      ship_type ship_type
      name varchar
      color varchar
      description varchar
      schematic_id int [ref: > Schematic.id]
      cargo_id int [ref: - Cargo.id]
      module_list int [ref: - ItemList.id]
      module_slots int
      weapon_slots int
      subsystems int
      quarters_id int [ref: - Quarters.id]
      mass int
      speed int
      hull int
      fighter_bay int
      fighters_id int [ref: - ItemList.id]
    }

    enum ship_type {
      Battle_Carrier
      Battleship
      Blockade_Runner
      Capital_Ship
      Command_Ship
      Corsair
      Corvette
      Cruiser
      Destroyer
      Dreadnaught
      Freighter
      Frigate
      Grand_Liner
      Gunship
      Heavy_Cruiser
      Heavy_Freighter
      Heavy_Miner
      Light_Miner
    }

    // Recipes for parts, ships, weapons, gear, tools
    Table Schematic {
      id int [pk]
      list_id int [ref: - ItemList.id]
    }

    enum rarity {
      Fake        [note: 'grey']
      Common      [note: 'white']
      Uncommon    [note: 'green']
      Superior    [note: 'blue']
      Rare        [note: 'red']
      Mythic      [note: 'purple']
      Legendary   [note: 'gold']
      Primordial  [note: 'RGB']
    }

    enum item_type {
      Schematic
      Ore
      Spice
      Commodity
      Luxury
      Alloy
      Part
      Ship
      Weapon
      Gear
      Tool
      Document
      Slave
      Art
    }

    // Universe
    // coordinates:  [note: 'universe coordinate and 6 decimals, 2 for each galaxy, quadrant, sector coordinate. ie: 010203']
    // Start off with 40 galaxies
    Table UniverseMap {
      id int [pk]
      galaxy_id int [ref: > Galaxy.id, note: 'Can contain 400 [20x20] quadrants, some of which can contain star systems']
      quadrant_id int [ref: > Quadrant.id, note: 'Can contain 400 [20x20] sectors, some of which contain celestial objects']
      sector_id int [ref: - Sector.id, note: 'Can contain asteroids, planets, stars or outposts']
    }

    Table Galaxy {
      id int [pk]
      name varchar
      description varchar
      x int
      y int
    }

    Table Quadrant {
      id int [pk]
      x decimal
      y decimal
    }

    Table Sector {
      id int [pk]
      quarters_id int [ref: - Quarters.id]
      x decimal
      y decimal
    }

    // Celestial objects
    Table Planet {
      id int [pk]
      name varchar
      type planet_type
      size int [note: 'scale of 1-100']
      description varchar
      government government
      bank_id int [ref: - Bank.id]
      market_id int [ref: > Market.id]
      black_market_id int [ref: > Market.id]
      leader int [ref: - Character.id]
      quarters_id int [ref: - Quarters.id]
      bar_quarters int [ref: - Quarters.id]
      hangar_quarters int [ref: - Quarters.id]
      hangar_cargo int [ref: - Cargo.id]
      trading_post_quarters int [ref: - Quarters.id]
      bank_quarters int [ref: - Quarters.id]
      junkyard_quarters int [ref: - Quarters.id]
      black_market_quarters int [ref: - Quarters.id]
      guards int [ref: - CharacterList.id]
      x decimal
      y decimal
    }

    Table Asteroid {
      id int [pk]
      cargo_id int [ref: - Cargo.id]
      x int
      y int
    }

    enum planet_type {
      Barren
      Frozen
      Cold
      Temperate
      Warm
      Hot
      Burning
      Arctic
      Snow
      Tundra
      Boreal
      Steppes
      Monsoon
      Forest
      Terran
      Ocean
      Atoll
      Savannah
      Mediterranean
      Jungle
      Desert
      Arid
      Ash
      Lava
    }

    // Government
    Table Government {
      id int [pk]
      type government
      planet_id int [ref: - Planet.id]
      leader int [ref: - Character.id]
      tax_rate decimal
      bank_id int [ref: - Bank.id]
      territory_id int [ref: - Territory.id]
      description varchar
    }

    Table Territory {
      id int
      sector_list_id int
    }

    Table Sector_List {
      id int
      sector_id int [ref: > Sector.id]
    }

    enum government {
      Empire
      Republic
      Council
      No_Government
    }

    Table Comms {
      id int [pk]
      planet_id int [ref: > Planet.id]
      reply int [ref: > Comms.id]
      author int [ref: > Character.id]
      message varchar
      posted timestamp
    }

    Table MostWanted {
      id int [pk]
      planet_id int [ref: > Planet.id]
      bounty_id int [ref: > Bounty.id]
    }

    // Market
    Table MarketOrder {
      id int [pk]
      type order_type
      item_id int [ref: - Item.id]
      item_type item_type
      rarity rarity
      quantity int
      price decimal
      expires int
      time timestamp
    }

    Table Orders {
      id int [pk]
      market_id int [ref: > Market.id]
      order_id int [ref: > MarketOrder.id]
    }

    Table Market {
      id int [pk]
      illegal boolean [note: 'determines if this is a black market, allowing illegal goods']
      orders_id int [ref: < Orders.id]
    }

    enum order_type {
      Buy
      Sell
    }

    Table Bank {
      id int [pk]
      character_id int [ref: < Character.id]
      funds decimal
    }

    // Outposts
    enum outpost_type {
      Refinery      [note: 'refines ore']
      Manufactory   [note: 'production of new items']
      Shipyard      [note: 'ship purchases and upgrades']
      Space_Station [note: 'repairs and refuel']
      Space_Dock    [note: 'docking to protect ship']
      Starbase      [note: 'cargo storage and trading']
    }

    enum location {
      Bar
      Hangar
      Trading_Post
      Bank
      Junkyard
      Black_Market
      Refinery
      Manufactory
      Planet
      Shipyard
      Space_Station
      Space_Dock
      Starbase
      Ship
      Space
      Home
    }

    Table Outposts {
      id int [pk]
      sector_id int [ref: - Sector.id]
      outpost_type outpost_type
      market_id int [ref: - Market.id]
      // similar to ships
      schematic_id int [ref: > Schematic.id]
      cargo_id int [ref: - Cargo.id]
      module_list int [ref: - ItemList.id]
      guards int [ref: - CharacterList.id]
      module_slots int
      weapon_slots int
      subsystems int
      quarters_id int [ref: - Quarters.id]
      mass int
      speed int
      hull int
      fighter_bay int
      fighters_id int [ref: - ItemList.id]
      x decimal
      y decimal
    }

    // Organizations
    Table Organization {
      id int [pk]
      secret boolean
      alliance_id int [ref: - Alliance.id]
      character_list_id int [ref: - CharacterList.id]
      applications_id int [ref: - CharacterList.id]
      invitations_id int [ref: - CharacterList.id]
      leader int [ref: - Character.id]
      territory_id int [ref: - Territory.id]
      founded datetime
      dues decimal
    }

    Table Organization_List {
      id int
      organization_id int [ref: > Organization.id]
    }

    Table Alliance_List {
      id int
      alliance_id int [ref: > Alliance.id]
    }

    Table Coalition {
      id int [pk]
      name varchar
      description varchar
      founded datetime
      disbanded datetime
      members_id int [ref: - Alliance_List.id]
      applications_id int [ref: - Alliance_List.id]
      invitations_id int [ref: - Alliance_List.id]
    }

    Table Alliance {
      id int [pk]
      colition_id int [ref: - Coalition.id]
      name varchar
      description varchar
      founded datetime
      disbanded datetime
      members_id int [ref: - Organization_List.id]
      applications_id int [ref: - Organization_List.id]
      invitations_id int [ref: - Organization_List.id]
    }

    Table Coalition_War {
      id int [pk]
      name varchar
      description varchar
      declared_by int [ref: > Coalition.id]
      against int [ref: > Coalition.id]
      start datetime
      end datetime
    }

    Table Alliance_War {
      id int [pk]
      name varchar
      description varchar
      declared_by int [ref: > Alliance.id]
      against int [ref: > Alliance.id]
      start datetime
      end datetime
    }

    Table Organization_War {
      id int [pk]
      name varchar
      description varchar
      declared_by int [ref: > Organization.id]
      against int [ref: > Organization.id]
      start datetime
      end datetime
    }

    Table Ranks {
      id int [pk]
      organization_id int [ref: > Organization.id]
      level int
      name varchar
      description varchar
    }

    Table Attacks {
      id int [pk]
      attacker int [ref: > Character.id]
      type attack_type
      time datetime
      target_id int [note: 'Id of the target, depending on attack type']
      hp_damage int
      hull_damage int
      armor_damage int
      shield_damage int
    }

    enum attack_type {
      Character   [note: 'character v character combat']
      Ship        [note: 'ship v ship combat']
      Plunder     [note: 'this is attacking a planet with no government']
      Blockade    [note: 'this is "atatcking" a planet with a government. Stops trade, puts you on wanted list. Blockade is in effect so long as the chracter remains orbiting planet']
      Board       [note: 'boarding a ship pits crew vs crew. If Board is successful, crew gains control of ship']
      Infiltrate  [note: 'this is attacking a government. Has chance to steal rare documents']
      Outpost     [note: 'attack a structure. Damages shields, armor, and hull.']
      Counter     [note: 'counter-attack. Happens automatically when Characters, Ships, or outposts/planets with defense systems installed or ships guarding it are attacked']
    }

    Ref: "Territory"."sector_list_id" < "Sector_List"."id"

























</details>

Which looks something like this:

![Space Pirates DB Diagram](/images/Space%20Pirates%20DB%20Diagram.png)

Now, we can start to see how this diagram resembles a state machine. The relations between each table can correspond to an action a player can make that would change the state of game.

I'm pretty proud of this diagram so far. The next step is to determine which blockchain I should use to build my dApp on. So far I'm leaning towards EOSIO, but I haven't ruled out [making my own blockchain](https://www.youtube.com/watch?v=malwhCwEosk) yet either.

<TagLinks />

<Comments />
