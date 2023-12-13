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

  })

