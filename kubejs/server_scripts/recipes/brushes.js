ServerEvents.recipes(event => {
	// Brushes Use Tags
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

	event.shaped(
		Item.of('betterarcheology:iron_brush'),
		[
			' A ',
			' B ',
			' C '
		], {
			A: '#forge:feathers',
			B: 'minecraft:iron_ingot',
			C: '#forge:rods/wooden'
		}
	)

	event.shaped(
		Item.of('betterarcheology:diamond_brush'),
		[
			' A ',
			' B ',
			' C '
		], {
			A: '#forge:feathers',
			B: 'minecraft:diamond',
			C: '#forge:rods/wooden'
		}
	)
})