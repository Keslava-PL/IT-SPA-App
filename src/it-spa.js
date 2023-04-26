import "bootstrap/dist/css/bootstrap.css";

import "./it-spa.scss";
import { Home } from "./views/Home";
import { NavBoot } from "./navigation/NavBoot";
import { dataMenager } from "./data/data-manager";

//picker
import "flatpickr/dist/flatpickr.min.css";
import { Treatments } from "./views/Treatments";

const main = document.querySelector("main");

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

main.append(Treatments());


