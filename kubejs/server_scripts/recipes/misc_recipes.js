ServerEvents.recipes(event => {
	// Cheaper Post Box
	event.shaped(
		Item.of('mighty_mail:post_box'),
		[
			'ABA',
			'BCB',
			' D '
		], {
			A: 'minecraft:blue_dye',
			B: 'minecraft:iron_ingot',
			C: '#forge:chests',
			D: 'minecraft:smooth_stone'
		}
	)

	// Cheaper Mermaid Pearl
	event.shaped(
		Item.of('luphieclutteredmod:luphie_mermaid_pearl'),
		[
			' A ',
			'BCB'
		], {
			A: 'crabbersdelight:pearl',
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
	// Soul Receptacle
	event.shaped(
		Item.of('tombstone:soul_receptacle'),
		[
			' A ',
			'BCB',
			' D '
		], {
			A: 'minecraft:chain',
			B: 'minecraft:iron_ingot',
			C: '#forge:souls',
			D: 'minecraft:soul_soil'
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

	//Preserved Flesh Craftable
	event.shaped(
		Item.of('galosphere:preserved_flesh'),
		[
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'galosphere:pink_salt_shard',
			B: 'galosphere:cured_membrane',
			C: 'galosphere:salted_jerky',
			D: 'eidolon:zombie_heart',
		}
	)

	//Calcite to Marble
	event.shapeless(
		Item.of('tombstone:white_marble', 8),
		[
			'8x minecraft:calcite',
			'eidolon:enchanted_ash'
		]
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

	// Uncrafter Requires Nether
	event.shaped(
		Item.of('uncrafter:uncrafter'),
		[
			'ABA',
			'CDC',
			'EEE'
		], {
			A: 'minecraft:iron_ingot',
			B: 'minecraft:blaze_rod',
			C: 'minecraft:dark_prismarine',
			D: 'minecraft:gilded_blackstone',
			E: 'minecraft:crying_obsidian'
		}
	)

	/*
//Chalk crafting
let dyeColor =[
    "red",
    "orange",
    "yellow",
    "green",
    "lime",
    "light_blue",
    "cyan",
    "blue",
    "pink",
    "magenta",
    "purple",
    "gray",
    "light_gray",
    "black",
    "brown"
];

for (const color of dyeColor) {
    event.shapeless(
        Item.of('chalk:'+color+'_chalk'),
        [
            'regions_unexplored:chalk',
            'minecraft:'+color+'_dye'
        ]
    )
}
*/

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

	/*
	//Epiphany Table Craftable
	event.shaped(
	    Item.of('orpheus:epiphany_table'),
	    [
	        ' A ',
	        'BBB',
	        'CCC'
	    ], {
	        A: 'supplementaries:gold_trapdoor',
	        B: 'tombstone:white_marble',
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
	    */

	event.shapeless(
		Item.of('abyssal_decor:cinnamon_stick', 2),
		[
			'abyssal_decor:cinnamon_sapling'
		]
	)

	event.shaped(
		Item.of('abyssal_decor:scrimshaw_cave'),
		[
			' A ',
			' A ',
			' B '
		], {
			A: 'minecraft:quartz',
			B: 'minecraft:iron_ingot'
		}
	)

	event.stonecutting('abyssal_decor:cinnamon_shingles', 'abyssal_decor:cinnamon_wood')

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
			B: 'tombstone:grave_dust'
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
			B: 'forbidden_arcanus:arcane_crystal_dust'
		}
	)

	//Fix Altar Recipe Overlap

	event.shaped(
		Item.of('eidolon:wooden_altar', 3),
		[
			'AAA',
			'B B',
			'B B'
		], {
			A: 'minecraft:spruce_slab',
			B: 'minecraft:spruce_fence'
		}
	)
})