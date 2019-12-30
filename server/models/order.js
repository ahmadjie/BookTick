'use strict';
module.exports = (sequelize, DataTypes) => {
	const order = sequelize.define(
		'order',
		{
			quantity: DataTypes.INTEGER,
			totalPrice: DataTypes.INTEGER,
			status: DataTypes.STRING,
			attachment: DataTypes.STRING,
			eventId: DataTypes.INTEGER
		},
		{}
	);
	order.associate = function(models) {
		// associations can be defined here
		order.belongsTo(models.events, {
			foreignKey: 'eventId',
			as: 'event',
			sourceKey: 'id'
		});
	};
	return order;
};
