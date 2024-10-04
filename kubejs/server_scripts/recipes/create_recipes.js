ServerEvents.recipes(e => {
	e.recipes.create.compacting('meadow:cheese_block', [
		Fluid.of('minecraft:milk', 1000),
		'meadow:rennet'
	]).heated()

	e.recipes.create.compacting('meadow:sheep_cheese_block', [
		'meadow:wooden_sheep_milk_bucket',
		'meadow:rennet'
	]).heated()

	e.recipes.create.compacting('meadow:amethyst_cheese_block', [
		'meadow:wooden_amethyst_milk_bucket',
		'meadow:rennet'
	]).heated()

	e.recipes.create.compacting('meadow:buffalo_cheese_block', [
		'meadow:wooden_buffalo_milk_bucket',
		'meadow:rennet'
	]).heated()

	e.recipes.create.compacting('meadow:goat_cheese_block', [
		'meadow:wooden_goat_milk_bucket',
		'meadow:rennet'
	]).heated()

	e.recipes.create.compacting('meadow:warped_cheese_block', [
		'meadow:wooden_warped_milk_bucket',
		'meadow:rennet'
	]).heated()

	e.recipes.createMilling([
		'4x minecraft:quartz', //output 1
		Item.of('minecraft:quartz').withChance(
			0.5) //output 2, with chance
	], 'minecraft:smooth_quartz') //input

	e.recipes.createMilling([
		'2x meadow:alpine_salt', //output 1
		Item.of('meadow:alpine_salt').withChance(
			0.5) //output 2, with chance
	], 'meadow:alpine_salt_ore') //input

	//Sinister Carrot haunting
	e.recipes.create.haunting('domesticationinnovation:sinister_carrot',
		'minecraft:golden_carrot')

	//Make Myalite via haunting
	e.recipes.create.haunting('quark:myalite', 'minecraft:packed_mud')

})