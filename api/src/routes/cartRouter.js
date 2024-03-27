const { Router } = require("express");
const checkAuth = require('../middlewares/checkAuth');
const postCartHandler = require('../handlers/postCartHandler');
const deleteCartHandler = require('../handlers/deleteCartHandler');
const getCartHandler = require("../handlers/getCartHandler");

const cartRouter = Router();

cartRouter.get('/', checkAuth, getCartHandler)
cartRouter.post('/', checkAuth, postCartHandler)
cartRouter.delete('/:movieId', checkAuth, deleteCartHandler)

module.exports = cartRouter;