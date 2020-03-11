const ck = require('ckey');
const mongoose = require('mongoose');

const options = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true
};
const address = `mongodb+srv://${ck.MONGODB_USER}:${ck.MONGODB_PASS}@${ck.MONGODB_CLUSTER}-sksz1.mongodb.net/${ck.MONGODB_DATABASE}?retryWrites=true&w=majority`;

// mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(address, options)
.then(()=> console.log('Connected!'))
.catch(err => console.log(err));

//MODELS
module.exports.shop = require('./shop');