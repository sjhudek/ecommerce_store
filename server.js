const express = require('express');
const routes = require('./routes');

// Import your models
const db = require('./models');

// Sync Sequelize models with the database
db.sequelize.sync({ force: false }).then(() => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
