const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({  });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const getEnumValues = (model, attribute) => {
  return model.rawAttributes[attribute].values;
};

// Route to render the registration form and fetch existing users
app.get('/register', async (req, res) => {
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

// Route to handle form submission
app.post('/register', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
