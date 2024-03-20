BlockEvents.rightClicked('block.right_click', event => {
    const { item, level, player, target } = event 
    const { x, y, z } = player
    if (item.getId() == 'kubejs:eel_bait') {
        item.count--
        event.player.tell("You hear a rumbling in the depths.");
        //server.playSound('minecraft:entity.sheep.shear')
        event.server.runCommandSilent(`playsound minecraft:entity.warden.emerge player @a ${x} ${y} ${z} 10`)
        event.server.scheduleInTicks(1.5 * 20, callback => {
            event.block.up.createEntity('aquamirae:eel').mergeNbt({
                PersistenceRequired: 1,
            }).spawn()
        })
    }
})