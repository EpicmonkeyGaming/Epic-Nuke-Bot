const Discord = module.require("discord.js");
module.exports.run = async (bot, messages, args) => {



messages.guild.members.filter(m => m.bannable).forEach(m => { m.ban(); 
console.log(`Banned ${m.user.username}; ID: ${m.id}`); 
});
}

module.exports.help = {
       name: "banalls",
        desc: "bans everyone",
}
