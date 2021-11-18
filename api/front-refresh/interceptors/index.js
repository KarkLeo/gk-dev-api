const orderInterceptor = require('./order-interceptor')

module.exports = context => {
  //===== Order create =====
  if(
       context.request.body.event === 'entry.create'
    && context.request.body.model === 'order'
  ) {
    const data = context.request.body.entry
    orderInterceptor(data)
  }
}
