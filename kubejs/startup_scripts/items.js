// Listen to item registry event

StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json

    event.create('lunar_coin').maxStackSize(64).displayName("Lunar Coin")
    event.create('solar_coin').maxStackSize(64).displayName("Solar Coin")
    event.create('arcane_coin').maxStackSize(64).displayName("Arcane Coin")

    /*
    ItemEvents.modification (event => {
      let dArcanus = Item.of('forbidden_arcanus:draco_arcanus_sword').item
      let attackDamageField = dArcanus.class.getDeclaredField("attackDamage");
      attackDamageField.setAccessible(true)
      attackDamageField.setFloat(dArcanus, 9);
    })*/

    

  })

  ItemEvents.modification(event => {
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

    event.modify('unusualprehistory:defrosted_frozen_fossil', item => {
      item.foodProperties = food => {
          food.hunger(2)
          food.saturation(3)
      }
    });

})


StartupEvents.registry('block', event => {

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