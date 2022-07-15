const db = require('../db');

// Get an array of all ideas
const getIdeas = (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.status(200).send(ideas);
};

// Create a new idea and save it to the database
const createNewIdea = (req, res, next) => {
    const idea = req.body;
    const newIdea = db.addToDatabase('ideas', idea);
    res.status(200).send(newIdea);
};

// Get a single idea by id
const getIdeaById = (req, res, next) => {
    const { ideaId } = req.params;
    const idea = db.getFromDatabaseById('ideas', ideaId);
    res.status(200).send(idea);
};

// Update a single idea by id
const updateIdeaById = (req, res, next) => {
    const idea = req.body;
    const updatedIdea = db.updateInstanceInDatabase('ideas', idea);
    res.status(200).send(updatedIdea);
};

// Delete a single idea by id
const deleteIdeaById = (req, res, next) => {
    const { ideaId } = req.params;
    db.deleteFromDatabasebyId('ideas', ideaId);
    res.status(200).send({ msg: 'Idea sucessfully deleted!' })
};

module.exports = { 
    getIdeas, 
    createNewIdea, 
    getIdeaById, 
    updateIdeaById, 
    deleteIdeaById 
};