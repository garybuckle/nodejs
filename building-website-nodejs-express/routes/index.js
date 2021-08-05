const express = require('express');
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  // Route for default page
  router.get('/', (request, response) => {
    if (!request.session.visitCount) {
      request.session.visitCount = 0;
    }
  });
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
