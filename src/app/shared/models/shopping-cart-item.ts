export class ShoppingCartItem {
  imageUrl: string;
  key: string;
  price: number;
  quantity: number;
  title: string;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}
