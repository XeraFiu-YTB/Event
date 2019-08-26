const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var b = 1

if(!message.member.hasPermission("MANAGE_MESSAGES")){
        return message.channel.send("Vous n'avez pas les permissions de lancer le Jeux !");
    }

if(message.member.hasPermission("MANAGE_MESSAGES") && b == 1){
	message.delete(1)
         message.channel.send(`Le Jeux vient d'être lancé par ${message.author}, le nombre à trouver est entre 0 et 1000 !`);
      var b = 2
    
var jeuxChannel = message.guild.channels.find(x => x.name === "🎮┆jeux")
var random = Math.floor(Math.random() * 1001)
var staffChannel = message.guild.channels.get("597175530353065986")
staffChannel.send(`Le bon nombre est : ${random} dans le salon <#592388843710185482>`);
console.log("Le nombre est " + random)

bot.on('message', (message) => {
    

if (message.content == random && b != 1) {
let jeuxEmbed = new Discord.RichEmbed()
                .setDescription("Jeux")
                .setColor("#dc143c")
                .addField("Winner :", `${"<@" + message.member.id + ">"}`)
                .addField(`Nombre :  ${random}`, "GG il gagne le grade Winner !")
                .setFooter('©Fortool - Game');


jeuxChannel.send(jeuxEmbed)
staffChannel.send(`Le jeux avec le code ${random} est terminé ! Vous pouvez désormer faire !jeux`)
let winnerRole = message.guild.roles.find(x => x.name === 'Winner')
message.member.addRole(winnerRole.id)
random = null
var b = 1

}
})

}

}


module.exports.help = {
    name: "jeux"
}
