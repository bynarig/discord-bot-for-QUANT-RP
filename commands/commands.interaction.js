const dogInit = require("./dog.command/dog.init.js")
const undogInit = require("./dog.command/undog.init.js")

module.exports = function commandsInteractionInit(interaction, channelID) {
    if (interaction.channelId == channelID) {
        //dog commands route check
        dogInit(interaction)
        undogInit(interaction)
    }
}
