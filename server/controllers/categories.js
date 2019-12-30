const Model = require('../models');
const Categories = Model.categories;

//task 1
exports.index = (req, res) => {
	Categories.findAll({
		attributes: {
			exclude: [ 'createdAt', 'updatedAt' ]
		}
	}).then((data) => res.send(data));
};
