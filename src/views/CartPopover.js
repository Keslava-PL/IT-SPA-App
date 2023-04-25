import { cartManager } from "../cart/cart-manager";
import { createEl } from "../common/createEl";

export function CartPopover() {
  const container = createEl("div", ["popover-container"]);

  if (cartManager.checkRooms() === 0 && cartManager.checkTreatments() === 0) {
    container.innerHTML = `<h5 style = " color:red">Koszyk jest pusty</h5>`;

    return container;
  } else {
    const tableR = createEl("table", ["table", "table-sm", "table-hover"]);
    const table = createEl("table", ["table", "table-sm", "table-hover"]);

    if (cartManager.checkRooms() === 0) {
      const infoRoom = createEl("h6");
      infoRoom.innerText = "Brak zarezerwowanych pokoi";
      infoRoom.style = "color: red";

      container.append(infoRoom);
    } else {
      const theadR = createEl("thead");
      theadR.innerHTML = `<tr>
      <th scope="col">Pokój</th>
      <th scope="col">Dni</th>
      <th scope="col">Kwota</th>
    </tr>`;
      tableR.append(theadR);

      const tbodyR = createEl("tbody");

      const tableRowsR = cartManager.getAllRooms().map((item) => {
        const tr = createEl("tr");

        tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price.toFixed(2)} PLN</td>`;

        return tr;
      });

      tbodyR.append(...tableRowsR);
      tableR.append(tbodyR);

      container.append(tableR);
    }

    if (cartManager.checkTreatments() === 0) {
      const infoTreat = createEl("h6");
      infoTreat.innerText = "Brak zarezerwowanych zabiegów";
      infoTreat.style = "color: red";
      container.append(infoTreat);
    } else {
      const thead = createEl("thead");
      thead.innerHTML = `<tr>
      <th scope="col">Zabieg</th>
      <th scope="col">Ilość</th>
      <th scope="col">Kwota</th>
    </tr>`;
      table.append(thead);

      const tbody = createEl("tbody");

      const tableRows = cartManager.getAllItems().map((item) => {
        const tr = createEl("tr");

        tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price.toFixed(2)} PLN</td>`;

        return tr;
      });

      tbody.append(...tableRows);
      table.append(tbody);

      container.append(table);
    }
    const summary = createEl("tr", ["table-footer"]);
    summary.innerHTML = `
    <td></td>
    <td>W sumie</td>
    <td> <strong> ${cartManager.getTotalPrice()} </strong> PLN </td>`;

    container.append(summary);

    return container;
  }
}
