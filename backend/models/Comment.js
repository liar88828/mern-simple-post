module.exports = (sequelize, DataTypes) => {
	const Comments = sequelize.define(
		'Comments', // membuat table Comments
		{
			commentBody: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
	);
	return Comments;
};
