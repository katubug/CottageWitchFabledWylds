LootJS.modifiers((event) => {
	
	event.addEntityLootModifier("minecraft:husk")
    .addLoot("tombstone:grave_dust")
	.randomChance(0.3)

	event.addEntityLootModifier("minecraft:skeleton")
    .addLoot("tombstone:grave_dust")
	.randomChance(0.3)

	event.addEntityLootModifier("minecraft:stray")
    .addLoot("tombstone:grave_dust")
	.randomChance(0.3)

	event.addEntityLootModifier("minecraft:wither_skeleton")
    .addLoot("tombstone:grave_dust")
	.randomChance(0.3)

	event.addEntityLootModifier("minecraft:zombie_villager")
    .addLoot("tombstone:grave_dust")
	.randomChance(0.3)

})