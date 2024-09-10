ServerEvents.recipes(event => {
	// Easy Mob Farm Upgrades
	event.shaped(
		Item.of('easy_mob_farm:gold_mob_farm_template'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'minecraft:gold_ingot',
			B: 'easy_mob_farm:iron_mob_farm_template'
		}
	)

	event.shaped(
		Item.of('easy_mob_farm:iron_mob_farm_template'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'minecraft:iron_ingot',
			B: 'easy_mob_farm:copper_mob_farm_template'
		}
	)

	event.smithing(
		'easy_mob_farm:netherite_mob_farm_template', // arg 1: output
		'easy_mob_farm:gold_mob_farm_template', // arg 2: the item to be upgraded
		'minecraft:netherite_ingot', // arg 3: the upgrade item
		'minecraft:diamond'
	)
})