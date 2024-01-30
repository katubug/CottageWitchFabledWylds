const $StructurePieceSerializationContext = Java.loadClass("net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext")
const $ChunkPos = Java.loadClass('net.minecraft.world.level.ChunkPos')

const structures_giving_effect = ["verdantvibes:fairy_circle"] // list of structures, giving effect, use "INVALID" for giving effect in no structure
const effect_id = "minecraft:mining_fatigue" // effect id
const effect_seconds = 20 // effect duration in seconds