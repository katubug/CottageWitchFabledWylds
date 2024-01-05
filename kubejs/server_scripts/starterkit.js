// Listen to player login event
PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Give some items to player
      event.player.give('ftbquests:book')
      event.player.give(Item.of('farmersdelight:flint_knife', '{Damage:0}'))
      event.player.give(Item.of('sophisticatedbackpacks:backpack', '{borderColor:1481884,clothColor:1481884}'))
       }
  })