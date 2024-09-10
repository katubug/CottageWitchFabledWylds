BlockEvents.rightClicked('block.right_click', event => {
	//main hand only
	const {
		block,
		hand,
		item
	} = event;
	if (hand != 'MAIN_HAND') return;
	if (item.id == 'minecraft:bone_meal' && block.hasTag(
			'minecraft:small_flowers') && !block.hasTag(
			'minecraft:tall_flowers')) {
		item.count--
		block.popItem(block.id)
		//target.playSound('minecraft:item.bone_meal.use')
		event.server.runCommandSilent(
			`playsound minecraft:item.bone_meal.use block @a ${block.x} ${block.y} ${block.z}`
			)
	}
});