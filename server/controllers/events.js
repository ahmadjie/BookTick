const Model = require('../models');
const Categories = Model.categories;
const Events = Model.events;
const Users = Model.users;

exports.allEvents = (req, res) => {
	Events.findAll({
		attributes: [ 'id', 'title', 'description', 'price', 'starTime', 'image' ]
	}).then((data) => {
		res.send(data);
	});
};

//task 1 event by time belom
exports.eventsByTitle = (req, res) => {
	const title = req.query.title;
	Events.findOne({
		attributes: {
			exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'userId' ]
		},
		where: {
			title: title
		},
		include: [
			{
				model: Categories,
				as: 'category',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt' ]
				}
			}
		],
		include: [
			{
				model: Users,
				as: 'createdBy',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt', 'role', 'password', 'username' ]
				}
			}
		]
	}).then((data) => {
		res.send(data);
	});
};

//task 2
exports.eventsByCategory = (req, res) => {
	const { id } = req.params;
	Events.findAll({
		attributes: {
			exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'userId' ]
		},
		include: [
			{
				model: Categories,
				as: 'category',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt' ]
				},
				where: {
					id
				}
			},
			{
				model: Users,
				as: 'createdBy',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt', 'role', 'password', 'username' ]
				}
			}
		]
	}).then((data) => res.send(data));
};

//task 6
exports.eventsByid = (req, res) => {
	const { id } = req.params;
	Events.findOne({
		where: {
			id
		},
		attributes: {
			exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'userId' ]
		},
		include: [
			{
				model: Categories,
				as: 'category',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt' ]
				}
			},
			{
				model: Users,
				as: 'createdBy',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt', 'role', 'password', 'username' ]
				}
			}
		]
	}).then((data) => {
		res.send(data);
	});
};

//exports.eventsByTime = (req, res) => {
// 	const time = req.query.start_time;
// 	Events.findOne({
// 		attributes: {
// 			exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'userId' ]
// 		},
// 		where: {
// 			starTime: time
// 		},
// 		include: [
// 			{
// 				model: Categories,
// 				as: 'category',
// 				attributes: {
// 					exclude: [ 'createdAt', 'updatedAt' ]
// 				}
// 			}
// 		],
// 		include: [
// 			{
// 				model: Users,
// 				as: 'createdBy',
// 				attributes: {
// 					exclude: [ 'createdAt', 'updatedAt', 'role', 'password', 'username' ]
// 				}
// 			}
// 		]
// 	}).then((data) => {
// 		res.send(data);
// 	});
// };
