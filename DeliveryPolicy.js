var DeliveryPolicy = (function () {
    function DeliveryPolicy(user, price) {
        this.deliveryFee = 2500;
        this.user = user;
        this.price = price;
    }
    DeliveryPolicy.prototype.caluclateDeliveryFee = function () {
        if (this.user.hasKurlyPass && this.price > 20000) {
            return 0;
        }
        if (this.price > 40000) {
            return 0;
        }
        return this.deliveryFee;
    };
    return DeliveryPolicy;
})();
exports.DeliveryPolicy = DeliveryPolicy;
