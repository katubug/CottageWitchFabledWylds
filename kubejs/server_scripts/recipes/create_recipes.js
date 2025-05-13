ServerEvents.recipes(e => {

	e.recipes.createMilling([
		'4x minecraft:quartz', //output 1
		Item.of('minecraft:quartz').withChance(
			0.5) //output 2, with chance
	], 'minecraft:smooth_quartz') //input

	e.recipes.createMilling([
		'2x spelunkery:salt', //output 1
		Item.of('spelunkery:salt').withChance(
			0.5) //output 2, with chance
	], 'meadow:alpine_salt_ore') //input

	//Sinister Carrot haunting
	e.recipes.create.haunting('domesticationinnovation:sinister_carrot',
		'minecraft:golden_carrot')

	//Make Myalite via haunting
	e.recipes.create.haunting('quark:myalite', 'minecraft:packed_mud')

})