LootJS.modifiers((event) => {

	event.addEntityLootModifier("swampier_swamps:dragonfly")
    .addLoot("crittersandcompanions:dragonfly_wing")
	.randomChance(0.7)

	event
		.addLootTableModifier("minecraft:chests/nether_bridge")
		.randomChance(0.1)
        .addLoot("minecraft:netherite_upgrade_smithing_template");

})