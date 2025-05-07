EntityEvents.spawned('minecraft:item', event => {
    if (event.entity.item == 'hexerei:mandrake_root') {
        event.entity.setItem('enchanted:mandrake_root')
        //console.log(event.entity)
    }
})