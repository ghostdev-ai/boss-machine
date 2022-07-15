const express = require('express');
const ideasRouter = express.Router();

const {
    getIdeas,
    createNewIdea,
    getIdeaById,
    updateIdeaById,
    deleteIdeaById
} = require('../controller/ideas');

ideasRouter.route('/').get(getIdeas).post(createNewIdea);
ideasRouter.route('/:ideaId').get(getIdeaById).put(updateIdeaById).delete(deleteIdeaById);

module.exports = ideasRouter;