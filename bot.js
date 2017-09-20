const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "+";

client.on('ready', () => {
	console.log("Boot Online and Ready! On " + client.guilds.size + " Servers!");
	//client.user.setPresence({game:{name: 'with spreadsheets',type: 0}
  
});

client.on('message', message => {
	if (!message.content.startsWith(PREFIX)) return;
	
	var args = message.content.substring(PREFIX.length).split(" ");
	
	switch (args[0].toLowerCase()) {
		case "ping":
			message.channel.sendMessage("You are on the **" + message.channel.guild.name + "** server");
			break;
		
		case "raid":
			message.channel.sendMessage("Sorry, I have no idea when the raid is...");
			break;
			
		case "help":
			message.channel.sendMessage("Still updating\n\nI will let you know when I have something more.");
			break;
		
		case "send":
			message.channel.sendMessage("You just sent to me the following: " + args[1]);
			break;
		
		case "repeat":
			message.channel.sendMessage("Still working on that. Give me some time.");
			break;
		
		//case "embed":
		//	var embed = new Discord.RichEmbed()
		//		.setDescription("This is a rich embed")
		//		.addField("Field Name", "Field Text", true)
		//		.setFooter("Embed Footer")
		//	message.channel.sendEmbed(embed);
		//	break;
			
		default:
			// message.reply("**Invalid Command!**");
			message.channel.sendMessage(message.author.toString() + " Sorry, that is not a valid command");
	}

});

//\nPing Get your Ping... not\ngetme Invite me!\nversion I have a version?!?!
//					\nservers I am on servers!
//					\nlounge Come on my Lounge!
//					\nserverinfo Get the Info of your Server!
//					\navatar Get your Avatar!
//					\nroles Get the roles of this server!
//					\n
//					\n
//					\nSay Say Wiggle, fliping table or RIP


client.login(process.env.BOT_TOKEN);


// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
 http.get('http://swgoh-tools.herokuapp.com');
}, 900000);
