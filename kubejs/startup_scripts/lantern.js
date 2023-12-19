ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingChangeTargetEvent', event => {
    //set the global changetarget function into here and restart your game once
    global.changetarget(event)
})

/**
 * 
 * @param {Internal.LivingChangeTargetEvent} event 
 */
global.changetarget = event => {
    //since this is a global event you can run /kubejs reload startup_scripts to reload whatever is in here without
    //restarting the entire game!
    let { newTarget } = event
    if (newTarget == null) return
    if (newTarget.mainHandItem.id == 'meadow:oil_lantern') {
        event.setNewTarget(null)
    }
}