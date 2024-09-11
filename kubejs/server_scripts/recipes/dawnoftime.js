ServerEvents.recipes(event => {

	//Dawn of Time Recipes
	event.shapeless(
		Item.of('dawnoftimebuilder:camellia_flower_pot'),
		[
			'farmersrespite:tea_seeds',
			'minecraft:flower_pot'
		]
	)

	event.shapeless(
		Item.of('dawnoftimebuilder:maize_flower_pot'),
		[
			'#forge:crops/corn',
			'minecraft:flower_pot'
		]
	)

	event.shapeless(
		Item.of('dawnoftimebuilder:grape_seeds_flower_pot'),
		[
			'#forge:grapes',
			'minecraft:flower_pot'
		]
	)
})