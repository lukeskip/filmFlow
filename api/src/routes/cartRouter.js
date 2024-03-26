const { Router } = require("express");
const postCartHandler = require('../handlers/postCartHandler');

const cartRouter = Router();

cartRouter.post('/', postCartHandler)

module.exports = cartRouter;