const {Router} = require('express')
const {movies} = require('./api')
const router = Router()

router.get('/movies', async (req, res)=>{
    res.status(200).send(movies)
})

module.exports = router