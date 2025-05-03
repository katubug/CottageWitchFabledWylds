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

	//Black Tea
	event.replaceInput({
		input: 'farmersrespite:green_tea_leaves'
	}, // Arg 1: the filter
	'farmersrespite:green_tea_leaves', // Arg 2: the item to replace
	'herbalbrews:dried_green_tea' // Arg 3: the item to replace it with
	)

	//Black Tea
	event.replaceInput({
		input: 'farmersrespite:yellow_tea_leaves'
	}, // Arg 1: the filter
	'farmersrespite:yellow_tea_leaves', // Arg 2: the item to replace
	'herbalbrews:dried_oolong_tea' // Arg 3: the item to replace it with
)
})