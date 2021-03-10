var PriceDiscountCoupon = (function () {
    function PriceDiscountCoupon(discountPrice) {
        this.discountPrice = discountPrice;
    }
    PriceDiscountCoupon.prototype.appliedPrice = function (price) {
        return price - this.discountPrice;
    };
    return PriceDiscountCoupon;
})();
exports.PriceDiscountCoupon = PriceDiscountCoupon;
