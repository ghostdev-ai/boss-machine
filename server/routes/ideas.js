const express = require('express');
const ideasRouter = express.Router();

// Get an array of all ideas
ideasRouter.get('/', (req, res, next) => {});

// Create a new idea and save it to the database
ideasRouter.post('/', (req, res, next) => {});

// Get a single idea by id
ideasRouter.get('/:ideaId', (req, res, next) => {});

// Update a single idea by id
ideasRouter.put('/:ideaId', (req, res, next) => {});

// Delete a single idea by id
ideasRouter.delete('/:ideaId', (req, res, next) => {});

module.exports = ideasRouter;