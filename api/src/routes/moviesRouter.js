const { Router } = require("express");
const postMoviesHandler = require('../handlers/postMoviesHandler')
const getMoviesHandler = require('../handlers/getMoviesHandler')
const putMoviesHandler = require('../handlers/putMoviesHandler')

const moviesRouter = Router();

moviesRouter.get('/', getMoviesHandler);
moviesRouter.post('/', postMoviesHandler);
moviesRouter.put('/:id', putMoviesHandler);

module.exports = moviesRouter;