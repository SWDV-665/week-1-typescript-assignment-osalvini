var Grocery = /** @class */ (function () {
    function Grocery() {
        this.items = {};
    }
    Grocery.prototype.addItem = function (productId, name, imageUrl, price, quantity) {
        if (quantity === void 0) { quantity = 1; }
        console.log('adding product: ', name, imageUrl, price, quantity);
        if (this.items[productId]) {
            this.items[productId].quantity += quantity;
        }
        else {
            this.items[productId] = { name: name, imageUrl: imageUrl, price: price, quantity: quantity };
        }
    };
    Grocery.prototype.removeItem = function (productId) {
        delete this.items[productId];
    };
    Grocery.prototype.getTotalPrice = function () {
        return Object.values(this.items).reduce(function (total, _a) {
            var price = _a.price, quantity = _a.quantity;
            return total + price * quantity;
        }, 0);
    };
    Grocery.prototype.getItems = function () { return this.items; };
    return Grocery;
}());
document.addEventListener("DOMContentLoaded", function () {
    var cart = new Grocery();
    console.log('Grocery Loaded 0');
    cart.addItem(1, "Milk", "assets/milk.jpeg", 4.75, 1);
    cart.addItem(2, "Bread", "assets/bread.jpeg", 5.86, 2);
    cart.addItem(3, "Eggs", "assets/eggs.jpeg", 3.47, 12);
    console.log('Grocery Loaded 1');
    var listElement = document.getElementById('grocery-list');
    console.log('Grocery Loaded 2');
    console.log(listElement);
    console.log('Grocery Loaded 3');
    var items = cart.getItems();
    console.log('Grocery Loaded 4');
    var containerElement = document.createElement('div');
    var imageElement = document.createElement('div');
    var nameElement = document.createElement('div');
    var quantityElement = document.createElement('div');
    var priceElement = document.createElement('div');
    var totalElement = document.createElement('div');
    totalElement.style.textAlign = 'right';
    totalElement.style.width = '200px';
    var imageNode = document.createTextNode("Image");
    var nameNode = document.createTextNode("Name");
    var quantityNode = document.createTextNode("Quantity");
    var priceNode = document.createTextNode("Price");
    var totalNode = document.createTextNode("Total");
    imageElement.style.fontWeight = 'bold';
    nameElement.style.fontWeight = 'bold';
    quantityElement.style.fontWeight = 'bold';
    priceElement.style.fontWeight = 'bold';
    totalElement.style.fontWeight = 'bold';
    imageElement.style.textAlign = 'center';
    nameElement.style.textAlign = 'left';
    quantityElement.style.textAlign = 'left';
    priceElement.style.textAlign = 'left';
    totalElement.style.textAlign = 'right';
    imageElement.appendChild(imageNode);
    nameElement.appendChild(nameNode);
    quantityElement.appendChild(quantityNode);
    priceElement.appendChild(priceNode);
    totalElement.appendChild(totalNode);
    containerElement.appendChild(imageElement);
    containerElement.appendChild(nameElement);
    containerElement.appendChild(quantityElement);
    containerElement.appendChild(priceElement);
    containerElement.appendChild(totalElement);
    listElement === null || listElement === void 0 ? void 0 : listElement.appendChild(containerElement);
    Object.values(items).forEach(function (_a) {
        var name = _a.name, imageUrl = _a.imageUrl, price = _a.price, quantity = _a.quantity;
        console.log('items: ', name, imageUrl, price, quantity);
        var containerElement = document.createElement('div');
        var imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = name;
        var nameElement = document.createElement('div');
        var quantityElement = document.createElement('div');
        var priceElement = document.createElement('div');
        var totalElement = document.createElement('div');
        totalElement.style.textAlign = 'right';
        totalElement.style.width = '150px';
        var nameNode = document.createTextNode("".concat(name));
        var quantityNode = document.createTextNode("".concat(quantity));
        var priceNode = document.createTextNode("$".concat(price));
        var totalNode = document.createTextNode("$".concat((quantity * price).toFixed(2)));
        nameElement.appendChild(nameNode);
        quantityElement.appendChild(quantityNode);
        priceElement.appendChild(priceNode);
        totalElement.appendChild(totalNode);
        containerElement.appendChild(imageElement);
        containerElement.appendChild(nameElement);
        containerElement.appendChild(quantityElement);
        containerElement.appendChild(priceElement);
        containerElement.appendChild(totalElement);
        listElement === null || listElement === void 0 ? void 0 : listElement.appendChild(containerElement);
    });
    var totalPriceElement = document.createElement('div');
    totalPriceElement.id = 'totalPrice';
    totalPriceElement.textContent = "Total: $".concat(cart.getTotalPrice());
    // Add this element to the document right before the script tag.
    var scriptTag = document.body.getElementsByTagName("script")[0];
    document.body.insertBefore(totalPriceElement, scriptTag);
});
