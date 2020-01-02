const Model = require('../models');
const Users = Model.users;
const Events = Model.events;

const Favorites = Model.favorites;

exports.addFavorite = (req, res) => {
	const { eventId } = req.body;

	Favorites.create({
		eventId,
		userId: tokenUserId
	})
		.then((data) =>
			res.send({
				message: 'success',
				data
			})
		)
		.catch((err) => {
			res.status(200).send({
				message: err
			});
		});
};

exports.favoriteByUser = (req, res) => {
	const { userId } = req.params;
	Favorites.findAll({
		where: {
			userId
		},
		attributes: {
			exclude: [ 'createdAt', 'updatedAt', 'userId' ]
		},
		include: [
			{
				model: Events,
				as: 'event',
				attributes: [ 'id', 'price', 'description', 'title', 'image' ]
			}
		]
	})
		.then((data) => {
			if (data.length > 0) {
				res.status(200).send(data);
			} else if (data.length <= 0) {
				res.status(200).send({
					message: 'You Have not favorite'
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
