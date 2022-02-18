const reactionrules = require("../../commands/reactionrules")

module.exports = (client, Discord) =>{
    console.log("BimmyBot is online!")
    reactionrules(client)
}