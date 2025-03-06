---
sidebar_label: "Loot Bag Config"
title: Loot Bag Config
sidebar_position: 2
---

# Configuration
---

<h2 id="mobdrops"> Mob Drops </h2>

---


Mob names need to be lowercase (That means no capitals at all), There needs to be a `,` after each entry, except the last one and make sure each entry is surrounded by `"` double quotes `"`.

> Tip: Dont know what a registry name is or Not sure what a mobs registry name is?
Check the debug section right below this one

```toml
# Mob drops list (Syntax " minecraft or modname : mob registry name ")
 mobdropslist = ["minecraft:blaze", "minecraft:cave_spider", "minecraft:creeper", "minecraft:elder_guardian", "minecraft:enderman", "minecraft:endermite", "minecraft:evoker"]

```
<br />

---

## Debug
---

At the moment debug only really serves to allow you to see loottable names for mobs.

:::tip having trouble with getting mobs to drop loot bags?
Enabled debugmode and when you kill a entity something like this should appear in the debug.log file. Add the full registry name from the first line to the mob drops config.

```javastacktrace
 [Server thread/DEBUG] [lootbagmod/]: minecraft:slime
 [Server thread/DEBUG] [lootbagmod/]:  18   100
 [Server thread/DEBUG] [lootbagmod/]: Mob wasnt selected from list
```
:::

```toml
#Debug Mode (true or false (default))
 debugmode = false
```
<br />

---

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

 ---

## Taglist
---

Tags need to be lowercase (That means no capitals at all),  There needs to be a `,` after each entry, except the last one and make sure each entry is surrounded by `"` double quotes `"`. For more information about tags please read [This Minecraft Wiki Page](https://minecraft.gamepedia.com/Tag) .

```toml
#TagList (Syntax "minecraft:tagname" or "forge:tagname"; example "minecraft:planks", "forge:planks")
 taglist = ["minecraft:planks", "forge:planks" or "forge:nuggets/iron", "forge:nuggets"]
```
 <br />

 ---

## Mod List
---

Modids need to be lowercase (That means no capitals at all),  There needs to be a `,` after each entry, except the last one and make sure each entry is surrounded by `"` double quotes `"`.

```toml
#Mod blacklist (Syntax " modid ")
 modblacklist = ["tconstruct"]
```
 <br />

 ---
