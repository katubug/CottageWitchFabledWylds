ItemEvents.entityInteracted('unusualprehistory:smilodon_embryo', (event) => {
    const { 
        player, 
        hand, 
        item, 
        target, 
        target: { x, y, z },
        server 
    } = event;
    if (target.type != 'minecraft:ocelot' ) return;
        console.log(event.level)
        player.swing(hand, true);
        event.server.runCommandSilent(`playsound minecraft:item.honeycomb.wax_on player @a ${x} ${y} ${z} 10`)
        let cmd = `/ftbquests change_progress ${player.username} complete 2170FD93A7FBB5B5`
        console.log(cmd)
        event.server.runCommand(cmd)
});