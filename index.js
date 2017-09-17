const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
	console.log("Boot Online and Ready! On " + client.guilds.size + " Servers!");
	//client.user.setPresence({game:{name: 'with spreadsheets',type: 0}
  
});

client.on('message', message => {
	if(message.content === "raid")
	{
		message.channel.send("Sorry, I have no idea when the raid is...");
	}

	if(message.content === "ping")
	{
		message.channel.send("You are on the **" + message.channel.guild.name + "** server");
	}

	if (message.content === '`help')
	{
		 message.channel.send("The List of the Commands!
					\nPing Get your Ping... not
					\ngetme Invite me!
					\nversion I have a version?!?!
					\nservers I am on servers!
					\nlounge Come on my Lounge!
					\nserverinfo Get the Info of your Server!
					\navatar Get your Avatar!
					\nroles Get the roles of this server!
					\n
					\n
					\nSay Say Wiggle, fliping table or RIP")
		}
});



client.login(process.env.BOT_TOKEN);


// webpage code

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
