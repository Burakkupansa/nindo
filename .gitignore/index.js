const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Eduquer ses petits Shinobi. | nhelp");
    console.log("Le bot a bien ete connecte");
});

bot.login("process.env.TOKEN");
