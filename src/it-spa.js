import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import "./it-spa.scss";
import { createPopper } from "@popperjs/core";

import { Home } from "./views/Home";
import { NavBoot } from "./navigation/NavBoot";
import { dataMenager } from "./data/data-manager";

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
main.append(Home());



// const Tooltip = new bootstrap.Tooltip();