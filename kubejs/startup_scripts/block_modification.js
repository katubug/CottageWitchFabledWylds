BlockEvents.modification(e => {
	//Make Deepslate faster to mine
	e.modify('minecraft:deepslate', block => {
		block.destroySpeed = 2
	})
	e.modify('minecraft:cobbled_deepslate', block => {
		block.destroySpeed = 2
	})
	e.modify('minecraft:polished_deepslate', block => {
		block.destroySpeed = 2
	})
	e.modify('#chipped:deepslate', block => {
		block.destroySpeed = 2
	})
	//Make Starstone Glow
	let starstone = [
		'abyssal_decor:starstone_tiles',
		'abyssal_decor:lapis_pillar',
		'abyssal_decor:gilded_lapis_pillar',
		'abyssal_decor:chiseled_starstone',
		'abyssal_decor:chiseled_starstone',
		'abyssal_decor:polished_starstone_wall',
		'abyssal_decor:polished_starstone_slab',
		'abyssal_decor:polished_starstone_stairs',
		'abyssal_decor:polished_starstone',
		'abyssal_decor:starstone_pillar',
		'abyssal_decor:smooth_starstone',
		'abyssal_decor:gilded_starstone',
		'abyssal_decor:starstone'
		];
	for (const stars of starstone) {
		event.modify(stars, block => {
			block.lightEmission = 10
		})
	}
	//Pearl Tiles glow too
	event.modify('abyssal_decor:starry_pearl_tiles', block => {
		block.lightEmission = 5
	})
})