ItemEvents.entityInteracted('minecraft:shears', (event) => {
    const {
      player,
      hand,
      target,
      target: { x, y, z },
      level,
      server,
    } = event;
  
    if (hand !== 'MAIN_HAND' || target.type !== 'unusualprehistory:veloci') return;
    player.swing(hand, true);
    event.server.runCommandSilent(`playsound minecraft:entity.sheep.shear player @a ${x} ${y} ${z} 10`)
    const itemEntity = level.createEntity('item');
    itemEntity.item = Item.of('unusualprehistory:raptor_feathers', 1);
    itemEntity.setPos(x, y + 1, z);
    itemEntity.spawn();
  
  });