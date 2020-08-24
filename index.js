const Discord = require('discord.js');
const bot = new Discord.Client

const token = ('')
const PREFIX = '!'

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!')
    }
})

bot.login(token)
