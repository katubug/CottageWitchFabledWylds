// Listen to player login event
PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Give some items to player
      event.player.give('ftbquests:book')
      event.player.give(Item.of('farmersdelight:flint_knife', '{Damage:0}'))
      event.player.give(Item.of('sophisticatedbackpacks:gold_backpack', '{contentsUuid:[I;-2077438053,-1252441876,-1532526952,1627684290],inventorySlots:81,renderInfo:{upgradeItems:[{Count:1b,id:"minecraft:air"},{Count:1b,id:"minecraft:air"},{Count:1b,id:"minecraft:air"}]},upgradeSlots:3}'))
      event.player.give(Item.of('reliquary:mob_charm', '{Damage:0,entity:"minecraft:witch"}'))
      event.player.give('reliquary:witch_hat')
      event.player.give('comforts:sleeping_bag_cyan')
       }
  })