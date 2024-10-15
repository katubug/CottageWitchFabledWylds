ServerEvents.recipes(event => {
	//Spectral Lens uses Certus
	event.shaped(
		Item.of('malum:spectral_lens'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'malum:hex_ash',
			B: 'ae2:charged_certus_quartz_crystal'
		}
	)

	//ME Drive
	event.shaped(
		Item.of('ae2:drive'),
		[
			'ABA',
			'C C',
			'ADA'
		], {
			A: 'minecraft:iron_ingot',
			B: 'malum:spectral_optic',
			C: 'hexerei:moon_dust',
			D: 'minecraft:enchanting_table'
		}
	)

	//ME Wireless Terminal
	event.shaped(
		Item.of('ae2:wireless_terminal'),
		[
			'ABC',
			' D '
		], {
			A: 'ae2:terminal',
			B: 'malum:prismatic_focus_lens',
			C: 'reliquary:nebulous_heart',
			D: 'ae2:wireless_receiver'
		}
	)

	//ME Wireless Crafting Terminal
	event.shaped(
		Item.of('ae2:wireless_crafting_terminal'),
		[
			'ABC',
			' D '
		], {
			A: 'ae2:crafting_terminal',
			B: 'malum:prismatic_focus_lens',
			C: 'reliquary:nebulous_heart',
			D: 'ae2:wireless_receiver'
		}
	)

	//1k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_1k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'minecraft:redstone',
			B: 'thaumon:mutagen',
			C: '#ae2:all_certus_quartz',
			D: 'malum:intricate_assembly'
		}
	)

	//4k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_4k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'waystones:warp_dust',
			B: 'malum:spectral_lens',
			C: 'ae2:cell_component_1k',
			D: 'malum:intricate_assembly'
		}
	)

	//16k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_16k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'minecraft:glowstone_dust',
			B: 'forbidden_arcanus:mundabitur_dust',
			C: 'ae2:cell_component_4k',
			D: 'malum:intricate_assembly'
		}
	)

	//64k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_64k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'mermod:glowing_pearl_modifier',
			B: 'netherstar_shards:netherstarshard',
			C: 'ae2:cell_component_16k',
			D: 'malum:intricate_assembly'
		}
	)

	//256k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_256k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'ae2:sky_dust',
			B: 'forbidden_arcanus:dark_nether_star',
			C: 'ae2:cell_component_64k',
			D: 'malum:intricate_assembly'
		}
	)

	//Annihilation Core
	event.shapeless(
		Item.of('2x ae2:annihilation_core'),
		[
			'#forge:gems/quartz', 
			'reliquary:catalyzing_gland', 
			'ae2:fluix_dust'
		]
	)

	//Formation Core
	event.shapeless(
		Item.of('2x ae2:formation_core'),
		[
			'#forge:gems/quartz', 
			'create:experience_nugget', 
			'ae2:fluix_dust'
		]
	)

	//ME Terminal
	event.shapeless(
		Item.of('ae2:terminal'),
		[
			'#ae2:illuminated_panel', 
			'ae2:annihilation_core', 
			'malum:copper_impetus', 
			'ae2:formation_core'
		]
	)

	//ME Crafting Terminal
	event.shapeless(
		Item.of('ae2:crafting_terminal'),
		[
			'malum:spectral_lens', 
			'minecraft:crafting_table', 
			'ae2:terminal',
		]
	)

	//Item Housing
	event.shaped(
		Item.of('ae2:item_cell_housing'),
		[
			'ABA',
			'C C',
			'DED'
		], {
			A: 'minecraft:redstone',
			B: 'phantasm:crystal_shard',
			C: 'malum:astral_weave',
			D: 'forbidden_arcanus:deorum_ingot',
			E: 'forbidden_arcanus:edelwood_oil'
		}
	)

	//Fluid Housing
	event.shaped(
		Item.of('ae2:fluid_cell_housing'),
		[
			'ABA',
			'C C',
			'DED'
		], {
			A: 'minecraft:redstone',
			B: '#forge:sea_crystals',
			C: 'malum:astral_weave',
			D: 'forbidden_arcanus:deorum_ingot',
			E: 'forbidden_arcanus:edelwood_oil'
		}
	)

	let numbers = [
		'1k',
		'4k',
		'16k',
		'64k',
		'256k'
	];

	for (const number of numbers) {
		event.shapeless(
			Item.of('ae2:portable_item_cell_'+number),
			[
				'#tombstone:magic_books', 
				'ae2:cell_component_1k', 
				'ae2:item_cell_housing',
				'ae2:chest'
			]
		)

		event.shapeless(
			Item.of('ae2:portable_fluid_cell_'+number),
			[
				'#tombstone:magic_books', 
				'ae2:cell_component_'+number, 
				'ae2:fluid_cell_housing',
				'ae2:chest'
			]
		)

		event.shaped(
			Item.of('ae2:fluid_storage_cell_'+number),
			[
				' A ',
				'BCB',
				'DED'
			], {
				A: '#forge:sea_crystals',
				B: 'malum:astral_weave',
				D: 'forbidden_arcanus:deorum_ingot',
				E: 'forbidden_arcanus:edelwood_oil',
				C: 'ae2:cell_component_'+number
			}
		)

		event.shaped(
			Item.of('ae2:item_storage_cell_'+number),
			[
				' A ',
				'BCB',
				'DED'
			], {
				A: '#forge:terrestrial_crystals',
				B: 'malum:astral_weave',
				D: 'forbidden_arcanus:deorum_ingot',
				E: 'forbidden_arcanus:edelwood_oil',
				C: 'ae2:cell_component_'+number
			}
		)
	}

})