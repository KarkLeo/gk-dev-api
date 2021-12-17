const message= require('./message')
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT);

const TEST_EMAILS = ['test@test.com', 'test@gmail.com']

module.exports = async (data) => {
  const post = message(data)

  if(TEST_EMAILS.includes(data && data.user.email)) {
    await bot.sendMessage('337551726', post + ' #test');
  } else {
    await bot.sendMessage('337551726', post);
    await bot.sendMessage('589493206', post);
    await bot.sendMessage('1773960900', post);
  }
}

