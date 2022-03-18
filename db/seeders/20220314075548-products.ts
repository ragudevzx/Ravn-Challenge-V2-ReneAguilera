'use strict'

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('product', [
      {
        productStoreId: 'pcdesk1',
        productName: 'Pc Combo',
        price: 600,
        information: 'fkdafkadhflda',
        imageUrl: 'no image to show',
        isActive: true,
        productCategoryId: 1,
        stock: 5,
      },
      {
        productStoreId: 'ssd1',
        productName: 'SSD M.2 Samsung',
        price: 150,
        information: '1tera',
        imageUrl: 'no image to show',
        isActive: true,
        productCategoryId: 2,
        stock: 5,
      },
      {
        productStoreId: 'router1',
        productName: 'cisco',
        price: 300,
        information: 'flkdsalfkd',
        imageUrl: 'no image to show',
        isActive: true,
        productCategoryId: 3,
        stock: 5,
      },
      {
        productStoreId: 'keyboard1',
        productName: 'keyboard for home office',
        price: 30,
        information: 'tflvukdhfd',
        imageUrl: 'no image to show',
        isActive: true,
        productCategoryId: 4,
        stock: 5,
      },
      {
        productStoreId: 'ipad1',
        productName: 'ipad',
        price: 1200,
        information: 'this is the newst iphone',
        imageUrl: 'no image to show',
        isActive: true,
        productCategoryId: 5,
        stock: 5,
      },
      {
        productStoreId: 'ps51',
        productName: 'Play Station 5',
        price: 1200,
        information: 'flsda;fjda;s',
        imageUrl: 'no image to show',
        isActive: true,
        productCategoryId: 6,
        stock: 5,
      },
      {
        productStoreId: 'iphone1',
        productName: 'Iphone 13 Pro Max',
        price: 1500,
        information: 'this is the newst iphone',
        imageUrl: 'no image to show',
        isActive: true,
        productCategoryId: 5,
        stock: 5,
      },
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('product', null, {})
  },
}
