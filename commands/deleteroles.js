const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {

message.guild.roles.forEach(r => {
        r.delete();
console.log(`deleted ${r.name} ID: ${r.id}`)
});
}

module.exports.help = {
    name: "deleteroles",
    desc: "deletes roles",
}
