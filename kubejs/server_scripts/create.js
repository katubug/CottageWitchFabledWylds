ServerEvents.recipes(e => {
    e.recipes.create.compacting('meadow:cheese_block', [
      Fluid.of('minecraft:milk', 1000),
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:sheep_cheese_block', [
      'meadow:wooden_sheep_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:amethyst_cheese_block', [
      'meadow:wooden_amethyst_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:buffalo_cheese_block', [
      'meadow:wooden_buffalo_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:goat_cheese_block', [
      'meadow:wooden_goat_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.create.compacting('meadow:warped_cheese_block', [
      'meadow:wooden_warped_milk_bucket',
      'meadow:rennet'
    ]).heated()

    e.recipes.createMilling([
      '4x minecraft:quartz', //output 1
      Item.of('minecraft:quartz').withChance(0.5)  //output 2, with chance
    ], 'minecraft:smooth_quartz')  //input

    e.recipes.createMilling([
      '2x meadow:alpine_salt', //output 1
      Item.of('meadow:alpine_salt').withChance(0.5)  //output 2, with chance
    ], 'meadow:alpine_salt_ore')  //input

    //Eidolon Crucible Recipes
    //Magic Ink
    e.recipes.create.mixing('2x eidolon:magic_ink', [Fluid.water(300), '2x eidolon:silver_nugget', 'minecraft:glass_bottle', '2x #forge:dyes/black', '#forge:dyes/blue', 'minecraft:glow_ink_sac']).heated()

    //Magician's Wax
    e.recipes.create.mixing('4x eidolon:magicians_wax', [Fluid.water(300), 'eidolon:ender_calx', '4x minecraft:redstone', '#forge:dyes/red', '2x #forge:tallow']).heated()

    //Leather
    e.recipes.create.mixing('minecraft:leather', [Fluid.water(300), '2x eidolon:enchanted_ash', 'minecraft:rotten_flesh']).heated()

    //Gunpowder
    e.recipes.create.mixing('4x minecraft:gunpowder', [Fluid.water(300), 'minecraft:bone_meal', 'eidolon:sulfur', 'minecraft:charcoal']).heated()

    //Golden Carrot
    e.recipes.create.mixing('minecraft:golden_carrot', [Fluid.water(300), 'minecraft:carrot', '2x minecraft:gold_nugget', 'eidolon:enchanted_ash']).heated()

    //Golden Apple
    e.recipes.create.mixing('minecraft:golden_apple', [Fluid.water(300), 'minecraft:apple', '2x minecraft:gold_nugget', 'eidolon:enchanted_ash']).heated()

    //Glistering Melon
    e.recipes.create.mixing('minecraft:glistering_melon_slice', [Fluid.water(300), '2x minecraft:gold_nugget', 'eidolon:enchanted_ash', 'minecraft:melon_slice']).heated()

    //Rotten Flesh
    e.recipes.create.mixing('minecraft:rotten_flesh', [Fluid.water(300), '#forge:mushrooms', '#minecraft:foodstuffs/raw']).heated()

    //Arcane Gold Ingots - Broken for some reason?
    e.recipes.create.mixing('2x eidolon:arcane_gold_ingot', [Fluid.water(300), '2x minecraft:redstone', 'eidolon:soul_shard', '2x minecraft:gold_ingot']).heated()

    //Lesser Soul Gem - Broken for some reason?
    e.recipes.create.mixing('eidolon:lesser_soul_gem', [Fluid.water(300), '2x minecraft:redstone', '2x minecraft:lapis_lazuli', 'eidolon:soul_shard', 'minecraft:quartz']).heated()

    //Glowstone Dust
    e.recipes.create.mixing('2x minecraft:glowstone_dust', [Fluid.water(300), '4x minecraft:glow_berries', 'eidolon:sulfur']).heated()

    //Crimson Gem
    e.recipes.create.mixing('eidolon:crimson_gem', [Fluid.water(300), 'minecraft:coal', 'minecraft:ghast_tear', '2x eidolon:crimson_essence', '2x eidolon:soul_shard', 'minecraft:diamond']).heated()

    //Calx of End
    e.recipes.create.mixing('2x eidolon:ender_calx', [Fluid.water(300), '#forge:ender_pearls', 'eidolon:enchanted_ash']).heated()

    //Essence of Death
    e.recipes.create.mixing('eidolon:death_essence', [Fluid.water(300), 'eidolon:zombie_heart', 'minecraft:rotten_flesh', '2x minecraft:bone_meal', 'minecraft:charcoal']).heated()

    //Refined Crimson
    e.recipes.create.mixing('eidolon:crimson_essence', [Fluid.water(300), 'minecraft:weeping_vines', 'minecraft:nether_wart', 'eidolon:sulfur']).heated()

    //Shadow Gem
    e.recipes.create.mixing('eidolon:shadow_gem', [Fluid.water(300), 'minecraft:coal', 'minecraft:ghast_tear',  '2x eidolon:death_essence', '4x eidolon:soul_shard', 'minecraft:diamond']).heated()

    //Sulfur
    e.recipes.create.mixing('2x eidolon:sulfur', [Fluid.water(300), 'minecraft:coal', 'eidolon:enchanted_ash']).heated()

    //Warped Sprouts
    e.recipes.create.mixing('2x eidolon:warped_sprouts', [Fluid.water(300), 'minecraft:warped_fungus', 'eidolon:ender_calx', 'minecraft:nether_wart']).heated()

    //Offering Incense
    e.recipes.create.mixing('2x eidolon:offering_incense', [Fluid.water(300), 'eidolon:merammer_resin', 'eidolon:enchanted_ash', 'eidolon:oanna_bloom']).heated()

    //Elder Brick
    e.recipes.create.mixing('16x eidolon:elder_brick', [Fluid.water(300), '4x minecraft:packed_mud', 'eidolon:enchanted_ash', 'eidolon:soul_shard']).heated()

    //Fungus Sprouts
    e.recipes.create.mixing('2x eidolon:fungus_sprouts', [Fluid.water(300), '#forge:mushrooms', 'minecraft:bone_meal', 'minecraft:wheat_seeds']).heated()
 
    //Parchment
    e.recipes.create.mixing('4x eidolon:parchment', [Fluid.water(300), 'minecraft:leather', '3x minecraft:paper', 'eidolon:enchanted_ash']).heated()

    //Crimson Essence (Crimson Fungus)
    e.recipes.create.mixing('4x eidolon:crimson_essence', [Fluid.water(300), 'minecraft:crimson_fungus', 'minecraft:nether_wart', 'eidolon:sulfur']).heated()

    //Crimson Essence (Crimson Roots)
    e.recipes.create.mixing('2x eidolon:crimson_essence', [Fluid.water(300), 'minecraft:crimson_roots', 'minecraft:nether_wart', 'eidolon:sulfur']).heated()

    //Crimson Essence (Weeping Vines)
    e.recipes.create.mixing('2x eidolon:crimson_essence', [Fluid.water(300), 'minecraft:weeping_vines', 'minecraft:nether_wart', 'eidolon:sulfur']).heated()

    //Death Essence (Withered Heart)
    e.recipes.create.mixing('8x eidolon:death_essence', [Fluid.water(300), 'eidolon:withered_heart', 'minecraft:rotten_flesh', 'minecraft:bone_meal', 'minecraft:charcoal']).heated()

    //Death Essence (Zombie Heart)
    e.recipes.create.mixing('4x eidolon:death_essence', [Fluid.water(300), 'eidolon:zombie_heart', 'minecraft:rotten_flesh', 'minecraft:bone_meal', 'minecraft:charcoal']).heated()

    //Polished Planks
    e.recipes.create.mixing('32x eidolon:polished_planks', [Fluid.water(300), '32x #minecraft:planks', 'eidolon:enchanted_ash', 'eidolon:soul_shard']).heated()
 
  })