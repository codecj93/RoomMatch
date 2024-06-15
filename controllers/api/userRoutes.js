const router = require('express').Router();
const {User} = require('../../models')



router.post('/users', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      await newUser.save()
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router

