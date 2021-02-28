require('dotenv').config();

const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.BOTTOKEN);

client.on('message', message => {
    if (message.content === '!ping')
    {
        message.channel.send('Pong.');
    }

});

