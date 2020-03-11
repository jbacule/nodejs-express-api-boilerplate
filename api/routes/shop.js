const router = require('express').Router({ mergeParams: true });
const { getShopItems, getShopItem, createShopItem, updateShopItem, deleteShopItem } = require('../handlers/shop');

router
    .route("/")
    .post(createShopItem)
    .get(getShopItems)
    
router
    .route("/:id")
    .get(getShopItem)
    .put(updateShopItem)
    .delete(deleteShopItem)

module.exports = router;