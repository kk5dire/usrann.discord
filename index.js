const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjkxNTU4MzYzNTA2NjcxNjM2.XnkuHA.mPbavJKC1sxObvr0wZs7W4K4AO8";

bot.on('ready', () =>{
    console.log("The Bot Is Now Currently online");
})


bot.login(token);