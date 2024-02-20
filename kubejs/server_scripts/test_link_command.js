/*ServerEvents.commandRegistry( event => {
    const {commands: Commands} = event

    event.register(
        Commands.literal('feedback').executes(ctx => {
            let player = ctx.source.player
            let cmd = `/tellraw ${player.username} ["",{"text":"Here is a link where you can provide feedback:","color":"cyan","bold":true,"underlined":false,"clickEvent":{"action":"open_url","value":""}}]`
            console.log(cmd)
            event.server.runCommand(cmd)
        })
    )
})
*/

ServerEvents.commandRegistry(event => {
    const FEEDBACK_COMMAND_NAME = "feedback"
    const FEEDBACK_URL = "https://forms.gle/TGzn8gMH3ttNQzM59"

    const {commands: Commands} = event;

    function showFeedback(player) {
        player.tell(Text.of({underlined: false, text: "Here is a clickable link where you can provide feedback: " + FEEDBACK_URL, color: "gold", click: {action: "open_url", value: FEEDBACK_URL}}));
        return 1;
    }

    event.register(
        Commands.literal(FEEDBACK_COMMAND_NAME)
        .executes(c => showFeedback(c.source.player))
    );
});