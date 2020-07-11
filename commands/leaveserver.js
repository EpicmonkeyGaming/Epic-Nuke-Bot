const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    try {
        message.guild.leave();
        console.log(`sucessfully left the server ${message.guild.name} ID:${message.guild.id} owner:${message.guild.owner.user.tag}`);
        	} catch(e) {
     		    console.log(e.stack);
        }
}

module.exports.help = {
    name: "leaveserver",
    desc: "Leaves the server.",
}
