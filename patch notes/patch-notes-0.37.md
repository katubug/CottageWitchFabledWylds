# **New Mods**
## xali's Enchanted Books - Fix
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/xalis-enchanted-books-fix)

## Complementary Shaders - Reimagined
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/complementary-reimagined)

## xali's Potions - Addon
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/xalis-potions-addon)

## xali's Potions
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/xalis-potions)

## Enchanting Reimagined
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/enchanting-reimagined)

## xali's Enchanted Books - Addon
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/xalis-enchanted-books-addon)

## xali's Enchanted Books
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/xalis-enchanted-books)


_________________
# **Changed Mods**
## Tide
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/tide)

### Tide 1.3.0-1.20.1 (FORGE)
**[1.3.0 - 9/15/24]**

🐟 Fish entities are FINALLY a thing! All the freshwater and saltwater fish items have entity counterparts. They can be killed to get their fish item and spawn in their respective climates. You can also right-click them with the fishing journal to view their profile easily.

⚙️ New config settings, such as:

*   Hold to cast
*   Minigame difficulty
*   Rod durability

🚀 Compatibility with a bunch of other mods, including:

*   Nether Depths Upgrade
*   Stardew Fishing
*   Rainbow Reef
*   Fishing Real

🎣 And some other stuff

*   Fishing journal now highlights newly unlocked fish (There's a config setting for this too)

## Random Mob Sizes
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/random-mob-sizes)

### randommobsizes-forge-1.20.1-2.2.1.jar
*   fix mobs not dropping any loot when `scale_loot` is turned off
*   change how/when default values are used
*   fix config option `scale_xp` not affecting the dropped xp
*   remove unnecessary synced mob data
*   create additional option for scaling health, attack damage or movement speed

**Full Changelog**: [https://github.com/tristankechlo/RandomMobSizes/compare/1.20.1-2.1.1...1.20.1-2.2.1](https://github.com/tristankechlo/RandomMobSizes/compare/1.20.1-2.1.1...1.20.1-2.2.1)

### randommobsizes-forge-1.20.6-2.2.0.jar
*   fix game crashing when breeding frogs
*   make mod fully server-side only

**Full Changelog**: [https://github.com/tristankechlo/RandomMobSizes/compare/1.20.6-2.1...1.20.6-2.2.0](https://github.com/tristankechlo/RandomMobSizes/compare/1.20.6-2.1...1.20.6-2.2.0)

### randommobsizes-forge-1.20.4-2.1.1.jar
*   fix game crashing when breeding frogs

**Full Changelog**: [https://github.com/tristankechlo/RandomMobSizes/compare/1.20.4-2.1...1.20.4-2.1.1](https://github.com/tristankechlo/RandomMobSizes/compare/1.20.4-2.1...1.20.4-2.1.1)

## [EMF] Entity Model Features [Fabric & Forge]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/entity-model-features)

### Forge - 1.20.1 - 2.2.6
*   fixed model textures prefixed with `./` & `~/` breaking from a recent change
*   expanded the EMF API:
    *   added `int getCurrentEMFVariantOfModel(EntityModel<?>)` returns the current variant of the model or -1 if the model is not a custom EMF model.
    *   added `boolean isModelAnimatedByEMF(EntityModel<?>)` returns true if the model has custom EMF animations.
    *   added `boolean isModelCustomizedByEMF(EntityModel<?>)` returns true if the model is a custom EMF model.
    *   added `boolean isModelPartCustomToEMF(ModelPart)` returns true if this model part is an extraneous part added by EMF, and does not represent any actual normal vanilla parts.
    *   added `boolean isModelPartAnimatedByEMF(ModelPart)` returns true if this model part itself is animated by EMF, e.g `"modePart.rx":"sin(age)"`.
*   fixed some per-entity model override settings from not applying correctly in game, such as modifying render mode per entity type.
*   moved the box face UV height/width are zero warnings to only appear when model creation logging is enabled, as it got far too spammy with the many packs that don't care about this.

### Forge - 1.20.6 - 2.2.5
*   fixed a crash when arrows render stuck inside a player with a custom model that replaced all their vanilla parts
*   fixed arrows stuck inside players not following with the custom animations of the custom player model
*   EMF now removes the `floor UVs` OptiFine parity setting in 1.21 and newer versions, as OptiFine now matches EMF's default behaviour.
*   The warning for a cube having 0 UV width and height has been made more verbose, and will also be dependent on the `floor UVs` setting in earlier versions.

### Forge - 1.20.4 - 2.2.5
*   fixed a crash when arrows render stuck inside a player with a custom model that replaced all their vanilla parts
*   fixed arrows stuck inside players not following with the custom animations of the custom player model
*   EMF now removes the `floor UVs` OptiFine parity setting in 1.21 and newer versions, as OptiFine now matches EMF's default behaviour.
*   The warning for a cube having 0 UV width and height has been made more verbose, and will also be dependent on the `floor UVs` setting in earlier versions.

### Forge - 1.20.2 - 2.2.5
*   fixed a crash when arrows render stuck inside a player with a custom model that replaced all their vanilla parts
*   fixed arrows stuck inside players not following with the custom animations of the custom player model
*   EMF now removes the `floor UVs` OptiFine parity setting in 1.21 and newer versions, as OptiFine now matches EMF's default behaviour.
*   The warning for a cube having 0 UV width and height has been made more verbose, and will also be dependent on the `floor UVs` setting in earlier versions.

## Easy Villagers
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/easy-villagers)

### [FORGE][1.20.1] Easy Villagers 1.20.1-1.1.23
*   Fixed potential crash

## Mighty Mail (Forge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/mighty-mail)

### Mighty Mail 1.0.14
⚠ Important: Breaking update. Changes were made to how mailboxes are saved/loaded. You will most likely need to replace your mailboxes in the world for them to display again in the Post Box.

🐛 Fixed an issue causing mailboxes to not save

## Better Fps - Render Distance[Forge]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/better-fps-render-distance)

### betterfpsdist-1.20.1-6.0.jar
6.0:

*   Fix a bug, causing the scaling to not work fully as intended
*   New Feature: In addition to the previous vertical scaling you now can also do horizontal scaling
*   New Feature: The render distances adjustments now also apply to the range at which entities render(configurable)
*   New Feature: Added debug option, which displays how many chunk sections are currently skipped from rendering


_________________
# **Removed Mods**

## [Let's Do Addon] Apple Wood
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lets-do-addon-apple-wood)


_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)