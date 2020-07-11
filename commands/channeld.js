const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {



messages.guild.channels.forEach(c => {
        c.delete();
        console.log(`Deleted channel ${c.name}; ID: ${c.id}`);
 });
}

module.exports.help = {
    name: "channeld",
    desc: "deletes all channels"
}
