const dogParams = require("./dog.command/dog-command.structure")

module.exports = async function commandsInit(client, commandGuildId) {
    client.on("ready", async () => {
        console.log(`Logged in as ${client.user.tag}!`)
        try {
            const commands = [
                //Command (Name+description) but without main construction
                {
                    name: "dog",
                    description: "Догана",
                    options: dogParams,
                },
                {
                    name: "undog",
                    description: "Догана",
                    options: dogParams,
                },
            ]
            const commandsRegistered = await client.application.commands.set(
                commands,
                commandGuildId,
            )

            console.log(
                `Registered slash commands: ${commandsRegistered
                    .map((command) => command.name)
                    .join(", ")}`,
            )
        } catch (error) {
            console.error(error)
        }
    })
}
