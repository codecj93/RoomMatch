const router = require('express').Router();
const { getEnumValues } = require('../utils/utils.js');
const { User } = require('../models')


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
    const questions = {
      course: {
        values: ['Philosophy', 'Psychology', 'Biology', 'History', 'Business Administration', 'Computer Science', 'Communications', 'Political Science', 'Foreign Language', 'Education', 'Art', 'Engineering', 'Economics', 'Mathematics', 'Marketing', 'Nursing', 'Environmental Science', 'Sociology'],
      },
      hobby1: {
        values: ['Sports', 'Museums', 'Reading', 'Dance', 'Gardening', 'Painting', 'Writing', 'Drawing', 'Musical Instrument', 'Hiking', 'Exercise', 'Baking', 'Cooking', 'Yoga', 'Knitting', 'Games and Puzzles', 'Shopping', 'Photography', 'Blogging'],
      },
      hobby2: {
        values: ['Sports', 'Museums', 'Reading', 'Dance', 'Gardening', 'Painting', 'Writing', 'Drawing', 'Musical Instrument', 'Hiking', 'Exercise', 'Baking', 'Cooking', 'Yoga', 'Knitting', 'Games and Puzzles', 'Shopping', 'Photography', 'Blogging'],
      },
      hobby3: {
        values: ['Sports', 'Museums', 'Reading', 'Dance', 'Gardening', 'Painting', 'Writing', 'Drawing', 'Musical Instrument', 'Hiking', 'Exercise', 'Baking', 'Cooking', 'Yoga', 'Knitting', 'Games and Puzzles', 'Shopping', 'Photography', 'Blogging'],
      },
      "Answer this question!": {
        values: ['Messy', 'Clean'],
      },
      question2: {
        values: ['Night Owl', 'Early Sleeper'],
      },
      question3: {
        values: ['Partygoer', 'Homebody'],
      },
      question4: {
        values: ['Gym Rat', 'Allergic to the Gym'],
      },
      question5: {
        values: ['TV Connoisseur', 'TV is not really my thing'],
      },
      question6: {
        values: ['Always playing music', 'Peace and Quiet'],
      },
      question7: {
        values: ['Enjoys the Outdoors', 'Not a nature fan'],
      },
      question8: {
        values: ['Fall or Spring type of person', 'Winter or Summer type of person'],
      },
      question9: {
        values: ['Marvel', 'DC'],
      },
      question10: {
        values: ['Early Riser', 'Late Sleeper'],

      },
    }
    

    res.render('register', {questions})
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



module.exports = router;
