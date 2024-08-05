const { BaseSwagLabPage } = require('./BaseSwagLab.page');

class InventoryPage extends BaseSwagLabPage {
    url = '/inventory.html';

    get headerTitle() {
        return $('.title');
    }

    get inventoryItems() {
        return $$('.inventory_item');
    }

    get addItemToCartButton() {
        return $$('[id^="add-to-cart"]');
    }

    async addItemToCartById(id) {
        await this.addItemToCartButton[id].click();
    }
}

module.exports = { InventoryPage };
