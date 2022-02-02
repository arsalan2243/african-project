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
  if(!item_name, !category, !price, !user_id, !market_id) {
      next({status: 422, message: 'Name, Category, Price, User_id, and Market_id are required!!'})
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
