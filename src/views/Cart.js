// Cart.js

import { cartManager } from "../cart/cart-manager";
import { NavButton } from "../common/NavButton";
import { Checkout } from "./Checkout";

export function Cart() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2 class = "header">Cart</h2>
        <p class = "header">Przeglądaj zawartość koszyka:</p>
        <table class="table"></table>
       
        <footer></footer>
    `;

  const tableHead = document.createElement("tr");

  tableHead.innerHTML = `
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th></th>
    `;
  //<btn class="plusButton"></btn>

  const tableRows = cartManager.getAllItems().map((item) => {
    //const plusButton = document.createElement('button');
    //plusButton.classList.add('plusButton');

    const tr = document.createElement("tr");

    //minus icon item -- usuwanie wartosci o jeden dla elementu
    const removeItem = NavButton(
      "➖",
      () => {
        cartManager.removeItem(item);
        return Cart();
      },
      ["btn"]
    );

    //plus icon item -- dodawanie jednej wartosci dla elementu
    const plusItem = NavButton(
      "✚",
      () => {
        cartManager.plusQuantity(item);
        return Cart();
      },
      ["btn"]
    );

    tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price.toFixed(2)} PLN</td>
        <td></td>
        `;
    tr.lastElementChild.append(plusItem);
    tr.lastElementChild.append(removeItem);

    return tr;
  });

  const tableFooter = document.createElement("tr");

  tableFooter.innerHTML = `
        <td></td>
        <td></td>
        <td>
        Total = <strong>${cartManager.getTotalPrice()}</strong> PLN
        </td>
        <td></td>
    `;

  //tworzenie przycisku Podsumowanie

  

  const checkoutButton = document.createElement("button");
  checkoutButton.innerText = "Go to Checkout";
 checkoutButton.classList.add("btn", "btn-primary");


  checkoutButton.addEventListener('click', () => {
    
  });

  section.querySelector('footer').append(checkoutButton);

  // kompletujemy zawartosc tabeli
  section.querySelector(".table").append(tableHead, ...tableRows, tableFooter);

  return section;
}
