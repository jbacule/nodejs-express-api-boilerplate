//Declare All Routes HERE
const apiController = app => {
	app.use('/api/shop', require('./shop'))
}

module.exports = apiController;