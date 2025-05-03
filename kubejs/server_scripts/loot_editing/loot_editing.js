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

	event
		.addLootTableModifier("minecraft:chests/nether_bridge")
		.randomChance(0.1)
        .addLoot("minecraft:netherite_upgrade_smithing_template");

})