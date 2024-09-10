ServerEvents.recipes(event => {
	//Sunflower conversion
	event.shapeless(
		Item.of('minecraft:sunflower'),
		[
			'spawn:sunflower'
		]
	)

	//Magical Gold Conversions
	event.shapeless(
		Item.of('eidolon:arcane_gold_ingot'),
		[
			'eidolon:soul_shard',
			'forbidden_arcanus:deorum_ingot'
		]
	)

	event.shapeless(
		Item.of('forbidden_arcanus:deorum_ingot'),
		[
			'forbidden_arcanus:mundabitur_dust',
			'eidolon:arcane_gold_ingot'
		]
	)
})