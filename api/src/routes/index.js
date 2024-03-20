const {Router} = require('express')
const {movies} = require('./api')
const postMoviesHandler = require('../handlers/postMoviesHandler')
const getMoviesHandler = require('../handlers/getMoviesHandler')
const putMoviesHandler = require('../handlers/putMoviesHandler')
const router = Router()

router.get('/fake', async (req, res)=>{
    res.status(200).json(movies)
})
router.get('/movies', getMoviesHandler)
router.post('/movies', postMoviesHandler)
router.put('/movies/:id', putMoviesHandler)

module.exports = router