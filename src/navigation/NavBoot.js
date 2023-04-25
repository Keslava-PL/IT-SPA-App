import { Home } from "../views/Home";
import { Cart } from "../views/Cart";
import { RoomList } from "../views/RoomList";

import { Treatments } from "../views/Treatments";
import { NavLink } from "../common/NavLink";
import { WelcomeDiv } from "./WelcomeDiv";
import { dataMenager } from "../data/data-manager";
import { createEl } from "../common/createEl";

import { Popover, Tooltip } from "bootstrap";
import { CartPopover } from "../views/CartPopover";

import { NavigateTo } from "../common/NavigateTo";

const navItems = [
  { name: "Strona domowa", component: Home },
  { name: "Pokoje", component: RoomList },
  { name: "Zabiegi", component: Treatments },
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
  navbarBrandImage.src = require("../assets/navBrand-2.png");
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

  const el = createEl("li", ["nav-item"], {
    "data-bs-toggle": "collapse",
    "data-bs-target": ".navbar-collapse",
  });

  const koszykButton = createEl("a", [, "nav-link"], {
    "data-bs-toggle": "popover",
    title: "Aktualne zakupy",
  });
  koszykButton.innerText = "Koszyk";

  el.append(koszykButton);
  lis.append(el);

  koszykButton.addEventListener("mouseenter", () => {
    const popover = new Popover(koszykButton, {
      title: "Aktualne zakupy",
      html: true,
      content: CartPopover(),
    });

    popover.show();
  });

  koszykButton.addEventListener("mouseleave", () => {
    const popover = Popover.getInstance(koszykButton);
    if (popover) {
      popover.hide();
    }
  });
  koszykButton.addEventListener("click", () => {
    NavigateTo(Cart);
  });

  //add navigation elements

  navigation.append(
    navbarBrandA,
    togglerButton,
    WelcomeDiv(user.nickname, authGuard),
    divNav
  );

  return navigation;
}
