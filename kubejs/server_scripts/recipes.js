ServerEvents.recipes(event => {
    /*
    //Witchy Compost
    event.shapeless(
        Item.of('farmersdelight:organic_compost', 2), 
        [ 
            {tag: 'forge:dirt'},
            {tag: 'supplementaries:straw'},
            {tag: 'supplementaries:straw'},
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            {tag: 'forge:compost'},
            {tag: 'forge:compost'},
            {tag: 'forge:compost'},
            {tag: 'forge:compost'}
        ]
      )

    // Building Gadgets

    //Building Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_building', '{energy:500000.0d,state:{data:{},serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"}}}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
        }
    )
*/
    // Soul Receptacle
    event.shaped(
        Item.of('tombstone:soul_receptacle'),
        [
            ' A ',
            'BCB',
            ' D '
        ], {
            A: 'minecraft:chain',
            B: 'minecraft:iron_ingot',
            C: '#forge:souls',
            D: 'minecraft:soul_soil'
        }
    )

    // Chest Fallback
    event.shaped(
        Item.of('minecraft:chest'),
        [
            'AAA',
            'A A',
            'AAA'
        ], {
            A: '#minecraft:planks'
        }
    )

    // Boat Fallback
    event.shaped(
        Item.of('minecraft:oak_boat'),
        [
            '   ',
            'A A',
            'AAA'
        ], {
            A: '#minecraft:planks'
        }
    )

    //Recipe Replacements
    //Strawberries
    event.replaceInput({
        input: 'mysticsbiomes:strawberry'
    }, // Arg 1: the filter
    'mysticsbiomes:strawberry', // Arg 2: the item to replace
    'bakery:strawberry' // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

    //Pearls
    event.replaceInput({
        input: 'abyssal_decor:white_pearl'
    }, // Arg 1: the filter
    'abyssal_decor:white_pearl', // Arg 2: the item to replace
    '#forge:pearls' // Arg 3: the item to replace it with
)

    //Pearls
    event.replaceInput({
        input: 'crabbersdelight:pearl'
    }, // Arg 1: the filter
    'crabbersdelight:pearl', // Arg 2: the item to replace
    '#forge:pearls' // Arg 3: the item to replace it with
)


    // Cheaper Post Box
    event.shaped(
        Item.of('mighty_mail:post_box'),
        [
            'ABA',
            'BCB',
            ' D '
        ], {
            A: 'minecraft:blue_dye',
            B: 'minecraft:iron_ingot',
            C: '#forge:chests',
            D: 'minecraft:smooth_stone'
        }
    )

    // Cheaper Mermaid Pearl
    event.shaped(
        Item.of('luphieclutteredmod:luphie_mermaid_pearl'),
        [
            ' A ',
            'BCB'
        ], {
            A: 'crabbersdelight:pearl',
            B: 'minecraft:gold_nugget',
            C: 'minecraft:gold_ingot'
        }
    )

    //Slime Balls
    event.shapeless(
        Item.of('minecraft:slime_ball'),
        [{
                tag: 'forge:dyes/lime'
            },
            'farmersdelight:wheat_dough'
        ]
    )


    //Dough
    event.shapeless(
        Item.of('farmersdelight:wheat_dough', 3),
        [
            'create:wheat_flour',
            'create:wheat_flour',
            'minecraft:water_bucket',
            'bakery:yeast'
        ]
    )

    //Recipes Use Cheese ======================================================
    //Cheeseburger from Scratch
    event.shapeless(
        Item.of('delightful:cheeseburger'),
        [
            'minecraft:bread',
            '#candlelight:cooked_beef',
            '#forge:crops/cabbage',
            '#forge:cheese',
            'farmersdelight:tomato',
            'farmersdelight:onion'
        ]
    )

    //Cheeseburger from burger
    event.shapeless(
        Item.of('delightful:cheeseburger'),
        [
            'farmersdelight:hamburger',
            '#forge:cheese',
        ]
    )

    //Deluxe Cheeseburger from Cheeseburger
    event.shapeless(
        Item.of('delightful:deluxe_cheeseburger'),
        [
            'delightful:cheeseburger',
            '#forge:cheese',
            '#candlelight:cooked_beef',
            '#forge:cooked_bacon'
        ]
    )

    //Deluxe Cheeseburger from Scratch
    event.shapeless(
        Item.of('delightful:deluxe_cheeseburger'),
        [
            'minecraft:bread',
            '#candlelight:cooked_beef',
            '#candlelight:cooked_beef',
            '#forge:crops/cabbage',
            '#forge:cheese',
            '#forge:cheese',
            'farmersdelight:tomato',
            'farmersdelight:onion',
            '#forge:cooked_bacon'
        ]
    )

    // Trevally with Cheese
    /*
    event.shaped(
        Item.of('untameddelight:baked_trevally_with_cheese'),
        [
            'ABC',
            'DED'
        ],
        {
            A: 'untameddelight:cooked_trevally',
            B: 'farmersdelight:onion',
            C: '#forge:eggs',
            D: '#forge:cheese',
            E: 'minecraft:bowl'
        }
    )
    */
    //==================================================================

    //Dough conversion
    event.shapeless(
        Item.of('farmersdelight:wheat_dough'),
        [
            'bakery:dough'
        ]
    )

    //Dough conversion 2
    event.shapeless(
        Item.of('farmersdelight:wheat_dough'),
        [
            'create:dough'
        ]
    )

    //Sunflower conversion
    event.shapeless(
        Item.of('minecraft:sunflower'),
        [
            'spawn:sunflower'
        ]
    )

    //Magical Gold Conversions
    event.shapeless(
        Item.of('eidolon:arcane_gold_ingot'),
        [
            'eidolon:soul_shard',
            'forbidden_arcanus:deorum_ingot'
        ]
    )

    event.shapeless(
        Item.of('forbidden_arcanus:deorum_ingot'),
        [
            'forbidden_arcanus:mundabitur_dust',
            'eidolon:arcane_gold_ingot'
        ]
    )

    // Oil Lantern
    event.shaped(
        Item.of('meadow:oil_lantern'),
        [
            'DAD',
            'ABA',
            'CCC'
        ], {
            A: 'minecraft:iron_ingot',
            B: 'forbidden_arcanus:edelwood_oil',
            C: 'minecraft:iron_nugget',
            D: 'eidolon:enchanted_ash'
        }
    )
    /*
        // Lead Doors
        event.shaped(
            Item.of('dramaticdoors:short_lead_door'),
            [
                'AA ',
                'AA '
            ],
            {
                A: 'eidolon:lead_ingot',
            }
        )

        event.shaped(
            Item.of('dramaticdoors:tall_lead_door'),
            [
                'AA ',
                'AA ',
                'AA '
            ],
            {
                A: 'eidolon:lead_ingot',
            }
        )

        // Silver Doors
        event.shaped(
            Item.of('dramaticdoors:short_silver_door'),
            [
                'AA ',
                'AA '
            ],
            {
                A: 'eidolon:silver_ingot',
            }
        )

        event.shaped(
            Item.of('dramaticdoors:tall_silver_door'),
            [
                'AA ',
                'AA ',
                'AA '
            ],
            {
                A: 'eidolon:silver_ingot',
            }
        )
        */

    // Building Gadgets

    //Building Gadget
    event.shaped(
        Item.of('buildinggadgets2:gadget_building', '{energy:500000,uuid:[I;-263423233,125847530,-2089373063,1330860108]}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ], {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Exchanging Gadget
    event.shaped(
        Item.of('buildinggadgets2:gadget_exchanging', '{energy:500000,uuid:[I;2068449905,-191871022,-1763510008,-1044204975]}'), [
            'ABA',
            'CDC',
            'ADA'
        ], {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Copy Paste Gadget
    event.shaped(
        Item.of('buildinggadgets2:gadget_copy_paste', '{energy:500000.0d,mode:0b,template_id:[I;-1758435112,-1217443030,-1679697278,2082124584]}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ], {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:emerald',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Destruction Gadget
    event.shaped(
        Item.of('buildinggadgets2:gadget_destruction', '{energy:1000000.0d,fuzzy:1b,overlay:1b}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ], {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:ender_pearl',
            D: 'minecraft:lapis_lazuli'
        }
    )

    // BG Charging Gadget
    event.shaped(
        Item.of('charginggadgets:charging_station'),
        [
            'ABA',
            'DBD',
            'ACA'
        ], {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:coal_block',
            D: 'minecraft:lapis_lazuli'
        }
    )

    // BG Template Manager
    event.shaped(
        Item.of('buildinggadgets2:template_manager'),
        [
            'ABA',
            'BCB',
            'ADA'
        ], {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:emerald',
            D: 'minecraft:lapis_lazuli'
        }
    )


    // Easy Mob Farm Upgrades
    event.shaped(
        Item.of('easy_mob_farm:gold_mob_farm_template'),
        [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'minecraft:gold_ingot',
            B: 'easy_mob_farm:iron_mob_farm_template'
        }
    )

    event.shaped(
        Item.of('easy_mob_farm:iron_mob_farm_template'),
        [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'minecraft:iron_ingot',
            B: 'easy_mob_farm:copper_mob_farm_template'
        }
    )

    //End Remastered Eyes from Enderman Overhaul Pearls
    //Lost Eye
    event.shaped(
        Item.of('endrem:lost_eye'),
        [
            ' A ',
            'BCD',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'handcrafted:hammer',
            C: 'endermanoverhaul:crimson_pearl',
            D: 'minecraft:anvil'
        }
    )

    //Exotic Eye
    event.shaped(
        Item.of('endrem:exotic_eye'),
        [
            ' A ',
            'BCD',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'minecraft:fire_coral',
            C: 'endermanoverhaul:bubble_pearl',
            D: 'minecraft:tube_coral'
        }
    )

    //Magical Eye
    event.shaped(
        Item.of('endrem:magical_eye'),
        [
            ' A ',
            'BCD',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'eidolon:holy_symbol',
            C: 'endermanoverhaul:summoner_pearl',
            D: 'eidolon:unholy_symbol'
        }
    )

    //Old Eye
    event.shaped(
        Item.of('endrem:old_eye'),
        [
            ' A ',
            'BCB',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'minecraft:chiseled_sandstone',
            C: 'endermanoverhaul:ancient_pearl'
        }
    )

    //Evil Eye
    event.shaped(
        Item.of('endrem:evil_eye'),
        [
            ' A ',
            'BCB',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'eidolon:silver_ingot',
            C: 'endermanoverhaul:warped_pearl'
        }
    )

    //Guardian Eye
    event.shaped(
        Item.of('endrem:guardian_eye'),
        [
            ' A ',
            'BCB',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'minecraft:prismarine_shard',
            C: 'endermanoverhaul:soul_pearl'
        }
    )

    //Corrupted Eye
    event.shaped(
        Item.of('endrem:corrupted_eye'),
        [
            ' A ',
            'BCB',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'forbidden_arcanus:corrupti_dust',
            C: 'endermanoverhaul:corrupted_pearl'
        }
    )

    //Cold Eye
    event.shaped(
        Item.of('endrem:cold_eye'),
        [
            ' A ',
            'BCB',
            ' A '
        ], {
            A: 'minecraft:ender_eye',
            B: 'minecraft:blue_ice',
            C: 'endermanoverhaul:icy_pearl'
        }
    )

    //Rope
    event.shaped(
        Item.of('beautify:hanging_pot'),
        [
            ' A ',
            ' B '
        ], {
            A: '#supplementaries:ropes',
            B: 'minecraft:flower_pot'
        }
    )

    //End Remastered Eyes to Pearls
    event.shapeless(
        Item.of('minecraft:ender_pearl', 4),
        [
            '#forge:eyes'
        ]
    )

    event.smithing(
        'easy_mob_farm:netherite_mob_farm_template', // arg 1: output
        'easy_mob_farm:gold_mob_farm_template', // arg 2: the item to be upgraded
        'minecraft:netherite_ingot', // arg 3: the upgrade item
        'minecraft:diamond'
    )

    //Herbal Brews Fixing
    event.smoking('herbalbrews:dried_green_tea', 'herbalbrews:green_tea_leaf')
    event.smoking('herbalbrews:dried_oolong_tea', 'herbalbrews:dried_green_tea')
    event.smoking('herbalbrews:dried_black_tea', 'herbalbrews:dried_oolong_tea')

    //Uncraft Dried Green Tea Block
    event.shapeless(
        Item.of('herbalbrews:dried_green_tea', 9),
        [
            'herbalbrews:dried_green_tea_leaf_block'
        ]
    )

    //Craft Black Tea Block
    event.shapeless(
        Item.of('herbalbrews:black_tea_leaf_block'),
        [
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea',
            'herbalbrews:dried_black_tea'
        ]
    )

    //Uncraft Black Tea Block
    event.shapeless(
        Item.of('herbalbrews:dried_black_tea', 9),
        [
            'herbalbrews:black_tea_leaf_block'
        ]
    )

    //Craft Oolong Tea Block
    event.shapeless(
        Item.of('herbalbrews:oolong_tea_leaf_block'),
        [
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea',
            'herbalbrews:dried_oolong_tea'
        ]
    )

    //Uncraft Oolong Tea Block
    event.shapeless(
        Item.of('herbalbrews:dried_oolong_tea', 9),
        [
            'herbalbrews:oolong_tea_leaf_block'
        ]
    )

    //Compost
    event.shapeless(
        Item.of('farmersdelight:organic_compost', 2),
        [{
                tag: 'forge:dirt'
            },
            {
                tag: 'supplementaries:straw'
            },
            {
                tag: 'supplementaries:straw'
            },
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            {
                tag: 'forge:compost'
            },
            {
                tag: 'forge:compost'
            },
            {
                tag: 'forge:compost'
            },
            {
                tag: 'forge:compost'
            }
        ]
    )

    //Eccentric Tome
    event.shapeless(
        Item.of('eccentrictome:tome', '{"eccentrictome:mods":{aether:{0:{Count:1b,id:"aether:book_of_lore"}},eidolon:{0:{Count:1b,id:"eidolon:codex"}},fdcookbook:{0:{Count:1b,id:"fdcookbook:fd_cookbook"}},ftbquests:{0:{Count:1b,id:"ftbquests:book"}},lexicon:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"lexicon:lexicon"}}},solonion:{0:{Count:1b,id:"solonion:food_book"}},unusualprehistory:{0:{Count:1b,id:"unusualprehistory:encyclopedia"}}}}'), [
            'minecraft:book',
            'minecraft:stick'
        ]
    )

    //Chest Recipe with Logs
    event.shaped(
        Item.of('minecraft:chest', 4),
        [
            'AAA',
            'A A',
            'AAA'
        ], {
            A: '#minecraft:logs'
        }
    )

    //Uncompress Honey
    event.shapeless(
        Item.of('minecraft:honeycomb', 4),
        [
            'minecraft:honeycomb_block'
        ]
    )

    //Uncompress Quartz
    event.shapeless(
        Item.of('minecraft:quartz', 4),
        [
            'minecraft:quartz_block'
        ]
    )

    // Pipez Item Pipe
    event.shaped(
        Item.of('pipez:item_pipe', 16),
        [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:redstone'
        }
    )

    // Tarot Deck
    event.shaped(
        Item.of('tarotcards:tarot_deck'),
        [
            'ABA',
            'ACA',
            'ADA'
        ], {
            A: 'create:golden_sheet',
            B: 'minecraft:dragon_egg',
            C: 'minecraft:nether_star',
            D: 'tarotcards:justice'
        }
    )

    // Warp Scrolls to Warp Stones
    event.shaped(
        Item.of('waystones:warp_stone'),
        [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'waystones:warp_scroll',
            B: 'minecraft:emerald'
        }
    )

    //DNA Fridge
    event.shaped(
        Item.of('unusualprehistory:dna_fridge'),
        [
            'ABA',
            'CDC',
            'ABA'
        ], {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:blue_ice',
            C: 'minecraft:iron_ingot',
            D: 'unusualprehistory:permafrost'
        }
    )

    //Incubator
    event.shaped(
        Item.of('unusualprehistory:incubator'),
        [
            'ABA',
            'CDC',
            'EFE'
        ], {
            A: 'unusualprehistory:insulator',
            B: 'minecraft:green_stained_glass',
            C: 'minecraft:copper_ingot',
            D: 'unusualprehistory:organic_ooze',
            E: 'minecraft:redstone',
            F: 'eidolon:arcane_gold_ingot'
        }
    )

    //Preserved Flesh Craftable
    event.shaped(
        Item.of('galosphere:preserved_flesh'),
        [
            'ABA',
            'CDC',
            'ABA'
        ], {
            A: 'galosphere:pink_salt_shard',
            B: 'galosphere:cured_membrane',
            C: 'galosphere:salted_jerky',
            D: 'eidolon:zombie_heart',
        }
    )

    //Insulator
    event.shapeless(
        Item.of('unusualprehistory:insulator'),
        [
            'minecraft:light_blue_wool', 'minecraft:magma_cream', 'minecraft:light_gray_wool'
        ]
    )


    // Waystones to Sharestones
    event.shapeless(
        Item.of('waystones:sharestone'),
        [
            '#forge:waystones'
        ]
    )

    // Palette
    event.shaped(
        Item.of('xercapaint:item_palette'),
        [
            'AA ',
            'AA '
        ], {
            A: '#minecraft:wooden_slabs'
        }
    )

    // String from Wool
    event.shapeless(
        Item.of('minecraft:string', 4),
        [
            '#minecraft:wool'
        ]
    )

    // Ooze Uses Tags
    event.shapeless(
        Item.of('unusualprehistory:organic_ooze', 3),
        [
            '#forge:slimeballs',
            "minecraft:bone",
            "#forge:grain"
        ]
    )

    // Uncrafter Requires Nether
    event.shaped(
        Item.of('uncrafter:uncrafter'),
        [
            'ABA',
            'CDC',
            'EEE'
        ], {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:blaze_rod',
            C: 'minecraft:dark_prismarine',
            D: 'minecraft:gilded_blackstone',
            E: 'minecraft:crying_obsidian'
        }
    )


    //Stonecutter recipes for Xerca Woods

    event.stonecutting('kubejs:carved_warped_1', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_2', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_3', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_4', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_5', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_6', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_7', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_8', 'minecraft:stripped_warped_stem')

    event.stonecutting('kubejs:carved_crimson_1', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_2', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_3', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_4', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_5', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_6', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_7', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_8', 'minecraft:stripped_crimson_stem')

    event.stonecutting('kubejs:carved_birch_1', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_2', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_3', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_4', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_5', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_6', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_7', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_8', 'minecraft:stripped_birch_log')

    event.stonecutting('kubejs:carved_acacia_1', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_2', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_3', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_4', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_5', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_6', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_7', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_8', 'minecraft:stripped_acacia_log')

    event.stonecutting('kubejs:carved_spruce_1', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_2', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_3', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_4', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_5', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_6', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_7', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_8', 'minecraft:stripped_spruce_log')

    event.stonecutting('kubejs:carved_dark_oak_1', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_2', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_3', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_4', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_5', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_6', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_7', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_8', 'minecraft:stripped_dark_oak_log')

    // Blast 1 iron ingot into 10 nuggets in a Blast Furnace: 
    event.blasting('create:zinc_block', 'create:raw_zinc_block')

    // All Recipe Removal
    let plushDupe = [
        'perfectplushies:rabbit_plushie',
        'perfectplushies:frog_plushie',
        'perfectplushies:goose_plushie',
        'perfectplushies:duck_plushie',
        'perfectplushies:rubber_duck_plushie',
        'perfectplushies:dolphin_plushie',
        'perfectplushies:cat_plushie',
        'perfectplushies:dog_plushie',
        'perfectplushies:capybara_plushie',
        'perfectplushies:red_ruffed_lemur_plushie',
        'perfectplushies:red_panda_plushie',
        'perfectplushies:raccoon_plushie',
        'perfectplushies:snow_fox_plushie',
        'perfectplushies:red_fox_plushie',
        'plushies:white_rabbit_plushie',
        'plushies:brown_rabbit_plushie',
        'plushies:ocelot_plushie',
        'plushies:bat_plushie',
        'plushies:sniffer_plushie',
        'plushies:goat_plushie',
        'plushies:polar_bear_plushie',
        'plushies:snow_golem_plushie',
        'plushies:pig_plushie',
        'plushies:horse_plushie',
        'plushies:bee_plushie',
        'plushies:cat_plushie',
        'plushies:chicken_plushie',
        'plushies:wolf_plushie',
        'plushies:allay_plushie',
        'plushies:red_fox_plushie',
        'plushies:mooshroom_plushie',
        'plushies:sheep_plushie',
        'plushies:cow_plushie',
        'plushies:llama_plushie',
        'plushies:camel_plushie',
        'perfectplushies:monkey_plushie',
        'perfectplushies:seal_plushie',
        'plushies:panda_plushie',
        'plushies:parrot_plushie',
        'plushies:white_fox_plushie',
        'perfectplushies:elephant_plushie',
        'perfectplushies:lion_cub_plushie',
        'perfectplushies:panda_plushie',
        'perfectplushies:bear_plushie',
        'perfectplushies:reindeer_plushie',
        'perfectplushies:doe_plushie',
        'perfectplushies:turtle_plushie',
        'perfectplushies:hippo_plushie',
        'perfectplushies:mouse_plushie',
        'plushies:killer_bunny_plushie',
        'plushies:iron_golem_plushie',
        'plushies:wandering_trader_plushie',
        'plushies:villager_plushie',
        'plushies:toast_rabbit_plushie',
        'plushies:white_splotched_rabbit_plushie',
        'plushies:yellow_rabbit_plushie',
        'plushies:salt_rabbit_plushie',
        'plushies:black_rabbit_plushie',
        'plushies:skeleton_plushie',
        'plushies:stray_plushie',
        'plushies:skeleton_horse_plushie',
        'plushies:spider_plushie',
        'plushies:cave_spider_plushie',
        'plushies:warden_plushie',
        'plushies:wither_plushie',
        'plushies:phantom_plushie',
        'plushies:silverfish_plushie',
        'plushies:slime_plushie',
        'plushies:zombie_plushie',
        'plushies:husk_plushie',
        'plushies:drowned_plushie',
        'plushies:axolotl_plushie',
        'plushies:dolphin_plushie',
        'plushies:squid_plushie',
        'plushies:glow_squid_plushie',
        'plushies:guardian_plushie',
        'plushies:elder_guardian_plushie',
        'plushies:turtle_plushie',
        'plushies:frog_plushie',
        'plushies:warm_frog_plushie',
        'plushies:cold_frog_plushie',
        'plushies:tadpole_plushie',
        'plushies:salmon_plushie',
        'plushies:cod_plushie',
        'plushies:pufferfish_plushie',
        'plushies:zombie_villager_plushie',
        'plushies:pillager_plushie',
        'plushies:illusioner_plushie',
        'plushies:vindicator_plushie',
        'plushies:evoker_plushie',
        'plushies:witch_plushie',
        'plushies:ravager_plushie',
        'plushies:vex_plushie',
        'plushies:creeper_plushie',
        'plushies:magma_cube_plushie',
        'plushies:enderman_plushie',
        'plushies:endermite_plushie',
        'plushies:shulker_plushie',
        'plushies:dragon_plushie',
        'plushies:wither_skeleton_plushie',
        'plushies:piglin_plushie',
        'plushies:piglin_brute_plushie',
        'plushies:zombiefied_piglin_plushie',
        'plushies:blaze_plushie',
        'plushies:ghast_plushie',
        'plushies:hoglin_plushie',
        'plushies:zoglin_plushie',
        'plushies:strider_plushie'
    ];

    for (const plush of plushDupe) {
        event.shaped(
            Item.of(plush, 2),
            [
                'AAA',
                'ABA',
                'AAA'
            ], {
                A: '#minecraft:wool',
                B: plush
            }
        )
    }

    //Sherd Dupe
    let sherdDupe = [
        'minecraft:prize_pottery_sherd',
        'minecraft:snort_pottery_sherd',
        'gildedsherds:heart_pottery_sherd',
        'minecraft:brewer_pottery_sherd',
        'minecraft:angler_pottery_sherd',
        'minecraft:shelter_pottery_sherd',
        'gildedsherds:prize_pottery_sherd',
        'minecraft:heart_pottery_sherd',
        'gildedsherds:miner_pottery_sherd',
        'minecraft:skull_pottery_sherd',
        'minecraft:mourner_pottery_sherd',
        'minecraft:burn_pottery_sherd',
        'gildedsherds:plenty_pottery_sherd',
        'ohmysherd:snip_pottery_sherd',
        'minecraft:sheaf_pottery_sherd',
        'gildedsherds:mourner_pottery_sherd',
        'gildedsherds:archer_pottery_sherd',
        'minecraft:howl_pottery_sherd',
        'gildedsherds:danger_pottery_sherd',
        'gildedsherds:brewer_pottery_sherd',
        'ohmysherd:invader_pottery_sherd',
        'minecraft:danger_pottery_sherd',
        'gildedsherds:friend_pottery_sherd',
        'gildedsherds:arms_up_pottery_sherd',
        'minecraft:explorer_pottery_sherd',
        'gildedsherds:howl_pottery_sherd',
        'gildedsherds:blade_pottery_sherd',
        'spawn:crown_pottery_sherd',
        'gildedsherds:angler_pottery_sherd',
        'gildedsherds:sheaf_pottery_sherd',
        'gildedsherds:explorer_pottery_sherd',
        'spawn:spade_pottery_sherd',
        'minecraft:archer_pottery_sherd',
        'minecraft:blade_pottery_sherd',
        'gildedsherds:skull_pottery_sherd',
        'gildedsherds:snort_pottery_sherd',
        'minecraft:heartbreak_pottery_sherd',
        'gildedsherds:shelter_pottery_sherd',
        'minecraft:plenty_pottery_sherd',
        'minecraft:friend_pottery_sherd',
        'gildedsherds:burn_pottery_sherd',
        'minecraft:miner_pottery_sherd',
        'gildedsherds:heartbreak_pottery_sherd',
        'minecraft:arms_up_pottery_sherd',
        'ohmysherd:remains_pottery_sherd'
    ];

    for (const sherd of sherdDupe) {
        event.shaped(
            Item.of(sherd, 2),
            [
                ' A ',
                'ABA',
                ' A '
            ], {
                A: 'minecraft:brick',
                B: sherd
            }
        )
    }

})