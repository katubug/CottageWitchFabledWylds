ServerEvents.recipes(event => {
	//Recipe Replacements
	//Strawberries
	event.replaceInput({
			input: 'mysticsbiomes:strawberry'
		}, // Arg 1: the filter
		'mysticsbiomes:strawberry', // Arg 2: the item to replace
		'#forge:fruits/strawberries' // Arg 3: the item to replace it with
	)

	//Recipe Replacements
	//Strawberries
	event.replaceInput({
			input: 'create:wheat_flour'
		}, // Arg 1: the filter
		'create:wheat_flour', // Arg 2: the item to replace
		'#forge:flour' // Arg 3: the item to replace it with
	)

	//Strawberries 2
	event.replaceInput({
			input: 'bakery:strawberry'
		}, // Arg 1: the filter
		'bakery:strawberry', // Arg 2: the item to replace
		'#forge:fruits/strawberries' // Arg 3: the item to replace it with
	)

	//Black Tea
	event.replaceInput({
		input: 'farmersrespite:black_tea_leaves'
	}, // Arg 1: the filter
	'farmersrespite:black_tea_leaves', // Arg 2: the item to replace
	'herbalbrews:dried_black_tea' // Arg 3: the item to replace it with
)

	//Green Tea
	event.replaceInput({
		input: 'farmersrespite:green_tea_leaves'
	}, // Arg 1: the filter
	'farmersrespite:green_tea_leaves', // Arg 2: the item to replace
	'herbalbrews:dried_green_tea' // Arg 3: the item to replace it with
	)

	//Yellow/Oolong Tea
	event.replaceInput({
		input: 'farmersrespite:yellow_tea_leaves'
	}, // Arg 1: the filter
	'farmersrespite:yellow_tea_leaves', // Arg 2: the item to replace
	'herbalbrews:dried_oolong_tea' // Arg 3: the item to replace it with
	)

	//Belladonna Flowers
	event.replaceInput({
		input: 'enchanted:belladonna_flower'
	}, // Arg 1: the filter
	'enchanted:belladonna_flower', // Arg 2: the item to replace
	'hexerei:belladonna_flowers' // Arg 3: the item to replace it with
	)

	//Salts
	event.replaceInput({
		input: 'hearthandharvest:salt'
	}, // Arg 1: the filter
	'hearthandharvest:salt', // Arg 2: the item to replace
	'spelunkery:salt' // Arg 3: the item to replace it with
	)

	//Salts
	event.replaceInput({
		input: 'meadow:alpine_salt'
	}, // Arg 1: the filter
	'meadow:alpine_salt', // Arg 2: the item to replace
	'spelunkery:salt' // Arg 3: the item to replace it with
	)

	//Blueberries
	event.replaceInput({
		input: 'hearthandharvest:blueberries'
	}, // Arg 1: the filter
	'hearthandharvest:blueberries', // Arg 2: the item to replace
	'fruitsdelight:blueberry' // Arg 3: the item to replace it with
	)

	//Cheese Slices
	event.replaceInput({
		input: 'trailandtales_delight:cheese_slice'
	}, // Arg 1: the filter
	'trailandtales_delight:cheese_slice', // Arg 2: the item to replace
	'#forge:cheese_slices' // Arg 3: the item to replace it with
	)

	//Bread
	event.replaceInput({
		input: 'minecraft:bread'
	}, // Arg 1: the filter
	'minecraft:bread', // Arg 2: the item to replace
	'#forge:bread_or_bun' // Arg 3: the item to replace it with
	)
	
//cherries
	event.replaceInput({
		input: 'hearthandharvest:cherry'
	}, // Arg 1: the filter
	'hearthandharvest:cherry', // Arg 2: the item to replace
	'vinery:cherry' // Arg 3: the item to replace it with
	)

	//more cherries
	event.replaceInput({
		input: 'mysticsbiomes:cherries'
	}, // Arg 1: the filter
	'mysticsbiomes:cherries', // Arg 2: the item to replace
	'vinery:cherry' // Arg 3: the item to replace it with
	)

	//peaches
	event.replaceInput({
		input: 'mysticsbiomes:peach'
	}, // Arg 1: the filter
	'mysticsbiomes:peach', // Arg 2: the item to replace
	'fruitsdelight:peach' // Arg 3: the item to replace it with
	)

	//Eggs
	event.replaceInput({
		input: '#forge:eggs'
	},
	'#forge:eggs',
	'#forge:cooking_eggs'
	)
	
	
})