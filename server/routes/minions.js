const express = require('express');
const minionsRouter = express.Router();

// Get an array of all minions
minionsRouter.get('/', (req, res, next) => {});

// Create a new minion and save it to the database
minionsRouter.post('/', (req, res, next) => {});

// Get a single minion by id
minionsRouter.get('/:minionId', (req, res, next) => {});

// Update a single minion by id
minionsRouter.put('/:minionId', (req, res, next) => {});

// Delete a single minion by id
minionsRouter.delete('/:minionId', (req, res, next) => {});

module.exports = minionsRouter;