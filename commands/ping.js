const Discord = module.require("discord.js");
const bot = new Discord.Client();
module.exports.run = async (bot, messages, args) => {

bot.on('message', message => { message.channel.send(`ping ${bot.ping}`);
});

}

module.exports.help = {
      name: "ping",
      desc: "your bots ping"
}