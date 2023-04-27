const dogInit = require("./dog.command/dog.init.js")
const undogInit = require("./dog.command/undog.init.js")

module.exports = function commandsInteractionInit(interact) {
    dogInit(interact)
    undogInit(interact)
}
