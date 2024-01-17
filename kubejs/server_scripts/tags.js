ServerEvents.tags('item', event => {

    event.add(
        'forge:salt', 
        'meadow:alpine_salt'
    )

    event.add(
        'forge:souls',
        'forbidden_arcanus:enchanted_soul', 
        'forbidden_arcanus:corrupt_soul', 
        'forbidden_arcanus:soul',
        'nameless_trinkets:miners_soul',
        'endrem:undead_soul'
    )

    //Mushroom Colony
    event.add('forge:mushcolony',
    'farmersdelight:red_mushroom_colony', 
    'farmersdelight:brown_mushroom_colony')

    //Fungus Colony
    event.add('forge:funguscolony',
    'nethersdelight:crimson_fungus_colony', 
    'nethersdelight:warped_fungus_colony')

    //Tea Kettles
    event.add('forge:kettles',
    'herbalbrews:tea_kettle',
    'herbalbrews:copper_tea_kettle'
    )

    // Rope Tags
    event.add('supplementaries:ropes',
    'farmersdelight:rope')

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

    // Waystone Tags
    event.add('forge:waystones',
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone'
    )

    // Wrench Tags
    event.add('forge:wrenches',
    'supplementaries:wrench')

    // Golden Things for Tarot
    event.add('tarotcards:golden',
    'nethersdelight:golden_machete',
    'farmersdelight:golden_knife',
    'nethersdelight:golden_machete',
    'aquaculture:gold_fishing_rod', 
    'forbidden_arcanus:golden_blacksmith_gavel',
    'aether:golden_gloves'
    )

    // Meadow Wool
    event.add('minecraft:wool',
    'meadow:warped_wool')

    //=== Tag Removal ===
    //Dough
    event.removeAllTagsFrom('bakery:dough',
    'candlelight:dough',
    'create:dough')

    //why are plushies wool??
    event.remove('minecraft:wool', [
        '#perfectplushies:village_plushies',
        "#perfectplushies:treasure_plushies",
        "#perfectplushies:rare_treasure_plushies"
    ])

    //===Tags for FTB Quests===
    //Mailboxes
    event.add(
        'forge:mailboxes',
        'mighty_mail:oak_mail_box', 
        'mighty_mail:spruce_mail_box', 
        'mighty_mail:birch_mail_box', 
        'mighty_mail:jungle_mail_box', 
        'mighty_mail:acacia_mail_box', 
        'mighty_mail:dark_oak_mail_box', 
        'mighty_mail:mangrove_mail_box', 
        'mighty_mail:cherry_mail_box', 
        'mighty_mail:crimson_mail_box', 
        'mighty_mail:warped_mail_box'
    )

    //Grape Seeds
    event.add('forge:grape_seeds',
    'vinery:red_grape_seeds', 
    'vinery:white_grape_seeds', 
    'vinery:savanna_grape_seeds_red', 
    'vinery:savanna_grape_seeds_white', 
    'vinery:taiga_grape_seeds_red', 
    'vinery:taiga_grape_seeds_white', 
    'vinery:jungle_grape_seeds_red', 
    'vinery:jungle_grape_seeds_white')

    //Typewriters
    event.add(
        'forge:typewriters',
        'candlelight:typewriter_iron', 
        'candlelight:typewriter_copper'
    )

    //Ancient Manuscript Binding Tables
    event.add(
        'forge:binding_tables',
        'ancient_manuscripts:spruce_binding_table', 
        'ancient_manuscripts:dark_oak_binding_table', 
        'ancient_manuscripts:oak_binding_table', 
        'ancient_manuscripts:mangrove_binding_table', 
        'ancient_manuscripts:warped_binding_table', 
        'ancient_manuscripts:crimson_binding_table', 
        'ancient_manuscripts:bamboo_binding_table', 
        'ancient_manuscripts:cherry_binding_table', 
        'ancient_manuscripts:birch_binding_table', 
        'ancient_manuscripts:acacia_binding_table', 
        'ancient_manuscripts:jungle_binding_table', 
    )

    //Vinery Grapes
    event.add(
        'forge:grapes',
        'vinery:taiga_grapes_white',
        'vinery:taiga_grapes_red',
        'vinery:savanna_grapes_white',
        'vinery:red_grape',
        'vinery:jungle_grapes_white',
        'vinery:savanna_grapes_red',
        'vinery:jungle_grapes_red', 
        'vinery:white_grape'
    )

    //Beautify Lattices
    event.add(
        'forge:lattices',
        'beautify:oak_trellis', 
        'beautify:spruce_trellis', 
        'beautify:dark_oak_trellis', 
        'beautify:crimson_trellis', 
        'beautify:mangrove_trellis', 
        'beautify:acacia_trellis', 
        'beautify:jungle_trellis', 
        'beautify:birch_trellis', 
        'beautify:warped_trellis'
    )

    //Copycat Blocks
    event.add(
        'forge:copycat_blocks',
        'create:copycat_step',
        'create:copycat_panel'
    )

    //Create Doors
    event.add(
        'forge:create_doors',
        'create:andesite_door',
        'create:brass_door',
        'create:copper_door',
        'create:train_door',
        'create:train_trapdoor',
        'create:framed_glass_door', 
        'create:framed_glass_trapdoor'
    )

    //Fish Tags
    event.add('forge:raw_fishes',
    'aquaculture:fish_fillet_raw')
    event.add('forge:cooked_fishes',
    'aquaculture:fish_fillet_cooked')
    event.add('forge:cooked_seafood',
    'aquaculture:fish_fillet_cooked')

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
    'aquaculture:capitaine',
    'aquaculture:arapaima'
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

    // Stack Upgrades
    event.add('forge:stack_upgrades',
    'sophisticatedstorage:stack_upgrade_tier_1',
    'sophisticatedstorage:stack_upgrade_tier_2',
    'sophisticatedstorage:stack_upgrade_tier_3',
    'sophisticatedstorage:stack_upgrade_tier_4'
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

    // Magnum Torch Tagging
    event.add(
    'forge:magnum_torches',
    'magnumtorch:diamond_magnum_torch',
    'magnumtorch:emerald_magnum_torch',
    'magnumtorch:amethyst_magnum_torch'
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

    // Seats
    event.add('forge:seats',
    'fantasyfurniture:necrolord/cushion',
    'fantasyfurniture:royal/cushion',
    'fantasyfurniture:venthyr/cushion',
    'fantasyfurniture:dunmer/cushion',
    'fantasyfurniture:nordic/cushion',
    'fantasyfurniture:decorations/royal_floor_cushion'
    )

    // Golden Things for Tarot
    event.add('tarotcards:golden',
    'nethersdelight:golden_machete',
    'farmersdelight:golden_knife',
    )

    // Organic materials for Compost Recipe
    event.add('forge:compost',
    'farmersdelight:tree_bark',
    'minecraft:rotten_flesh',
    'mysticsbiomes:maple_leaf_pile',
    'mysticsbiomes:orange_maple_leaf_pile',
    'mysticsbiomes:yellow_maple_leaf_pile',
    'regions_unexplored:maple_leaf_pile',
    'regions_unexplored:red_maple_leaf_pile',
    'regions_unexplored:orange_maple_leaf_pile',
    'regions_unexplored:enchanted_birch_leaf_pile', 
    'regions_unexplored:silver_birch_leaf_pile',
    'spawn:fallen_leaves',
    )

    // Dirt for Compost Recipe
    event.add('forge:dirt',
    'minecraft:dirt',
    'minecraft:coarse_dirt',
    'minecraft:rooted_dirt','minecraft:podzol')

    //Magical Knives work with FD
    event.add('farmersdelight:tools/knives',
        'forbidden_arcanus:mystical_dagger',
        'eidolon:athame'
    )

    //Ambers
    event.add('forge:amber',
    'aether:golden_amber',
    'unusualprehistory:amber_shard',
    'moresnifferflowers:amber_shard'
    )

    //Blueberries
    event.add('forge:fruits/blueberry',
    'aether:blue_berry'
    )

    //Salmonberries
    event.add('forge:fruits/salmonberries',
    'regions_unexplored:salmonberry'
    )

    //Tallow
    event.add('forge:tallow',
        'delightful:animal_fat'
    )

    //Fish to breed Tuna with
    event.add('spawn:tuna_feeds',
    'aquaculture:atlantic_cod',
    'aquaculture:blackfish',
    'aquaculture:pacific_halibut',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:pink_salmon',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:bayad',
    'aquaculture:boulti',
    'aquaculture:capitaine',
    'aquaculture:synodontis',
    'aquaculture:smallmouth_bass',
    'aquaculture:bluegill',
    'aquaculture:brown_trout',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar', 
    'aquaculture:minnow', 
    'aquaculture:muskellunge',
    'aquaculture:perch',
    'aquaculture:arapaima',
    'aquaculture:piranha',
    'aquaculture:tambaqui',
    'aquaculture:red_grouper'
    )

    event.add('spawn:tuna_tempts',
    'aquaculture:atlantic_cod',
    'aquaculture:blackfish',
    'aquaculture:pacific_halibut',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:pink_salmon',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:bayad',
    'aquaculture:boulti',
    'aquaculture:capitaine',
    'aquaculture:synodontis',
    'aquaculture:smallmouth_bass',
    'aquaculture:bluegill',
    'aquaculture:brown_trout',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar', 
    'aquaculture:minnow', 
    'aquaculture:muskellunge',
    'aquaculture:perch',
    'aquaculture:arapaima',
    'aquaculture:piranha',
    'aquaculture:tambaqui',
    'aquaculture:red_grouper'
    )

    //Angler fish shiny items
    event.add('spawn:angler_fish_likes',
    'minecraft:echo_shard',
    'regions_unexplored:aster',
    'regions_unexplored:blue_bioshroom',
    'regions_unexplored:green_bioshroom',
    'regions_unexplored:pink_bioshroom',
    'regions_unexplored:yellow_bioshroom',
    'regions_unexplored:tall_blue_bioshroom',
    'regions_unexplored:tall_green_bioshroom',
    'regions_unexplored:tall_pink_bioshroom',
    'galosphere:lumiere_shard',
    'minecraft:gold_ingot',
    'minecraft:emerald',
    'minecraft:diamond',
    'aquaculture:neptunium_ingot',
    'regions_unexplored:prismarite_cluster',
    'regions_unexplored:large_prismarite_cluster',
    'regions_unexplored:hanging_prismarite',
    'regions_unexplored:redstone_bud',
    'regions_unexplored:redstone_bulb',
    'regions_unexplored:pointed_redstone',
    'waystones:warp_dust',
    'create:rose_quartz',
    'create:polished_rose_quartz',
    'eidolon:arcane_gold_ingot',
    'forbidden_arcanus:arcane_crystal_dust',
    'forbidden_arcanus:arcane_crystal_dust_speck',
    'aether:enchanted_berry',
    'galosphere:glinted_amethyst_cluster',
    'galosphere:allurite_cluster',
    'galosphere:glinted_allurite_cluster',
    'galosphere:allurite_shard',
    'minecraft:ender_pearl',
    'minecraft:amethyst_shard',
    'regions_unexplored:tall_yellow_bioshroom'
    )

    event.add('spawn:angler_fish_tempts',
    'minecraft:echo_shard',
    'regions_unexplored:aster',
    'regions_unexplored:blue_bioshroom',
    'regions_unexplored:green_bioshroom',
    'regions_unexplored:pink_bioshroom',
    'regions_unexplored:yellow_bioshroom',
    'regions_unexplored:tall_blue_bioshroom',
    'regions_unexplored:tall_green_bioshroom',
    'regions_unexplored:tall_pink_bioshroom',
    'galosphere:lumiere_shard',
    'minecraft:gold_ingot',
    'minecraft:emerald',
    'minecraft:diamond',
    'aquaculture:neptunium_ingot',
    'regions_unexplored:prismarite_cluster',
    'regions_unexplored:large_prismarite_cluster',
    'regions_unexplored:hanging_prismarite',
    'regions_unexplored:redstone_bud',
    'regions_unexplored:redstone_bulb',
    'regions_unexplored:pointed_redstone',
    'waystones:warp_dust',
    'create:rose_quartz',
    'create:polished_rose_quartz',
    'eidolon:arcane_gold_ingot',
    'forbidden_arcanus:arcane_crystal_dust',
    'forbidden_arcanus:arcane_crystal_dust_speck',
    'aether:enchanted_berry',
    'galosphere:glinted_amethyst_cluster',
    'galosphere:allurite_cluster',
    'galosphere:glinted_allurite_cluster',
    'galosphere:allurite_shard',
    'minecraft:ender_pearl',
    'minecraft:amethyst_shard',
    'regions_unexplored:tall_yellow_bioshroom'
    )

    //Jam Tagging
    event.add('forge:jams',
    'fruitsdelight:apple_jelly',
    'fruitsdelight:blueberry_jelly',
    'fruitsdelight:glowberry_jelly',
    'fruitsdelight:hamimelon_jelly',
    'fruitsdelight:melon_jelly',
    'fruitsdelight:hawberry_jelly',
    'fruitsdelight:lychee_jelly',
    'fruitsdelight:mango_jelly',
    'fruitsdelight:orange_jelly',
    'fruitsdelight:peach_jelly',
    'fruitsdelight:pear_jelly',
    'fruitsdelight:persimmon_jelly',
    'fruitsdelight:pineapple_jelly',
    'fruitsdelight:lemon_jelly',
    'fruitsdelight:cranberry_jelly',
    'fruitsdelight:mangosteen_jelly',
    'fruitsdelight:sweetberry_jelly',
    'fruitsdelight:chorus_jelly',
    'bakery:strawberry_jam',
    'bakery:sweetberry_jam',
    'bakery:glowberry_jam',
    'bakery:apple_jam'
    )

    //Relic Tagging
    event.add( 'forge:relics',
        'relics:amphibian_boot', 
        'relics:aqua_walker',
        'relics:arrow_quiver', 
        'relics:bastion_ring', 
        'relics:blazing_flask',
        'relics:chorus_inhibitor',
        'relics:drowned_belt',
        'relics:elytra_booster',
        'relics:enders_hand',
        'relics:horse_flute',
        'relics:hunter_belt',
        'relics:ice_breaker',
        'relics:ice_skates', 
        'relics:jellyfish_necklace',
        'relics:leather_belt',
        'relics:magic_mirror',
        'relics:holy_locket',
        'relics:midnight_robe',
        'relics:rage_glove',
        'relics:reflection_necklace',
        'relics:roller_skates',
        'relics:space_dissector',
        'relics:spatial_sign', 
        'relics:spore_sack',
        'relics:wool_mitten',
    )

    event.add('forge:gummy_swets',
    'aether:blue_gummy_swet',
    'aether:golden_gummy_swet',
    'aether_redux:vanilla_gummy_swet')

    event.add('forge:wind_chimes',
    'chimes:bamboo_chimes',
    'chimes:iron_chimes',
    'chimes:carved_bamboo_chimes',
    'chimes:amethyst_chimes',
    'chimes:copper_chimes',
    'chimes:glass_bells')

})

ServerEvents.tags('block', event => {

    //Hot Blocks
    //Farmer's Delight
    event.add('farmersdelight:heat_sources', 
    'bakery:brick_stove',
    'bakery:cobblestone_stove',
    'bakery:deepslate_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:mud_stove',
    'bakery:quartz_stove',
    'bakery:red_nether_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:stone_bricks_stove',
    'candlelight:bamboo_stove',
    'candlelight:basalt_stove',
    'candlelight:cobblestone_stove',
    'candlelight:deepslate_stove',
    'candlelight:end_stove',
    'candlelight:granite_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'create:blaze_burner',
    'ends_delight:end_stove',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:necrolord/oven',
    'fantasyfurniture:nordic/oven',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:venthyr/oven',
    'farmersdelight:stove',
    'handcrafted:oven',
    'herbalbrews:stove',
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid',
    'meadow:stove_tiles_wood',
    'minecraft:magma_block',
    'nethersdelight:blackstone_stove',
    )

    //Meadow
    event.add('meadow:allows_cooking', 
    'bakery:brick_stove',
    'bakery:cobblestone_stove',
    'bakery:deepslate_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:mud_stove',
    'bakery:quartz_stove',
    'bakery:red_nether_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:stone_bricks_stove',
    'candlelight:bamboo_stove',
    'candlelight:basalt_stove',
    'candlelight:cobblestone_stove',
    'candlelight:deepslate_stove',
    'candlelight:end_stove',
    'candlelight:granite_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'create:blaze_burner',
    'ends_delight:end_stove',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:necrolord/oven',
    'fantasyfurniture:nordic/oven',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:venthyr/oven',
    'farmersdelight:stove',
    'handcrafted:oven',
    'herbalbrews:stove',
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid',
    'meadow:stove_tiles_wood',
    'minecraft:magma_block',
    'nethersdelight:blackstone_stove',
    )

    //Candlelight
    event.add('candlelight:allows_cooking', 
    'bakery:brick_stove',
    'bakery:cobblestone_stove',
    'bakery:deepslate_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:mud_stove',
    'bakery:quartz_stove',
    'bakery:red_nether_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:stone_bricks_stove',
    'candlelight:bamboo_stove',
    'candlelight:basalt_stove',
    'candlelight:cobblestone_stove',
    'candlelight:deepslate_stove',
    'candlelight:end_stove',
    'candlelight:granite_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'create:blaze_burner',
    'ends_delight:end_stove',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:necrolord/oven',
    'fantasyfurniture:nordic/oven',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:venthyr/oven',
    'farmersdelight:stove',
    'handcrafted:oven',
    'herbalbrews:stove',
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid',
    'meadow:stove_tiles_wood',
    'minecraft:magma_block',
    'nethersdelight:blackstone_stove',
    )

    //Bakery
    event.add('bakery:allows_cooking', 
    'bakery:brick_stove',
    'bakery:cobblestone_stove',
    'bakery:deepslate_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:mud_stove',
    'bakery:quartz_stove',
    'bakery:red_nether_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:stone_bricks_stove',
    'candlelight:bamboo_stove',
    'candlelight:basalt_stove',
    'candlelight:cobblestone_stove',
    'candlelight:deepslate_stove',
    'candlelight:end_stove',
    'candlelight:granite_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'create:blaze_burner',
    'ends_delight:end_stove',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:necrolord/oven',
    'fantasyfurniture:nordic/oven',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:venthyr/oven',
    'farmersdelight:stove',
    'handcrafted:oven',
    'herbalbrews:stove',
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid',
    'meadow:stove_tiles_wood',
    'minecraft:magma_block',
    'nethersdelight:blackstone_stove',
    )

    //Herbal Brews
    event.add('herbalbrews:allows_cooking', 
    'bakery:brick_stove',
    'bakery:cobblestone_stove',
    'bakery:deepslate_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:mud_stove',
    'bakery:quartz_stove',
    'bakery:red_nether_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:stone_bricks_stove',
    'candlelight:bamboo_stove',
    'candlelight:basalt_stove',
    'candlelight:cobblestone_stove',
    'candlelight:deepslate_stove',
    'candlelight:end_stove',
    'candlelight:granite_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'create:blaze_burner',
    'ends_delight:end_stove',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:necrolord/oven',
    'fantasyfurniture:nordic/oven',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:venthyr/oven',
    'farmersdelight:stove',
    'handcrafted:oven',
    'herbalbrews:stove',
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid',
    'meadow:stove_tiles_wood',
    'minecraft:magma_block',
    'nethersdelight:blackstone_stove',
    )

    //Eidolon
    event.add('eidolon:crucible_hot_blocks', 
    'bakery:brick_stove',
    'bakery:cobblestone_stove',
    'bakery:deepslate_stove',
    'bakery:end_stove',
    'bakery:granite_stove',
    'bakery:mud_stove',
    'bakery:quartz_stove',
    'bakery:red_nether_bricks_stove',
    'bakery:sandstone_stove',
    'bakery:stone_bricks_stove',
    'candlelight:bamboo_stove',
    'candlelight:basalt_stove',
    'candlelight:cobblestone_stove',
    'candlelight:deepslate_stove',
    'candlelight:end_stove',
    'candlelight:granite_stove',
    'candlelight:mud_stove',
    'candlelight:quartz_stove',
    'candlelight:red_nether_bricks_stove',
    'candlelight:sandstone_stove',
    'candlelight:stone_bricks_stove',
    'create:blaze_burner',
    'ends_delight:end_stove',
    'fantasyfurniture:bone/skeleton/oven',
    'fantasyfurniture:bone/wither/oven',
    'fantasyfurniture:necrolord/oven',
    'fantasyfurniture:nordic/oven',
    'fantasyfurniture:royal/oven',
    'fantasyfurniture:venthyr/oven',
    'farmersdelight:stove',
    'handcrafted:oven',
    'herbalbrews:stove',
    'meadow:stove_tiles',
    'meadow:stove_tiles_lid',
    'meadow:stove_tiles_wood',
    'minecraft:magma_block',
    'nethersdelight:blackstone_stove',
    )

})