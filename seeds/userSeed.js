
const { User } = require('../models');

const userData = [
  {
    username: 'ComputerKat88',
    password: 'password123',
    email: 'ComputerKat88@mail.com'
  },
  {
    username: 'TechTroll8573',
    password: 'password123',
    email: 'TechTroll8573@mail.com'
  },
  {
    username: 'yourmom',
    password: 'password123',
    email: 'yourmom@mail.com'
  },
  {
    username: 'Grogu66',
    password: 'password123',
    email: 'Grogu66@mail.com'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;