ServerEvents.recipes(event => {
	// Filled Eccentric tome
	//TODO: fix this!!
	let tome = Item.of('eccentrictome:tome', '{"eccentrictome:mods":{buildinggadgets2:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}}},create_central_kitchen:{0:{Count:1b,ForgeCaps:{Parent:{}},id:"create_central_kitchen:cooking_guide"}},enchanted:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:brewing"}},1:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:herbology"}},2:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:circle_magic"}},3:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:getting_started"}},4:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:poppetry"}},5:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:extraction"}}},ftbquests:{0:{Count:1b,id:"ftbquests:book"}},hexerei:{0:{Count:1b,id:"hexerei:book_of_shadows",tag:{bookmarks:{},chapter:0,opened:0b,page:0}}},numismatics:{0:{Count:1b,id:"numismatics:banking_guide"}},solonion:{0:{Count:1b,id:"solonion:food_book"}},soulhome:{0:{Count:1b,id:"soulhome:guide"}},twilightdelight:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"twilightdelight:twilight_guide"}}}}}')
	event.shapeless(
		Item.of(tome),
		[
			'minecraft:book',
			'minecraft:stick'
		]
	)

	//Matcha Berry Latte

	event.shapeless(Item.of('delightful:berry_matcha_latte'),
		[
			'#betterbeekeeping:honey_bottles', 
			'delightful:matcha_latte', 
			'minecraft:ice', 
			'#forge:berries'
		]
	)

	// Cheaper Mermaid Pearl
	event.shaped(
		Item.of('luphieclutteredmod:luphie_mermaid_pearl'),
		[
			' A ',
			'BCB'
		], {
			A: '#forge:pearls',
			B: 'minecraft:gold_nugget',
			C: 'minecraft:gold_ingot'
		}
	)

	//Hanging Pot uses rope tag
	event.shaped(
		Item.of('beautify:hanging_pot'),
		[
			' A ',
			' B '
		], {
			A: '#supplementaries:ropes',
			B: 'minecraft:flower_pot'
		}
	)

	// Tarot Deck
	event.shaped(
		Item.of('tarotcards:tarot_deck'),
		[
			'ABA',
			'ACA',
			'ADA'
		], {
			A: 'create:golden_sheet',
			B: 'minecraft:dragon_egg',
			C: 'minecraft:nether_star',
			D: 'tarotcards:justice'
		}
	)

	// Palette
	event.shaped(
		Item.of('xercapaint:item_palette'),
		[
			'AA ',
			'AA '
		], {
			A: '#minecraft:wooden_slabs'
		}
	)

	//Adding in QOL Dirt Recipes
	event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:ashen_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:peat_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:coarse_dirt'), // arg 1: output
			[
				'regions_unexplored:peat_coarse_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:silt_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:coarse_dirt'), // arg 1: output
			[
				'regions_unexplored:silt_coarse_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:argillite'
			]
		),

		event.shaped('8x regions_unexplored:silt_dirt', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'minecraft:dirt',
			B: 'regions_unexplored:barley'
		}),
		event.shaped('8x regions_unexplored:peat_dirt', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'minecraft:dirt',
			B: 'regions_unexplored:blackwood_sapling'
		}),
		event.shaped('8x regions_unexplored:argillite', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'minecraft:dirt',
			B: 'regions_unexplored:dropleaf'
		})

	/*
	    // Pipez Item Pipe
	    event.shaped(
	        Item.of('pipez:item_pipe', 16),
	        [
	            'AAA',
	            'BBB',
	            'AAA'
	        ], {
	            A: 'minecraft:copper_ingot',
	            B: 'minecraft:redstone'
	        }
	    )
	        */

	
	//Epiphany Table Craftable
	event.shaped(
	    Item.of('orpheus:epiphany_table'),
	    [
	        ' A ',
	        'BBB',
	        'CCC'
	    ], {
	        A: 'supplementaries:gold_trapdoor',
	        B: 'excessive_building:marble',
	        C: 'minecraft:glowstone_dust'
	    }
	)

	//Apollo's Son Requires End
	event.shaped(
	    Item.of('orpheus:apollos_son'),
	    [
	        ' A ',
	        'BCD',
	        ' A '
	    ], {
	        A: 'minecraft:shulker_shell',
	        B: 'orpheus:tears_bow',
	        C: 'orpheus:lyre',
	        D: 'orpheus:calliopes_love'
	    }
	)
	
	// Blast 1 iron ingot into 10 nuggets in a Blast Furnace: 
	event.blasting('create:zinc_block', 'create:raw_zinc_block')

	//Dusky Myalite obtainable
	event.shaped(
		Item.of('quark:dusky_myalite', 8),
		[
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'quark:myalite',
			B: 'hexerei:moon_dust'
		}
	)

	//Myalite Crystals obtainable
	event.shaped(
		Item.of('quark:myalite_crystal', 8),
		[
			'AAA',
			'ABA',
			'AAA'
		], {
			A: '#quark:corundum',
			B: 'enchanted:mutandis'
		}
	)

	//Tea Recipes
	event.smoking('herbalbrews:dried_green_tea', 'farmersrespite:green_tea_leaves')
	event.smoking('herbalbrews:dried_oolong_tea', 'farmersrespite:yellow_tea_leaves')
	event.smoking('herbalbrews:dried_black_tea', 'farmersrespite:black_tea_leaves')

	//Coffee Recipes
	event.shapeless(
		Item.of('herbalbrews:coffee'),
		[
			'farmersrespite:coffee'
		]
	)
	event.shapeless(
		Item.of('herbalbrews:milk_coffee'),
		[
			'herbalbrews:coffee',
			'farmersdelight:milk_bottle'
		]
	)

	//Blueberry crate uses correct blueberries
	event.shapeless(
		Item.of('hearthandharvest:blueberry_crate'),
		[
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry',
			'fruitsdelight:blueberry'
		]
	)

	event.shapeless(
		Item.of('fruitsdelight:blueberry', 9),
		[
			'hearthandharvest:blueberry_crate'
		]
	)

	event.shaped(
		Item.of('hexerei:pestle_and_mortar'),
		[
			'  A',
			'BCB',
			' B '
		], {
			A: '#forge:rods',
			B: '#forge:stone',
			C: 'spelunkery:stone_pebble'
		}
	)

	event.shaped(
		Item.of('4x wardrobe:silk'),
		[
			'AAA',
			'AAA'
		], {
			A: 'crittersandcompanions:silk'
		}
	)

	//Smores use better marshmallows
	event.shapeless(
		Item.of('delightful:smore'),
		[
			'farmersdelight:honey_cookie',
			'#forge:chocolate',
			'hearthandharvest:roasted_marshmallow_stick',
			'farmersdelight:honey_cookie'
		]
	)

	event.smelting('hearthandharvest:syrup_bottle', 'autumnity:sap_bottle')

	
})