const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = "+";

client.on('ready', () => {
	console.log("Boot Online and Ready! On " + client.guilds.size + " Servers!");
	//client.user.setPresence({game:{name: 'with spreadsheets',type: 0}
  
});

client.on('message', message => {
	if (!message.content.startsWith(PREFIX)) return;

	//var args = message.content.substring(PREFIX.length).split(" ");
	var args = message.content.slice(PREFIX.length).trim().split(/ +/g);
	var command = args.shift().toLowerCase();
	var memberID = "";
	
	switch (command) {
		case "ping":
			message.channel.send("You are on the **" + message.channel.guild.name + "** server");
			break;

		case "raid":
			message.channel.send("Sorry, I have no idea when the raid is...");
			break;

		case "help":
			message.channel.send("Commands:\`\`\`\n " + 
				"+send: Send message to user ID \n " +
				"+repeat: Send message to user ID and return Embed \n " +
				"+raid: Nothing yet \n " +
				"+ping: Returns server name\`\`\`");
			break;

		case "send":
			memberID = args.shift().toLowerCase();
			if (memberID.length < 18) {
				message.reply("Sorry, you entered an invalid user ID");
				console.log("memberID length: " + memberID.length);
				break;
			}
			client.fetchUser(memberID)
			    .then(user => {
			    	user.send(args.join(" "))
			    	message.chanel.send("You just sent a message to: **" + user.username + "**")
			    });
			break;

		case "repeat":
			memberID = args.shift().toLowerCase();
			//message.channel.send("You sent the string: <@!" + memberID + "> **\`" + args.join(" ") + "\`**");
			client.fetchUser(memberID)
			    .then(user => {
			    	//message.channel.send("You sent the string  **\`" + args.join(" ") + "\`** to " + user.username)
			    	//user.send(args.join(" "))
			    	console.log("Message sent to " + user.username + " from " + message.author.username)

			    	var embed = new Discord.RichEmbed()
			    		.setDescription("**Direct Message sent to: **" + user.username + "\n**Message: **\`" + args.join(" ") + "\`")
			    		.setAuthor(user.username, user.avatarURL, null)
			    		//.addField("Message sent to: " + user.username, "Message: " + args.join(" "), true)
			    		.setFooter("To: " + user.username + " | From: " + message.author.username)
			    		.setColor(0x00AA00)
			    	message.channel.send(embed);
			    	user.send(embed);
			    });
			break;

		case "avatar":
			//message.channel.send("Still working on that. Give me some time.");
			message.channel.send(message.author.avatarURL);
			break;

		case "info":
			var embed = new Discord.RichEmbed()
				//.setDescription(message.author)
				//.setAuthor(message.author, message.author.avatarURL, null)
				.addField("Username Creation Date", message.author.createdAt.toString(), true)
				.addField("author", message.author, true)
				.addField("username", message.author.username, true)
				.setFooter(message.author.username + " | " + message.author.id.toString())
				.setThumbnail(message.author.avatarURL)
				.setColor(0x00AA00)
			message.channel.send(embed);
			break;
			
		default:
			// message.reply("**Invalid Command!**");
			message.channel.sendMessage("Sorry, that is not a valid command " + message.author.toString());
	}

});

client.login(process.env.BOT_TOKEN);

// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
 http.get('http://swgoh-tools.herokuapp.com');
}, 900000);
