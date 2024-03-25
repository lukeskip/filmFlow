const { Router } = require("express");
const postUsersHandler = require('../handlers/postUsersHandler')


const usersRouter = Router();

// usersRouter.get('/', getMoviesHandler);
// usersRouter.get('/:id', getMoviesIdHandler);
usersRouter.post('/', postUsersHandler);
// usersRouter.put('/:id', putMoviesHandler);
// usersRouter.delete('/:id', deleteMoviesHandler)

module.exports = usersRouter;