import { Home } from "../views/Home";
import { Cart } from "../views/Cart";
import { RoomList } from "../views/RoomList";
import { Registration } from "../views/Registration";
import { Treatments } from "../views/Treatments";
import { NavLink } from "../common/NavLink";
import { WelcomeDiv } from "./WelcomeDiv";
import { dataMenager } from "../data/data-manager";
import { createEl } from "../common/createEl";
import { cartTooltips } from "./cartTooltips";
import { Tooltip } from "bootstrap";

const navItems = [
  { name: "Home", component: Home },
  { name: "Rooms", component: RoomList },
  { name: "Treatments", component: Treatments },
  { name: "Cart 🛒", component: Cart },
];

export function NavBoot(authGuard) {
  let user;
  if (authGuard === 1) {
    user = dataMenager.getLoggedUser();
    //jakieś
  } else {
    user = "";
  }

  //creat navigation navbar

  const navigation = createEl("nav", [
    "navigation",
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "fixed-top",
  ]);

  //add Brand anchor
  const navbarBrandA = createEl("a", ["navbar-brand"]);

  //add src image to navbar
  const navbarBrandImage = createEl("img", [], { alt: "Logo.png" });
  // const navbarBrandImage = document.createElement('img');
  navbarBrandImage.src = require("../assets/navBrand.png");
  // navbarBrandImage.alt = 'Logo.png';

  navbarBrandA.append(navbarBrandImage);

  //add toggler button
  const togglerButton = createEl("button", ["navbar-toggler"], {
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
  });
  //add toggler Icon
  const togglerIcon = document.createElement("span");
  togglerIcon.classList.add("navbar-toggler-icon");

  togglerButton.append(togglerIcon);

  //create main div of nav
  const divNav = document.createElement("div");
  divNav.classList.add("collapse", "navbar-collapse");
  //divNav.id = 'navbarResponsive'
  divNav.setAttribute("id", "navbarResponsive");

  //create list component of nav's elements
  const lis = document.createElement("ul");
  lis.classList.add("navbar-nav", "ml-auto");

  //add links to nav list
  const navLinks = navItems.map((navItem) => {
    return NavLink(navItem.name, navItem.component);
  });

  lis.append(...navLinks);

  divNav.append(lis);

  const cartButton = cartTooltips("Koszyk");

  lis.append(cartButton);
  //const cart = document.querySelector()

  //create

  //add navigation elements

  navigation.append(
    navbarBrandA,
    togglerButton,
    WelcomeDiv(user.nickname, authGuard),
    divNav
  );
  // document.readyState(function(){
  //   '[data-toggle="tooltip"]'.Tooltip();
  // })



  return navigation;
}
