const ck = require('ckey');
const mongoose = require('mongoose');

const options = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true
};
const address = `mongodb+srv://${ck.MONGODB_USER}:${ck.MONGODB_PASS}@listing-tools-sksz1.mongodb.net/react?retryWrites=true&w=majority`;

// mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(address, options)
.then(()=> console.log('Connected!'))
.catch(err => console.log(err));

//MODELS
module.exports.shop = require('./shop');