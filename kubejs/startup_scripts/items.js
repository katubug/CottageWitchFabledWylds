// Listen to item registry event

StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json

  })
  

  ItemEvents.modification(event => {

    event.modify('unusualprehistory:zuloagae', item => {
      item.burnTime = 100
    })

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
      let attribute = item.getAttributes("generic.attack_damage").get(0)
      //we need to remove the sword's current attribute so we overwrite the whole attribute of the sword
      item.removeAttribute("generic.attack_damage", attribute.id)
      //here we add the final attribute, the attribute.id in this case will be the attribute's UUID
      //this here (attribute.amount + boost) is adding our boost (in this case its set to 3) to the current attack damage
      //of the sword, attribute.operation will grab the operation of the sword's generic.attack_damage(whatever the mod/minecraft)
      //decided to use for it, in this case it is addition
      item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
  });

    event.modify('forbidden_arcanus:draco_arcanus_shovel', item => {
      let boost = -3
      let attribute = item.getAttributes("generic.attack_damage").get(0)
      item.removeAttribute("generic.attack_damage", attribute.id)
      item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
  });

    event.modify('forbidden_arcanus:draco_arcanus_axe', item => {
      let boost = -3
      let attribute = item.getAttributes("generic.attack_damage").get(0)
      item.removeAttribute("generic.attack_damage", attribute.id)
      item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
  });

  event.modify('delightful:draco_arcanus_knife', item => {
    let boost = -2
    let attribute = item.getAttributes("generic.attack_damage").get(0)
    item.removeAttribute("generic.attack_damage", attribute.id)
    item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

  event.modify('aquamirae:coral_lance', item => {
    let boost = -2
    let attribute = item.getAttributes("generic.attack_damage").get(0)
    item.removeAttribute("generic.attack_damage", attribute.id)
    item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
  });

event.modify('unusualprehistory:warpick', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('unusualprehistory:macuahuitl', item => {
  let boost = -2
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('unusualprehistory:handmade_club', item => {
  let boost = -3
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('lost_aether_content:phoenix_sword', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('lost_aether_content:phoenix_axe', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('deep_aether:stratus_sword', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('deep_aether:stratus_axe', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('experienceobelisk:cognitive_axe', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('deep_aether:skyjade_sword', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

event.modify('eidolon:deathbringer_scythe', item => {
  let boost = -1
  let attribute = item.getAttributes("generic.attack_damage").get(0)
  item.removeAttribute("generic.attack_damage", attribute.id)
  item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
});

// Gravitite Armor

event.modify('aether:gravitite_helmet', item => {
  item.armorProtection = 2
  item.armorToughness = 2
});

event.modify('aether:gravitite_chestplate', item => {
  item.armorProtection = 7
  item.armorToughness = 2
});

event.modify('aether:gravitite_leggings', item => {
  item.armorProtection = 5
  item.armorToughness = 2
});

event.modify('aether:gravitite_boots', item => {
  item.armorProtection = 2
  item.armorToughness = 2
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

// Food nerfing

event.modify('unusualprehistory:defrosted_frozen_fossil', item => {
  item.foodProperties = food => {
      food.hunger(4)
      food.saturation(2)
  }
});

})


StartupEvents.registry('block', event => {

  //Emmu Blocks
  event.create('bat_wallpaper', 'cardinal')
  .model('kubejs:block/bat_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('Bat Wallpaper') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('skull_wallpaper', 'cardinal')
  .model('kubejs:block/skull_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('Skull Wallpaper') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('witch_cat_plushie')
  .model('kubejs:block/witch_cat_plushie')
  .soundType('wool')
  .fullBlock(false)
  .defaultCutout()
  .hardness(1.5)
  .displayName('Witch Cat Plushie') 


  // Carved Warped Logs
  event.create('carved_warped_1', 'cardinal')
  .model('kubejs:block/carved_warped_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Vertical') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_2', 'cardinal')
  .model('kubejs:block/carved_warped_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_3', 'cardinal')
  .model('kubejs:block/carved_warped_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Top') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_4', 'cardinal')
  .model('kubejs:block/carved_warped_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Bottom') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_5', 'cardinal')
  .model('kubejs:block/carved_warped_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Eerie') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_6', 'cardinal')
  .model('kubejs:block/carved_warped_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Curve') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_7', 'cardinal')
  .model('kubejs:block/carved_warped_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Unsettling') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_8', 'cardinal')
  .model('kubejs:block/carved_warped_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Head') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Acacia Logs
  event.create('carved_acacia_1', 'cardinal')
  .model('kubejs:block/carved_acacia_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Flower')
  .tagBlock('minecraft:mineable/axe')

  event.create('carved_acacia_2', 'cardinal')
  .model('kubejs:block/carved_acacia_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Cross') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_3', 'cardinal')
  .model('kubejs:block/carved_acacia_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Brace') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_4', 'cardinal')
  .model('kubejs:block/carved_acacia_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Edge') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_5', 'cardinal')
  .model('kubejs:block/carved_acacia_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Diamond') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_6', 'cardinal')
  .model('kubejs:block/carved_acacia_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Lined') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - rotation
  event.create('carved_acacia_7', 'cardinal')
  .model('kubejs:block/carved_acacia_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Corner') 
  .tagBlock('minecraft:mineable/axe') 
  

  event.create('carved_acacia_8', 'cardinal')
  .model('kubejs:block/carved_acacia_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Bracket') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Birch Logs
event.create('carved_birch_1', 'cardinal')
.model('kubejs:block/carved_birch_1')
.soundType('wood')
.hardness(2)
.displayName('Carved Birch Wood Horizontal') 
.tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_birch_2', 'cardinal')
  .model('kubejs:block/carved_birch_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood End Cap') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_3', 'cardinal')
  .model('kubejs:block/carved_birch_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Inlay') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_4', 'cardinal')
  .model('kubejs:block/carved_birch_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Arched') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_5', 'cardinal')
  .model('kubejs:block/carved_birch_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Embossed') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_birch_6', 'cardinal')
  .model('kubejs:block/carved_birch_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Corner') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_7', 'cardinal')
  .model('kubejs:block/carved_birch_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Fleur de Lis') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_8', 'cardinal')
  .model('kubejs:block/carved_birch_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Vertical') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Crimson Logs
event.create('carved_crimson_1', 'cardinal')
.model('kubejs:block/carved_crimson_1')
.soundType('wood')
.hardness(2)
.displayName('Carved Crimson Wood Vertical') 
.tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_2', 'cardinal')
  .model('kubejs:block/carved_crimson_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_3', 'cardinal')
  .model('kubejs:block/carved_crimson_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Curve') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_4', 'cardinal')
  .model('kubejs:block/carved_crimson_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Celestial') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_5', 'cardinal')
  .model('kubejs:block/carved_crimson_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Lunar') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_6', 'cardinal')
  .model('kubejs:block/carved_crimson_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Rune Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_7', 'cardinal')
  .model('kubejs:block/carved_crimson_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Rune Vertical') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_crimson_8', 'cardinal')
  .model('kubejs:block/carved_crimson_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Corner') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Dark Oak Logs
  event.create('carved_dark_oak_1', 'cardinal')
  .model('kubejs:block/carved_dark_oak_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Scales') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_2', 'cardinal')
  .model('kubejs:block/carved_dark_oak_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Clouds') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_3', 'cardinal')
  .model('kubejs:block/carved_dark_oak_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_4', 'cardinal')
  .model('kubejs:block/carved_dark_oak_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Head') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_5', 'cardinal')
  .model('kubejs:block/carved_dark_oak_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Vertical') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - rotation
  event.create('carved_dark_oak_6', 'cardinal')
  .model('kubejs:block/carved_dark_oak_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Leg') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_7', 'cardinal')
  .model('kubejs:block/carved_dark_oak_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Tail') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_8', 'cardinal')
  .model('kubejs:block/carved_dark_oak_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Oni') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Spruce Logs
  event.create('carved_spruce_1', 'cardinal')
  .model('kubejs:block/carved_spruce_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Eagle') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_spruce_2', 'cardinal')
  .model('kubejs:block/carved_spruce_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Wing') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_3', 'cardinal')
  .model('kubejs:block/carved_spruce_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Talons') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_4', 'cardinal')
  .model('kubejs:block/carved_spruce_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Villager') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_5', 'cardinal')
  .model('kubejs:block/carved_spruce_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Paws') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_6', 'cardinal')
  .model('kubejs:block/carved_spruce_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Beast') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_7', 'cardinal')
  .model('kubejs:block/carved_spruce_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_8', 'cardinal')
  .model('kubejs:block/carved_spruce_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Vertical') 
  .tagBlock('minecraft:mineable/axe') 

})

// Make Potions Stackable

ItemEvents.modification(event =>{
  event.modify('minecraft:potion', item =>{
    item.maxStackSize = 16
    })

  event.modify('minecraft:lingering_potion', item =>{
    item.maxStackSize = 16
    })

  event.modify('minecraft:splash_potion', item =>{
    item.maxStackSize = 16
    })

    
})

BlockEvents.modification(event => {

  let starstone = [
    'abyssal_decor:starstone_tiles',
    'abyssal_decor:lapis_pillar',
    'abyssal_decor:gilded_lapis_pillar',
    'abyssal_decor:chiseled_starstone',
    'abyssal_decor:chiseled_starstone',
    'abyssal_decor:polished_starstone_wall',
    'abyssal_decor:polished_starstone_slab',
    'abyssal_decor:polished_starstone_stairs',
    'abyssal_decor:polished_starstone',
    'abyssal_decor:starstone_pillar',
    'abyssal_decor:smooth_starstone',
    'abyssal_decor:gilded_starstone',
    'abyssal_decor:starstone'
  ];

  for (const stars of starstone) {
    event.modify(stars, block => {
      block.lightEmission = 10
    })
  }   

    event.modify('abyssal_decor:starry_pearl_tiles', block => {
      block.lightEmission = 5
    })
  
})