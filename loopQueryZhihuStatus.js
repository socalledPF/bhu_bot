const checkZhihuStatus = require('./zhihu')
const TelegramBot = require('node-telegram-bot-api')

const { TELEGRAM_BOT_TOKEN, CHAT_ID } = process.env

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {
  polling: true
})

function loopQueryZhihuStatus() {
  checkZhihuStatus().then((status) => {
    bot.sendMessage(CHAT_ID, status)
  })
}

loopQueryZhihuStatus()