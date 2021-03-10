var Product = (function () {
    function Product(price, discountedPrice) {
        this.price = price;
        this.discountedPrice = discountedPrice;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getDiscountedPrice = function () {
        return this.discountedPrice;
    };
    return Product;
})();
exports.Product = Product;
