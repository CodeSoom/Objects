var PrecentDiscountCoupon = (function () {
    function PrecentDiscountCoupon(percent) {
        this.percent = percent;
    }
    PrecentDiscountCoupon.prototype.appliedPrice = function (price) {
        return price * (1 - this.percent);
    };
    return PrecentDiscountCoupon;
})();
exports.PrecentDiscountCoupon = PrecentDiscountCoupon;
