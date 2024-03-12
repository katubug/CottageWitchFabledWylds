BlockEvents.rightClicked('block.right_click', event => {
    const { item, level, player } = event 
    //const { x, y, z } = player
    if (item.getId() == 'kubejs:eel_bait') {
        item.count--
        //event.player.playSound('minecraft:block.beacon.activate', 1, 1); //not working
        event.player.tell("You hear a rumbling in the depths.");
        event.server.scheduleInTicks(1 * 20, callback => {
            event.block.up.createEntity('aquamirae:eel').mergeNbt({
                PersistenceRequired: 1,
            }).spawn()
        })
    }
})