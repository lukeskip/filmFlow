require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const saveGenres = require('./src/services/saveGenresToDB.js');
const saveMovies = require("./src/services/saveMoviesToDB.js");
const saveUsers = require("./src/services/saveUsersToDb.js")
const { TEST } = process.env;
const router = require('./src/routes/index.js');
const expressListRoutes = require('express-list-routes');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

console.log(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME);
conn.sync({ force: TEST === "TRUE" ?true : false }).then(() => {
  
  server.listen(3001, async () => {
    try {
      expressListRoutes(router);
      await saveUsers();
      await saveGenres();
      if (TEST === "TRUE")
        await saveGenres();
        await saveMovies();
    } catch (error) {
      console.log(error);
    }
      console.log("%s listening at 3001"); 
  });
});