const express = require('express');
// const cors = require('cors');
const app = express();
const port = 6000;
const db = require('./models');

// app.use(cors());
// app.use(express.json());

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(port + ' runing');
	});
});




// npx sequelize--help;--------------------

