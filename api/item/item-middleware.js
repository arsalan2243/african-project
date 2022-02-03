const model = require("./item-model")
const db = require('../data/db-config')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../secrets')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) {
        next({ status: 401, message: 'You do not have access to this!'})
    } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                return next({ status: 401, message: 'Your token is invalid' })
            } else {
                req.decodedJwt = decoded
                next()
            }
        })
    }
}

const checkItemValid = (req, res, next) => {
  const { item_name, category, price, user_id, market_id } = req.body
  console.log(typeof price)
    if(!item_name) {
        next({status: 422, message: 'Item name is required!'})
    } else if(!category) {
        next({status: 422, message: 'Category is required!'})
    } else if(!price) {
        next({status: 422, message: 'Price is required!'})
    } else if(!user_id) {
        next({status: 422, message: 'User ID is required!'})
    } else if(!market_id) {
        next({status: 422, message: 'Market ID is required!'})
    } else if(typeof price !== 'number') {
        next({status:422, message: 'Price must be a number!'})
    } else {
        next()
  }
}

const checkUserExists = async (req, res, next) => {
    const exists = await db('users').where('user_id', req.body.user_id).first()
    if(exists){
        next()
    } else {
        next({status: 401, message: 'You must be a valid user!'})
    }
}


module.exports = {
    restricted,
    checkItemValid,
}
