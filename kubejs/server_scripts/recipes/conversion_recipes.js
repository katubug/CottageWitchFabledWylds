ServerEvents.recipes(event => {
	//Sunflower conversion
	event.shapeless(
		Item.of('minecraft:sunflower'),
		[
			'spawn:sunflower'
		]
	)
})