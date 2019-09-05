import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = newItem => {
    const foundItem = this.items.find(
      item => newItem.drink === item.drink && newItem.option === item.option
    );
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.items.push(newItem);
    }
  };
  //   this.items.push(addItem);
  // };

  removeItemFromCart(item) {
    this.items = this.items.filter(cartItem => cartItem !== item);
  }

  checkoutCart() {
    this.items = [];
  }

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += items.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
