ServerEvents.tags('item', event => {
	//Dough
	event.removeAllTagsFrom('bakery:dough',
		'candlelight:dough',
		'create:dough',
		'vegandelight:salt')

	//why are plushies wool??
	event.remove('minecraft:wool', [
		'#perfectplushies:village_plushies',
		"#perfectplushies:treasure_plushies",
		"#perfectplushies:rare_treasure_plushies"
	])

	event.remove('forge:chocolate', 'candlelight:chocolate_mousse')

	//Remove All Tags
	let toNuke = [
		'easy_mob_farm:milk_bottle', 
      	'hexerei:milk_bottle',
		'quark:rope',
		'supplementaries:rope',
		'farm_and_charm:minced_beef',
		'farm_and_charm:flour',
		'meadow:piece_of_goat_cheese',
		'meadow:piece_of_cheese',
		'hearthandharvest:cherry',
		'hexalia:salt',
		'autumnity:syrup_bottle',
		'#forge:eggs'
	]

	for (const nuke of toNuke) {
        event.removeAllTagsFrom(nuke);
    } 

})