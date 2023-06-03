const { Client, GatewayIntentBits, Partials } = require("discord.js")
const keepalive = require("./server.js")
const commandsInit = require("./commands/commands.initialisator.js")
const commandsInteractionInit = require("./commands/commands.interaction.js")
const dotenv = require("dotenv")
dotenv.config()

const BOT_TOKEN = process.env.BOT_TOKEN_TEST

const commandGuildId = process.env.COMMAND_GUILD_ID // ID сервера для роботи бота лише на певному сервері

const channelID = process.env.CHANNEL_ID // Канал для доган

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
    partials: [Partials.Channel],
})

commandsInit(client, commandGuildId) // All commands initialisator

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return

    // Check if command was sent in the specific channel
    if (interaction.channelId !== channelID) return

    commandsInteractionInit(interaction, channelID)
})

client.login(BOT_TOKEN)

keepalive()
