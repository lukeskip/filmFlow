const { Router } = require("express");
const postUsersHandler = require('../handlers/postUsersHandler');
const getUsersHandler = require('../handlers/getUsersHandler');
const checkAdmin = require('../middlewares/checkAdmin');


const usersRouter = Router();
usersRouter.post('/', postUsersHandler);


usersRouter.get('/', checkAdmin, getUsersHandler);



// usersRouter.get('/:id', getMoviesIdHandler);
// usersRouter.put('/:id', putMoviesHandler);
// usersRouter.delete('/:id', deleteMoviesHandler)

module.exports = usersRouter;