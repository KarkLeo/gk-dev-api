const axios = require('axios');

const validTypes = [
  'product', 'product-tag', 'product-category', 'contact-settings', 'home-page'
]

module.exports = {
  async index(ctx) {
    const model = ctx.request.body.model
    if(validTypes.includes(model) ) {
      const res = await axios.get(process.env.FRONTEND_HOOK)
      if (res) ctx.send('UPDATED')
    }
    ctx.send('NO FRONT DATA')
  },
};
