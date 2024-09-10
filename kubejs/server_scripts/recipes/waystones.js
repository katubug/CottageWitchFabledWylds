ServerEvents.recipes(event => {

	// Waystones to Sharestones
	event.shapeless(
		Item.of('waystones:sharestone'),
		[
			'#forge:waystones'
		]
	)
	// Warp Scrolls to Warp Stones
	event.shaped(
		Item.of('waystones:warp_stone'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'waystones:warp_scroll',
			B: 'minecraft:emerald'
		}
	)
})