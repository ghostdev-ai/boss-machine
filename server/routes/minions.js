const express = require('express');
const minionsRouter = express.Router();
const db = require('../db');

// Get an array of all minions
minionsRouter.get('/', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.status(200).send(minions);
});

// Create a new minion and save it to the database
minionsRouter.post('/', (req, res, next) => {
    const minion = req.body;
    const newMinion = db.addToDatabase('minions', minion);
    res.status(200).send(newMinion);
});

// Get a single minion by id
minionsRouter.get('/:minionId', (req, res, next) => {
    const { minionId } = req.params;
    const minion = db.getFromDatabaseById('minions', minionId);
    res.status(200).send(minion);
});

// Update a single minion by id
minionsRouter.put('/:minionId', (req, res, next) => {
    const minion = req.body;
    const updatedMinion = db.updateInstanceInDatabase('minions', minion);
    res.status(200).send(updatedMinion);
});

// Delete a single minion by id
minionsRouter.delete('/:minionId', (req, res, next) => {
    const { minionId } = req.params;
    db.deleteFromDatabasebyId('minions', minionId);
    res.status(200).send({ msg: 'Minion sucessfully deleted!' })
});

module.exports = minionsRouter;