const express = require("express")
const router = express.Router()
const Item = require("./item-model.js")
const {
    restricted,
    checkItemValid,
} = require("./item-middleware")

router.get('/', restricted, (req, res, next) => {
    Item.getItems()
        .then(items => {
            res.status(200).json(items)
        })
})

router.post('/', restricted, checkItemValid, (req, res, next) => {
    Item.addItem(req.body)
        .then(item => {
            console.log(item)
            res.status(201).json(item)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router
