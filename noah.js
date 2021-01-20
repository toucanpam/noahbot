const Discord = require('discord.js');
require ('dotenv').config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});


client.on('message', (message) => {
    if (message.content.toLowerCase() === 'sols'){
        message.reply('haha sols more like soso!\nTo remove this message please buy Soomin Java :)))');
    }
});

client.login(process.env.BOT_TOKEN);