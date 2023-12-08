// priority: 0

JEIEvents.hideItems(event => {
    // Disabled Items Removal
    let toHide = [
        'crabbersdelight:lanternfish_barrel',
        'aquaculture:neptunium_helmet',
        'aquaculture:neptunium_leggings',
        'aquaculture:neptunium_chestplate',
        'aquaculture:neptunium_boots',
        'aquaculture:neptunium_bow',
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunes_bounty',
        'aquaculture:wooden_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:diamond_fillet_knife',
        'aquaculture:oak_fish_mount',
        'aquaculture:spruce_fish_mount',
        'aquaculture:birch_fish_mount',
        'aquaculture:jungle_fish_mount',
        'aquaculture:acacia_fish_mount',
        'aquaculture:dark_oak_fish_mount',
        'itemfilters:custom', 
        'itemfilters:weak_nbt', 
        'itemfilters:strong_nbt', 
        'itemfilters:max_count', 
        'itemfilters:block', 
        'itemfilters:damage', 
        'itemfilters:id_regex', 
        'itemfilters:always_true', 
        'itemfilters:always_false', 
        'itemfilters:or', 
        'itemfilters:and', 
        'itemfilters:not', 
        'minecraft:debug_stick', 
        'itemfilters:xor', 
        'itemfilters:tag', 
        'itemfilters:mod', 
        'minecraft:structure_void', 
        'minecraft:barrier', 
        'minecraft:light', 
        'minecraft:jigsaw', 
        'minecraft:structure_block',
        'candlelight:tomato_seeds', 
        'candlelight:tomato', 
        'candlelight:lettuce_seeds', 
        'candlelight:lettuce',
        'candlelight:tomato_crate', 
        'candlelight:lettuce_crate',

    ];
    
      for (const hide of toHide) {
        event.hide(hide);
    }
})