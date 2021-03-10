// 주문
// 택배배송, 샛별배송(오후 11시 이전에 주문, 서울)

import { Cart } from "./Cart";
import { DeliveryPolicy } from "./DeliveryPolicy";
import { DiscountCoupon } from "./DiscountCoupon.interface";
import { PrecentDiscountCoupon } from "./PercentDiscount";
import { PriceDiscountCoupon } from "./PriceDiscount";
import { Product } from "./Product.interface";
import { User } from "./User";

// 주문하라 ->  [   ]
//  주문서  <=

// 판매자
// 마켓컬리
// 장바구니
// 쿠폰(%쿠폰 원쿠폰)
// 컬리패스(20000), 일반(40000),


interface OrderSheet {
  price: number;
  discountedPrice: number;
  products: Product[],
  finalPrice: number;
  deliveryFee: number;
  method: string,
}

class Address {
  private address: string;

  constructor(address) {
    this.address = address;
  }

  isDawnRegion() {
    return /서울/.test(this.address);
  }
}

class Order {
  orderAt: Date = new Date();
  cart: Cart;
  coupon: DiscountCoupon;
  user: User;
  address: Address;

  constructor(
    cart: Cart,
    coupon: DiscountCoupon,
    user: User,
    address: Address
  ) {
    this.cart = cart;
    this.coupon = coupon;
    this.user = user;
    this.address = address;
  }
  // 주문하라
  order(): OrderSheet {
    // 금액을 계산하라
    const price = this.cart.calculatePrice();
    // 할인 금액을 계산하라
    const discountedPrice = price - this.cart.calculateDiscountedPrice();
    // 쿠폰을 적용해라
    const finalPrice = this.coupon.appliedPrice(discountedPrice);
    // 배송비
    const deliveryFee = new DeliveryPolicy(this.user, finalPrice)
      .caluclateDeliveryFee();

    // 배송 방법을 정해라
    const method = this.shippingMethod();

    return {
      price,
      discountedPrice,
      products: this.cart.getProducts(),
      finalPrice,
      deliveryFee,
      method,
    };
  }

  shippingMethod() {
    if (this.orderAt.getHours() < 23 && this.address.isDawnRegion()) {
      return '샛별배송';
    }

    return '일반택배';
  }
}

const products = [
  new Product(10000, 1000),
  new Product(20000, 500),
];

const cart = new Cart(products);
const o = new Order(
  cart,
  new PrecentDiscountCoupon(0.2),
  new User(true),
  new Address('하남')
);

const orderSheet = o.order();
console.log(orderSheet);