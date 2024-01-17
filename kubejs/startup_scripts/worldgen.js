/*WorldgenEvents.add((event) => {
    let anchors = event.getAnchors()
    event.addOre((ore) =>{//we are adding ore
      ore.biomes = { not: 'minecraft:ocean' }
      ore.id = 'meadow:alpine_salt_ore'//here you put id your ore`s id
      ore.addTarget(['minecraft:stone','meadow:limestone'], 'meadow:alpine_salt_ore')//make this ore spawn in deepslate
      ore.size(5)
      ore.worldgenLayer = 'underground_ores'
      ore.count([15, 20])//min and max count of ore you can find             
        .squared()                    
        .triangleHeight(                      
          anchors.aboveBottom(64),//how many blocks above y-64 it should spawn 
          anchors.absolute(200)//the biggest y where you can find it          
        )    
    })
  })
  */