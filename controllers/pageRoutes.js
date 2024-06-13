const router = require('express').Router();
const { getEnumValues } = require('../utils/utils.js');
const {User} = require('../models')


router.get('/', async (req, res) => {
    res.render("home")
});

router.get('/login', async (req, res) => {
    res.render("login")
});

router.get('/profile', async (req, res) => {
    res.render("profile")
});



router.get('/register', async (req, res) => {
    try {
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
        
        enumValues,
      });
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });
  
  

module.exports = router;
