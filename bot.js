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
			message.channel.send("You are on the **" + message.channel.guild.name + "** server");
			break;

		case "raid":
			message.channel.send("Sorry, I have no idea when the raid is...");
			break;

		case "help":
			message.channel.send("Still updating\n\nI will let you know when I have something more.");
			break;

		case "send":
			message.channel.send("You just sent a message to: **" + args[1] + "**");
			message.author.send("I just sent you a DM " + message.author.toString());
			let memberID = args[1];
			client.fetchUser(memberID)
			    .then(user => {user.send("Hello I dmed you!")});
			break;

		case "repeat":
			message.channel.send("Still working on that. Give me some time.\nYou sent the string: **\`" + message.author.id.toString() + "\`**");
			break;
			let str = message.author; //Just assuming some random tag.
			//removing any sign of < @ ! >...
			//the exclamation symbol comes if the user has a nickname on the server.
			let id = str.replace(/[<@!>]/g, '');

			client.fetchUser(id)
			.then(user => {user.send("Hello I dmed you!")})


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
