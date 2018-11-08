const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
};

// Example Function for Database:

// function getUsers(db = connection) {
//   return db("users").select();
// }