const express = require('express');
const meetingsRouter = express.Router();

// Get an array of all meetings
meetingsRouter.get('/', (req, res, next) => {});

// Create a new meeting and save it to the database
meetingsRouter.post('/', (req, res, next) => {});

// Delete all meetings from the database
meetingsRouter.delete('/', (req, res, next) => {});

module.exports = meetingsRouter;