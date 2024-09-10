BlockEvents.rightClicked('block.right_click', event => {
	if (!event.player.stages.has('aether_torch') && event.level
		.dimension == 'aether:the_aether') {
		// Add the stage
		event.player.stages.add('aether_torch')
		const {
			player,
			hand,
			item
		} = event;
		if (hand != 'MAIN_HAND') return;
		if (item.id == 'minecraft:torch') {
			let cmd =
				`/ftbquests change_progress ${player.username} complete 7F99DA7EA85CBD2B`
			console.log(cmd)
			event.server.runCommand(cmd)
		}
	}
});

ItemEvents.entityInteracted('unusualprehistory:smilodon_embryo', (event) => {
	const {
		player,
		hand,
		target,
		target: {
			x,
			y,
			z
		}
	} = event;
	if (target.type != 'minecraft:ocelot') return;
	console.log(event.level)
	player.swing(hand, true);
	event.server.runCommandSilent(
		`playsound minecraft:item.honeycomb.wax_on player @a ${x} ${y} ${z} 10`
		)
	let cmd =
		`/ftbquests change_progress ${player.username} complete 2170FD93A7FBB5B5`
	console.log(cmd)
	event.server.runCommand(cmd)
});