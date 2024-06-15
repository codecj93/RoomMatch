const router = require('express').Router();
const {User} = require('../../models')



router.post('/register', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router

