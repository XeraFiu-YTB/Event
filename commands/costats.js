const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let totalMember = message.guild.memberCount
let totalMemberCo = message.guild.members.filter(m => m.presence.status === 'online').size
let preniumRoleNumber = message.guild.roles.get('581822046087020555').members.size
let preniumRoleNumberCo = message.guild.roles.get('581822046087020555').members.filter(m => m.user.presence.status === "online").size
let valideRoleNumber = message.guild.roles.get('596770623779373064').members.size
let valideRoleNumberCo = message.guild.roles.get('596770623779373064').members.filter(m => m.user.presence.status === "online").size
let modoRoleNumber = message.guild.roles.get('539881583226650644').members.size
let modoRoleNumberCo = message.guild.roles.get('539881583226650644').members.filter(m => m.user.presence.status === "online").size
let partenaireRoleNumber = message.guild.roles.get('584674943917228042').members.size
let partenaireRoleNumberCo = message.guild.roles.get('584674943917228042').members.filter(m => m.user.presence.status === "online").size
let donateurRoleNumber = message.guild.roles.get('584409808405266456').members.size
let donateurRoleNumberCo = message.guild.roles.get('584409808405266456').members.filter(m => m.user.presence.status === "online").size
let helpeurRoleNumber = message.guild.roles.get('582977048008720395').members.size
let helpeurRoleNumberCo = message.guild.roles.get('582977048008720395').members.filter(m => m.user.presence.status === "online").size

let costatsEmbed = new Discord.RichEmbed()
        .setDescription('Informations sur le serveur')
        .setColor('#dc143c')
        .addField('Total', `${totalMemberCo} | ${totalMember}`, true)
        .addField('🎉Modérateur🎉', `${modoRoleNumberCo} | ${modoRoleNumber}`, true)
        .addField('🎥Helpeur🎥', `${helpeurRoleNumberCo} | ${helpeurRoleNumber}`, true)
        .addField('Partenaires', `${partenaireRoleNumberCo} | ${partenaireRoleNumber}`, true)
        .addField('Donateurs', `${donateurRoleNumberCo} | ${donateurRoleNumber}`, true)
        .addField('Premiums', `${preniumRoleNumberCo} | ${preniumRoleNumber}`, true)
        .addField('Validés', `${valideRoleNumberCo} | ${valideRoleNumber}`, true)

        message.channel.send(costatsEmbed).then (function (message){
                message.react('🎉')
                message.react('🎥')
  bot.on('messageReactionAdd', (reaction, user) => {

  if (reaction.emoji.name === "🎉" && user.id !== bot.user.id && modoRoleNumberCo != 0) {
       let moderateurRoleNumberCo = message.guild.roles.get('539881583226650644').members.filter(m => m.user.presence.status === "online").map(r => `${r}`).join(' | ')
       let coStatsModoEmbed = new Discord.RichEmbed()
        .setDescription('Modérateurs Connectés')
        .setColor('#dc143c')
       .addField('Modérateurs', moderateurRoleNumberCo)
    message.edit(coStatsModoEmbed)
    
};
   if (reaction.emoji.name === "🎥" && user.id !== bot.user.id && helpeurRoleNumberCo != 0) {
      let helpRoleNumberCo = message.guild.roles.get('582977048008720395').members.filter(m => m.user.presence.status === "online").map(r => `${r}`).join(' | ')
      let coStatsHelpEmbed = new Discord.RichEmbed()
        .setDescription('Helpeurs Connectés')
        .setColor('#dc143c')
        .addField('Helpeurs', helpRoleNumberCo)
    message.edit(coStatsHelpEmbed)
    
};
 });            
        }).catch(console.error);

}

module.exports.help = {
    name: "costats"
}
