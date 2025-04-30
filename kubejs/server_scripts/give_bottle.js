ItemEvents.foodEaten(event => {

    let bottlelessTeas = ['herbalbrews:green_tea', 'herbalbrews:black_tea', 'herbalbrews:hibiscus_tea', 'herbalbrews:lavender_tea', 'herbalbrews:coffee', 'herbalbrews:milk_coffee', 'herbalbrews:rooibos_tea', 'herbalbrews:yerba_mate_tea', 'farm_and_charm:ribwort_tea', 'farm_and_charm:strawberry_tea', 'ends_delight:bubble_tea', 'ends_delight:chorus_fruit_milk_tea', 'ends_delight:chorus_flower_tea', 'fruitsdelight:hawberry_tea', 'fruitsdelight:mango_tea', 'fruitsdelight:peach_tea', 'fruitsdelight:lychee_cherry_tea', 'fruitsdelight:mangosteen_tea', 'herbalbrews:oolong_tea'];

    const {player, server} = event;
    if (bottlelessTeas.includes(event.item.id)) {
            event.player.give(Item.of('minecraft:glass_bottle'))
    }
})