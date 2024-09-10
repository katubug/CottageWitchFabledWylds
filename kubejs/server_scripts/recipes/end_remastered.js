ServerEvents.recipes(event => {

	//End Remastered Eyes to Pearls
	event.shapeless(
		Item.of('minecraft:ender_pearl', 4),
		[
			'#forge:eyes'
		]
	)

	//End Remastered Eyes from Enderman Overhaul Pearls
	//Lost Eye
	event.shaped(
		Item.of('endrem:lost_eye'),
		[
			' A ',
			'BCD',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'handcrafted:hammer',
			C: 'endermanoverhaul:crimson_pearl',
			D: 'minecraft:anvil'
		}
	)

	//Exotic Eye
	event.shaped(
		Item.of('endrem:exotic_eye'),
		[
			' A ',
			'BCD',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'minecraft:fire_coral',
			C: 'endermanoverhaul:bubble_pearl',
			D: 'minecraft:tube_coral'
		}
	)

	//Magical Eye
	event.shaped(
		Item.of('endrem:magical_eye'),
		[
			' A ',
			'BCD',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'eidolon:holy_symbol',
			C: 'endermanoverhaul:summoner_pearl',
			D: 'eidolon:unholy_symbol'
		}
	)

	//Old Eye
	event.shaped(
		Item.of('endrem:old_eye'),
		[
			' A ',
			'BCB',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'minecraft:chiseled_sandstone',
			C: 'endermanoverhaul:ancient_pearl'
		}
	)

	//Evil Eye
	event.shaped(
		Item.of('endrem:evil_eye'),
		[
			' A ',
			'BCB',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'eidolon:silver_ingot',
			C: 'endermanoverhaul:warped_pearl'
		}
	)

	//Guardian Eye
	event.shaped(
		Item.of('endrem:guardian_eye'),
		[
			' A ',
			'BCB',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'minecraft:prismarine_shard',
			C: 'endermanoverhaul:soul_pearl'
		}
	)

	//Corrupted Eye
	event.shaped(
		Item.of('endrem:corrupted_eye'),
		[
			' A ',
			'BCB',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'forbidden_arcanus:corrupti_dust',
			C: 'endermanoverhaul:corrupted_pearl'
		}
	)

	//Cold Eye
	event.shaped(
		Item.of('endrem:cold_eye'),
		[
			' A ',
			'BCB',
			' A '
		], {
			A: 'minecraft:ender_eye',
			B: 'minecraft:blue_ice',
			C: 'endermanoverhaul:icy_pearl'
		}
	)
})