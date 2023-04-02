// cart-manager.js

const key = 'it-spa-cart';

export const cartManager = {

  addItem(item, type) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1, typeOfService: type  }
      };
    }
    else {
      content = JSON.parse(cart);
      // np. { 'Pokój unarny': { price: 170, quantity: 2 } }
      
      // if (content.hasOwnProperty(item.name))
      if (item.name in content) {
        content[item.name].quantity += 1;
      }
      else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1, typeOfService: type }
        };

        // doklada nowy wpis (klucz: wartosc) do obiektu `content`
        Object.assign(content, newItem);
      }
    }
    
    localStorage.setItem(key, JSON.stringify(content));
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        }
        else {
          delete content[item.name];
        }
      }

      localStorage.setItem(key, JSON.stringify(content));
    }
  },
  plusQuantity(item){
    const cart = localStorage.getItem(key);
    if(cart !== null){
        const content = JSON.parse(cart);

        if(item.name in content){
            if(content[item.name].quantity > 0){
                content[item.name].quantity +=1; 
            }
        }
        localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    }
    else {
      const content = JSON.parse(cart);

      // entry to jest [KLUCZ, WARTOSC]
      return Object.entries(content).map(entry => {
        const [itemName, itemDetails] = entry;

        return {
          name: itemName,
          price: itemDetails.price,
          quantity: itemDetails.quantity
        };
      });
    }
  },
  getAllItemsCheck(){
    const cart = localStorage.getItem(key);

    if(cart === null)
        {
           return 0;
        }
        else{
            return 1;
        }
       
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);


    if (cart === null) {
      return '0.00';
    }
    else {
      const content = JSON.parse(cart);

      // [{ price, quantity }, { price, quantity },  { price, quantity }, ...]
      return Object
              .values(content)
              .reduce((totalPrice, item) => {
                return totalPrice + item.price * item.quantity;
              }, 0)
              .toFixed(2);
    }
  }

};
