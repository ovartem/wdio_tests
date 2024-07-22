const { app } = require('../pages/Application');

describe('Saucedemo app basic tests', () => {
    it('should login successfully', async () => {
        await app.login.navigate();
        await app.login.performLogin('standard_user', 'secret_sauce');

        await expect(app.inventory.headerTitle).toBeExisting();
        await expect(app.inventory.inventoryItems).toBeElementsArrayOfSize({
            gte: 1,
        });
    });

    it('should add and remove product from the cart', async () => {
        await app.login.navigate();
        await app.login.performLogin('standard_user', 'secret_sauce');

        await app.inventory.addItemToCartById(0);
        await expect(app.inventory.shoppingCartBadge).toHaveText('1');

        await app.inventory.shoppingCart.click();
        await expect(app.shoppingCart.cartItems).toBeElementsArrayOfSize(1);

        await app.shoppingCart.removeCartItemById(0);
        await expect(app.shoppingCart.cartItems).toBeElementsArrayOfSize(0);
    });
});
