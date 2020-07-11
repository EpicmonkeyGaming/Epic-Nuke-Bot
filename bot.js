const Config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = Config.prefix;
const client = new Discord.Client();
client.commands = new Discord.Collection();

function getGuildByString(guildName) {
  return bot.guilds.filterArray((guild) => {
    return guild.name === guildName;
  })[0];
}

function getChannelByString(guild, channelName) {
  return guild.channels.filterArray((channel) => channel.name === channelName)[0];
}
   console.log("commands:")
fs.readdir("./commands/", (err, files) => {
  files.forEach(file => {
 // console.log("commands:")
  console.log(file);
  });
  if (err) {
    console.error(err);
  }
  console.log("command usage prefix + the command without .js")

  let jsFiles = files.filter(f => f.split(".").pop() === "js");
  if (jsFiles.length <= 0) {
    console.error("No commands found.");
    return;
  }

    jsFiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", async () => {
  console.log("bot is online");
  console.log("displaying servers...");
  var guilds = [];
  client.guilds.array().forEach((guild) => {
    guilds.push(guild.name);
  });

  if (guilds.length > 0) {
    console.log("Servers:");
    console.log(guilds.join("\n"));
    console.log();
  }

console.log(`Bot has started, with  ${client.users.size} overall users, in ${client.channels.size} channels and ${client.guilds.size} servers.`);

client.on("guildCreate", guild => {
   console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members`);
  
});

client.on("guildDelete", guild => {  
  console.log(`bot has been removed from: ${guild.name} (id: ${guild.id})`);
  
});

client.on("ready", () => {
client.user.setActivity(`niggerlicious`);
})

  try {
    let link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch (e) {
    console.log(e.stack);
  }
});

client.on("message", async message => {
  if (message.author.bot) return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let cmd = client.commands.get(command.slice(prefix.length));

  if (cmd) {
    cmd.run(client, message, args);
  }
});
client.login(Config.token);


