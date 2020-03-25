const TelegramBot = require('node-telegram-bot-api')
const checkZhihuStatus = require('./zhihu')
const token = '1146395785:AAE_vVNf_aM0fYjFsPEuUurGY4ssJN1Vyuo';


const bot = new TelegramBot(token, {
  polling: true
})

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text
  if (text === '/status') {
    const zhihuStatus = await checkZhihuStatus()
    bot.sendMessage(chatId, zhihuStatus)
  }
  if (msg.sticker) {
    bot.sendSticker(chatId, msg.sticker.file_id)
  }
  // bot.sendMessage(chatId, 'recevied you msg')
})