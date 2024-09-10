ServerEvents.recipes(event => {

	//DNA Fridge
	event.shaped(
		Item.of('unusualprehistory:dna_fridge'),
		[
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'minecraft:copper_ingot',
			B: 'minecraft:blue_ice',
			C: 'minecraft:iron_ingot',
			D: 'unusualprehistory:permafrost'
		}
	)

	//Incubator
	event.shaped(
		Item.of('unusualprehistory:incubator'),
		[
			'ABA',
			'CDC',
			'EFE'
		], {
			A: 'unusualprehistory:insulator',
			B: 'minecraft:green_stained_glass',
			C: 'minecraft:copper_ingot',
			D: 'unusualprehistory:organic_ooze',
			E: 'minecraft:redstone',
			F: 'eidolon:arcane_gold_ingot'
		}
	)

	//Insulator
	event.shapeless(
		Item.of('unusualprehistory:insulator'),
		[
			'minecraft:light_blue_wool',
			'minecraft:magma_cream',
			'minecraft:light_gray_wool'
		]
	)

	// Ooze Uses Tags
	event.shapeless(
		Item.of('unusualprehistory:organic_ooze', 3),
		[
			'#forge:slimeballs',
			"minecraft:bone",
			"#forge:grain"
		]
	)

	//Smelting Recipe DNA to Ooze
	event.smelting('unusualprehistory:organic_ooze', '#unusualprehistory:dna_flasks')
})