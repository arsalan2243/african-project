const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const user_router = require("./user/user-router")
const item_router = require("./item/item_router")
const market_router = require('./market/market-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/user", user_router)
server.use("/api/item", item_router)
server.use('/api/market', market_router)
//eslint-disable-next-line
server.use("*", (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: "something went wrong",
  })
})
module.exports = server
// .............................
// ..
