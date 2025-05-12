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

	//Remove Quark Rope Tags
	event.removeAllTagsFrom('quark:rope')
	event.removeAllTagsFrom('supplementaries:rope')
	event.removeAllTagsFrom('farm_and_charm:minced_beef')
	event.removeAllTagsFrom('candlelight:beef_tartare')

})