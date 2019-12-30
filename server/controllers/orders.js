const Model = require('../models');
const Order = Model.order;
const Events = Model.events;
const Category = Model.categories;
const User = Model.users;

exports.addOrder = (req, res) => {
	const { quantity, totalPrice, attachment, eventId } = req.body;
	Order.create({
		quantity: quantity,
		totalPrice: totalPrice,
		attachment: attachment,
		eventId: eventId,
		status: 'pending'
	}).then((data) =>
		res.send({
			message: 'success',
			data
		})
	);
};

exports.index = (req, res) => {
	Order.findAll({
		attributes: {
			exclude: [ 'createdAt', 'updatedAt', 'eventId' ]
		},
		include: {
			attributes: {
				exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'userId' ]
			},
			model: Events,
			as: 'event',
			include: [
				{
					model: Category,
					as: 'category',
					attributes: {
						exclude: [ 'createdAt', 'updatedAt' ]
					}
				},
				{
					model: User,
					as: 'createdBy',
					attributes: {
						exclude: [ 'role', 'password', 'createdAt', 'updatedAt', 'username' ]
					}
				}
			]
		}
	}).then((data) => {
		res.send(data);
	});
};

// exports.orderPending = (req, res) => {

//     const
// 	Order.findOne({
//         where:{

//         },
// 		attributes: {
// 			exclude: [ 'createdAt', 'updatedAt', 'eventId' ]
// 		},
// 		include: {
// 			attributes: {
// 				exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'userId' ]
// 			},
// 			model: Events,
// 			as: 'event',
// 			include: [
// 				{
// 					model: Category,
// 					as: 'category',
// 					attributes: {
// 						exclude: [ 'createdAt', 'updatedAt' ]
// 					}
// 				},
// 				{
// 					model: User,
// 					as: 'createdBy',
// 					attributes: {
// 						exclude: [ 'role', 'password', 'createdAt', 'updatedAt', 'username' ]
// 					}
// 				}
// 			]
// 		}
// 	}).then((data) => {
// 		res.send(data);
// 	});
// };
