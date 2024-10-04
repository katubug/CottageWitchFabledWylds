ServerEvents.recipes(event => {
	event.shaped(
		Item.of('minecraft:brush'),
		[
			' A ',
			' B ',
			' C '
		], {
			A: '#forge:feathers',
			B: 'minecraft:copper_ingot',
			C: '#forge:rods/wooden'
		}
	)
})