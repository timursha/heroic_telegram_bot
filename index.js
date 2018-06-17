const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '602002099:AAH-gzeN08TDXtsGxX7zElTqL4CfRDH-vvQ'
const bot = new TelegramBot(TOKEN, {polling:true})
bot.on('message', mgs => {
    bot.sendMessage(msg.chat.id, 'Hello from HEROKU, bot says: "HI, ${msg.from.first.name}"')
})