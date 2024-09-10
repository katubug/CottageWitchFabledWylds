ServerEvents.recipes(event => {
	// Oil Lantern
	event.shaped(
		Item.of('meadow:oil_lantern'),
		[
			'DAD',
			'ABA',
			'CCC'
		], {
			A: 'minecraft:iron_ingot',
			B: 'forbidden_arcanus:edelwood_oil',
			C: 'minecraft:iron_nugget',
			D: 'eidolon:enchanted_ash'
		}
	)
	//Cheesecake recipe because it's missing?
	event.shaped(
		Item.of('meadow:cheesecake', 4),
		[
			'ABA',
			'CCC'
		], {
			A: '#forge:eggs',
			B: '#forge:cheeses',
			C: '#forge:wheat'
		}
	)

	//cheese tart recipe because same
	event.shaped(
		Item.of('meadow:cheese_tart', 4),
		[
			'ABD',
			'CCC'
		], {
			A: '#forge:eggs',
			B: '#forge:cheeses',
			C: '#forge:wheat',
			D: '#forge:milk'
		}
	)

	//Cakes use Cake Dough
	//First, fallback Cake recipe for vanilla
	event.shaped(
		Item.of('minecraft:cake'),
		[
			'AAA',
			'BCB',
			'DDD'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: '#forge:eggs',
			D: '#forge:wheat'
		}
	)
	//Basic Cake
	event.shaped(
		Item.of('minecraft:cake'),
		[
			'B D',
			'ACA'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat'
		}
	)
	//Strawberry Cake
	event.shaped(
		Item.of('mysticsbiomes:strawberry_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: 'mysticsbiomes:strawberry_milk_bucket',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'bakery:strawberry'
		}
	)
	//pink Cake
	event.shaped(
		Item.of('mysticsbiomes:pink_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:pink_egg'
		}
	)
	//orange Cake
	event.shaped(
		Item.of('mysticsbiomes:orange_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:orange_egg'
		}
	)
	//yellow Cake
	event.shaped(
		Item.of('mysticsbiomes:yellow_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:yellow_egg'
		}
	)
	//lime Cake
	event.shaped(
		Item.of('mysticsbiomes:lime_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:lime_egg'
		}
	)
	//cyan Cake
	event.shaped(
		Item.of('mysticsbiomes:cyan_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:cyan_egg'
		}
	)
	//purple Cake
	event.shaped(
		Item.of('mysticsbiomes:purple_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#forge:milk',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:purple_egg'
		}
	)
})