// Cart.js

import { cartManager } from "../cart/cart-manager";
import { createEl } from "../common/createEl";
import { NavButton } from "../common/NavButton";

export function Cart() {
  const container = createEl("div");
  container.innerHTML = `<h2>Koszyk:</h2>`;

  const section = document.createElement("section");

  if (cartManager.checkRooms() === 0 && cartManager.checkTreatments() === 0) {
    section.innerHTML = `
    <h4 class = "header" >Koszyk jest pusty</h4>
    <table class="table"></table>
    
`;
    container.append(section);
    return container;
  } else {
    if (cartManager.checkRooms() === 0) {
      section.innerHTML = ` <h5 style = "color: red; padding-left: 50px">Brak zarezerwowanych pokoi</h5>`;
    } else {
      section.innerHTML = `
        <h4 class = "header" >Zarezerwowane pokoje:</h4>
        <table class="table"></table>
       
        
    `;
      const tableHead = document.createElement("tr");

      tableHead.innerHTML = `
        <th>Nazwa</th>
        <th>Ilość dni</th>
        <th>Cena za noc</th>
        <th>Usuń</th>
    `;

      const tableRows = cartManager.getAllRooms().map((item) => {
        const tr = document.createElement("tr");
        if (item === []) {
        } else {
          tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price.toFixed(2)} PLN</td>
        <td></td>
        `;
          const removeItem = NavButton(
            "🗑",
            () => {
              cartManager.removeAllRooms(item);
              return Cart();
            },
            ["btn"]
          );
          tr.lastElementChild.append(removeItem);
        }
        return tr;
      });
      section.querySelector(".table").append(tableHead, ...tableRows);
    }

    //treatments section
    const sectionTreat = createEl("section");

    if (cartManager.checkTreatments() === 0) {
      sectionTreat.innerHTML = `
    <h5 class = "header" style = "color: red; padding-left: 50px;" >Brak zarezerwowanych zabiegów</h5>
    <table class="table"></table>
 
    <footer></footer>
    `;
    } else {
      sectionTreat.innerHTML = `
  <h4 class = "header">Zarezerwowane zabiegi:</h4>
  <table class="table"></table>
 
  <footer></footer>
  `;
      const tableHeadTreat = createEl("tr");
      tableHeadTreat.innerHTML = `
        <th>Nazwa</th>
        <th>Ilość dni</th>
        <th>Cena za zabieg</th>
        <th>Zmień ilość</th>
    `;

      const tableRowsTreat = cartManager.getAllItems().map((item) => {
        const tr = createEl("tr");

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
        tr.lastElementChild.append(removeItem);
        tr.lastElementChild.append(plusItem);
        return tr;
      });

      sectionTreat
        .querySelector(".table")
        .append(tableHeadTreat, ...tableRowsTreat);
    }

    const tableFooter = document.createElement("tr");

    tableFooter.innerHTML = `
        <td></td>
        <td></td>
        <td style="padding-top: 3vw">
        Podsumowanie = <strong>${cartManager.getTotalPrice()} PLN</strong> 
        </td>
        <td></td>
    `;
    sectionTreat.querySelector(".table").append(tableFooter);

    // Go to checkout button
    const checkoutButton = document.createElement("button");
    checkoutButton.innerText = "Go to Pay";
    checkoutButton.classList.add("btn", "btn-primary");

    checkoutButton.addEventListener("click", () => {});

    sectionTreat.querySelector("footer").append(checkoutButton);

    sectionTreat.querySelector(".table").append(tableFooter);

    container.append(section, sectionTreat);

    return container;
  }
}
