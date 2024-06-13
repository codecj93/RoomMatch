const express = require('express');
const User = require('../../models/User'); 
const { getEnumValues } = require('../../utils'); //getEnumValues function is defined in a separate file

const router = express.Router();

router.get('/register', async (req, res) => {
  try {
    const users = await User.findAll();
    const enumValues = {
      course: getEnumValues(User, 'course'),
      hobby1: getEnumValues(User, 'hobby1'),
      hobby2: getEnumValues(User, 'hobby2'),
      hobby3: getEnumValues(User, 'hobby3'),
      question1: getEnumValues(User, 'question1'),
      question2: getEnumValues(User, 'question2'),
      question3: getEnumValues(User, 'question3'),
      question4: getEnumValues(User, 'question4'),
      question5: getEnumValues(User, 'question5'),
      question6: getEnumValues(User, 'question6'),
      question7: getEnumValues(User, 'question7'),
      question8: getEnumValues(User, 'question8'),
      question9: getEnumValues(User, 'question9'),
      question10: getEnumValues(User, 'question10'),
    };

    res.render('register', {
      users: users.map(user => user.get({ plain: true })),
      enumValues,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
