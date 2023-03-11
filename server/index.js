const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const port = process.env.PORT || "http://localhost:3001";

// Syncing all the models at once.
conn.sync({ force: flase }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
