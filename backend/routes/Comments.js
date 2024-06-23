const express = require('express');
const router = express.Router();
const { Comments } = require('../models');

router.get(
	'/:postId', // route Comments harus dengan param Id
	async (req, res) => {
		// postId
		const postId = req.params.postId; // harus sama dengan yang diatas
		const comments = await Comments.findAll({
			// temukan semua
			where: { PostId: postId }, //PostId harus sama dengan database dan di frontEnd
		});
		res.json(comments); // akan di kembalikan comments
	},
);

router.post(
	'/', // route
	async (req, res) => {
		const comment = req.body; // isi yang di terima dari frontEnd
		await Comments.create(comment); // maka buat
		res.json(comment); // akan di kembalikan di front
	},
);
module.exports = router;
