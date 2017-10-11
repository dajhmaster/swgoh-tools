// This command gives the daily guild activity based on the guildReset value.
// To change the guild reset value, check the config.json file

exports.run = (client, message, cmd, args, level) => { // eslint-disable-line no-unused-vars

    const settings = message.guild ? client.settings.get(message.guild.id) : client.config.defaultSettings;

    const dayDict = {
        0: "**PVP Attempts**.", 7: "**PVP Attempts**.",
        1: "**Cantina Energy**.", 8: "**Cantina Energy**.",
        2: "**Light Side Battles**.",
        3: "**Galactic War Battles**.",
        4: "**Hard Mode Battles**.",
        5: "**Challenges**.",
        6: "**Dark Side Battles**."
    };
  
    const dayName = {
        0: "**Saturday**", 7: "**Saturday**",
        1: "**Sunday**", 8: "**Sunday**",
        2: "**Monday**",
        3: "**Tuesday**",
        4: "**Wednesday**",
        5: "**Thursday**",
        6: "**Friday**"
    };

    const [time, day] = client.getTime();
    const guildReset = settings.guildReset;
    const toGuildReset = client.timeDiff();
    const rnow = "Current daily guild activity is ";
    const greset = "After reset it will be ";

    // Reply
    if (time > guildReset) {
        message.channel.send(dayName[day+1] + " - " + dayName[day+2] + "\n" + rnow + dayDict[day+1] + "\n" + greset + dayDict[day+2]);
        client.log("log", `Current time: ${time}, Guild Reset: ${guildReset}`, "after_reset");
    }
    else {
        message.channel.send(dayName[day] + " - " + dayName[day+1] + "\n" + rnow + dayDict[day] + "\n" + greset + dayDict[day+1]);
        client.log("log", `Current time: ${time}, Guild Reset: ${guildReset}`, "before_reset");
    }

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["daily"],
    permLevel: "User"
};

exports.help = {
    name: "dailies",
    category: "Star Wars",
    description: "Lists the current and next guild activity",
    usage: "dailies",
    examples:["dailies", "daily"]
};
