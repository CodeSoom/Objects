import { DiscountCoupon } from "./DiscountCoupon.interface";

export class PriceDiscountCoupon implements DiscountCoupon {
  private discountPrice: number

  constructor(discountPrice: number) {
    this.discountPrice = discountPrice;
  }

  appliedPrice(price: number) {
    return price - this.discountPrice;
  }
}