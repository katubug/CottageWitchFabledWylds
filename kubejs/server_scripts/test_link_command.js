ServerEvents.commandRegistry(event => {
	const FEEDBACK_COMMAND_NAME = "feedback"
	const FEEDBACK_URL =
		"https://discord.com/channels/1076365835284787220/1211739023333265459"

	const {
		commands: Commands
	} = event;

	function showFeedback(player) {
		player.tell(Text.of({
			underlined: false,
			text: "Here is a clickable link where you can provide feedback: " +
				FEEDBACK_URL,
			color: "gold",
			click: {
				action: "open_url",
				value: FEEDBACK_URL
			}
		}));
		return 1;
	}

	event.register(
		Commands.literal(FEEDBACK_COMMAND_NAME)
		.executes(c => showFeedback(c.source.player))
	);
});