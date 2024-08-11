// Listen to player login event
PlayerEvents.loggedIn(event => {
  const { player, server } = event;
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Open Book
      event.server.scheduleInTicks(2 * 20, callback => {
        let cmd = `/ftbquests open_book`
        console.log("running "+cmd+" for player...")
        event.player.runCommand(cmd)
    })
      // Give some items to player
      console.log("Giving starting items...")
      event.player.give('ftbquests:book')
      event.player.give(Item.of('farmersdelight:flint_knife'))
      event.player.give(Item.of('reliquary:mob_charm', '{Damage:0,entity:"minecraft:witch"}'))
      event.player.give('reliquary:witch_hat')
      event.player.give('comforts:sleeping_bag_cyan')
      
      }
  })