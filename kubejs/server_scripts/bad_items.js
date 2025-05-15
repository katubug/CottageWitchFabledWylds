EntityEvents.spawned('minecraft:item', event => {
    if (event.entity.item == 'hexerei:mandrake_root') {
        event.entity.setItem('enchanted:mandrake_root')
    }

    if (event.entity.item == 'hexalia:salt') {
        event.entity.setItem('spelunkery:salt')
    }

    if (event.entity.item == 'mysticsbiomes:peach') {
        event.entity.setItem('fruitsdelight:peach')
    }

    if (event.entity.item == 'mysticsbiomes:cherries') {
        event.entity.setItem('vinery:cherry')
    }
})