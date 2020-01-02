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
		attachment: 'default',
		eventId: eventId,
		status: 'pending',
		buyerId: tokenUserId
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
			exclude: [ 'createdAt', 'updatedAt', 'eventId', 'categoryId', 'userId', 'buyerId' ]
		},
		include: [
			{
				model: Events,
				as: 'event',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'userId', 'urlmaps', 'endTime', 'image' ]
				}
			},
			{
				model: User,
				as: 'buyer',
				attributes: [ 'id', 'name' ]
			}
		]
	}).then((data) => {
		res.send(data);
	});
};

exports.orderByUser = (req, res) => {
	const { buyerId } = req.params;
	Order.findAll({
		where: {
			buyerId
		},
		attributes: [ 'id', 'status', 'totalPrice', 'quantity' ],
		include: [
			{
				model: Events,
				as: 'event',
				attributes: [ 'id', 'price', 'description', 'title', 'image', 'address', 'starTime' ]
			},
			{
				model: User,
				as: 'buyer',
				attributes: [ 'id', 'name' ]
			}
		]
	})
		.then((data) => {
			if (data.length > 0) {
				res.status(200).send(data);
			} else if (data.length <= 0) {
				res.status(200).send({
					message: 'You Have not order'
				});
			} else {
				res.send({
					message: 'error'
				});
			}
		})
		.catch((err) => {
			res.send({
				message: err
			});
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
