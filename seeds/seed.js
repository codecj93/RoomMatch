const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  console.log('Seeding process started...');

  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const user of userData) {
      await User.create({
        ...user,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    console.log('Seeding process completed successfully.');
  } catch (error) {
    console.error('Error during seeding:', error);
  }

  process.exit(0);
};

seedDatabase();
