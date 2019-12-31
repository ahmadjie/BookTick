const Model = require('../models');
const Users = Model.users;

exports.userById = (req, res) => {
	const { id } = req.params;
	Users.findOne({
		where: {
			id
		},
		attributes: {
			exclude: [ 'createdAt', 'updatedAt', 'password' ]
		}
	})
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.send({
				message: err.message
			});
		});
};

exports.userByLogin = (req, res) => {
	Users.findOne({
		where: {
			id: tokenUserId
		},
		attributes: {
			exclude: [ 'createdAt', 'updatedAt', 'password' ]
		}
	})
		.then((data) => {
			if (data !== null) {
				res.status(200).send({
					data
				});
			} else {
				res.status(403).send({
					message: 'must login'
				});
			}
		})
		.catch((err) => {
			res.send({
				message: err.message
			});
		});
};
