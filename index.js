const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjkxNTU4MzYzNTA2NjcxNjM2.XnkuHA.mPbavJKC1sxObvr0wZs7W4K4AO8";

const PREFIX = 'ua!';

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Your Announcments',
            type: "WATCHING",
        
        }
    });
}); 

bot.on('ready', () =>{
    console.log("The Bot Is Now Currently online");
})
//bot.on('message', msg => {

  //  let args = msg.content.substring(PREFIX.length).split(" ");
  //switch (args[0]) {
bot.on('message', message=> {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
    
        case 'ping':
            message.channel.send('usrann.js responded with running statement');
            break;
   
            case 'announce':
            if(args[1] === 'create'){
               message.channel.bulkDelete(1);
               message.channel.send(`${message.author}` + ": " + args[2]).then(messageReaction => {
   messageReaction.react("✔");
               })
               
               message.edit();
               message.author.send(`Hi ${message.author} Your Message ${args[3]} is now on ${message.guild.name} in ${message.channel.name} Thanks for helping verify!`);
              
            }if(args[1] === 'delete'){
            
                   message.channel.bulkDelete(args[2]);
               
            }
            break;
   //interesting
   case 'suggestann':
                
                
       message.channel.send(`@VerificationOfficer✔ ${message.author} Wants To Create a Announcement in #user-announcements | Announcement: \"` + args + `\"`);
      message.author.send(`Hey ${message.author} You  Announcement Suggestion in ${message.guild.name} For ${args} Has Been Noted and currently being checked by a @VerificationOfficer✔ Your discord username wil be mentioned when the announcment is posted. If It Is Rejected We Will Tell You ASSAP and why! Thanks for using ${message.guild.name}`);
      break;
      
      case 'suggestdel':
      
      message.channel.send(`@VerificationOfficer✔ ${message.author}  Wants An Announcement Deleted Announcement: \"` + args + `\"`);
      message.author.send(`Hey ${message.author} your request for deletion in ${message.guild.name} Has Been Sent As Soon as a @Verificationofficer✔ Sees it it will be deleted Thank you for using ${message.guild.name}!`);
       break;
      
       case 'sendverify':
          message.channel.send(`Hey ${args[1]} one of you announcments has been verified by ${message.author} Check it out!`);
          message.author.send(`${message.author} The Verifiction Is Compleate Thank You`);
          
          
      break;
      
      case 'sendreject':
          message.channel.send(`Sorry ${args[1]} your announcement request has been denied due to ${args[2]}`);
          message.author.send(`${message.author} Your Rejection Is Compleate Thank your!`);
          
          break;
          case 'help':
            const Embed = new Discord.MessageEmbed()
            .setTitle("Basic Commands For @MeowBot")
            .setColor(0xFF0000)
            .addField("ua!ping").setDescription("pings the bot")
            .addField("ua!suggestann").setDescription("Contacts a User who can create your announcment")
            .addField("ua!suggest delete").setDescription("Contacts a user to delete you announcement")
            .addField(`** Moderation Commands **`)
            .addField("ua!announce \[arg\] ").setDescription("Users with mode perms can create and delete usr announcments")
            .addField("ua!sendverify").setDescription("Verifys a users announcment")
            .addField("ua!sendreject")
            .addField(`** Bot Owner Commands **`)
            .addField(`** ${message.author} JSYK only @kkd5-2#6541 can use these commands! **`)
            .addField(`ua!debug on\/off`)
            .setDescription("Use The \"ua!Help\" Commands to List Basic commands ")

            message.author.send(Embed);
          break;

          case 'debug':
            if(args[1] === 'on'){
              message.channel.send(`Hey @mod and @admin I Will Be offline for debuging For a bit see you soon`);
              break;
            }
            if(args[1] === 'off'){
                message.channel.send(`Hey @mod and @admin I Am Back Baby!!!`);
                break;
            }
            if(!args[1]){
message.reply("Oops Sorry Make sure your @kkd5-2#6541 and you have a second arg!!!");
break;
            }
            break;
}
});

/*
    }
});

*/


bot.login(token);
