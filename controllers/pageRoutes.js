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
      "Preference 1": {
        values: ['Messy', 'Clean'],
      },
      "Preference 2": {
        values: ['Night Owl', 'Early Sleeper'],
      },
      "Preference 3": {
        values: ['Partygoer', 'Homebody'],
      },
      "Preference 4": {
        values: ['Gym Rat', 'Allergic to the Gym'],
      },
      "Preference 5": {
        values: ['TV Connoisseur', 'TV is not really my thing'],
      },
      "Preference 6": {
        values: ['Always playing music', 'Peace and Quiet'],
      },
      "Preference 7": {
        values: ['Enjoys the Outdoors', 'Not a nature fan'],
      },
      "Preference 8": {
        values: ['Fall or Spring type of person', 'Winter or Summer type of person'],
      },
      "Preference 9": {
        values: ['Marvel', 'DC'],
      },
      "Preference 10": {
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
