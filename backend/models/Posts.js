module.exports = (sequelize, DataTypes) => {
	const Posts = sequelize.define(
		'Posts', // membuat table Posts
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			postText: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
	);
	// harus merelasi dengan Model Comments
	Posts.associate = (models) => {
		Posts.hasMany(models.Comments, {
			onDelete: 'cascade',
		});
	};
	return Posts;
};
