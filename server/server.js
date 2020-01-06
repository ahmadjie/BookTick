const express = require('express');
require('express-group-routes');
const categoriesController = require('./controllers/categories');
const eventsController = require('./controllers/events');
const orderController = require('./controllers/orders');
const authController = require('./controllers/auth');
const userController = require('./controllers/user');
const favoriteController = require('./controllers/favorites');
const middleware = require('./middleware');
const app = express();
const cors = require('cors');
const port = 7000;

const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.group('/api/v1', (router) => {
	//task 1
	router.get('/categories', categoriesController.index);
	router.get('/category/:id', categoriesController.byId);
	router.get('/events', eventsController.allEvents);
	router.get('/event/', eventsController.eventsByTitle);
	router.post('/event/', middleware.checkAuth, eventsController.addEvent);
	//task 2
	router.get('/category/:id/events', eventsController.eventsByCategory);
	//task 3
	router.post('/login', authController.login);
	//task 4
	router.post('/register', authController.register);

	//task 6
	router.get('/event/:id', eventsController.eventsByid);
	router.post('/order', middleware.checkAuth, orderController.addOrder);

	//task 7
	router.get('/profile/:id', userController.userById);
	router.get('/profile', middleware.checkAuth, userController.userByLogin);
	router.put('/profile', middleware.checkAuth, userController.editProfile);
	//lihat seluruh order
	router.get('/orders', orderController.index);
	router.get('/user/orders', middleware.checkAuth, orderController.orderByStatus);
	router.get('/order/:id', middleware.checkAuth, orderController.orderById);
	// router.get('/order/:id', middleware.checkAuth, orderController.confirmOrderById);

	//favorites
	router.get('/user/favorite', middleware.checkAuth, favoriteController.favoriteByUser);
	router.post('/favorite', middleware.checkAuth, favoriteController.addFavorite);

	//task1 belom jadi
	// router.get('/events/:time', eventsController.eventsByTime);
});

app.listen(port, () => console.log(`run on port ${port}`));
