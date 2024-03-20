const {Router} = require('express')
const {movies} = require('./api')
const postContentHandler = require('../handlers/postContentHandler')
const getMoviesHandler = require('../handlers/getMoviesHandler')
const router = Router()

router.get('/fake', async (req, res)=>{
    res.status(200).json(movies)
})
router.get('/movies', getMoviesHandler)
router.post('/movies', postContentHandler)

module.exports = router