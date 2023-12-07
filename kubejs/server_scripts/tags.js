ServerEvents.tags('item', event => {

    // Dirt for Compost Recipe
    event.add('forge:dirt', 'minecraft:dirt', 'minecraft:coarse_dirt',
    'minecraft:rooted_dirt','minecraft:podzol')

    // Organic materials for Compost Recipe
    event.add('forge:compost',
    'hexerei:mugwort_flowers',
    'hexerei:mugwort_leaves',
    'hexerei:yellow_dock_flowers',
    'hexerei:yellow_dock_leaves',
    'hexerei:belladonna_flowers',
    'hexerei:belladonna_berries',
    'hexerei:mandrake_root',
    'hexerei:mandrake_flowers',
    'hexerei:dried_sage',
    'hexerei:dried_belladonna_flowers',
    'hexerei:dried_mandrake_flowers',
    'hexerei:dried_mugwort_flowers',
    'hexerei:dried_mugwort_leaves',
    'hexerei:dried_yellow_dock_flowers',
    'hexerei:dried_yellow_dock_leaves',
    'farmersdelight:tree_bark',
    'minecraft:rotten_flesh')

    // Rope Tags
    event.add('supplementaries:ropes', 'farmersdelight:rope')

    // Eyes tags
    event.add('forge:eyes', 
    'endrem:evil_eye',
    'endrem:cursed_eye',
    'endrem:rogue_eye',
    'endrem:old_eye',
    'endrem:nether_eye',
    'endrem:lost_eye',
    'endrem:corrupted_eye',
    'endrem:cold_eye',
    'endrem:black_eye',
    'endrem:guardian_eye',
    'endrem:magical_eye',
    'endrem:wither_eye',
    'endrem:witch_eye',
    'endrem:undead_eye',
    'endrem:exotic_eye'
    )

    // Seeds Tags
    event.add('forge:seeds',
    'farmersrespite:tea_seeds',
    'culturaldelights:eggplant_seeds',
    'culturaldelights:corn_kernels',
    'culturaldelights:cucumber_seeds'
    )

    // Waystone Tags
    event.add('forge:waystones',
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone'
    )

    // Wrench Tags
    event.add('forge:wrenches', 'supplementaries:wrench')

    // Azalea Logs Tags
    event.add('forge:azalea_logs',
    'ecologics:flowering_azalea_log',
    'ecologics:azalea_log'
    )

    // Azalea Wood Tags
    event.add('forge:azalea_wood',
    'ecologics:flowering_azalea_wood',
    'ecologics:azalea_wood'
    )

    // Azalea Planks Tags
    event.add('forge:azalea_planks',
    'ecologics:flowering_azalea_planks',
    'ecologics:azalea_planks'
    )

    // Corn Dough Tags
    event.add('minecraft:dough',
    'culturaldelights:corn_dough'
    )
    event.add('forge:dough',
    'culturaldelights:corn_dough'
    )

    // Grape Tagging
    event.add('forge:grapes',
    'vinery:red_grape',
    'vinery:white_grape',
    'vinery:savanna_grapes_red',
    'vinery:savanna_grapes_white',
    'vinery:taiga_grapes_red',
    'vinery:taiga_grapes_white',
    'vinery:jungle_grapes_red',
    'vinery:jungle_grapes_white'
    )
    event.add('forge:fruits',
    'vinery:red_grape',
    'vinery:white_grape',
    'vinery:savanna_grapes_red',
    'vinery:savanna_grapes_white',
    'vinery:taiga_grapes_red',
    'vinery:taiga_grapes_white',
    'vinery:jungle_grapes_red',
    'vinery:jungle_grapes_white'
    )
    event.add('forge:grape_seeds',
    'vinery:red_grape_seeds', 
    'vinery:white_grape_seeds', 
    'vinery:savanna_grape_seeds_red', 
    'vinery:savanna_grape_seeds_white', 
    'vinery:taiga_grape_seeds_red', 
    'vinery:taiga_grape_seeds_white', 
    'vinery:jungle_grape_seeds_red', 
    'vinery:jungle_grape_seeds_white')

    // Jam Tagging
    event.add(
        'forge:jam',
        'upgrade_aquatic:mulberry_jam_bottle'
    )
    event.add(
        'forge:jams',
        'upgrade_aquatic:mulberry_jam_bottle'
    )
    event.add(
        'forge:jelly',
        'upgrade_aquatic:mulberry_jam_bottle'
    )
    event.add(
        'forge:jellies',
        'upgrade_aquatic:mulberry_jam_bottle'
    )

    // Bowl Tagging
    event.add('forge:bowls',
    'minecraft:bowl',
    'ecologics:coconut_husk'
    )

    // Mushroom Tagging
    event.add('forge:mushrooms',
    'biomemakeover:green_glowshroom',
    'biomemakeover:orange_glowshroom',
    'biomemakeover:wild_mushrooms',
    'biomemakeover:tall_brown_mushroom',
    'biomemakeover:tall_red_mushroom'
    )

    //Vegetables
    event.add('forge:vegetables',
        'culturaldelights:cut_cucumber',
        'culturaldelights:cucumber',
        'culturaldelights:cut_avocado',
        'culturaldelights:avocado',
        'culturaldelights:eggplant',
        'culturaldelights:cut_eggplant',
        'culturaldelights:white_eggplant',
        'culturaldelights:corn_cob',
        'delightful:cactus_flesh',
        'farmersdelight:pumpkin_slice'
    )

    //Fruits
    event.add('forge:fruits',
        'ars_nouveau:frostaya_pod',
        'ecologics:coconut_slice',
        'ends_delight:chorus_succulent',
        'ends_delight:chorus_fruit_grain',
        'ends_delight:ender_pearl_grain',
        'ars_nouveau:mendosteen_pod',
        'ars_nouveau:bastion_pod',
        'ars_nouveau:bombegranate_pod'
    )

    //Seafood
    event.add('forge:seafood',
        'quark:crab_leg',
        'quark:cooked_crab_leg',
        'ecologics:crab_meat',
        'culturaldelights:squid',
        'culturaldelights:raw_calamari',
        'culturaldelights:glow_squid',
        'ends_delight:shulker_meat_slice',
        'ends_delight:shulker_meat'
    )

    //Meats
    event.add('forge:meats',
        'farmersdelight:bacon',
        'farmersdelight:mutton_chops',
        'farmersdelight:minced_beef',
        'nethersdelight:hoglin_loin',
        'farmersdelight:ham',
        'nethersdelight:ground_strider',
        'ends_delight:raw_dragon_meat_cuts',
        'ends_delight:raw_dragon_meat',
        'ends_delight:raw_ender_mite_meat',
        'ends_delight:dragon_leg',
        'nethersdelight:strider_slice'
    )

    //Tomato Sauce
    event.add('forge:pizza_sauce',
    'candlelight:tomato_soup',
    'farmersdelight:tomato_sauce'
    )

    // Nourishment Tags
    //Fruits
    event.add('nourish:fruit',
        'vinery:red_grape',
        'neapolitan:banana_bunch',
        'vinery:apple_mash',
        'vinery:savanna_grapes_red',
        'vinery:savanna_grapes_white',
        'vinery:taiga_grapes_red',
        'vinery:taiga_grapes_white',
        'vinery:jungle_grapes_red',
        'vinery:jungle_grapes_white',
        'overweight_farming:melon_juice',
        'vinery:white_grape',
        'collectorsreap:pomegranate',
        //'bakery:strawberry'
    )

    //Proteins
    event.add('nourish:protein',
    'netherdepthsupgrade:lava_pufferfish_slice',
    'netherdepthsupgrade:soulsucker',
    'netherdepthsupgrade:glowdine',
    'netherdepthsupgrade:searing_cod',
    'netherdepthsupgrade:obsidianfish',
    'netherdepthsupgrade:lava_pufferfish',
    'neapolitan:adzuki_beans',
    'minecraft:egg',
    'finsandtails:pea_wee',
    'finsandtails:banded_redback_shrimp',
    'finsandtails:teal_arrowfish',
    'finsandtails:ruby_spindly_gem_crab',
    'finsandtails:amber_spindly_gem_crab',
    'finsandtails:emerald_spindly_gem_crab',
    'finsandtails:vibra_wee',
    'finsandtails:wee_wee',
    'finsandtails:ornate_bugfish',
    'finsandtails:blu_wee',
    'finsandtails:red_bull_crab_claw',
    'finsandtails:white_bull_crab_claw',
    'finsandtails:night_light_squid_tentacle',
    'finsandtails:bugmeat',
    'finsandtails:raw_golden_river_ray_wing',
    'infernalexp:blindsight_tongue',
    'finsandtails:papa_wee',
    'finsandtails:pearl_spindly_gem_crab',
    'netherdepthsupgrade:soulsucker_slice',
    'netherdepthsupgrade:magmacubefish',
    'netherdepthsupgrade:blazefish',
    'netherdepthsupgrade:magmacubefish_slice',
    'netherdepthsupgrade:blazefish_slice',
    'netherdepthsupgrade:glowdine_slice',
    'finsandtails:sapphire_spindly_gem_crab',
    'netherdepthsupgrade:searing_cod_slice',
    'netherdepthsupgrade:obsidianfish_slice',
    'ends_delight:raw_dragon_meat_cuts',
    'ends_delight:raw_dragon_meat',
    'biomemakeover:raw_crab',
    'ends_delight:dragon_leg',
    'ends_delight:shulker_meat_slice',
    'ends_delight:shulker_meat',
    'culturaldelights:raw_calamari',
    'culturaldelights:glow_squid',
    'ends_delight:raw_ender_mite_meat',
    'environmental:truffle',
    'environmental:duck_egg',
    'farmersdelight:milk_bottle',
    'finsandtails:swamp_mucker',
    'finsandtails:flatback_sucker',
    'finsandtails:high_finned_blue',
    'culturaldelights:squid'
    )

    //Carbs
    event.add('nourish:carbohydrate',
    'ends_delight:ender_pearl_grain',
    'farmersdelight:rice',
    'create:dough',
    'create:wheat_flour'
    )

    //Vegetables
    event.add('nourish:vegetable',
    'twilightforest:mushgloom',
    'neapolitan:mint_leaves',
    'farmersdelight:tomato_sauce',
    'collectorsreap:baked_portobello_cap',
    'collectorsreap:portobello',
    'biomemakeover:bulbus_root'
    )

    // Golden Things for Tarot
    event.add('tarotcards:golden',
    'nethersdelight:golden_machete',
    'farmersdelight:golden_knife',
    'twilightforest:gold_minotaur_axe'
    )

    // Blackstone Furnaces
    event.add('forge:blackstone_furnaces',
    'nethersdelight:blackstone_furnace', 
    'quark:blackstone_furnace'
    )

    // Tagging Vinery Cherries
    let vch = 'vinery:cherry'

    event.add('forge:fruits/berries',
    vch)
    event.add('forge:fruits/cherry',
    vch)
    event.add('environmental:deer_food',
    vch)
    event.add('environmental:deer_tempt_items',
    vch)
    event.add('forge:fruits/sweet',
    vch)

    // Jelly Torches
    event.add('forge:jelly_torches',
    'upgrade_aquatic:green_jelly_torch',
    'upgrade_aquatic:blue_jelly_torch',
    'upgrade_aquatic:purple_jelly_torch',
    'upgrade_aquatic:yellow_jelly_torch',
    'upgrade_aquatic:red_jelly_torch',
    'upgrade_aquatic:orange_jelly_torch',
    'upgrade_aquatic:pink_jelly_torch',
    'upgrade_aquatic:white_jelly_torch'
    )

    // Meadow Milk
    event.add('meadow:milk_bucket',
    'meadow:wooden_milk_bucket',
    'meadow:wooden_sheep_milk_bucket',
    'meadow:wooden_buffalo_milk_bucket',
    'meadow:wooden_goat_milk_bucket',
    'meadow:wooden_warped_milk_bucket',
    'meadow:wooden_amethyst_milk_bucket',
    'meadow:wooden_grain_milk_bucket'
    )

    // Meadow Wool
    event.add('minecraft:wool',
    'meadow:warped_wool')

    // Seats
    event.add('forge:seats',
    'fantasyfurniture:necrolord/cushion',
    'fantasyfurniture:royal/cushion',
    'fantasyfurniture:venthyr/cushion',
    'fantasyfurniture:dunmer/cushion',
    'fantasyfurniture:nordic/cushion',
    'fantasyfurniture:decorations/royal_floor_cushion'
    )

    // Limes
    event.add('forge:fruits/lime',
    'collectorsreap:lime_slice')
    event.add('forge:fruits/citrus',
    'collectorsreap:lime_slice')

    // Reinforced Deepslate
    event.add('forge:relocation_not_supported',
    'minecraft:reinforced_deepslate'
    )

    //===Banning Uncraftables===
    event.add('twilightforest:banned_uncraftables', 'plushies:dragon', '#forge:eyes', 'ends_delight:non_hatchable_dragon_egg', 'culturaldelights:avocado_pit')
    event.add('twilightforest:banned_uncrafting_ingredients', '#forge:eyes')

    //===Tags for FTB Quests===

    // Brooms
    event.add('forge:brooms', 'hexerei:mahogany_broom', 'hexerei:witch_hazel_broom', 'hexerei:willow_broom', 'ars_scalaes:archwood_broom')

    //Tom's Storage Tags
    //event.add('forge:invcable', 'toms_storage:ts.inventory_cable','toms_storage:ts.inventory_cable_framed')

    event.add('forge:connector', 
    //'toms_storage:ts.inventory_cable_connector_filtered',
    //'toms_storage:ts.inventory_cable_connector',
    //'toms_storage:ts.inventory_cable_connector_framed',
    'sophisticatedstorage:storage_link',
    //'toms_storage:ts.trim'
    )

    // Inventory Managers
    event.add('forge:inventory_controllers',
    'sophisticatedstorage:controller',
    //'ars_nouveau:storage_lectern'
    //'toms_storage:ts.inventory_connector'
    )

    // Ars Storage
    event.add('forge:filter_scrolls',
    'ars_nouveau:allow_scroll',
    'ars_nouveau:deny_scroll',
    'ars_nouveau:mimic_scroll'
    )

    //Pet Beds
    event.add('forge:petbeds',
    'domesticationinnovation:pet_bed_white',
    'domesticationinnovation:pet_bed_orange',
    'domesticationinnovation:pet_bed_magenta',
    'domesticationinnovation:pet_bed_light_blue',
    'domesticationinnovation:pet_bed_yellow',
    'domesticationinnovation:pet_bed_green',
    'domesticationinnovation:pet_bed_brown',
    'domesticationinnovation:pet_bed_blue',
    'domesticationinnovation:pet_bed_purple',
    'domesticationinnovation:pet_bed_cyan',
    'domesticationinnovation:pet_bed_light_gray',
    'domesticationinnovation:pet_bed_gray',
    'domesticationinnovation:pet_bed_pink',
    'domesticationinnovation:pet_bed_lime',
    'domesticationinnovation:pet_bed_red',
    'domesticationinnovation:pet_bed_black'
    )

    //Mushroom Colony
    event.add('forge:mushcolony',
    'farmersdelight:red_mushroom_colony', 
    'farmersdelight:brown_mushroom_colony',
    'twilightdelight:mushgloom_colony',
    'collectorsreap:portobello_colony')

    //Fungus Colony
    event.add('forge:funguscolony',
    'nethersdelight:crimson_fungus_colony', 
    'nethersdelight:warped_fungus_colony')

    //Overweight Crops
    event.add('forge:overweightcrops',
    'overweight_farming:overweight_cabbage_block',
    'overweight_farming:overweight_onion_block',
    'overweight_farming:overweight_apple_block',
    'overweight_farming:overweight_poisonous_potato_block',
    'overweight_farming:overweight_nether_wart_block',
    'overweight_farming:overweight_potato_block',
    'overweight_farming:overweight_cocoa_block',
    'overweight_farming:overweight_carrot_block',
    'overweight_farming:overweight_beetroot_block'
    )

    //Ancient Tomes
    event.add('forge:tomes', 'quark:ancient_tome')

    //Ritual Tablets
    event.add('forge:ritual_tablets',
    'ars_nouveau:ritual_flight',
    'ars_nouveau:ritual_sunrise',
    'ars_nouveau:ritual_overgrowth',
    'ars_nouveau:ritual_moonfall',
    'ars_nouveau:ritual_fertility',
    'ars_nouveau:ritual_binding',
    'ars_nouveau:ritual_wilden_summon',
    'ars_nouveau:ritual_scrying',
    'ars_nouveau:ritual_awakening',
    'ars_nouveau:ritual_burrowing',
    'ars_nouveau:ritual_challenge',
    'ars_nouveau:ritual_cloudshaping',
    'ars_nouveau:ritual_disintegration',
    'ars_nouveau:ritual_warping',
    'ars_nouveau:ritual_restoration',
    'ars_nouveau:ritual_animal_summon',
    'ars_nouveau:ritual_harvest',
    'ars_nouveau:ritual_conjure_island_desert',
    'ars_nouveau:ritual_containment',
    'ars_nouveau:ritual_flowering',
    'ars_nouveau:ritual_sanctuary',
    'ars_nouveau:ritual_conjure_island_plains',
    'ars_nouveau:ritual_forestation'
    )

    //Lilies
    event.add('forge:lilies',
    'cnb:pink_waterlily',
    'cnb:light_pink_waterlily',
    'cnb:yellow_waterlily',
    'cnb:pink_minipad_flower',
    'cnb:light_pink_minipad_flower',
    'cnb:yellow_minipad_flower',
    'cnb:pink_minipad_flower_glow',
    'cnb:light_pink_minipad_flower_glow',
    'cnb:yellow_minipad_flower_glow'
    )

    // Magnum Torch Tagging
    event.add(
    'forge:magnum_torches',
    'magnumtorch:diamond_magnum_torch',
    'magnumtorch:emerald_magnum_torch',
    'magnumtorch:amethyst_magnum_torch'
    )

    // Inventory Upgrades
    event.add('forge:inventory_upgrades',
    'sophisticatedstorage:auto_smelting_upgrade',
    'sophisticatedstorage:auto_smoking_upgrade',
    'sophisticatedstorage:auto_blasting_upgrade',
    'sophisticatedstorage:smelting_upgrade',
    'sophisticatedstorage:smoking_upgrade',
    'sophisticatedstorage:blasting_upgrade'
    )

    // Accessory Boosters
    event.add('forge:accessory_boosters',
    'majruszsaccessories:owl_feather',
    'majruszsaccessories:golden_dice',
    'majruszsaccessories:dice',
    'majruszsaccessories:horseshoe',
    'majruszsaccessories:golden_horseshoe'
    )

    // Stack Upgrades
    event.add('forge:stack_upgrades',
    'sophisticatedstorage:stack_upgrade_tier_1',
    'sophisticatedstorage:stack_upgrade_tier_2',
    'sophisticatedstorage:stack_upgrade_tier_3',
    'sophisticatedstorage:stack_upgrade_tier_4'
    )

    //Aquaculture tags
    //Fishing Rods
    event.add('forge:fishing_rods',
    'aquaculture:iron_fishing_rod',
    'aquaculture:gold_fishing_rod',
    'aquaculture:diamond_fishing_rod'
    )

    //Upgraded Hooks
    event.add('forge:upgraded_hooks',
    'aquaculture:nether_star_hook',
    'aquaculture:double_hook',
    'aquaculture:diamond_hook',
    'aquaculture:gold_hook'
    )

    //Niche Hooks
    event.add('forge:niche_hooks',
    'aquaculture:note_hook',
    'aquaculture:redstone_hook',
    'aquaculture:heavy_hook',
    'aquaculture:light_hook'
    )

    //Fish Tags
    event.add('forge:raw_fishes', 'aquaculture:fish_fillet_raw')
    event.add('forge:cooked_fishes', 'aquaculture:fish_fillet_cooked')
    event.add('forge:cooked_seafood', 'aquaculture:fish_fillet_cooked')

    //Fishy tags for crafting
    event.add('forge:smallfish',
    'aquaculture:boulti',
    'aquaculture:synodontis',
    'aquaculture:bluegill',
    'aquaculture:perch',
    'aquaculture:piranha',
    'aquaculture:atlantic_herring'
    )

    event.add('forge:medsmallfish',
    'aquaculture:smallmouth_bass',
    'aquaculture:brown_trout',
    'aquaculture:carp',
    'aquaculture:blackfish',
    'aquaculture:pink_salmon',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout'
    )

    event.add('forge:medfish',
    'aquaculture:muskellunge',
    'aquaculture:tambaqui',
    'aquaculture:red_grouper'
    )

    event.add('forge:medlgfish',
    'aquaculture:gar',
    'aquaculture:bayad'
    )

    event.add('forge:largefish',
    'aquaculture:atlantic_cod',
    'aquaculture:catfish'
    )

    event.add('forge:largerfish',
    'aquaculture:tuna',
    'aquaculture:capitaine',
    'aquaculture:arapaima'
    )

    // Copycat
    event.add('forge:copycat_blocks',
    'create:copycat_step',
    'create:copycat_panel'
    )

    // Create Doors
    event.add('forge:create_doors',
    'create:andesite_door',
    'create:brass_door',
    'create:copper_door',
    'create:train_door',
    'create:framed_glass_door'
    )

    //Hammers
    event.add('forge:hammers',
    'another_furniture:furniture_hammer',
    'handcrafted:hammer',
    'hexerei:warhammer',
    'framedblocks:framed_hammer'
    )

})


ServerEvents.tags('block', event => {
    const bookshelves = (/.*bookshelf*./)
    //Bookshelves
    event.add('minecraft:bookshelf',
    bookshelves
    )

    event.add('forge:bookshelves',
    bookshelves
    )


    //Hot Blocks
    //Farmer's Delight
    event.add('farmersdelight:heat_sources', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove',
    'ends_delight:end_stove',
    'nethersdelight:blackstone_stove',
    'twilightdelight:maze_stove',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:necrolord/oven',
    'handcrafted:oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:venthyr/oven',
    'fantasyfurniture:nordic/oven',
    'candlelight:cobblestone_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'candlelight:deepslate_stove',
    'candlelight:granite_stove',
    'candlelight:end_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
   /*'bakery:red_nether_bricks_stove',
    'bakery:quartz_stove',
    'bakery:mud_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:deepslate_stove',
    'bakery:stone_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:cobblestone_stove',*/
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid'
    )

    //Meadow
    event.add('meadow:allows_cooking', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove',
    'ends_delight:end_stove',
    'nethersdelight:blackstone_stove',
    'twilightdelight:maze_stove',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:necrolord/oven',
    'handcrafted:oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:venthyr/oven',
    'fantasyfurniture:nordic/oven',
    'candlelight:cobblestone_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'candlelight:deepslate_stove',
    'candlelight:granite_stove',
    'candlelight:end_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    /*'bakery:red_nether_bricks_stove',
    'bakery:quartz_stove',
    'bakery:mud_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:deepslate_stove',
    'bakery:stone_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:cobblestone_stove',*/
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid'
    )

    //Hexerei
    event.add('hexerei:heat_sources', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove',
    'ends_delight:end_stove',
    'nethersdelight:blackstone_stove',
    'twilightdelight:maze_stove',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:necrolord/oven',
    'handcrafted:oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:venthyr/oven',
    'fantasyfurniture:nordic/oven',
    'candlelight:cobblestone_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'candlelight:deepslate_stove',
    'candlelight:granite_stove',
    'candlelight:end_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    /*'bakery:red_nether_bricks_stove',
    'bakery:quartz_stove',
    'bakery:mud_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:deepslate_stove',
    'bakery:stone_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:cobblestone_stove',*/
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid'
    )

    //Candlelight
    event.add('candlelight:stoves', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove',
    'ends_delight:end_stove',
    'nethersdelight:blackstone_stove',
    'twilightdelight:maze_stove',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:necrolord/oven',
    'handcrafted:oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:venthyr/oven',
    'fantasyfurniture:nordic/oven',
    'candlelight:cobblestone_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'candlelight:deepslate_stove',
    'candlelight:granite_stove',
    'candlelight:end_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    /*'bakery:red_nether_bricks_stove',
    'bakery:quartz_stove',
    'bakery:mud_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:deepslate_stove',
    'bakery:stone_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:cobblestone_stove',*/
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid'
    )

    //Bakery
    /*event.add('bakery:stove', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove',
    'ends_delight:end_stove',
    'nethersdelight:blackstone_stove',
    'twilightdelight:maze_stove',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:necrolord/oven',
    'handcrafted:oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:venthyr/oven',
    'fantasyfurniture:nordic/oven',
    'candlelight:cobblestone_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'candlelight:deepslate_stove',
    'candlelight:granite_stove',
    'candlelight:end_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    'bakery:red_nether_bricks_stove',
    'bakery:quartz_stove',
    'bakery:mud_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:deepslate_stove',
    'bakery:stone_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:cobblestone_stove',
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid'
    )*/

})

ServerEvents.tags('entity_type', event => {
    event.add('ars_nouveau:drygmy_blacklist', 
    'minecraft:iron_golem',
    'minecraft:villager',
    'minecraft:pillager',
    '#forge:bosses',
    'twilightforest:naga',
    'twilightforest:lich',
    'twilightforest:minoshroom',
    'twilightforest:hydra',
    'twilightforest:knight_phantom',
    'twilightforest:ur_ghast',
    'twilightforest:alpha_yeti',
    'twilightforest:snow_queen',
    'twilightforest:plateau_boss',
    'minecraft:warden',
    'artifacts:mimic',
    'minecraft:illusioner',
    'minecraft:vindicator',
    'minecraft:evoker',
    'friendsandfoes:copper_golem',
    'friendsandfoes:iceologer',
    'quark:stoneling',
    'quark:toretoise',
    'upgrade_aquatic:great_thrasher',
    'minecraft:elder_guardian'
    )

    event.add('ars_nouveau:jar_blacklist',
        '#ars_nouveau:familiar',
        '#forge:bosses',
        'twilightforest:naga',
        'twilightforest:lich',
        'twilightforest:minoshroom',
        'twilightforest:hydra',
        'twilightforest:knight_phantom',
        'twilightforest:ur_ghast',
        'twilightforest:alpha_yeti',
        'twilightforest:snow_queen',
        'twilightforest:plateau_boss',
        'enigmaticgraves:grave',
        'friendsandfoes:player_illusion',
        'friendsandfoes:wildfire',
        'lootr:lootr_minecart',
        'minecraft:chest_minecart',
        'luggage:luggage',
        'luggage:ender_luggage',
        'minecraft:ender_dragon'
    )
  })


