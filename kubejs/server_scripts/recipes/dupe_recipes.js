ServerEvents.recipes(event => {
	// Plushie Duplication
	let plushDupe = [
		'plushies:white_rabbit_plushie',
		'plushies:brown_rabbit_plushie',
		'plushies:ocelot_plushie',
		'plushies:bat_plushie',
		'plushies:sniffer_plushie',
		'plushies:goat_plushie',
		'plushies:polar_bear_plushie',
		'plushies:snow_golem_plushie',
		'plushies:pig_plushie',
		'plushies:horse_plushie',
		'plushies:bee_plushie',
		'plushies:cat_plushie',
		'plushies:chicken_plushie',
		'plushies:wolf_plushie',
		'plushies:allay_plushie',
		'plushies:red_fox_plushie',
		'plushies:mooshroom_plushie',
		'plushies:sheep_plushie',
		'plushies:cow_plushie',
		'plushies:llama_plushie',
		'plushies:camel_plushie',
		'plushies:panda_plushie',
		'plushies:parrot_plushie',
		'plushies:white_fox_plushie',
		'plushies:killer_bunny_plushie',
		'plushies:iron_golem_plushie',
		'plushies:wandering_trader_plushie',
		'plushies:villager_plushie',
		'plushies:toast_rabbit_plushie',
		'plushies:white_splotched_rabbit_plushie',
		'plushies:yellow_rabbit_plushie',
		'plushies:salt_rabbit_plushie',
		'plushies:black_rabbit_plushie',
		'plushies:skeleton_plushie',
		'plushies:stray_plushie',
		'plushies:skeleton_horse_plushie',
		'plushies:spider_plushie',
		'plushies:cave_spider_plushie',
		'plushies:warden_plushie',
		'plushies:wither_plushie',
		'plushies:phantom_plushie',
		'plushies:silverfish_plushie',
		'plushies:slime_plushie',
		'plushies:zombie_plushie',
		'plushies:husk_plushie',
		'plushies:drowned_plushie',
		'plushies:axolotl_plushie',
		'plushies:dolphin_plushie',
		'plushies:squid_plushie',
		'plushies:glow_squid_plushie',
		'plushies:guardian_plushie',
		'plushies:elder_guardian_plushie',
		'plushies:turtle_plushie',
		'plushies:frog_plushie',
		'plushies:warm_frog_plushie',
		'plushies:cold_frog_plushie',
		'plushies:tadpole_plushie',
		'plushies:salmon_plushie',
		'plushies:cod_plushie',
		'plushies:pufferfish_plushie',
		'plushies:zombie_villager_plushie',
		'plushies:pillager_plushie',
		'plushies:illusioner_plushie',
		'plushies:vindicator_plushie',
		'plushies:evoker_plushie',
		'plushies:witch_plushie',
		'plushies:ravager_plushie',
		'plushies:vex_plushie',
		'plushies:creeper_plushie',
		'plushies:magma_cube_plushie',
		'plushies:enderman_plushie',
		'plushies:endermite_plushie',
		'plushies:shulker_plushie',
		'plushies:dragon_plushie',
		'plushies:wither_skeleton_plushie',
		'plushies:piglin_plushie',
		'plushies:piglin_brute_plushie',
		'plushies:zombiefied_piglin_plushie',
		'plushies:blaze_plushie',
		'plushies:ghast_plushie',
		'plushies:hoglin_plushie',
		'plushies:zoglin_plushie',
		'plushies:strider_plushie',
		'plushie_buddies:plushie_cow',
		'plushie_buddies:plushie_chicken',
		'plushie_buddies:plushie_cat',
		'plushie_buddies:plushie_camel',
		'plushie_buddies:plushie_blaze',
		'plushie_buddies:plushie_axolotl',
		'plushie_buddies:plushie_allay',
		'plushie_buddies:plushie_bat',
		'plushie_buddies:plushie_bee',
		'plushie_buddies:plushie_wither',
		'plushie_buddies:plushie_witch',
		'plushie_buddies:plushie_wandering_trader',
		'plushie_buddies:plushie_warden',
		'plushie_buddies:plushie_vindicator',
		'plushie_buddies:plushie_villager',
		'plushie_buddies:plushie_vex',
		'plushie_buddies:plushie_zombified_piglin',
		'plushie_buddies:plushie_zombie_villager',
		'plushie_buddies:plushie_zombie',
		'plushie_buddies:plushie_zoglin',
		'plushie_buddies:plushie_wolf',
		'plushie_buddies:plushie_wither_skeleton',
		'plushie_buddies:plushie_turtle',
		'plushie_buddies:plushie_trader_lama',
		'plushie_buddies:plushie_ravanger',
		'plushie_buddies:plushie_rabbit',
		'plushie_buddies:plushie_pillager',
		'plushie_buddies:plushie_pufferfish',
		'plushie_buddies:plushie_polar_bear',
		'plushie_buddies:plushie_piglin_brute',
		'plushie_buddies:plushie_piglin',
		'plushie_buddies:plushie_pig',
		'plushie_buddies:plushie_phantom',
		'plushie_buddies:plushie_ghast',
		'plushie_buddies:plushie_goat',
		'plushie_buddies:plushie_horse',
		'plushie_buddies:plushie_hoglin',
		'plushie_buddies:plushie_husk',
		'plushie_buddies:plushie_magma_cube',
		'plushie_buddies:plushie_mooshroom',
		'plushie_buddies:plushie_panda',
		'plushie_buddies:plushie_parrot',
		'plushie_buddies:plushie_frog',
		'plushie_buddies:plushie_fox',
		'plushie_buddies:plushie_evoker',
		'plushie_buddies:plushie_enderman',
		'plushie_buddies:plushie_enderdragon',
		'plushie_buddies:plushie_drowned',
		'plushie_buddies:plushie_donkey',
		'plushie_buddies:plushie_dolphin',
		'plushie_buddies:plushie_creeper',
		'plushie_buddies:plushie_sheep',
		'plushie_buddies:plushie_skeleton',
		'plushie_buddies:plushie_skeleton_horse',
		'plushie_buddies:plushie_spider',
		'plushie_buddies:plushie_squid',
		'plushie_buddies:plushie_stray',
		'plushie_buddies:plushie_strider',
		'plushie_buddies:plushie_iron_golem',
		'plushie_buddies:plushie_sniffer'
	];

	for (const plush of plushDupe) {
		event.shaped(
			Item.of(plush, 2),
			[
				'AAA',
				'ABA',
				'AAA'
			], {
				A: '#minecraft:wool',
				B: plush
			}
		)
	}

	//Sherd Dupe
	let sherdDupe = [
		'minecraft:prize_pottery_sherd',
		'minecraft:snort_pottery_sherd',
		'gildedsherds:heart_pottery_sherd',
		'minecraft:brewer_pottery_sherd',
		'minecraft:angler_pottery_sherd',
		'minecraft:shelter_pottery_sherd',
		'gildedsherds:prize_pottery_sherd',
		'minecraft:heart_pottery_sherd',
		'gildedsherds:miner_pottery_sherd',
		'minecraft:skull_pottery_sherd',
		'minecraft:mourner_pottery_sherd',
		'minecraft:burn_pottery_sherd',
		'gildedsherds:plenty_pottery_sherd',
		'ohmysherd:snip_pottery_sherd',
		'minecraft:sheaf_pottery_sherd',
		'gildedsherds:mourner_pottery_sherd',
		'gildedsherds:archer_pottery_sherd',
		'minecraft:howl_pottery_sherd',
		'gildedsherds:danger_pottery_sherd',
		'gildedsherds:brewer_pottery_sherd',
		'ohmysherd:invader_pottery_sherd',
		'minecraft:danger_pottery_sherd',
		'gildedsherds:friend_pottery_sherd',
		'gildedsherds:arms_up_pottery_sherd',
		'minecraft:explorer_pottery_sherd',
		'gildedsherds:howl_pottery_sherd',
		'gildedsherds:blade_pottery_sherd',
		'spawn:crown_pottery_sherd',
		'gildedsherds:angler_pottery_sherd',
		'gildedsherds:sheaf_pottery_sherd',
		'gildedsherds:explorer_pottery_sherd',
		'spawn:spade_pottery_sherd',
		'minecraft:archer_pottery_sherd',
		'minecraft:blade_pottery_sherd',
		'gildedsherds:skull_pottery_sherd',
		'gildedsherds:snort_pottery_sherd',
		'minecraft:heartbreak_pottery_sherd',
		'gildedsherds:shelter_pottery_sherd',
		'minecraft:plenty_pottery_sherd',
		'minecraft:friend_pottery_sherd',
		'gildedsherds:burn_pottery_sherd',
		'minecraft:miner_pottery_sherd',
		'gildedsherds:heartbreak_pottery_sherd',
		'minecraft:arms_up_pottery_sherd',
		'ohmysherd:remains_pottery_sherd'
	];

	for (const sherd of sherdDupe) {
		event.shaped(
			Item.of(sherd, 2),
			[
				' A ',
				'ABA',
				' A '
			], {
				A: 'minecraft:brick',
				B: sherd
			}
		)
	}
})