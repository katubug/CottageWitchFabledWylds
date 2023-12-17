ServerEvents.tags('item', event => {

    event.add(
        'forge:salt', 'meadow:alpine_salt'
    )

    event.add(
        'forge:flowers',
        'minecraft:dandelion', 
        'minecraft:poppy', 
        'minecraft:blue_orchid', 
        'minecraft:allium', 
        'minecraft:azure_bluet', 
        'minecraft:red_tulip', 
        'minecraft:orange_tulip', 
        'minecraft:white_tulip', 
        'minecraft:pink_tulip', 
        'minecraft:oxeye_daisy', 
        'minecraft:cornflower', 
        'minecraft:lily_of_the_valley', 
        'minecraft:torchflower', 
        'minecraft:wither_rose', 
        'minecraft:spore_blossom', 
        'minecraft:sunflower', 
        'minecraft:lilac', 
        'minecraft:rose_bush', 
        'minecraft:peony', 
        'regions_unexplored:cactus_flower', 
        'aether:purple_flower', 
        'aether:white_flower', 
        'eidolon:oanna_bloom', 
        'snifferent:spineflower', 
        'regions_unexplored:orange_coneflower', 
        'regions_unexplored:purple_coneflower', 
        'regions_unexplored:hyacinth_flowers', 
        'regions_unexplored:blue_magnolia_flowers', 
        'regions_unexplored:pink_magnolia_flowers', 
        'regions_unexplored:white_magnolia_flowers',
    )

    event.add(
        'forge:souls',
        'forbidden_arcanus:enchanted_soul', 
        'forbidden_arcanus:corrupt_soul', 
        'forbidden_arcanus:soul',
        'nameless_trinkets:miners_soul',
        'endrem:undead_soul'
    )

    event.add(
        'noflyzone:disallowed_flying_devices',
        'nameless_trinkets:ethereal_wings', 
        'relics:blazing_flask'
    )

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

    event.add(
        'forge:typewriters',
        'candlelight:typewriter_iron', 
        'candlelight:typewriter_copper'
    )

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


    // Tag Removal
    event.removeAllTagsFrom('bakery:dough',
    'candlelight:dough',
    'create:dough')

})