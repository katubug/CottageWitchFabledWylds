ServerEvents.recipes(event => {

	//Cakes use Cake Dough
	//First, fallback Cake recipe for vanilla
	event.shaped(
		Item.of('minecraft:cake'),
		[
			'AAA',
			'BCB',
			'DDD'
		], {
			A: '#forge:milk/milk_bottle',
			B: '#forge:sugar',
			C: '#forge:cooking_eggs',
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
			A: '#forge:milk/milk_bottle',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat'
		}
	)
	//Coffee Cake
	event.shaped(
		Item.of('farmersrespite:coffee_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: '#forge:milk/milk_bottle',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'farmersrespite:coffee_beans'
		}
	)
	//Angelfish Cake
	event.shaped(
		Item.of('rainbowreef:angelfish_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: '#forge:milk/milk_bottle',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'rainbowreef:raw_angelfish'
		}
	)
	//Sakura Cheesecake
	event.shaped(
		Item.of('trailandtales_delight:cherry_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: '#forge:milk/milk_bottle',
			B: 'trailandtales_delight:cherry_cheese_slice',
			C: 'bakery:cake_dough',
			D: 'trailandtales_delight:cherry_cheese_slice',
			E: 'trailandtales_delight:cherry_petal'
		}
	)
	//Carrot Cake
	event.shaped(
		Item.of('hearthandharvest:carrot_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: '#forge:milk/milk_bottle',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'minecraft:carrot'
		}
	)
	//Vanilla Cake
	event.shaped(
		Item.of('mysticsbiomes:vanilla_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: 'mysticsbiomes:vanilla_milk_bucket',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:vanilla_beans'
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
			E: 'mysticsbiomes:sweet_strawberry'
		}
	)
	//Milk Chocolate Cake
	event.shaped(
		Item.of('mysticsbiomes:chocolate_cake'),
		[
			'B D',
			'ACA'
		], {
			A: 'mysticsbiomes:chocolate_milk_bucket',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat'
		}
	)
	//pink Cake
	event.shaped(
		Item.of('mysticsbiomes:pink_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#forge:milk/milk_bottle',
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
			A: '#forge:milk/milk_bottle',
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
			A: '#forge:milk/milk_bottle',
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
			A: '#forge:milk/milk_bottle',
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
			A: '#forge:milk/milk_bottle',
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
			A: '#forge:milk/milk_bottle',
			B: '#forge:sugar',
			C: 'bakery:cake_dough',
			D: '#forge:wheat',
			E: 'mysticsbiomes:purple_egg'
		}
	)

	//Pies!
	//Chocolate Pie
	event.shaped(
		Item.of('farmersdelight:chocolate_pie'),
		[
			'DDD',
			'CCC',
			'BAB'
		], {
			A: 'farmersdelight:pie_crust',
			B: '#forge:sugar',
			C: '#forge:milk/milk_bottle',
			D: '#forge:chocolate'
		}
	)
	//Chillberry Pie
	event.shaped(
		Item.of('hexalia:chillberry_pie'),
		[
			'DCD',
			'BAB'
		], {
			A: 'farmersdelight:pie_crust',
			B: '#forge:sugar',
			C: '#forge:cooking_eggs',
			D: 'hexalia:chillberries'
		}
	)
	//Angel Tart
	event.shaped(
		Item.of('rainbowreef:dwarf_angelfish_tarts'),
		[
			'DC ',
			'BA '
		], {
			A: 'farmersdelight:pie_crust',
			B: '#forge:sugar',
			C: '#forge:cooking_eggs',
			D: 'rainbowreef:raw_dwarf_angelfish'
		}
	)
	//Cherry Pie
	event.shaped(
		Item.of('mysticsbiomes:cherry_pie'),
		[	
			'C',
			'D',
			'A '
		], {
			A: 'farmersdelight:pie_crust',
			C: 'minecraft:wheat',
			D: 'mysticsbiomes:cherry_jam'
		}
	)
	//Peach Pie
	event.shaped(
		Item.of('mysticsbiomes:peach_pie'),
		[
			'C',
			'D',
			'A '
		], {
			A: 'farmersdelight:pie_crust',
			C: 'minecraft:wheat',
			D: 'mysticsbiomes:peach_jam'
		}
	)

	//Cookies!
	//Sweet Berry Glazed Cookie
	event.shaped(
		Item.of('bakery:sweetberry_glazed_cookie'),
		[
			'BA'
		], {
			A: 'farmersdelight:honey_cookie',
			B: 'bakery:sweetberry_jam'
		}
	)
	//Lemon Cookie
	event.shaped(
		Item.of('fruitsdelight:lemon_cookie', 8),
		[
			'BA',
			'BC'
		], {
			A: 'minecraft:wheat',
			B: 'fruitsdelight:lemon',
			C: '#forge:milk/milk_bottle'
		}
	)
	//Chocolate Glazed Cookie
	event.shaped(
		Item.of('bakery:chocolate_glazed_cookie'),
		[
			'BA'
		], {
			A: 'farmersdelight:honey_cookie',
			B: 'bakery:chocolate_jam'
		}
	)
	//Strawberry Glazed Cookie
	event.shaped(
		Item.of('bakery:strawberry_glazed_cookie'),
		[
			'BA'
		], {
			A: 'farmersdelight:honey_cookie',
			B: 'bakery:strawberry_jam'
		}
	)
	//Moonberry Cookie
	event.shaped(
		Item.of('hexalia:moon_berry_cookie', 8),
		[
			'BA',
			'AB'
		], {
			A: 'minecraft:wheat',
			B: 'hexalia:moon_berries'
		}
	)
	//Basslet Cookie
	event.shaped(
		Item.of('rainbowreef:basslet_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'rainbowreef:raw_basslet'
		}
	)
	//Idol Cookie
	event.shaped(
		Item.of('rainbowreef:idol_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'rainbowreef:raw_moorish_idol'
		}
	)
	//Cranberry Cookie
	event.shaped(
		Item.of('fruitsdelight:cranberry_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'fruitsdelight:cranberry'
		}
	)
	//Bayberry Cookie
	event.shaped(
		Item.of('fruitsdelight:bayberry_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'fruitsdelight:bayberry'
		}
	)
	//Torchberry Cookie
	event.shaped(
		Item.of('twilightdelight:torchberry_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'twilightforest:torchberries'
		}
	)
	//Peanut Butter Cookie
	event.shaped(
		Item.of('hearthandharvest:peanut_butter_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'hearthandharvest:peanut_butter'
		}
	)
	//Persimmon Cookie
	event.shaped(
		Item.of('fruitsdelight:persimmon_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'fruitsdelight:dried_persimmon'
		}
	)
	//Sweet Berry Cookie
	event.shaped(
		Item.of('farmersdelight:sweet_berry_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'minecraft:sweet_berries'
		}
	)
	//Green Tea Cookie
	event.shaped(
		Item.of('farmersrespite:green_tea_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'herbalbrews:dried_green_tea'
		}
	)
})