const express = require('express');
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = params => {
  // Route for default page
  router.get('/', (request, response) => {
    //   response.sendFile(path.join(__dirname, './static/index.html'));
    response.render('pages/index', { pageTitle: 'Welcome to Express server learning' });
  });
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
