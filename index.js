const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjkxNTU4MzYzNTA2NjcxNjM2.XnkuHA.mPbavJKC1sxObvr0wZs7W4K4AO8";

const PREFIX = 'ua!';

bot.on('ready', () =>{
    console.log("The Bot Is Now Currently online");
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
    
     case 'ping':
         message.channel.send('usrann.js responded with running statement');
         break;

         case 'announce':
         if(args[1] === 'create'){
           
            message.channel.send(`${args[2]}` + ": " + args[3]);
           
         }if(args[1] === 'delete'){
         
                message.channel.bulkDelete(args[2]);
            
         }
         break;



    }
})

bot.login(token);