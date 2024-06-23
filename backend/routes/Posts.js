const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get('/', async (req, res) => {
	// res.send('hello world')
	// res.json('hello world');
	const listOfPost = await Posts.findAll(); // temukan semua
	res.json(listOfPost);
});

router.post('/', async (req, res) => {
	const post = req.body; // akan meneriam dari frontEnd
	await Posts.create(post); // maka akan di memasukan value ke table
	res.json(post); // akan di kembalikan
});

// router.get('/:id', async (req, res) => {
//   const response = await Posts.findOne({
//     where: {
//       id: req.params.id
//     }
//   });
//   res.status(200).json(response);
// });

router.get(
	'/byId/:id', // router
	async (req, res) => {
		res.json(await Posts.findByPk(req.params.id)); // temukan berdasarkan id di header

		// const id = req.params.id;
		// const post = await Posts.findByPk(id);
		// res.json(post);

		// res.json(await Posts.findOne({
		//   where: { id: req.params.id }
		// }));
	},
);

module.exports = router;
