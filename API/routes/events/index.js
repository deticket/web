const { Router } = require('express');
const { check, validationResult, body } = require('express-validator');
const Sequelize = require('sequelize');

const { Event } = require('../../entities/event')

const router = new Router();

const DB = require('../../models')

const Events = DB.Event;

const addEventValidator = [
  body('name', 'Event must have a name').isString().not().isEmpty(),
  body('description', 'Event must have a description').isString().not().isEmpty(),
  body('start', 'Event must have a start date').isISO8601().toDate().not().isEmpty(),
  body('end', 'Event must have a end date').isISO8601().toDate(),
  body('end', 'Event must have a category').isString().not().isEmpty()

];

router.post('/api/event', async function (req, res, next) {
  // TODO: Validations
  console.log('payload', req.body)

  const { name, description, start, end, url, online_event, category, numberOfTickets, capacity, ticketPrice, address_city, address_country, address_street_and_number, address_post_code, userId } = req.body;
  try {

    Events.create({
      name: name || '',
      description: description || '',
      url: url || '',
      category: category || '',
      number_of_tickets: numberOfTickets || 0,
      capacity: capacity || '',
      ticket_price: ticketPrice || 0,
      address_city: address_city || '',
      address_country: address_country || '',
      address_street_and_number: address_street_and_number || '',
      address_post_code: address_post_code || '',
      userId: userId || ''
    })
      .then(function (event) {
        res.json(new Event(event));
      })
      .catch(err => {
        next(err)
      })

  } catch (err) {
    next(err)
  }
});

router.get('/api/event', async function (req, res, next) {

  try {
    const results = await Events.findAll({ order: [['createdAt', 'DESC']] })
    // TODO: event entity
    res.json(results)

  } catch (err) {
    next(err)
  }
})


module.exports = router;