const { InventoryPage } = require('./Inventory.page');
const { LoginPage } = require('./Login.page');
const { ShoppingCartPage } = require('./ShoppingCart.page');

module.exports = {
    app: {
        login: new LoginPage(),
        inventory: new InventoryPage(),
        shoppingCart: new ShoppingCartPage(),
    },
};
