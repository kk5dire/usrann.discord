const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjkxNTU4MzYzNTA2NjcxNjM2.XnkuHA.mPbavJKC1sxObvr0wZs7W4K4AO8";

const PREFIX = 'ua!';

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
}
});

/*
    }
});

*/


bot.login(token);
