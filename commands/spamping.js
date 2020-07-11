const Discord = module.require("discord.js")
module.exports.run = async (bot, message, args) => {

let user = message.mentions.users.first();
   setInterval(function() {
   message.channel.send(`spam` + user);
}, 1 * 1000)
}
module.exports.help = {
   name: "spamping",
   desc: "be an annoying cunt and spam someone with pings",
}

