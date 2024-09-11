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
	//Pearls
	event.replaceInput({
			input: 'abyssal_decor:white_pearl'
		}, // Arg 1: the filter
		'abyssal_decor:white_pearl', // Arg 2: the item to replace
		'#forge:pearls' // Arg 3: the item to replace it with
	)

	//Pearls
	event.replaceInput({
			input: 'crabbersdelight:pearl'
		}, // Arg 1: the filter
		'crabbersdelight:pearl', // Arg 2: the item to replace
		'#forge:pearls' // Arg 3: the item to replace it with
	)

	//Strawberries 2
	event.replaceInput({
			input: 'bakery:strawberry'
		}, // Arg 1: the filter
		'bakery:strawberry', // Arg 2: the item to replace
		'#forge:fruits/strawberries' // Arg 3: the item to replace it with
	)

	//Corn in case we need it
	event.replaceInput({
			input: 'brewery:corn'
		}, // Arg 1: the filter
		'brewery:corn', // Arg 2: the item to replace
		'hauntedharvest' // Arg 3: the item to replace it with
	)
})