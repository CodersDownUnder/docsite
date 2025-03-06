---
sidebar_label: "Loot Bag Config"
title: Loot Bag Config New
sidebar_position: 2
---

# Configuration
---


## Misc Configs
---

### <u>Stack Size </u>

When items are dropped the stack size is determined by a random number between the max stack size and 0.

```toml
  #Maximum possible stack size for dropped items
  #Range: 1 ~ 64
  stacksize = 15
```

### <u>Drop Amount </u>

How many items are dropped when a loot bag is used.

```toml
  #How many items drop when a loot bag is used
  #Range: 1 ~ 1000
  dropamount = 10
```

### <u>Items in inventory </u>

Lootbags will now try to place items into your inventory before placing them on the ground unless itemsininventory is set to false.

```toml
  #Try to place items into inventory before dropping them onto the ground
  itemsininventory = true
```

## Mob Drop Configs
---

### <u>Mob Drops List</u>

Mob names need to be lowercase (That means no capitals at all), There needs to be a `,` after each entry, except the last one and make sure each entry is surrounded by `"` double quotes `"`.

:::info
Tip: unsure of how to find what a mobs registry name is? [Check the debug section right below this one. or click on this text](#entity-name)
:::

```toml
  # Mob drops list (Syntax " minecraft or modname : mob registry name ")
  mobdropslist = ["minecraft:blaze", "minecraft:cave_spider", "minecraft:creeper", "minecraft:elder_guardian", "minecraft:enderman", "minecraft:endermite", "minecraft:evoker"]

```

### <u>Mobs Drop Chance</u>

```toml
  #Loot Bag drop chance from mobs (the higher the number the more common they are)
  #Range: 1 ~ 100
  dropchance = 10
```

## Debug configs
---

### <u>Entity Name</u>

When this option is set to true whenever a mob is killed it will print its registry name to the chat and the latest.log file as well.

```toml
  #Print mobs registry name to chat and log file when killed
  entityname = false
```

### <u>Items Dropped</u>

When this option is set to true when you use a loot bag everything that is being dropped while be printed to the latest.log file.

```toml
  #Print list of items dropped to debug.log
  itemsdropped = false
```

### <u>Items Dropped Chat</u>

When this option is set to true when you use a loot bag everything that is being dropped while be printed to the chat.

```toml
  #Print list of items dropped to the chat
  itemsdroppedchat = false
```

## Blacklist And Whitelist
---

Item and Block names need to be lowercase (That means no capitals at all),
There needs to be a `,` after each entry, except the last one and make sure each entry is surrounded by `"` double quotes `"`.

```toml
#BlackList (Syntax "minecraft or modid : item or block name"; example "minecraft:air" or "lootbagmod:lootbag")
 blacklist = ["minecraft:air", "minecraft:command_block", "minecraft:structure_block", "minecraft:knowledge_book", "minecraft:chain_command_block", "minecraft:repeating_command_block", "minecraft:barrier", "minecraft:enchanted_book", "minecraft:written_book", "minecraft:potion", "minecraft:splash_potion", "minecraft:lingering_potion", "minecraft:spawn_egg", "minecraft:structure_void", "minecraft:mob_spawner", "minecraft:bedrock"]
```

```toml
#WhiteList Syntax "minecraft or modid : item or block name"; example " minecraft:air " or  "lootbagmod:lootbag ")
 whitelist = ["minecraft:stone"]
```

 <br />

### <u>Enable Whitelist</u>

```toml
  #Use the whitelist
  enablewhitelist = false
```

## Taglist
---

Tags need to be lowercase (That means no capitals at all),  There needs to be a `,` after each entry, except the last one and make sure each entry is surrounded by `"` double quotes `"`. For more information about tags please read [This Minecraft Wiki Page](https://minecraft.gamepedia.com/Tag) .

```toml
#TagList (Syntax "minecraft:tagname" or "forge:tagname"; example "minecraft:planks", "forge:planks")
 taglist = ["minecraft:planks", "forge:planks" or "forge:nuggets/iron", "forge:nuggets"]
```
 <br />


## Mod List
---

Modids need to be lowercase (That means no capitals at all),  There needs to be a `,` after each entry, except the last one and make sure each entry is surrounded by `"` double quotes `"`.

```toml
#Mod blacklist (Syntax " modid ")
 modblacklist = ["tconstruct"]
```
 <br />
