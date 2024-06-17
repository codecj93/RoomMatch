const router = require('express').Router();
const { User } = require('../../models');


router.post('/api/user', async (req, res) => {
  try {
    const userData = {
      firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            course: req.body.course,
            hobby1: req.body.hobby1,
            hobby2: req.body.hobby2,
            hobby3: req.body.hobby3,
            Preference1: req.body['Preference 1'],
            Preference2: req.body['Preference 2'],
            Preference3: req.body['Preference 3'],
            Preference4: req.body['Preference 4'],
            Preference5: req.body['Preference 5'],
            Preference6: req.body['Preference 6'],
            Preference7: req.body['Preference 7'],
            Preference8: req.body['Preference 8'],
            Preference9: req.body['Preference 9'],
            Preference10: req.body['Preference 10'],
        };
        userData.password = await bcrypt.hash(userData.password, 10);

const newUser = await User.create(userData);

    req.session.save(() => {
      req.session.user_id = userUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});





module.exports = router;
    



