
const { User } = require('../models');

const userData = [
  {
    name: 'ComputerKat88',
    password: 'password123',
  },
  {
    name: 'TechTroll8573',
    password: 'password123',
  },
  {
    name: 'yourmom',
    password: 'password123',
  },
  {
    name: 'Grogu66',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;