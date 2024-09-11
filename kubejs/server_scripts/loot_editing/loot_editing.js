LootJS.modifiers((event) => {
	//replaced item, replacing item, match stack size
	event.addBlockLootModifier('galosphere:silver_ore').replaceLoot('galosphere:raw_silver', 'eidolon:raw_silver', true)
	event.addBlockLootModifier('galosphere:deepslate_silver_ore').replaceLoot('galosphere:raw_silver', 'eidolon:raw_silver', true)
	event.addBlockLootModifier('dawnoftimebuilder:maize').replaceLoot('dawnoftimebuilder:maize', 'farm_and_charm:corn', true)

})