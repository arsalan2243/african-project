const model = require("./item-model")
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
  const { item_name, category, price } = req.body
  if(!item_name, !category, !price) {
      next({status: 422, message: 'Name, Category, AND price are required!!'})
  } else if(typeof price !== 'number') {
    next({status:422, message: 'Price must be a number!'})
  } else {
    next()
  }
}

module.exports = {
    restricted,
    checkItemValid,
}
