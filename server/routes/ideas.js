const express = require('express');
const ideasRouter = express.Router();
const db = require('../db');


// Get an array of all ideas
ideasRouter.get('/', (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.status(200).send(ideas);
});

// Create a new idea and save it to the database
ideasRouter.post('/', (req, res, next) => {
});

// Get a single idea by id
ideasRouter.get('/:ideaId', (req, res, next) => {
    const { ideaId } = req.params;
    const idea = db.getFromDatabaseById('ideas', ideaId);
    res.status(200).send(idea);
});

// Update a single idea by id
ideasRouter.put('/:ideaId', (req, res, next) => {
    const { ideaId } = req.params;
});

// Delete a single idea by id
ideasRouter.delete('/:ideaId', (req, res, next) => {
    const { ideaId } = req.params;
    db.deleteFromDatabasebyId('ideas', ideaId);
    res.status(200).send({ msg: 'Idea sucessfully deleted!' })
});

module.exports = ideasRouter;