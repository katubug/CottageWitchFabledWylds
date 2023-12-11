ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        //Removed Recipes
        {output: 'ends_delight:purpur_knife'},
        {output: 'ends_delight:end_stone_knife'},
        {output: 'ends_delight:dragon_egg_shell_knife'},
        {output: 'farmersdelight:golden_knife'},
        {output: 'aquaculture:neptunium_helmet'},
        {output: 'aquaculture:neptunium_leggings'},
        {output: 'aquaculture:neptunium_chestplate'},
        {output: 'aquaculture:neptunium_boots'},
        {output: 'aquaculture:neptunium_bow'},
        {output: 'aquaculture:neptunium_sword'},
        {output: 'aquaculture:neptunium_axe'},
        {output: 'aquaculture:neptunes_bounty'},
        {output: 'aquaculture:wooden_fillet_knife'},
        {output: 'aquaculture:stone_fillet_knife'},
        {output: 'aquaculture:iron_fillet_knife'},
        {output: 'aquaculture:gold_fillet_knife'},
        {output: 'aquaculture:diamond_fillet_knife'},
        {output: 'aquaculture:oak_fish_mount'},
        {output: 'aquaculture:spruce_fish_mount'},
        {output: 'aquaculture:birch_fish_mount'},
        {output: 'aquaculture:jungle_fish_mount'},
        {output: 'aquaculture:acacia_fish_mount'},
        {output: 'aquaculture:dark_oak_fish_mount'},
        {output: 'nameless_trinkets:missing_page'}, 
        {output: 'nameless_trinkets:what_magnet'}, 
        {output: 'nameless_trinkets:explosion_proof_jacket'}, 
        {output: 'nameless_trinkets:ghast_eye'}, 
        {output: 'nameless_trinkets:electric_paddle'}, 
        {output: 'nameless_trinkets:sleeping_pills'},
    ];
    
      for (const remove of toRemove) {
        event.remove(remove);
    }
})