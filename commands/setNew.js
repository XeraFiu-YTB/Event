const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Vous n'avez pas la permission");
    
    message.channel.send(`Ꮪꮋꮖꮪꮜꮖ Ꮜꮯꮋꮖꮃꭺ`)
    message.channel.send('0')
    
};

module.exports.help = {
    name: "setNew"
}
