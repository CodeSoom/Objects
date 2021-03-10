export class Product {
  private price: number;
  private discountedPrice: number;

  constructor(price, discountedPrice) {
    this.price = price;
    this.discountedPrice = discountedPrice;
  }

  public getPrice() {
    return this.price;
  }

  public getDiscountedPrice() {
    return this.discountedPrice;
  }
}