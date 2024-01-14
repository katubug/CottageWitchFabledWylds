BlockEvents.rightClicked('block.right_click', event => {
    if (!event.player.stages.has('aether_torch') && event.level.dimension == 'aether:the_aether') {
        // Add the stage
        event.player.stages.add('aether_torch')
        const { player, hand, item} = event;
        if (hand != 'MAIN_HAND') return;
        if (item.id == 'minecraft:torch') {
            //event.player.tell("Haha!");
            let cmd = `/ftbquests change_progress ${player.username} complete 7F99DA7EA85CBD2B`
            console.log(cmd)
            event.server.runCommand(cmd)
    }
}
});