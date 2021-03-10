import { User } from "./User";

export class DeliveryPolicy {
  private deliveryFee: number = 2500;

  private user;
  private price;

  constructor(user, price) {
    this.user = user;
    this.price = price;
  }

  caluclateDeliveryFee(): number {
    if (this.user.hasKurlyPass && this.price > 20000) {
      return 0;
    }

    if (this.price > 40000) {
      return 0;
    }

    return this.deliveryFee;
  }
}