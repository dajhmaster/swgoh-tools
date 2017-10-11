const { version } = require("discord.js");
const { RichEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");


exports.run = (client, message, cmd, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new RichEmbed()
  .setFooter(`Bot Statistics for ${client.user.username}`)
  .setThumbnail(`${client.user.avatarURL}`)
  .addField(`Mem Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(`CPU Load`, `${Math.round(os.loadavg()[0]*10000)/100}%`, true)
  .addField(`Uptime`, `${duration}`, true)
  .addField(`Discord.js`, `v${version}`, true)
  .addField(`Node`,`${process.version}`, true)
  .addField(`Users`, `${client.users.size.toLocaleString()}`, true)
  .addField(`Servers`, `${client.guilds.size.toLocaleString()}`, true)
  .addField(`Channels`, `${client.channels.size.toLocaleString()}`, true)
  message.channel.send({embed});
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscellaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
