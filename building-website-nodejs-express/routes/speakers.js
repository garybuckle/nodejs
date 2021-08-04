const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get('/', async (request, response) => {
    const speakers = await speakerService.getList();
    return response.send('Speakers List');
  });

  router.get('/', (request, response) => response.json(speakers));

  return router;
};
