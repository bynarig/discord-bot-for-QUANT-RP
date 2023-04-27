const { EmbedBuilder } = require("discord.js")

module.exports = async function undogInit(interaction) {
    if (interaction.commandName === "undog") {
        const authorNickname = interaction.member // Відправинк
        const input1 = interaction.options.getString("violencer") //
        const input2 = interaction.options.getString("type")
        const input3 = interaction.options.getString("reason")

        // Create an embedded message
        const embed = new EmbedBuilder()
            .setTitle("**Зняття догани**")
            .setColor("#008000")
            .setDescription(
                `**Зняв:**\n${authorNickname}\n**Кому:**\n${input1}\n**Тип догани:**\n${input2}\n**Причина:**\n${input3}`,
            )

        await interaction.reply({ embeds: [embed] })
        console.log("command unDog send")
    }
}
