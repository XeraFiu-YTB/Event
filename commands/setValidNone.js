const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Vous n'avez pas la permission");
    let compteurValide = message.guild.channels.get('613895533324664846')
    
    let message1 = await compteurValide.fetchMessage('613907955070271488')//XeraFiu
    let message2 = await compteurValide.fetchMessage('613907956169310210')//MoV.
    let message3 = await compteurValide.fetchMessage('613907872761380864')//mimiflo
    let message4 = await compteurValide.fetchMessage('613907874078392321')//PROF
    let message5 = await compteurValide.fetchMessage('613907900691251211')//binks
    let message6 = await compteurValide.fetchMessage('613907902662574105')//foliot
    let message7 = await compteurValide.fetchMessage('613907904021659669')//Ayato
    let message8 = await compteurValide.fetchMessage('613907929350799361')//Spiidrozz
    let message9 = await compteurValide.fetchMessage('613907953887477773')//Fusaly
    let message0 = await compteurValide.fetchMessage('613907984648503317')//thesbire
    message0.edit('0')
    message1.edit('0')
    message2.edit('0')
    message3.edit('0')
    message4.edit('0')
    message5.edit('0')
    message6.edit('0')
    message7.edit('0')
    message8.edit('0')
    message9.edit('0')
};

module.exports.help = {
    name: "setValidNone"
}
