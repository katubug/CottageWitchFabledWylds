LootJS.modifiers((event) => {
    //event.enableLogging();
    /*const modifiers = event.getGlobalModifiers();
    modifiers.forEach((modifier) => {
        console.log(modifier)
    });*/
    
    //Remove Junk from Abandoned Mineshafts
	event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').removeLoot('farmersdelight:skillet')
	event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').removeLoot('supplementaries:rope')
	event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').removeLoot('farmersdelight:rope')
	event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').removeLoot('farmersdelight:cooking_pot')
	event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').removeLoot('vegandelight:tofu')

    //Remove Junk from Bastion Hoglin Stables
    event.addLootTableModifier('minecraft:chests/bastion_hoglin_stable').removeLoot('vegandelight:cooked_tofu')
    event.addLootTableModifier('minecraft:chests/bastion_hoglin_stable').removeLoot('vegandelight:smoked_tofu')

    //Remove Junk from Woodland Mansions
    event.addLootTableModifier('minecraft:chests/woodland_mansion').removeLoot('minecraft:beetroot_seeds')

    //Remove all Plushies from Chests
    event.removeGlobalModifier('@perfectplushies')

    //Remove all Photographs from Chests
    event.removeGlobalModifier('@exposure')

    event.addLootTypeModifier(LootType.CHEST).removeLoot([
        'capsule:capsule',
        'vegandelight:salt',
        'tombstone:bag_of_seeds',
        'create:dough',
        'farm_and_charm:bacon',
        'farm_and_charm:beetroot_bag',
        'farm_and_charm:carrot_bag',
        'farm_and_charm:chicken_parts',
        'farm_and_charm:dough',
        'farm_and_charm:fertilized_farmland',
        'farm_and_charm:fertilized_soil',
        'farm_and_charm:lamb_ham',
        'farm_and_charm:minced_beef',
        'farm_and_charm:nettle_tea_cup',
        'farm_and_charm:onion',
        'farm_and_charm:onion_bag',
        'farm_and_charm:plow',
        'farm_and_charm:potato_bag',
        'farm_and_charm:raw_pasta',
        'farm_and_charm:ribwort_tea_cup',
        'farm_and_charm:rotten_tomato',
        'farm_and_charm:strawberry_tea_cup',
        'farm_and_charm:supply_cart',
        'farm_and_charm:tomato',
        'farm_and_charm:tomato_bag',
        'farm_and_charm:tomato_seeds',
        'farm_and_charm:wild_onions',
        'farm_and_charm:wild_tomatoes',
        'forbidden_arcanus:bat_wing',
        'forbidden_arcanus:quantum_catcher',
        'nameless_trinkets:electric_paddle',
        'nameless_trinkets:explosion_proof_jacket',
        'nameless_trinkets:four_leaf_clover',
        'nameless_trinkets:ghast_eye',
        'nameless_trinkets:gods_crown',
        'nameless_trinkets:cracked_crown',
        'nameless_trinkets:missing_page',
        'nameless_trinkets:mysterious_trinket',
        'nameless_trinkets:sleeping_pills',
        'nameless_trinkets:what_magnet',
        'reliquary:midas_touchstone',
        'reliquary:pyromancer_staff',
        'reliquary:rending_gale',
        'reliquary:rod_of_lyssa',
        'reliquary:zombie_heart',
        'supplementaries:rope',
        'forbidden_arcanus:orb_of_temporary_flight'
      ])
})
