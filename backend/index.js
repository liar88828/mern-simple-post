const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const db = require('./models');

app.use(express.json());
app.use(cors());

//Router
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(port + ' runing');
	});
});




// npx sequelize--help;--------------------

