import { DiscountCoupon } from "./DiscountCoupon.interface";

export class PrecentDiscountCoupon implements DiscountCoupon {
  private percent: number;

  constructor(percent: number) {
    this.percent = percent;
  }

  appliedPrice(price: number) {
    return price * (1 - this.percent);
  }
}