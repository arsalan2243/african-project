const express = require("express")
const router = express.Router()
const Market = require('./market-model')
const { restricted } = require('../item/item-middleware')

router.get('/', restricted, (req, res, next) => {
    Market.getMarkets()
        .then(markets => {
            res.status(200).json(markets)
        })
        .catch(err => {
            next(err)
        }) 
})

module.exports = router