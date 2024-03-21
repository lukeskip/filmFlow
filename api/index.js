require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const saveGenres = require('./src/services/saveGenresToDB.js');
const saveMovies = require("./src/services/saveMoviesToDB.js");
const { TEST } = process.env;

conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    try {
      await saveGenres();
      if (TEST === "TRUE")
        await saveMovies();
    } catch (error) {
      console.log(error);
    }
      console.log("%s listening at 3001"); 
  });
});