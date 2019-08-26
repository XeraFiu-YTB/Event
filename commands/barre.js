const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete(1)
    if (!args[0])
    return message.reply("1h = 3 600 000 | 1min = 60 000 | 1s = 1 000");
    let pileRougeEmoji = message.guild.emojis.find(emoji => emoji.name === "PileRouge")
    let pileVerteEmoji = message.guild.emojis.find(emoji => emoji.name === "PileVerte")
    let loadEmoji = message.guild.emojis.find(emoji => emoji.name === "load")
    let successEmoji = message.guild.emojis.find(emoji => emoji.name === "success")
let pourcent = 0
let pile1 = pileRougeEmoji
let pile2 = pileRougeEmoji
let pile3 = pileRougeEmoji
let pile4 = pileRougeEmoji
let pile5 = pileRougeEmoji
let pile6 = loadEmoji
let timeBoucle = args[0]/100
    
      message.channel.send(`[${pile1}${pile2}${pile3}${pile4}${pile5}] ${pourcent}%${pile6}`).then((message) =>{
        var interval = setInterval (function () {
    pourcent = pourcent + 1
    if(pourcent == 100) {
      clearInterval(interval)
    }
    if(pourcent == 20) {
      pile1 = pileVerteEmoji
    }
    if(pourcent == 40) {
      pile2 = pileVerteEmoji
    }
    if(pourcent == 60) {
      pile3 = pileVerteEmoji
    }
    if(pourcent == 80) {
      pile4 = pileVerteEmoji
    }
    if(pourcent == 99) {
      pile5 = pileVerteEmoji
      pile6 = successEmoji
    }
    
    message.edit(`[${pile1}${pile2}${pile3}${pile4}${pile5}]${pourcent}%${pile6}`)
  
    }, 1 * timeBoucle)
  })
}


module.exports.help = {
    name: "barre"
}
