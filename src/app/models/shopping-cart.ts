import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    for (const productId in itemsMap) {
      if (itemsMap.hasOwnProperty(productId)) {
        const item = itemsMap[productId];
        this.items.push(new ShoppingCartItem(item.product, item.quantity));
      }
    }
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.key];

    const res =
      item ? item.quantity :
      0;

    return res;
  }

  get totalPrice() {
    let sum = 0;
    for (const productId in this.items) {
      if (this.items.hasOwnProperty(productId)) {
        sum += this.items[productId].totalPrice;
      }
    }
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (const productId in this.items) {
      if (this.items.hasOwnProperty(productId)) {
        count += this.items[productId].quantity;
      }
    }
    return count;
  }
}
