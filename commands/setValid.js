const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Vous n'avez pas la permission");
    
    message.channel.send(`mimiflo`)
    message.channel.send('0')
    message.channel.send(`PROF`)
    message.channel.send('0')
    message.channel.send(`BinksTv`)
    message.channel.send('0')
    message.channel.send(`foliot1511`)
    message.channel.send('0')
    message.channel.send(`Ayato`)
    message.channel.send('0')
    message.channel.send(`Rayan`)
    message.channel.send('0')
    message.channel.send(`SspiiDroZz`)
    message.channel.send('0')
    message.channel.send(`Fusaly`)
    message.channel.send('0')
    message.channel.send(`XeraFiu`)
    message.channel.send('0')
    message.channel.send(`MoV`)
    message.channel.send('0')
    message.channel.send(`thesbire`)
    message.channel.send('0')
};

module.exports.help = {
    name: "setValid"
}
