// 주문
// 택배배송, 샛별배송(오후 11시 이전에 주문, 서울)
var Cart_1 = require("./Cart");
var DeliveryPolicy_1 = require("./DeliveryPolicy");
var PercentDiscount_1 = require("./PercentDiscount");
var Product_interface_1 = require("./Product.interface");
var User_1 = require("./User");
var Address = (function () {
    function Address(address) {
        this.address = address;
    }
    Address.prototype.isDawnRegion = function () {
        return /서울/.test(this.address);
    };
    return Address;
})();
var Order = (function () {
    function Order(cart, coupon, user, address) {
        this.orderAt = new Date();
        this.cart = cart;
        this.coupon = coupon;
        this.user = user;
        this.address = address;
    }
    // 주문하라
    Order.prototype.order = function () {
        // 금액을 계산하라
        var price = this.cart.calculatePrice();
        // 할인 금액을 계산하라
        var discountedPrice = price - this.cart.calculateDiscountedPrice();
        // 쿠폰을 적용해라
        var finalPrice = this.coupon.appliedPrice(discountedPrice);
        // 배송비
        var deliveryFee = new DeliveryPolicy_1.DeliveryPolicy(this.user, finalPrice)
            .caluclateDeliveryFee();
        // 배송 방법을 정해라
        var method = this.shippingMethod();
        return {
            price: price,
            discountedPrice: discountedPrice,
            products: this.cart.getProducts(),
            finalPrice: finalPrice,
            deliveryFee: deliveryFee,
            method: method
        };
    };
    Order.prototype.shippingMethod = function () {
        if (this.orderAt.getHours() < 23 && this.address.isDawnRegion()) {
            return '샛별배송';
        }
        return '일반택배';
    };
    return Order;
})();
var products = [
    new Product_interface_1.Product(10000, 1000),
    new Product_interface_1.Product(20000, 500),
];
var cart = new Cart_1.Cart(products);
var o = new Order(cart, new PercentDiscount_1.PrecentDiscountCoupon(0.2), new User_1.User(true), new Address('하남'));
var orderSheet = o.order();
console.log(orderSheet);
