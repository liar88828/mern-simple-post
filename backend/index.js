const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const db = require('./models');

app.use(express.json()); // akan mnerima file berupa json
app.use(cors()); // bisa di akses di macam ip

//Router
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter); //register router post
app.use('/comments', require('./routes/Comments')); //register router comments

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(port + ' running');
	});
});

// npx sequelize--help;--------------------
