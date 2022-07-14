const express = require('express');
const meetingsRouter = express.Router();
const db = require('../db');

// Get an array of all meetings
meetingsRouter.get('/', (req, res, next) => {
    const meetings = db.getAllFromDatabase('meetings');
    res.status(200).send(meetings);
});

// Create a new meeting and save it to the database
meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = db.createMeeting();
    res.status(200).send(newMeeting);
});

// Delete all meetings from the database
meetingsRouter.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    res.status(200).send({ msg: 'Meetings successfully deleted!' });
});

module.exports = meetingsRouter;