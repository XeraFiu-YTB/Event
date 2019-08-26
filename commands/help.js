const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.channel.bulkDelete(1)
	  // New ticket command
        var server = message.guild
        const reason = message.content.split(" ").slice(1).join(" ");

        if (!message.guild.roles.exists("name", "📃 Helper")) return message.channel.send(`Ce Serveur n'a pas de Role \`📃 Helper\`, il faut le créer sinon le ticket ne peut etre ouvert.`);
        
        if (message.guild.channels.exists("name", "ticket-" + message.author.username.toLowerCase())) return message.channel.send(`Tu as déjà un ticket ouvert`);
        if (!args[0]) return message.channel.send(`Vous devez spécifier un Problème, !help problème`);
        message.guild.createChannel(`ticket-${message.author.username.toLowerCase()}`, "text").then(c => {
            let category = server.channels.find(c => c.name == "Help" && c.type == "category")
            c.setParent(category.id)
            let role = message.guild.roles.find("name", "📃 Helper");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.member.sendMessage(`${message.author.username}, ton ticket vient d'être crée, <#${c.id}>.`);
            const embed = new Discord.RichEmbed()

                .setColor('#0e0e6d')
                .addField(`Hey ${message.author.username}, quand tu as fini, clique sur la réaction !`, `✅`)
                .addField(`Ton problème est le suivant :`, ` ${reason}`)
                .setTimestamp();
            c.send({
                embed: embed
            }).then (function (message){
                message.react('✅')
  bot.on('messageReactionAdd', (reaction, user) => {

  if (reaction.emoji.name === "✅" && user.id !== bot.user.id) {
    c.delete()
    console.log("Delete salon")
  
};
		

		
            
             });
            });
		

            
        }).catch(console.error); // Send errors to console

    };


	module.exports.help = {
    name: "help"
}
