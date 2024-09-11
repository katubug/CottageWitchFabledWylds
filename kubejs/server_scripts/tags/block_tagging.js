ServerEvents.tags('block', event => {
	//Hot Blocks
	let hotBlocks = [
		'candlelight:bamboo_stove',
		'candlelight:basalt_stove',
		'candlelight:cobblestone_stove',
		'candlelight:deepslate_stove',
		'candlelight:end_stove',
		'candlelight:granite_stove',
		'candlelight:mud_stove',
		'candlelight:quartz_stove',
		'candlelight:red_nether_bricks_stove',
		'candlelight:sandstone_stove',
		'candlelight:stone_bricks_stove',
		'create:blaze_burner',
		'ends_delight:end_stove',
		'fantasyfurniture:bone/skeleton/oven',
		'fantasyfurniture:bone/wither/oven',
		'fantasyfurniture:necrolord/oven',
		'fantasyfurniture:nordic/oven',
		'fantasyfurniture:royal/oven',
		'fantasyfurniture:venthyr/oven',
		'farmersdelight:stove',
		'farm_and_charm:stove',
		'handcrafted:oven',
		'herbalbrews:stove',
		'meadow:stove_tiles',
		'meadow:stove_tiles_lid',
		'meadow:stove_tiles_wood',
		'minecraft:magma_block',
		'nethersdelight:blackstone_stove',
	]

	for (const block of hotBlocks) {
		event.add('farmersdelight:heat_sources', block);
		event.add('create:passive_boiler_heaters', block);
		event.add('meadow:allows_cooking', block);
		event.add('candlelight:allows_cooking', block);
		event.add('bakery:allows_cooking', block);
		event.add('herbalbrews:allows_cooking', block);
		event.add('eidolon:crucible_hot_blocks', block);
	}
})