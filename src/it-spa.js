import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import "./it-spa.scss";
import { createPopper } from "@popperjs/core";
import { Home } from "./views/Home";
import { NavBoot } from "./navigation/NavBoot";
import { dataMenager } from "./data/data-manager";
import { RoomList } from "./views/RoomList";
import { Booking } from "./views/Booking";
//picker
import "flatpickr/dist/flatpickr.min.css";






const main = document.querySelector("main");

//activate tooltips
// document.addEventListener("DOMContentLoaded", function(){
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//   var tooltipList = tooltipTriggerList.map(function(element){
//       return new bootstrap.Tooltip(element);
//   });
// });
//przyczepiamy nawigację przed elementem main

const guard = dataMenager.getAuthGuard();

if (guard === 1) {
  main.before(NavBoot(guard));
} else {
  main.before(NavBoot(guard));
}
//reakcja na zdarzenie 'navigate'
document.body.addEventListener("navigate", (event) => {
  const Component = event.detail;

  //czyścimy zawartość elementu main
  main.innerHTML = "";
  //następnie podstawiamy nowy komponent
  main.append(Component());
});
// const inputEmail = 'hec@m.com';
// const nick = 'elo';
// const password = 'pas';
room =   {
  "id": 3,
  "name": "Pokój trójkowy",
  "beds": 2,
  "guests": 3,
  "price": 290,
  "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
}
main.append(Booking(room));



// const Tooltip = new bootstrap.Tooltip();