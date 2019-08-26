const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const ffmpeg = require('ffmpeg');
const bot = new Discord.Client({disableEveryone:true});


/*bot.on('messageReactionAdd', (reaction, user) => {
    console.log(`${user.username} a fait "${reaction.emoji.name}" dans ${reaction.message.channel} sur le message ${reaction.message.id} de lien ${reaction.message.url}`);
});*/
/*bot.on('messageReactionAdd', (reaction, user) => {

let emojiID = reaction.emoji.id
let emojiFortool = reaction.message.guild.emojis.get('603007544482463877')
console.log(emojiFortool + emojiID)
let channelTournois = reaction.message.guild.channels.get('603026584311693322')
let channelID = reaction.message.channel.id
console.log(channelTournois + channelID)
let roleTournois = reaction.message.guild.roles.get('602995389028630540')
let member = reaction.message.guild.members.get(user.id)
console.log(roleTournois + member)
let bvnTournoisChannel = reaction.message.guild.roles.get('603004457772515369')

if(emojiID == emojiFortool && channelID == channelTournois) {
member.addRole(roleTournois)
bvnTournoisChannel.send(`<@${member}> rejoint la Guerre :p`)


}


})*/

bot.commands = new Discord.Collection();
//bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    //console.log(`Ce serveur à ${guild.memberCount} membres!`);
  //  bot.user.setActivity(`${bot.guilds.size} Serveurs !`, { type: 'WATCHING'});
//});

fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if (jsFile.length <= 0) {
        console.log('Je ne trouve pas la commande');
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});



bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne ! `);
//bot.user.setPresence({ game: { name: 'XeraFiu Music', type: "streaming", url: "https://www.youtube.com/watch?v=QMPdfLxWmgI"}}); 
	//type peut etre Listening
    bot.user.setActivity('XeraFiu Music', { type: 'Streaming', url: "https://www.youtube.com/watch?v=QMPdfLxWmgI"  });
    //bot.user.setStatus("online"); //online idle dnb
});



bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
//process.env.PREFIX à la place de config.prefix si cela ne marche pas (heroku)
    let prefix = process.env.PREFIX;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(config.prefix.length));
    if(commandFile) commandFile.run(bot, message, args);

});

		
	  
bot.on('message', (message) => { 
let channelRefuseID = message.channel.id
if(channelRefuseID === '597181848153751572' || channelRefuseID === '585184071630716930' || channelRefuseID === '578618904830541855' || channelRefuseID === '578652593086136320' || channelRefuseID === '592388843710185482' || channelRefuseID === '591322935772315821') {
if (message.content.includes(".in")) {
        
	setTimeout(function(){ 
    			message.channel.bulkDelete(2)
		message.channel.send(`<@${message.member.id}> pour les commandes va dans <#587702246280659003>`)
  		}, 2000)
        }
if (message.content.includes(".stat") && !message.member.hasPermission('MANAGE_MESSAGES')) {
        
        setTimeout(function(){ 
    			message.channel.bulkDelete(2)
		message.channel.send(`<@${message.member.id}> pour les commandes va dans <#587702246280659003>`)
  		}, 2000)
        }
}
})
bot.on('message', (message) => {
    var a = false
    let channelOkID = message.channel.id
    if(!(message.member == null || message.member.hasPermission('MANAGE_MESSAGES') || channelOkID === '597425662118330401' || channelOkID === '585139974559498281')){

        

        if (message.content.includes("https://")) {
        console.log("Lien delete https :" + message.content + " from " + message.member)
        a = true
        }
        
        if (message.content.includes("http://")) {
        console.log("Lien delete http :" + message.content + " from " + message.member)
        a = true
        }

        if (message.content.includes("www.")) {
        console.log("Lien delete www :" + message.content + " from " + message.member)
        a = true
        }

        if(a == true ){ 
	message.delete(1)
            message.member.send("Pas de lien ici, " + message.member)
        let inviteEmbed = new Discord.RichEmbed()
                .setDescription("Invitation")
                .setColor("#dc143c")
                .addField("Utilisateur ayant envoyé un lien",`${"<@" + message.member.id + ">"}`)
                .addField("Canal", message.channel)
                .addField("Message", message.content);
        let inviteReport = message.guild.channels.find(x => x.name === "reports");
            if (!inviteReport) {
                return message.channel.send("Canal 'reports' introuvable. Veillez créer ce canal !");
            }   
    
        
        inviteReport.send(inviteEmbed)};
    }
});
//bot.on('memberUpdate', (before, after)=>{
//	if
//})

function couleur() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
bot.on("guildMemberAdd", (member, message, guild) => {
let nameMember = member.displayName
let channelRename = member.guild.channels.get("601547171732520980")
let idMember = member.id
if(nameMember.includes("code")) {
	channelRename.send(`${nameMember} (${idMember}) vient d'etre rename !`)
	member.setNickname('Code Fortool')
	
}
})
bot.on("guildMemberAdd", (member, message, guild) => {

   member.send("Bienvenue sur Fortool voici 1 minute de vidéo pour vous présenter le serveur: https://www.youtube.com/watch?v=3E-_CyzKVv4&feature=youtu.be")
    let joueurRole = member.guild.roles.get("546726597365858305")
    member.addRole(joueurRole)
    	let botsRole = member.guild.roles.get("545386430801772603")
botsRole.setColor(couleur())
	var fortoolRandom = ['𝗨𝗦𝗘 𝗖𝗢𝗗𝗘┆𝗙𝗼𝗿𝘁𝗼𝗼𝗹','YouTube┆Fortool','Twitter┆Fortool_','Instagram┆Fortool_','www.fortool.fr ']	
	var fortoolChannel = member.guild.channels.get("598511324544106527")
	var finalName = fortoolRandom[Math.floor(Math.random()*fortoolRandom.length)]
fortoolChannel.setName(finalName)
	
		
   
    
});

bot.on('guildMemberUpdate', async (oldMember, newMember) => {
let role = newMember.roles.find(r=>!oldMember.roles.array().includes(r))
	if(role !== null && role.id == '596770623779373064') {
let logSalon = newMember.guild.channels.get('613887028769193984')
let compteurValid = newMember.guild.channels.get('613895533324664846')
const entry = await newMember.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first())
logSalon.send(`**${entry.executor.username}** vient de valider **${entry.target.username}**`)
	//XeraFiu
		if(entry.executor.id == '276792705802174464') {
		let message = await compteurValid.fetchMessage('613907955070271488')
		let newMessage = parseFloat(message.content) + 1 
		console.log(`XeraFiu a ${newMessage} validation`)
		await message.edit(newMessage)
		}
	//MoV.
		if(entry.executor.id == '333062588139307009') {
		let message = await compteurValid.fetchMessage('613907956169310210')
		let newMessage = parseFloat(message.content) + 1
		console.log(`MoV a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//mimiflo
		if(entry.executor.id == '440915075742826506') {
		let message = await compteurValid.fetchMessage('613907872761380864')
		let newMessage = parseFloat(message.content) + 1 
		console.log(`mimiflo a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//PROF
		if(entry.executor.id == '401469914742915073') {
		let message = await compteurValid.fetchMessage('613907874078392321')
		let newMessage = parseFloat(message.content) + 1
		console.log(`PROF a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//binks
		if(entry.executor.id == '263815084877283328') {
		let message = await compteurValid.fetchMessage('613907900691251211')
		let newMessage = parseFloat(message.content) + 1
		console.log(`binks a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//foliot
		if(entry.executor.id == '452721711989653508') {
		let message = await compteurValid.fetchMessage('613907902662574105')
		let newMessage = parseFloat(message.content) + 1
		console.log(`foliot a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//Ayato
		if(entry.executor.id == '428197007199436801') {
		let message = await compteurValid.fetchMessage('613907904021659669')
		let newMessage = parseFloat(message.content) + 1 
		console.log(`Ayato a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//Rayan
		if(entry.executor.id == '303269973915336715') {
		let message = await compteurValid.fetchMessage('613907928268931092')
		let newMessage = parseFloat(message.content) + 1 
		console.log(`Rayan a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//Spiidrozz
		if(entry.executor.id == '395986998470639616') {
		let message = await compteurValid.fetchMessage('613907929350799361')
		let newMessage = parseFloat(message.content) + 1 
		console.log(`Spidrozz a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//Fusaly
		if(entry.executor.id == '423930792549416960') {
		let message = await compteurValid.fetchMessage('613907953887477773')
		let newMessage = parseFloat(message.content) + 1
		console.log(`Fusaly a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//thesbire
		if(entry.executor.id == '260171359471140877') {
		let message = await compteurValid.fetchMessage('613907984648503317')
		let newMessage = parseFloat(message.content) + 1 
		console.log(`thesbire a ${newMessage} validation`)
		await message.edit(newMessage)
		}
		//Ꮪꮋꮖꮪꮜꮖ Ꮜꮯꮋꮖꮃꭺ
		if(entry.executor.id == '429631317039120385') {
		let message = await compteurValid.fetchMessage('615138406053183504')
		let newMessage = parseFloat(message.content) + 1 
		console.log(`Ꮜꮯꮋꮖꮃꭺ a ${newMessage} validation`)
		await message.edit(newMessage)
		}
	}	
})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
	let loadEmoji = newMember.guild.emojis.find(emoji => emoji.name === "load")
	let successEmoji = newMember.guild.emojis.find(emoji => emoji.name === "success")
	let falseEmoji = newMember.guild.emojis.find(emoji => emoji.name === "nope")
	let verifChannel = newMember.guild.channels.get('578618904830541855')
    	let role = newMember.roles.find(r=>!oldMember.roles.array().includes(r))
	let user = newMember.id
	let codeCreateur = `Vérification du code créateur ${loadEmoji}`
	let codeCreateurOk = `Vérification du code créateur ${successEmoji}`
	let dateLoad = `Vérification de l'horodatage ${loadEmoji}`
	let dateLoadOK = `Vérification de l'horodatage ${successEmoji}`
	let dateLoadFalse = `Vérification de l'horodatage ${falseEmoji}`
	
    if(!(role == null)) {
	    if(role.id == '599337739980242945') { //arnaque
	verifChannel.send(codeCreateur).then((msg)=>{
		setTimeout(() => {
	msg.edit(codeCreateurOk)	
		}, 7000)})
	   
	   verifChannel.send(dateLoad).then((msg)=>{
	   setTimeout(() => {
	msg.edit(dateLoadFalse)
		}, 10000)
	   setTimeout(() => {
	let arnaqueMSG = `<@${user}> je détecte que tu essayes de tricher, envoie un screen plus récent !`
	 verifChannel.send(arnaqueMSG)
		}, 12000)})
		   let arnaqueRole = newMember.guild.roles.get('599337739980242945')
		   newMember.removeRole(arnaqueRole)
	    }
	    
	    
	    
	    
        if(role.id == '596770623779373064'){//validé
	   verifChannel.send(codeCreateur).then((msg)=>{
		setTimeout(() => {
	msg.edit(codeCreateurOk)	
		}, 7000)})
	   
	   verifChannel.send(dateLoad).then((msg)=>{
	   setTimeout(() => {
	msg.edit(dateLoadOK)
		}, 10000)
	   setTimeout(() => {
	let valideMSG = `<@${user}> tu as reçue le role ${role.name}, jette un coup d'oeil aux <#586229201275846677>`
	 verifChannel.send(valideMSG)
		}, 12000)})
	
	}
    }

	let valideRoleNumber = newMember.guild.roles.get('596770623779373064').members
	let valideChannelNumber = newMember.guild.channels.get("597446137456230489")
	let totalMember = newMember.guild.memberCount
	valideChannelNumber.setName(`Validés : ${valideRoleNumber.size} | ${totalMember}`)
	let preniumRoleNumber = newMember.guild.roles.get('581822046087020555').members
	let preniumChannel = newMember.guild.channels.get("598511472133537832")
	preniumChannel.setName(`Premiums : ${preniumRoleNumber.size} | ${totalMember}`)
});

//BlindTest
bot.on('voiceStateUpdate', (oldMember, newMember) => {


if(newMember.voiceChannelID === '600069717402845224'  && !newMember.roles.has('600088405111603211')) {
	newMember.addRole('600088405111603211')	
}
if(newMember.voiceChannelID !==  '600069717402845224' && oldMember.voiceChannelID === '600069717402845224') {
newMember.removeRole('600088405111603211')
}
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {

    if(newMember.voiceChannelID === '597406475572215808') { // id du salon qui va crée des salons       

        newMember.guild.createChannel(`FT┆${newMember.displayName}`, "voice").then(c => {
                let category = newMember.guild.channels.find(c => c.id== "596098295236132888" && c.type == "category")//id de la category
                c.setParent(category.id)
                newMember.setVoiceChannel(c)
                });
 }
if(oldMember.voiceChannel !== undefined) {
if(oldMember.voiceChannel.name == `FT┆${newMember.displayName}`) {
if(newMember.voiceChannelID == undefined  || newMember.voiceChannel.name !== `FT┆${newMember.displayName}`) {
    let deleteVoiceChannel = newMember.guild.channels.find(c => c.name == `FT┆${newMember.displayName}`)
    deleteVoiceChannel.delete()
}
}}
});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');
    let helpChannel = newMember.guild.channels.get('598627470538834094')
    let modoRole = newMember.guild.roles.get('539881583226650644')
    let helpRole = newMember.guild.roles.get('582977048008720395')
    let alarmeEmoji = newMember.guild.emojis.find(emoji => emoji.name === "alarm")
    if(newMember.voiceChannelID === '583068137721954323') {
	if(!newMember.hasPermission("MANAGE_MESSAGES")) {
		helpChannel.send(`${alarmeEmoji} ${modoRole} & ${helpRole} ${newMember.displayName} vient de rejoindre le Vocal go l'aider ${alarmeEmoji}`)
	}}
    if(newMember.voiceChannelID === '583068137721954323' && oldMember.voiceChannelID !== '583068137721954323') {
    if(newMember.hasPermission("MANAGE_MESSAGES")) { // id du vocal Help
        let helpStartEmbed = new Discord.RichEmbed()
        .setDescription('Rejoint le Vocal HELP')
	.setColor('#50dc14')
	.addField('Staff', newMember.displayName)
	.setFooter('©Fortool - Game')
	.setTimestamp(d)
        return helpChannel.send(helpStartEmbed);
 }}
if(oldMember.hasPermission("MANAGE_MESSAGES")) { 
if(oldMember.voiceChannel !== undefined && newMember.voiceChannelID !== '583068137721954323') {
if(oldMember.voiceChannelID === '583068137721954323') {
    let helpEndEmbed = new Discord.RichEmbed()
        .setDescription('Quitte le Vocal HELP')
  	.setColor('#50dc14')
    	.addField('Staff', newMember.displayName)
	.setFooter('©Fortool - Game')
        .setTimestamp(d)
        return helpChannel.send(helpEndEmbed);
    
}}
}
});


//process.env.TOKEN si heroku ou config.token
bot.login(process.env.TOKEN);

