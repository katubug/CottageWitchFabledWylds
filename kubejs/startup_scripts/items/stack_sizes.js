ItemEvents.modification(event => {
	event.modify('minecraft:potion', item => {
		item.maxStackSize = 16
	})
	event.modify('minecraft:lingering_potion', item => {
		item.maxStackSize = 16
	})
	event.modify('minecraft:splash_potion', item => {
		item.maxStackSize = 16
	})
	event.modify('minecraft:egg', item => {
		item.maxStackSize = 64
	})
	event.modify('earthmobsmod:fancy_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('earthmobsmod:duck_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('mysticsbiomes:pink_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('mysticsbiomes:orange_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('mysticsbiomes:yellow_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('mysticsbiomes:lime_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('mysticsbiomes:cyan_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('mysticsbiomes:purple_egg', item => {
		item.maxStackSize = 64
	})
	event.modify('vegandelight:soymilk_bottle', item => {
		item.maxStackSize = 16
	})
})