import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = addItem => {
    const foundItem = this.items.find(
      cartItem => cartItem.drink == item.drink && cartItem.option == item.option
    );
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.items.push(addItem);
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
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
