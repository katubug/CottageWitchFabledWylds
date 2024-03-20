ItemEvents.entityInteracted( event => {
    //main hand only
    const { player, hand, item, target, server } = event;
    const { x, y, z } = player;
    if (hand != 'MAIN_HAND') return;
    if (item.id == 'minecraft:shears' && target.type == 'unusualprehistory:veloci') {
        //target.playSound('minecraft:entity.sheep.shear')
        event.server.runCommandSilent(`playsound minecraft:entity.sheep.shear player @a ${x} ${y} ${z} 10`)
        event.server.runCommandSilent(`give ${player.username} unusualprehistory:raptor_feathers`)
        //block.popItem('unusualprehistory:raptor_feathers')
        /*
        let itemEntity = event.player.createEntity("item")
        itemEntity.item = 'unusualprehistory:raptor_feathers'
        itemEntity.item.count = 1
        itemEntity.spawn()
        */
    }
});