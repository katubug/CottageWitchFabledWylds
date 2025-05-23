BlockEvents.placed('kubejs:sheep_cheese_unripe', event => { 
    let { level, entity } = event
    entity.getServer().scheduleInTicks(6000, () => { //6000 (300s * 20ticks)
        //check if the unripe cheese still exists at this location, and update it
        if(level.getBlock(event.block.pos).id == 'kubejs:sheep_cheese_unripe'){
            event.block.set('meadow:sheep_cheese_block')
        }
    })
})

BlockEvents.placed('kubejs:grain_cheese_unripe', event => { 
    let { level, entity } = event
    entity.getServer().scheduleInTicks(6000, () => { //6000 (300s * 20ticks)
        //check if the unripe cheese still exists at this location, and update it
        if(level.getBlock(event.block.pos).id == 'kubejs:grain_cheese_unripe'){
            event.block.set('meadow:grain_cheese_block')
        }
    })
})

BlockEvents.placed('kubejs:amethyst_cheese_unripe', event => { 
    let { level, entity } = event
    entity.getServer().scheduleInTicks(6000, () => { //6000 (300s * 20ticks)
        //check if the unripe cheese still exists at this location, and update it
        if(level.getBlock(event.block.pos).id == 'kubejs:amethyst_cheese_unripe'){
            event.block.set('meadow:amethyst_cheese_block')
        }
    })
})

BlockEvents.placed('kubejs:buffalo_cheese_unripe', event => { 
    let { level, entity } = event
    entity.getServer().scheduleInTicks(6000, () => { //6000 (300s * 20ticks)
        //check if the unripe cheese still exists at this location, and update it
        if(level.getBlock(event.block.pos).id == 'kubejs:buffalo_cheese_unripe'){
            event.block.set('meadow:buffalo_cheese_block')
        }
    })
})

BlockEvents.placed('kubejs:warped_cheese_unripe', event => { 
    let { level, entity } = event
    entity.getServer().scheduleInTicks(6000, () => { //6000 (300s * 20ticks)
        //check if the unripe cheese still exists at this location, and update it
        if(level.getBlock(event.block.pos).id == 'kubejs:warped_cheese_unripe'){
            event.block.set('meadow:warped_cheese_block')
        }
    })
})