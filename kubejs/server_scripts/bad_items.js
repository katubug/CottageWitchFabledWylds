EntityEvents.spawned('minecraft:item', event => {
    if (event.entity.item == 'hexerei:mandrake_root') {
        event.entity.setItem('enchanted:mandrake_root')
    }

    if (event.entity.item == 'hexalia:salt') {
        event.entity.setItem('spelunkery:salt')
    }
})