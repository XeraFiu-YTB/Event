const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.bulkDelete(1)
// alphabet en tableau
alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// nombre aléatoire entre 1 et 25
randoml = Math.ceil(Math.random() * 25);
randoml1 = Math.ceil(Math.random() * 25);
randoml2 = Math.ceil(Math.random() * 25);
randoml3 = Math.ceil(Math.random() * 25);
randoml4 = Math.ceil(Math.random() * 25);
// on recupere une entrée aléatoire du tableau
var lettre_aleatoire = alphabet[randoml];
var lettre_aleatoire1 = alphabet[randoml1];
var lettre_aleatoire2 = alphabet[randoml2];
var lettre_aleatoire3 = alphabet[randoml3];
var lettre_aleatoire4 = alphabet[randoml4];
var random = Math.floor(Math.random() * 100) + 1;
var random1 = Math.floor(Math.random() * 100) + 1;
var random2 = Math.floor(Math.random() * 100) + 1;
var random3 = Math.floor(Math.random() * 100) + 1;
var random4 = Math.floor(Math.random() * 100) + 1;
var random5 = Math.floor(Math.random() * 100) + 1;
 message.channel.send(`https://discordapp.com/gifts/${random}${random1}${lettre_aleatoire}${lettre_aleatoire1}${lettre_aleatoire2}${lettre_aleatoire3}${lettre_aleatoire4}${random2}${random3}${random4}`).then(msg => {msg.delete(5000)});


};


module.exports.help = {
    name: "nitro"
}