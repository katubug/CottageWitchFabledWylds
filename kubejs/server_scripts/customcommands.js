ServerEvents.commandRegistry(event => {
    const THIRTYMIN_COMMAND_NAME = "thirtyminutes"

    const {commands: Commands} = event;

    function showThirtyMin(server) {
       server.runCommandSilent(`title @a times 20 100 20`)
       server.runCommandSilent(`title @a subtitle {"text":"in 30 minutes"}`)
       server.runCommandSilent(`title @a title {"text":"Server Restart","color":"red"}`)
        return 1;
    }

    event.register(
        Commands.literal(THIRTYMIN_COMMAND_NAME)
        .executes(c => showThirtyMin(c.source.server))
    );
});

ServerEvents.commandRegistry(event => {
    const FIVEMIN_COMMAND_NAME = "fiveminutes"

    const {commands: Commands} = event;

    function showFiveMin(server) {
       server.runCommandSilent(`title @a times 20 100 20`)
       server.runCommandSilent(`title @a subtitle {"text":"in 5 minutes"}`)
       server.runCommandSilent(`title @a title {"text":"Server Restart","color":"red"}`)
        return 1;
    }

    event.register(
        Commands.literal(FIVEMIN_COMMAND_NAME)
        .executes(c => showFiveMin(c.source.server))
    );
});

ServerEvents.commandRegistry(event => {
    const ONEMIN_COMMAND_NAME = "oneminute"

    const {commands: Commands} = event;

    function showOneMin(server) {
       server.runCommandSilent(`title @a times 20 100 20`)
       server.runCommandSilent(`title @a subtitle {"text":"in 1 minute"}`)
       server.runCommandSilent(`title @a title {"text":"Server Restart","color":"red"}`)
        return 1;
    }

    event.register(
        Commands.literal(ONEMIN_COMMAND_NAME)
        .executes(c => showOneMin(c.source.server))
    );
});