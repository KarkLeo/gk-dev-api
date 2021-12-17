module.exports = (data) => `
Номер заказа: ${data.number}
Дата заказа: ${new Date(data.date).toLocaleString('ru-RU')}

Товары:
${data.cart_item.map(i => `${i.product.vendor_code}${'.'.repeat(12 - i.product.vendor_code.length)}${i.count}`).join('\n')}
-------
Сума: ${data.total_cost} грн
Скидка: ${data.discount} грн
Сумма со скидкой: ${data.discounted_cost} грн

Пользователь: ${data.user ? data.user.email : data.user_email}
${data.user && data.user.is_wholesaler ? 'Оптовик': ''}

Информация о доставке:
${data.delivery_info.first_name} ${data.delivery_info.last_name}
${data.delivery_info.phone_number}
${data.delivery_info.is_novaposhta ? data.delivery_info.city + ` Отделение № ${data.delivery_info.novaposhta_number}` : data.delivery_info.address}

Комментарий к заказу:
${data.description}
`
