ServerEvents.recipes(event => {
	// Chest Fallback
	event.shaped(
		Item.of('minecraft:chest'),
		[
			'AAA',
			'A A',
			'AAA'
		], {
			A: '#minecraft:planks'
		}
	)

	// Boat Fallback
	event.shaped(
		Item.of('minecraft:oak_boat'),
		[
			'   ',
			'A A',
			'AAA'
		], {
			A: '#minecraft:planks'
		}
	)
	//Chest Recipe with Logs
	event.shaped(
		Item.of('minecraft:chest', 4),
		[
			'AAA',
			'A A',
			'AAA'
		], {
			A: '#minecraft:logs'
		}
	)

	//Uncompress Honey
	event.shapeless(
		Item.of('minecraft:honeycomb', 4),
		[
			'minecraft:honeycomb_block'
		]
	)

	//Uncompress Quartz
	event.shapeless(
		Item.of('minecraft:quartz', 4),
		[
			'minecraft:quartz_block'
		]
	)

	// String from Wool
	event.shapeless(
		Item.of('minecraft:string', 4),
		[
			'#minecraft:wool'
		]
	)
})