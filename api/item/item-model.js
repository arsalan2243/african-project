const db = require('../data/db-config')

function getItems() {
    return db('items')
}

async function addItem(item) { 
        const [newItem] = await db('items').insert(item, [
            'item_id',
            'item_name',
            'description',
            'category',
            'price'
        ])
        return newItem
         
}

module.exports = {
    getItems,
    addItem,
}