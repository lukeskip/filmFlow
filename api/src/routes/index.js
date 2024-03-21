const {Router} = require('express')
const {movies} = require('./api')
const moviesRouter = require('./moviesRouter')
const genresRouter = require('./genresRouter')
const reviewsRouter = require('./reviewsRouter')

const router = Router()

router.get('/fake', async (req, res)=>{
    res.status(200).json(movies)
})
router.use('/movies',moviesRouter);
router.use('/genres',genresRouter);
router.use('/reviews',reviewsRouter);


module.exports = router