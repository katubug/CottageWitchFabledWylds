StartupEvents.registry('item', event => {
	// The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
	// If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
	

})

StartupEvents.registry('block', event => {

	//Cheeses?
	event.create('sheep_cheese_unripe')
		.model('kubejs:block/sheep_cheese_unripe')
		.hardness(1)
		.displayName('Unripe Sheep Cheese')
		.fullBlock(false)
		.notSolid()
		.box(5, 0, 5, 11, 6, 11)

	event.create('grain_cheese_unripe')
		.model('kubejs:block/grain_cheese_unripe')
		.hardness(1)
		.displayName('Unripe Grain Cheese')
		.fullBlock(false)
		.notSolid()
		.box(5, 0, 5, 11, 6, 11)

	event.create('amethyst_cheese_unripe')
		.model('kubejs:block/amethyst_cheese_unripe')
		.hardness(1)
		.displayName('Unripe Amethyst Cheese')
		.fullBlock(false)
		.notSolid()
		.box(5, 0, 5, 11, 6, 11)

	event.create('buffalo_cheese_unripe')
		.model('kubejs:block/buffalo_cheese_unripe')
		.hardness(1)
		.displayName('Unripe Buffalo Cheese')
		.fullBlock(false)
		.notSolid()
		.box(5, 0, 5, 11, 6, 11)

	event.create('warped_cheese_unripe')
		.model('kubejs:block/warped_cheese_unripe')
		.hardness(1)
		.displayName('Unripe Warped Cheese')
		.fullBlock(false)
		.notSolid()
		.box(5, 0, 5, 11, 6, 11)

	//Emmu Blocks
	event.create('bat_wallpaper', 'cardinal')
		.model('kubejs:block/bat_wallpaper')
		.soundType('wood')
		.hardness(2)
		.displayName('Bat Wallpaper')
		.tagBlock('minecraft:mineable/axe')

	event.create('skull_wallpaper', 'cardinal')
		.model('kubejs:block/skull_wallpaper')
		.soundType('wood')
		.hardness(2)
		.displayName('Skull Wallpaper')
		.tagBlock('minecraft:mineable/axe')

	event.create('witch_cat_plushie')
		.model('kubejs:block/witch_cat_plushie')
		.soundType('wool')
		.fullBlock(false)
		.defaultCutout()
		.hardness(1.5)
		.displayName('Witch Cat Plushie')

	//all custom woodses
		let customWoods = [
			'acacia',
			'acacia_stripped',
			'birch',
			'birch_stripped',
			'cherry',
			'cherry_stripped',
			'crimson',
			'crimson_stripped',
			'dark_oak',
			'dark_oak_stripped',
			'jungle',
			'jungle_stripped',
			'mangrove',
			'mangrove_stripped',
			'oak',
			'oak_stripped',
			'pale_oak',
			'pale_oak_stripped',
			'spruce',
			'spruce_stripped',
			'warped',
			'warped_stripped'
		];
	
		for (const wood of customWoods){
			event.create(wood+'_carved_column')
			.soundType('wood')
			.hardness(2)
			.tagBlock('minecraft:mineable/axe')
			.tagBoth('minecraft:logs')
			.property(BlockProperties.AXIS)
			.fullBlock(true)
			.placementState((event) => event.set(BlockProperties.AXIS, event.clickedFace.axis))
			.blockstateJson = {
				variants: {
				"axis=x": {
					model: "kubejs:block/"+wood+"_carved_column_horizontal",
					x: 90,
					y: 90,
				},
				"axis=y": {
					model: "kubejs:block/"+wood+"_carved_column",
				},
				"axis=z": {
					model: "kubejs:block/"+wood+"_carved_column_horizontal",
					x: 90,
				},
				},
			};
		}
	
		let customParquets = [
			'acacia',
			'bamboo',
			'birch',
			'cherry',
			'crimson',
			'dark_oak',
			'jungle',
			'mangrove',
			'oak',
			'pale_oak',
			'spruce',
			'warped'
		];
	
		for (const parquet of customParquets){
			event.create(parquet+'_carved_parquet')
			.model('kubejs:block/'+parquet+'_carved_parquet')
			.soundType('wood')
			.hardness(2)
			.tagBlock('minecraft:mineable/axe')
			.tagBoth('minecraft:logs')
			.property(BlockProperties.AXIS)
			.fullBlock(true)
		}
	
		// Carved Bamboo Mosaic
		event.create('bamboo_carved_mosaic')
		.soundType('wood')
		.hardness(2)
		.displayName('Bamboo Carved Mosaic')
		.tagBlock('minecraft:mineable/axe')
		.tagBoth('minecraft:logs')
		.fullBlock(true)
	
		// PREVIOUS
		// Carved Warped Logs
		event.create('carved_warped_1', 'cardinal')
		.model('kubejs:block/carved_warped_1')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Vertical')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_warped_2', 'cardinal')
		.model('kubejs:block/carved_warped_2')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Horizontal')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_warped_3', 'cardinal')
		.model('kubejs:block/carved_warped_3')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Top')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_warped_4', 'cardinal')
		.model('kubejs:block/carved_warped_4')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Bottom')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_warped_5', 'cardinal')
		.model('kubejs:block/carved_warped_5')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Eerie')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_warped_6', 'cardinal')
		.model('kubejs:block/carved_warped_6')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Curve')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_warped_7', 'cardinal')
		.model('kubejs:block/carved_warped_7')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Unsettling')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_warped_8', 'cardinal')
		.model('kubejs:block/carved_warped_8')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Warped Wood Head')
		.tagBlock('minecraft:mineable/axe')
	
	// Carved Acacia Logs
	event.create('carved_acacia_1', 'cardinal')
		.model('kubejs:block/carved_acacia_1')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Flower')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	event.create('carved_acacia_2', 'cardinal')
		.model('kubejs:block/carved_acacia_2')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Cross')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	event.create('carved_acacia_3', 'cardinal')
		.model('kubejs:block/carved_acacia_3')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Brace')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	event.create('carved_acacia_4', 'cardinal')
		.model('kubejs:block/carved_acacia_4')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Edge')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	event.create('carved_acacia_5', 'cardinal')
		.model('kubejs:block/carved_acacia_5')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Diamond')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	event.create('carved_acacia_6', 'cardinal')
		.model('kubejs:block/carved_acacia_6')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Lined')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	//TODO - rotation
	event.create('carved_acacia_7', 'cardinal')
		.model('kubejs:block/carved_acacia_7')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Corner')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	event.create('carved_acacia_8', 'cardinal')
		.model('kubejs:block/carved_acacia_8')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Acacia Wood Bracket')
		.tagBlock('minecraft:mineable/axe')
		.fullBlock(false)
		.opaque(false)
		.defaultCutout()
	
	// Carved Birch Logs
	event.create('carved_birch_1', 'cardinal')
		.model('kubejs:block/carved_birch_1')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood Horizontal')
		.tagBlock('minecraft:mineable/axe')
	
	//TODO - Rotation
	event.create('carved_birch_2', 'cardinal')
		.model('kubejs:block/carved_birch_2')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood End Cap')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_birch_3', 'cardinal')
		.model('kubejs:block/carved_birch_3')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood Inlay')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_birch_4', 'cardinal')
		.model('kubejs:block/carved_birch_4')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood Arched')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_birch_5', 'cardinal')
		.model('kubejs:block/carved_birch_5')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood Embossed')
		.tagBlock('minecraft:mineable/axe')
	
	//TODO - Rotation
	event.create('carved_birch_6', 'cardinal')
		.model('kubejs:block/carved_birch_6')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood Corner')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_birch_7', 'cardinal')
		.model('kubejs:block/carved_birch_7')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood Fleur de Lis')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_birch_8', 'cardinal')
		.model('kubejs:block/carved_birch_8')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Birch Wood Vertical')
		.tagBlock('minecraft:mineable/axe')
	
	// Carved Crimson Logs
	event.create('carved_crimson_1', 'cardinal')
		.model('kubejs:block/carved_crimson_1')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Vertical')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_crimson_2', 'cardinal')
		.model('kubejs:block/carved_crimson_2')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Horizontal')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_crimson_3', 'cardinal')
		.model('kubejs:block/carved_crimson_3')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Curve')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_crimson_4', 'cardinal')
		.model('kubejs:block/carved_crimson_4')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Celestial')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_crimson_5', 'cardinal')
		.model('kubejs:block/carved_crimson_5')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Lunar')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_crimson_6', 'cardinal')
		.model('kubejs:block/carved_crimson_6')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Rune Horizontal')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_crimson_7', 'cardinal')
		.model('kubejs:block/carved_crimson_7')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Rune Vertical')
		.tagBlock('minecraft:mineable/axe')
	
	//TODO - Rotation
	event.create('carved_crimson_8', 'cardinal')
		.model('kubejs:block/carved_crimson_8')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Crimson Wood Corner')
		.tagBlock('minecraft:mineable/axe')
	
	// Carved Dark Oak Logs
	event.create('carved_dark_oak_1', 'cardinal')
		.model('kubejs:block/carved_dark_oak_1')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Scales')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_dark_oak_2', 'cardinal')
		.model('kubejs:block/carved_dark_oak_2')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Clouds')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_dark_oak_3', 'cardinal')
		.model('kubejs:block/carved_dark_oak_3')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Dragon Horizontal')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_dark_oak_4', 'cardinal')
		.model('kubejs:block/carved_dark_oak_4')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Dragon Head')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_dark_oak_5', 'cardinal')
		.model('kubejs:block/carved_dark_oak_5')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Dragon Vertical')
		.tagBlock('minecraft:mineable/axe')
	
	//TODO - rotation
	event.create('carved_dark_oak_6', 'cardinal')
		.model('kubejs:block/carved_dark_oak_6')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Dragon Leg')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_dark_oak_7', 'cardinal')
		.model('kubejs:block/carved_dark_oak_7')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Dragon Tail')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_dark_oak_8', 'cardinal')
		.model('kubejs:block/carved_dark_oak_8')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Dark Oak Wood Oni')
		.tagBlock('minecraft:mineable/axe')
	
	// Carved Spruce Logs
	event.create('carved_spruce_1', 'cardinal')
		.model('kubejs:block/carved_spruce_1')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Eagle')
		.tagBlock('minecraft:mineable/axe')
	
	//TODO - Rotation
	event.create('carved_spruce_2', 'cardinal')
		.model('kubejs:block/carved_spruce_2')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Wing')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_spruce_3', 'cardinal')
		.model('kubejs:block/carved_spruce_3')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Talons')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_spruce_4', 'cardinal')
		.model('kubejs:block/carved_spruce_4')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Villager')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_spruce_5', 'cardinal')
		.model('kubejs:block/carved_spruce_5')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Paws')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_spruce_6', 'cardinal')
		.model('kubejs:block/carved_spruce_6')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Beast')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_spruce_7', 'cardinal')
		.model('kubejs:block/carved_spruce_7')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Horizontal')
		.tagBlock('minecraft:mineable/axe')
	
	event.create('carved_spruce_8', 'cardinal')
		.model('kubejs:block/carved_spruce_8')
		.soundType('wood')
		.hardness(2)
		.displayName('Carved Spruce Wood Vertical')
		.tagBlock('minecraft:mineable/axe')
	})