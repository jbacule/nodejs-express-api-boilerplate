const db = require('../models');

const getShopItems = async (req, res, next) => {
	try{
		let response = await db.shop.find({});
		res.status(200).json(response);
	}catch(err){
		next(err);
	}
}

const getShopItem = async (req, res, next) => {
	try{
		let response = await db.shop.findById(req.params.id);
		res.status(200).json(response);
	}catch(err){
		next(err);
	}
}

const createShopItem = async (req, res, next) => {
	try{
		let response = await db.shop.create(req.body);
		res.status(200).json(response);
	}catch(err){
		next(err);
	}
}

const updateShopItem = async (req, res, next) => {
	try{
		let { _id } = await db.shop.findByIdAndUpdate(req.params.id, req.body);

		//get the updated response
		updatedResponse = await db.shop.findById(_id);
		res.status(200).json(updatedResponse);
	}catch(err){
		next(err);
	}
}

const deleteShopItem = async (req, res, next) => {
	try{
		let response = await db.shop.findByIdAndRemove(req.params.id);
		res.status(200).json(response);
	}catch(err){
		next(err);
	}
}

module.exports = { getShopItems, getShopItem, createShopItem, updateShopItem, deleteShopItem };