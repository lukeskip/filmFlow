const postMovies = require("../controllers/postMovies")

module.exports = async (req, res) => {
    try {
        const body = req.body

        const data = await postMovies(body)

        if (data.message) {
            return res.status(404).json({ message: data.message})
        }

        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error})
    }
}