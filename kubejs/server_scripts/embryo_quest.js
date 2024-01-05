ItemEvents.entityInteracted( event => {
    console.log(event.level)
    //main hand only
    const { player, hand, item, target, server } = event;
    if (hand != 'MAIN_HAND') return;
    if (item.id == 'unusualprehistory:smilodon_embryo' && target.type == 'minecraft:ocelot') {
        //event.player.tell("Haha, you've been poisoned!");
        target.playSound('aether:block.water.evaporate')
        let cmd = `/ftbquests change_progress ${player.username} complete 7D2C4EE140251790`
        console.log(cmd)
        event.server.runCommand(cmd)
    }
});