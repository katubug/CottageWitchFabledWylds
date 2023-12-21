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
        ],
        {
            A: 'minecraft:chain',
            B: 'minecraft:iron_ingot',
            C: '#forge:souls',
            D: 'minecraft:soul_soil'
        }
    )

    //Recipe Replacements
    //Strawberries
    event.replaceInput(
        { input: 'mysticsbiomes:strawberry' }, // Arg 1: the filter
        'mysticsbiomes:strawberry',            // Arg 2: the item to replace
        'bakery:strawberry'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )


    // Cheaper Post Box
    event.shaped(
        Item.of('mighty_mail:post_box'),
        [
            'ABA',
            'BCB',
            ' D '
        ],
        {
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
        ],
        {
            A: 'crabbersdelight:pearl',
            B: 'minecraft:gold_nugget',
            C: 'minecraft:gold_ingot'
        }
    )

    //Slime Balls
    event.shapeless(
        Item.of('minecraft:slime_ball'), 
        [ 
            {tag: 'forge:dyes/lime'},
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
            ' A ',
            'ABA',
            'CCC'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'forbidden_arcanus:edelwood_oil',
            C: 'minecraft:iron_nugget'
        }
    )

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

    // Building Gadgets

    //Building Gadget
    event.shaped(
        Item.of('buildinggadgets2:gadget_building', '{energy:500000,uuid:[I;-263423233,125847530,-2089373063,1330860108]}'),
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

    //Exchanging Gadget
    event.shaped(
        Item.of('buildinggadgets2:gadget_exchanging', '{energy:500000,uuid:[I;2068449905,-191871022,-1763510008,-1044204975]}'),        [
            'ABA',
            'CDC',
            'ADA'
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
            A: 'minecraft:ender_eye',
            B: 'minecraft:blue_ice',
            C: 'endermanoverhaul:icy_pearl'
        }
    )

    event.smithing(
        'easy_mob_farm:netherite_mob_farm_template',  // arg 1: output
        'easy_mob_farm:gold_mob_farm_template', // arg 2: the item to be upgraded
        'minecraft:netherite_ingot',   // arg 3: the upgrade item
        'minecraft:diamond'
      )

  })

  