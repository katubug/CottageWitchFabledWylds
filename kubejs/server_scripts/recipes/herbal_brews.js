ServerEvents.recipes(event => {
	//Herbal Brews Fixing
	event.smoking('herbalbrews:dried_green_tea', 'herbalbrews:green_tea_leaf')
	event.smoking('herbalbrews:dried_oolong_tea', 'herbalbrews:dried_green_tea')
	event.smoking('herbalbrews:dried_black_tea', 'herbalbrews:dried_oolong_tea')

	//Uncraft Dried Green Tea Block
	event.shapeless(
		Item.of('herbalbrews:dried_green_tea', 9),
		[
			'herbalbrews:dried_green_tea_leaf_block'
		]
	)

	//Craft Black Tea Block
	event.shapeless(
		Item.of('herbalbrews:black_tea_leaf_block'),
		[
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea',
			'herbalbrews:dried_black_tea'
		]
	)

	//Uncraft Black Tea Block
	event.shapeless(
		Item.of('herbalbrews:dried_black_tea', 9),
		[
			'herbalbrews:black_tea_leaf_block'
		]
	)

	//Craft Oolong Tea Block
	event.shapeless(
		Item.of('herbalbrews:oolong_tea_leaf_block'),
		[
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea',
			'herbalbrews:dried_oolong_tea'
		]
	)

	//Uncraft Oolong Tea Block
	event.shapeless(
		Item.of('herbalbrews:dried_oolong_tea', 9),
		[
			'herbalbrews:oolong_tea_leaf_block'
		]
	)
})