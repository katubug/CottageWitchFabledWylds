ItemEvents.modification(event => {
	event.modify('usefulslime:slime_boots', item => {
		item.maxDamage = 300
	})
	event.modify('usefulslime:slime_sling', item => {
		item.maxDamage = 300
	})
	event.modify('forbidden_arcanus:draco_arcanus_sword', item => {
		item.attackDamage = 9
		item.fireResistant = true
		item.rarity = "EPIC"
	})
	event.modify('forbidden_arcanus:draco_arcanus_shovel', item => {
		item.fireResistant = true
		item.rarity = "EPIC"
	})
	event.modify('forbidden_arcanus:draco_arcanus_pickaxe', item => {
		item.fireResistant = true
		item.rarity = "EPIC"
	})
	event.modify('forbidden_arcanus:draco_arcanus_axe', item => {
		item.fireResistant = true
		item.rarity = "EPIC"
	})
	event.modify('delightful:draco_arcanus_knife', item => {
		item.fireResistant = true
		item.rarity = "EPIC"
	})
	//defining the sword we want to modify
	event.modify('forbidden_arcanus:draco_arcanus_pickaxe', item => {
		//boost is the amount we want to add to the diamond sword's current damage, eventually totaling 10 (diamond sword has 7 by default)
		let boost = -3
		//attribute is the item's current attribute, we need this so we can use it in the addAttribute later
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		//we need to remove the sword's current attribute so we overwrite the whole attribute of the sword
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		//here we add the final attribute, the attribute.id in this case will be the attribute's UUID
		//this here (attribute.amount + boost) is adding our boost (in this case its set to 3) to the current attack damage
		//of the sword, attribute.operation will grab the operation of the sword's generic.attack_damage(whatever the mod/minecraft)
		//decided to use for it, in this case it is addition
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});
	event.modify('forbidden_arcanus:draco_arcanus_shovel', item => {
		let boost = -3
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});
	event.modify('forbidden_arcanus:draco_arcanus_axe', item => {
		let boost = -3
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});
	event.modify('delightful:draco_arcanus_knife', item => {
		let boost = -2
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});
	event.modify('unusualprehistory:warpick', item => {
		let boost = -1
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});
	event.modify('unusualprehistory:macuahuitl', item => {
		let boost = -2
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});
	event.modify('unusualprehistory:handmade_club', item => {
		let boost = -3
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});
	
	event.modify('experienceobelisk:cognitive_axe', item => {
		let boost = -1
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

	//Draco Arcanus Armor
	event.modify('forbidden_arcanus:draco_arcanus_helmet', item => {
		item.armorProtection = 4
		item.armorToughness = 3
	});
	event.modify('forbidden_arcanus:draco_arcanus_chestplate', item => {
		item.armorProtection = 9
		item.armorToughness = 3
	});
	event.modify('forbidden_arcanus:draco_arcanus_leggings', item => {
		item.armorProtection = 7
		item.armorToughness = 3
	});
	event.modify('forbidden_arcanus:draco_arcanus_boots', item => {
		item.armorProtection = 4
		item.armorToughness = 3
	});
	//Draco Arcanus Armor
	event.modify('forbidden_arcanus:draco_arcanus_helmet', item => {
		item.armorProtection = 4
		item.armorToughness = 3
	});
	event.modify('forbidden_arcanus:draco_arcanus_chestplate', item => {
		item.armorProtection = 9
		item.armorToughness = 3
	});
	event.modify('forbidden_arcanus:draco_arcanus_leggings', item => {
		item.armorProtection = 7
		item.armorToughness = 3
	});
	event.modify('forbidden_arcanus:draco_arcanus_boots', item => {
		item.armorProtection = 4
		item.armorToughness = 3
	});
	event.modify('unusualprehistory:defrosted_frozen_fossil', item => {
		item.foodProperties = food => {
			food.hunger(4)
			food.saturation(2)
		}
	});
	event.modify('unusualprehistory:zuloagae', item => {
		item.burnTime = 100
	})
})