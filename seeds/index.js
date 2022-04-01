const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeed');
const seedComments = require('./commentSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedPosts();
  await seedUsers();
  await seedComments();
 
  console.log('🌱Users, posts and comments have been successfully seeded!🌱');

  process.exit(0);
};

seedAll();