const jwt = require('jsonwebtoken');
const model = require('../models');
const User = model.users;

exports.login = (req, res) => {
	const { username, password } = req.body;

	User.findOne({
		where: {
			username,
			password
		}
	})
		.then((user) => {
			if (user) {
				const token = jwt.sign({ userRole: user.role, userId: user.id }, 'asep');
				if (token) {
					res.status(200).json({
						data: {
							message: 'Success',
							username,
							token
						}
					});
				}
			} else {
				res.status(403).json({
					message: 'username atau Password Anda Salah'
				});
			}
		})
		.catch((err) => {
			res.status(403).json({
				message: err.message
			});
		});
};

exports.register = (req, res) => {
	const { name, username, email, password } = req.body;

	User.create({
		name: name,
		phone: '+62',
		email: email,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGk6IBS2S51VowefAg_zezQ5FFYar9w8Ehq_lj6n1FvvcjgU9&s',
		username: username,
		password: password,
		role: 2
	}).then((data) => {
		const token = jwt.sign({ userId: User.id }, 'asep');
		res.send({
			data: {
				message: 'success',
				token
			}
		});
	});
};
