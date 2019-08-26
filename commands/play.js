const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.bulkDelete(1)
     if (!message.member.voiceChannel) 
        return message.channel.send("Connectez vous à un salon vocal!")
    if (message.guild.voiceChannel) 
        return message.channel.send("Le bot est déjà connecté à un salon vocal!")
    if (!args[0]) return message.channel.send("Faire !play 1|2")
let voiceChannel = message.member.voiceChannel
            
if(args[0] == 1) {
        voiceChannel
            .join()
            .then(connection => { 
                const dispatcher = connection.playFile('./music/1.mp3');
            })
            .catch(console.error);

            }
if(args[0] == 2) {
        voiceChannel
            .join()
            .then(connection => { 
                const dispatcher = connection.playFile('./music/2.mp3');
            })
            .catch(console.error);

            }
        };


	module.exports.help = {
    name: "play"
}