const db = require('../data/db-config')

function getMarkets() {
    return db('markets')
}

module.exports = {
    getMarkets
}