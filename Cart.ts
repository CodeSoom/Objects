import { Product } from './Product.interface';

export class Cart {
  private products: Product[];

  constructor(products: Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

  calculatePrice(): number {
    return this.products
      .reduce((acc, cur) => acc + cur.getPrice(), 0);
  }

  calculateDiscountedPrice(): number {
    return this.products
      .reduce((acc, cur) => acc + cur.getDiscountedPrice(), 0);
  }
}
