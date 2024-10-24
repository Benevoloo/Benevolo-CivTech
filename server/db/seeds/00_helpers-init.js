const User = require('../../models/User')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('interests').del()
  await knex('tasks').del()
  await knex('users').del()

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE tasks_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE interests_id_seq RESTART WITH 1');


await User.create('cool_cat', '1234', 'Chris J', null, 10705, 'Hey I like Oreos.', true);//1
await User.create('jahlapeno', '1234', 'Bugs', null, 10705, 'Hey I like Ramen', true);//2
await User.create('kittykat', '1234', 'John D', null, 10705, 'Hey I like Kit-Kats', true);//3
await User.create('sandwichlover', '1234', 'Olivia S', null, 10705, 'Hey I like Sandwiches', true);//4
await User.create('burgerfan', '1234', 'Linda G', null, 10705, 'Hey I like Burgers', true);//5
await User.create('l33t-guy', '1234', 'Fiona', null, 10705, 'Hey I like Reeses.', false);//6
await User.create('wowow', '1234', 'Alex', null, 10705, 'Hey I like Snickers', false);//7
await User.create('frenchfry', '1234', 'Jack F', null, 10705, 'Hey I like Fries', false);//8
await User.create('pizzafan', '1234', 'Mario L', null, 10705, 'Hey I like Pizza', false);//9
await User.create('icecreamfan', '1234', 'Nina A', null, 10705, 'Hey I like Ice Cream', false);//10


await User.create('spidey', '1234', 'Peter P', null, 11232, 'Hey I like Webs', true);//11
await User.create('moonwalker', '1234', 'Michael J', null, 11232, 'Hey I like Dancing', true);//12
await User.create('chefmaster', '1234', 'Gordon R', null, 11232, 'Hey I like Cooking', true);//13
await User.create('doglover', '1234', 'Jane D', null, 11232, 'Hey I like Dogs', true);//14
await User.create('gardenlover', '1234', 'Mike T', null, 11232, 'Hey I like Gardening', true);//15
await User.create('batman', '1234', 'Bruce W', null, 11232, 'Hey I like Gotham', false);//16
await User.create('sunshine', '1234', 'Sunny L', null, 11232, 'Hey I like Ice Cream', false);//17
await User.create('bookworm', '1234', 'Sarah B', null, 11232, 'Hey I like Reading', false);//18
await User.create('gamemaster', '1234', 'Zelda L', null, 11232, 'Hey I like Games', false);//19
await User.create('travelfan', '1234', 'Emily S', null, 11232, 'Hey I like Traveling', false);//20


await User.create('starrynight', '1234', 'Vincent V', null, 10025, 'Hey I like Painting', true);//21
await User.create('chocolatelover', '1234', 'Mel C', null, 10025, 'Hey I like Chocolate', true);//22
await User.create('wonderwoman', '1234', 'Diana P', null, 10025, 'Hey I like Justice', true);//23
await User.create('guitarhero', '1234', 'Slash R', null, 10025, 'Hey I like Guitars', true);//24
await User.create('mathgenius', '1234', 'Isaac N', null, 10025, 'Hey I like Math', true);//25
await User.create('soccerguy', '1234', 'David B', null, 10025, 'Hey I like Soccer', false);//26
await User.create('superman', '1234', 'Clark K', null, 10025, 'Hey I like Flying', false);//27
await User.create('bakerboy', '1234', 'Tommy C', null, 10025, 'Hey I like Baking', false);//28
await User.create('puzzlepro', '1234', 'Nancy D', null, 10025, 'Hey I like Puzzles', false);//29
await User.create('sportsfan', '1234', 'James K', null, 10025, 'Hey I like Basketball', false);//30

  

  await knex('tasks').insert([
    {
      "title": "Moving furniture",
      "body": "Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!",
      "helper_id": 6,
      "neighbor_id": 1,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Moving furniture",
      "body": "Hey I just need help rearranging some furniture in my home. Just a lamp. Thanks!",
      "helper_id": null,
      "neighbor_id": 1,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Picking up groceries",
      "body": "Hey I called the supermarket for an order and I need help picking it up.",
      "helper_id": 7,
      "neighbor_id": 2,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Moving furniture",
      "body": "Hey I just need help rearranging some furniture in my home. Just some seats. Thanks!",
      "helper_id": null,
      "neighbor_id": 2,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help with garden work",
      "body": "Hey I need help planting flowers and mowing the lawn in my backyard.",
      "helper_id": 8,
      "neighbor_id": 3,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help organizing kitchen",
      "body": "Need assistance with organizing kitchen shelves and cleaning up. Thanks!",
      "helper_id": null,
      "neighbor_id": 3,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Moving boxes",
      "body": "I need help moving some boxes into the garage.",
      "helper_id": 9,
      "neighbor_id": 4,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Painting help",
      "body": "I need assistance in painting one of the rooms in my house. Paint and brushes are ready.",
      "helper_id": null,
      "neighbor_id": 4,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Moving cabinets",
      "body": "I need help moving some cabinets into the garage.",
      "helper_id": 10,
      "neighbor_id": 5,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Pet help",
      "body": "I need assistance in grooming one of my cats. Brush is ready.",
      "helper_id": null,
      "neighbor_id": 5,
      "zipcode": 10705,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help with pet care",
      "body": "Need someone to help walk my dog in the mornings. Thanks!",
      "helper_id": 16,
      "neighbor_id": 11,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Grocery shopping assistance",
      "body": "Looking for someone to help me with grocery shopping for the week.",
      "helper_id": null,
      "neighbor_id": 11,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Lawn care",
      "body": "Hey, I need help with mowing my lawn this weekend.",
      "helper_id": 17,
      "neighbor_id": 12,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help with cleaning windows",
      "body": "I need someone to help clean the windows of my house.",
      "helper_id": null,
      "neighbor_id": 12,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help with moving plants",
      "body": "I need assistance in moving some large potted plants from the porch to the backyard.",
      "helper_id": 18,
      "neighbor_id": 13,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Garage cleaning",
      "body": "Looking for someone to help clean and organize the garage.",
      "helper_id": null,
      "neighbor_id": 13,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Assistance with cooking",
      "body": "I need help with meal preparation for a small gathering this weekend.",
      "helper_id": 19,
      "neighbor_id": 14,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help organizing the attic",
      "body": "Need assistance with organizing old boxes and cleaning up the attic.",
      "helper_id": null,
      "neighbor_id": 14,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Assistance with cleaning",
      "body": "I need help reaching the top of the cabinets to dust them.",
      "helper_id": 20,
      "neighbor_id": 15,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help organizing storage room",
      "body": "Need assistance with organizing old boxes and cleaning up the storage room.",
      "helper_id": null,
      "neighbor_id": 15,
      "zipcode": 11232,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },

    {
      "title": "Help with painting the house",
      "body": "I need assistance painting my living room walls. Supplies will be provided.",
      "helper_id": 26,
      "neighbor_id": 21,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Rearranging furniture",
      "body": "Help needed for moving a few pieces of furniture around in my apartment.",
      "helper_id": null,
      "neighbor_id": 21,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help with baking",
      "body": "Looking for assistance in preparing desserts for a party.",
      "helper_id": 27,
      "neighbor_id": 22,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Lawn mowing",
      "body": "I need someone to help mow my lawn this weekend.",
      "helper_id": null,
      "neighbor_id": 22,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help with guitar practice",
      "body": "Looking for someone to practice guitar duets with.",
      "helper_id": 28,
      "neighbor_id": 23,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help moving bookshelves",
      "body": "I need assistance moving a heavy bookshelf into my living room.",
      "helper_id": null,
      "neighbor_id": 23,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Painting help",
      "body": "Looking for someone to help paint the front porch. Supplies are ready.",
      "helper_id": 29,
      "neighbor_id": 24,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help cleaning garage",
      "body": "I need someone to help organize and clean out my garage. Boxes need to be sorted.",
      "helper_id": null,
      "neighbor_id": 24,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Painting help",
      "body": "Looking for someone to help paint the front porch. Supplies are ready.",
      "helper_id": 30,
      "neighbor_id": 25,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    },
    {
      "title": "Help cleaning garage",
      "body": "I need someone to help organize and clean out my garage. Boxes need to be sorted.",
      "helper_id": null,
      "neighbor_id": 25,
      "zipcode": 10025,
      "status": "In-progress.",
      "expiration_date": "10/14/2024"
    }
  ]);

  await knex('interests').insert([
    {"helper_id": 6, "task_id": 10},
    {"helper_id": 5, "task_id": 8},
    {"helper_id": 4, "task_id": 6},
    {"helper_id": 3, "task_id": 4},
    {"helper_id": 2, "task_id": 2}
  ]);
};
