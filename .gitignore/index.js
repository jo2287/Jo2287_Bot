const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Jo2287_Bot, !Jo2287_help");
    console.log("Le bot a bien ete connecte");
})

bot.login("NDc0NzEyNjMzMjM3NDM4NDY0.DkUfZA.1-6905F9dGl3N7ELptKSPsd5Ub4");
