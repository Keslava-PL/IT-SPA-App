// RoomList.js

import { RoomDetails } from "./RoomDetails";
import { NavButton } from "../common/NavButton";
import { Booking } from "./Booking";

export function RoomList() {
  const section = document.createElement("section");
  const ul = document.createElement("ul");

  section.innerHTML = `
    <h2 class = "header">Dostępne pokoje</h2>
    <p class = "header">Sprawdź ofertę pokoi.</p>
    <p class="loading">Ładuję listę pokoi...</p>
    <div class ="room-list"></div>

  `;

  // pobieramy liste pokoi z serwera
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      const lis = rooms.map((room) => {
        //determining type of service;
        const type = "roomList";

        const li = document.createElement("li");

        li.innerHTML = `
            <h4>${room.name}</h4>
            <p>
              <strong>${room.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

        const detailsButton = NavButton(
          "Read more...",
          () => RoomDetails(room.id),
          ["btn", "btn-secondary"]
        );
        const bookingButton = NavButton("Zarezerwuj", () => Booking(room), [
          "btn",
          "btn-secondary",
        ]);
        li.querySelector("footer").append(detailsButton, bookingButton);

        return li;
      });

      ul.append(...lis);

      // usuwamy element mowiacy o ladowaniu
      section.querySelector(".loading").remove();
      // podstawiamy gotowa liste z pokojami
      //section.append(ul);
      section.querySelector(".room-list").append(ul);
    });

  return section;
}
