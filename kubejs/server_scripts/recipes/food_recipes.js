ServerEvents.recipes(event => {

	//Witchy Compost
	event.shapeless(
		Item.of('farmersdelight:organic_compost', 2),
		[
			'#forge:dirt',
			'#supplementaries:straw',
			'#supplementaries:straw',
			'minecraft:bone_meal',
			'minecraft:bone_meal',
			'#forge:compost',
			'#forge:compost',
			'#forge:compost',
			'#forge:compost'
		]
	)

	//Slime Balls
	event.shapeless(
		Item.of('minecraft:slime_ball'),
		['#forge:dyes/lime',
			'farmersdelight:wheat_dough'
		]
	)

	//Dough
	event.shapeless(
		Item.of('farmersdelight:wheat_dough', 3),
		[
			'#forge:flour',
			'#forge:flour',
			'minecraft:water_bucket',
			'farm_and_charm:yeast'
		]
	)

	//Recipes Use Cheese ======================================================
	//Cheeseburger from Scratch
	event.shapeless(
		Item.of('delightful:cheeseburger'),
		[
			'#forge:bread_or_bun',
			'#forge:cooked_beef',
			'#forge:crops/cabbage',
			'#forge:cheese_slices',
			'farmersdelight:tomato',
			'farmersdelight:onion'
		]
	)

	//Cheeseburger from burger
	event.shapeless(
		Item.of('delightful:cheeseburger'),
		[
			'farmersdelight:hamburger',
			'#forge:cheese_slices',
		]
	)

	//Deluxe Cheeseburger from Cheeseburger
	event.shapeless(
		Item.of('delightful:deluxe_cheeseburger'),
		[
			'delightful:cheeseburger',
			'#forge:cheese_slices',
			'#forge:cooked_beef',
			'#forge:cooked_bacon'
		]
	)

	//Deluxe Cheeseburger from Scratch
	event.shapeless(
		Item.of('delightful:deluxe_cheeseburger'),
		[
			'#forge:bread_or_bun',
			'#forge:cooked_beef',
			'#forge:cooked_beef',
			'#forge:crops/cabbage',
			'#forge:cheese_slices',
			'#forge:cheese_slices',
			'farmersdelight:tomato',
			'farmersdelight:onion',
			'#forge:cooked_bacon'
		]
	)
	//==================================================================

	//Dough conversion
	event.shapeless(
		Item.of('farmersdelight:wheat_dough'),
		[
			'farm_and_charm:dough'
		]
	)

	//Dough conversion 2
	event.shapeless(
		Item.of('farmersdelight:wheat_dough'),
		[
			'create:dough'
		]
	)

	//Dough conversion 3
	event.shapeless(
		Item.of('farmersdelight:wheat_dough'),
		[
			'cornexpansion:corn_dough'
		]
	)

	//Raw Pasta conversion
	event.shapeless(
		Item.of('farmersdelight:raw_pasta'),
		[
			'farm_and_charm:raw_pasta'
		]
	)
})