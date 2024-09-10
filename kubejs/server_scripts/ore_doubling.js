ServerEvents.recipes(e => {

	let toRemove = [{
			id: 'create:crushing/raw_iron'
		},
		{
			id: 'create:crushing/raw_copper'
		},
		{
			id: 'create:crushing/raw_gold'
		},
		{
			id: 'create:crushing/raw_zinc'
		},
		{
			id: 'create:crushing/raw_silver'
		},
		{
			id: 'create:crushing/raw_lead'
		},
		{
			id: 'malum:create/crushing/crush_raw_soulstone'
		},
		{
			id: 'malum:create/crushing/crush_brilliance'
		},
		{
			id: 'create:crushing/raw_iron_block'
		},
		{
			id: 'create:crushing/raw_copper_block'
		},
		{
			id: 'create:crushing/raw_gold_block'
		},
		{
			id: 'create:crushing/raw_zinc_block'
		},
		{
			id: 'create:crushing/raw_silver_block'
		},
		{
			id: 'create:crushing/raw_lead_block'
		}
	];

	for (const remove of toRemove) {
		e.remove(remove);
	}

	e.recipes.create.crushing(['2x create:crushed_raw_iron', Item.of(
			'create:experience_nugget').withChance(0.3)],
		'minecraft:raw_iron')

	e.recipes.create.crushing(['2x create:crushed_raw_copper', Item.of(
			'create:experience_nugget').withChance(0.3)],
		'minecraft:raw_copper')

	e.recipes.create.crushing(['2x create:crushed_raw_gold', Item.of(
			'2x create:experience_nugget').withChance(0.3)],
		'minecraft:raw_gold')

	e.recipes.create.crushing(['2x create:crushed_raw_zinc', Item.of(
			'create:experience_nugget').withChance(0.3)],
		'create:raw_zinc')

	e.recipes.create.crushing(['2x create:crushed_raw_silver', Item.of(
			'create:experience_nugget').withChance(0.3)],
		'eidolon:raw_silver')

	e.recipes.create.crushing(['2x create:crushed_raw_lead', Item.of(
			'create:experience_nugget').withChance(0.3)],
		'eidolon:raw_lead')

	e.recipes.create.crushing(['2x malum:crushed_brilliance', Item.of(
			'3x create:experience_nugget').withChance(0.3)],
		'malum:cluster_of_brilliance')

	e.recipes.create.crushing(['2x malum:crushed_soulstone', Item.of(
			'create:experience_nugget').withChance(0.3)],
		'malum:raw_soulstone')

	e.recipes.create.crushing(['18x create:crushed_raw_iron', Item.of(
			'9x create:experience_nugget').withChance(0.3)],
		'minecraft:raw_iron_block')

	e.recipes.create.crushing(['18x create:crushed_raw_copper', Item.of(
			'9x create:experience_nugget').withChance(0.3)],
		'minecraft:raw_copper_block')

	e.recipes.create.crushing(['18x create:crushed_raw_gold', Item.of(
			'18x create:experience_nugget').withChance(0.3)],
		'minecraft:raw_gold_block')

	e.recipes.create.crushing(['18x create:crushed_raw_zinc', Item.of(
			'9x create:experience_nugget').withChance(0.3)],
		'create:raw_zinc_block')

	e.recipes.create.crushing(['18x create:crushed_raw_silver', Item.of(
			'9x create:experience_nugget').withChance(0.3)],
		'eidolon:raw_silver_block')

	e.recipes.create.crushing(['18x create:crushed_raw_lead', Item.of(
			'9x create:experience_nugget').withChance(0.3)],
		'eidolon:raw_lead_block')

	e.recipes.create.crushing(['18x malum:crushed_brilliance', Item.of(
			'21x create:experience_nugget').withChance(0.3)],
		'malum:block_of_brilliance')

	e.recipes.create.crushing(['18x malum:crushed_soulstone', Item.of(
			'9x create:experience_nugget').withChance(0.3)],
		'malum:block_of_raw_soulstone')

})