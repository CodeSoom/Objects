var Cart = (function () {
    function Cart(products) {
        this.products = products;
    }
    Cart.prototype.getProducts = function () {
        return this.products;
    };
    Cart.prototype.calculatePrice = function () {
        return this.products
            .reduce(function (acc, cur) { return acc + cur.getPrice(); }, 0);
    };
    Cart.prototype.calculateDiscountedPrice = function () {
        return this.products
            .reduce(function (acc, cur) { return acc + cur.getDiscountedPrice(); }, 0);
    };
    return Cart;
})();
exports.Cart = Cart;
