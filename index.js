// ==============================================
// = VARIABLES
// ==============================================

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "/";

// ==============================================
// = LOG SETUP
// ==============================================

bot.login(process.env.TOKEN);

// ==============================================
// = BOT
// ==============================================

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
})

client.on('message', message => {
    if (message.content == prefix+"cul" & message.channel.id == 579049560308187166){
        var myWord = getWord("./Lexique382.tsv");
        message.reply(myWord + " du cul !");
    }
})

// ==============================================
// = FUNCTION
// ==============================================

function getWord(filename){
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");
    var myLine = lines[Math.floor(Math.random()*lines.length)];
    myWord = myLine.split("\t")[0];
    return myWord
}

