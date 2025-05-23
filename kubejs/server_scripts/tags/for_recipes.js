ServerEvents.tags('item', event => {

	//Souls for Soul Receptacle
	event.add(
		'forge:souls',
		'forbidden_arcanus:enchanted_soul',
		'forbidden_arcanus:corrupt_soul',
		'forbidden_arcanus:soul',
		'nameless_trinkets:miners_soul',
		'endrem:undead_soul'
	)

	//Cherry for Mystic's Biomes Recipes
	event.add('forge:fruits/cherry',
		'vinery:cherry')

	// Pearls for Pearl Necklaces etc
	event.add('forge:pearls',
		'unusualprehistory:opalescent_pearl',
		'abyssal_decor:white_pearl',
		'crabbersdelight:pearl',
		'crittersandcompanions:pearl'
	)

	// Eyes tags for Enderman Overhaul recipes plus an FTB Filter system quest
	event.add('forge:eyes',
		'endrem:evil_eye',
		'endrem:cursed_eye',
		'endrem:rogue_eye',
		'endrem:old_eye',
		'endrem:nether_eye',
		'endrem:lost_eye',
		'endrem:corrupted_eye',
		'endrem:cold_eye',
		'endrem:black_eye',
		'endrem:guardian_eye',
		'endrem:magical_eye',
		'endrem:wither_eye',
		'endrem:witch_eye',
		'endrem:undead_eye',
		'endrem:exotic_eye'
	)

	//Strawberry tagging for Bakery Recipes
	event.add('forge:fruits/strawberries',
		'mysticsbiomes:sweet_strawberry')

	//Vinery Grapes for Dawn of Time stuff
	event.add(
		'forge:grapes',
		'vinery:taiga_grapes_white',
		'vinery:taiga_grapes_red',
		'vinery:savanna_grapes_white',
		'vinery:red_grape',
		'vinery:jungle_grapes_white',
		'vinery:savanna_grapes_red',
		'vinery:jungle_grapes_red',
		'vinery:white_grape'
	)

	// Organic materials for Compost Recipe
	event.add('forge:compost',
		'farmersdelight:tree_bark',
		'minecraft:rotten_flesh',
		'mysticsbiomes:maple_leaf_pile',
		'mysticsbiomes:orange_maple_leaf_pile',
		'mysticsbiomes:yellow_maple_leaf_pile',
		'regions_unexplored:maple_leaf_pile',
		'regions_unexplored:red_maple_leaf_pile',
		'regions_unexplored:orange_maple_leaf_pile',
		'regions_unexplored:enchanted_birch_leaf_pile',
		'regions_unexplored:silver_birch_leaf_pile',
		'spawn:fallen_leaves',
	)

	// Dirt for Compost Recipe
	event.add('forge:dirt',
		'minecraft:dirt',
		'minecraft:coarse_dirt',
		'minecraft:rooted_dirt',
		'minecraft:podzol')

	//Tropical Ball is Slime for Unusual Prehistory
	event.add('forge:slimeballs',
		'earthmobsmod:tropical_ball')

	//Salmonberries
	event.add('forge:fruits/salmonberries',
		'regions_unexplored:salmonberry'
	)

	//Jam Tagging
	event.add('forge:jams',
		'fruitsdelight:apple_jelly',
		'fruitsdelight:blueberry_jelly',
		'fruitsdelight:glowberry_jelly',
		'fruitsdelight:hamimelon_jelly',
		'fruitsdelight:melon_jelly',
		'fruitsdelight:hawberry_jelly',
		'fruitsdelight:lychee_jelly',
		'fruitsdelight:mango_jelly',
		'fruitsdelight:orange_jelly',
		'fruitsdelight:peach_jelly',
		'fruitsdelight:pear_jelly',
		'fruitsdelight:persimmon_jelly',
		'fruitsdelight:pineapple_jelly',
		'fruitsdelight:lemon_jelly',
		'fruitsdelight:cranberry_jelly',
		'fruitsdelight:mangosteen_jelly',
		'fruitsdelight:sweetberry_jelly',
		'fruitsdelight:chorus_jelly',
		'bakery:strawberry_jam',
		'bakery:sweetberry_jam',
		'bakery:glowberry_jam',
		'bakery:apple_jam'
	)

	//Barley
	event.add('forge:crops/barley',
		'regions_unexplored:barley'
	)

	//Sea Crystals
	event.add('forge:sea_crystals',
		'mermod:sea_crystal',
		'mermod:deep_sea_crystal_modifier',
		'minecraft:prismarine_crystals',
		'tide:deep_aqua_crystal'
	)

	//Terrestrial Crystals
	event.add('forge:terrestrial_crystals',
		'phantasm:void_crystal_shard',
		'forbidden_arcanus:corrupted_arcane_crystal',
		'forbidden_arcanus:arcane_crystal',
		'phantasm:crystal_shard',
		'minecraft:amethyst_shard'
	)

	//Raw Bacon
	event.add('forge:bacon',
		'rainbowreef:hogfish_bacon'
	)

	//Tea Leaves
	event.add('forge:dried_teas',
		'herbalbrews:dried_oolong_tea',
		'herbalbrews:dried_green_tea',
		'herbalbrews:dried_black_tea'
	)

	//Syrups
	event.add('supplementaries:pancake_syrup',
		'hearthandharvest:syrup_bottle'
	)

	//Glowberry jams
	event.add('forge:glowberry_jam',
		'bakery:glowberry_jam',
		'fruitsdelight:glowberry_jelly')

	//strawberries
	event.add('forge:strawberries',
		'mysticsbiomes:sweet_strawberry'
	)

	event.add('forge:fruits/strawberries',
		'farm_and_charm:strawberry'
	)

	//bun tag to bun

	event.add('forge:bread_or_bun',
		'bakery:bun'
	)

	event.add('forge:cheese',
		'hearthandharvest:cheddar_cheese_slice',
		'hearthandharvest:goat_cheese_slice'
	)

	event.add('forge:cheese_slices',
		'hearthandharvest:cheddar_cheese_slice',
		'hearthandharvest:goat_cheese_slice',
		'meadow:piece_of_sheep_cheese',
		'meadow:piece_of_grain_cheese',
		'meadow:piece_of_amethyst_cheese',
		'meadow:piece_of_buffalo_cheese',
		'meadow:piece_of_warped_cheese'
	)

	event.add('twilightforest:kobold_pacification_breads',
		'delightful:cantaloupe_bread',
		'bakery:braided_bread',
		'bakery:crusty_bread',
		'bakery:toast',
		'bakery:baguette',
		'bakery:bread',
		'rainbowreef:boxfish_bread',
		'autumnity:pumpkin_bread',
		'farmersrespite:nether_wart_sourdough',
		'paleo_flora_return:sporous_reed_bread'
	)

	event.add('forge:bread_or_bun',
		'bakery:braided_bread',
		'bakery:crusty_bread',
		'bakery:toast',
		'bakery:baguette',
		'bakery:bread',
	)

	event.add('forge:cooking_eggs',
		'minecraft:egg',
		'mysticsbiomes:pink_egg',
		'mysticsbiomes:orange_egg',
		'mysticsbiomes:yellow_egg',
		'mysticsbiomes:lime_egg',
		'mysticsbiomes:cyan_egg',
		'mysticsbiomes:purple_egg',
		'earthmobsmod:smelly_egg',
		'autumnity:turkey_egg',
		'earthmobsmod:fancy_egg',
		'earthmobsmod:duck_egg'
	)

	//Clovers
	event.add('forge:clover',
		'regions_unexplored:clover', 
		'twilightforest:clover_patch'
	)

	//Nut Butters
	event.add('forge:nut_butter',
		'hearthandharvest:peanut_butter', 
		'delightful:nut_butter_bottle'
	)

	//H&H Jelly to Tag
	event.add('forge:jams',
		'hearthandharvest:grape_jam', 
		'hearthandharvest:blueberry_jam', 
		'hearthandharvest:raspberry_jam'
	)
})