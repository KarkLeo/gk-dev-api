module.exports = (data) => `
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
