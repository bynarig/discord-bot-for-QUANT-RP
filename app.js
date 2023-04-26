const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require('discord.js');
const params = require('./commands/dog-command.js')
const dotenv = require('dotenv')
const keepalive = require("./server.js")


dotenv.config()

BOT_TOKEN = process.env.BOT_TOKEN

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

const commandGuildId = '1081256011953881178'; // ID сервера для роботи бота лише на певному сервері
const channelID = '1097869511027331163'; // Replace with the ID of the specific channel you want the bot to work in

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  try {
    const commands = [ //commands initialisation
      {
        name: 'dog',
        description: 'Догана',
        options: params
      },
      {
        name: 'undog',
        description: 'Догана',
        options: params
      },
    ];
    const commandsRegistered = await client.application.commands.set(commands, commandGuildId);

    console.log(`Registered slash commands: ${commandsRegistered.map(command => command.name).join(', ')}`);
  } catch (error) {
    console.error(error);
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  // Check if command was sent in the specific channel
  if (interaction.channelId !== channelID) return;

  if (interaction.commandName === 'dog') {
    const authorNickname = interaction.member; // Відправинк
    const input1 = interaction.options.getString('violencer');  //
    const input2 = interaction.options.getString('type');
    const input3 = interaction.options.getString('reason');


    // Create an embedded message
    const embed = new EmbedBuilder()
      .setTitle('**Видача догани**')
      .setColor('#FF0000')
      .setDescription(`**Видав:**\n${authorNickname}\n**Кому:**\n${input1}\n**Тип догани:**\n${input2}\n**Причина:**\n${input3}`);


    await interaction.reply({ embeds: [embed] });
    console.log("command Dog send")
  }
  if (interaction.commandName === 'undog') {

    const authorNickname = interaction.member; // Відправинк
    const input1 = interaction.options.getString('violencer');  //
    const input2 = interaction.options.getString('type');
    const input3 = interaction.options.getString('reason');


    // Create an embedded message
    const embed = new EmbedBuilder()
      .setTitle('**Зняття догани**')
      .setColor('#008000')
      .setDescription(`**Зняв:**\n${authorNickname}\n**Кому:**\n${input1}\n**Тип догани:**\n${input2}\n**Причина:**\n${input3}`);


    await interaction.reply({ embeds: [embed] });
    console.log("command unDog send")
  }
});

client.login(BOT_TOKEN);
keepalive()