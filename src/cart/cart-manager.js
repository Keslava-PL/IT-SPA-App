// cart-manager.js

import { isEmptyObject } from "jquery";

const key = "it-spa-cart";
const keyRoom = "it-spa-room";

export const cartManager = {
  addItem(item, type) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1, typeOfService: type },
      };
    } else {
      content = JSON.parse(cart);
      // np. { 'Pokój unarny': { price: 170, quantity: 2 } }

      // if (content.hasOwnProperty(item.name))
      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1, typeOfService: type },
        };

        // doklada nowy wpis (klucz: wartosc) do obiektu `content`
        Object.assign(content, newItem);
      }
    }

    localStorage.setItem(key, JSON.stringify(content));
  },
  addRoom(item) {
    const cart = localStorage.getItem(keyRoom);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1 },
      };
    } else {
      content = JSON.parse(cart);
      // np. { 'Pokój unarny': { price: 170, quantity: 2 } }

      // if (content.hasOwnProperty(item.name))
      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1 },
        };

        // doklada nowy wpis (klucz: wartosc) do obiektu `content`
        Object.assign(content, newItem);
      }
    }

    localStorage.setItem(keyRoom, JSON.stringify(content));
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }

      localStorage.setItem(key, JSON.stringify(content));
    }
  },
  removeAllRooms(item) {
    const cart = localStorage.getItem(keyRoom);

    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          delete content[item.name];
        }
      }

      localStorage.setItem(keyRoom, JSON.stringify(content));
    }
  },
  plusQuantity(item) {
    const cart = localStorage.getItem(key);
    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 0) {
          content[item.name].quantity += 1;
        }
      }
      localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      const content = JSON.parse(cart);

      // entry to jest [KLUCZ, WARTOSC]
      return Object.entries(content).map((entry) => {
        const [itemName, itemDetails] = entry;

        return {
          name: itemName,
          price: itemDetails.price,
          quantity: itemDetails.quantity,
        };
      });
    }
  },
  checkRooms() {
    const cart = localStorage.getItem(keyRoom);
    if (cart === "{}" || cart === null) {
      return 0;
    } else {
      return 1;
    }
  },
  checkTreatments() {
    const cart = localStorage.getItem(key);

    if (cart === "{}" || cart === null) {
      return 0;
    } else {
      return 1;
    }
  },
  getAllRooms() {
    const cart = localStorage.getItem(keyRoom);

    if (cart === null) {
      return [];
    } else {
      const content = JSON.parse(cart);

      // entry to jest [KLUCZ, WARTOSC]
      return Object.entries(content).map((entry) => {
        const [itemName, itemDetails] = entry;

        return {
          name: itemName,
          price: itemDetails.price,
          quantity: itemDetails.quantity,
        };
      });
    }
  },
  getAllItemsCheck() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return 0;
    } else {
      return 1;
    }
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);
    const rooms = localStorage.getItem(keyRoom);

    if (cart === null && rooms === null) {
      return "0.00";
    } else {
      const content = JSON.parse(cart);
      const contentRoom = JSON.parse(rooms);
      let summary = 0;

      if (content !== null) {
        const contentTotal = Object.values(content);

        summary += Number(
          contentTotal
            .reduce((totalPrice, item) => {
              return totalPrice + item.price * item.quantity;
            }, 0)
            .toFixed(2)
        );
      }

      if (contentRoom !== null) {
        const roomsTotal = Object.values(contentRoom);

        summary += Number(
          roomsTotal
            .reduce((totalPrice, item) => {
              return totalPrice + item.price * item.quantity;
            }, 0)
            .toFixed(2)
        );
      }

      return summary;
    }
  },
};
