ServerEvents.recipes(event => {
	//Feeding Upgrades
	event.shaped(
		Item.of('sophisticatedbackpacks:advanced_feeding_upgrade'),
		[
			' A ',
			'BCB',
			'DDD'
		], {
			A: 'minecraft:diamond',
			B: 'minecraft:gold_ingot',
			C: 'sophisticatedbackpacks:feeding_upgrade',
			D: 'minecraft:redstone_block'
		}
	)

	event.shaped(
		Item.of('sophisticatedbackpacks:feeding_upgrade'),
		[
			' A ',
			'BCD',
			' E '
		], {
			A: 'minecraft:golden_carrot',
			B: 'minecraft:enchanted_golden_apple',
			C: 'solonion:golden_lunchbox',
			D: '#forge:ender_pearls',
			E: 'minecraft:glistering_melon_slice'
		}
	)
	// New EXP Pump Upgrade 
	event.shaped(
		Item.of('sophisticatedbackpacks:xp_pump_upgrade'),
		[
			'BCB',
			'DAD',
			'BCB'
		], {
			A: 'sophisticatedbackpacks:upgrade_base',
			B: 'minecraft:redstone',
			C: 'minecraft:ender_eye',
			D: 'minecraft:experience_bottle'
		}
	)

})