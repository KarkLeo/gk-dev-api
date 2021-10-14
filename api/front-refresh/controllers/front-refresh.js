const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

const validTypes = [
  'product', 'product-tag', 'product-category', 'contact-settings', 'home-page'
]

const token = '2058338217:AAHdFOZ7O9Zf9PJjn1lt9FMZwh-weJtuYnw';
const bot = new TelegramBot(token, {polling: true});

module.exports = {
  async index(ctx) {
    const model = ctx.request.body.model

    if(validTypes.includes(model) ) {
      const res = await axios.get(process.env.FRONTEND_HOOK)
      if (res) ctx.send('UPDATED')
    }
    ctx.send('NO FRONT DATA')

    if(ctx.request.body.event === 'entry.create' && model === 'order' ) {
      const data = ctx.request.body.entry

      const message = `
Номер заказа: ${data.number}
Дата заказа: ${new Date(data.date).toLocaleString('ru-RU')}

Товары:
${data.cart_item.map(i => `${i.product.vendor_code}${'.'.repeat(12 - i.product.vendor_code.length)}${i.count}`).join('\n')}
-------
Всего: ${data.total_cost} грн

Пользователь: ${data.user.email}

Информация о доставке:
${data.delivery_info.first_name} ${data.delivery_info.last_name}
${data.delivery_info.phone_number}
${data.delivery_info.is_novaposhta ? data.delivery_info.city + ` Отделение № ${data.delivery_info.novaposhta_number}` : data.delivery_info.address}

Комментарий к заказу:
${data.description}
      `

      const msg1 = await bot.sendMessage('337551726', message);
      const msg2 = await bot.sendMessage('589493206', message);
      const msg3 = await bot.sendMessage('1773960900', message);
    }
  },
};


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, JSON.stringify(msg));
// });
