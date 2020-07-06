'use strict';
var faker = require('faker');

const events = () => {
  var foo = Array(30).fill().map((v, i) => i);
  const t = foo.map(d => {
    return {
      name: faker.random.word(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      description: faker.random.words(),
      id: faker.random.uuid(),
      start: faker.date.recent(),
      end: faker.date.recent(),
      url: faker.internet.url(),
      online_event: false,
      logo_url: faker.image.imageUrl(),
      category: faker.random.arrayElement(["Concert", "Sports", "Streaming", "Meetup", "Conference"]),
      number_of_tickets: 34,
      capacity: 500,
      ticket_price: 54,
      address_city: faker.address.city(),
      address_country: faker.address.country(),
      address_street_and_number: faker.address.streetAddress(),
      address_post_code: faker.random.arrayElement(["10343", "45435", "454545", "23342", "54653"]),
      userId: faker.random.uuid(),
      allow_ticket_resale: true,
      ticket_markup: 0
    };
  });
  return t;
};


const fakeEvents = events()

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', fakeEvents, {})
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', fakeEvents)
  }
};

