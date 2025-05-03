ServerEvents.recipes(event => {
	//Sunflower conversion
	event.shapeless(
		Item.of('minecraft:sunflower'),
		[
			'spawn:sunflower'
		]
	)

	//Coffee conversion
	event.shapeless(
		Item.of('farmersrespite:coffee_beans'),
		[
			'herbalbrews:coffee_beans'
		]
	)
})