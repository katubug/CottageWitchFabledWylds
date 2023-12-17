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

  })

