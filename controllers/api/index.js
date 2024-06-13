const router = require('express').Router();
// Import just the router express
// Import the index.js from 'api' folder

// const projectRoutes = require('./projectRoutes');
const loginRoutes = require('./loginRoutes');


// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
// router.use('/project', projectRoutes);
router.use('/login', loginRoutes);

module.exports = router;;
