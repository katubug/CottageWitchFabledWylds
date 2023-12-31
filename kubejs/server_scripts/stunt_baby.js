ItemEvents.entityInteracted( event => {
    console.log(event.level)
    //main hand only
    const { entity, hand, item, target } = event;
    if (hand != 'MAIN_HAND') return;
    if (item.id == 'minecraft:poisonous_potato' && target.setAge && target.isBaby()) {
        //event.player.tell("Haha, you've been poisoned!");
        item.count--
        target.setAge(-2147483648)
        target.playSound('aether:block.water.evaporate')
    }
});