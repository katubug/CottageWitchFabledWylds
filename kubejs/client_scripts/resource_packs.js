const MinecraftClient = java('net.minecraft.client.Minecraft');
const ResourceOverridesManager = java('fuzs.resourcepackoverrides.client.data.ResourceOverridesManager')
onEvent('client.init', event => {
    const instance = MinecraftClient.getInstance();

    instance.options.resourcePacks.clear()
    let resourcePacks = ResourceOverridesManager.getDefaultResourcePacks(true)
    for(let i=0;i<resourcePacks.size();++i) {
        instance.options.resourcePacks.add(resourcePacks.get(i))
    }
    instance.options.save()
    instance.reloadResourcePacks()
})