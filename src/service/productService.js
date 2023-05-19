
const { query } = require('../client/postgresql');

const getProducts = async () => {
    const products = query('select * from products');
    return products;
};

module.exports = {
    getProducts
};